
export type Language = 'en' | 'tr' | 'de' | 'ru' | 'ar';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface TreatmentSection {
  heading: string;
  body: string;
}

export interface TreatmentFaq {
  q: string;
  a: string;
}

export interface Treatment {
  id: string;
  /** Localized URL slug per language. URL: /:lang/treatments/:slug[lang] */
  slug: Record<Language, string>;
  title: Record<Language, string>;
  /** Short summary used on the listing card and as meta description fallback. */
  description: Record<Language, string>;
  /** Treatment workflow steps (badges shown on detail page). */
  steps: Record<Language, string[]>;
  successRate: string;
  duration: Record<Language, string>;
  image: string;
  icon: string;
  /** SEO meta title (50-60 chars recommended). */
  seoTitle?: Record<Language, string>;
  /** SEO meta description (140-160 chars recommended). */
  seoDescription?: Record<Language, string>;
  /** SEO keywords used in JSON-LD `keywords` field. */
  keywords?: Record<Language, string>;
  /** Lead/intro paragraph displayed at the top of the detail page. */
  intro?: Record<Language, string>;
  /** Long-form sections rendered with H2 headings on the detail page. */
  sections?: Record<Language, TreatmentSection[]>;
  /** Bullet list "Who is this for?". */
  whoIsItFor?: Record<Language, string[]>;
  /** Bullet list of advantages. */
  benefits?: Record<Language, string[]>;
  /** FAQ items rendered with FAQPage JSON-LD. */
  faqs?: Record<Language, TreatmentFaq[]>;
  /** IDs of related treatments shown at the bottom of the detail page. */
  relatedIds?: string[];
}

export interface Translation {
  navHome: string;
  navServices: string;
  navAbout: string;
  navBlog: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  servicesTitle: string;
  servicesSubtitle: string;
  aiTitle: string;
  aiPlaceholder: string;
  footerRights: string;
  blogTitle: string;
  blogSubtitle: string;
  blogReadMore: string;
  blogFeatured: string;
  blogLatest: string;
}

export interface BlogPost {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string>;
  date: string;
  category: Record<Language, string>;
  featured?: boolean;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Doctor {
  name: string;
  title: Record<Language, string>;
  experience: string;
  image: string;
  specialties: Record<Language, string[]>;
  bio: Record<Language, string>;
}
