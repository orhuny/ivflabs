import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Language } from '../types';
import { DOCTORS, ABOUT_FEATURES } from './aboutData';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();

  const seoTitle = {
    tr: 'Hakkımızda | Doğuş IVF Center',
    en: 'About Us | Doğuş IVF Center',
    de: 'Über Uns | Doğuş IVF Center',
    ru: 'О Нас | Doğuş IVF Center',
    ar: 'من نحن | Doğuş IVF Center'
  }[lang];
  const seoDescription = {
    tr: 'Doğuş Tüp Bebek Merkezi - Kuzey Kıbrıs\'ın ilk ve tek kadın doğum ve tüp bebek tek dal hastanesi. Uzman kadromuz ve laboratuvarlarımız.',
    en: 'Doğuş IVF Center - North Cyprus\' first and only women\'s health and IVF specialized hospital. Our expert team and laboratories.',
    de: 'Doğuş IVF Center - Nordzyperns erstes und einziges Fachkrankenhaus für Frauenheilkunde und IVF.',
    ru: 'Doğuş IVF Center - Первая и единственная специализированная больница по женскому здоровью и ЭКО в Северном Кипре.',
    ar: 'مركز Doğuş لأطفال الأنابيب - أول مستشفى متخصص في صحة المرأة وأطفال الأنابيب في شمال قبرص.'
  }[lang];

  const copy = {
    backToHome: { tr: 'Ana Sayfa', en: 'Home', de: 'Startseite', ru: 'Главная', ar: 'الرئيسية' },
    aboutTag: { tr: 'Hastanemiz Hakkında', en: 'About Our Hospital', de: 'Über unser Krankenhaus', ru: 'О нашей больнице', ar: 'عن مستشفانا' },
    title: { tr: 'Doğuş Tüp Bebek Merkezi', en: 'Doğuş IVF Center', de: 'Doğuş IVF Center', ru: 'Doğuş IVF Center', ar: 'مركز Doğuş لأطفال الأنابيب' },
    para1: {
      tr: "Doğuş Hastanesi, Kıbrıs'ta ilk ve tek Kadın Doğum ve Tüp Bebek Tek Dal Hastanesi olarak tam teşekküllü ve yüksek güvence ile hizmet vermektedir. 1992 yılında Kadın Hastalıkları ve Doğum Uzmanı Dr. Şevket Alptürk tarafından kurulan Doğuş Kliniği, 2005 yılında Sağlık Bakanlığı tarafından Kuzey Kıbrıs'ta ilk ve tek olarak Tek Dal Hastanesi Onayını almıştır.",
      en: "Doğuş Hospital is the first and only Women's Health and IVF Specialized Hospital in Cyprus, providing fully equipped services with the highest assurance. Founded in 1992 by Gynecologist Dr. Şevket Alptürk as a Women's Health and Obstetrics Clinic, Doğuş Clinic received approval from the Ministry of Health in 2005 as the first and only Specialized Hospital in North Cyprus.",
      de: "Doğuş Hospital ist das erste und einzige Fachkrankenhaus für Frauengesundheit und IVF in Zypern. Gegründet 1992 von Gynäkologe Dr. Şevket Alptürk, erhielt die Doğuş Klinik 2005 die Genehmigung des Gesundheitsministeriums.",
      ru: "Больница Doğuş — первая и единственная специализированная больница по женскому здоровью и ЭКО на Кипре. Основана в 1992 году гинекологом д-ром Шевкетом Алптюрком.",
      ar: "مستشفى Doğuş هو أول وآخر مستشفى متخصص لصحة المرأة وأطفال الأنابيب في قبرص. تأسس عام 1992 على يد طبيب النساء د. شيفكت ألبتورك."
    },
    para2: {
      tr: "2006 yılında Sağlık Bakanlığı'nca onaylanarak bünyesinde Üremeye Yardımcı Tedavi Teknikleri (ÜYTE) Merkezi altında Embriyoloji ve Androloji Laboratuvarlarını, ardından Genetik Laboratuvarını bünyesine katarak kısırlık ve tüp bebek tedavilerine başlamıştır.",
      en: "In 2006, with approval from the Ministry of Health, it added the Assisted Reproductive Treatment Techniques (ART) Center including Embryology and Andrology Laboratories, followed by the Genetics Laboratory, beginning infertility and IVF treatments.",
      de: "2006 wurde das Zentrum für assistierte Reproduktionstechniken (ART) mit Embryologie- und Andrologielabors sowie Genetiklabor genehmigt.",
      ru: "В 2006 году с одобрения Министерства здравоохранения был добавлен центр вспомогательных репродуктивных технологий с лабораториями эмбриологии и андрологии, а также генетическая лаборатория.",
      ar: "في عام 2006 تمت إضافة مركز تقنيات الإنجاب المساعدة مع مختبرات علم الأجنة والذكورة والمختبر الوراثي."
    },
    ctaTour: { tr: 'Hastaneyi Sanal Turla Gezin', en: 'Take a Virtual Tour', de: 'Virtuelle Tour machen', ru: 'Виртуальный тур', ar: 'جولة افتراضية' },
    teamTag: { tr: 'Uzman Kadromuz', en: 'Our Expert Team', de: 'Unser Expertenteam', ru: 'Наша команда', ar: 'فريقنا' },
    teamTitle: { tr: 'Deneyimli Doktorlarımız', en: 'Our Experienced Doctors', de: 'Unsere erfahrenen Ärzte', ru: 'Наши врачи', ar: 'أطباؤنا' },
    teamSub: {
      tr: 'Alanında uzman, uluslararası deneyime sahip doktorlarımızla tanışın',
      en: 'Meet our internationally experienced specialist doctors',
      de: 'Lernen Sie unsere international erfahrenen Fachärzte kennen',
      ru: 'Познакомьтесь с нашими специалистами с международным опытом',
      ar: 'تعرف على أطبائنا المتخصصين ذوي الخبرة الدولية'
    },
    years: { tr: 'Yıl', en: 'Years', de: 'Jahre', ru: 'лет', ar: 'سنوات' },
    babies: { tr: 'Bebek', en: 'Babies', de: 'Babies', ru: 'младенцев', ar: 'أطفال' },
    success: { tr: 'Başarı', en: 'Success', de: 'Erfolg', ru: 'Успех', ar: 'نجاح' }
  };

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <SEO title={seoTitle} description={seoDescription} lang={lang} />
      <div className="container mx-auto px-6">
        <Link
          to={`/${lang}`}
          className="mb-8 inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-semibold group"
        >
          <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          {copy.backToHome[lang]}
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
            {copy.aboutTag[lang]}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">
            {copy.title[lang]}
          </h1>
        </div>

        {/* About Hospital Section */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/images/dogus-hastane-klinik-1.jpg" alt="Doğuş Hastanesi resepsiyon ve giriş" loading="lazy" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                  <img src="/images/dogus-hastane-1.jpg" alt="Doğuş Hastanesi bekleme salonu" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="/images/dogus-hastane-3.jpg" alt="Doğuş Hastanesi hasta odası" loading="lazy" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
                  <img src="/images/dogus-hastane-2.jpg" alt="Doğuş Hastanesi dinlenme alanı" loading="lazy" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">32+</div>
                  <div className="text-sm text-gray-500">{copy.years[lang]}</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">100K+</div>
                  <div className="text-sm text-gray-500">{copy.babies[lang]}</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">65%</div>
                  <div className="text-sm text-gray-500">{copy.success[lang]}</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{copy.para1[lang]}</p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{copy.para2[lang]}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {ABOUT_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <i className={`fas ${feature.icon} text-primary-600`}></i>
                    </div>
                    <span className="font-medium text-gray-700">{feature[lang]}</span>
                  </div>
                ))}
              </div>
              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                {copy.ctaTour[lang]}
                <i className="fas fa-arrow-right ml-3"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-24 bg-gray-50 rounded-3xl">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-600 text-sm font-semibold rounded-full mb-4">
                {copy.teamTag[lang]}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-gray-900 mb-6">
                {copy.teamTitle[lang]}
              </h2>
              <p className="text-gray-600 text-lg">{copy.teamSub[lang]}</p>
            </div>
            <div className="grid md:grid-cols-2 max-w-3xl mx-auto gap-8">
              {DOCTORS.map((doctor, idx) => (
                <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-3xl mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&size=400&background=0ea5e9&color=fff&bold=true`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {doctor.specialties[lang].map((spec, i) => (
                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-primary-600 font-bold text-sm">{doctor.experience}</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-primary-600 text-sm mb-4">{doctor.title[lang]}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio[lang]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
