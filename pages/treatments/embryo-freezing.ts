import type { Treatment } from '../../types';

const embryoFreezing: Treatment = {
  id: 'embryo-freezing',
  slug: {
    tr: 'embriyo-dondurma',
    en: 'embryo-freezing',
    de: 'embryo-einfrieren',
    ru: 'zamorozka-embrionov',
    ar: 'tajmid-al-ajinna',
  },
  title: {
    tr: 'Embriyo Dondurma',
    en: 'Embryo Freezing',
    de: 'Embryo einfrieren',
    ru: 'Заморозка эмбрионов',
    ar: 'تجميد الأجنة',
  },
  seoTitle: {
    tr: 'Embriyo Dondurma (Vitrifikasyon) | Doğuş IVF Center Kıbrıs',
    en: 'Embryo Freezing (Vitrification) | Doğuş IVF Center Cyprus',
    de: 'Embryo einfrieren (Vitrifikation) | Doğuş IVF Center Zypern',
    ru: 'Заморозка эмбрионов (витрификация) | Doğuş IVF Center, Кипр',
    ar: 'تجميد الأجنة (التزجيج) | Doğuş IVF Center قبرص',
  },
  seoDescription: {
    tr: 'Vitrifikasyon ile %95+ hayatta kalma oranlı embriyo dondurma. Donmuş embriyo transferi süreci, başarı oranları ve sıkça sorulan sorular.',
    en: 'Embryo vitrification with 95%+ survival rate. Frozen embryo transfer process, success rates and FAQs.',
    de: 'Embryo-Vitrifikation mit 95%+ Überlebensrate. Kryotransfer, Erfolgsraten und FAQs.',
    ru: 'Витрификация эмбрионов с выживаемостью 95%+. Криоперенос, показатели успеха и FAQ.',
    ar: 'تجميد الأجنة بالتزجيج بنسبة بقاء تتجاوز 95%. نقل الأجنة المجمدة ونسب النجاح والأسئلة الشائعة.',
  },
  keywords: {
    tr: 'embriyo dondurma, vitrifikasyon, donmuş embriyo transferi, FET, embriyo saklama',
    en: 'embryo freezing, vitrification, frozen embryo transfer, FET, embryo storage',
    de: 'Embryo einfrieren, Vitrifikation, Kryotransfer, FET',
    ru: 'заморозка эмбрионов, витрификация, криоперенос, FET',
    ar: 'تجميد الأجنة, التزجيج, نقل الأجنة المجمدة, FET',
  },
  description: {
    tr: 'Embriyo dondurma, tüp bebek tedavisinden geriye kalan kaliteli embriyoların vitrifikasyon yöntemiyle hızla dondurularak ileride kullanılmak üzere saklanmasıdır.',
    en: 'Embryo freezing preserves surplus high-quality embryos from an IVF cycle by ultra-rapid vitrification, ready for future transfer.',
    de: 'Beim Embryo-Einfrieren werden überzählige hochwertige Embryonen aus einem IVF-Zyklus durch Vitrifikation für spätere Transfers konserviert.',
    ru: 'Заморозка эмбрионов — сохранение оставшихся качественных эмбрионов после ЭКО с помощью витрификации для последующего использования.',
    ar: 'تجميد الأجنة هو حفظ الأجنة الفائضة عالية الجودة من دورة IVF بتقنية التزجيج للاستخدام لاحقًا.',
  },
  intro: {
    tr: 'Yaklaşık 25 yıldır uygulanan embriyo dondurma günümüzde vitrifikasyon (hızlı dondurma) tekniğiyle %95’in üzerinde hayatta kalma oranına ulaşmıştır. Eskiden kullanılan yavaş soğutma yöntemiyle kıyaslandığında dondurma sırasında oluşan buz kristallerinin embriyoya zararı tamamen önlenmiştir. Doğuş IVF Center’da bir tüp bebek siklusunda kalan kaliteli embriyolar dondurulur; bu sayede çiftler tekrar tam tedavi protokolüne girmeden, çok daha düşük maliyetle ek gebelik denemeleri yapabilir.',
    en: 'Embryo freezing has been clinically used for nearly 25 years and modern vitrification delivers post-thaw survival rates above 95%. Compared to the older slow-freezing technique, vitrification eliminates ice-crystal damage to the embryo. At Doğuş IVF Center we cryopreserve every viable surplus embryo from an IVF cycle so couples can attempt additional pregnancies at much lower cost without repeating full treatment.',
    de: 'Embryo-Einfrieren wird seit fast 25 Jahren praktiziert; moderne Vitrifikation erreicht über 95% Überlebensrate nach Auftauen. Gegenüber dem alten Slow-Freezing entfällt die Gefahr von Eiskristallschäden. Im Doğuş IVF Center werden überzählige Embryonen kryokonserviert; Paare können weitere Versuche kostengünstig ohne erneute Stimulation unternehmen.',
    ru: 'Заморозка эмбрионов применяется около 25 лет; современная витрификация даёт выживаемость свыше 95%. По сравнению со старой методикой медленного замораживания исключаются повреждения от ледяных кристаллов. В Doğuş IVF Center мы криоконсервируем все жизнеспособные эмбрионы; повторные попытки доступнее без необходимости полной стимуляции.',
    ar: 'استُخدم تجميد الأجنة لقرابة 25 عامًا؛ ويتجاوز معدل البقاء بعد الإذابة 95% مع التزجيج الحديث. مقارنة بالتجميد البطيء القديم، التزجيج يلغي ضرر بلورات الثلج. في Doğuş IVF نُجمِّد جميع الأجنة الفائضة الصالحة، فيستطيع الأزواج إجراء محاولات لاحقة بتكلفة أقل دون إعادة دورة كاملة.',
  },
  sections: {
    tr: [
      {
        heading: 'Vitrifikasyon Nasıl Çalışır?',
        body: 'Vitrifikasyon, embriyonun saniyeler içinde -196°C’ye kadar donduğu ultra hızlı bir tekniktir. Embriyo özel kriyoprotektan sıvılarla işlenir, ardından sıvı azota daldırılarak camsı (vitröz) bir hâle dönüştürülür. Buz kristalleri oluşmadığı için hücre yapısı korunur ve embriyolar yıllarca canlılığını yitirmeden saklanır.',
      },
      {
        heading: 'Donmuş Embriyo Transferi (FET)',
        body: 'Çözündürmenin yapılacağı sikluyla anne adayının rahmi östrojen ve progesteron tedavisi ile hazırlanır. Belirlenen günde embriyo birkaç dakikada çözülür ve standart embriyo transferi prosedürüyle rahime aktarılır. FET sikluyu, taze transfere göre daha kontrollü bir endometriyum ortamı sağladığı için bazı çalışmalarda daha yüksek implantasyon oranları gözlenmiştir.',
      },
      {
        heading: 'Hangi Embriyolar Dondurulur?',
        body: 'Donmaya uygun embriyolar, 5. günde blastokist aşamasına ulaşmış, morfolojik olarak iyi/çok iyi sınıflandırılan embriyolardır. PGT-A yapılan tüm embriyolar sonuç beklenirken otomatik olarak vitrifiye edilir. Düşük kaliteli embriyoların dondurulması önerilmez çünkü çözündürme sonrası canlı kalma şansları düşüktür.',
      },
      {
        heading: 'Saklama Süresi ve Yasal Çerçeve',
        body: 'Embriyolar yasal sınırlar içinde 10 yıl ve üzeri sürelerle saklanabilir. Saklama süresi gebelik şansını etkilemez. Doğuş IVF Center’da embriyoların saklanması ve kullanımı için her aşamada çift onayı alınır; ayrılık veya boşanma durumunda ne yapılacağı sözleşmeyle belirlenir.',
      },
    ],
    en: [
      {
        heading: 'How Vitrification Works',
        body: 'Vitrification is an ultra-rapid technique that brings the embryo to −196°C in seconds. Embryos are equilibrated in cryoprotectants and plunged into liquid nitrogen, turning into a glass-like solid without forming ice crystals. Cellular architecture is preserved and embryos remain viable for many years.',
      },
      {
        heading: 'Frozen Embryo Transfer (FET)',
        body: 'In the cycle planned for thawing, the patient’s endometrium is prepared with estrogen and progesterone. On the chosen day the embryo is thawed within minutes and transferred via the standard procedure. FET cycles offer a more physiologic endometrium and have shown equal or higher implantation rates than fresh transfers in many studies.',
      },
      {
        heading: 'Which Embryos Are Frozen?',
        body: 'Embryos suitable for freezing are blastocysts of good or top morphological quality on day 5. All embryos undergoing PGT-A are vitrified automatically while results are pending. Low-quality embryos are not frozen because their post-thaw survival is poor.',
      },
      {
        heading: 'Storage Duration and Legal Framework',
        body: 'Embryos can be stored for ten years or more within local regulations; storage time does not affect pregnancy chances. Doğuş IVF Center collects written consent at every step, including provisions in case of separation or divorce.',
      },
    ],
    de: [
      {
        heading: 'Wie funktioniert Vitrifikation?',
        body: 'Bei der Vitrifikation werden Embryonen in Sekunden auf −196°C abgekühlt. Mit Kryoprotektoren behandelt und in flüssigen Stickstoff getaucht, erstarren sie glasartig ohne Eiskristalle. Die Zellarchitektur bleibt erhalten.',
      },
      {
        heading: 'Kryotransfer (FET)',
        body: 'Endometriumvorbereitung mit Östrogenen und Progesteron. Embryo wird kurz aufgetaut und transferiert. FET zeigt häufig gleichwertige oder höhere Implantationsraten gegenüber Frischtransfer.',
      },
      {
        heading: 'Welche Embryonen?',
        body: 'Eingefroren werden gute bis sehr gute Blastozysten am Tag 5. Bei PGT-A werden alle Embryonen während der Wartezeit vitrifiziert.',
      },
      {
        heading: 'Lagerung und Recht',
        body: 'Lagerung 10+ Jahre möglich; Dauer beeinflusst Erfolg nicht. Im Doğuş IVF Center liegen schriftliche Einwilligungen für jeden Schritt vor, inkl. Regelungen für Trennung.',
      },
    ],
    ru: [
      {
        heading: 'Как работает витрификация',
        body: 'Витрификация — ультрабыстрая заморозка эмбриона до −196°C за секунды. Эмбрионы помещают в криопротекторы и в жидкий азот, образуется стекловидное состояние без льда; клеточная архитектура сохранена.',
      },
      {
        heading: 'Криоперенос (FET)',
        body: 'Эндометрий готовят эстрогенами и прогестероном. Эмбрион размораживают за минуты и переносят стандартной процедурой. FET-циклы часто демонстрируют равные или более высокие показатели имплантации, чем свежий перенос.',
      },
      {
        heading: 'Какие эмбрионы замораживают?',
        body: 'Бластоцисты хорошего или отличного качества на 5-й день. При ПГТ-A все эмбрионы витрифицируют, пока ожидаются результаты.',
      },
      {
        heading: 'Сроки хранения и право',
        body: 'Хранение 10 и более лет в рамках местного законодательства; срок не влияет на эффективность. В Doğuş IVF Center подписываются согласия на каждом этапе, включая ситуации развода.',
      },
    ],
    ar: [
      {
        heading: 'كيف يعمل التزجيج؟',
        body: 'التزجيج هو تجميد فائق السرعة يصل بالجنين إلى −196°C في ثوان. تُعالج الأجنة بمواد حامية وتُغمر في النيتروجين السائل لتتحول إلى حالة زجاجية دون تشكل بلورات ثلج، وتُحفظ بنية الخلية.',
      },
      {
        heading: 'نقل الأجنة المجمدة (FET)',
        body: 'تُحضَّر بطانة الرحم بالإستروجين والبروجستيرون. يُذاب الجنين خلال دقائق ويُنقل بالإجراء المعتاد. وغالبًا تكون نسب الانغراس مساوية أو أعلى من النقل الطازج.',
      },
      {
        heading: 'أي أجنة تُجمَّد؟',
        body: 'الأجنة الصالحة هي الكيسات الأرومية الجيدة أو الممتازة في اليوم الخامس. عند إجراء PGT-A تُجمَّد جميع الأجنة أثناء انتظار النتائج.',
      },
      {
        heading: 'مدة التخزين والإطار القانوني',
        body: 'يمكن التخزين لـ 10 سنوات أو أكثر ضمن القوانين المحلية، ولا يؤثر زمن التخزين على النجاح. تُجمع موافقات مكتوبة في كل خطوة في Doğuş IVF Center بما فيها حالات الانفصال.',
      },
    ],
  },
  whoIsItFor: {
    tr: ['Tüp bebek tedavisinde fazla iyi kalitede embriyo elde eden çiftler', 'Donmuş embriyo transferi (FET) planlanan hastalar', 'PGT yapılan tüm hastalar (sonuç beklerken)', 'Over hiperstimülasyon riski nedeniyle tüm embriyoları dondurma stratejisi (freeze-all)'],
    en: ['IVF couples with surplus high-quality embryos', 'Patients planning a frozen embryo transfer (FET)', 'All PGT cycles (during the wait for results)', 'Freeze-all strategy when OHSS risk is present'],
    de: ['IVF-Paare mit überzähligen Embryonen', 'Geplanter Kryotransfer (FET)', 'Alle PGT-Zyklen während Wartezeit', 'Freeze-all bei OHSS-Risiko'],
    ru: ['Пары с избытком эмбрионов после ЭКО', 'Пациенты с планируемым FET', 'Все циклы с ПГТ', 'Стратегия freeze-all при риске СГЯ'],
    ar: ['أزواج IVF مع أجنة فائضة عالية الجودة', 'مرضى يخططون لـ FET', 'جميع دورات PGT أثناء انتظار النتائج', 'استراتيجية freeze-all عند خطر فرط التحفيز'],
  },
  benefits: {
    tr: ['%95+ hayatta kalma oranı', 'Tek stimülasyon ile çoklu transfer şansı', 'Daha düşük maliyet', 'Daha kontrollü endometrium ortamı', 'OHSS riskinde güvenli alternatif'],
    en: ['Above 95% survival rate', 'Multiple transfers from a single stimulation', 'Lower cost', 'More controlled endometrial milieu', 'Safe option when OHSS risk is high'],
    de: ['Über 95% Überlebensrate', 'Mehrere Transfers aus einer Stimulation', 'Geringere Kosten', 'Kontrolliertes Endometrium', 'Sichere Option bei OHSS-Risiko'],
    ru: ['Свыше 95% выживаемости', 'Несколько переносов после одной стимуляции', 'Ниже стоимость', 'Контролируемый эндометрий', 'Безопасно при риске СГЯ'],
    ar: ['نسبة بقاء فوق 95%', 'محاولات متعددة من تحفيز واحد', 'تكلفة أقل', 'بيئة بطانة رحم محكمة', 'خيار آمن عند خطر فرط التحفيز'],
  },
  faqs: {
    tr: [
      { q: 'Donmuş embriyolar tazeleri kadar başarılı mı?', a: 'Evet. Modern vitrifikasyon ile dondurulan blastokistlerin gebelik oranı taze transferle eşit ya da daha yüksektir.' },
      { q: 'Dondurma süresi başarıyı etkiler mi?', a: 'Hayır. Birkaç ay ile 10 yıl arasında saklanan embriyolar arasında gebelik oranı açısından fark gözlenmez.' },
      { q: 'FET döngüsü kaç gün sürer?', a: 'Adetinizin başlamasından transfere kadar yaklaşık 3 hafta. Östrojen tedavisi 12-14 gün, sonrasında progesteron eklenir ve transfer yapılır.' },
      { q: 'Embriyoları yurt dışına gönderebilir miyim?', a: 'Evet, özel kriyo-konteynerler ile yasal prosedürlere uygun şekilde uluslararası nakil yapılabilir.' },
    ],
    en: [
      { q: 'Are frozen embryos as successful as fresh?', a: 'Yes. With modern vitrification, frozen blastocyst transfers achieve pregnancy rates equal to or higher than fresh transfers.' },
      { q: 'Does storage duration affect success?', a: 'No. Pregnancy rates do not differ between embryos stored for months versus 10 years.' },
      { q: 'How long is an FET cycle?', a: 'About three weeks from menstruation to transfer: 12–14 days of estrogen, then progesterone before the transfer.' },
      { q: 'Can embryos be shipped abroad?', a: 'Yes. International transport is possible with cryo-shippers and the proper legal procedures.' },
    ],
    de: [
      { q: 'Sind Kryoembryonen so erfolgreich wie frische?', a: 'Ja, mit moderner Vitrifikation gleich oder höher.' },
      { q: 'Beeinflusst die Lagerdauer den Erfolg?', a: 'Nein.' },
      { q: 'Wie lange dauert ein FET-Zyklus?', a: 'Etwa 3 Wochen.' },
      { q: 'Internationaler Versand möglich?', a: 'Ja, mit Kryo-Containern und Rechtsformalitäten.' },
    ],
    ru: [
      { q: 'Замороженные эмбрионы такие же эффективные, как свежие?', a: 'Да. При современной витрификации частота беременности равна или выше.' },
      { q: 'Влияет ли срок хранения на успех?', a: 'Нет.' },
      { q: 'Сколько длится цикл FET?', a: 'Около трёх недель.' },
      { q: 'Можно ли перевезти эмбрионы за границу?', a: 'Да, с криоконтейнерами и юридическими процедурами.' },
    ],
    ar: [
      { q: 'هل الأجنة المجمدة بنفس نجاح الطازجة؟', a: 'نعم، مع التزجيج الحديث تتساوى أو تتفوق نسب الحمل.' },
      { q: 'هل تؤثر مدة التخزين؟', a: 'لا.' },
      { q: 'كم تستغرق دورة FET؟', a: 'حوالي 3 أسابيع.' },
      { q: 'هل يمكن نقل الأجنة للخارج؟', a: 'نعم بحاويات تبريد وإجراءات قانونية.' },
    ],
  },
  steps: {
    tr: ['Embriyo Seçimi', 'Vitrifikasyon', 'Sıvı Azot Saklama', 'Çözündürme', 'Embriyo Transferi'],
    en: ['Embryo Selection', 'Vitrification', 'Cryostorage', 'Thawing', 'Embryo Transfer'],
    de: ['Embryoauswahl', 'Vitrifikation', 'Kryolagerung', 'Auftauen', 'Embryotransfer'],
    ru: ['Выбор эмбриона', 'Витрификация', 'Криохранение', 'Размораживание', 'Перенос эмбриона'],
    ar: ['اختيار الجنين', 'التزجيج', 'التخزين بالنيتروجين السائل', 'الإذابة', 'نقل الجنين'],
  },
  successRate: '95% (survival)',
  duration: { tr: '21 gün (FET)', en: '21 days (FET)', de: '21 Tage (FET)', ru: '21 день (FET)', ar: '21 يوم (FET)' },
  image: '/images/lazer-ile-tomurcuklanma.jpg',
  icon: 'fa-snowflake',
  relatedIds: ['ivf', 'pgd-pgs', 'egg-freezing', 'embryo-donation'],
};

export default embryoFreezing;
