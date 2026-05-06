import type { Treatment } from '../../types';

const eggFreezing: Treatment = {
  id: 'egg-freezing',
  slug: {
    tr: 'yumurta-dondurma',
    en: 'egg-freezing',
    de: 'eizellen-einfrieren',
    ru: 'zamorozka-yajcekletok',
    ar: 'tajmid-al-buwaydat',
  },
  title: {
    tr: 'Yumurta Dondurma (Vitrifikasyon)',
    en: 'Egg Freezing (Vitrification)',
    de: 'Eizellen einfrieren (Vitrifikation)',
    ru: 'Заморозка яйцеклеток (витрификация)',
    ar: 'تجميد البويضات (التزجيج)',
  },
  seoTitle: {
    tr: 'Yumurta Dondurma Kıbrıs | Doğuş IVF Center',
    en: 'Egg Freezing in Cyprus | Doğuş IVF Center',
    de: 'Eizellen einfrieren in Zypern | Doğuş IVF Center',
    ru: 'Заморозка яйцеклеток на Кипре | Doğuş IVF Center',
    ar: 'تجميد البويضات في قبرص | Doğuş IVF Center',
  },
  seoDescription: {
    tr: 'Sosyal yumurta dondurma ve onkolojik fertilite koruma. Vitrifikasyon ile güvenli saklama. Süreç, başarı oranları ve sıkça sorulan sorular.',
    en: 'Social egg freezing and oncological fertility preservation. Safe long-term storage with vitrification. Process, success rates and FAQs.',
    de: 'Social Egg Freezing und onkologischer Fruchtbarkeitsschutz. Sichere Langzeitlagerung mittels Vitrifikation. Ablauf, Erfolgsraten und FAQs.',
    ru: 'Социальная заморозка яйцеклеток и сохранение фертильности при онкологии. Безопасное хранение методом витрификации.',
    ar: 'تجميد البويضات الاجتماعي وحفظ الخصوبة قبل علاج السرطان. تخزين آمن بتقنية التزجيج.',
  },
  keywords: {
    tr: 'yumurta dondurma, vitrifikasyon, fertilite koruma, sosyal yumurta dondurma, kıbrıs yumurta dondurma',
    en: 'egg freezing, vitrification, oocyte cryopreservation, fertility preservation',
    de: 'Eizellen einfrieren, Vitrifikation, Fruchtbarkeitserhaltung, Social Freezing',
    ru: 'заморозка яйцеклеток, витрификация, сохранение фертильности',
    ar: 'تجميد البويضات, التزجيج, حفظ الخصوبة',
  },
  description: {
    tr: 'Yumurta dondurma, kontrollü ilaç tedavisi ile elde edilen yumurtaların vitrifikasyon yöntemiyle hızla dondurularak ileride kullanılmak üzere sıvı azot içinde saklanmasıdır.',
    en: 'Egg freezing collects oocytes after controlled stimulation and stores them in liquid nitrogen via vitrification for future use.',
    de: 'Beim Eizell-Einfrieren werden nach kontrollierter Stimulation gewonnene Eizellen mittels Vitrifikation in flüssigem Stickstoff für die spätere Verwendung gelagert.',
    ru: 'Заморозка яйцеклеток — получение ооцитов после стимуляции и их хранение в жидком азоте методом витрификации для будущего использования.',
    ar: 'تجميد البويضات هو جمع البويضات بعد تحفيز محكم وتخزينها بالتزجيج في النيتروجين السائل للاستخدام مستقبلاً.',
  },
  intro: {
    tr: 'Vitrifikasyon teknolojisinin gelişmesiyle yumurta dondurma artık güvenilir bir fertilite koruma yöntemidir. Henüz çocuk sahibi olmayı planlamayan, kariyerine odaklanmış kadınlar (sosyal yumurta dondurma) ile kemoterapi/radyoterapi gerektiren onkolojik hastalıklarda yumurta rezervini koruma amacıyla uygulanır. Çözündürme sonrası yumurtaların hayatta kalma oranı %85’in üzerindedir ve ICSI ile döllenmeye uygun kalır.',
    en: 'Vitrification has turned egg freezing into a reliable fertility-preservation option. It is offered for social reasons—when career or personal circumstances delay child-bearing—and as oncological fertility preservation before chemotherapy or radiotherapy. Post-thaw oocyte survival exceeds 85% and the eggs are fully usable for ICSI.',
    de: 'Dank Vitrifikation ist Eizell-Einfrieren heute eine verlässliche Methode des Fruchtbarkeitserhalts. Eingesetzt wird es für Social Freezing und vor onkologischen Therapien, die das Eierstockgewebe schädigen können. Nach Auftauen liegt die Überlebensrate über 85%; die Eizellen sind voll ICSI-fähig.',
    ru: 'Благодаря витрификации заморозка яйцеклеток стала надёжным способом сохранения фертильности. Применяется для «социальной» заморозки и для онкологических пациенток до химио-/лучевой терапии. Выживаемость яйцеклеток после разморозки превышает 85% и они полностью пригодны для ИКСИ.',
    ar: 'بفضل تقنية التزجيج أصبح تجميد البويضات وسيلة موثوقة لحفظ الخصوبة. يُستخدم اجتماعيًا لتأجيل الإنجاب وأيضًا للمريضات قبل العلاج الكيميائي/الإشعاعي. تتجاوز نسبة بقاء البويضات بعد الإذابة 85% وتصلح بالكامل للحقن المجهري.',
  },
  sections: {
    tr: [
      {
        heading: 'Sosyal Yumurta Dondurma Neden Önemli?',
        body: 'Kadınların yumurta sayısı ve kalitesi 30 yaşından itibaren düşmeye başlar; 35 yaşından sonra bu düşüş hızlanır. Sosyal nedenlerle (kariyer, eşin bulunmaması, ekonomik durum) doğum yapmayı erteleyen kadınlar 27-35 yaş arasında yumurtalarını dondurarak gelecekteki gebelik şansını gençlik dönemiyle aynı düzeyde tutabilir.',
      },
      {
        heading: 'Onkolojik Fertilite Koruma',
        body: 'Meme kanseri, lenfoma ve diğer onkolojik hastalıklarda kemoterapi/radyoterapi yumurtalık fonksiyonuna ciddi zarar verir. Tedaviye başlamadan önce 10–14 gün süren bir stimülasyon protokolü ile yumurtalar toplanır ve dondurulur. Onkologla koordineli yürütülen acil protokoller bu süreyi daha da kısaltabilir.',
      },
      {
        heading: 'Süreç ve Saklama',
        body: 'Tüp bebek tedavisinin yumurta toplama aşamasına kadar olan kısmı uygulanır: kontrollü stimülasyon (10–12 gün), folikül gelişiminin ultrason takibi, çatlatma iğnesi sonrası OPU. Toplanan olgun yumurtalar embriyolog tarafından vitrifikasyon yöntemiyle birkaç saniyede -196°C’ye dondurulur ve sıvı azot tanklarında istenildiği kadar süreyle saklanır. Saklama süresi gebelik şansını etkilemez.',
      },
      {
        heading: 'Çözündürme ve Kullanım',
        body: 'Hasta gebelik istediği dönemde rahmi östrojen tedavisi ile hazırlanır. Yumurtalar çözülür; tek bir sperm ICSI yöntemiyle her olgun yumurtaya enjekte edilir. Elde edilen embriyolardan en kalitelisi 3-5 gün sonra rahime transfer edilir. Doğuş IVF Center’da çözündürme sonrası gebelik oranları yumurta sayısına ve dondurma anındaki yaşa bağlı olarak %35-55 arasındadır.',
      },
    ],
    en: [
      {
        heading: 'Why Social Egg Freezing?',
        body: 'Egg quantity and quality begin to decline at age 30 and drop more sharply after 35. Women who delay childbearing for career, partner or financial reasons can freeze their eggs between ages 27–35 to preserve a younger biological clock for future pregnancy.',
      },
      {
        heading: 'Oncological Fertility Preservation',
        body: 'Chemotherapy and radiotherapy used in breast cancer, lymphoma and many other malignancies damage ovarian function. A 10–14 day stimulation protocol can collect eggs before treatment begins; emergency protocols coordinated with the oncologist can shorten this further.',
      },
      {
        heading: 'Procedure and Storage',
        body: 'The cycle follows the IVF stimulation and retrieval steps: 10–12 days of controlled ovarian stimulation, ultrasound monitoring, hCG trigger and OPU. The mature oocytes are vitrified within seconds to −196°C and stored in liquid-nitrogen tanks for as long as needed. Storage duration does not influence later pregnancy chances.',
      },
      {
        heading: 'Thawing and Use',
        body: 'When the patient is ready for pregnancy, her endometrium is prepared with estrogen. Eggs are thawed and ICSI is used to inject one sperm into every mature egg. The best embryo is transferred 3–5 days later. At Doğuş IVF Center, thaw-cycle pregnancy rates range from 35–55% depending on egg number and the patient’s age at the time of freezing.',
      },
    ],
    de: [
      {
        heading: 'Warum Social Egg Freezing?',
        body: 'Eizellqualität und -anzahl sinken ab 30, deutlich stärker ab 35. Frauen, die Kinderwunsch aus beruflichen oder persönlichen Gründen verschieben, profitieren vom Einfrieren zwischen 27–35 Jahren.',
      },
      {
        heading: 'Onkologischer Fruchtbarkeitsschutz',
        body: 'Chemo-/Strahlentherapie schädigt die Eierstockfunktion. Ein 10–14-tägiges Stimulationsprotokoll vor der onkologischen Therapie sichert Eizellen; Notfallprotokolle in Abstimmung mit der Onkologie verkürzen die Zeit.',
      },
      {
        heading: 'Ablauf und Lagerung',
        body: 'Stimulation, Ultraschallkontrollen, hCG-Trigger, OPU. Reife Eizellen werden in Sekunden auf −196°C vitrifiziert und in Stickstofftanks gelagert; die Lagerdauer beeinflusst die späteren Erfolgsraten nicht.',
      },
      {
        heading: 'Auftauen und Anwendung',
        body: 'Endometriumvorbereitung mit Östrogenen. Eizellen werden aufgetaut, mit ICSI befruchtet, der beste Embryo nach 3–5 Tagen transferiert. Schwangerschaftsraten 35–55%, abhängig von Eizellanzahl und Alter beim Einfrieren.',
      },
    ],
    ru: [
      {
        heading: 'Зачем социальная заморозка',
        body: 'Количество и качество яйцеклеток снижаются после 30 лет, особенно резко после 35. Заморозка между 27 и 35 годами сохраняет шансы на беременность на уровне молодого возраста.',
      },
      {
        heading: 'Сохранение фертильности при онкологии',
        body: 'Химио- и лучевая терапия повреждают функцию яичников. До начала онкологического лечения возможна стимуляция за 10–14 дней; срочные протоколы согласовываются с онкологом.',
      },
      {
        heading: 'Процесс и хранение',
        body: 'Стимуляция, УЗИ-контроль, триггер ХГЧ, пункция. Зрелые яйцеклетки витрифицируются за секунды до −196°C и хранятся в азоте сколько нужно; срок хранения не влияет на эффективность.',
      },
      {
        heading: 'Размораживание и использование',
        body: 'Эндометрий готовят эстрогенами. Яйцеклетки размораживают, проводят ИКСИ, лучший эмбрион переносят на 3–5 день. Частота беременности — 35–55% в зависимости от числа яйцеклеток и возраста на момент заморозки.',
      },
    ],
    ar: [
      {
        heading: 'لماذا التجميد الاجتماعي؟',
        body: 'تنخفض جودة وعدد البويضات بعد 30 عامًا، وتزداد سرعة الانخفاض بعد 35. التجميد بين 27 و35 عامًا يحفظ فرص الحمل المستقبلي بمستوى الشباب.',
      },
      {
        heading: 'حفظ الخصوبة قبل علاج السرطان',
        body: 'العلاج الكيميائي والإشعاعي يضران بوظيفة المبيض. قبل بدء العلاج يُجرى تحفيز لمدة 10–14 يومًا؛ ويمكن تطبيق بروتوكولات طارئة بالتنسيق مع طبيب الأورام.',
      },
      {
        heading: 'الإجراء والتخزين',
        body: 'تحفيز محكم، متابعة بالموجات فوق الصوتية، إبرة hCG، ثم سحب البويضات. تُجمَّد البويضات الناضجة بالتزجيج في ثوان إلى −196°C وتُحفظ في النيتروجين السائل لأي مدة. مدة التخزين لا تؤثر على نسب النجاح.',
      },
      {
        heading: 'الإذابة والاستخدام',
        body: 'تُحضَّر بطانة الرحم بالإستروجين. تُذاب البويضات وتُحقَن بـ ICSI، ويُنقل أفضل جنين بعد 3–5 أيام. نسب الحمل 35–55% حسب عدد البويضات وعمر المريضة عند التجميد.',
      },
    ],
  },
  whoIsItFor: {
    tr: ['Çocuk sahibi olmayı erteleyen 27-38 yaş arası kadınlar', 'Kemoterapi/radyoterapi alacak hastalar', 'Düşük yumurta rezervi olan ve birikim yapması gereken kadınlar', 'Eşi bulunmayan ancak doğurganlığını korumak isteyen kadınlar'],
    en: ['Women aged 27–38 delaying motherhood', 'Patients about to start chemo/radiotherapy', 'Women with low ovarian reserve who need to bank eggs', 'Single women preserving future fertility'],
    de: ['Frauen 27–38, die Mutterschaft verschieben', 'Patientinnen vor onkologischer Therapie', 'Frauen mit niedriger Eizellreserve', 'Alleinstehende Frauen, die Fruchtbarkeit erhalten möchten'],
    ru: ['Женщины 27–38 лет, откладывающие материнство', 'Пациентки перед химио-/лучевой терапией', 'Женщины со сниженным резервом', 'Одинокие женщины, сохраняющие фертильность'],
    ar: ['النساء بين 27 و38 ممن يؤجلن الإنجاب', 'المريضات قبل العلاج الكيميائي/الإشعاعي', 'النساء مع مخزون مبيض منخفض', 'النساء العازبات للحفاظ على الخصوبة'],
  },
  benefits: {
    tr: ['Vitrifikasyon ile yüksek hayatta kalma oranı', 'Süresiz saklama imkanı', 'Anne yaşının biyolojik etkisini durdurur', 'Onkolojik hastalarda fertilite koruma', 'Tek bir stimülasyon sikluyla yeterli birikim'],
    en: ['High survival with vitrification', 'Indefinite storage', 'Pauses biological aging of eggs', 'Fertility safety net before cancer therapy', 'Single stimulation usually sufficient'],
    de: ['Hohe Überlebensrate dank Vitrifikation', 'Lagerung unbegrenzt', 'Stoppt biologische Eizellalterung', 'Schutz vor Krebstherapie', 'Meist eine Stimulation ausreichend'],
    ru: ['Высокая выживаемость при витрификации', 'Бессрочное хранение', 'Останавливает биологическое старение яйцеклеток', 'Защита перед онкологическим лечением', 'Обычно достаточно одного цикла стимуляции'],
    ar: ['نسبة بقاء عالية مع التزجيج', 'تخزين دون حد زمني', 'يوقف الشيخوخة البيولوجية للبويضات', 'حماية الخصوبة قبل علاج السرطان', 'دورة تحفيز واحدة عادةً كافية'],
  },
  faqs: {
    tr: [
      { q: 'Yumurtalar ne kadar süre saklanabilir?', a: 'Vitrifikasyon ile dondurulan yumurtalar 10–20 yıl ve üzeri sürelerde saklanabilir; saklama süresi başarıyı etkilemez.' },
      { q: 'Kaç yumurta dondurulmalı?', a: 'Tek bir gebelik için 8–15 olgun yumurta önerilir. Yaş ilerledikçe gerekli sayı artar.' },
      { q: 'Yumurta dondurmanın yan etkisi var mı?', a: 'Hafif şişkinlik ve hassasiyet dışında ciddi yan etki nadirdir. Doğru protokolde over hiperstimülasyon riski düşürülür.' },
      { q: 'Çözündürme sonrası başarı oranı nedir?', a: 'Yumurta sayısı ve dondurma anındaki yaşa bağlı olarak gebelik oranı %35-55 düzeyindedir.' },
    ],
    en: [
      { q: 'How long can eggs be stored?', a: 'Vitrified eggs can remain in storage for 10–20+ years; duration does not affect success rates.' },
      { q: 'How many eggs do I need?', a: 'For one pregnancy, banking 8–15 mature eggs is recommended; the number increases with age.' },
      { q: 'Are there side effects?', a: 'Mild bloating and tenderness are common; serious side effects are rare with proper protocols.' },
      { q: 'What is the post-thaw success rate?', a: '35–55% depending on egg count and the woman’s age at freezing.' },
    ],
    de: [
      { q: 'Wie lange Lagerung?', a: '10–20+ Jahre möglich; Dauer beeinflusst Erfolg nicht.' },
      { q: 'Wie viele Eizellen?', a: '8–15 reife Eizellen für eine Schwangerschaft, mehr im höheren Alter.' },
      { q: 'Nebenwirkungen?', a: 'Leichte Schmerzen, Spannungsgefühl; OHSS bei richtiger Dosierung selten.' },
      { q: 'Erfolgsrate nach Auftauen?', a: '35–55% je nach Anzahl und Alter beim Einfrieren.' },
    ],
    ru: [
      { q: 'Как долго хранятся яйцеклетки?', a: '10–20 лет и более; срок хранения не влияет на эффективность.' },
      { q: 'Сколько ооцитов нужно?', a: 'Для одной беременности — 8–15 зрелых, в возрасте — больше.' },
      { q: 'Есть ли побочные эффекты?', a: 'Лёгкое вздутие и чувствительность; СГЯ редок при правильном протоколе.' },
      { q: 'Какая частота беременности после разморозки?', a: '35–55% в зависимости от числа и возраста на момент заморозки.' },
    ],
    ar: [
      { q: 'ما مدة التخزين؟', a: '10–20 عامًا أو أكثر، ولا يؤثر زمن التخزين على النجاح.' },
      { q: 'كم بويضة مطلوبة؟', a: 'تُنصح بـ 8–15 بويضة ناضجة لحمل واحد، ويزيد العدد مع تقدم العمر.' },
      { q: 'هل توجد آثار جانبية؟', a: 'انتفاخ خفيف وحساسية شائعان؛ متلازمة فرط التحفيز نادرة مع البروتوكول الصحيح.' },
      { q: 'ما نسبة النجاح بعد الإذابة؟', a: '35–55% حسب عدد البويضات وعمر المريضة عند التجميد.' },
    ],
  },
  steps: {
    tr: ['Yumurtalık Uyarımı', 'Yumurta Toplama', 'Vitrifikasyon', 'Sıvı Azot Saklama'],
    en: ['Ovarian Stimulation', 'Egg Retrieval', 'Vitrification', 'Cryostorage'],
    de: ['Ovarielle Stimulation', 'Eizellentnahme', 'Vitrifikation', 'Kryolagerung'],
    ru: ['Стимуляция яичников', 'Пункция фолликулов', 'Витрификация', 'Криохранение'],
    ar: ['تحفيز المبايض', 'سحب البويضات', 'التزجيج', 'التخزين بالنيتروجين السائل'],
  },
  successRate: '50%',
  duration: { tr: '15 gün', en: '15 days', de: '15 Tage', ru: '15 дней', ar: '15 يوم' },
  image: '/images/egg.jpeg',
  icon: 'fa-snowflake',
  relatedIds: ['ivf', 'embryo-freezing', 'mini-ivf', 'infertility-treatment'],
};

export default eggFreezing;
