/**
 * Generates sitemap.xml and sitemap-inventory.md from data/site-inventory.json
 * Run after: npm run crawl
 * Usage: node scripts/generate-sitemap.js
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const PUBLIC_DIR = join(__dirname, '..', 'public');
const INVENTORY_PATH = join(DATA_DIR, 'site-inventory.json');

const BASE_URL = 'https://www.cyprusivflabs.com';

function main() {
  let inventory;
  try {
    inventory = JSON.parse(readFileSync(INVENTORY_PATH, 'utf8'));
  } catch (e) {
    console.error('Run "npm run crawl" first to create data/site-inventory.json');
    process.exit(1);
  }

  const urls = inventory.urls || [];
  const pages = inventory.pages || {};

  // sitemap.xml
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${escapeXml(u)}</loc><changefreq>weekly</changefreq></url>`).join('\n')}
</urlset>`;
  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), xml, 'utf8');
  console.log('Wrote public/sitemap.xml');

  // sitemap-inventory.md (human-readable)
  let md = `# Site URL Inventory & Sitemap\n\nGenerated from crawl of ${inventory.baseUrl} at ${inventory.crawledAt}.\n\n`;
  md += `## URL list (${urls.length} pages)\n\n`;
  md += '| URL | Title | H1 | Meta description | Index | Lang |\n';
  md += '|-----|-------|-----|-----------------|-------|------|\n';

  for (const url of urls) {
    const p = pages[url] || {};
    const m = p.meta || {};
    const title = (m.title || '').replace(/\|/g, '\\|').slice(0, 50);
    const h1 = (m.h1 || '').replace(/\|/g, '\\|').slice(0, 40);
    const desc = (m.metaDescription || '').replace(/\|/g, '\\|').replace(/\n/g, ' ').slice(0, 60);
    const robots = m.robotsIndex || '-';
    const lang = m.inferredLang || '-';
    md += `| ${url} | ${title} | ${h1} | ${desc} | ${robots} | ${lang} |\n`;
  }

  md += '\n## Per-URL detail (metadata, headings, images)\n\n';
  for (const url of urls) {
    const p = pages[url] || {};
    const m = p.meta || {};
    md += `### ${url}\n\n`;
    md += `- **Title:** ${m.title || '-'}\n`;
    md += `- **Meta description:** ${m.metaDescription || '-'}\n`;
    md += `- **H1:** ${m.h1 || '-'}\n`;
    md += `- **H2:** ${(m.h2 || []).join(' | ') || '-'}\n`;
    md += `- **H3:** ${(m.h3 || []).join(' | ') || '-'}\n`;
    md += `- **Canonical:** ${m.canonical || '-'}\n`;
    md += `- **Robots:** ${m.robotsIndex || 'index'} / ${m.robotsFollow || 'follow'}\n`;
    md += `- **OG/Twitter:** ${Object.keys(m.openGraph || {}).length ? 'present' : '-'}\n`;
    md += `- **Lang:** ${m.inferredLang || m.htmlLang || '-'}\n`;
    md += `- **Images:** ${(p.images || []).length}\n`;
    if ((p.images || []).length) {
      p.images.slice(0, 5).forEach((img) => {
        md += `  - ${img.src} ${img.alt ? `(alt: ${img.alt.slice(0, 40)})` : ''}\n`;
      });
      if (p.images.length > 5) md += `  - ... and ${p.images.length - 5} more\n`;
    }
    md += '\n';
  }

  writeFileSync(join(DATA_DIR, 'sitemap-inventory.md'), md, 'utf8');
  console.log('Wrote data/sitemap-inventory.md');
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

main();
