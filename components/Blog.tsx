
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, BLOG_POSTS } from '../constants';

interface BlogProps {
  lang: Language;
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const latestPosts = BLOG_POSTS.filter(post => !post.featured).slice(0, 6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'tr' ? 'tr-TR' : lang === 'de' ? 'de-DE' : lang === 'ru' ? 'ru-RU' : lang === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    const post = BLOG_POSTS.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <section id="blog" className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            {lang === 'tr' ? 'Geri' : lang === 'en' ? 'Back' : lang === 'de' ? 'Zurück' : lang === 'ru' ? 'Назад' : 'رجوع'}
          </button>
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title[lang]}
                className="w-full h-96 object-cover rounded-3xl mb-8"
              />
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full">
                  {post.category[lang]}
                </span>
                <span className="ml-4 text-gray-500 text-sm">{formatDate(post.date)}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                {post.title[lang]}
              </h1>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl text-gray-600 mb-8">{post.excerpt[lang]}</p>
              <div className="whitespace-pre-line text-base leading-relaxed">{post.content[lang]}</div>
            </div>
          </article>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full mb-4">
            {t.blogTitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            {t.blogTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.blogSubtitle}
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.blogFeatured}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedPost(post.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-600 text-xs font-semibold rounded-full">
                        {post.category[lang]}
                      </span>
                      <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {post.title[lang]}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt[lang]}
                    </p>
                    <div className="flex items-center text-cyan-600 text-sm font-semibold">
                      {t.blogReadMore}
                      <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Latest Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.blogLatest}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
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
                    <span className="text-gray-400 text-xs">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {post.title[lang]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt[lang]}
                  </p>
                  <div className="flex items-center text-cyan-600 text-sm font-semibold">
                    {t.blogReadMore}
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
