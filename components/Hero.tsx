
import React, { useEffect, useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const baseUrl = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  const heroBgImage = `${baseUrl}images/Happy-Baby-Kissing-Happy-Mother_edited.jpg`;

  return (
    <section
      id="home"
      className="relative w-full flex items-start md:items-center overflow-hidden min-h-dvh-safe"
    >
      {/* Background: mobilde 100dvh ile tam ekran, cover zorunlu */}
      <div className="absolute inset-0 w-full">
        <div
          className="absolute inset-0 w-full transition-transform duration-1000 ease-out opacity-55"
          style={{
            backgroundImage: `url('${heroBgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: isMobile ? 'scale(1.12)' : `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        {/* Tema rengiyle koyulaştırma: cyan/blue geçiş */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 via-blue-900/45 to-sky-900/40 pointer-events-none" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/78 via-blue-900/72 to-sky-900/68"></div>
        {/* Mobilde arka planı yumuşatmak için ek overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/55 via-transparent to-cyan-900/40 pointer-events-none md:hidden"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4 sm:mb-8">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-200 text-xs sm:text-sm font-medium">
                {lang === 'tr' ? 'Doğuş Tüp Bebek Merkezi' : 'Doğuş IVF Center'}
              </span>
            </div>

            {/* Heading – mobilde küçük, scroll’da da orantılı */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.15] mb-4 sm:mb-6">
              {lang === 'tr' ? (
                <>
                  Kıbrıs'ta<br />
                  <span className="gradient-text">Tüp Bebek</span> ve<br />
                  Doğurganlıkta Mükemmeliyet
                </>
              ) : (
                <>
                  Excellence in<br />
                  <span className="gradient-text">IVF</span> & Fertility<br />
                  in Cyprus
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-10 leading-relaxed max-w-xl">
              {t.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href={`/${lang}/contact`}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 hover:bg-cyan-600"
              >
                <span className="relative z-10 flex items-center">
                  {t.heroCTA}
                  <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
              <a
                href={`/${lang}/treatments`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <i className="fas fa-play-circle mr-3"></i>
                {lang === 'tr' ? 'Tedavilerimiz' : lang === 'en' ? 'Our Treatments' : lang === 'de' ? 'Unsere Behandlungen' : lang === 'ru' ? 'Наши методы лечения' : 'علاجاتنا'}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2 text-white/60">
                <i className="fas fa-certificate text-cyan-400"></i>
                <span className="text-sm">ISO 9001</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <i className="fas fa-award text-cyan-400"></i>
                <span className="text-sm">{lang === 'tr' ? 'Ödüllü Ekip' : 'Award Winning'}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <i className="fas fa-globe text-cyan-400"></i>
                <span className="text-sm">{lang === 'tr' ? 'Uluslararası' : 'International'}</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            {[
              { number: '100,000+', label: lang === 'tr' ? 'Başarılı Doğum' : 'Successful Births', icon: 'fa-heart', delay: '0' },
              { number: '32+', label: lang === 'tr' ? 'Yıllık Deneyim' : 'Years Experience', icon: 'fa-calendar-check', delay: '100' },
              { number: '65%', label: lang === 'tr' ? 'Başarı Oranı' : 'Success Rate', icon: 'fa-star', delay: '200' },
              { number: '2000+', label: lang === 'tr' ? 'Donör Havuzu' : 'Donor Pool', icon: 'fa-users', delay: '300' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
                style={{
                  transform: `translate(${mousePosition.x * (index % 2 === 0 ? 0.3 : -0.3)}px, ${mousePosition.y * (index < 2 ? 0.3 : -0.3)}px)`,
                }}
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-sky-400 rounded-xl flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <i className={`fas ${stat.icon} text-white`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/40 text-xs uppercase tracking-widest mb-3">
          {lang === 'tr' ? 'Keşfet' : 'Scroll'}
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
