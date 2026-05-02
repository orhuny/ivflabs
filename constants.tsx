
import { Service, Translation, Language, BlogPost, Treatment } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ivf',
    title: {
      en: 'IVF Treatment',
      tr: 'Tüp Bebek Tedavisi',
      de: 'IVF-Behandlung',
      ru: 'Лечение ЭКО',
      ar: 'علاج أطفال الأنابيب'
    },
    description: {
      en: 'State-of-the-art laboratory procedures to help you achieve your dream of parenthood.',
      tr: 'Anne-baba olma hayalinizi gerçekleştirmenize yardımcı olacak en son teknoloji laboratuvar prosedürleri.',
      de: 'Modernste Laborverfahren, um Ihren Traum von der Elternschaft zu verwirklichen.',
      ru: 'Современные лабораторные процедуры, которые помогут вам осуществить мечту о родительстве.',
      ar: 'إجراءات مختبرية متطورة لمساعدتك على تحقيق حلمك بالأبوة والأمومة.'
    },
    icon: 'fa-baby'
  },
  {
    id: 'icsi',
    title: {
      en: 'ICSI',
      tr: 'ICSI (Mikroenjeksiyon)',
      de: 'ICSI (Mikroinjektion)',
      ru: 'ИКСИ (Микроинъекция)',
      ar: 'الحقن المجهري (ICSI)'
    },
    description: {
      en: 'Micro-injection of a single sperm into an egg to maximize fertilization success.',
      tr: 'Döllenme başarısını en üst düzeye çıkarmak için tek bir spermin yumurtaya mikro enjeksiyonu.',
      de: 'Mikroinjektion eines einzelnen Spermiums in eine Eizelle zur Maximierung des Befruchtungserfolgs.',
      ru: 'Микроинъекция одного сперматозоида в яйцеклетку для максимального успеха оплодотворения.',
      ar: 'الحقن المجهري لحيوان منوي واحد في البويضة لتحقيق أقصى نجاح للتخصيب.'
    },
    icon: 'fa-microscope'
  },
  {
    id: 'pgd',
    title: {
      en: 'Genetic Testing (PGD/PGS)',
      tr: 'Genetik Tarama (PGD/PGS)',
      de: 'Genetische Tests (PGD/PGS)',
      ru: 'Генетическое тестирование (ПГД/ПГС)',
      ar: 'الفحص الجيني (PGD/PGS)'
    },
    description: {
      en: 'Screening embryos for genetic conditions before implantation.',
      tr: 'İmplantasyon öncesi embriyoların genetik durumlar açısından taranması.',
      de: 'Untersuchung von Embryonen auf genetische Erkrankungen vor der Implantation.',
      ru: 'Скрининг эмбрионов на генетические заболевания перед имплантацией.',
      ar: 'فحص الأجنة للكشف عن الحالات الوراثية قبل الزرع.'
    },
    icon: 'fa-dna'
  },
  {
    id: 'egg-freezing',
    title: {
      en: 'Egg & Embryo Freezing',
      tr: 'Yumurta ve Embriyo Dondurma',
      de: 'Einfrieren von Eizellen und Embryonen',
      ru: 'Заморозка яйцеклеток и эмбрионов',
      ar: 'تجميد البويضات والأجنة'
    },
    description: {
      en: 'Cryopreservation techniques to preserve fertility for the future.',
      tr: 'Gelecekteki doğurganlığı korumak için kriyoprezervasyon teknikleri.',
      de: 'Kryokonservierungstechniken zur Erhaltung der Fruchtbarkeit für die Zukunft.',
      ru: 'Методы криоконсервации для сохранения фертильности на будущее.',
      ar: 'تقنيات الحفظ بالتجميد للحفاظ على الخصوبة للمستقبل.'
    },
    icon: 'fa-snowflake'
  }
];

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    navHome: 'Home',
    navServices: 'Treatments',
    navAbout: 'About Us',
    navBlog: 'Blog',
    navContact: 'Contact',
    heroTitle: 'Excellence in Embryology & Fertility',
    heroSubtitle: 'Trust our expert lab team to guide you through your journey with advanced medical technology in Cyprus.',
    heroCTA: 'Start Your Journey',
    servicesTitle: 'Our Treatments',
    servicesSubtitle: 'We provide comprehensive fertility treatments with the latest technology and expert care.',
    aiTitle: 'Fertility AI Assistant',
    aiPlaceholder: 'Ask anything about IVF or our lab...',
    footerRights: 'All rights reserved.',
    blogTitle: 'Our Blog',
    blogSubtitle: 'Latest news and insights about fertility treatments',
    blogReadMore: 'Read More',
    blogFeatured: 'Featured',
    blogLatest: 'Latest Posts'
  },
  tr: {
    navHome: 'Ana Sayfa',
    navServices: 'Tedaviler',
    navAbout: 'Hakkımızda',
    navBlog: 'Blog',
    navContact: 'İletişim',
    heroTitle: 'Embriyoloji ve Doğurganlıkta Mükemmeliyet',
    heroSubtitle: 'Kıbrıs\'taki gelişmiş tıbbi teknoloji ile yolculuğunuzda size rehberlik edecek uzman laboratuvar ekibimize güvenin.',
    heroCTA: 'Yolculuğunuza Başlayın',
    servicesTitle: 'Tedavilerimiz',
    servicesSubtitle: 'En son teknoloji ve uzman kadromuzla kapsamlı doğurganlık tedavileri sunuyoruz.',
    aiTitle: 'Doğurganlık AI Asistanı',
    aiPlaceholder: 'IVF veya laboratuvarımız hakkında her şeyi sorun...',
    footerRights: 'Tüm hakları saklıdır.',
    blogTitle: 'Blogumuz',
    blogSubtitle: 'Doğurganlık tedavileri hakkında son haberler ve bilgiler',
    blogReadMore: 'Devamını Oku',
    blogFeatured: 'Öne Çıkanlar',
    blogLatest: 'Son Yazılar'
  },
  de: {
    navHome: 'Startseite',
    navServices: 'Behandlungen',
    navAbout: 'Über Uns',
    navBlog: 'Blog',
    navContact: 'Kontakt',
    heroTitle: 'Exzellenz in Embryologie & Fruchtbarkeit',
    heroSubtitle: 'Vertrauen Sie unserem Expertenteam, das Sie mit modernster Medizintechnik auf Zypern durch Ihre Reise begleitet.',
    heroCTA: 'Starten Sie Ihre Reise',
    servicesTitle: 'Unsere Behandlungen',
    servicesSubtitle: 'Wir bieten umfassende Fruchtbarkeitsbehandlungen mit modernster Technik und Expertise.',
    aiTitle: 'Fruchtbarkeits-KI-Assistent',
    aiPlaceholder: 'Fragen Sie alles über IVF oder unser Labor...',
    footerRights: 'Alle Rechte vorbehalten.',
    blogTitle: 'Unser Blog',
    blogSubtitle: 'Neueste Nachrichten und Einblicke zu Fruchtbarkeitsbehandlungen',
    blogReadMore: 'Weiterlesen',
    blogFeatured: 'Ausgewählt',
    blogLatest: 'Neueste Beiträge'
  },
  ru: {
    navHome: 'Главная',
    navServices: 'Лечение',
    navAbout: 'О Нас',
    navBlog: 'Блог',
    navContact: 'Контакты',
    heroTitle: 'Превосходство в эмбриологии и фертильности',
    heroSubtitle: 'Доверьтесь нашей команде экспертов, которая проведет вас через ваш путь с передовыми медицинскими технологиями на Кипре.',
    heroCTA: 'Начните свой путь',
    servicesTitle: 'Наши методы лечения',
    servicesSubtitle: 'Комплексное лечение бесплодия с современными технологиями и экспертным подходом.',
    aiTitle: 'ИИ-ассистент по фертильности',
    aiPlaceholder: 'Спросите что угодно об ЭКО или нашей лаборатории...',
    footerRights: 'Все права защищены.',
    blogTitle: 'Наш блог',
    blogSubtitle: 'Последние новости и информация о лечении бесплодия',
    blogReadMore: 'Читать далее',
    blogFeatured: 'Рекомендуемые',
    blogLatest: 'Последние посты'
  },
  ar: {
    navHome: 'الرئيسية',
    navServices: 'العلاجات',
    navAbout: 'من نحن',
    navBlog: 'المدونة',
    navContact: 'اتصل بنا',
    heroTitle: 'التميز في علم الأجنة والخصوبة',
    heroSubtitle: 'ثق بفريقنا المتخصص ليرشدك خلال رحلتك بأحدث التقنيات الطبية في قبرص.',
    heroCTA: 'ابدأ رحلتك',
    servicesTitle: 'علاجاتنا',
    servicesSubtitle: 'نقدم علاجات خصوبة شاملة بأحدث التقنيات ورعاية متخصصة.',
    aiTitle: 'مساعد الخصوبة الذكي',
    aiPlaceholder: 'اسأل أي شيء عن أطفال الأنابيب أو مختبرنا...',
    footerRights: 'جميع الحقوق محفوظة.',
    blogTitle: 'مدونتنا',
    blogSubtitle: 'أحدث الأخبار والمعلومات حول علاجات الخصوبة',
    blogReadMore: 'اقرأ المزيد',
    blogFeatured: 'مميز',
    blogLatest: 'آخر المنشورات'
  }
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'egg-donation-stages',
    title: {
      en: 'Stages of Egg Donation Process',
      tr: 'Yumurta Donasyonu İşleminin Aşamaları',
      de: 'Stadien des Eizellspendeprozesses',
      ru: 'Этапы процесса донорства яйцеклеток',
      ar: 'مراحل عملية التبرع بالبويضات'
    },
    excerpt: {
      en: 'STAGE 1: Diagnosis that the mother candidate\'s egg reserve is depleted. STAGE 2: Tests and examinations of the mother and father candidates...',
      tr: 'AŞAMA 1 : ANNE ADAYININ YUMURTA REZERVİNİN TÜKENMİŞ OLDUĞUNA DAİR TEŞHİSİN KONULMASI AŞAMA 2 : ANNE VE BABA ADAYLARININ TETKİK VE...',
      de: 'STUFE 1: Diagnose, dass die Eizellreserve der Mutterkandidatin erschöpft ist. STUFE 2: Tests und Untersuchungen der Mutter- und Vaterkandidaten...',
      ru: 'ЭТАП 1: Диагностика того, что резерв яйцеклеток кандидата-матери исчерпан. ЭТАП 2: Тесты и обследования кандидатов-матери и отца...',
      ar: 'المرحلة 1: تشخيص استنفاد احتياطي البويضات للمرشحة الأم. المرحلة 2: الفحوصات والتحاليل للمرشحين الأم والأب...'
    },
    content: {
      en: 'Egg donation is a highly successful treatment method for women who cannot produce healthy eggs. The process consists of several carefully planned stages:\n\nSTAGE 1: Diagnosis that the mother candidate\'s egg reserve is depleted. This is determined through comprehensive medical examinations including hormone tests, ultrasound scans, and ovarian reserve assessments.\n\nSTAGE 2: Tests and examinations of the mother and father candidates. Both partners undergo thorough health screenings including blood tests, genetic screenings, and infectious disease tests to ensure the best possible outcome.\n\nSTAGE 3: Selection of a suitable donor. Our donor pool consists of healthy, young women who have undergone extensive medical and genetic testing. Donors are matched based on physical characteristics and blood type compatibility.\n\nSTAGE 4: Synchronization of the donor and recipient cycles. Hormonal medications are used to synchronize the menstrual cycles of both the donor and recipient, ensuring optimal timing for the procedure.\n\nSTAGE 5: Egg collection from the donor. Under sedation, eggs are collected from the donor using a minimally invasive procedure. The procedure is painless and takes approximately 15-20 minutes.\n\nSTAGE 6: Fertilization with the father\'s sperm. The collected eggs are fertilized with the father\'s sperm in our state-of-the-art laboratory using ICSI (Intracytoplasmic Sperm Injection) technique for maximum success rates.\n\nSTAGE 7: Embryo transfer to the mother. After 3-5 days of development, the highest quality embryos are selected and transferred to the mother\'s uterus. This is a simple, painless procedure that takes only a few minutes.\n\nOur success rates with egg donation are among the highest in the world, typically ranging from 70-85% per cycle. The entire process is conducted with the utmost care and professionalism, ensuring the best possible outcome for our patients.',
      tr: 'Yumurta donasyonu, sağlıklı yumurta üretemeyen kadınlar için oldukça başarılı bir tedavi yöntemidir. Süreç, dikkatle planlanmış birkaç aşamadan oluşur:\n\nAŞAMA 1: Anne adayının yumurta rezervinin tükenmiş olduğuna dair teşhisin konulması. Bu, hormon testleri, ultrason taramaları ve yumurtalık rezervi değerlendirmeleri dahil kapsamlı tıbbi muayenelerle belirlenir.\n\nAŞAMA 2: Anne ve baba adaylarının tetkik ve muayenelerinin yapılması. Her iki eş de, en iyi sonucu sağlamak için kan testleri, genetik taramalar ve bulaşıcı hastalık testleri dahil kapsamlı sağlık taramalarından geçer.\n\nAŞAMA 3: Uygun donörün seçilmesi. Donör havuzumuz, kapsamlı tıbbi ve genetik testlerden geçmiş sağlıklı, genç kadınlardan oluşur. Donörler, fiziksel özellikler ve kan grubu uyumluluğuna göre eşleştirilir.\n\nAŞAMA 4: Donör ve alıcı döngülerinin senkronize edilmesi. Hormonal ilaçlar, prosedür için optimal zamanlamayı sağlamak için hem donörün hem de alıcının adet döngülerini senkronize etmek için kullanılır.\n\nAŞAMA 5: Donörden yumurta toplanması. Sedasyon altında, minimal invaziv bir prosedür kullanılarak donörden yumurtalar toplanır. Prosedür ağrısızdır ve yaklaşık 15-20 dakika sürer.\n\nAŞAMA 6: Baba adayının spermi ile döllenme. Toplanan yumurtalar, en yüksek başarı oranları için ICSI (Intrasitoplazmik Sperm Enjeksiyonu) tekniği kullanılarak en son teknoloji laboratuvarımızda baba adayının spermi ile döllenir.\n\nAŞAMA 7: Embriyonun anne adayına nakli. 3-5 günlük gelişimden sonra, en yüksek kaliteli embriyolar seçilir ve anne adayının rahmine transfer edilir. Bu, sadece birkaç dakika süren basit, ağrısız bir prosedürdür.\n\nYumurta donasyonu ile başarı oranlarımız dünyadaki en yüksek oranlar arasındadır, tipik olarak döngü başına %70-85 arasında değişmektedir. Tüm süreç, hastalarımız için en iyi sonucu sağlamak amacıyla en yüksek özen ve profesyonellikle yürütülür.',
      de: 'Die Eizellspende ist eine sehr erfolgreiche Behandlungsmethode für Frauen, die keine gesunden Eizellen produzieren können. Der Prozess besteht aus mehreren sorgfältig geplanten Stadien:\n\nSTUFE 1: Diagnose, dass die Eizellreserve der Mutterkandidatin erschöpft ist. Dies wird durch umfassende medizinische Untersuchungen einschließlich Hormontests, Ultraschalluntersuchungen und Eierstockreservebewertungen festgestellt.\n\nSTUFE 2: Tests und Untersuchungen der Mutter- und Vaterkandidaten. Beide Partner durchlaufen gründliche Gesundheitsuntersuchungen, einschließlich Bluttests, genetischer Screenings und Tests auf Infektionskrankheiten, um das bestmögliche Ergebnis zu gewährleisten.\n\nSTUFE 3: Auswahl eines geeigneten Spenders. Unser Spenderpool besteht aus gesunden, jungen Frauen, die umfangreiche medizinische und genetische Tests durchlaufen haben. Spender werden basierend auf physischen Merkmalen und Blutgruppenkompatibilität zugeordnet.\n\nSTUFE 4: Synchronisierung der Spender- und Empfängerzyklen. Hormonelle Medikamente werden verwendet, um die Menstruationszyklen sowohl des Spenders als auch des Empfängers zu synchronisieren und so eine optimale Zeitplanung für den Eingriff zu gewährleisten.\n\nSTUFE 5: Eizellentnahme vom Spender. Unter Sedierung werden Eizellen vom Spender mit einem minimalinvasiven Verfahren entnommen. Der Eingriff ist schmerzlos und dauert etwa 15-20 Minuten.\n\nSTUFE 6: Befruchtung mit dem Sperma des Vaters. Die gesammelten Eizellen werden mit dem Sperma des Vaters in unserem modernsten Labor unter Verwendung der ICSI-Technik (Intrazytoplasmatische Spermieninjektion) für maximale Erfolgsraten befruchtet.\n\nSTUFE 7: Embryotransfer zur Mutter. Nach 3-5 Tagen Entwicklung werden die qualitativ hochwertigsten Embryonen ausgewählt und in die Gebärmutter der Mutter übertragen. Dies ist ein einfaches, schmerzloses Verfahren, das nur wenige Minuten dauert.\n\nUnsere Erfolgsraten bei der Eizellspende gehören zu den höchsten der Welt und liegen typischerweise zwischen 70-85% pro Zyklus. Der gesamte Prozess wird mit größter Sorgfalt und Professionalität durchgeführt, um das bestmögliche Ergebnis für unsere Patienten zu gewährleisten.',
      ru: 'Донорство яйцеклеток — это очень успешный метод лечения для женщин, которые не могут производить здоровые яйцеклетки. Процесс состоит из нескольких тщательно спланированных этапов:\n\nЭТАП 1: Диагностика того, что резерв яйцеклеток кандидата-матери исчерпан. Это определяется с помощью комплексных медицинских обследований, включая гормональные тесты, ультразвуковые сканирования и оценку резерва яичников.\n\nЭТАП 2: Тесты и обследования кандидатов-матери и отца. Оба партнера проходят тщательные медицинские обследования, включая анализы крови, генетические скрининги и тесты на инфекционные заболевания, чтобы обеспечить наилучший возможный результат.\n\nЭТАП 3: Выбор подходящего донора. Наш пул доноров состоит из здоровых молодых женщин, прошедших обширные медицинские и генетические тесты. Доноры подбираются на основе физических характеристик и совместимости групп крови.\n\nЭТАП 4: Синхронизация циклов донора и реципиента. Гормональные препараты используются для синхронизации менструальных циклов как донора, так и реципиента, обеспечивая оптимальное время для процедуры.\n\nЭТАП 5: Забор яйцеклеток у донора. Под седацией яйцеклетки собираются у донора с помощью минимально инвазивной процедуры. Процедура безболезненна и занимает примерно 15-20 минут.\n\nЭТАП 6: Оплодотворение спермой отца. Собранные яйцеклетки оплодотворяются спермой отца в нашей современной лаборатории с использованием техники ИКСИ (интрацитоплазматическая инъекция сперматозоида) для максимальных показателей успеха.\n\nЭТАП 7: Перенос эмбриона матери. После 3-5 дней развития выбираются эмбрионы наивысшего качества и переносятся в матку матери. Это простая, безболезненная процедура, которая занимает всего несколько минут.\n\nНаши показатели успеха с донорством яйцеклеток являются одними из самых высоких в мире, обычно составляя 70-85% за цикл. Весь процесс проводится с максимальной осторожностью и профессионализмом, обеспечивая наилучший возможный результат для наших пациентов.',
      ar: 'التبرع بالبويضات هو طريقة علاج ناجحة للغاية للنساء اللواتي لا يستطعن إنتاج بويضات صحية. تتكون العملية من عدة مراحل مخططة بعناية:\n\nالمرحلة 1: تشخيص استنفاد احتياطي البويضات للمرشحة الأم. يتم تحديد ذلك من خلال الفحوصات الطبية الشاملة بما في ذلك اختبارات الهرمونات وفحوصات الموجات فوق الصوتية وتقييمات احتياطي المبيض.\n\nالمرحلة 2: الفحوصات والتحاليل للمرشحين الأم والأب. يخضع كلا الشريكين لفحوصات صحية شاملة بما في ذلك اختبارات الدم والفحوصات الوراثية واختبارات الأمراض المعدية لضمان أفضل نتيجة ممكنة.\n\nالمرحلة 3: اختيار متبرع مناسب. يتكون مجموعة المتبرعين لدينا من نساء شابات وصحيات خضعن لفحوصات طبية ووراثية شاملة. يتم مطابقة المتبرعين بناءً على الخصائص الجسدية وتوافق فصيلة الدم.\n\nالمرحلة 4: تزامن دورات المتبرع والمستقبل. تُستخدم الأدوية الهرمونية لتزامن الدورات الشهرية لكل من المتبرع والمستقبل، مما يضمن التوقيت الأمثل للإجراء.\n\nالمرحلة 5: جمع البويضات من المتبرع. تحت التخدير، يتم جمع البويضات من المتبرع باستخدام إجراء طفيف التوغل. الإجراء غير مؤلم ويستغرق حوالي 15-20 دقيقة.\n\nالمرحلة 6: التخصيب بحيوانات الأب المنوية. يتم تخصيب البويضات المجمعة بحيوانات الأب المنوية في مختبرنا المتطور باستخدام تقنية ICSI (الحقن داخل الهيولى للحيوان المنوي) لتحقيق أقصى معدلات النجاح.\n\nالمرحلة 7: نقل الجنين للأم. بعد 3-5 أيام من التطور، يتم اختيار أجنة عالية الجودة ونقلها إلى رحم الأم. هذا إجراء بسيط وغير مؤلم يستغرق بضع دقائق فقط.\n\nمعدلات نجاحنا مع التبرع بالبويضات من بين أعلى المعدلات في العالم، وعادة ما تتراوح بين 70-85% لكل دورة. يتم تنفيذ العملية بأكملها بأقصى قدر من العناية والاحترافية، مما يضمن أفضل نتيجة ممكنة لمرضانا.'
    },
    date: '2024-09-15',
    category: {
      en: 'Egg Donation',
      tr: 'Yumurta Donasyonu',
      de: 'Eizellspende',
      ru: 'Донорство яйцеклеток',
      ar: 'التبرع بالبويضات'
    },
    featured: true,
    image: '/images/yumurta-donasyonu.jpg'
  },
  {
    id: 'vacation-baby',
    title: {
      en: 'Meet Your Baby on Vacation',
      tr: 'Bebeğinize tatilinizde kavuşun',
      de: 'Lernen Sie Ihr Baby im Urlaub kennen',
      ru: 'Встретьте своего ребенка в отпуске',
      ar: 'قابل طفلك في إجازتك'
    },
    excerpt: {
      en: 'As Doğuş IVF Center, we have been making your baby dreams come true for many years. Our team provides you with all the latest technology available in the world...',
      tr: 'Doğuş Tüp Bebek Merkezi olarak çok uzun yıllardan bu yana bebek hayalinizi gerçeğe dönüştürüyoruz. Ekibimiz sizler için dünyada mevcut...',
      de: 'Als Doğuş IVF-Zentrum verwirklichen wir seit vielen Jahren Ihre Babyträume. Unser Team bietet Ihnen die neueste Technologie, die weltweit verfügbar ist...',
      ru: 'Как центр ЭКО Doğuş, мы уже много лет воплощаем ваши мечты о ребенке. Наша команда предоставляет вам все новейшие технологии, доступные в мире...',
      ar: 'كمركز Doğuş لأطفال الأنابيب، نحقق أحلام طفلك منذ سنوات عديدة. يقدم فريقنا لك أحدث التقنيات المتاحة في العالم...'
    },
    content: {
      en: 'As Doğuş IVF Center, we have been making your baby dreams come true for many years. Our team provides you with all the latest technology available in the world for your treatment. Cyprus offers a perfect vacation destination while you receive your treatment. You can combine your treatment with a beautiful vacation experience.\n\nCyprus is a beautiful Mediterranean island known for its stunning beaches, warm climate, and rich history. During your IVF treatment, you can enjoy the island\'s natural beauty, relax on pristine beaches, explore historical sites, and savor delicious Mediterranean cuisine. The peaceful and relaxing environment of Cyprus can actually contribute positively to your treatment success.\n\nOur center is located in Nicosia, the capital of Northern Cyprus, which offers excellent accommodation options, restaurants, and cultural attractions. Many of our patients choose to extend their stay to enjoy a vacation while undergoing treatment. We can assist you in finding suitable accommodation and planning your stay to make it both medically successful and personally enjoyable.\n\nThe combination of world-class medical care and a beautiful vacation destination makes Cyprus an ideal choice for your IVF journey. Our experienced team will ensure that your treatment is conducted with the highest standards while you enjoy the Mediterranean lifestyle.',
      tr: 'Doğuş Tüp Bebek Merkezi olarak çok uzun yıllardan bu yana bebek hayalinizi gerçeğe dönüştürüyoruz. Ekibimiz sizler için dünyada mevcut tüm son teknolojiyi tedavinizde kullanmaktadır. Kıbrıs, tedavinizi alırken mükemmel bir tatil destinasyonu sunmaktadır. Tedavinizi güzel bir tatil deneyimi ile birleştirebilirsiniz.\n\nKıbrıs, muhteşem plajları, sıcak iklimi ve zengin tarihi ile bilinen güzel bir Akdeniz adasıdır. Tüp bebek tedaviniz sırasında adanın doğal güzelliklerinin tadını çıkarabilir, bakir plajlarda dinlenebilir, tarihi yerleri keşfedebilir ve lezzetli Akdeniz mutfağının tadına bakabilirsiniz. Kıbrıs\'ın huzurlu ve rahatlatıcı ortamı, tedavi başarınıza olumlu katkıda bulunabilir.\n\nMerkezimiz, Kuzey Kıbrıs\'ın başkenti Lefkoşa\'da bulunmaktadır ve mükemmel konaklama seçenekleri, restoranlar ve kültürel cazibe merkezleri sunmaktadır. Hastalarımızın birçoğu tedavi görürken tatil yapmak için kalış sürelerini uzatmayı tercih etmektedir. Size uygun konaklama bulmanızda ve hem tıbbi olarak başarılı hem de kişisel olarak keyifli bir kalış planlamanızda yardımcı olabiliriz.\n\nDünya standartlarında tıbbi bakım ve güzel bir tatil destinasyonunun birleşimi, Kıbrıs\'ı tüp bebek yolculuğunuz için ideal bir seçim haline getirmektedir. Deneyimli ekibimiz, Akdeniz yaşam tarzının tadını çıkarırken tedavinizin en yüksek standartlarla yürütülmesini sağlayacaktır.',
      de: 'Als Doğuş IVF-Zentrum verwirklichen wir seit vielen Jahren Ihre Babyträume. Unser Team bietet Ihnen die neueste Technologie, die weltweit verfügbar ist, für Ihre Behandlung. Zypern bietet ein perfektes Urlaubsziel, während Sie Ihre Behandlung erhalten. Sie können Ihre Behandlung mit einem schönen Urlaubserlebnis kombinieren.\n\nZypern ist eine wunderschöne Mittelmeerinsel, die für ihre atemberaubenden Strände, warmes Klima und reiche Geschichte bekannt ist. Während Ihrer IVF-Behandlung können Sie die natürliche Schönheit der Insel genießen, an unberührten Stränden entspannen, historische Stätten erkunden und köstliche mediterrane Küche genießen. Die friedliche und entspannende Umgebung Zyperns kann tatsächlich positiv zum Erfolg Ihrer Behandlung beitragen.\n\nUnser Zentrum befindet sich in Nikosia, der Hauptstadt Nordzyperns, die ausgezeichnete Unterkunftsmöglichkeiten, Restaurants und kulturelle Sehenswürdigkeiten bietet. Viele unserer Patienten entscheiden sich dafür, ihren Aufenthalt zu verlängern, um einen Urlaub zu genießen, während sie sich einer Behandlung unterziehen. Wir können Ihnen bei der Suche nach einer geeigneten Unterkunft und der Planung Ihres Aufenthalts helfen, um ihn sowohl medizinisch erfolgreich als auch persönlich angenehm zu gestalten.\n\nDie Kombination aus medizinischer Versorgung auf Weltklasseniveau und einem wunderschönen Urlaubsziel macht Zypern zu einer idealen Wahl für Ihre IVF-Reise. Unser erfahrenes Team wird sicherstellen, dass Ihre Behandlung nach höchsten Standards durchgeführt wird, während Sie den mediterranen Lebensstil genießen.',
      ru: 'Как центр ЭКО Doğuş, мы уже много лет воплощаем ваши мечты о ребенке. Наша команда предоставляет вам все новейшие технологии, доступные в мире, для вашего лечения. Кипр предлагает идеальное место для отпуска, пока вы проходите лечение. Вы можете совместить лечение с прекрасным отпуском.\n\nКипр — красивый средиземноморский остров, известный своими потрясающими пляжами, теплым климатом и богатой историей. Во время лечения ЭКО вы можете наслаждаться природной красотой острова, отдыхать на нетронутых пляжах, исследовать исторические места и наслаждаться вкусной средиземноморской кухней. Спокойная и расслабляющая атмосфера Кипра может положительно способствовать успеху вашего лечения.\n\nНаш центр расположен в Никосии, столице Северного Кипра, который предлагает отличные варианты размещения, рестораны и культурные достопримечательности. Многие из наших пациентов предпочитают продлить свое пребывание, чтобы насладиться отпуском во время лечения. Мы можем помочь вам найти подходящее жилье и спланировать ваше пребывание, чтобы сделать его как медицински успешным, так и лично приятным.\n\nСочетание медицинской помощи мирового класса и прекрасного места для отпуска делает Кипр идеальным выбором для вашего пути ЭКО. Наш опытный коллектив обеспечит проведение вашего лечения по высочайшим стандартам, пока вы наслаждаетесь средиземноморским образом жизни.',
      ar: 'كمركز Doğuş لأطفال الأنابيب، نحقق أحلام طفلك منذ سنوات عديدة. يقدم فريقنا لك أحدث التقنيات المتاحة في العالم لعلاجك. تقدم قبرص وجهة عطلة مثالية أثناء تلقي العلاج. يمكنك الجمع بين العلاج وتجربة عطلة جميلة.\n\nقبرص جزيرة متوسطية جميلة معروفة بشواطئها الخلابة ومناخها الدافئ وتاريخها الغني. أثناء علاج أطفال الأنابيب، يمكنك الاستمتاع بالجمال الطبيعي للجزيرة والاسترخاء على الشواطئ البكر واستكشاف المواقع التاريخية وتذوق المأكولات المتوسطية اللذيذة. البيئة الهادئة والمريحة في قبرص يمكن أن تساهم بشكل إيجابي في نجاح علاجك.\n\nيقع مركزنا في نيقوسيا، عاصمة شمال قبرص، والتي توفر خيارات إقامة ممتازة ومطاعم ومعالم ثقافية. يختار العديد من مرضانا تمديد إقامتهم للاستمتاع بعطلة أثناء الخضوع للعلاج. يمكننا مساعدتك في العثور على إقامة مناسبة وتخطيط إقامتك لجعلها ناجحة طبيًا وممتعة شخصيًا.\n\nالجمع بين الرعاية الطبية على مستوى عالمي ووجهة عطلة جميلة يجعل قبرص خيارًا مثاليًا لرحلة أطفال الأنابيب. سيضمن فريقنا ذو الخبرة إجراء علاجك بأعلى المعايير بينما تستمتع بأسلوب الحياة المتوسطي.'
    },
    date: '2024-09-10',
    category: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      ru: 'Лечение',
      ar: 'العلاج'
    },
    featured: true,
    image: '/images/mother&baby at the beach.jpg'
  },
  {
    id: 'accommodation-cyprus',
    title: {
      en: 'Accommodation in Cyprus for IVF Treatments',
      tr: 'Tüp Bebek Tedavilerinde Kıbrıs\'ta Konaklama',
      de: 'Unterkunft auf Zypern für IVF-Behandlungen',
      ru: 'Размещение на Кипре для лечения ЭКО',
      ar: 'الإقامة في قبرص لعلاجات أطفال الأنابيب'
    },
    excerpt: {
      en: 'For our patients who want to spend the preparation phase before the procedures in Cyprus, approximately 20 days of accommodation...',
      tr: 'Tüp bebek tedavileriniz için işlemlerden önceki hazırlık aşamasını da Kıbrıs\'ta geçirmek isteyen hastalarımız yaklaşık 20 günlük bir...',
      de: 'Für unsere Patienten, die die Vorbereitungsphase vor den Eingriffen auf Zypern verbringen möchten, etwa 20 Tage Unterkunft...',
      ru: 'Для наших пациентов, которые хотят провести подготовительный этап перед процедурами на Кипре, примерно 20 дней размещения...',
      ar: 'للمرضى الذين يرغبون في قضاء مرحلة التحضير قبل الإجراءات في قبرص، حوالي 20 يومًا من الإقامة...'
    },
    content: {
      en: 'For our patients who want to spend the preparation phase before the procedures in Cyprus, approximately 20 days of accommodation is required. We can help you find suitable accommodation options near our center. Cyprus offers beautiful hotels and apartments that provide comfort during your treatment period.\n\nThe preparation phase for IVF treatment typically includes initial consultations, medical examinations, hormone stimulation, and monitoring. During this period, you will need to stay in Cyprus to attend regular appointments at our center. We understand that finding comfortable and convenient accommodation is important for your peace of mind during this crucial time.\n\nOur team can assist you in finding accommodation that suits your preferences and budget. Options range from luxury hotels with full amenities to comfortable apartments with kitchen facilities. Many accommodations are located within walking distance or a short drive from our center, making it easy to attend your appointments.\n\nWe work with trusted accommodation providers who understand the needs of our patients. Many offer special rates for medical tourists and provide a supportive environment during your treatment. Whether you prefer a hotel with daily housekeeping or a private apartment for more independence, we can help you find the perfect place to stay.\n\nAdditionally, Cyprus offers excellent transportation options, restaurants serving international cuisine, and various leisure activities to help you relax during your stay. Our team is always available to assist with any accommodation-related questions or concerns.',
      tr: 'Tüp bebek tedavileriniz için işlemlerden önceki hazırlık aşamasını da Kıbrıs\'ta geçirmek isteyen hastalarımız yaklaşık 20 günlük bir konaklama süreci gerektirmektedir. Merkezimize yakın uygun konaklama seçenekleri bulmanıza yardımcı olabiliriz. Kıbrıs, tedavi süreniz boyunca konfor sağlayan güzel oteller ve daireler sunmaktadır.\n\nTüp bebek tedavisi için hazırlık aşaması genellikle ilk konsültasyonları, tıbbi muayeneleri, hormon stimülasyonunu ve izlemeyi içerir. Bu dönemde, merkezimizde düzenli randevulara katılmak için Kıbrıs\'ta kalmanız gerekecektir. Bu kritik dönemde rahat ve uygun bir konaklama bulmanın huzurunuz için önemli olduğunu anlıyoruz.\n\nEkibimiz, tercihlerinize ve bütçenize uygun konaklama bulmanızda size yardımcı olabilir. Seçenekler, tam donanımlı lüks otellerden mutfaklı rahat dairelere kadar uzanmaktadır. Birçok konaklama, merkezimize yürüme mesafesinde veya kısa bir araba yolculuğu mesafesinde bulunmaktadır, bu da randevularınıza katılmayı kolaylaştırır.\n\nHastalarımızın ihtiyaçlarını anlayan güvenilir konaklama sağlayıcılarıyla çalışıyoruz. Birçoğu tıbbi turistler için özel fiyatlar sunar ve tedaviniz sırasında destekleyici bir ortam sağlar. Günlük temizlik hizmeti olan bir otel mi yoksa daha fazla bağımsızlık için özel bir daire mi tercih ederseniz edin, kalacak mükemmel yeri bulmanıza yardımcı olabiliriz.\n\nAyrıca, Kıbrıs mükemmel ulaşım seçenekleri, uluslararası mutfak sunan restoranlar ve kalışınız sırasında rahatlamanıza yardımcı olacak çeşitli eğlence aktiviteleri sunmaktadır. Ekibimiz, konaklama ile ilgili herhangi bir soru veya endişe için her zaman yardımcı olmaya hazırdır.',
      de: 'Für unsere Patienten, die die Vorbereitungsphase vor den Eingriffen auf Zypern verbringen möchten, ist eine Unterkunft von etwa 20 Tagen erforderlich. Wir können Ihnen helfen, geeignete Unterkunftsmöglichkeiten in der Nähe unseres Zentrums zu finden. Zypern bietet schöne Hotels und Apartments, die Komfort während Ihrer Behandlungszeit bieten.\n\nDie Vorbereitungsphase für die IVF-Behandlung umfasst typischerweise erste Konsultationen, medizinische Untersuchungen, Hormonstimulation und Überwachung. Während dieser Zeit müssen Sie auf Zypern bleiben, um regelmäßige Termine in unserem Zentrum wahrzunehmen. Wir verstehen, dass die Suche nach einer komfortablen und praktischen Unterkunft für Ihr Wohlbefinden in dieser entscheidenden Zeit wichtig ist.\n\nUnser Team kann Ihnen bei der Suche nach einer Unterkunft helfen, die Ihren Vorlieben und Ihrem Budget entspricht. Die Optionen reichen von Luxushotels mit vollständigen Annehmlichkeiten bis hin zu komfortablen Apartments mit Kücheneinrichtungen. Viele Unterkünfte befinden sich in Geh- oder kurzer Fahrstrecke von unserem Zentrum entfernt, was es einfach macht, Ihre Termine wahrzunehmen.\n\nWir arbeiten mit vertrauenswürdigen Unterkunftsanbietern zusammen, die die Bedürfnisse unserer Patienten verstehen. Viele bieten Sonderpreise für Medizintouristen und schaffen eine unterstützende Umgebung während Ihrer Behandlung. Ob Sie ein Hotel mit täglichem Reinigungsservice oder eine private Wohnung für mehr Unabhängigkeit bevorzugen, wir können Ihnen helfen, den perfekten Aufenthaltsort zu finden.\n\nDarüber hinaus bietet Zypern ausgezeichnete Transportmöglichkeiten, Restaurants mit internationaler Küche und verschiedene Freizeitaktivitäten, die Ihnen helfen, sich während Ihres Aufenthalts zu entspannen. Unser Team steht immer zur Verfügung, um bei Fragen oder Bedenken bezüglich der Unterkunft zu helfen.',
      ru: 'Для наших пациентов, которые хотят провести подготовительный этап перед процедурами на Кипре, требуется размещение примерно на 20 дней. Мы можем помочь вам найти подходящие варианты размещения рядом с нашим центром. Кипр предлагает красивые отели и апартаменты, которые обеспечивают комфорт в период лечения.\n\nПодготовительный этап лечения ЭКО обычно включает первоначальные консультации, медицинские обследования, гормональную стимуляцию и мониторинг. В этот период вам нужно будет остаться на Кипре, чтобы посещать регулярные приемы в нашем центре. Мы понимаем, что поиск комфортного и удобного жилья важен для вашего спокойствия в это важное время.\n\nНаша команда может помочь вам найти жилье, соответствующее вашим предпочтениям и бюджету. Варианты варьируются от роскошных отелей с полным набором удобств до комфортабельных апартаментов с кухонными принадлежностями. Многие варианты размещения находятся в пешей доступности или на небольшом расстоянии от нашего центра, что облегчает посещение приемов.\n\nМы работаем с надежными поставщиками жилья, которые понимают потребности наших пациентов. Многие предлагают специальные тарифы для медицинских туристов и обеспечивают поддерживающую среду во время лечения. Предпочитаете ли вы отель с ежедневной уборкой или частную квартиру для большей независимости, мы можем помочь вам найти идеальное место для проживания.\n\nКроме того, Кипр предлагает отличные транспортные возможности, рестораны с международной кухней и различные развлекательные мероприятия, которые помогут вам расслабиться во время пребывания. Наша команда всегда готова помочь с любыми вопросами или проблемами, связанными с размещением.',
      ar: 'للمرضى الذين يرغبون في قضاء مرحلة التحضير قبل الإجراءات في قبرص، يلزم حوالي 20 يومًا من الإقامة. يمكننا مساعدتك في العثور على خيارات إقامة مناسبة بالقرب من مركزنا. تقدم قبرص فنادق وشقق جميلة توفر الراحة خلال فترة العلاج.\n\nعادة ما تتضمن مرحلة التحضير لعلاج أطفال الأنابيب الاستشارات الأولية والفحوصات الطبية وتحفيز الهرمونات والمراقبة. خلال هذه الفترة، ستحتاج إلى البقاء في قبرص لحضور المواعيد المنتظمة في مركزنا. نحن نفهم أن العثور على إقامة مريحة ومناسبة مهم لراحة بالك خلال هذه الفترة الحاسمة.\n\nيمكن لفريقنا مساعدتك في العثور على إقامة تناسب تفضيلاتك وميزانيتك. تتراوح الخيارات من الفنادق الفاخرة مع جميع وسائل الراحة إلى الشقق المريحة مع مرافق المطبخ. تقع العديد من أماكن الإقامة على مسافة قريبة أو على مسافة قصيرة بالسيارة من مركزنا، مما يسهل حضور مواعيدك.\n\nنعمل مع مقدمي إقامة موثوقين يفهمون احتياجات مرضانا. يقدم الكثيرون أسعارًا خاصة للسياح الطبيين ويوفرون بيئة داعمة أثناء علاجك. سواء كنت تفضل فندقًا مع خدمة تنظيف يومية أو شقة خاصة لمزيد من الاستقلالية، يمكننا مساعدتك في العثور على المكان المثالي للإقامة.\n\nبالإضافة إلى ذلك، تقدم قبرص خيارات نقل ممتازة ومطاعم تقدم المأكولات الدولية وأنشطة ترفيهية متنوعة لمساعدتك على الاسترخاء أثناء إقامتك. فريقنا متاح دائمًا للمساعدة في أي أسئلة أو مخاوف متعلقة بالإقامة.'
    },
    date: '2024-09-05',
    category: {
      en: 'Accommodation',
      tr: 'Konaklama',
      de: 'Unterkunft',
      ru: 'Размещение',
      ar: 'الإقامة'
    },
    image: '/images/cyprus1.jpg'
  },
  {
    id: 'ivf-tests',
    title: {
      en: 'What Tests and Examinations Are Required for Mother Candidates in IVF Treatment?',
      tr: 'TÜP BEBEK TEDAVİSİNDE ANNE ADAYLARI İÇİN GEREKLİ TAHLİL VE TETKİKLER NELERDİR ?',
      de: 'Welche Tests und Untersuchungen sind für Mutterkandidatinnen bei der IVF-Behandlung erforderlich?',
      ru: 'Какие анализы и обследования необходимы для кандидатов-матерей при лечении ЭКО?',
      ar: 'ما هي الفحوصات والتحاليل المطلوبة للمرشحات الأمهات في علاج أطفال الأنابيب؟'
    },
    excerpt: {
      en: 'Before starting IVF treatment, necessary tests must be performed to understand if there is any condition that prevents pregnancy...',
      tr: 'Tüp bebek tedavisine başlamadan önce gebeliğe engel bir durum olup olmadığının anlaşılabilmesi için gerekli tetkiklerin yapılması...',
      de: 'Vor Beginn der IVF-Behandlung müssen notwendige Tests durchgeführt werden, um zu verstehen, ob es eine Bedingung gibt, die eine Schwangerschaft verhindert...',
      ru: 'Перед началом лечения ЭКО необходимо провести анализы, чтобы понять, есть ли какое-либо состояние, препятствующее беременности...',
      ar: 'قبل بدء علاج أطفال الأنابيب، يجب إجراء الفحوصات اللازمة لفهم ما إذا كان هناك أي حالة تمنع الحمل...'
    },
    content: {
      en: 'Before starting IVF treatment, necessary tests must be performed to understand if there is any condition that prevents pregnancy. These tests include hormone levels, ultrasound examinations, blood tests, and various other medical evaluations. Our medical team will guide you through all necessary tests.\n\nFor mother candidates, the following tests and examinations are typically required:\n\n1. Hormone Tests: FSH (Follicle Stimulating Hormone), LH (Luteinizing Hormone), AMH (Anti-Müllerian Hormone), E2 (Estradiol), Prolactin, TSH (Thyroid Stimulating Hormone), and Progesterone levels are measured to assess ovarian reserve and hormonal balance.\n\n2. Ultrasound Examination: Transvaginal ultrasound is performed to evaluate the uterus, ovaries, and endometrial thickness. This helps identify any structural abnormalities, cysts, or fibroids that might affect treatment.\n\n3. Blood Tests: Complete blood count, blood type and Rh factor, infectious disease screening (HIV, Hepatitis B and C, Syphilis), and genetic screening tests are conducted.\n\n4. Hysterosalpingography (HSG): This X-ray procedure examines the uterus and fallopian tubes to check for blockages or abnormalities.\n\n5. Hysteroscopy: In some cases, a camera is inserted into the uterus to directly visualize and treat any abnormalities.\n\n6. Genetic Testing: Chromosomal analysis and genetic carrier screening may be recommended based on family history.\n\n7. Additional Tests: Depending on individual circumstances, tests for autoimmune disorders, clotting disorders, or other medical conditions may be required.\n\nThese comprehensive tests ensure that we can develop the most appropriate treatment plan for each patient and maximize the chances of a successful pregnancy.',
      tr: 'Tüp bebek tedavisine başlamadan önce gebeliğe engel bir durum olup olmadığının anlaşılabilmesi için gerekli tetkiklerin yapılması gerekmektedir. Bu tetkikler hormon seviyeleri, ultrason muayeneleri, kan testleri ve çeşitli diğer tıbbi değerlendirmeleri içermektedir. Tıbbi ekibimiz sizi tüm gerekli tetkikler konusunda yönlendirecektir.\n\nAnne adayları için genellikle aşağıdaki testler ve muayeneler gereklidir:\n\n1. Hormon Testleri: Yumurtalık rezervi ve hormonal dengeyi değerlendirmek için FSH (Folikül Uyarıcı Hormon), LH (Luteinize Edici Hormon), AMH (Anti-Müllerian Hormon), E2 (Östradiol), Prolaktin, TSH (Tiroid Uyarıcı Hormon) ve Progesteron seviyeleri ölçülür.\n\n2. Ultrason Muayenesi: Rahim, yumurtalıklar ve endometriyal kalınlığı değerlendirmek için transvajinal ultrason yapılır. Bu, tedaviyi etkileyebilecek yapısal anormallikleri, kistleri veya miyomları tespit etmeye yardımcı olur.\n\n3. Kan Testleri: Tam kan sayımı, kan grubu ve Rh faktörü, bulaşıcı hastalık taraması (HIV, Hepatit B ve C, Sifiliz) ve genetik tarama testleri yapılır.\n\n4. Histerosalpingografi (HSG): Bu röntgen prosedürü, tıkanıklıkları veya anormallikleri kontrol etmek için rahmi ve fallop tüplerini inceler.\n\n5. Histeroskopi: Bazı durumlarda, anormallikleri doğrudan görselleştirmek ve tedavi etmek için rahme bir kamera yerleştirilir.\n\n6. Genetik Testler: Aile öyküsüne bağlı olarak kromozom analizi ve genetik taşıyıcı taraması önerilebilir.\n\n7. Ek Testler: Bireysel durumlara bağlı olarak, otoimmün bozukluklar, pıhtılaşma bozuklukları veya diğer tıbbi durumlar için testler gerekebilir.\n\nBu kapsamlı testler, her hasta için en uygun tedavi planını geliştirebilmemizi ve başarılı bir gebelik şansını maksimize etmemizi sağlar.',
      de: 'Vor Beginn der IVF-Behandlung müssen notwendige Tests durchgeführt werden, um zu verstehen, ob es eine Bedingung gibt, die eine Schwangerschaft verhindert. Diese Tests umfassen Hormonspiegel, Ultraschalluntersuchungen, Bluttests und verschiedene andere medizinische Bewertungen. Unser medizinisches Team wird Sie durch alle notwendigen Tests führen.\n\nFür Mutterkandidatinnen sind typischerweise folgende Tests und Untersuchungen erforderlich:\n\n1. Hormontests: FSH (Follikelstimulierendes Hormon), LH (Luteinisierendes Hormon), AMH (Anti-Müller-Hormon), E2 (Östradiol), Prolaktin, TSH (Schilddrüsenstimulierendes Hormon) und Progesteronspiegel werden gemessen, um die Eierstockreserve und das hormonelle Gleichgewicht zu beurteilen.\n\n2. Ultraschalluntersuchung: Ein transvaginaler Ultraschall wird durchgeführt, um die Gebärmutter, die Eierstöcke und die Endometriumdicke zu beurteilen. Dies hilft, strukturelle Anomalien, Zysten oder Myome zu identifizieren, die die Behandlung beeinträchtigen könnten.\n\n3. Bluttests: Vollblutbild, Blutgruppe und Rhesusfaktor, Screening auf Infektionskrankheiten (HIV, Hepatitis B und C, Syphilis) und genetische Screening-Tests werden durchgeführt.\n\n4. Hysterosalpingographie (HSG): Dieses Röntgenverfahren untersucht die Gebärmutter und die Eileiter, um Blockaden oder Anomalien zu überprüfen.\n\n5. Hysteroskopie: In einigen Fällen wird eine Kamera in die Gebärmutter eingeführt, um Anomalien direkt zu visualisieren und zu behandeln.\n\n6. Gentests: Chromosomenanalyse und genetisches Trägerscreening können basierend auf der Familiengeschichte empfohlen werden.\n\n7. Zusätzliche Tests: Je nach individuellen Umständen können Tests auf Autoimmunerkrankungen, Gerinnungsstörungen oder andere medizinische Erkrankungen erforderlich sein.\n\nDiese umfassenden Tests stellen sicher, dass wir den am besten geeigneten Behandlungsplan für jeden Patienten entwickeln und die Chancen auf eine erfolgreiche Schwangerschaft maximieren können.',
      ru: 'Перед началом лечения ЭКО необходимо провести анализы, чтобы понять, есть ли какое-либо состояние, препятствующее беременности. Эти анализы включают уровни гормонов, ультразвуковые исследования, анализы крови и различные другие медицинские оценки. Наша медицинская команда проведет вас через все необходимые анализы.\n\nДля кандидатов-матерей обычно требуются следующие анализы и обследования:\n\n1. Гормональные тесты: Измеряются уровни ФСГ (фолликулостимулирующий гормон), ЛГ (лютеинизирующий гормон), АМГ (антимюллеров гормон), Е2 (эстрадиол), Пролактин, ТТГ (тиреотропный гормон) и Прогестерон для оценки овариального резерва и гормонального баланса.\n\n2. Ультразвуковое исследование: Проводится трансвагинальное УЗИ для оценки матки, яичников и толщины эндометрия. Это помогает выявить структурные аномалии, кисты или миомы, которые могут повлиять на лечение.\n\n3. Анализы крови: Проводятся общий анализ крови, группа крови и резус-фактор, скрининг на инфекционные заболевания (ВИЧ, гепатит B и C, сифилис) и генетические скрининговые тесты.\n\n4. Гистеросальпингография (ГСГ): Это рентгенологическая процедура исследует матку и маточные трубы для проверки на закупорки или аномалии.\n\n5. Гистероскопия: В некоторых случаях в матку вводится камера для прямой визуализации и лечения любых аномалий.\n\n6. Генетическое тестирование: Хромосомный анализ и генетический скрининг носителей могут быть рекомендованы на основе семейного анамнеза.\n\n7. Дополнительные тесты: В зависимости от индивидуальных обстоятельств могут потребоваться тесты на аутоиммунные расстройства, нарушения свертываемости крови или другие медицинские состояния.\n\nЭти комплексные тесты обеспечивают разработку наиболее подходящего плана лечения для каждого пациента и максимизацию шансов на успешную беременность.',
      ar: 'قبل بدء علاج أطفال الأنابيب، يجب إجراء الفحوصات اللازمة لفهم ما إذا كان هناك أي حالة تمنع الحمل. تشمل هذه الفحوصات مستويات الهرمونات وفحوصات الموجات فوق الصوتية واختبارات الدم وتقييمات طبية أخرى متنوعة. سيرشدك فريقنا الطبي خلال جميع الفحوصات اللازمة.\n\nللمرشحات الأمهات، عادة ما تكون الفحوصات والتحاليل التالية مطلوبة:\n\n1. اختبارات الهرمونات: يتم قياس مستويات FSH (الهرمون المنبه للجريب) و LH (الهرمون الملوتن) و AMH (الهرمون المضاد لمولر) و E2 (الإستراديول) والبرولاكتين و TSH (الهرمون المنبه للغدة الدرقية) والبروجسترون لتقييم احتياطي المبيض والتوازن الهرموني.\n\n2. فحص الموجات فوق الصوتية: يتم إجراء الموجات فوق الصوتية عبر المهبل لتقييم الرحم والمبايض وسماكة بطانة الرحم. يساعد هذا في تحديد أي تشوهات هيكلية أو أكياس أو أورام ليفية قد تؤثر على العلاج.\n\n3. اختبارات الدم: يتم إجراء تعداد الدم الكامل وفصيلة الدم وعامل Rh وفحص الأمراض المعدية (فيروس نقص المناعة البشرية والتهاب الكبد B و C والزهري) واختبارات الفحص الجيني.\n\n4. تصوير الرحم والبوق (HSG): تفحص هذه العملية بالأشعة السينية الرحم وقناتي فالوب للتحقق من الانسدادات أو التشوهات.\n\n5. تنظير الرحم: في بعض الحالات، يتم إدخال كاميرا في الرحم لتصور وعلاج أي تشوهات مباشرة.\n\n6. الاختبارات الجينية: قد يُنصح بتحليل الكروموسومات وفحص الناقل الجيني بناءً على التاريخ العائلي.\n\n7. اختبارات إضافية: اعتمادًا على الظروف الفردية، قد تكون هناك حاجة لاختبارات اضطرابات المناعة الذاتية أو اضطرابات التخثر أو الحالات الطبية الأخرى.\n\nتضمن هذه الفحوصات الشاملة أننا نتمكن من تطوير خطة العلاج الأنسب لكل مريض وتعظيم فرص الحمل الناجح.'
    },
    date: '2024-08-20',
    category: {
      en: 'Tests',
      tr: 'Tahliller',
      de: 'Tests',
      ru: 'Анализы',
      ar: 'الفحوصات'
    },
    image: '/images/Kıbrısta tüp bebek.jpg'
  },
  {
    id: 'ivf-restart-cyprus',
    title: {
      en: 'IVF Treatment in Cyprus Has Restarted',
      tr: 'Kıbrıs\'ta Tüp Bebek Tedavisi yeniden başladı',
      de: 'IVF-Behandlung auf Zypern wurde wieder aufgenommen',
      ru: 'Лечение ЭКО на Кипре возобновлено',
      ar: 'تم إعادة بدء علاج أطفال الأنابيب في قبرص'
    },
    excerpt: {
      en: 'Doğuş IVF Center, Dr. Şevket Alptürk and his team have started accepting IVF patients again with full-time work...',
      tr: 'Doğuş Tüp Bebek Merkezi, Dr Şevket Alptürk ve ekibi olarak yeniden tüm zamanlı çalışmayla tüp bebek hastalarımızı tedaviye almaya...',
      de: 'Das Doğuş IVF-Zentrum, Dr. Şevket Alptürk und sein Team haben wieder begonnen, IVF-Patienten in Vollzeit zu behandeln...',
      ru: 'Центр ЭКО Doğuş, доктор Шевкет Алптюрк и его команда снова начали принимать пациентов ЭКО на полный рабочий день...',
      ar: 'مركز Doğuş لأطفال الأنابيب، الدكتور Şevket Alptürk وفريقه بدأوا مرة أخرى في قبول مرضى أطفال الأنابيب بدوام كامل...'
    },
    content: {
      en: 'Doğuş IVF Center, Dr. Şevket Alptürk and his team have started accepting IVF patients again with full-time work. We are ready to serve you with our experienced team and advanced technology.\n\nAfter a period of reduced operations, we are pleased to announce that our center has resumed full-time operations. Dr. Şevket Alptürk, our founder and clinical director, along with our entire medical team, is now available to provide comprehensive IVF services.\n\nOur center is equipped with state-of-the-art laboratory facilities and the latest medical technology. We offer a full range of fertility treatments including IVF, ICSI, egg donation, sperm donation, embryo donation, PGD/PGS, and other advanced reproductive techniques.\n\nOur experienced team includes:\n- Dr. Şevket Alptürk: Operating Gynecologist, Founder & Clinical Director with over 30 years of experience\n- Fatma Tertemiz (MSc): Specialist Embryologist, Founder & Director with extensive expertise in embryology\n- A dedicated team of nurses, technicians, and support staff\n\nWe are committed to providing the highest quality care and achieving the best possible outcomes for our patients. Our success rates are among the highest in the region, and we maintain strict quality standards in all our procedures.\n\nIf you are considering IVF treatment, we invite you to contact us for a consultation. Our team will assess your individual situation and develop a personalized treatment plan tailored to your needs.',
      tr: 'Doğuş Tüp Bebek Merkezi, Dr Şevket Alptürk ve ekibi olarak yeniden tüm zamanlı çalışmayla tüp bebek hastalarımızı tedaviye almaya başladık. Deneyimli ekibimiz ve gelişmiş teknolojimizle sizlere hizmet vermeye hazırız.\n\nAzaltılmış operasyonlar döneminden sonra, merkezimizin tam zamanlı operasyonlara yeniden başladığını duyurmaktan memnuniyet duyuyoruz. Kurucumuz ve klinik direktörümüz Dr. Şevket Alptürk ve tüm tıbbi ekibimiz artık kapsamlı tüp bebek hizmetleri sunmak için hazırdır.\n\nMerkezimiz en son teknoloji laboratuvar tesisleri ve en son tıbbi teknoloji ile donatılmıştır. IVF, ICSI, yumurta donasyonu, sperm donasyonu, embriyo donasyonu, PGD/PGS ve diğer gelişmiş üreme teknikleri dahil olmak üzere tam bir doğurganlık tedavileri yelpazesi sunuyoruz.\n\nDeneyimli ekibimiz şunları içerir:\n- Dr. Şevket Alptürk: 30 yılı aşkın deneyime sahip Operatör Jinekolog, Kurucu ve Klinik Direktörü\n- Fatma Tertemiz (MSc): Embriyoloji alanında kapsamlı uzmanlığa sahip Uzman Embriyolog, Kurucu ve Direktör\n- Özverili hemşireler, teknisyenler ve destek personeli ekibi\n\nEn yüksek kalitede bakım sağlamaya ve hastalarımız için mümkün olan en iyi sonuçları elde etmeye kararlıyız. Başarı oranlarımız bölgedeki en yüksek oranlar arasındadır ve tüm prosedürlerimizde sıkı kalite standartlarını koruyoruz.\n\nTüp bebek tedavisi düşünüyorsanız, konsültasyon için bizimle iletişime geçmenizi davet ediyoruz. Ekibimiz bireysel durumunuzu değerlendirecek ve ihtiyaçlarınıza göre kişiselleştirilmiş bir tedavi planı geliştirecektir.',
      de: 'Das Doğuş IVF-Zentrum, Dr. Şevket Alptürk und sein Team haben wieder begonnen, IVF-Patienten in Vollzeit zu behandeln. Wir sind bereit, Ihnen mit unserem erfahrenen Team und modernster Technologie zu dienen.\n\nNach einer Phase reduzierter Operationen freuen wir uns, bekannt zu geben, dass unser Zentrum den Vollzeitbetrieb wieder aufgenommen hat. Dr. Şevket Alptürk, unser Gründer und klinischer Direktor, zusammen mit unserem gesamten medizinischen Team, steht nun zur Verfügung, um umfassende IVF-Dienstleistungen anzubieten.\n\nUnser Zentrum ist mit modernsten Laboreinrichtungen und neuester Medizintechnologie ausgestattet. Wir bieten eine vollständige Palette von Fruchtbarkeitsbehandlungen an, einschließlich IVF, ICSI, Eizellspende, Samenspende, Embryospende, PGD/PGS und anderen fortgeschrittenen Reproduktionstechniken.\n\nUnser erfahrenes Team umfasst:\n- Dr. Şevket Alptürk: Operativer Gynäkologe, Gründer und klinischer Direktor mit über 30 Jahren Erfahrung\n- Fatma Tertemiz (MSc): Spezialistin für Embryologie, Gründerin und Direktorin mit umfassender Expertise in der Embryologie\n- Ein engagiertes Team von Krankenschwestern, Technikern und Support-Mitarbeitern\n\nWir sind verpflichtet, die höchste Qualität der Versorgung zu bieten und die bestmöglichen Ergebnisse für unsere Patienten zu erzielen. Unsere Erfolgsraten gehören zu den höchsten in der Region, und wir halten strenge Qualitätsstandards in allen unseren Verfahren ein.\n\nWenn Sie eine IVF-Behandlung in Betracht ziehen, laden wir Sie ein, uns für eine Beratung zu kontaktieren. Unser Team wird Ihre individuelle Situation beurteilen und einen personalisierten Behandlungsplan entwickeln, der auf Ihre Bedürfnisse zugeschnitten ist.',
      ru: 'Центр ЭКО Doğuş, доктор Шевкет Алптюрк и его команда снова начали принимать пациентов ЭКО на полный рабочий день. Мы готовы обслуживать вас с нашим опытным коллективом и передовыми технологиями.\n\nПосле периода сокращенных операций мы рады объявить, что наш центр возобновил работу в полном объеме. Доктор Шевкет Алптюрк, наш основатель и клинический директор, вместе со всей нашей медицинской командой теперь готовы предоставлять комплексные услуги ЭКО.\n\nНаш центр оснащен современными лабораторными помещениями и новейшими медицинскими технологиями. Мы предлагаем полный спектр методов лечения бесплодия, включая ЭКО, ИКСИ, донорство яйцеклеток, донорство спермы, донорство эмбрионов, ПГД/ПГС и другие передовые репродуктивные техники.\n\nНаш опытный коллектив включает:\n- Доктор Шевкет Алптюрк: Оперативный гинеколог, основатель и клинический директор с более чем 30-летним опытом\n- Фатма Тертемиз (MSc): Специалист-эмбриолог, основатель и директор с обширным опытом в эмбриологии\n- Преданная команда медсестер, техников и вспомогательного персонала\n\nМы стремимся предоставлять медицинскую помощь высочайшего качества и достигать наилучших возможных результатов для наших пациентов. Наши показатели успеха являются одними из самых высоких в регионе, и мы поддерживаем строгие стандарты качества во всех наших процедурах.\n\nЕсли вы рассматриваете лечение ЭКО, мы приглашаем вас связаться с нами для консультации. Наша команда оценит вашу индивидуальную ситуацию и разработает персонализированный план лечения, адаптированный к вашим потребностям.',
      ar: 'مركز Doğuş لأطفال الأنابيب، الدكتور Şevket Alptürk وفريقه بدأوا مرة أخرى في قبول مرضى أطفال الأنابيب بدوام كامل. نحن مستعدون لخدمتك بفريقنا ذو الخبرة والتكنولوجيا المتقدمة.\n\nبعد فترة من العمليات المخفضة، يسعدنا الإعلان عن أن مركزنا استأنف العمليات بدوام كامل. الدكتور Şevket Alptürk، مؤسسنا والمدير السريري، جنبًا إلى جنب مع فريقنا الطبي بأكمله، متاح الآن لتقديم خدمات أطفال الأنابيب الشاملة.\n\nمركزنا مجهز بمرافق مختبرية متطورة وأحدث التقنيات الطبية. نقدم مجموعة كاملة من علاجات الخصوبة بما في ذلك أطفال الأنابيب والحقن المجهري والتبرع بالبويضات والحيوانات المنوية والأجنة و PGD/PGS وتقنيات الإنجاب المتقدمة الأخرى.\n\nيتضمن فريقنا ذو الخبرة:\n- الدكتور Şevket Alptürk: طبيب نساء وتوليد جراح، المؤسس والمدير السريري مع أكثر من 30 عامًا من الخبرة\n- فاطمة تيرتيميز (MSc): أخصائية علم الأجنة، المؤسسة والمديرة مع خبرة واسعة في علم الأجنة\n- فريق مخصص من الممرضات والفنيين وموظفي الدعم\n\nنحن ملتزمون بتقديم أعلى جودة من الرعاية وتحقيق أفضل النتائج الممكنة لمرضانا. معدلات نجاحنا من بين أعلى المعدلات في المنطقة، ونحافظ على معايير الجودة الصارمة في جميع إجراءاتنا.\n\nإذا كنت تفكر في علاج أطفال الأنابيب، ندعوك للاتصال بنا للحصول على استشارة. سيقيم فريقنا وضعك الفردي ويطور خطة علاج مخصصة مصممة خصيصًا لاحتياجاتك.'
    },
    date: '2024-07-15',
    category: {
      en: 'News',
      tr: 'Haberler',
      de: 'Nachrichten',
      ru: 'Новости',
      ar: 'أخبار'
    },
    image: '/images/ivf-centre-babies.jpg'
  },
  {
    id: 'menopause-ivf',
    title: {
      en: 'IVF and Pregnancy During Menopause and Early Menopause',
      tr: 'Menopoz ve Erken Menopoz Döneminde Tüp Bebek ve Gebelik',
      de: 'IVF und Schwangerschaft während der Menopause und frühen Menopause',
      ru: 'ЭКО и беременность во время менопаузы и ранней менопаузы',
      ar: 'أطفال الأنابيب والحمل أثناء انقطاع الطمث وانقطاع الطمث المبكر'
    },
    excerpt: {
      en: 'Menopause, which is known as a natural process for women, is the name given to the period when menstrual bleeding stops and ovulation ends...',
      tr: 'Kadınların doğal bir süreci olarak bilinen menopoz, adet kanamalarının kesilmesi ve yumurtlamanın sona erdiği döneme verilen isimdir....',
      de: 'Die Menopause, die als natürlicher Prozess für Frauen bekannt ist, ist der Name für die Zeit, in der die Menstruationsblutungen aufhören und der Eisprung endet...',
      ru: 'Менопауза, которая известна как естественный процесс для женщин, — это название периода, когда менструальные кровотечения прекращаются и овуляция заканчивается...',
      ar: 'انقطاع الطمث، المعروف كعملية طبيعية للنساء، هو الاسم الذي يطلق على الفترة التي تتوقف فيها نزيف الدورة الشهرية وينتهي التبويض...'
    },
    content: {
      en: 'Menopause, which is known as a natural process for women, is the name given to the period when menstrual bleeding stops and ovulation ends. During menopause and early menopause, IVF treatment with egg donation can be successful. Our experienced team can guide you through this process.',
      tr: 'Kadınların doğal bir süreci olarak bilinen menopoz, adet kanamalarının kesilmesi ve yumurtlamanın sona erdiği döneme verilen isimdir. Menopoz ve erken menopoz döneminde yumurta donasyonu ile tüp bebek tedavisi başarılı olabilmektedir. Deneyimli ekibimiz bu süreçte size rehberlik edebilir.',
      de: 'Die Menopause, die als natürlicher Prozess für Frauen bekannt ist, ist der Name für die Zeit, in der die Menstruationsblutungen aufhören und der Eisprung endet. Während der Menopause und frühen Menopause kann eine IVF-Behandlung mit Eizellspende erfolgreich sein. Unser erfahrenes Team kann Sie durch diesen Prozess führen.',
      ru: 'Менопауза, которая известна как естественный процесс для женщин, — это название периода, когда менструальные кровотечения прекращаются и овуляция заканчивается. Во время менопаузы и ранней менопаузы лечение ЭКО с донорством яйцеклеток может быть успешным. Наш опытный коллектив может провести вас через этот процесс.',
      ar: 'انقطاع الطمث، المعروف كعملية طبيعية للنساء، هو الاسم الذي يطلق على الفترة التي تتوقف فيها نزيف الدورة الشهرية وينتهي التبويض. خلال انقطاع الطمث وانقطاع الطمث المبكر، يمكن أن يكون علاج أطفال الأنابيب مع التبرع بالبويضات ناجحًا. يمكن لفريقنا ذو الخبرة إرشادك خلال هذه العملية.'
    },
    date: '2024-06-10',
    category: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      ru: 'Лечение',
      ar: 'العلاج'
    },
    image: '/images/old_pregnant.jpg'
  },
  {
    id: 'age-45-55',
    title: {
      en: 'Mother Candidates Aged 45-55 and Over 55',
      tr: '45-55 Yaş Anne Adayları ile 55 Yaş Üstü Anne Adayları',
      de: 'Mutterkandidatinnen im Alter von 45-55 und über 55 Jahren',
      ru: 'Кандидаты-матери в возрасте 45-55 лет и старше 55 лет',
      ar: 'المرشحات الأمهات من 45-55 عامًا وأكثر من 55 عامًا'
    },
    excerpt: {
      en: 'When mother candidates decide at an advanced age, Doğuş IVF Center helps them become mothers with Egg Transplant (Egg Donation) with very high success statistics.',
      tr: 'Anne adayları ileri bir yaşta karar verdikleri zaman Doğuş Tüp Bebek Merkezi, Yumurta Nakli (Yumurta Donasyonu) işlemi ile gayet yüksek başarı istatistikleri ile yardımcı oluyor.',
      de: 'Wenn sich Mutterkandidatinnen in fortgeschrittenem Alter entscheiden, hilft das Doğuş IVF-Zentrum mit Eizellspende und sehr hohen Erfolgsstatistiken.',
      ru: 'Когда кандидаты-матери решают в зрелом возрасте, центр Doğuş ЭКО помогает им с донорством яйцеклеток и высокими показателями успеха.',
      ar: 'عندما تقرر المرشحات الأمهات في سن متقدمة، يساعد مركز Doğuş لأطفال الأنابيب بعملية التبرع بالبويضات وإحصائيات نجاح عالية.'
    },
    content: {
      tr: 'Anne adayları ileri bir yaşta karar verdikleri zaman Doğuş Tüp Bebek Merkezi, uygulamaları arasında olan Yumurta Nakli (Yumurta Donasyonu) işlemi ile anne olmaları yolunda, gayet yüksek başarı istatistikleri ile yardımcı oluyor.\n\nYapılması gerekenler sırayla merkezimize ulaşıp başvuru yapmak, gereken tahlil ve raporları hazırlayıp dosyayı tamamlamak.\n\nTamamlanması gerekenleri listelersek:\n\n1- Kan tahlilleri:\nHbsAg, Açlık kan şekeri, LH, Anti HCV, Tam kan sayımı, TSH, Anti HIV, SGOT, T3, T4, Anti HBC, SGPT, Prolaktin, VDRL, Üre, Estradiol, FSH\n\n2- Kardiyoloji Uzmanından EKO, EKG Raporları dahil gebe kalmasında kardiyolojik açıdan engel yoktur raporu.\n\n3- Dahiliye Uzmanından gebe kalmasında dahili açıdan engel yoktur raporu.\n\nGerekli raporlarınızı mail veya Whats app (05338692330) yoluyla bizlere ulaştırmanızın ardından işlem için gerekli tıbbi hazırlıklara başlayabiliriz. Bunu takiben size verilen tarihte Kıbrıs\'ta olmanızla Yumurta Nakli işlemleriniz başlatılır. Yaklaşık 1 haftalık konaklamanız sürecinde tüm işlemleriniz tamamlanıp embriyolarınız transfer edilmiş olur.\n\nEğer 55 yaşın üzerinde iseniz yapılması gerekenlere Düzenleyici Komite\'mizin verdiği randevuya katılmanız gerekmektedir. Randevu İçin tüm hazırlıklar Merkezimiz tarafından yapılmaktadır. Sizin sadece istenilen gün ve saatte hazır olmanız yeterlidir.\n\nDoğuş Tüp Bebek Merkezi olarak ekibimiz, yaşı kaç olursa olsun ileri yaş anne olmaya karar veren tüm kadınların yanındayız. Geç kalınmış hissetmeyin, unutmayın her zaman bir umut vardır... Doğuş Tüp Bebek Merkezi ile her yaşta gebelik ve anne olmak mümkün.',
      en: 'When mother candidates decide at an advanced age, Doğuş IVF Center helps them become mothers with the Egg Transplant (Egg Donation) procedure, with very high success statistics.\n\nThe steps to be taken are, in order: to reach our center and apply, and to complete the required tests and reports to finalize your file.\n\nListing what needs to be completed:\n\n1- Blood tests:\nHbsAg, Fasting blood sugar, LH, Anti HCV, Complete blood count, TSH, Anti HIV, SGOT, T3, T4, Anti HBC, SGPT, Prolactin, VDRL, Urea, Estradiol, FSH\n\n2- A report from a Cardiology Specialist including ECHO and ECG reports stating that there is no cardiological obstacle to pregnancy.\n\n3- A report from an Internal Medicine Specialist stating that there is no internal medical obstacle to pregnancy.\n\nAfter you send us your required reports by email or WhatsApp (05338692330), we can begin the medical preparations for the procedure. Following that, your Egg Transplant procedures will start when you are in Cyprus on the date given to you. During your approximately one-week stay, all procedures are completed and your embryos are transferred.\n\nIf you are over 55 years of age, you need to attend the appointment given by our Regulatory Committee for the required steps. All preparations for the appointment are made by our Center. You only need to be ready on the requested day and time.\n\nAs Doğuş IVF Center, our team stands by all women who decide to become mothers at an advanced age, whatever their age. Do not feel that it is too late; remember there is always hope... With Doğuş IVF Center, pregnancy and motherhood are possible at any age.',
      de: 'Wenn sich Mutterkandidatinnen in fortgeschrittenem Alter entscheiden, hilft das Doğuş IVF-Zentrum mit der Eizellspende (Eizelltransplantation) und sehr hohen Erfolgsstatistiken auf dem Weg zur Mutter.\n\nDie Schritte sind: sich bei unserem Zentrum zu melden, Antrag zu stellen und die erforderlichen Untersuchungen und Berichte einzureichen.\n\n1- Blutuntersuchungen: HbsAg, Nüchternblutzucker, LH, Anti HCV, Blutbild, TSH, Anti HIV, SGOT, T3, T4, Anti HBC, SGPT, Prolaktin, VDRL, Harnstoff, Estradiol, FSH\n\n2- Bericht eines Kardiologen inkl. Echo und EKG: kein kardiologisches Hindernis für eine Schwangerschaft.\n\n3- Bericht eines Internisten: kein internistisches Hindernis für eine Schwangerschaft.\n\nNach Zusendung der Berichte per E-Mail oder WhatsApp (05338692330) beginnen wir mit den medizinischen Vorbereitungen. An dem mitgeteilten Termin starten in Zypern die Eizellspende-Verfahren. Während Ihres etwa einwöchigen Aufenthalts werden alle Schritte durchgeführt und die Embryonen übertragen.\n\nBei Frauen über 55 Jahren ist die Teilnahme am Termin unseres Regulierungskomitees erforderlich. Alle Vorbereitungen übernimmt unser Zentrum; Sie müssen nur zum angegebenen Zeitpunkt bereit sein.\n\nUnser Team steht allen Frauen, die sich in fortgeschrittenem Alter für Mutterschaft entscheiden, zur Seite. Es ist nie zu spät – mit dem Doğuş IVF-Zentrum sind Schwangerschaft und Mutterschaft in jedem Alter möglich.',
      ru: 'Когда кандидаты-матери принимают решение в зрелом возрасте, центр Doğuş ЭКО помогает им стать матерями с помощью процедуры донорства яйцеклеток с очень высокими показателями успеха.\n\nНеобходимые шаги: обратиться в наш центр, подать заявку и подготовить анализы и заключения для завершения дела.\n\n1- Анализы крови: HbsAg, глюкоза натощак, ЛГ, Anti HCV, общий анализ крови, ТТГ, Anti HIV, SGOT, T3, T4, Anti HBC, SGPT, пролактин, VDRL, мочевина, эстрадиол, ФСГ\n\n2- Заключение кардиолога (ЭхоКГ, ЭКГ): кардиологических противопоказаний к беременности нет.\n\n3- Заключение терапевта: терапевтических противопоказаний к беременности нет.\n\nПосле отправки заключений по e-mail или WhatsApp (05338692330) мы начинаем медицинскую подготовку. В указанную дату на Кипре начинаются процедуры донорства яйцеклеток. За примерно неделю пребывания все процедуры завершаются и выполняется перенос эмбрионов.\n\nЕсли вам больше 55 лет, необходимо прийти на прием комиссии. Подготовку к приему проводит наш центр; вам нужно только быть готовой в указанный день и время.\n\nНаша команда поддерживает всех женщин, решивших стать матерями в зрелом возрасте. С центром Doğuş ЭКО беременность и материнство возможны в любом возрасте.',
      ar: 'عندما تقرر المرشحات الأمهات في سن متقدمة، يساعد مركز Doğuş لأطفال الأنابيب بإجراء نقل البويضات (التبرع بالبويضات) بإحصائيات نجاح عالية جداً.\n\nالخطوات: التقدم إلى مركزنا وإكمال التحاليل والتقارير المطلوبة.\n\n1- تحاليل الدم: HbsAg، سكر الصيام، LH، Anti HCV، تعداد الدم، TSH، Anti HIV، SGOT، T3، T4، Anti HBC، SGPT، البرولاكتين، VDRL، اليوريا، الإستراديول، FSH\n\n2- تقرير من أخصائي القلب (صدى القلب وتخطيط القلب): لا مانع قلبي من الحمل.\n\n3- تقرير من أخصائي الباطنية: لا مانع باطني من الحمل.\n\nبعد إرسال التقارير بالبريد أو واتساب (05338692330) نبدأ التحضيرات الطبية. في الموعد المحدد في قبرص تبدأ إجراءات نقل البويضات. خلال إقامتك حوالي أسبوع تكتمل جميع الإجراءات ويتم نقل الأجنة.\n\nإذا كان عمرك فوق 55 عاماً يجب حضور الموعد الذي يحدده لجنتنا. المركز يتولى التحضيرات؛ عليك فقط أن تكوني جاهزة في اليوم والوقت المطلوبين.\n\nفريقنا مع كل من تقرر الأمومة في سن متقدمة. مع مركز Doğuş الحمل والأمومة ممكنان في أي عمر.'
    },
    date: '2020-02-05',
    category: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      ru: 'Лечение',
      ar: 'العلاج'
    },
    featured: true,
    image: '/images/Happy-Baby-Kissing-Happy-Mother_edited.jpg'
  },
  {
    id: 'tandem-mini-ivf',
    title: {
      en: 'Mini-IVF Application in Tandem Method',
      tr: 'Tandem Yönteminde Mini-IVF Uygulaması',
      de: 'Mini-IVF-Anwendung bei der Tandem-Methode',
      ru: 'Применение мини-ЭКО в тандем-методе',
      ar: 'تطبيق Mini-IVF في طريقة Tandem'
    },
    excerpt: {
      en: 'The Tandem method combines traditional IVF with Mini-IVF techniques. This approach offers a more gentle and cost-effective treatment option...',
      tr: 'Tandem yöntemi geleneksel IVF ile Mini-IVF tekniklerini birleştirir. Bu yaklaşım daha yumuşak ve maliyet etkin bir tedavi seçeneği sunar...',
      de: 'Die Tandem-Methode kombiniert traditionelle IVF mit Mini-IVF-Techniken. Dieser Ansatz bietet eine schonendere und kostengünstigere Behandlungsoption...',
      ru: 'Тандем-метод сочетает традиционное ЭКО с техниками мини-ЭКО. Этот подход предлагает более щадящий и экономичный вариант лечения...',
      ar: 'تجمع طريقة Tandem بين أطفال الأنابيب التقليدية وتقنيات Mini-IVF. يوفر هذا النهج خيار علاج أكثر لطفًا وفعالية من حيث التكلفة...'
    },
    content: {
      en: 'The Tandem method combines traditional IVF with Mini-IVF techniques. This approach offers a more gentle and cost-effective treatment option. It is particularly suitable for patients who want a less intensive treatment protocol.',
      tr: 'Tandem yöntemi geleneksel IVF ile Mini-IVF tekniklerini birleştirir. Bu yaklaşım daha yumuşak ve maliyet etkin bir tedavi seçeneği sunar. Özellikle daha az yoğun bir tedavi protokolü isteyen hastalar için uygundur.',
      de: 'Die Tandem-Methode kombiniert traditionelle IVF mit Mini-IVF-Techniken. Dieser Ansatz bietet eine schonendere und kostengünstigere Behandlungsoption. Es ist besonders für Patienten geeignet, die ein weniger intensives Behandlungsprotokoll wünschen.',
      ru: 'Тандем-метод сочетает традиционное ЭКО с техниками мини-ЭКО. Этот подход предлагает более щадящий и экономичный вариант лечения. Он особенно подходит для пациентов, которые хотят менее интенсивный протокол лечения.',
      ar: 'تجمع طريقة Tandem بين أطفال الأنابيب التقليدية وتقنيات Mini-IVF. يوفر هذا النهج خيار علاج أكثر لطفًا وفعالية من حيث التكلفة. إنه مناسب بشكل خاص للمرضى الذين يريدون بروتوكول علاج أقل كثافة.'
    },
    date: '2024-04-15',
    category: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      ru: 'Лечение',
      ar: 'العلاج'
    },
    featured: true,
    image: '/images/mini-tup-bebek.jpg'
  },
  {
    id: 'pandemic-ivf',
    title: {
      en: 'IVF During the Pandemic',
      tr: 'Pandemi Sürecinde Tüp Bebek',
      de: 'IVF während der Pandemie',
      ru: 'ЭКО во время пандемии',
      ar: 'أطفال الأنابيب أثناء الجائحة'
    },
    excerpt: {
      en: 'During the pandemic period, we continued to serve our patients with all necessary safety measures. Our clinic implemented strict hygiene protocols...',
      tr: 'Pandemi sürecinde tüm gerekli güvenlik önlemleri ile hastalarımıza hizmet vermeye devam ettik. Kliniğimiz sıkı hijyen protokolleri uyguladı...',
      de: 'Während der Pandemie haben wir unseren Patienten mit allen notwendigen Sicherheitsmaßnahmen weiterhin gedient. Unsere Klinik hat strenge Hygieneprotokolle umgesetzt...',
      ru: 'В период пандемии мы продолжали обслуживать наших пациентов со всеми необходимыми мерами безопасности. Наша клиника внедрила строгие протоколы гигиены...',
      ar: 'خلال فترة الجائحة، واصلنا خدمة مرضانا بجميع التدابير الأمنية اللازمة. طبقت عيادتنا بروتوكولات النظافة الصارمة...'
    },
    content: {
      en: 'During the pandemic period, we continued to serve our patients with all necessary safety measures. Our clinic implemented strict hygiene protocols to ensure the safety of both patients and staff. We maintained our high standards of care while adapting to the new circumstances. All treatment procedures were carried out with enhanced safety measures, and we successfully helped many couples achieve their dream of parenthood during this challenging time.',
      tr: 'Pandemi sürecinde tüm gerekli güvenlik önlemleri ile hastalarımıza hizmet vermeye devam ettik. Kliniğimiz hem hasta hem de personel güvenliğini sağlamak için sıkı hijyen protokolleri uyguladı. Yeni koşullara uyum sağlarken yüksek bakım standartlarımızı koruduk. Tüm tedavi prosedürleri geliştirilmiş güvenlik önlemleri ile gerçekleştirildi ve bu zorlu dönemde birçok çiftin ebeveynlik hayalini gerçekleştirmesine başarıyla yardımcı olduk.',
      de: 'Während der Pandemie haben wir unseren Patienten mit allen notwendigen Sicherheitsmaßnahmen weiterhin gedient. Unsere Klinik hat strenge Hygieneprotokolle umgesetzt, um die Sicherheit von Patienten und Personal zu gewährleisten. Wir haben unsere hohen Pflegestandards beibehalten und uns gleichzeitig an die neuen Umstände angepasst. Alle Behandlungsverfahren wurden mit verstärkten Sicherheitsmaßnahmen durchgeführt, und wir haben vielen Paaren erfolgreich geholfen, ihren Traum von der Elternschaft in dieser schwierigen Zeit zu verwirklichen.',
      ru: 'В период пандемии мы продолжали обслуживать наших пациентов со всеми необходимыми мерами безопасности. Наша клиника внедрила строгие протоколы гигиены для обеспечения безопасности как пациентов, так и персонала. Мы поддерживали наши высокие стандарты ухода, адаптируясь к новым обстоятельствам. Все процедуры лечения проводились с усиленными мерами безопасности, и мы успешно помогли многим парам осуществить свою мечту о родительстве в это трудное время.',
      ar: 'خلال فترة الجائحة، واصلنا خدمة مرضانا بجميع التدابير الأمنية اللازمة. طبقت عيادتنا بروتوكولات النظافة الصارمة لضمان سلامة المرضى والموظفين. حافظنا على معايير الرعاية العالية لدينا مع التكيف مع الظروف الجديدة. تم تنفيذ جميع إجراءات العلاج مع تدابير أمنية معززة، وساعدنا بنجاح العديد من الأزواج على تحقيق حلمهم بالأبوة والأمومة خلال هذه الفترة الصعبة.'
    },
    date: '2020-11-15',
    category: {
      en: 'News',
      tr: 'Haberler',
      de: 'Nachrichten',
      ru: 'Новости',
      ar: 'أخبار'
    },
    image: '/images/ivf-centre-babies.jpg'
  },
  {
    id: 'sperm-donation-de',
    title: {
      en: 'Sperm Donation',
      tr: 'Sperm Donasyonu',
      de: 'Samenspende (Samentransplantation)',
      ru: 'Донорство спермы',
      ar: 'التبرع بالحيوانات المنوية'
    },
    excerpt: {
      en: 'Sperm donation is a treatment method used when the male partner has no sperm or insufficient sperm quality. Healthy donor sperm is used for fertilization...',
      tr: 'Sperm donasyonu, erkek partnerde sperm bulunmadığında veya sperm kalitesi yetersiz olduğunda kullanılan bir tedavi yöntemidir. Sağlıklı donör spermi döllenme için kullanılır...',
      de: 'Die Samenspende ist eine Behandlungsmethode, die angewendet wird, wenn der männliche Partner kein Sperma oder eine unzureichende Spermienqualität hat. Gesundes Spendersperma wird zur Befruchtung verwendet...',
      ru: 'Донорство спермы — это метод лечения, используемый, когда у мужского партнера нет спермы или недостаточное качество спермы. Для оплодотворения используется здоровая донорская сперма...',
      ar: 'التبرع بالحيوانات المنوية هو طريقة علاج تستخدم عندما لا يكون لدى الشريك الذكر حيوانات منوية أو جودة حيوانات منوية غير كافية. يتم استخدام حيوانات منوية متبرع صحية للتخصيب...'
    },
    content: {
      en: 'Sperm donation is a treatment method used when the male partner has no sperm or insufficient sperm quality. Healthy donor sperm is used for fertilization. All donors undergo comprehensive health screenings and genetic tests. The process involves selecting a suitable donor, preparing the sperm sample, and using it for fertilization through IVF or IUI procedures. This method offers hope for couples facing male infertility issues.',
      tr: 'Sperm donasyonu, erkek partnerde sperm bulunmadığında veya sperm kalitesi yetersiz olduğunda kullanılan bir tedavi yöntemidir. Sağlıklı donör spermi döllenme için kullanılır. Tüm donörler kapsamlı sağlık taramaları ve genetik testlerden geçer. Süreç, uygun bir donör seçmeyi, sperm örneğini hazırlamayı ve IVF veya IUI prosedürleri ile döllenme için kullanmayı içerir. Bu yöntem, erkek kısırlık sorunlarıyla karşılaşan çiftlere umut sunar.',
      de: 'Die Samenspende ist eine Behandlungsmethode, die angewendet wird, wenn der männliche Partner kein Sperma oder eine unzureichende Spermienqualität hat. Gesundes Spendersperma wird zur Befruchtung verwendet. Alle Spender durchlaufen umfassende Gesundheitsuntersuchungen und Gentests. Der Prozess umfasst die Auswahl eines geeigneten Spenders, die Vorbereitung der Spermienprobe und deren Verwendung zur Befruchtung durch IVF- oder IUI-Verfahren. Diese Methode bietet Paaren, die mit männlichen Unfruchtbarkeitsproblemen konfrontiert sind, Hoffnung.',
      ru: 'Донорство спермы — это метод лечения, используемый, когда у мужского партнера нет спермы или недостаточное качество спермы. Для оплодотворения используется здоровая донорская сперма. Все доноры проходят комплексные медицинские обследования и генетические тесты. Процесс включает выбор подходящего донора, подготовку образца спермы и его использование для оплодотворения с помощью процедур ЭКО или ВМИ. Этот метод дает надежду парам, столкнувшимся с проблемами мужского бесплодия.',
      ar: 'التبرع بالحيوانات المنوية هو طريقة علاج تستخدم عندما لا يكون لدى الشريك الذكر حيوانات منوية أو جودة حيوانات منوية غير كافية. يتم استخدام حيوانات منوية متبرع صحية للتخصيب. يخضع جميع المتبرعين لفحوصات صحية شاملة واختبارات وراثية. تتضمن العملية اختيار متبرع مناسب وإعداد عينة الحيوانات المنوية واستخدامها للتخصيب من خلال إجراءات أطفال الأنابيب أو التلقيح داخل الرحم. تقدم هذه الطريقة الأمل للأزواج الذين يواجهون مشاكل العقم الذكوري.'
    },
    date: '2020-10-20',
    category: {
      en: 'Sperm Donation',
      tr: 'Sperm Donasyonu',
      de: 'Samenspende',
      ru: 'Донорство спермы',
      ar: 'التبرع بالحيوانات المنوية'
    },
    image: '/images/sperm-donasyonu.jpg'
  },
  {
    id: 'egg-donation-de',
    title: {
      en: 'Egg Donation',
      tr: 'Yumurta Donasyonu',
      de: 'Eizellspende (Eiertransplantation)',
      ru: 'Донорство яйцеклеток',
      ar: 'التبرع بالبويضات'
    },
    excerpt: {
      en: 'Egg donation is used when the female partner cannot produce healthy eggs. Young, healthy donor eggs are used for fertilization with the partner\'s sperm...',
      tr: 'Yumurta donasyonu, kadın partnerin sağlıklı yumurta üretemediği durumlarda kullanılır. Genç, sağlıklı donör yumurtaları partnerin spermi ile döllenme için kullanılır...',
      de: 'Die Eizellspende wird verwendet, wenn der weibliche Partner keine gesunden Eizellen produzieren kann. Junge, gesunde Spendereizellen werden zur Befruchtung mit dem Sperma des Partners verwendet...',
      ru: 'Донорство яйцеклеток используется, когда женский партнер не может производить здоровые яйцеклетки. Молодые, здоровые донорские яйцеклетки используются для оплодотворения спермой партнера...',
      ar: 'يستخدم التبرع بالبويضات عندما لا تستطيع الشريكة إنتاج بويضات صحية. يتم استخدام بويضات متبرع شابة وصحية للتخصيب بحيوانات الشريك المنوية...'
    },
    content: {
      en: 'Egg donation is used when the female partner cannot produce healthy eggs. Young, healthy donor eggs are used for fertilization with the partner\'s sperm. All egg donors undergo thorough medical and genetic screening. The process involves synchronizing the donor and recipient cycles, collecting eggs from the donor, fertilizing them with the partner\'s sperm, and transferring the resulting embryos to the recipient. This method provides an opportunity for women who cannot use their own eggs to experience pregnancy and childbirth.',
      tr: 'Yumurta donasyonu, kadın partnerin sağlıklı yumurta üretemediği durumlarda kullanılır. Genç, sağlıklı donör yumurtaları partnerin spermi ile döllenme için kullanılır. Tüm yumurta donörleri kapsamlı tıbbi ve genetik taramalardan geçer. Süreç, donör ve alıcı döngülerini senkronize etmeyi, donörden yumurta toplamayı, bunları partnerin spermi ile döllemeyi ve ortaya çıkan embriyoları alıcıya transfer etmeyi içerir. Bu yöntem, kendi yumurtalarını kullanamayan kadınlara hamilelik ve doğum deneyimi yaşama fırsatı sunar.',
      de: 'Die Eizellspende wird verwendet, wenn der weibliche Partner keine gesunden Eizellen produzieren kann. Junge, gesunde Spendereizellen werden zur Befruchtung mit dem Sperma des Partners verwendet. Alle Eizellspenderinnen durchlaufen gründliche medizinische und genetische Untersuchungen. Der Prozess umfasst die Synchronisierung der Spender- und Empfängerzyklen, die Eizellentnahme vom Spender, die Befruchtung mit dem Sperma des Partners und die Übertragung der resultierenden Embryonen auf den Empfänger. Diese Methode bietet Frauen, die ihre eigenen Eizellen nicht verwenden können, die Möglichkeit, Schwangerschaft und Geburt zu erleben.',
      ru: 'Донорство яйцеклеток используется, когда женский партнер не может производить здоровые яйцеклетки. Молодые, здоровые донорские яйцеклетки используются для оплодотворения спермой партнера. Все доноры яйцеклеток проходят тщательное медицинское и генетическое обследование. Процесс включает синхронизацию циклов донора и реципиента, забор яйцеклеток у донора, их оплодотворение спермой партнера и перенос полученных эмбрионов реципиенту. Этот метод дает возможность женщинам, которые не могут использовать свои собственные яйцеклетки, испытать беременность и роды.',
      ar: 'يستخدم التبرع بالبويضات عندما لا تستطيع الشريكة إنتاج بويضات صحية. يتم استخدام بويضات متبرع شابة وصحية للتخصيب بحيوانات الشريك المنوية. يخضع جميع متبرعي البويضات لفحص طبي ووراثي شامل. تتضمن العملية تزامن دورات المتبرع والمستقبل وجمع البويضات من المتبرع وتخصيبها بحيوانات الشريك المنوية ونقل الأجنة الناتجة إلى المستقبل. توفر هذه الطريقة فرصة للنساء اللواتي لا يستطعن استخدام بويضاتهن الخاصة لتجربة الحمل والولادة.'
    },
    date: '2020-10-15',
    category: {
      en: 'Egg Donation',
      tr: 'Yumurta Donasyonu',
      de: 'Eizellspende',
      ru: 'Донорство яйцеклеток',
      ar: 'التبرع بالبويضات'
    },
    image: '/images/yumurta-donasyonu.jpg'
  },
  {
    id: 'why-north-cyprus-ivf',
    title: {
      en: 'Why Should You Have Your IVF Procedures in North Cyprus?',
      tr: 'Neden Kuzey Kıbrıs\'ta Tüp Bebek İşlemlerinizi Yaptırmalısınız?',
      de: 'Warum sollten Sie Ihre IVF-Eingriffe in Nordzypern durchführen?',
      ru: 'Почему вам следует проводить процедуры ЭКО в Северном Кипре?',
      ar: 'لماذا يجب أن تجري إجراءات أطفال الأنابيب في شمال قبرص؟'
    },
    excerpt: {
      en: 'If you have decided on in vitro fertilization, you are currently deciding where and where to apply. This process is a very important decision...',
      tr: 'Tüp bebek işlemine karar verdiyseniz, şu anda nerede ve nerede başvurulacağına karar veriyorsunuz. Bu süreç çok önemli bir karardır...',
      de: 'Wenn Sie sich für ein Reagenzglas entschieden haben, entscheiden Sie gerade, wo und wo Sie sich bewerben möchten. Dieser Prozess ist eine sehr wichtige Entscheidung...',
      ru: 'Если вы решили на экстракорпоральное оплодотворение, вы сейчас решаете, где и куда обращаться. Этот процесс — очень важное решение...',
      ar: 'إذا قررت التلقيح الاصطناعي، فأنت تقرر حاليًا أين وأين تتقدم. هذه العملية قرار مهم جدًا...'
    },
    content: {
      en: 'If you have decided on in vitro fertilization, you are currently deciding where and where to apply. This process is a very important decision. North Cyprus offers many advantages for IVF treatment. Our center provides world-class medical services with experienced doctors and modern technology. Cyprus is a beautiful Mediterranean island that offers a peaceful environment for your treatment. The legal framework in North Cyprus is favorable for various fertility treatments including egg donation, sperm donation, and embryo donation. Additionally, the cost of treatment is more affordable compared to many European countries while maintaining high quality standards.',
      tr: 'Tüp bebek işlemine karar verdiyseniz, şu anda nerede ve nerede başvurulacağına karar veriyorsunuz. Bu süreç çok önemli bir karardır. Kuzey Kıbrıs, tüp bebek tedavisi için birçok avantaj sunmaktadır. Merkezimiz deneyimli doktorlar ve modern teknoloji ile dünya standartlarında tıbbi hizmetler sunmaktadır. Kıbrıs, tedaviniz için huzurlu bir ortam sunan güzel bir Akdeniz adasıdır. Kuzey Kıbrıs\'taki yasal çerçeve, yumurta donasyonu, sperm donasyonu ve embriyo donasyonu dahil çeşitli doğurganlık tedavileri için uygundur. Ayrıca, yüksek kalite standartlarını korurken tedavi maliyeti birçok Avrupa ülkesine kıyasla daha uygun fiyatlıdır.',
      de: 'Wenn Sie sich für ein Reagenzglas entschieden haben, entscheiden Sie gerade, wo und wo Sie sich bewerben möchten. Dieser Prozess ist eine sehr wichtige Entscheidung. Nordzypern bietet viele Vorteile für die IVF-Behandlung. Unser Zentrum bietet medizinische Dienstleistungen auf Weltklasseniveau mit erfahrenen Ärzten und modernster Technologie. Zypern ist eine wunderschöne Mittelmeerinsel, die eine friedliche Umgebung für Ihre Behandlung bietet. Der Rechtsrahmen in Nordzypern ist günstig für verschiedene Fruchtbarkeitsbehandlungen, einschließlich Eizellspende, Samenspende und Embryospende. Darüber hinaus sind die Behandlungskosten im Vergleich zu vielen europäischen Ländern erschwinglicher, während hohe Qualitätsstandards beibehalten werden.',
      ru: 'Если вы решили на экстракорпоральное оплодотворение, вы сейчас решаете, где и куда обращаться. Этот процесс — очень важное решение. Северный Кипр предлагает множество преимуществ для лечения ЭКО. Наш центр предоставляет медицинские услуги мирового класса с опытными врачами и современными технологиями. Кипр — красивый средиземноморский остров, который предлагает спокойную обстановку для вашего лечения. Правовая база в Северном Кипре благоприятна для различных методов лечения бесплодия, включая донорство яйцеклеток, донорство спермы и донорство эмбрионов. Кроме того, стоимость лечения более доступна по сравнению со многими европейскими странами при сохранении высоких стандартов качества.',
      ar: 'إذا قررت التلقيح الاصطناعي، فأنت تقرر حاليًا أين وأين تتقدم. هذه العملية قرار مهم جدًا. تقدم شمال قبرص العديد من المزايا لعلاج أطفال الأنابيب. يوفر مركزنا خدمات طبية على مستوى عالمي مع أطباء ذوي خبرة وتكنولوجيا حديثة. قبرص جزيرة متوسطية جميلة توفر بيئة هادئة لعلاجك. الإطار القانوني في شمال قبرص مناسب لعلاجات الخصوبة المختلفة بما في ذلك التبرع بالبويضات والحيوانات المنوية والأجنة. بالإضافة إلى ذلك، فإن تكلفة العلاج أكثر بأسعار معقولة مقارنة بالعديد من البلدان الأوروبية مع الحفاظ على معايير الجودة العالية.'
    },
    date: '2020-01-15',
    category: {
      en: 'Information',
      tr: 'Bilgi',
      de: 'Information',
      ru: 'Информация',
      ar: 'معلومات'
    },
    image: '/images/cyprus2.jpg'
  },
  {
    id: 'fertil-plus',
    title: {
      en: 'Fertil Plus - Microfluidic Sperm Sorting',
      tr: 'Fertil Plus - Mikroakışkan Sperm Ayıklama',
      de: 'Fertil Plus - Mikrofluidische Spermasortierung',
      ru: 'Fertil Plus - Микрофлюидная сортировка спермы',
      ar: 'Fertil Plus - فرز الحيوانات المنوية الدقيقة'
    },
    excerpt: {
      en: 'Fertile & Fertile Plus Microfluidic Sperm Sorting Method is now available at Doğuş IVF Center. This advanced technique improves sperm selection...',
      tr: 'Fertile & Fertile Plus Mikroakışkan Sperm Ayıklama Yöntemi artık Doğuş Tüp Bebek Merkezi\'nde mevcut. Bu gelişmiş teknik sperm seçimini iyileştirir...',
      de: 'Die Fertile & Fertile Plus Microfluidic Sperm Sorting Methode ist jetzt im Dogus IVF Zentrum verfügbar. Diese fortschrittliche Technik verbessert die Spermienauswahl...',
      ru: 'Метод микрофлюидной сортировки спермы Fertile & Fertile Plus теперь доступен в центре ЭКО Doğuş. Эта передовая техника улучшает отбор спермы...',
      ar: 'طريقة فرز الحيوانات المنوية الدقيقة Fertile & Fertile Plus متاحة الآن في مركز Doğuş لأطفال الأنابيب. هذه التقنية المتقدمة تحسن اختيار الحيوانات المنوية...'
    },
    content: {
      en: 'Fertile & Fertile Plus Microfluidic Sperm Sorting Method is now available at Doğuş IVF Center. This advanced technique improves sperm selection by using microfluidic channels to separate the highest quality sperm cells. The method mimics the natural selection process that occurs in the female reproductive tract, selecting sperm with better motility, morphology, and DNA integrity. This results in higher fertilization rates and better embryo quality. The technique is particularly beneficial for patients with male factor infertility, as it helps select the best sperm for fertilization.',
      tr: 'Fertile & Fertile Plus Mikroakışkan Sperm Ayıklama Yöntemi artık Doğuş Tüp Bebek Merkezi\'nde mevcut. Bu gelişmiş teknik, en yüksek kaliteli sperm hücrelerini ayırmak için mikroakışkan kanallar kullanarak sperm seçimini iyileştirir. Yöntem, kadın üreme sisteminde meydana gelen doğal seçim sürecini taklit ederek, daha iyi hareketlilik, morfoloji ve DNA bütünlüğüne sahip spermleri seçer. Bu, daha yüksek döllenme oranları ve daha iyi embriyo kalitesi ile sonuçlanır. Teknik, özellikle erkek faktörü kısırlığı olan hastalar için faydalıdır, çünkü döllenme için en iyi spermi seçmeye yardımcı olur.',
      de: 'Die Fertile & Fertile Plus Microfluidic Sperm Sorting Methode ist jetzt im Dogus IVF Zentrum verfügbar. Diese fortschrittliche Technik verbessert die Spermienauswahl durch die Verwendung mikrofluidischer Kanäle zur Trennung der qualitativ hochwertigsten Spermienzellen. Die Methode ahmt den natürlichen Selektionsprozess nach, der im weiblichen Fortpflanzungstrakt auftritt, und wählt Spermien mit besserer Motilität, Morphologie und DNA-Integrität aus. Dies führt zu höheren Befruchtungsraten und besserer Embryoqualität. Die Technik ist besonders vorteilhaft für Patienten mit männlichem Faktor Unfruchtbarkeit, da sie hilft, die besten Spermien für die Befruchtung auszuwählen.',
      ru: 'Метод микрофлюидной сортировки спермы Fertile & Fertile Plus теперь доступен в центре ЭКО Doğuş. Эта передовая техника улучшает отбор спермы, используя микрофлюидные каналы для разделения сперматозоидов наивысшего качества. Метод имитирует естественный процесс отбора, происходящий в женском репродуктивном тракте, выбирая сперматозоиды с лучшей подвижностью, морфологией и целостностью ДНК. Это приводит к более высоким показателям оплодотворения и лучшему качеству эмбрионов. Техника особенно полезна для пациентов с мужским фактором бесплодия, поскольку она помогает выбрать лучшие сперматозоиды для оплодотворения.',
      ar: 'طريقة فرز الحيوانات المنوية الدقيقة Fertile & Fertile Plus متاحة الآن في مركز Doğuş لأطفال الأنابيب. تحسن هذه التقنية المتقدمة اختيار الحيوانات المنوية باستخدام القنوات الدقيقة لفصل خلايا الحيوانات المنوية عالية الجودة. تحاكي الطريقة عملية الاختيار الطبيعية التي تحدث في الجهاز التناسلي الأنثوي، واختيار الحيوانات المنوية ذات الحركة والشكل وسلامة الحمض النووي الأفضل. يؤدي هذا إلى معدلات إخصاب أعلى وجودة أجنة أفضل. التقنية مفيدة بشكل خاص للمرضى الذين يعانون من العقم الذكوري، حيث تساعد في اختيار أفضل الحيوانات المنوية للإخصاب.'
    },
    date: '2020-01-10',
    category: {
      en: 'Technology',
      tr: 'Teknoloji',
      de: 'Technologie',
      ru: 'Технология',
      ar: 'التكنولوجيا'
    },
    image: '/images/sperm-ayiklama.jpg'
  },
  {
    id: 'egg-donation-success-factors',
    title: {
      en: 'Factors Affecting Egg Donation Success Rates',
      tr: 'Yumurta Donasyonu Başarı Oranlarını Etkileyen Faktörler',
      de: 'Faktoren, die die Erfolgsraten der Eizellspende beeinflussen',
      ru: 'Факторы, влияющие на показатели успеха донорства яйцеклеток',
      ar: 'العوامل التي تؤثر على معدلات نجاح التبرع بالبويضات'
    },
    excerpt: {
      en: 'Egg donation (egg transplantation), which can be applied in very few countries in the world, is successfully performed in the Turkish Republic of Northern Cyprus...',
      tr: 'Dünyada çok az ülkede uygulanabilen yumurta donasyonu (yumurta nakli), Kuzey Kıbrıs Türk Cumhuriyeti\'nde başarıyla gerçekleştirilmektedir...',
      de: 'Die Eizellspende (Eiertransplantation), die in sehr wenigen Ländern der Welt angewendet werden kann, wird in der türkischen Republik Nordzypern erfolgreich durchgeführt...',
      ru: 'Донорство яйцеклеток (трансплантация яйцеклеток), которое может применяться в очень немногих странах мира, успешно выполняется в Турецкой Республике Северного Кипра...',
      ar: 'التبرع بالبويضات (زرع البويضات)، الذي يمكن تطبيقه في عدد قليل جدًا من البلدان في العالم، يتم إجراؤه بنجاح في جمهورية شمال قبرص التركية...'
    },
    content: {
      en: 'Egg donation (egg transplantation), which can be applied in very few countries in the world, is successfully performed in the Turkish Republic of Northern Cyprus. Several factors influence the success rates of egg donation procedures. The age and health of the donor are crucial factors, as younger donors typically produce higher quality eggs. The recipient\'s uterine health and hormonal preparation also play significant roles. The expertise of the embryology team and the quality of the laboratory facilities are essential for optimal results. Proper synchronization between donor and recipient cycles ensures the best timing for embryo transfer. Additionally, the number and quality of embryos transferred, as well as the recipient\'s overall health and lifestyle factors, contribute to the success of the procedure.',
      tr: 'Dünyada çok az ülkede uygulanabilen yumurta donasyonu (yumurta nakli), Kuzey Kıbrıs Türk Cumhuriyeti\'nde başarıyla gerçekleştirilmektedir. Yumurta donasyonu prosedürlerinin başarı oranlarını etkileyen birkaç faktör vardır. Donörün yaşı ve sağlığı, genç donörlerin tipik olarak daha yüksek kaliteli yumurta üretmesi nedeniyle kritik faktörlerdir. Alıcının rahim sağlığı ve hormonal hazırlığı da önemli roller oynar. Embriyoloji ekibinin uzmanlığı ve laboratuvar tesislerinin kalitesi optimal sonuçlar için gereklidir. Donör ve alıcı döngüleri arasındaki uygun senkronizasyon, embriyo transferi için en iyi zamanlamayı sağlar. Ayrıca, transfer edilen embriyoların sayısı ve kalitesi, alıcının genel sağlığı ve yaşam tarzı faktörleri, prosedürün başarısına katkıda bulunur.',
      de: 'Die Eizellspende (Eiertransplantation), die in sehr wenigen Ländern der Welt angewendet werden kann, wird in der türkischen Republik Nordzypern erfolgreich durchgeführt. Mehrere Faktoren beeinflussen die Erfolgsraten von Eizellspendeverfahren. Das Alter und die Gesundheit des Spenders sind entscheidende Faktoren, da jüngere Spender typischerweise qualitativ hochwertigere Eizellen produzieren. Die Gebärmuttergesundheit und hormonelle Vorbereitung des Empfängers spielen ebenfalls eine wichtige Rolle. Die Expertise des Embryologieteams und die Qualität der Laboreinrichtungen sind für optimale Ergebnisse unerlässlich. Eine ordnungsgemäße Synchronisierung zwischen Spender- und Empfängerzyklen gewährleistet den besten Zeitpunkt für den Embryotransfer. Darüber hinaus tragen die Anzahl und Qualität der übertragenen Embryonen sowie die allgemeine Gesundheit und Lebensstilfaktoren des Empfängers zum Erfolg des Verfahrens bei.',
      ru: 'Донорство яйцеклеток (трансплантация яйцеклеток), которое может применяться в очень немногих странах мира, успешно выполняется в Турецкой Республике Северного Кипра. Несколько факторов влияют на показатели успеха процедур донорства яйцеклеток. Возраст и здоровье донора являются решающими факторами, поскольку более молодые доноры обычно производят яйцеклетки более высокого качества. Здоровье матки реципиента и гормональная подготовка также играют важную роль. Экспертиза команды эмбриологов и качество лабораторных помещений необходимы для оптимальных результатов. Правильная синхронизация между циклами донора и реципиента обеспечивает лучшее время для переноса эмбрионов. Кроме того, количество и качество перенесенных эмбрионов, а также общее здоровье реципиента и факторы образа жизни способствуют успеху процедуры.',
      ar: 'التبرع بالبويضات (زرع البويضات)، الذي يمكن تطبيقه في عدد قليل جدًا من البلدان في العالم، يتم إجراؤه بنجاح في جمهورية شمال قبرص التركية. تؤثر عدة عوامل على معدلات نجاح إجراءات التبرع بالبويضات. عمر وصحة المتبرع عوامل حاسمة، حيث ينتج المتبرعون الأصغر سنًا عادة بويضات عالية الجودة. صحة رحم المستقبل والتحضير الهرموني يلعبان أيضًا أدوارًا مهمة. خبرة فريق علم الأجنة وجودة مرافق المختبر ضرورية للحصول على نتائج مثالية. يضمن التزامن المناسب بين دورات المتبرع والمستقبل أفضل توقيت لنقل الأجنة. بالإضافة إلى ذلك، يساهم عدد وجودة الأجنة المنقولة، وكذلك الصحة العامة للمستقبل وعوامل نمط الحياة، في نجاح الإجراء.'
    },
    date: '2020-01-08',
    category: {
      en: 'Egg Donation',
      tr: 'Yumurta Donasyonu',
      de: 'Eizellspende',
      ru: 'Донорство яйцеклеток',
      ar: 'التبرع بالبويضات'
    },
    image: '/images/yumurta-donasyonu.jpg'
  },
  {
    id: 'men-without-sperm',
    title: {
      en: 'Men Without Sperm Can Become Fathers!',
      tr: 'Sperm Olmayan Erkekler Baba Olabilir!',
      de: 'Männer ohne Sperma können Vater werden!',
      ru: 'Мужчины без спермы могут стать отцами!',
      ar: 'الرجال بدون حيوانات منوية يمكن أن يصبحوا آباء!'
    },
    excerpt: {
      en: 'Male infertility can have various causes. These causes can develop from birth or throughout life. With modern techniques, men without sperm...',
      tr: 'Erkek kısırlığı çeşitli nedenlere sahip olabilir. Bu nedenler doğumdan itibaren veya yaşam boyunca gelişebilir. Modern tekniklerle, sperm olmayan erkekler...',
      de: 'Männliche Unfruchtbarkeit kann verschiedene Ursachen haben. Diese Ursachen können sich von Geburt an oder im Laufe des Lebens entwickeln. Mit modernen Techniken können Männer ohne Sperma...',
      ru: 'Мужское бесплодие может иметь различные причины. Эти причины могут развиваться с рождения или на протяжении жизни. С помощью современных техник мужчины без спермы...',
      ar: 'يمكن أن يكون العقم الذكوري له أسباب مختلفة. يمكن أن تتطور هذه الأسباب منذ الولادة أو طوال الحياة. بالتقنيات الحديثة، يمكن للرجال بدون حيوانات منوية...'
    },
    content: {
      en: 'Male infertility can have various causes. These causes can develop from birth or throughout life. With modern techniques, men without sperm in their ejaculate can still become fathers. Techniques such as TESA (Testicular Sperm Aspiration) and TESE (Testicular Sperm Extraction) allow us to retrieve sperm directly from the testicles. These sperm can then be used for fertilization through ICSI (Intracytoplasmic Sperm Injection). Even in cases of azoospermia (complete absence of sperm), surgical sperm retrieval methods can help find viable sperm. Our experienced team uses advanced techniques to help men with severe male factor infertility achieve their dream of fatherhood.',
      tr: 'Erkek kısırlığı çeşitli nedenlere sahip olabilir. Bu nedenler doğumdan itibaren veya yaşam boyunca gelişebilir. Modern tekniklerle, ejakülatında sperm olmayan erkekler hala baba olabilir. TESA (Testiküler Sperm Aspirasyonu) ve TESE (Testiküler Sperm Ekstraksiyonu) gibi teknikler, spermin doğrudan testislerden alınmasına olanak tanır. Bu spermler daha sonra ICSI (Intrasitoplazmik Sperm Enjeksiyonu) ile döllenme için kullanılabilir. Azospermi (spermin tamamen yokluğu) durumlarında bile, cerrahi sperm alma yöntemleri uygulanabilir sperm bulmaya yardımcı olabilir. Deneyimli ekibimiz, şiddetli erkek faktörü kısırlığı olan erkeklerin babalık hayallerini gerçekleştirmelerine yardımcı olmak için gelişmiş teknikler kullanır.',
      de: 'Männliche Unfruchtbarkeit kann verschiedene Ursachen haben. Diese Ursachen können sich von Geburt an oder im Laufe des Lebens entwickeln. Mit modernen Techniken können Männer ohne Sperma im Ejakulat immer noch Väter werden. Techniken wie TESA (Testikuläre Spermienaspiration) und TESE (Testikuläre Spermienextraktion) ermöglichen es uns, Spermien direkt aus den Hoden zu gewinnen. Diese Spermien können dann zur Befruchtung durch ICSI (Intrazytoplasmatische Spermieninjektion) verwendet werden. Selbst bei Azoospermie (vollständiges Fehlen von Spermien) können chirurgische Spermiengewinnungsmethoden helfen, lebensfähige Spermien zu finden. Unser erfahrenes Team verwendet fortschrittliche Techniken, um Männern mit schwerer männlicher Faktor-Unfruchtbarkeit zu helfen, ihren Traum von der Vaterschaft zu verwirklichen.',
      ru: 'Мужское бесплодие может иметь различные причины. Эти причины могут развиваться с рождения или на протяжении жизни. С помощью современных техник мужчины без спермы в эякуляте все еще могут стать отцами. Такие техники, как TESA (аспирация спермы из яичка) и TESE (извлечение спермы из яичка), позволяют нам получать сперму непосредственно из яичек. Затем эта сперма может быть использована для оплодотворения с помощью ИКСИ (интрацитоплазматическая инъекция сперматозоида). Даже в случаях азооспермии (полное отсутствие спермы) хирургические методы извлечения спермы могут помочь найти жизнеспособную сперму. Наш опытный коллектив использует передовые техники, чтобы помочь мужчинам с тяжелым мужским фактором бесплодия осуществить свою мечту об отцовстве.',
      ar: 'يمكن أن يكون العقم الذكوري له أسباب مختلفة. يمكن أن تتطور هذه الأسباب منذ الولادة أو طوال الحياة. بالتقنيات الحديثة، يمكن للرجال بدون حيوانات منوية في القذف أن يصبحوا آباء. تقنيات مثل TESA (شفط الحيوانات المنوية من الخصية) و TESE (استخراج الحيوانات المنوية من الخصية) تسمح لنا باسترجاع الحيوانات المنوية مباشرة من الخصيتين. يمكن بعد ذلك استخدام هذه الحيوانات المنوية للتخصيب من خلال ICSI (الحقن داخل الهيولى للحيوان المنوي). حتى في حالات انعدام الحيوانات المنوية (الغياب الكامل للحيوانات المنوية)، يمكن لطرق الاستخراج الجراحية للحيوانات المنوية أن تساعد في العثور على حيوانات منوية قابلة للحياة. يستخدم فريقنا ذو الخبرة تقنيات متقدمة لمساعدة الرجال الذين يعانون من العقم الذكوري الشديد على تحقيق حلمهم بالأبوة.'
    },
    date: '2020-01-05',
    category: {
      en: 'Male Infertility',
      tr: 'Erkek Kısırlığı',
      de: 'Männliche Unfruchtbarkeit',
      ru: 'Мужское бесплодие',
      ar: 'العقم الذكوري'
    },
    image: '/images/sperm-donasyonu.jpg'
  },
  {
    id: 'prp-method',
    title: {
      en: 'What is PRP? PRP Method in IVF',
      tr: 'PRP Nedir? IVF\'de PRP Yöntemi',
      de: 'Was ist PRP? PRP-Methode in IVF',
      ru: 'Что такое PRP? Метод PRP в ЭКО',
      ar: 'ما هو PRP؟ طريقة PRP في أطفال الأنابيب'
    },
    excerpt: {
      en: 'PRP – Platelet Rich Plasma – means rich in platelets and growth factors. This method is used to improve endometrial receptivity...',
      tr: 'PRP – Platelet Rich Plasma – trombosit ve büyüme faktörleri açısından zengin anlamına gelir. Bu yöntem endometriyal reseptiviteyi iyileştirmek için kullanılır...',
      de: 'PRP – Platelet Rich Plasma – bedeutet reich an Thrombozyten und Wachstumsfaktoren. Diese Methode wird verwendet, um die Endometriumrezeptivität zu verbessern...',
      ru: 'PRP – Platelet Rich Plasma – означает богатый тромбоцитами и факторами роста. Этот метод используется для улучшения рецептивности эндометрия...',
      ar: 'PRP – Platelet Rich Plasma – يعني غني بالصفائح الدموية وعوامل النمو. تُستخدم هذه الطريقة لتحسين استقبال بطانة الرحم...'
    },
    content: {
      en: 'PRP – Platelet Rich Plasma – means rich in platelets and growth factors. This method is used to improve endometrial receptivity and increase the chances of successful embryo implantation. PRP is prepared from the patient\'s own blood, making it a safe and natural treatment option. The procedure involves drawing a small amount of blood, processing it to concentrate the platelets, and then injecting the PRP into the uterine lining. The growth factors in PRP help improve blood flow to the endometrium and enhance its quality, creating a more favorable environment for embryo implantation. This method is particularly beneficial for patients who have experienced multiple failed IVF cycles or have thin endometrial lining. PRP treatment can be performed before embryo transfer to optimize the uterine environment.',
      tr: 'PRP – Platelet Rich Plasma – trombosit ve büyüme faktörleri açısından zengin anlamına gelir. Bu yöntem endometriyal reseptiviteyi iyileştirmek ve başarılı embriyo implantasyonu şansını artırmak için kullanılır. PRP, hastanın kendi kanından hazırlanır, bu da onu güvenli ve doğal bir tedavi seçeneği haline getirir. Prosedür, küçük bir miktar kan almayı, trombositleri konsantre etmek için işlemeyi ve ardından PRP\'yi rahim astarına enjekte etmeyi içerir. PRP\'deki büyüme faktörleri, endometriyuma kan akışını iyileştirmeye ve kalitesini artırmaya yardımcı olur, embriyo implantasyonu için daha uygun bir ortam yaratır. Bu yöntem, birden fazla başarısız IVF döngüsü yaşamış veya ince endometriyal astarı olan hastalar için özellikle faydalıdır. PRP tedavisi, rahim ortamını optimize etmek için embriyo transferinden önce gerçekleştirilebilir.',
      de: 'PRP – Platelet Rich Plasma – bedeutet reich an Thrombozyten und Wachstumsfaktoren. Diese Methode wird verwendet, um die Endometriumrezeptivität zu verbessern und die Chancen auf eine erfolgreiche Embryoimplantation zu erhöhen. PRP wird aus dem eigenen Blut des Patienten hergestellt, was es zu einer sicheren und natürlichen Behandlungsoption macht. Das Verfahren umfasst das Abnehmen einer kleinen Menge Blut, die Verarbeitung zur Konzentration der Thrombozyten und dann die Injektion des PRP in die Gebärmutterschleimhaut. Die Wachstumsfaktoren in PRP helfen, den Blutfluss zum Endometrium zu verbessern und dessen Qualität zu steigern, wodurch eine günstigere Umgebung für die Embryoimplantation geschaffen wird. Diese Methode ist besonders vorteilhaft für Patienten, die mehrere fehlgeschlagene IVF-Zyklen erlebt haben oder eine dünne Endometriumschleimhaut haben. Die PRP-Behandlung kann vor dem Embryotransfer durchgeführt werden, um die Gebärmutterumgebung zu optimieren.',
      ru: 'PRP – Platelet Rich Plasma – означает богатый тромбоцитами и факторами роста. Этот метод используется для улучшения рецептивности эндометрия и увеличения шансов успешной имплантации эмбриона. PRP готовится из собственной крови пациента, что делает его безопасным и естественным вариантом лечения. Процедура включает забор небольшого количества крови, обработку для концентрации тромбоцитов, а затем инъекцию PRP в слизистую оболочку матки. Факторы роста в PRP помогают улучшить кровоток к эндометрию и повысить его качество, создавая более благоприятную среду для имплантации эмбриона. Этот метод особенно полезен для пациентов, которые пережили несколько неудачных циклов ЭКО или имеют тонкую слизистую оболочку эндометрия. Лечение PRP может быть выполнено перед переносом эмбриона для оптимизации маточной среды.',
      ar: 'PRP – Platelet Rich Plasma – يعني غني بالصفائح الدموية وعوامل النمو. تُستخدم هذه الطريقة لتحسين استقبال بطانة الرحم وزيادة فرص نجاح زرع الأجنة. يتم تحضير PRP من دم المريض نفسه، مما يجعله خيار علاج آمن وطبيعي. تتضمن العملية سحب كمية صغيرة من الدم ومعالجتها لتركيز الصفائح الدموية، ثم حقن PRP في بطانة الرحم. تساعد عوامل النمو في PRP على تحسين تدفق الدم إلى بطانة الرحم وتعزيز جودتها، مما يخلق بيئة أكثر ملاءمة لزرع الأجنة. هذه الطريقة مفيدة بشكل خاص للمرضى الذين عانوا من دورات أطفال أنابيب متعددة فاشلة أو لديهم بطانة رحم رقيقة. يمكن إجراء علاج PRP قبل نقل الأجنة لتحسين بيئة الرحم.'
    },
    date: '2020-01-03',
    category: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      ru: 'Лечение',
      ar: 'العلاج'
    },
    image: '/images/prpnedir.jpg'
  },
  {
    id: 'sperm-donation-donor-sperm',
    title: {
      en: 'Sperm Donation and Donor Sperm',
      tr: 'Sperm Donasyonu ve Spender Sperm',
      de: 'Samenspende und Spendersamen',
      ru: 'Донорство спермы и донорская сперма',
      ar: 'التبرع بالحيوانات المنوية والحيوانات المنوية المتبرع'
    },
    excerpt: {
      en: 'Sperm donation or sperm transplantation is a method applied to fathers who have no sperm in their ejaculate and cannot produce sperm...',
      tr: 'Sperm donasyonu veya sperm nakli, ejakülatında sperm bulunmayan ve sperm üretemeyen babalara uygulanan bir yöntemdir...',
      de: 'Die Samenspende oder Samentransplantation ist eine Methode, die bei Vätern angewendet wird, die kein Sperma in ihrem Ejakulat haben und kein Sperma produzieren können...',
      ru: 'Донорство спермы или трансплантация спермы — это метод, применяемый к отцам, у которых нет спермы в эякуляте и которые не могут производить сперму...',
      ar: 'التبرع بالحيوانات المنوية أو زرع الحيوانات المنوية هو طريقة تُطبق على الآباء الذين لا يوجد لديهم حيوانات منوية في القذف ولا يمكنهم إنتاج الحيوانات المنوية...'
    },
    content: {
      en: 'Sperm donation or sperm transplantation is a method applied to fathers who have no sperm in their ejaculate and cannot produce sperm. This treatment option provides hope for couples facing severe male factor infertility.\n\nWhen a man has azoospermia (complete absence of sperm in the ejaculate), there are two main types: obstructive azoospermia, where sperm production is normal but blocked, and non-obstructive azoospermia, where sperm production is impaired. In cases where surgical sperm retrieval (TESA/TESE) is not possible or unsuccessful, sperm donation becomes the viable option.\n\nOur sperm donation program uses carefully screened, healthy donors who have undergone comprehensive medical and genetic testing. All donors are tested for infectious diseases, genetic conditions, and overall health. The donor sperm is processed and stored in our cryobank under optimal conditions.\n\nThe process involves selecting a suitable donor based on physical characteristics, blood type, and other matching criteria. The donor sperm is then used for fertilization through IVF or IUI procedures. This method has high success rates and offers couples the opportunity to achieve pregnancy when male factor infertility cannot be treated with other methods.\n\nWe understand that using donor sperm is a significant decision. Our team provides comprehensive counseling and support throughout the process, ensuring that couples are fully informed and comfortable with their choice. Confidentiality and privacy are strictly maintained throughout the entire process.',
      tr: 'Sperm donasyonu veya sperm nakli, ejakülatında sperm bulunmayan ve sperm üretemeyen babalara uygulanan bir yöntemdir. Bu tedavi seçeneği, şiddetli erkek faktörü kısırlığı ile karşılaşan çiftlere umut sunar.\n\nBir erkeğin azospermisi (ejakülatta tamamen sperm yokluğu) olduğunda, iki ana tip vardır: tıkanıklık azospermisi, sperm üretimi normaldir ancak tıkanmıştır ve tıkanıklık olmayan azospermi, sperm üretimi bozulmuştur. Cerrahi sperm alma (TESA/TESE) mümkün olmadığında veya başarısız olduğunda, sperm donasyonu uygulanabilir seçenek haline gelir.\n\nSperm donasyonu programımız, kapsamlı tıbbi ve genetik testlerden geçmiş dikkatle taranmış sağlıklı donörleri kullanır. Tüm donörler bulaşıcı hastalıklar, genetik durumlar ve genel sağlık açısından test edilir. Donör spermi işlenir ve kriyobankımızda optimal koşullar altında saklanır.\n\nSüreç, fiziksel özellikler, kan grubu ve diğer eşleştirme kriterlerine göre uygun bir donör seçmeyi içerir. Donör spermi daha sonra IVF veya IUI prosedürleri ile döllenme için kullanılır. Bu yöntem yüksek başarı oranlarına sahiptir ve erkek faktörü kısırlığı diğer yöntemlerle tedavi edilemediğinde çiftlere gebelik elde etme fırsatı sunar.\n\nDonör sperm kullanmanın önemli bir karar olduğunu anlıyoruz. Ekibimiz, süreç boyunca kapsamlı danışmanlık ve destek sağlar, çiftlerin tam olarak bilgilendirildiğinden ve seçimlerinden rahat olduklarından emin olur. Gizlilik ve mahremiyet tüm süreç boyunca sıkı bir şekilde korunur.',
      de: 'Die Samenspende oder Samentransplantation ist eine Methode, die bei Vätern angewendet wird, die kein Sperma in ihrem Ejakulat haben und kein Sperma produzieren können. Diese Behandlungsoption bietet Paaren, die mit schwerer männlicher Faktor-Unfruchtbarkeit konfrontiert sind, Hoffnung.\n\nWenn ein Mann Azoospermie (vollständiges Fehlen von Spermien im Ejakulat) hat, gibt es zwei Haupttypen: obstruktive Azoospermie, bei der die Spermienproduktion normal, aber blockiert ist, und nicht-obstruktive Azoospermie, bei der die Spermienproduktion beeinträchtigt ist. In Fällen, in denen die chirurgische Spermiengewinnung (TESA/TESE) nicht möglich oder erfolglos ist, wird die Samenspende zur praktikablen Option.\n\nUnser Samenspendeprogramm verwendet sorgfältig gescreente, gesunde Spender, die umfassende medizinische und genetische Tests durchlaufen haben. Alle Spender werden auf Infektionskrankheiten, genetische Erkrankungen und allgemeine Gesundheit getestet. Das Spendersperma wird verarbeitet und in unserer Kryobank unter optimalen Bedingungen gelagert.\n\nDer Prozess umfasst die Auswahl eines geeigneten Spenders basierend auf physischen Merkmalen, Blutgruppe und anderen Matching-Kriterien. Das Spendersperma wird dann zur Befruchtung durch IVF- oder IUI-Verfahren verwendet. Diese Methode hat hohe Erfolgsraten und bietet Paaren die Möglichkeit, eine Schwangerschaft zu erreichen, wenn männliche Faktor-Unfruchtbarkeit nicht mit anderen Methoden behandelt werden kann.\n\nWir verstehen, dass die Verwendung von Spendersperma eine bedeutende Entscheidung ist. Unser Team bietet umfassende Beratung und Unterstützung während des gesamten Prozesses und stellt sicher, dass Paare vollständig informiert und mit ihrer Wahl zufrieden sind. Vertraulichkeit und Privatsphäre werden während des gesamten Prozesses strikt gewahrt.',
      ru: 'Донорство спермы или трансплантация спермы — это метод, применяемый к отцам, у которых нет спермы в эякуляте и которые не могут производить сперму. Этот вариант лечения дает надежду парам, столкнувшимся с тяжелым мужским фактором бесплодия.\n\nКогда у мужчины азооспермия (полное отсутствие спермы в эякуляте), существует два основных типа: обструктивная азооспермия, при которой производство спермы нормальное, но заблокировано, и необструктивная азооспермия, при которой производство спермы нарушено. В случаях, когда хирургическое извлечение спермы (TESA/TESE) невозможно или неудачно, донорство спермы становится жизнеспособным вариантом.\n\nНаша программа донорства спермы использует тщательно проверенных здоровых доноров, прошедших комплексные медицинские и генетические тесты. Все доноры проверяются на инфекционные заболевания, генетические состояния и общее здоровье. Донорская сперма обрабатывается и хранится в нашем криобанке в оптимальных условиях.\n\nПроцесс включает выбор подходящего донора на основе физических характеристик, группы крови и других критериев соответствия. Затем донорская сперма используется для оплодотворения с помощью процедур ЭКО или ВМИ. Этот метод имеет высокие показатели успеха и дает парам возможность достичь беременности, когда мужской фактор бесплодия не может быть вылечен другими методами.\n\nМы понимаем, что использование донорской спермы — это важное решение. Наша команда обеспечивает комплексное консультирование и поддержку на протяжении всего процесса, гарантируя, что пары полностью информированы и довольны своим выбором. Конфиденциальность и приватность строго соблюдаются на протяжении всего процесса.',
      ar: 'التبرع بالحيوانات المنوية أو زرع الحيوانات المنوية هو طريقة تُطبق على الآباء الذين لا يوجد لديهم حيوانات منوية في القذف ولا يمكنهم إنتاج الحيوانات المنوية. يوفر خيار العلاج هذا الأمل للأزواج الذين يواجهون العقم الذكوري الشديد.\n\nعندما يكون لدى الرجل انعدام الحيوانات المنوية (الغياب الكامل للحيوانات المنوية في القذف)، هناك نوعان رئيسيان: انعدام الحيوانات المنوية الانسدادي، حيث يكون إنتاج الحيوانات المنوية طبيعيًا ولكنه مسدود، وانعدام الحيوانات المنوية غير الانسدادي، حيث يكون إنتاج الحيوانات المنوية ضعيفًا. في الحالات التي لا يكون فيها استرجاع الحيوانات المنوية الجراحي (TESA/TESE) ممكنًا أو ناجحًا، يصبح التبرع بالحيوانات المنوية الخيار القابل للتطبيق.\n\nيستخدم برنامج التبرع بالحيوانات المنوية لدينا متبرعين أصحاء تم فحصهم بعناية ومرورهم بفحوصات طبية ووراثية شاملة. يتم اختبار جميع المتبرعين للأمراض المعدية والحالات الوراثية والصحة العامة. يتم معالجة الحيوانات المنوية المتبرع وتخزينها في بنك التجميد لدينا في ظروف مثالية.\n\nتتضمن العملية اختيار متبرع مناسب بناءً على الخصائص الفيزيائية وفصيلة الدم ومعايير المطابقة الأخرى. ثم يتم استخدام الحيوانات المنوية المتبرع للتخصيب من خلال إجراءات أطفال الأنابيب أو التلقيح داخل الرحم. هذه الطريقة لها معدلات نجاح عالية وتوفر للأزواج فرصة تحقيق الحمل عندما لا يمكن علاج العقم الذكوري بطرق أخرى.\n\nنفهم أن استخدام الحيوانات المنوية المتبرع قرار مهم. يوفر فريقنا الاستشارة والدعم الشاملين طوال العملية، مما يضمن أن الأزواج على علم كامل ومرتاحون لاختيارهم. يتم الحفاظ على السرية والخصوصية بشكل صارم طوال العملية بأكملها.'
    },
    date: '2020-01-12',
    category: {
      en: 'Sperm Donation',
      tr: 'Sperm Donasyonu',
      de: 'Samenspende',
      ru: 'Донорство спермы',
      ar: 'التبرع بالحيوانات المنوية'
    },
    image: '/images/sperm-donasyonu.jpg'
  }
];

// Images are now set directly in each blog post object above
// All images should be sourced from www.cyprusivflabs.com when available
