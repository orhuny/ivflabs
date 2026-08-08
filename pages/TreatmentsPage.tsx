import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import type { Language } from '../types';
import { TREATMENTS, treatmentPath } from './treatments';
import SEO, { SEOAlternate } from '../components/SEO';

const T = {
  badge: { tr: 'Tedavilerimiz', en: 'Our Treatments', de: 'Unsere Behandlungen', ru: 'Наши методы лечения', ar: 'علاجاتنا' },
  title: {
    tr: 'Detaylı Tedavi Bilgileri',
    en: 'Detailed Treatment Information',
    de: 'Detaillierte Behandlungsinformationen',
    ru: 'Подробная информация о лечении',
    ar: 'معلومات العلاج التفصيلية',
  },
  subtitle: {
    tr: 'En son teknoloji ve uzman kadromuzla sunduğumuz tedavi yöntemlerini inceleyin',
    en: 'Explore the treatment methods we deliver with the latest technology and expert team',
    de: 'Entdecken Sie unsere Behandlungsmethoden mit modernster Technik und Expertenteam',
    ru: 'Ознакомьтесь с нашими методами лечения',
    ar: 'استكشف طرق العلاج لدينا',
  },
  successRate: { tr: 'Başarı', en: 'Success', de: 'Erfolg', ru: 'Успех', ar: 'نجاح' },
  duration: { tr: 'Süre', en: 'Duration', de: 'Dauer', ru: 'Длительность', ar: 'المدة' },
  details: { tr: 'Detaylı Bilgi', en: 'Learn More', de: 'Mehr erfahren', ru: 'Подробнее', ar: 'تفاصيل أكثر' },
} as const;

const TreatmentsPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();

  const seoTitle = {
    tr: 'Tedavilerimiz | Doğuş IVF Center Kıbrıs',
    en: 'Our Treatments | Doğuş IVF Center Cyprus',
    de: 'Unsere Behandlungen | Doğuş IVF Center Zypern',
    ru: 'Наши методы лечения | Doğuş IVF Center, Кипр',
    ar: 'علاجاتنا | Doğuş IVF Center قبرص',
  }[lang];
  const seoDescription = {
    tr: 'Tüp bebek, mikroenjeksiyon (ICSI), yumurta ve sperm donasyonu, PGT, taşıyıcı annelik ve daha fazlası. Doğuş IVF Center’ın detaylı tedavi sayfaları.',
    en: 'IVF, ICSI, egg and sperm donation, PGT, surrogacy and more. Detailed treatment pages from Doğuş IVF Center.',
    de: 'IVF, ICSI, Eizellen- und Samenspende, PGT, Leihmutterschaft und mehr. Detaillierte Seiten zu allen Behandlungen.',
    ru: 'ЭКО, ИКСИ, донорство яйцеклеток и спермы, ПГТ, суррогатное материнство и многое другое.',
    ar: 'أطفال الأنابيب، الحقن المجهري، التبرع بالبويضات والحيوانات المنوية، PGT، الأمومة البديلة والمزيد.',
  }[lang];

  const alternates: SEOAlternate[] = (['tr', 'en', 'de', 'ru', 'ar'] as Language[]).map((l) => ({
    lang: l,
    path: `/${l}/treatments`,
  }));

  const SITE_BASE = 'https://dogusivf.net';
  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: TREATMENTS.map((t, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: t.title[lang],
      url: `${SITE_BASE}${treatmentPath(lang, t)}`,
    })),
  };

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        lang={lang}
        alternates={alternates}
        jsonLd={[itemListJsonLd]}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {T.badge[lang]}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">{T.title[lang]}</h1>
          <p className="text-gray-600 text-lg">{T.subtitle[lang]}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment) => (
            <Link
              key={treatment.id}
              to={treatmentPath(lang, treatment)}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title[lang]}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white">
                  <i className={`fas ${treatment.icon} text-xl`}></i>
                </div>
                <h2 className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold leading-tight">
                  {treatment.title[lang]}
                </h2>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {treatment.description[lang]}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-primary-50 rounded-xl px-3 py-2 text-center">
                    <div className="text-base font-bold text-primary-600">{treatment.successRate}</div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wide">{T.successRate[lang]}</div>
                  </div>
                  <div className="bg-cyan-50 rounded-xl px-3 py-2 text-center">
                    <div className="text-base font-bold text-cyan-600">{treatment.duration[lang]}</div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wide">{T.duration[lang]}</div>
                  </div>
                </div>
                <span className="mt-auto inline-flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                  {T.details[lang]}
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsPage;
