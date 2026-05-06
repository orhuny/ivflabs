/**
 * Prerender every public route into static HTML files.
 *
 * Why: Google crawls JS apps but real Search Console indexing is far more
 * reliable when each canonical URL ships ready-to-read HTML. We launch the
 * built SPA in a headless Chromium, wait for the React tree to settle, then
 * write the rendered HTML to dist/<route>/index.html. Netlify/Vercel/etc.
 * serves the static file directly; deep links no longer need the SPA
 * fallback rewrite for first-paint and SEO.
 *
 * Run: node scripts/prerender.js  (after `vite build`)
 *
 * Requires: `puppeteer` (npm i -D puppeteer). The script exits cleanly with a
 * helpful message if it isn't installed, so the build succeeds either way.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { extname } from 'path';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST_DIR = join(ROOT, 'dist');
const LANGS = ['tr', 'en', 'de', 'ru', 'ar'];
const PORT = 4173;
const ORIGIN = `http://127.0.0.1:${PORT}`;

if (!existsSync(DIST_DIR)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

let puppeteer;
try {
  puppeteer = (await import('puppeteer')).default;
} catch {
  console.warn('[prerender] puppeteer is not installed. Skipping prerender step.');
  console.warn('[prerender] Install with: npm i -D puppeteer');
  process.exit(0);
}

// Read treatment slugs the same way generate-sitemap.js does.
function loadTreatments() {
  const dir = join(ROOT, 'pages', 'treatments');
  const indexSrc = readFileSync(join(dir, 'index.ts'), 'utf8');
  const importLines = indexSrc.match(/^import\s+\w+\s+from\s+'\.\/([\w-]+)';/gm) || [];
  const files = importLines.map((l) => l.match(/'\.\/([\w-]+)'/)[1]).map((n) => join(dir, `${n}.ts`));
  const treatments = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const idMatch = src.match(/\bid:\s*'([\w-]+)'/);
    const slugBlock = src.match(/slug:\s*\{([\s\S]*?)\}/);
    if (!idMatch || !slugBlock) continue;
    const slug = {};
    for (const lang of LANGS) {
      const m = slugBlock[1].match(new RegExp(`${lang}:\\s*'([^']+)'`));
      if (m) slug[lang] = m[1];
    }
    treatments.push({ id: idMatch[1], slug });
  }
  return treatments;
}

function buildRoutes(treatments) {
  const staticPaths = ['', '/treatments', '/about', '/contact', '/blog'];
  const routes = [];
  for (const lang of LANGS) {
    for (const path of staticPaths) routes.push(`/${lang}${path}`);
  }
  for (const t of treatments) {
    for (const lang of LANGS) {
      if (t.slug[lang]) routes.push(`/${lang}/treatments/${t.slug[lang]}`);
    }
  }
  return routes;
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, ORIGIN);
      let filePath = join(DIST_DIR, decodeURIComponent(url.pathname));
      if (!existsSync(filePath) || filePath.endsWith('/') || filePath.endsWith('\\')) {
        // SPA fallback
        filePath = join(DIST_DIR, 'index.html');
      } else {
        const ext = extname(filePath);
        if (!ext) filePath = join(DIST_DIR, 'index.html');
      }
      const data = await readFile(filePath);
      const type = MIME[extname(filePath)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    } catch (err) {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
  return server;
}

function escapeForFile(p) {
  return p.replace(/\\/g, '/').replace(/^\/+/, '');
}

async function main() {
  const treatments = loadTreatments();
  const routes = buildRoutes(treatments);
  const server = await startStaticServer();
  console.log(`[prerender] Static server on ${ORIGIN}, prerendering ${routes.length} routes…`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  let success = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      const url = `${ORIGIN}${route}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Give React a moment to commit the SEO tags into <head>.
      await page.waitForFunction(() => document.title && document.title.length > 0, { timeout: 8000 });
      const html = await page.content();
      const outDir = join(DIST_DIR, escapeForFile(route));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf8');
      success += 1;
      process.stdout.write(`  ✓ ${route}\n`);
    } catch (err) {
      process.stdout.write(`  ✗ ${route}: ${err.message}\n`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] Done. ${success}/${routes.length} routes rendered.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
