
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import ContactSection from './ContactSection';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const location = useLocation();
  const isContactPage = location.pathname.includes('/contact');
  const t = TRANSLATIONS[lang];
  const prefix = `/${lang}`;

  const socialLinks = [
    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/dogusivfcyprus', label: 'Facebook' },
    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/dogusivfcyprus', label: 'Instagram' },
    { icon: 'fab fa-whatsapp', href: 'https://wa.me/905338692330', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { href: prefix, label: t.navHome },
    { href: `${prefix}/treatments`, label: t.navServices },
    { href: `${prefix}/about`, label: t.navAbout },
    { href: `${prefix}/contact`, label: t.navContact },
  ];

  const services = [
    { en: 'IVF Treatment', tr: 'Tüp Bebek Tedavisi' },
    { en: 'ICSI', tr: 'ICSI (Mikroenjeksiyon)' },
    { en: 'Genetic Testing', tr: 'Genetik Tarama' },
    { en: 'Egg Freezing', tr: 'Yumurta Dondurma' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {!isContactPage && <ContactSection lang={lang} />}

      {/* Footer Links */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href={prefix} className="flex items-center mb-6">
              <img
                src="https://ivfnorthcyprus.com/assets/img/logo.png"
                alt="Doğuş IVF Center Logo"
                className="h-14 w-auto"
              />
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {lang === 'tr'
                ? 'Doğuş Tüp Bebek Merkezi olarak en son teknoloji laboratuvarımızla ailenizin geleceğini şekillendiriyoruz.'
                : 'At Doğuş IVF Center, we shape the future of your family with our state-of-the-art laboratory.'}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary-500 transition-colors group"
                >
                  <i className={`${social.icon} text-gray-400 group-hover:text-white transition-colors`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-400"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t.navServices}</h4>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href={`${prefix}/treatments`} className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group">
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-400"></i>
                    {service[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{lang === 'tr' ? 'Bülten' : 'Newsletter'}</h4>
            <p className="text-gray-400 text-sm mb-4">
              {lang === 'tr' ? 'En yeni gelişmelerden haberdar olun.' : 'Stay updated with the latest advancements.'}
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={lang === 'tr' ? 'E-posta adresiniz' : 'Your email'}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                {lang === 'tr' ? 'Abone Ol' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {lang === 'tr' ? 'Doğuş Tüp Bebek Merkezi' : 'Doğuş IVF Center'}. {t.footerRights}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary-400 transition-colors">{lang === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}</a>
              <a href="#" className="hover:text-primary-400 transition-colors">{lang === 'tr' ? 'Kullanım Şartları' : 'Terms of Use'}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
