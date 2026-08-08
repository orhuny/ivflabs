
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { DOCTORS } from './aboutData';

/** Gerçek hasta yorumları — kaynak: Doğuş başarı öyküleri arşivi. */
const TESTIMONIALS: Array<{ name: string; text: Record<Language, string> }> = [
  {
    name: 'K.N & H.N',
    text: {
      tr: 'Yıllardır çabaladık, her seferinde üzüldük ama bu sefer yüzümüz güldü. Sonucumuz olumlu; doktorlarımız ikiz ihtimalinin yüksek olduğunu söylüyor. En başından sonuna kadar hep yanımızda oldunuz.',
      en: 'We tried for years and were disappointed every time — but this time we are smiling. Our result is positive, and our doctors say twins are likely. You were by our side from the very beginning to the end.',
      de: 'Wir haben es jahrelang versucht und wurden jedes Mal enttäuscht — doch diesmal lächeln wir. Unser Ergebnis ist positiv, und Zwillinge sind wahrscheinlich. Sie waren von Anfang bis Ende an unserer Seite.',
      ru: 'Мы пытались годами и каждый раз расстраивались — но в этот раз мы улыбаемся. Результат положительный, и врачи говорят, что вероятна двойня. Вы были рядом с нами от начала и до конца.',
      ar: 'حاولنا لسنوات وخاب أملنا في كل مرة — لكن هذه المرة ابتسمنا. نتيجتنا إيجابية، ويقول الأطباء إن احتمال التوأم مرتفع. كنتم بجانبنا من البداية إلى النهاية.'
    }
  },
  {
    name: 'Hakan',
    text: {
      tr: "Doğuş'tan önce tam 5 kez deneme yaptık, maalesef olmadı. Nihayet Doğuş'la oldu ve bebeğimize kavuştuk. Bebeği olmayan herkese çözüm Doğuş diyorum.",
      en: 'Before Doğuş we had 5 failed attempts. Finally it worked with Doğuş and we have our baby. To everyone longing for a child, I say: the answer is Doğuş.',
      de: 'Vor Doğuş hatten wir 5 erfolglose Versuche. Mit Doğuş hat es endlich geklappt und wir haben unser Baby. Allen mit Kinderwunsch sage ich: Die Antwort ist Doğuş.',
      ru: 'До Doğuş у нас было 5 неудачных попыток. С Doğuş наконец получилось, и у нас родился малыш. Всем, кто мечтает о ребёнке, я говорю: решение — это Doğuş.',
      ar: 'قبل Doğuş خضنا 5 محاولات فاشلة. أخيرًا نجح الأمر مع Doğuş ورُزقنا بطفلنا. أقول لكل من يتمنى طفلًا: الحل هو Doğuş.'
    }
  },
  {
    name: 'Edward',
    text: {
      tr: 'İki başarısız tüp bebek denemesinden sonra Kıbrıs\'ta Doğuş Hastanesi\'ni seçtik. Fatma Hanım her aşamada yanımızdaydı — şimdi ikizlerimiz Olivia ve Valerie ile birlikteyiz.',
      en: 'After two unsuccessful IVF treatments we chose Doğuş Hospital in Cyprus. Fatma helped us at every stage — now we have our twins, Olivia & Valerie. Thank you Fatma, thank you Dr Şevket, thank you Doğuş.',
      de: 'Nach zwei erfolglosen IVF-Behandlungen entschieden wir uns für das Doğuş-Krankenhaus auf Zypern. Fatma half uns in jeder Phase — jetzt haben wir unsere Zwillinge Olivia & Valerie.',
      ru: 'После двух неудачных попыток ЭКО мы выбрали больницу Doğuş на Кипре. Фатма помогала нам на каждом этапе — теперь у нас двойняшки, Оливия и Валери.',
      ar: 'بعد محاولتي أطفال أنابيب فاشلتين اخترنا مستشفى Doğuş في قبرص. ساعدتنا فاطمة في كل مرحلة — والآن لدينا توأمانا أوليفيا وفاليري.'
    }
  },
  {
    name: 'Jacqueline C.',
    text: {
      tr: 'Geçen yıl iki haftalığına Kıbrıs\'a geldik. Hayallerimiz gerçek oldu — ikiz oğullarımız oldu ve ikisi de sapasağlam. Uzman embriyoloğumuz Fatma\'ya, Dr. Şevket\'e ve tüm hastane ekibine sevgilerimizi yolluyoruz.',
      en: 'Last year we went to Cyprus for two weeks. Our dreams came true — we have our twin boys and they are very healthy. We send our love to our embryologist Fatma, Dr Şevket and all the hospital staff.',
      de: 'Letztes Jahr waren wir für zwei Wochen auf Zypern. Unsere Träume wurden wahr — wir haben unsere Zwillingsjungen und sie sind kerngesund. Liebe Grüße an unsere Embryologin Fatma, Dr. Şevket und das gesamte Team.',
      ru: 'В прошлом году мы приехали на Кипр на две недели. Наши мечты сбылись — у нас родились близнецы-мальчики, и оба совершенно здоровы. Шлём любовь эмбриологу Фатме, доктору Шевкету и всей команде.',
      ar: 'العام الماضي ذهبنا إلى قبرص لمدة أسبوعين. تحققت أحلامنا — رُزقنا بتوأمين ذكرين وكلاهما بصحة ممتازة. نرسل حبنا لأخصائية الأجنة فاطمة وللدكتور شوكت ولكل فريق المستشفى.'
    }
  }
];

