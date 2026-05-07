import React from 'react';
import { Link, Navigate, useOutletContext, useParams } from 'react-router-dom';
import type { Language, Treatment } from '../types';
import { TREATMENTS, findTreatmentBySlug, findTreatmentById, treatmentPath } from './treatments';
import SEO, { SEOAlternate } from '../components/SEO';

const SITE_BASE = typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL
  ? (import.meta as { env: { VITE_SITE_URL: string } }).env.VITE_SITE_URL
  : 'https://dogusivf.net';

const T = {
  backToTreatments: { tr: 'Tüm Tedaviler', en: 'All Treatments', de: 'Alle Behandlungen', ru: 'Все методы лечения', ar: 'كل العلاجات' },
  home: { tr: 'Ana Sayfa', en: 'Home', de: 'Startseite', ru: 'Главная', ar: 'الرئيسية' },
  treatments: { tr: 'Tedaviler', en: 'Treatments', de: 'Behandlungen', ru: 'Методы лечения', ar: 'العلاجات' },
  whoIsItFor: { tr: 'Kimlere Uygulanır?', en: 'Who Is It For?', de: 'Für wen geeignet?', ru: 'Кому подходит?', ar: 'لمن يُجرى؟' },
  treatmentSteps: { tr: 'Tedavi Aşamaları', en: 'Treatment Steps', de: 'Behandlungsablauf', ru: 'Этапы лечения', ar: 'مراحل العلاج' },
  benefits: { tr: 'Avantajları', en: 'Benefits', de: 'Vorteile', ru: 'Преимущества', ar: 'الفوائد' },
  faqs: { tr: 'Sıkça Sorulan Sorular', en: 'Frequently Asked Questions', de: 'Häufige Fragen', ru: 'Часто задаваемые вопросы', ar: 'الأسئلة الشائعة' },
  related: { tr: 'İlgili Tedaviler', en: 'Related Treatments', de: 'Ähnliche Behandlungen', ru: 'Похожие методы', ar: 'علاجات ذات صلة' },
  successRate: { tr: 'Başarı Oranı', en: 'Success Rate', de: 'Erfolgsrate', ru: 'Успешность', ar: 'نسبة النجاح' },
  duration: { tr: 'Tedavi Süresi', en: 'Duration', de: 'Behandlungsdauer', ru: 'Длительность', ar: 'مدة العلاج' },
  cta: { tr: 'Ücretsiz Konsültasyon Al', en: 'Get a Free Consultation', de: 'Kostenlose Beratung', ru: 'Бесплатная консультация', ar: 'استشارة مجانية' },
  ctaLead: { tr: 'Tedavi planınız için ekibimizle iletişime geçin', en: 'Contact our team to design your treatment plan', de: 'Sprechen Sie mit unserem Team über Ihren Behandlungsplan', ru: 'Свяжитесь с нашей командой, чтобы составить план лечения', ar: 'تواصل مع فريقنا لوضع خطة علاجك' },
  whatsapp: { tr: 'WhatsApp ile yaz', en: 'Message on WhatsApp', de: 'Auf WhatsApp schreiben', ru: 'Написать в WhatsApp', ar: 'تواصل عبر واتساب' },
} as const;

function buildAlternates(t: Treatment): SEOAlternate[] {
  const langs: Language[] = ['tr', 'en', 'de', 'ru', 'ar'];
  return langs.map((l) => ({ lang: l, path: treatmentPath(l, t) }));
}

function buildMedicalProcedureJsonLd(t: Treatment, lang: Language): Record<string, unknown> {
  const url = `${SITE_BASE}${treatmentPath(lang, t)}`;
  const desc = t.intro?.[lang] ?? t.description[lang];
  const hasSuccessRate = t.successRate && !['Varies', 'Adjunctive'].includes(t.successRate);
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: t.title[lang],
    description: desc.slice(0, 480),
    inLanguage: lang,
    url,
    image: t.image.startsWith('http') ? t.image : `${SITE_BASE}${t.image}`,
    provider: {
      '@type': 'MedicalClinic',
      name: 'Doğuş IVF Center',
      url: SITE_BASE,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Şht. Erdoğan Mustafa Sk.',
        addressLocality: 'Lefkoşa',
        addressRegion: 'KKTC',
        addressCountry: 'CY',
      },
    },
    ...(hasSuccessRate
      ? {
          additionalProperty: {
            '@type': 'PropertyValue',
            name: 'successRate',
            value: t.successRate,
          },
        }
      : {}),
  };
}

function buildFaqJsonLd(t: Treatment, lang: Language): Record<string, unknown> | null {
  const faqs = t.faqs?.[lang];
  if (!faqs || !faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

function buildBreadcrumbJsonLd(t: Treatment, lang: Language): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: T.home[lang], item: `${SITE_BASE}/${lang}` },
      { '@type': 'ListItem', position: 2, name: T.treatments[lang], item: `${SITE_BASE}/${lang}/treatments` },
      { '@type': 'ListItem', position: 3, name: t.title[lang], item: `${SITE_BASE}${treatmentPath(lang, t)}` },
    ],
  };
}

