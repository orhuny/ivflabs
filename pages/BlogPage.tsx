import React from 'react';
import { useParams, useNavigate, Link, useOutletContext } from 'react-router-dom';
import type { Language, BlogPost } from '../types';
import { TRANSLATIONS, BLOG_POSTS } from '../constants';
import SEO, { SEOAlternate } from '../components/SEO';

const SITE_BASE = typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL
  ? (import.meta as { env: { VITE_SITE_URL: string } }).env.VITE_SITE_URL
  : 'https://dogusivf.net';

const LANGS: Language[] = ['tr', 'en', 'de', 'ru', 'ar'];

const T = {
  back: { tr: 'Geri', en: 'Back', de: 'Zurück', ru: 'Назад', ar: 'رجوع' },
  home: { tr: 'Ana Sayfa', en: 'Home', de: 'Startseite', ru: 'Главная', ar: 'الرئيسية' },
  blog: { tr: 'Blog', en: 'Blog', de: 'Blog', ru: 'Блог', ar: 'المدونة' },
  notFound: { tr: 'Yazı bulunamadı', en: 'Post not found', de: 'Beitrag nicht gefunden', ru: 'Запись не найдена', ar: 'المقال غير موجود' },
  backToBlog: { tr: 'Bloga Dön', en: 'Back to Blog', de: 'Zurück zum Blog', ru: 'Вернуться в блог', ar: 'العودة إلى المدونة' },
} as const;

function postPath(lang: Language, postId: string): string {
  return `/${lang}/blog/${postId}`;
}

function buildPostAlternates(postId: string): SEOAlternate[] {
  return LANGS.map((l) => ({ lang: l, path: postPath(l, postId) }));
}

function buildListingAlternates(): SEOAlternate[] {
  return LANGS.map((l) => ({ lang: l, path: `/${l}/blog` }));
}

function buildBlogPostingJsonLd(post: BlogPost, lang: Language): Record<string, unknown> {
  const url = `${SITE_BASE}${postPath(lang, post.id)}`;
  const image = post.image.startsWith('http') ? post.image : `${SITE_BASE}${post.image}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title[lang],
    description: (post.excerpt[lang] || '').slice(0, 200),
    articleBody: post.content[lang],
    inLanguage: lang,
    url,
    image,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category[lang],
    author: {
      '@type': 'Organization',
      name: 'Doğuş IVF Center',
      url: SITE_BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Doğuş IVF Center',
      url: SITE_BASE,
      logo: {
        '@type': 'ImageObject',
        url: 'https://ivfnorthcyprus.com/assets/img/logo.png',
      },
    },
  };
}

function buildBreadcrumbJsonLd(lang: Language, post?: BlogPost): Record<string, unknown> {
  const items: Array<Record<string, unknown>> = [
    { '@type': 'ListItem', position: 1, name: T.home[lang], item: `${SITE_BASE}/${lang}` },
    { '@type': 'ListItem', position: 2, name: T.blog[lang], item: `${SITE_BASE}/${lang}/blog` },
  ];
  if (post) {
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: post.title[lang],
      item: `${SITE_BASE}${postPath(lang, post.id)}`,
    });
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

function buildBlogListingJsonLd(lang: Language): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Doğuş IVF Center Blog',
    inLanguage: lang,
    url: `${SITE_BASE}/${lang}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Doğuş IVF Center',
      url: SITE_BASE,
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title[lang],
      url: `${SITE_BASE}${postPath(lang, post.id)}`,
      datePublished: post.date,
      image: post.image.startsWith('http') ? post.image : `${SITE_BASE}${post.image}`,
      articleSection: post.category[lang],
    })),
  };
}

const BlogPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();
  const { postId } = useParams<{ postId?: string }>();
  const navigate = useNavigate();
  const t = TRANSLATIONS[lang];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(
      lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : lang === 'ru' ? 'ru-RU' : lang === 'ar' ? 'ar-SA' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
  };

  if (postId) {
    const post = BLOG_POSTS.find((p) => p.id === postId);
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <SEO
            title={`${T.notFound[lang]} | Doğuş IVF Center`}
            description={T.notFound[lang]}
            lang={lang}
            robotsIndex="noindex"
          />
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{T.notFound[lang]}</h1>
            <button onClick={() => navigate(`/${lang}/blog`)} className="text-cyan-600 hover:text-cyan-700">
              {T.backToBlog[lang]}
            </button>
          </div>
        </div>
      );
    }

    const seoTitle = `${post.title[lang]} | Doğuş IVF Center`;
    const seoDescription = (post.excerpt[lang] || '').replace(/\s+/g, ' ').slice(0, 160);
    const alternates = buildPostAlternates(post.id);
    const jsonLd = [buildBlogPostingJsonLd(post, lang), buildBreadcrumbJsonLd(lang, post)];

    return (
      <article className="pt-32 pb-24 bg-white min-h-screen">
        <SEO
          title={seoTitle}
          description={seoDescription}
          lang={lang}
          image={post.image}
          ogType="article"
          alternates={alternates}
          jsonLd={jsonLd}
        />
        <div className="container mx-auto px-6">
          <nav aria-label="breadcrumbs" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <Link to={`/${lang}`} className="hover:text-cyan-600 transition-colors">{T.home[lang]}</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/${lang}/blog`} className="hover:text-cyan-600 transition-colors">{T.blog[lang]}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{post.title[lang]}</span>
          </nav>
          <Link
            to={`/${lang}/blog`}
            className="mb-8 inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-semibold group"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            {T.back[lang]}
          </Link>
          <div className="max-w-4xl mx-auto">
            <header className="mb-8">
              <img
                src={post.image}
                alt={post.title[lang]}
                className="w-full h-96 object-cover rounded-3xl mb-8"
                loading="eager"
              />
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full">
                  {post.category[lang]}
                </span>
                <time dateTime={post.date} className="ml-4 text-gray-500 text-sm">
                  {formatDate(post.date)}
                </time>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">
                {post.title[lang]}
              </h1>
            </header>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 mb-8">{post.excerpt[lang]}</p>
              <div className="whitespace-pre-line text-base leading-relaxed">{post.content[lang]}</div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  const featuredPosts = BLOG_POSTS.filter((post) => post.featured);
  const latestPosts = BLOG_POSTS.filter((post) => !post.featured);
  const seoTitle = `${t.blogTitle} | Doğuş IVF Center`;
  const seoDescription = t.blogSubtitle;
  const alternates = buildListingAlternates();
  const jsonLd = [buildBlogListingJsonLd(lang), buildBreadcrumbJsonLd(lang)];

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        lang={lang}
        alternates={alternates}
        jsonLd={jsonLd}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full mb-4">
            {t.blogTitle}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">{t.blogTitle}</h1>
          <p className="text-gray-600 text-lg leading-relaxed">{t.blogSubtitle}</p>
        </div>

        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.blogFeatured}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={postPath(lang, post.id)}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden block"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                        {post.category[lang]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <time dateTime={post.date} className="text-gray-400 text-xs">{formatDate(post.date)}</time>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {post.title[lang]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt[lang]}</p>
                    <span className="inline-flex items-center text-cyan-600 text-sm font-semibold">
                      {t.blogReadMore}
                      <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.blogLatest}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                to={postPath(lang, post.id)}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                      {post.category[lang]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <time dateTime={post.date} className="text-gray-400 text-xs">{formatDate(post.date)}</time>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {post.title[lang]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt[lang]}</p>
                  <span className="inline-flex items-center text-cyan-600 text-sm font-semibold">
                    {t.blogReadMore}
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
