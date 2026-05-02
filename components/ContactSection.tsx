import React, { useState } from 'react';
import { Language } from '../types';

const CONTACT_EMAIL = 'cyprusivflabs@gmail.com';

interface ContactSectionProps {
  lang: Language;
  /** When true, use standalone page layout (no footer-style border) */
  standalone?: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ lang, standalone }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === 'tr' ? 'Doğuş IVF - İletişim Formu' : lang === 'en' ? 'Doğuş IVF - Contact Form' : 'Doğuş IVF - Contact'
    );
    const body = encodeURIComponent(
      [name, email, phone, message]
        .filter(Boolean)
        .map((v, i) => {
          const labels =
            lang === 'tr'
              ? ['Ad Soyad', 'E-posta', 'Telefon', 'Mesaj']
              : lang === 'en'
              ? ['Name', 'Email', 'Phone', 'Message']
              : ['Name', 'Email', 'Phone', 'Message'];
          return `${labels[i]}: ${v}`;
        })
        .join('\n\n')
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={standalone ? 'relative z-10' : 'relative z-10 border-b border-white/10'}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-500/20 text-primary-400 text-sm font-semibold rounded-full mb-4">
              {lang === 'tr' ? 'İletişime Geçin' : lang === 'en' ? 'Get in Touch' : lang === 'de' ? 'Kontakt' : lang === 'ru' ? 'Связаться' : 'تواصل معنا'}
            </span>
            <h2 className="text-4xl font-serif text-white mb-6">
              {lang === 'tr' ? 'Ücretsiz Danışmanlık İçin Bize Ulaşın' : lang === 'en' ? 'Contact Us for Free Consultation' : lang === 'de' ? 'Kontaktieren Sie uns für eine kostenlose Beratung' : lang === 'ru' ? 'Свяжитесь с нами для бесплатной консультации' : 'تواصل معنا للاستشارة المجانية'}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {lang === 'tr'
                ? 'Sorularınızı yanıtlamak ve size en uygun tedavi planını oluşturmak için buradayız.'
                : lang === 'en'
                ? 'We are here to answer your questions and create the most suitable treatment plan for you.'
                : lang === 'de'
                ? 'Wir sind für Sie da, um Ihre Fragen zu beantworten und den passenden Behandlungsplan zu erstellen.'
                : lang === 'ru'
                ? 'Мы здесь, чтобы ответить на ваши вопросы и составить подходящий план лечения.'
                : 'نحن هنا للإجابة على أسئلتك وإعداد خطة العلاج المناسبة.'}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href="tel:+905338692330" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <i className="fas fa-phone text-primary-400"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{lang === 'tr' ? 'Telefon' : lang === 'en' ? 'Phone' : lang === 'de' ? 'Telefon' : lang === 'ru' ? 'Телефон' : 'الهاتف'}</div>
                  <div className="text-white font-semibold">+90 533 869 23 30</div>
                </div>
              </a>
              <a href="mailto:cyprusivflabs@gmail.com" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <i className="fas fa-envelope text-primary-400"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{lang === 'tr' ? 'E-posta' : lang === 'en' ? 'Email' : lang === 'de' ? 'E-Mail' : lang === 'ru' ? 'Email' : 'البريد'}</div>
                  <div className="text-white font-semibold">cyprusivflabs@gmail.com</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors group sm:col-span-2">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <i className="fas fa-map-marker-alt text-primary-400"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-400">{lang === 'tr' ? 'Adres' : lang === 'en' ? 'Address' : lang === 'de' ? 'Adresse' : lang === 'ru' ? 'Адрес' : 'العنوان'}</div>
                  <div className="text-white font-semibold">
                    {lang === 'tr' ? 'Doğuş Tüp Bebek Merkezi' : 'Doğuş IVF Center'}<br />
                    Şht. Erdoğan Mustafa Sk, Nicosia<br />
                    Northern Cyprus
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{lang === 'tr' ? 'Adınız' : lang === 'en' ? 'Your Name' : lang === 'de' ? 'Ihr Name' : lang === 'ru' ? 'Ваше имя' : 'اسمك'}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder={lang === 'tr' ? 'Adınız Soyadınız' : 'John Doe'}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">{lang === 'tr' ? 'E-posta' : lang === 'en' ? 'Email' : lang === 'de' ? 'E-Mail' : lang === 'ru' ? 'Email' : 'البريد'}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">{lang === 'tr' ? 'Telefon' : lang === 'en' ? 'Phone' : lang === 'de' ? 'Telefon' : lang === 'ru' ? 'Телефон' : 'الهاتف'}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                  placeholder="+90 5XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">{lang === 'tr' ? 'Mesajınız' : lang === 'en' ? 'Your Message' : lang === 'de' ? 'Ihre Nachricht' : lang === 'ru' ? 'Ваше сообщение' : 'رسالتك'}</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                  placeholder={lang === 'tr' ? 'Mesajınızı buraya yazın...' : lang === 'en' ? 'Write your message here...' : lang === 'de' ? 'Schreiben Sie hier...' : lang === 'ru' ? 'Напишите сообщение...' : 'اكتب رسالتك...'}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all transform hover:scale-[1.02]"
              >
                {lang === 'tr' ? 'Mesaj Gönder' : lang === 'en' ? 'Send Message' : lang === 'de' ? 'Nachricht senden' : lang === 'ru' ? 'Отправить' : 'إرسال'}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
