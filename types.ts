
export type Language = 'en' | 'tr' | 'de' | 'ru' | 'ar';

export interface Service {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
}

export interface Treatment {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  steps: Record<Language, string[]>;
  successRate: string;
  duration: Record<Language, string>;
  image: string;
  icon: string;
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