const HOME_SECTION_COPY = {
  teamTag: { tr: 'Uzman Kadro', en: 'Expert Team', de: 'Expertenteam', ru: 'Команда экспертов', ar: 'فريق متخصص' },
  teamTitle: { tr: 'Ekibimizle Tanışın', en: 'Meet Our Team', de: 'Lernen Sie unser Team kennen', ru: 'Познакомьтесь с нашей командой', ar: 'تعرفوا على فريقنا' },
  teamSubtitle: {
    tr: 'Tedavinizin her aşamasında, alanında uzman kurucu kadromuz bizzat yanınızda.',
    en: 'At every stage of your treatment, our expert founding team is personally by your side.',
    de: 'In jeder Phase Ihrer Behandlung steht Ihnen unser fachkundiges Gründerteam persönlich zur Seite.',
    ru: 'На каждом этапе лечения наша опытная команда основателей лично рядом с вами.',
    ar: 'في كل مرحلة من مراحل علاجكم، فريقنا المؤسس المتخصص بجانبكم شخصيًا.'
  },
  teamPhotoCaption: { tr: 'Doğuş IVF Ekibi', en: 'The Doğuş IVF Team', de: 'Das Doğuş IVF Team', ru: 'Команда Doğuş IVF', ar: 'فريق Doğuş IVF' },
  teamCta: { tr: 'Ekibi Yakından Tanıyın', en: 'Get to Know the Team', de: 'Team kennenlernen', ru: 'Узнать больше о команде', ar: 'تعرف على الفريق' },
  yearsLabel: { tr: 'Yıl Deneyim', en: 'Years Experience', de: 'Jahre Erfahrung', ru: 'лет опыта', ar: 'سنوات خبرة' },
  storiesTag: { tr: 'Hasta Yorumları', en: 'Patient Reviews', de: 'Patientenstimmen', ru: 'Отзывы пациентов', ar: 'آراء المرضى' },
  storiesTitle: { tr: 'Başarı Öyküleri', en: 'Success Stories', de: 'Erfolgsgeschichten', ru: 'Истории успеха', ar: 'قصص النجاح' },
  storiesSubtitle: {
    tr: 'Bebeklerine kavuşan ailelerimizin kendi cümleleri.',
    en: 'In the words of families who welcomed their babies.',
    de: 'In den Worten der Familien, die ihre Babys bekommen haben.',
    ru: 'Словами семей, которые дождались своих малышей.',
    ar: 'بكلمات العائلات التي رُزقت بأطفالها.'
  }
} as const;

