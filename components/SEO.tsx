import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Base URL for canonical and OG (no trailing slash). Set via env or default. */
const SITE_BASE = typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL
  ? (import.meta as { env: { VITE_SITE_URL: string } }).env.VITE_SITE_URL
  : 'https://www.cyprusivflabs.com';

/** Geçici/staging deploy'da noindex: VITE_NOINDEX=true verirseniz Google geçici siteyi indekslemez. */
const DEFAULT_NOINDEX = typeof import.meta !== 'undefined' &&
  (import.meta as { env?: { VITE_NOINDEX?: string } }).env?.VITE_NOINDEX === 'true';

export interface SEOProps {
  /** Document title (e.g. "Doğuş IVF Center | Tüp Bebek Merkezi") */
  title: string;
  /** Meta description (155 chars or less recommended) */
  description: string;
  /** Optional canonical path (e.g. /en/blog). If not set, uses current pathname. */
  canonicalPath?: string;
  /** OG/Twitter image URL (absolute). If not set, uses default or none. */
  image?: string;
  /** OG type (default: website) */
  ogType?: string;
  /** index | noindex (default: index) */
  robotsIndex?: 'index' | 'noindex';
  /** follow | nofollow (default: follow) */
  robotsFollow?: 'follow' | 'nofollow';
  /** HTML lang (e.g. en, tr). Used for hreflang if we add alternate links. */
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  image,
  ogType = 'website',
  robotsIndex = DEFAULT_NOINDEX ? 'noindex' : 'index',
  robotsFollow = 'follow',
  lang,
}) => {
  const location = useLocation();
  const path = canonicalPath ?? location.pathname;
  const canonical = `${SITE_BASE}${path === '/' ? '' : path}`;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_BASE}${image}`) : undefined;
  const robots = [robotsIndex, robotsFollow].filter(Boolean).join(', ') || undefined;

  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {robots && <meta name="robots" content={robots} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Doğuş IVF Center" />
      {lang && <meta property="og:locale" content={lang === 'tr' ? 'tr_TR' : lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
};

export default SEO;
