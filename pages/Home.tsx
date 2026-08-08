
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

/** Base URL for canonical/JSON-LD (no trailing slash). Matches SEO.tsx. */
const SITE_BASE = typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL
  ? (import.meta as { env: { VITE_SITE_URL: string } }).env.VITE_SITE_URL
  : 'https://dogusivf.net';

/**
 * Site-wide clinic identity for Google (Knowledge Panel, brand entity, local SEO).
 * Anchored at a stable @id so other pages' JSON-LD can reference this entity.
 * NOTE: add `geo` (lat/lng) and `openingHoursSpecification` here if/when known —
 * omitted deliberately rather than guessed, since wrong structured data hurts.
 */
function buildClinicJsonLd(lang: Language, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_BASE}/#organization`,
    name: 'Doğuş IVF Center',
    alternateName: 'Doğuş Tüp Bebek Merkezi',
    url: SITE_BASE,
    logo: `${SITE_BASE}/logo.png`,
    image: `${SITE_BASE}/images/ivf-centre-babies.jpg`,
    description,
    inLanguage: lang,
    telephone: '+905338692330',
    email: 'cyprusivflabs@gmail.com',
    medicalSpecialty: 'Gynecologic',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Şht. Erdoğan Mustafa Sk.',
      addressLocality: 'Lefkoşa',
      addressRegion: 'KKTC',
      addressCountry: 'CY',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905338692330',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English', 'German', 'Russian', 'Arabic'],
    },
    areaServed: ['CY', 'TR', 'DE', 'RU', 'GB'],
    sameAs: [
      'https://www.facebook.com/dogusivfcyprus',
      'https://www.instagram.com/dogusivfcyprus',
    ],
  };
}

const Home: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();
  const t = TRANSLATIONS[lang];

  const seoTitle = { tr: 'Doğuş IVF Center | Tüp Bebek Merkezi', en: 'Doğuş IVF Center | IVF & Fertility Cyprus', de: 'Doğuş IVF Center | IVF Zypern', ru: 'Doğuş IVF Center | ЭКО Кипр', ar: 'Doğuş IVF Center | أطفال الأنابيب قبرص' }[lang];
  const seoDescription = { tr: 'Doğuş Tüp Bebek Merkezi - Kuzey Kıbrıs\'ın güvenilir IVF merkezi. 25+ yıllık deneyim ile doğurganlık tedavileri.', en: 'Doğuş IVF Center - Premier fertility clinic in North Cyprus. IVF, egg donation, ICSI and more. 25+ years experience.', de: 'Doğuş IVF Center - Führende Kinderwunschklinik in Nordzypern.', ru: 'Doğuş IVF Center - Клиника ЭКО в Северном Кипре.', ar: 'Doğuş IVF Center - عيادة الخصوبة في قبرص الشمالية.' }[lang];

  return (
    <main>
      <SEO title={seoTitle} description={seoDescription} lang={lang} image="/images/ivf-centre-babies.jpg" jsonLd={[buildClinicJsonLd(lang, seoDescription)]} />
      <Hero lang={lang} />

      {/* Happy Families Gallery */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
              {lang === 'tr' ? 'Mutlu Aileler' : 'Happy Families'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-900">
              {lang === 'tr' ? 'Hayallerini Gerçekleştiren Aileler' : 'Families Who Achieved Their Dreams'}
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              '/images/baby_photo1.jpg',
              '/images/baby_photo2.jpg',
              '/images/baby_photo3.jpg',
              '/images/Happy-Baby-Kissing-Happy-Mother_edited.jpg',
              '/images/mommy-and-baby-happy-small.jpg',
              '/images/mother&baby at the beach.jpg',
            ].map((img, idx) => (
              <div key={idx} className="relative shrink-0 w-64 h-80 rounded-3xl overflow-hidden group">
                <img src={img} alt={`Happy family ${idx + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <i className="fas fa-heart text-pink-400 mb-2"></i>
                    <p className="text-sm">{lang === 'tr' ? 'Doğuş Tüp Bebek ailesi' : 'Doğuş IVF family'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services lang={lang} />

      {/* About & Contact teaser - link to dedicated pages */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-900 mb-6">
            {lang === 'tr' ? 'Merkezimiz ve Ekibimiz' : lang === 'en' ? 'Our Center & Team' : lang === 'de' ? 'Unser Zentrum & Team' : lang === 'ru' ? 'Наш центр и команда' : 'مركزنا وفريقنا'}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            {lang === 'tr'
              ? 'Doğuş Tüp Bebek Merkezi hakkında detaylı bilgi, uzman kadromuz ve iletişim seçenekleri için aşağıdaki sayfaları ziyaret edin.'
              : lang === 'en'
              ? 'Visit the pages below for detailed information about our center, our expert team, and contact options.'
              : lang === 'de'
              ? 'Besuchen Sie die folgenden Seiten für weitere Informationen zu unserem Zentrum, unserem Team und Kontaktmöglichkeiten.'
              : lang === 'ru'
              ? 'Посетите страницы ниже для подробной информации о нашем центре, команде и контактах.'
              : 'قم بزيارة الصفحات أدناه لمزيد من المعلومات حول مركزنا وفريقنا وطرق التواصل.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`/${lang}/about`}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              {t.navAbout}
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              {t.navContact}
              <i className="fas fa-envelope ml-3"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;