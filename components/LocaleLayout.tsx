import React from 'react';
import { Outlet, useParams, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { Language } from '../types';

const VALID_LANGS: Language[] = ['tr', 'en', 'de', 'ru', 'ar'];

const LocaleLayout: React.FC = () => {
  const { lang: langParam } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Language = (langParam && VALID_LANGS.includes(langParam as Language)) ? (langParam as Language) : 'tr';

  const setLang = (newLang: Language) => {
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
    const newPath = pathWithoutLang === '/' ? `/${newLang}` : `/${newLang}${pathWithoutLang}`;
    navigate(newPath);
  };

  if (langParam && !VALID_LANGS.includes(langParam as Language)) {
    return <Navigate to={`/tr${location.pathname.replace(/^\/[a-z]{2}/, '') || ''}`} replace />;
  }

  return (
    <div className="min-h-screen life-pattern text-gray-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar lang={lang} setLang={setLang} />
      <Outlet context={{ lang }} />
      <Footer lang={lang} />
      <WhatsAppButton lang={lang} />
    </div>
  );
};

export default LocaleLayout;