/** Base URL for canonical/JSON-LD (no trailing slash). Matches SEO.tsx. */
const SITE_BASE = typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL
  ? (import.meta as { env: { VITE_SITE_URL: string } }).env.VITE_SITE_URL
  : 'https://dogusivf.net';

/**
 * Site-wide clinic identity for Google (Knowledge Panel, brand entity, local SEO).
 * Anchored at a stable @id so other pages' JSON-LD can reference this entity.
 * NOTE: add `geo` (lat/lng) and `openingHoursSpecification` here if/when known —
 * omitted deliberately rather than guessed, since wrong structured data hurts.
 */
function buildClinicJsonLd(lang: Language, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_BASE}/#organization`,
    name: 'Doğuş IVF Center',
    alternateName: 'Doğuş Tüp Bebek Merkezi',
    url: SITE_BASE,
    logo: `${SITE_BASE}/logo.png`,
    image: `${SITE_BASE}/images/ivf-centre-babies.jpg`,
    description,
    inLanguage: lang,
    telephone: '+905338692330',
    email: 'cyprusivflabs@gmail.com',
    medicalSpecialty: 'Gynecologic',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Şht. Erdoğan Mustafa Sk.',
      addressLocality: 'Lefkoşa',
      addressRegion: 'KKTC',
      addressCountry: 'CY',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+905338692330',
      contactType: 'customer service',
      availableLanguage: ['Turkish', 'English', 'German', 'Russian', 'Arabic'],
    },
    areaServed: ['CY', 'TR', 'DE', 'RU', 'GB'],
    sameAs: [
      'https://www.facebook.com/dogusivfcyprus',
      'https://www.instagram.com/dogusivfcyprus',
    ],
  };
}

