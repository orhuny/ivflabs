import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Language } from '../types';
import { TREATMENTS } from './treatmentsData';
import SEO from '../components/SEO';

const TreatmentsPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();
  const [selectedTreatment, setSelectedTreatment] = useState(0);
  const treatments = TREATMENTS;

  const seoTitle = {
    tr: 'Tedavilerimiz | Doğuş IVF Center',
    en: 'Our Treatments | Doğuş IVF Center',
    de: 'Unsere Behandlungen | Doğuş IVF Center',
    ru: 'Наши методы лечения | Doğuş IVF Center',
    ar: 'علاجاتنا | Doğuş IVF Center'
  }[lang];
  const seoDescription = {
    tr: 'Tüp bebek, yumurta donasyonu, ICSI, PGD/PGS ve daha fazlası. Doğuş Tüp Bebek Merkezi tedavi yöntemleri.',
    en: 'IVF, egg donation, ICSI, PGD/PGS and more. Doğuş IVF Center treatment methods.',
    de: 'IVF, Eizellspende, ICSI, PGD/PGS und mehr. Doğuş IVF-Zentrum Behandlungen.',
    ru: 'ЭКО, донорство яйцеклеток, ИКСИ, ПГД/ПГС и другие методы лечения.',
    ar: 'أطفال الأنابيب، التبرع بالبويضات، الحقن المجهري والمزيد.'
  }[lang];

  return (
    <section className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO title={seoTitle} description={seoDescription} lang={lang} />
      <div className="container mx-auto px-6">
        <Link
          to={`/${lang}`}
          className="mb-8 inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-semibold group"
        >
          <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          {lang === 'tr' ? 'Ana Sayfa' : lang === 'en' ? 'Home' : lang === 'de' ? 'Startseite' : lang === 'ru' ? 'Главная' : 'الرئيسية'}
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {lang === 'tr' ? 'Tedavilerimiz' : lang === 'en' ? 'Our Treatments' : lang === 'de' ? 'Unsere Behandlungen' : lang === 'ru' ? 'Наши методы лечения' : 'علاجاتنا'}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            {lang === 'tr' ? 'Detaylı Tedavi Bilgileri' : lang === 'en' ? 'Detailed Treatment Information' : lang === 'de' ? 'Detaillierte Behandlungsinformationen' : lang === 'ru' ? 'Подробная информация о лечении' : 'معلومات العلاج التفصيلية'}
          </h1>
          <p className="text-gray-600 text-lg">
            {lang === 'tr'
              ? 'En son teknoloji ve uzman kadromuzla sunduğumuz tedavi yöntemlerini inceleyin'
              : lang === 'en'
              ? 'Explore our treatment methods delivered with the latest technology and expert team'
              : lang === 'de'
              ? 'Entdecken Sie unsere Behandlungsmethoden mit modernster Technik und Expertenteam'
              : lang === 'ru'
              ? 'Ознакомьтесь с нашими методами лечения'
              : 'استكشف طرق العلاج لدينا'}
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {treatments.map((treatment, idx) => (
            <button
              key={treatment.id}
              onClick={() => setSelectedTreatment(idx)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                selectedTreatment === idx
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 hover:border-primary-300'
              }`}
            >
              <i className={`fas ${treatment.icon} mr-2`}></i>
              {treatment.title[lang]}
            </button>
          ))}
        </div>

        {/* Treatment Detail Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={treatments[selectedTreatment].image}
                alt={treatments[selectedTreatment].title[lang]}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <i className={`fas ${treatments[selectedTreatment].icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{treatments[selectedTreatment].title[lang]}</h2>
                    <p className="text-white/80">{lang === 'tr' ? 'Başarı Oranı' : 'Success Rate'}: {treatments[selectedTreatment].successRate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {treatments[selectedTreatment].description[lang]}
              </p>

              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-list-check text-primary-500 mr-2"></i>
                  {lang === 'tr' ? 'Tedavi Aşamaları' : 'Treatment Steps'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {treatments[selectedTreatment].steps[lang].map((step, idx) => (
                    <span key={idx} className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm">
                      <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs mr-2">
                        {idx + 1}
                      </span>
                      {step}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-primary-50 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-primary-600">{treatments[selectedTreatment].successRate}</div>
                  <div className="text-sm text-gray-600">{lang === 'tr' ? 'Başarı Oranı' : 'Success Rate'}</div>
                </div>
                <div className="bg-cyan-50 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-cyan-600">{treatments[selectedTreatment].duration[lang]}</div>
                  <div className="text-sm text-gray-600">{lang === 'tr' ? 'Tedavi Süresi' : 'Duration'}</div>
                </div>
              </div>

              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              >
                {lang === 'tr' ? 'Ücretsiz Danışmanlık Al' : 'Get Free Consultation'}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsPage;
