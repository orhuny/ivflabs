
import React, { useState } from 'react';
import { Language } from '../types';
import { SERVICES, TRANSLATIONS } from '../constants';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gradients = [
    'from-primary-500 to-primary-600',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-blue-500 to-indigo-500',
  ];

  return (
    <section id="treatments" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {t.servicesTitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            {t.servicesTitle}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-90 group-hover:scale-100`}></div>

              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 overflow-hidden ${
                  hoveredIndex === index
                    ? `bg-gradient-to-br ${gradients[index]}`
                    : 'bg-gray-100'
                }`}>
                  <i className={`fas ${service.icon} text-2xl transition-colors duration-500 ${
                    hoveredIndex === index ? 'text-white' : 'text-gray-600'
                  }`}></i>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title[lang]}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description[lang]}
                </p>

                {/* Learn More Link - goes to full treatments page */}
                <a
                  href={`/${lang}/treatments`}
                  className="inline-flex items-center text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  {lang === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </a>

                {/* Decorative Number */}
                <div className="absolute top-6 right-6 text-7xl font-bold text-gray-100 group-hover:text-primary-100 transition-colors pointer-events-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - link to full treatments page */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-gray-50 to-primary-50 rounded-3xl border border-gray-100">
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {lang === 'tr' ? 'Tüm tedavi yöntemlerimizi inceleyin' : 'Explore all our treatment methods'}
              </h3>
              <p className="text-gray-600">
                {lang === 'tr' ? 'Detaylı tedavi bilgileri ve aşamalar için tedaviler sayfamızı ziyaret edin' : 'Visit our treatments page for detailed information and steps'}
              </p>
            </div>
            <a
              href={`/${lang}/treatments`}
              className="shrink-0 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105"
            >
              {lang === 'tr' ? 'Tüm Tedaviler' : 'All Treatments'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
