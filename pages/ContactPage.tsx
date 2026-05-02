import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Language } from '../types';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();

  const seoTitle = {
    tr: 'İletişim | Doğuş IVF Center',
    en: 'Contact | Doğuş IVF Center',
    de: 'Kontakt | Doğuş IVF Center',
    ru: 'Контакты | Doğuş IVF Center',
    ar: 'اتصل بنا | Doğuş IVF Center'
  }[lang];
  const seoDescription = {
    tr: 'Doğuş Tüp Bebek Merkezi ile iletişime geçin. Ücretsiz danışmanlık için bize ulaşın.',
    en: 'Contact Doğuş IVF Center. Get in touch for a free consultation.',
    de: 'Kontaktieren Sie Doğuş IVF Center. Kostenlose Beratung.',
    ru: 'Свяжитесь с Doğuş IVF Center. Бесплатная консультация.',
    ar: 'تواصل مع مركز Doğuş لأطفال الأنابيب. استشارة مجانية.'
  }[lang];

  const copy = {
    backToHome: { tr: 'Ana Sayfa', en: 'Home', de: 'Startseite', ru: 'Главная', ar: 'الرئيسية' },
    pageTitle: { tr: 'İletişim', en: 'Contact', de: 'Kontakt', ru: 'Контакты', ar: 'اتصل بنا' }
  };

  return (
    <main className="min-h-screen bg-white">
      <SEO title={seoTitle} description={seoDescription} lang={lang} />
      <div className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <Link
            to={`/${lang}`}
            className="mb-8 inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-semibold group"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
            {copy.backToHome[lang]}
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-4">
            {copy.pageTitle[lang]}
          </h1>
        </div>
      </div>
      <section className="bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <ContactSection lang={lang} standalone />
      </section>
    </main>
  );
};

export default ContactPage;
