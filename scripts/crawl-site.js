/**
 * Site crawler for www.cyprusivflabs.com
 * Produces: complete URL inventory, per-URL metadata (title, meta description, H1/H2/H3,
 * canonical, robots, OG/Twitter), body text, images, downloadable assets.
 * Run: npm run crawl
 */

import * as cheerio from 'cheerio';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://www.cyprusivflabs.com';
const BASE_ORIGIN = new URL(BASE_URL).origin;
const OUTPUT_DIR = join(__dirname, '..', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'site-inventory.json');
const MAX_PAGES = 500;
const REQUEST_DELAY_MS = 800;

const LANG_FROM_PATH = {
  '/en': 'en',
  '/tr': 'tr',
  '/de': 'de',
  '/ru': 'ru',
  '/ar': 'ar',
};

function inferLang(pathname) {
  const normalized = pathname.replace(/\/+/g, '/') || '/';
  for (const [prefix, lang] of Object.entries(LANG_FROM_PATH)) {
    if (normalized === prefix || normalized.startsWith(prefix + '/')) return lang;
  }
  return 'tr'; // default
}

function resolveUrl(href, base) {
  try {
    return new URL(href, base).href;
  } catch {
    return null;
  }
}

function isSameDomain(url) {
  try {
    return new URL(url).origin === BASE_ORIGIN;
  } catch {
    return false;
  }
}

function normalizePath(urlStr) {
  try {
    const u = new URL(urlStr);
    if (u.origin !== BASE_ORIGIN) return null;
    let path = u.pathname.replace(/\/+/g, '/') || '/';
    if (!path.endsWith('/') && !path.match(/\.[a-z0-9]+$/i)) path += '/';
    u.pathname = path;
    u.search = '';
    u.hash = '';
    return u.href;
  } catch {
    return null;
  }
}

function getText($, selector) {
  const el = $(selector).first();
  return el.length ? el.text().trim().replace(/\s+/g, ' ') : null;
}

function getMeta($, nameOrProp) {
  let val = $(`meta[name="${nameOrProp}"]`).attr('content') || $(`meta[property="${nameOrProp}"]`).attr('content');
  return val ? val.trim() : null;
}

function getRobots(robotsContent) {
  if (!robotsContent) return { index: null, follow: null };
  const s = robotsContent.toLowerCase();
  return {
    index: s.includes('noindex') ? 'noindex' : s.includes('index') ? 'index' : null,
    follow: s.includes('nofollow') ? 'nofollow' : s.includes('follow') ? 'follow' : null,
  };
}

function extractOgTw($) {
  const og = {};
  const tw = {};
  $('meta[property^="og:"]').each((_, el) => {
    const p = $(el).attr('property');
    const c = $(el).attr('content');
    if (p && c) og[p] = c.trim();
  });
  $('meta[name^="twitter:"]').each((_, el) => {
    const n = $(el).attr('name');
    const c = $(el).attr('content');
    if (n && c) tw[n] = c.trim();
  });
  return { og, tw };
}

function extractBodyText($) {
  const $body = $('body').first();
  if (!$body.length) return '';
  const clone = $body.clone();
  clone.find('script, style, noscript').remove();
  return clone.text().replace(/\s+/g, ' ').trim();
}

function extractHeadings($) {
  const h1 = getText($, 'h1');
  const h2 = [];
  const h3 = [];
  $('h2').each((_, el) => h2.push($(el).text().trim().replace(/\s+/g, ' ')));
  $('h3').each((_, el) => h3.push($(el).text().trim().replace(/\s+/g, ' ')));
  return { h1, h2, h3 };
}

function extractImages($, pageUrl) {
  const base = pageUrl;
  const out = [];
  $('img').each((_, el) => {
    const src = $(el).attr('src');
    const alt = $(el).attr('alt') || null;
    if (!src) return;
    const abs = resolveUrl(src, base);
    if (abs) out.push({ src: abs, alt: alt ? alt.trim() : null });
  });
  return out;
}

