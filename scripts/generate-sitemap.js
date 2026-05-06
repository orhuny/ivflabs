/**
 * Generates sitemap.xml + per-language hreflang sitemap and a human-readable
 * inventory. Pulls treatment data straight from pages/treatments/ so newly
 * added treatments are picked up automatically.
 *
 * Run: node scripts/generate-sitemap.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DATA_DIR = join(ROOT, 'data');

const BASE_URL = 'https://dogusivf.net';
const LANGS = ['tr', 'en', 'de', 'ru', 'ar'];

// Treatments are TS source. We import them indirectly by reading the slug + id
// from each file using a cheap regex parse — no TS compiler needed at build
// time. This keeps the sitemap script dependency-free.
function loadTreatments() {
  const dir = join(ROOT, 'pages', 'treatments');
  const indexFile = join(dir, 'index.ts');
  const indexSrc = readFileSync(indexFile, 'utf8');
  const importLines = indexSrc.match(/^import\s+\w+\s+from\s+'\.\/([\w-]+)';/gm) || [];
  const files = importLines
    .map((l) => l.match(/'\.\/([\w-]+)'/)[1])
    .map((name) => join(dir, `${name}.ts`));

  const treatments = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const idMatch = src.match(/\bid:\s*'([\w-]+)'/);
    const slugBlock = src.match(/slug:\s*\{([\s\S]*?)\}/);
    const titleBlock = src.match(/title:\s*\{([\s\S]*?)\},\n\s*seoTitle:/);
    if (!idMatch || !slugBlock) continue;
    const slug = {};
    for (const lang of LANGS) {
      const m = slugBlock[1].match(new RegExp(`${lang}:\\s*'([^']+)'`));
      if (m) slug[lang] = m[1];
    }
    const title = {};
    if (titleBlock) {
      for (const lang of LANGS) {
        const m = titleBlock[1].match(new RegExp(`${lang}:\\s*'([^']+)'`));
        if (m) title[lang] = m[1];
      }
    }
    treatments.push({ id: idMatch[1], slug, title, file });
  }
  return treatments;
}

function buildUrls(treatments) {
  const urls = [];
  // Static pages per language
  const staticPaths = ['', '/treatments', '/about', '/contact', '/blog'];
  for (const lang of LANGS) {
    for (const path of staticPaths) {
      urls.push(`${BASE_URL}/${lang}${path}`);
    }
  }
  // Treatment detail pages per language
  for (const t of treatments) {
    for (const lang of LANGS) {
      const slug = t.slug[lang];
      if (slug) urls.push(`${BASE_URL}/${lang}/treatments/${slug}`);
    }
  }
  return urls;
}

function urlElementWithHreflang(url, alternates) {
  const altLines = alternates
    .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${escapeXml(a.url)}"/>`)
    .join('\n');
  const xDefault = alternates.find((a) => a.lang === 'en') ?? alternates[0];
  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <changefreq>weekly</changefreq>
${altLines}
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault.url)}"/>
  </url>`;
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function main() {
  const treatments = loadTreatments();
  const urls = buildUrls(treatments);

  // Build hreflang groups: every treatment URL gets its 5-language alternates.
  const sections = [];
  // 1) Static pages, grouped per page across languages
  const staticPages = ['', '/treatments', '/about', '/contact', '/blog'];
  for (const path of staticPages) {
    const alternates = LANGS.map((lang) => ({ lang, url: `${BASE_URL}/${lang}${path}` }));
    for (const a of alternates) sections.push(urlElementWithHreflang(a.url, alternates));
  }
  // 2) Treatment pages, grouped per treatment across languages
  for (const t of treatments) {
    const alternates = LANGS.filter((l) => t.slug[l]).map((lang) => ({
      lang,
      url: `${BASE_URL}/${lang}/treatments/${t.slug[lang]}`,
    }));
    for (const a of alternates) sections.push(urlElementWithHreflang(a.url, alternates));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sections.join('\n')}
</urlset>`;

  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log(`Wrote public/sitemap.xml with ${urls.length} URLs (${treatments.length} treatments × ${LANGS.length} langs + static).`);

  // robots.txt — point search engines at the sitemap.
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
  writeFileSync(join(PUBLIC_DIR, 'robots.txt'), robots, 'utf8');
  console.log('Wrote public/robots.txt');

  // Human-readable inventory
  mkdirSync(DATA_DIR, { recursive: true });
  let md = `# Sitemap Inventory\n\nGenerated ${new Date().toISOString()} — ${urls.length} URLs.\n\n`;
  md += '## Static pages\n\n';
  for (const path of staticPages) {
    md += `- \`${path || '/'}\` — ${LANGS.map((l) => `[${l}](${BASE_URL}/${l}${path})`).join(' · ')}\n`;
  }
  md += '\n## Treatment pages\n\n';
  for (const t of treatments) {
    md += `### ${t.id}\n`;
    for (const lang of LANGS) {
      const slug = t.slug[lang];
      const title = t.title[lang] || '-';
      if (slug) md += `- **${lang}** — [${title}](${BASE_URL}/${lang}/treatments/${slug})\n`;
    }
    md += '\n';
  }
  writeFileSync(join(DATA_DIR, 'sitemap-inventory.md'), md, 'utf8');
  console.log('Wrote data/sitemap-inventory.md');
}

main();
