/**
 * Generates sitemap.xml + per-language hreflang sitemap and a human-readable
 * inventory. Pulls treatment data straight from pages/treatments/ so newly
 * added treatments are picked up automatically.
 *
 * Run: node scripts/generate-sitemap.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DATA_DIR = join(ROOT, 'data');

const BASE_URL = 'https://dogusivf.net';
const LANGS = ['tr', 'en', 'de', 'ru', 'ar'];

// Last-modified date (YYYY-MM-DD) of a file according to git history.
// Falls back to today when the file has no committed history yet.
function gitLastMod(file) {
  try {
    const rel = relative(ROOT, file).replace(/\\/g, '/');
    const cmd = rel
      ? `git log -1 --format=%cI -- "${rel}"`
      : 'git log -1 --format=%cI';
    const out = execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) return out.slice(0, 10);
  } catch {
    // ignore — fall through to today
  }
  return new Date().toISOString().slice(0, 10);
}

// Blog posts are defined inline in constants.tsx as a single array. We
// extract their ids and dates with a simple regex — same idea as treatments below.
function loadBlogPosts() {
  const file = join(ROOT, 'constants.tsx');
  const src = readFileSync(file, 'utf8');
  // Find the BLOG_POSTS array section and extract IDs from it.
  const blogStart = src.indexOf('export const BLOG_POSTS');
  if (blogStart < 0) return [];
  const blogSrc = src.slice(blogStart);
  // Pair each post id with the date that follows it in the same object.
  const matches = [...blogSrc.matchAll(/\bid:\s*'([a-z0-9-]+)'[\s\S]*?\bdate:\s*'(\d{4}-\d{2}-\d{2})'/g)];
  const seen = new Set();
  const posts = [];
  for (const m of matches) {
    if (seen.has(m[1])) continue;
    seen.add(m[1]);
    posts.push({ id: m[1], lastmod: m[2] });
  }
  return posts;
}

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

function buildUrls(treatments, blogPosts) {
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
  // Blog post pages per language (single id used across all langs)
  for (const post of blogPosts) {
    for (const lang of LANGS) {
      urls.push(`${BASE_URL}/${lang}/blog/${post.id}`);
    }
  }
  return urls;
}

function urlElementWithHreflang(url, alternates, lastmod) {
  const altLines = alternates
    .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${escapeXml(a.url)}"/>`)
    .join('\n');
  const xDefault = alternates.find((a) => a.lang === 'en') ?? alternates[0];
  const lastmodLine = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>
    <loc>${escapeXml(url)}</loc>${lastmodLine}
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
  const blogPosts = loadBlogPosts();
  const urls = buildUrls(treatments, blogPosts);

  // Build hreflang groups: every URL gets its 5-language alternates.
  const sections = [];
  // Static pages change whenever the app content changes — use the repo's
  // latest commit date as their lastmod.
  const repoLastMod = gitLastMod(ROOT);
  // 1) Static pages, grouped per page across languages
  const staticPages = ['', '/treatments', '/about', '/contact', '/blog'];
  for (const path of staticPages) {
    const alternates = LANGS.map((lang) => ({ lang, url: `${BASE_URL}/${lang}${path}` }));
    for (const a of alternates) sections.push(urlElementWithHreflang(a.url, alternates, repoLastMod));
  }
  // 2) Treatment pages, grouped per treatment across languages
  for (const t of treatments) {
    const lastmod = gitLastMod(t.file);
    const alternates = LANGS.filter((l) => t.slug[l]).map((lang) => ({
      lang,
      url: `${BASE_URL}/${lang}/treatments/${t.slug[lang]}`,
    }));
    for (const a of alternates) sections.push(urlElementWithHreflang(a.url, alternates, lastmod));
  }
  // 3) Blog post pages, grouped per post across languages
  for (const post of blogPosts) {
    const alternates = LANGS.map((lang) => ({
      lang,
      url: `${BASE_URL}/${lang}/blog/${post.id}`,
    }));
    for (const a of alternates) sections.push(urlElementWithHreflang(a.url, alternates, post.lastmod));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sections.join('\n')}
</urlset>`;

  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log(`Wrote public/sitemap.xml with ${urls.length} URLs (${treatments.length} treatments + ${blogPosts.length} blog posts × ${LANGS.length} langs + static).`);

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
  md += '\n## Blog posts\n\n';
  for (const post of blogPosts) {
    md += `### ${post.id}\n`;
    for (const lang of LANGS) {
      md += `- **${lang}** — ${BASE_URL}/${lang}/blog/${post.id}\n`;
    }
    md += '\n';
  }
  writeFileSync(join(DATA_DIR, 'sitemap-inventory.md'), md, 'utf8');
  console.log('Wrote data/sitemap-inventory.md');
}

main();