function extractAssets($, pageUrl) {
  const base = pageUrl;
  const exts = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.zip'];
  const out = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    const abs = resolveUrl(href, base);
    if (abs && exts.some((e) => abs.toLowerCase().includes(e))) out.add(abs);
  });
  return [...out];
}

function extractInternalLinks($, pageUrl) {
  const base = pageUrl;
  const out = new Set();
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    const abs = resolveUrl(href, base);
    if (abs && isSameDomain(abs)) {
      const norm = normalizePath(abs);
      if (norm) out.add(norm);
    }
  });
  return [...out];
}

async function fetchPage(url) {
  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'CyprusIVFLabs-MigrationBot/1.0 (Site migration)' },
  });
  const html = await res.text();
  return { status: res.status, finalUrl: res.url, html };
}

function parsePage(url, status, html) {
  const $ = cheerio.load(html);
  const pathname = new URL(url).pathname;
  const inferredLang = inferLang(pathname);

  const robots = getRobots(getMeta($, 'robots'));
  const { og, tw } = extractOgTw($);
  const { h1, h2, h3 } = extractHeadings($);

  const meta = {
    title: getText($, 'title') || null,
    metaDescription: getMeta($, 'description'),
    h1,
    h2,
    h3,
    canonical: getMeta($, 'canonical') || $('link[rel="canonical"]').attr('href')?.trim() || null,
    robotsIndex: robots.index,
    robotsFollow: robots.follow,
    openGraph: og,
    twitter: tw,
    htmlLang: $('html').attr('lang') || null,
    inferredLang,
  };

  const bodyText = extractBodyText($);
  const images = extractImages($, url);
  const assets = extractAssets($, url);
  const internalLinks = extractInternalLinks($, url);

  return {
    url,
    path: pathname,
    status,
    meta,
    bodyText,
    images,
    assets,
    internalLinks,
    crawledAt: new Date().toISOString(),
  };
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function crawl() {
  const seen = new Set();
  const queue = [normalizePath(BASE_URL)];
  const inventory = {
    baseUrl: BASE_URL,
    crawledAt: new Date().toISOString(),
    urls: [],
    pages: {},
    allImages: [],
    allAssets: [],
    languagePaths: LANG_FROM_PATH,
  };

  const imageToPages = new Map();

  while (queue.length && inventory.urls.length < MAX_PAGES) {
    const url = queue.shift();
    if (!url || seen.has(url)) continue;
    seen.add(url);

    process.stdout.write(`Crawling ${inventory.urls.length + 1}/${MAX_PAGES} ${url}\n`);

    try {
      const { status, finalUrl, html } = await fetchPage(url);
      const normalized = normalizePath(finalUrl) || url;
      if (normalized !== url) seen.add(normalized);

      const page = parsePage(normalized, status, html);
      inventory.pages[normalized] = page;
      inventory.urls.push(normalized);

      for (const { src, alt } of page.images) {
        if (!imageToPages.has(src)) imageToPages.set(src, { alt, pages: [] });
        imageToPages.get(src).pages.push(normalized);
      }
      for (const a of page.assets) {
        if (!inventory.allAssets.includes(a)) inventory.allAssets.push(a);
      }
      for (const link of page.internalLinks) {
        if (!seen.has(link)) queue.push(link);
      }

      await sleep(REQUEST_DELAY_MS);
    } catch (err) {
      console.error(`Error ${url}:`, err.message);
    }
  }

  inventory.allImages = [...imageToPages.entries()].map(([url, { alt, pages }]) => ({ url, alt, pages }));

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, JSON.stringify(inventory, null, 2), 'utf8');
  console.log(`\nDone. Wrote ${inventory.urls.length} URLs to ${OUTPUT_FILE}`);
  return inventory;
}

crawl().catch((e) => {
  console.error(e);
  process.exit(1);
});
