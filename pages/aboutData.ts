import { Language } from '../types';
import type { Doctor } from '../types';

export const DOCTORS: Doctor[] = [
  {
    name: 'Op. Dr. Şevket Alptürk',
    title: {
      en: 'Founder & Clinical Director - Operating Gynecologist',
      tr: 'Kurucu & Klinik Direktörü - Operatör Jinekolog',
      de: 'Gründer & Klinischer Direktor - Operativer Gynäkologe',
      ru: 'Основатель и клинический директор - Оперативный гинеколог',
      ar: 'المؤسس والمدير السريري - طبيب نساء وتوليد جراح'
    },
    experience: '30+',
    image: '/doctors/dr-sevket-alpturk.jpg',
    specialties: {
      en: ['IVF', 'ICSI', 'Gynecology', 'Obstetrics', 'Infertility Treatment'],
      tr: ['IVF', 'ICSI', 'Jinekoloji', 'Obstetrik', 'Kısırlık Tedavisi'],
      de: ['IVF', 'ICSI', 'Gynäkologie', 'Geburtshilfe', 'Unfruchtbarkeitsbehandlung'],
      ru: ['ЭКО', 'ИКСИ', 'Гинекология', 'Акушерство', 'Лечение бесплодия'],
      ar: ['أطفال الأنابيب', 'الحقن المجهري', 'أمراض النساء', 'التوليد', 'علاج العقم']
    },
    bio: {
      en: 'Born in 1959 in Nicosia, North Cyprus. After completing his undergraduate degree at Ankara University Faculty of Medicine, he successfully received the Specialist Doctor title from the same University\'s Department of Obstetrics and Gynecology in 1989. Dr. Şevket Alptürk, with over 30 years of experience, has made it his principle to always follow technological and medical innovations and considers it his duty to offer the highest success to his patients.',
      tr: '1959 yılında Lefkoşa\'da dünyaya gelmiştir. Ankara Üniversitesi Tıp Fakültesi\'nde lisansını tamamladıktan sonra 1989 yılında yine aynı Üniversitenin Kadın Hastalıkları ve Doğum Anabilim Dalı\'ndan başarıyla Uzman Doktor Ünvanını almıştır. Dr. Şevket Alptürk 30 yılı aşkın tecrübesiyle teknolojik ve tıbbi yenilikleri her zaman takip etmeyi kendine prensip ederek hastalarına en yüksek başarıyı sunmayı kendine görev bilmiştir.',
      de: 'Geboren 1959 in Nikosia, Nordzypern. Nach Abschluss seines Grundstudiums an der Medizinischen Fakultät der Universität Ankara erhielt er 1989 erfolgreich den Titel Facharzt von derselben Universität, Abteilung für Geburtshilfe und Gynäkologie.',
      ru: 'Родился в 1959 году в Никосии, Северный Кипр. После завершения бакалавриата на медицинском факультете Анкарского университета, в 1989 году он успешно получил звание специалиста-врача от того же университета, кафедры акушерства и гинекологии.',
      ar: 'ولد عام 1959 في نيقوسيا، شمال قبرص. بعد إكمال دراسته الجامعية في كلية الطب بجامعة أنقرة، حصل بنجاح على لقب طبيب أخصائي من نفس الجامعة، قسم التوليد وأمراض النساء في عام 1989.'
    }
  }
];

export const ABOUT_FEATURES: { icon: string; [K in Language]: string }[] = [
  { icon: 'fa-hospital', en: 'First & Only Specialized Hospital', tr: 'İlk ve Tek Dal Hastanesi', de: 'Erstes & Einziges Fachkrankenhaus', ru: 'Первая и единственная специализированная больница', ar: 'أول وأول مستشفى متخصص' },
  { icon: 'fa-microscope', en: 'Embryology & Andrology Labs', tr: 'Embriyoloji ve Androloji Lab.', de: 'Embryologie- & Andrologielabors', ru: 'Лаборатории эмбриологии и андрологии', ar: 'مختبرات علم الأجنة والذكورة' },
  { icon: 'fa-dna', en: 'Genetics Laboratory', tr: 'Genetik Laboratuvarı', de: 'Genetiklabor', ru: 'Генетическая лаборатория', ar: 'المختبر الوراثي' },
  { icon: 'fa-certificate', en: 'Ministry of Health Approved', tr: 'Sağlık Bakanlığı Onaylı', de: 'Vom Gesundheitsministerium genehmigt', ru: 'Одобрено Министерством здравоохранения', ar: 'معتمد من وزارة الصحة' },
  { icon: 'fa-globe', en: 'International Patients', tr: 'Uluslararası Hastalar', de: 'Internationale Patienten', ru: 'Международные пациенты', ar: 'المرضى الدوليون' },
  { icon: 'fa-star', en: 'Highest Standards', tr: 'En Yüksek Standartlar', de: 'Höchste Standards', ru: 'Высочайшие стандарты', ar: 'أعلى المعايير' }
];