const TreatmentDetailPage: React.FC = () => {
  const { lang } = useOutletContext<{ lang: Language }>();
  const { slug } = useParams<{ slug: string }>();

  const treatment = slug ? findTreatmentBySlug(lang, slug) : undefined;

  if (!treatment) {
    // Try a fallback: treatment may exist under another language slug; redirect there.
    if (slug) {
      const guessed = TREATMENTS.find((t) =>
        Object.values(t.slug).includes(slug)
      );
      if (guessed) {
        return <Navigate to={treatmentPath(lang, guessed)} replace />;
      }
    }
    return <Navigate to={`/${lang}/treatments`} replace />;
  }

  const seoTitle = treatment.seoTitle?.[lang] ?? treatment.title[lang];
  const seoDescription = treatment.seoDescription?.[lang] ?? treatment.description[lang];
  const keywords = treatment.keywords?.[lang];
  const alternates = buildAlternates(treatment);
  const jsonLd: Array<Record<string, unknown>> = [
    buildMedicalProcedureJsonLd(treatment, lang),
    buildBreadcrumbJsonLd(treatment, lang),
  ];
  const faqLd = buildFaqJsonLd(treatment, lang);
  if (faqLd) jsonLd.push(faqLd);

  const sections = treatment.sections?.[lang] ?? [];
  const intro = treatment.intro?.[lang] ?? treatment.description[lang];
  const whoIsItFor = treatment.whoIsItFor?.[lang] ?? [];
  const benefits = treatment.benefits?.[lang] ?? [];
  const faqs = treatment.faqs?.[lang] ?? [];
  const related = (treatment.relatedIds ?? [])
    .map((id) => findTreatmentById(id))
    .filter((t): t is Treatment => Boolean(t));

  return (
    <article className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={keywords}
        lang={lang}
        alternates={alternates}
        jsonLd={jsonLd}
        image={treatment.image}
        ogType="article"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 mb-6">
        <nav aria-label="breadcrumbs" className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <Link to={`/${lang}`} className="hover:text-primary-600 transition-colors">
            {T.home[lang]}
          </Link>
          <span className="text-gray-400">/</span>
          <Link to={`/${lang}/treatments`} className="hover:text-primary-600 transition-colors">
            {T.treatments[lang]}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{treatment.title[lang]}</span>
        </nav>
      </div>

      {/* Hero */}
      <header className="container mx-auto px-6 mb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative min-h-[260px] lg:min-h-[400px]">
            <img
              src={treatment.image}
              alt={treatment.title[lang]}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r"></div>
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 text-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <i className={`fas ${treatment.icon} text-2xl`}></i>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold mb-2">
                    {T.treatments[lang]}
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif">{treatment.title[lang]}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <p className="text-gray-700 text-lg leading-relaxed">{intro}</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-primary-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-primary-600">{treatment.successRate}</div>
                <div className="text-sm text-gray-600">{T.successRate[lang]}</div>
              </div>
              <div className="bg-cyan-50 rounded-2xl p-4">
                <div className="text-2xl font-bold text-cyan-600">{treatment.duration[lang]}</div>
                <div className="text-sm text-gray-600">{T.duration[lang]}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to={`/${lang}/contact`}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              >
                {T.cta[lang]}
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <a
                href="https://wa.me/905338692330"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
              >
                <i className="fab fa-whatsapp text-lg mr-2"></i>
                {T.whatsapp[lang]}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.body}</p>
            </section>
          ))}

          {treatment.steps[lang] && treatment.steps[lang].length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4 flex items-center">
                <i className="fas fa-list-check text-primary-500 mr-2"></i>
                {T.treatmentSteps[lang]}
              </h2>
              <ol className="grid sm:grid-cols-2 gap-3">
                {treatment.steps[lang].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                    <span className="shrink-0 w-7 h-7 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {whoIsItFor.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4 flex items-center">
                <i className="fas fa-user-check text-primary-500 mr-2"></i>
                {T.whoIsItFor[lang]}
              </h2>
              <ul className="space-y-2">
                {whoIsItFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <i className="fas fa-check-circle text-primary-500 mt-1"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {faqs.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-serif text-gray-900 mb-4 flex items-center">
                <i className="fas fa-circle-question text-primary-500 mr-2"></i>
                {T.faqs[lang]}
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-gray-50 rounded-xl p-4 [&_summary]:cursor-pointer">
                    <summary className="font-semibold text-gray-900 flex items-center justify-between gap-3">
                      <span>{faq.q}</span>
                      <i className="fas fa-chevron-down text-primary-500 transition-transform group-open:rotate-180"></i>
                    </summary>
                    <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {benefits.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-serif text-gray-900 mb-4 flex items-center">
                <i className="fas fa-star text-amber-500 mr-2"></i>
                {T.benefits[lang]}
              </h2>
              <ul className="space-y-2">
                {benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <i className="fas fa-check text-emerald-500 mt-1"></i>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg p-6 text-white">
            <h2 className="text-xl font-bold mb-2">{T.cta[lang]}</h2>
            <p className="text-white/90 text-sm mb-4">{T.ctaLead[lang]}</p>
            <Link
              to={`/${lang}/contact`}
              className="inline-flex w-full items-center justify-center px-4 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-white/95 transition-all"
            >
              {T.cta[lang]}
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <a
              href="https://wa.me/905338692330"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center px-4 py-3 mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all"
            >
              <i className="fab fa-whatsapp text-lg mr-2"></i>
              {T.whatsapp[lang]}
            </a>
          </section>

          {related.length > 0 && (
            <section className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-serif text-gray-900 mb-4 flex items-center">
                <i className="fas fa-link text-primary-500 mr-2"></i>
                {T.related[lang]}
              </h2>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      to={treatmentPath(lang, r)}
                      className="flex items-center gap-3 p-2 -mx-2 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <span className="shrink-0 w-9 h-9 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                        <i className={`fas ${r.icon}`}></i>
                      </span>
                      <span className="text-sm text-gray-800 font-medium">{r.title[lang]}</span>
                      <i className="fas fa-arrow-right text-xs text-gray-400 ml-auto"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <Link
          to={`/${lang}/treatments`}
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-semibold group"
        >
          <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          {T.backToTreatments[lang]}
        </Link>
      </div>
    </article>
  );
};

export default TreatmentDetailPage;
