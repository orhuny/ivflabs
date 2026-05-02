
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = TRANSLATIONS[lang];

  // Beyaz arka planlı sayfalarda menü linkleri koyu olsun (okunabilirlik)
  const isBlogPage = location.pathname.includes('/blog');
  const isTreatmentsPage = location.pathname.includes('/treatments');
  const isAboutPage = location.pathname.includes('/about');
  const isContactPage = location.pathname.includes('/contact');
  const shouldUseLightTheme = isBlogPage || isTreatmentsPage || isAboutPage || isContactPage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefix = `/${lang}`;
  const navItems = [
    { key: 'Home', href: prefix, isHash: false },
    { key: 'Services', href: `${prefix}/treatments`, isHash: false },
    { key: 'About', href: `${prefix}/about`, isHash: false },
    { key: 'Blog', href: `${prefix}/blog`, isHash: false },
    { key: 'Contact', href: `${prefix}/contact`, isHash: false }
  ];

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 w-full z-[100] transition-all duration-500 ${
        shouldUseLightTheme
          ? 'py-2 sm:py-3 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'py-2 sm:py-5 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo – mobilde küçük */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
              <div className={`relative ${shouldUseLightTheme ? 'bg-white p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl' : 'bg-white/40 p-1.5 sm:p-2 lg:p-2.5 rounded-lg sm:rounded-xl backdrop-blur-md'} transition-all duration-300`}>
                <img
                  src="https://ivfnorthcyprus.com/assets/img/logo.png"
                  alt="Doğuş IVF Center Logo"
                  className="h-10 sm:h-14 lg:h-20 w-auto"
                  style={{ filter: shouldUseLightTheme ? 'none' : 'brightness(1.1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href || (item.href === prefix && location.pathname === prefix);
                if (item.isHash) {
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => {
                        if (!location.pathname.startsWith(prefix) || location.pathname !== prefix) {
                          e.preventDefault();
                          window.location.href = item.href;
                        }
                      }}
                      className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                        shouldUseLightTheme
                          ? 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {t[`nav${item.key}` as keyof typeof t]}
                      <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6 ${
                        shouldUseLightTheme ? 'bg-cyan-500' : 'bg-white'
                      }`}></span>
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`relative px-5 py-2.5 rounded-xl font-medium transition-all duration-300 group ${
                      isActive
                        ? shouldUseLightTheme ? 'text-cyan-600 bg-cyan-50' : 'text-white bg-white/20'
                        : shouldUseLightTheme
                        ? 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {t[`nav${item.key}` as keyof typeof t]}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 ${isActive ? 'w-6' : 'w-0'} h-0.5 rounded-full transition-all duration-300 group-hover:w-6 ${
                      shouldUseLightTheme ? 'bg-cyan-500' : 'bg-white'
                    }`}></span>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* WhatsApp / Contact */}
              <a
                href="https://wa.me/905338692330"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  shouldUseLightTheme
                    ? 'text-gray-700 hover:text-green-600 hover:bg-green-50 bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10 bg-white/5'
                }`}
              >
                <i className="fab fa-whatsapp text-lg"></i>
                <span>
                  {lang === 'tr' ? 'WhatsApp' : lang === 'en' ? 'WhatsApp' : lang === 'de' ? 'WhatsApp' : lang === 'ru' ? 'WhatsApp' : 'واتساب'}
                </span>
              </a>
              {/* Language Switcher */}
              <div className={`flex items-center rounded-xl p-1 ${
                shouldUseLightTheme ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-md'
              }`}>
                {[
                  { code: 'tr' as const, label: 'TR' },
                  { code: 'en' as const, label: 'EN' },
                  { code: 'de' as const, label: 'DE' },
                  { code: 'ru' as const, label: 'RU' },
                  { code: 'ar' as const, label: 'AR' },
                ].map((language) => (
                  <button
                    key={language.code}
                    onClick={() => setLang(language.code)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                      lang === language.code
                        ? 'bg-white text-cyan-600 shadow-sm'
                        : shouldUseLightTheme ? 'text-gray-500 hover:text-gray-700' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {language.label}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`${prefix}/contact`}
                className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  shouldUseLightTheme
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40'
                    : 'bg-white text-cyan-600 hover:bg-white/90'
                }`}
              >
                {{ tr: 'Randevu Al', en: 'Book Now', de: 'Termin', ru: 'Запись', ar: 'احجز' }[lang]}
              </a>
            </div>

            {/* Mobile Menu Toggle – açıkken düzgün kapat butonu */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? (lang === 'tr' ? 'Menüyü kapat' : 'Close menu') : (lang === 'tr' ? 'Menüyü aç' : 'Open menu')}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent ${
                isMobileMenuOpen ? 'bg-white/20 shadow-lg' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`flex flex-col space-y-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'rotate-90 translate-y-2 bg-white'
                    : shouldUseLightTheme ? 'bg-gray-800' : 'bg-white'
                }`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-0'
                    : shouldUseLightTheme ? 'bg-gray-800' : 'bg-white'
                }`}></span>
                <span className={`block h-0.5 w-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? '-rotate-90 -translate-y-2 bg-white'
                    : shouldUseLightTheme ? 'bg-gray-800' : 'bg-white'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay – ana sayfada da uyumlu */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Backdrop – yumuşak karartma */}
        <div
          className="absolute inset-0 bg-cyan-900/70 backdrop-blur-md transition-opacity duration-500"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel – gradient hero ile uyumlu */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-cyan-900/98 via-blue-900/98 to-sky-900/98 backdrop-blur-xl shadow-2xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full p-6 sm:p-8 pt-20 sm:pt-24">
            {/* Nav Links */}
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                if (item.isHash) {
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white/80 hover:text-white text-2xl font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {t[`nav${item.key}` as keyof typeof t]}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white text-2xl font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {t[`nav${item.key}` as keyof typeof t]}
                  </Link>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <div className="mt-8 grid grid-cols-5 gap-2">
              {[
                { code: 'tr' as const, label: 'TR' },
                { code: 'en' as const, label: 'EN' },
                { code: 'de' as const, label: 'DE' },
                { code: 'ru' as const, label: 'RU' },
                { code: 'ar' as const, label: 'AR' },
              ].map((language) => (
                <button
                  key={language.code}
                  onClick={() => { setLang(language.code); setIsMobileMenuOpen(false); }}
                  className={`py-2.5 rounded-xl font-semibold text-sm transition-all ${
                    lang === language.code
                      ? 'bg-white text-cyan-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {language.label}
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <p className="text-white/60 text-sm mb-3">
                  {{ tr: 'Bize Ulaşın', en: 'Get in Touch', de: 'Kontakt', ru: 'Связаться', ar: 'اتصل بنا' }[lang]}
                </p>
                <a
                  href="https://wa.me/905338692330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 mb-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  <span>WhatsApp</span>
                </a>
                <a href="tel:+905338692330" className="flex items-center text-white mb-2 hover:text-cyan-300 transition-colors">
                  <i className="fas fa-phone mr-3"></i>
                  +90 533 869 23 30
                </a>
                <a href="mailto:cyprusivflabs@gmail.com" className="flex items-center text-white hover:text-cyan-300 transition-colors">
                  <i className="fas fa-envelope mr-3"></i>
                  cyprusivflabs@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
