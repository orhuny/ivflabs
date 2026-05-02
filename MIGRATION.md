# Site Migration Guide: www.cyprusivflabs.com → New Site

This document describes how to crawl the existing site (www.cyprusivflabs.com), produce a complete URL inventory/sitemap, and recreate each page on the new site with equivalent or improved SEO, text, images, and language variants.

---

## 1. Crawl the Existing Site

### Run the crawler

From the project root:

```bash
npm run crawl
```

This runs `scripts/crawl-site.js`, which:

- Starts from `https://www.cyprusivflabs.com`
- Follows same-domain links (up to 500 pages, configurable in the script)
- For each URL extracts:
  - **Page title** and **meta description**
  - **H1**, **H2**, **H3** structure
  - **Canonical** and **robots** (index/noindex, follow/nofollow)
  - **Open Graph** and **Twitter** tags
  - **Body text** (visible text only)
  - **Images** (URL + alt)
  - **Downloadable assets** (PDF, DOC, etc.)
- Infers **language** from path (`/en/`, `/tr/`, `/de/`, `/ru/`, `/ar/`)
- Writes **`data/site-inventory.json`**

### Output: `data/site-inventory.json`

Structure:

- `baseUrl` – site base URL
- `crawledAt` – ISO timestamp
- `urls` – list of all crawled URLs
- `pages` – object keyed by URL; each value has:
  - `url`, `path`, `status`
  - `meta`: `title`, `metaDescription`, `h1`, `h2`, `h3`, `canonical`, `robotsIndex`, `robotsFollow`, `openGraph`, `twitter`, `htmlLang`, `inferredLang`
  - `bodyText`, `images`, `assets`, `internalLinks`
- `allImages` – unique images with `url`, `alt`, `pages` where they appear
- `allAssets` – unique asset URLs
- `languagePaths` – mapping path prefix → lang code

---

## 2. Generate Sitemap and Human-Readable Inventory

After crawling:

```bash
npm run sitemap
```

This runs `scripts/generate-sitemap.js`, which:

- Reads `data/site-inventory.json`
- Writes **`public/sitemap.xml`** (for search engines)
- Writes **`data/sitemap-inventory.md`** (per-URL table + detailed metadata, headings, images)

Use `data/sitemap-inventory.md` to verify titles, H1/H2/H3, descriptions, and image lists before recreating pages.

---

## 3. New Site Architecture

### URL structure (locale paths)

- **Home:** `/{lang}` → e.g. `/tr`, `/en`, `/de`, `/ru`, `/ar`
- **Blog list:** `/{lang}/blog` → e.g. `/en/blog`, `/tr/blog`
- **Blog post:** `/{lang}/blog/{postId}` → e.g. `/en/blog/egg-donation-stages`

Redirects:

- `/` → `/tr`
- `/blog` → `/tr/blog`
- `/blog/:postId` → `/tr/blog/:postId`

Invalid `:lang` (not in `tr`, `en`, `de`, `ru`, `ar`) redirects to `/tr` (or `/tr` + same path).

### SEO on the new site

