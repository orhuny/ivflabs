import React from 'react';
import { Language } from '../types';

interface WhatsAppButtonProps {
  lang: Language;
}

const PHONE = '905338692330';

const PREFILL: Record<Language, string> = {
  tr: 'Merhaba, tüp bebek tedavisi hakkında bilgi almak istiyorum.',
  en: 'Hello, I would like to get information about IVF treatment.',
  de: 'Hallo, ich möchte Informationen über eine IVF-Behandlung erhalten.',
  ru: 'Здравствуйте, я хотел(а) бы получить информацию о лечении ЭКО.',
  ar: 'مرحباً، أود الحصول على معلومات حول علاج أطفال الأنابيب.',
};

const TOOLTIP: Record<Language, string> = {
  tr: "WhatsApp'tan yazın",
  en: 'Chat on WhatsApp',
  de: 'Per WhatsApp schreiben',
  ru: 'Написать в WhatsApp',
  ar: 'راسلنا عبر واتساب',
};

/** Floating action button that opens a WhatsApp chat with the clinic directly. */
const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ lang }) => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(PREFILL[lang])}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={TOOLTIP[lang]}
        className="relative w-16 h-16 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500 group bg-gradient-to-r from-green-500 to-green-600 hover:scale-110 hover:shadow-green-500/40"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>

        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-2xl bg-green-500 animate-ping opacity-30 pointer-events-none"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">1</span>
        </span>

        {/* Tooltip */}
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs font-medium py-2 px-4 rounded-xl shadow-lg transition-all whitespace-nowrap opacity-0 group-hover:opacity-100 invisible group-hover:visible">
          {TOOLTIP[lang]}
          <span className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
