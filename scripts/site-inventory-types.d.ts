/**
 * Types for the site crawl inventory / sitemap.
 * Used by crawl-site.js and the new site for migration.
 */

export interface PageMeta {
  /** Page title (document title) */
  title: string;
  /** Meta description */
  metaDescription: string | null;
  /** Primary H1 text */
  h1: string | null;
  /** Ordered list of H2 heading texts */
  h2: string[];
  /** Ordered list of H3 heading texts (per section if needed) */
  h3: string[];
  /** Canonical URL if present */
  canonical: string | null;
  /** index | noindex from robots meta */
  robotsIndex: 'index' | 'noindex' | null;
  /** follow | nofollow from robots meta */
  robotsFollow: 'follow' | 'nofollow' | null;
  /** Open Graph tags */
  openGraph: {
    'og:title'?: string;
    'og:description'?: string;
    'og:image'?: string;
    'og:url'?: string;
    'og:type'?: string;
    'og:locale'?: string;
    'og:site_name'?: string;
  };
  /** Twitter Card tags */
  twitter: {
    'twitter:card'?: string;
    'twitter:title'?: string;
    'twitter:description'?: string;
    'twitter:image'?: string;
  };
  /** HTML lang attribute */
  htmlLang: string | null;
  /** Inferred language from path or lang (en, tr, de, ru, ar) */
  inferredLang: string;
}

export interface CrawledPage {
  /** Absolute URL of the page */
  url: string;
  /** Path (e.g. /en/, /tr/blog/...) */
  path: string;
  /** HTTP status when fetched */
  status: number;
  /** SEO and structure metadata */
  meta: PageMeta;
  /** Full body text (visible text only, trimmed) */
  bodyText: string;
  /** All image URLs found on page (absolute) */
  images: Array<{ src: string; alt: string | null }>;
  /** Downloadable assets (PDF, DOC, etc.) */
  assets: string[];
  /** Internal links (same domain) discovered for crawling */
  internalLinks: string[];
  /** When this page was crawled (ISO string) */
  crawledAt: string;
}

export interface SiteInventory {
  /** Base URL of the site crawled */
  baseUrl: string;
  /** When crawl started (ISO string) */
  crawledAt: string;
  /** All unique page URLs (sitemap list) */
  urls: string[];
  /** Per-URL crawl data */
  pages: Record<string, CrawledPage>;
  /** All unique image URLs across the site */
  allImages: Array<{ url: string; alt: string | null; pages: string[] }>;
  /** All unique asset URLs (PDFs, etc.) */
  allAssets: string[];
  /** Language path mapping: path prefix -> lang code (e.g. "/en/" -> "en") */
  languagePaths: Record<string, string>;
}