const Home: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();
  const t = TRANSLATIONS[lang];

  const seoTitle = { tr: 'Doğuş IVF Center | Tüp Bebek Merkezi', en: 'Doğuş IVF Center | IVF & Fertility Cyprus', de: 'Doğuş IVF Center | IVF Zypern', ru: 'Doğuş IVF Center | ЭКО Кипр', ar: 'Doğuş IVF Center | أطفال الأنابيب قبرص' }[lang];
  const seoDescription = { tr: 'Doğuş Tüp Bebek Merkezi - Kuzey Kıbrıs\'ın güvenilir IVF merkezi. 25+ yıllık deneyim ile doğurganlık tedavileri.', en: 'Doğuş IVF Center - Premier fertility clinic in North Cyprus. IVF, egg donation, ICSI and more. 25+ years experience.', de: 'Doğuş IVF Center - Führende Kinderwunschklinik in Nordzypern.', ru: 'Doğuş IVF Center - Клиника ЭКО в Северном Кипре.', ar: 'Doğuş IVF Center - عيادة الخصوبة في قبرص الشمالية.' }[lang];

  return (
    <main>
      <SEO title={seoTitle} description={seoDescription} lang={lang} image="/images/ivf-centre-babies.jpg" jsonLd={[buildClinicJsonLd(lang, seoDescription)]} />
      <Hero lang={lang} />

      {/* Happy Families Gallery */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
              {lang === 'tr' ? 'Mutlu Aileler' : 'Happy Families'}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-900">
              {lang === 'tr' ? 'Hayallerini Gerçekleştiren Aileler' : 'Families Who Achieved Their Dreams'}
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              '/images/baby_photo1.jpg',
              '/images/baby_photo2.jpg',
              '/images/baby_photo3.jpg',
              '/images/Happy-Baby-Kissing-Happy-Mother_edited.jpg',
              '/images/mommy-and-baby-happy-small.jpg',
              '/images/mother&baby at the beach.jpg',
            ].map((img, idx) => (
              <div key={idx} className="relative shrink-0 w-64 h-80 rounded-3xl overflow-hidden group">
                <img src={img} alt={`Happy family ${idx + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <i className="fas fa-heart text-pink-400 mb-2"></i>
                    <p className="text-sm">{lang === 'tr' ? 'Doğuş Tüp Bebek ailesi' : 'Doğuş IVF family'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services lang={lang} />

      {/* Ekibimiz — doktor ve embriyolog kartları + ekip fotoğrafı */}
      <section className="py-24 bg-gradient-to-b from-white to-cyan-50/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-600 text-sm font-semibold rounded-full mb-4">
              {HOME_SECTION_COPY.teamTag[lang]}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {HOME_SECTION_COPY.teamTitle[lang]}
            </h2>
            <p className="text-gray-600 text-lg">{HOME_SECTION_COPY.teamSubtitle[lang]}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {DOCTORS.map((doctor, idx) => (
              <a
                key={idx}
                href={`/${lang}/about`}
                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-cyan-600 shadow">
                    {doctor.experience} {HOME_SECTION_COPY.yearsLabel[lang]}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">{doctor.name}</h3>
                  <p className="text-sm text-gray-500">{doctor.title[lang]}</p>
                </div>
              </a>
            ))}
            <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <img
                  src="/images/dogus-ekip.jpg"
                  alt={HOME_SECTION_COPY.teamPhotoCaption[lang]}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{HOME_SECTION_COPY.teamPhotoCaption[lang]}</h3>
                <p className="text-sm text-gray-500">Doğuş Hastanesi · Lefkoşa</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href={`/${lang}/about`}
              className="inline-flex items-center px-6 py-3 bg-white border border-cyan-200 text-cyan-700 font-semibold rounded-xl hover:bg-cyan-50 transition-colors"
            >
              {HOME_SECTION_COPY.teamCta[lang]}
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Başarı Öyküleri — gerçek hasta yorumları */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
              {HOME_SECTION_COPY.storiesTag[lang]}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              {HOME_SECTION_COPY.storiesTitle[lang]}
            </h2>
            <p className="text-gray-600 text-lg">{HOME_SECTION_COPY.storiesSubtitle[lang]}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((item, idx) => (
              <figure
                key={idx}
                className="relative bg-gradient-to-br from-cyan-50/60 to-white rounded-3xl border border-gray-100 shadow-sm p-8"
              >
                <i className="fas fa-quote-left text-3xl text-cyan-200 absolute top-6 left-6" aria-hidden="true"></i>
                <blockquote className="relative text-gray-700 leading-relaxed pt-6">
                  {item.text[lang]}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{item.name}</span>
                  <span className="text-yellow-400 text-sm" aria-label="5/5">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About & Contact teaser - link to dedicated pages */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-gray-900 mb-6">
            {lang === 'tr' ? 'Merkezimiz ve Ekibimiz' : lang === 'en' ? 'Our Center & Team' : lang === 'de' ? 'Unser Zentrum & Team' : lang === 'ru' ? 'Наш центр и команда' : 'مركزنا وفريقنا'}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            {lang === 'tr'
              ? 'Doğuş Tüp Bebek Merkezi hakkında detaylı bilgi, uzman kadromuz ve iletişim seçenekleri için aşağıdaki sayfaları ziyaret edin.'
              : lang === 'en'
              ? 'Visit the pages below for detailed information about our center, our expert team, and contact options.'
              : lang === 'de'
              ? 'Besuchen Sie die folgenden Seiten für weitere Informationen zu unserem Zentrum, unserem Team und Kontaktmöglichkeiten.'
              : lang === 'ru'
              ? 'Посетите страницы ниже для подробной информации о нашем центре, команде и контактах.'
              : 'قم بزيارة الصفحات أدناه لمزيد من المعلومات حول مركزنا وفريقنا وطرق التواصل.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`/${lang}/about`}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              {t.navAbout}
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              {t.navContact}
              <i className="fas fa-envelope ml-3"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;