- **`components/SEO.tsx`** sets per-page:
  - `<title>`, `<meta name="description">`
  - `<link rel="canonical">` (using `VITE_SITE_URL` or default base URL)
  - `<meta name="robots">` (index/noindex, follow/nofollow)
  - **Open Graph:** `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`, `og:site_name`
  - **Twitter:** `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
  - `<html lang="...">` when `lang` is passed

Home and Blog (list + single post) use `<SEO>` with title, description, and optional image. Set production base URL in `.env`:

```env
VITE_SITE_URL=https://www.cyprusivflabs.com
```

### Heading structure

- **Home:** H1 in Hero; H2 for sections (Services, About, Contact, etc.).
- **Blog list:** H2 = “Blog” (or translated); H3 = “Featured” / “Latest”.
- **Blog post:** H1 = post title; body uses the same heading hierarchy as in constants/content.

Recreate or improve H2/H3 from the crawl inventory when migrating new pages.

---

## 4. Migrating Content

### Text

- All main copy is in **`constants.tsx`** (translations, services, blog posts) and **`pages/Home.tsx`** (treatments, about, etc.).
- Compare with **`data/sitemap-inventory.md`** and **`data/site-inventory.json`** (`bodyText`, `meta.title`, `meta.metaDescription`, `meta.h1`, `meta.h2`, `meta.h3`) to ensure no sections are missing and headings match or improve on the old site.

### Images

- **Existing assets** are under **`public/images/`** (and `public/doctors/`, etc.).
- Crawler output: **`data/site-inventory.json`** → `pages[url].images` and `allImages`.
- **Migration steps:**
  1. List all image URLs from `allImages` (or per-page `images`).
  2. Download via **`scripts/download-images.js`** or **`scripts/download-all-images.js`** (add URLs to the arrays in those scripts), or use the crawler output to build a download list.
  3. Save under `public/images/` (or subfolders). Prefer **WebP/AVIF** where appropriate; keep **alt text** from crawl (`images[].alt`) or improve it.
- **Blog:** Featured and inline images are in **`constants.tsx`** (`BLOG_POSTS[].image`) and in post content; ensure each post’s images are present in `public/` and referenced correctly (paths and alt).

### Blog migration

- **Posts:** Stored in **`constants.tsx`** as **`BLOG_POSTS`** (id, title, excerpt, content, date, category, featured, image) in all languages.
- **URLs:** Post URL on the new site is `/{lang}/blog/{post.id}`. To preserve old URLs, add redirects (e.g. in hosting or in the app) from old paths to `/{lang}/blog/{postId}`.
- **Categories/tags:** Currently `category` per language; no separate tags. Preserve categories when adding new posts.
- **Pagination:** Blog list is single page; if the old site had pagination, you can add it later and map old page URLs to the new structure.
- **Dates and author:** `date` is in `BLOG_POSTS[].date`; author can be added to the type and UI if present on the old site.

---

## 5. Languages

- **Supported:** Turkish (tr), English (en), German (de), Russian (ru), Arabic (ar).
- **Mapping:** Path prefix → lang:
  - `/tr` → Turkish (default)
  - `/en` → English
  - `/de` → German
  - `/ru` → Russian
  - `/ar` → Arabic
- **Navbar/Footer:** All links use the current locale prefix (e.g. `/{lang}`, `/{lang}/blog`, `/{lang}#contact`).
- **Language switcher:** Changing language navigates to the same path in the new language (e.g. `/en/blog` → `/tr/blog`).

---

## 6. Checklist Before Go-Live

- [ ] Run **`npm run crawl`** and fix any crawl errors (e.g. rate limit, blocked URLs).
- [ ] Run **`npm run sitemap`** and review **`data/sitemap-inventory.md`**.
- [ ] For each important URL: confirm **title**, **meta description**, **H1**, **H2/H3** on the new page (and canonical/robots if needed).
- [ ] Confirm all **body text** is migrated (no missing sections).
- [ ] Download and optimize **images** (WebP/AVIF where appropriate); keep or improve **alt** text.
- [ ] Map **blog post URLs** (old → `/{lang}/blog/{postId}`); add redirects if needed.
- [ ] Set **`VITE_SITE_URL`** for production and verify **canonical** and **OG** URLs.
- [ ] Test all **locale paths** (`/tr`, `/en`, `/de`, `/ru`, `/ar`) and language switcher.
- [ ] Submit **`public/sitemap.xml`** to search engines after deploy.

---

## 7. Scripts Reference

| Command           | Script                     | Purpose                                      |
|-------------------|----------------------------|----------------------------------------------|
| `npm run crawl`   | `scripts/crawl-site.js`    | Crawl site → `data/site-inventory.json`      |
| `npm run sitemap` | `scripts/generate-sitemap.js` | Generate `public/sitemap.xml` + `data/sitemap-inventory.md` |

**Types:** `scripts/site-inventory-types.d.ts` describes the structure of `site-inventory.json` and related types.
