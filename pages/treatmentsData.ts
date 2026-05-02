import type { Treatment } from '../types';

export const TREATMENTS: Treatment[] =  [
    {
      id: 'ivf',
      title: { en: 'IVF Treatment', tr: 'Tüp Bebek İşlemi', de: 'IVF-Behandlung', ru: 'Лечение ЭКО', ar: 'علاج أطفال الأنابيب' },
      description: {
        en: 'IVF (In Vitro Fertilization) means artificial fertilization - combining eggs and sperm in laboratory conditions. Couples who decide on the IVF method enter a process of approximately 20 days. In the first stage, the quality and number of eggs are increased by stimulating the ovaries with medication. Following this, eggs are collected using a thin needle through a painless and short procedure under anesthesia. Sperm cells from the father are prepared and combined with eggs - one sperm per egg (fertilization). After fertilization, the highest quality embryos are selected and transferred to the uterus on day 3 or 5.',
        tr: 'Tüp Bebek İşlemi, suni döllenme (laboratuvar koşullarında yumurta ve spermin birleştirilmesi) anlamına gelmektedir. Tüp bebek yöntemine karar veren çiftler yaklaşık 20 günlük bir sürece girerler. İlk aşamada anne adayının yumurtalıkları gerekli ilaç tedavisi ile indüklenerek kaliteli yumurta sayısı arttırılmaktadır. Bunun ardından acısız ve kısa süreli bir müdahale ile yumurtalar ince bir iğne kullanılarak toplanmakta ve aynı zamanda baba adayından alınarak gerekli hazırlık aşamalarından geçirilen sperm hücreleri ile herbir yumurtaya bir sperm olmak üzere birleştirilmektedir (dölleme). Döllemeyi takiben elde edilen embriyolardan en kaliteliler seçilerek genelde 3. günde, gerekli ve uygun görülmesi halinde ise 2. ve 5. günler arasındaki diğer günlerde embriyoların yine acısız ve kısa süreli bir işlemle rahime aktarılması (transfer) gerçekleştirilmektedir.',
        de: 'IVF (In-vitro-Fertilisation) bedeutet künstliche Befruchtung - die Kombination von Eizellen und Spermien unter Laborbedingungen. Paare, die sich für die IVF-Methode entscheiden, beginnen einen etwa 20-tägigen Prozess.',
        ru: 'ЭКО (Экстракорпоральное оплодотворение) означает искусственное оплодотворение - соединение яйцеклеток и сперматозоидов в лабораторных условиях.',
        ar: 'يعني التلقيح الاصطناعي (أطفال الأنابيب) الإخصاب الاصطناعي - الجمع بين البويضات والحيوانات المنوية في ظروف مخبرية.'
      },
      steps: {
        en: ['Medication (Day 2-3)', 'Ovarian Stimulation (10-14 days)', 'Egg Retrieval (OPU)', 'Sperm Preparation', 'ICSI/IVF Fertilization', 'Embryo Culture (3-5 days)', 'Embryo Transfer', 'Pregnancy Test (12 days)'],
        tr: ['İlaç Tedavisi (2-3. Gün)', 'Yumurtalık Uyarımı (10-14 gün)', 'Yumurta Toplama (OPU)', 'Sperm Hazırlığı', 'ICSI/IVF Dölleme', 'Embriyo Kültürü (3-5 gün)', 'Embriyo Transferi', 'Gebelik Testi (12 gün)'],
        de: ['Medikation (Tag 2-3)', 'Ovarielle Stimulation (10-14 Tage)', 'Eizellentnahme (OPU)', 'Spermienvorbereitung', 'ICSI/IVF Befruchtung', 'Embryokultur (3-5 Tage)', 'Embryotransfer', 'Schwangerschaftstest (12 Tage)'],
        ru: ['Медикаменты (день 2-3)', 'Стимуляция яичников (10-14 дней)', 'Забор яйцеклеток (OPU)', 'Подготовка спермы', 'ИКСИ/ЭКО оплодотворение', 'Культивирование эмбрионов (3-5 дней)', 'Перенос эмбрионов', 'Тест на беременность (12 дней)'],
        ar: ['الأدوية (اليوم 2-3)', 'تحفيز المبايض (10-14 يوم)', 'سحب البويضات', 'تحضير الحيوانات المنوية', 'التلقيح', 'زراعة الأجنة (3-5 أيام)', 'نقل الأجنة', 'اختبار الحمل (12 يوم)']
      },
      successRate: '65%',
      duration: { en: '20 days', tr: '20 gün', de: '20 Tage', ru: '20 дней', ar: '20 يوم' },
      image: '/images/Kıbrısta tüp bebek.jpg',
      icon: 'fa-baby'
    },
    {
      id: 'icsi',
      title: { en: 'ICSI (Intracytoplasmic Sperm Injection)', tr: 'ICSI (Mikroenjeksiyon)', de: 'ICSI (Intrazytoplasmatische Spermieninjektion)', ru: 'ИКСИ (Интрацитоплазматическая инъекция сперматозоида)', ar: 'ICSI (الحقن داخل الهيولى للحيوان المنوي)' },
      description: {
        en: 'ICSI is an advanced technique where a single sperm is directly injected into an egg using a fine needle. This method is particularly effective for cases of male infertility, low sperm count, or poor sperm quality. The procedure significantly increases fertilization rates compared to conventional IVF.',
        tr: 'ICSI, tek bir spermin ince bir iğne kullanılarak doğrudan yumurtaya enjekte edildiği gelişmiş bir tekniktir. Bu yöntem özellikle erkek kısırlığı, düşük sperm sayısı veya kötü sperm kalitesi durumlarında etkilidir. Prosedür, geleneksel IVF\'ye kıyasla döllenme oranlarını önemli ölçüde artırır.',
        de: 'ICSI ist eine fortschrittliche Technik, bei der ein einzelnes Spermium mit einer feinen Nadel direkt in eine Eizelle injiziert wird. Diese Methode ist besonders wirksam bei männlicher Unfruchtbarkeit, niedriger Spermienzahl oder schlechter Spermienqualität.',
        ru: 'ИКСИ — это передовая техника, при которой один сперматозоид непосредственно вводится в яйцеклетку с помощью тонкой иглы. Этот метод особенно эффективен при мужском бесплодии, низком количестве сперматозоидов или плохом качестве спермы.',
        ar: 'ICSI هي تقنية متقدمة حيث يتم حقن حيوان منوي واحد مباشرة في البويضة باستخدام إبرة رفيعة. هذه الطريقة فعالة بشكل خاص في حالات العقم الذكوري أو انخفاض عدد الحيوانات المنوية أو جودتها الضعيفة.'
      },
      steps: {
        en: ['Sperm Collection', 'Sperm Selection', 'Egg Retrieval', 'Microinjection', 'Embryo Culture', 'Embryo Transfer'],
        tr: ['Sperm Toplama', 'Sperm Seçimi', 'Yumurta Toplama', 'Mikroenjeksiyon', 'Embriyo Kültürü', 'Embriyo Transferi'],
        de: ['Spermiengewinnung', 'Spermienauswahl', 'Eizellentnahme', 'Mikroinjektion', 'Embryokultur', 'Embryotransfer'],
        ru: ['Забор спермы', 'Отбор сперматозоидов', 'Забор яйцеклеток', 'Микроинъекция', 'Культивирование эмбрионов', 'Перенос эмбрионов'],
        ar: ['جمع الحيوانات المنوية', 'اختيار الحيوانات المنوية', 'سحب البويضات', 'الحقن المجهري', 'زراعة الأجنة', 'نقل الأجنة']
      },
      successRate: '70%',
      duration: { en: '20 days', tr: '20 gün', de: '20 Tage', ru: '20 дней', ar: '20 يوم' },
      image: '/images/sperm-ayiklama.jpg',
      icon: 'fa-microscope'
    },
    {
      id: 'egg-donation',
      title: { en: 'Egg Donation', tr: 'Yumurta Donasyonu', de: 'Eizellspende', ru: 'Донорство яйцеклеток', ar: 'التبرع بالبويضات' },
      description: {
        en: 'Egg donation is used when the female partner cannot produce healthy eggs. Young, healthy donor eggs are used for fertilization with the partner\'s sperm. This method provides an opportunity for women who cannot use their own eggs to experience pregnancy and childbirth.',
        tr: 'Yumurta donasyonu, kadın partnerin sağlıklı yumurta üretemediği durumlarda kullanılır. Genç, sağlıklı donör yumurtaları partnerin spermi ile döllenme için kullanılır. Bu yöntem, kendi yumurtalarını kullanamayan kadınlara hamilelik ve doğum deneyimi yaşama fırsatı sunar.',
        de: 'Die Eizellspende wird verwendet, wenn der weibliche Partner keine gesunden Eizellen produzieren kann. Junge, gesunde Spendereizellen werden zur Befruchtung mit dem Sperma des Partners verwendet.',
        ru: 'Донорство яйцеклеток используется, когда женский партнер не может производить здоровые яйцеклетки. Молодые, здоровые донорские яйцеклетки используются для оплодотворения спермой партнера.',
        ar: 'يستخدم التبرع بالبويضات عندما لا تستطيع الشريكة إنتاج بويضات صحية. يتم استخدام بويضات متبرع شابة وصحية للتخصيب بحيوانات الشريك المنوية.'
      },
      steps: {
        en: ['Donor Selection', 'Cycle Synchronization', 'Egg Collection from Donor', 'Fertilization', 'Embryo Culture', 'Embryo Transfer'],
        tr: ['Donör Seçimi', 'Döngü Senkronizasyonu', 'Donörden Yumurta Toplama', 'Döllenme', 'Embriyo Kültürü', 'Embriyo Transferi'],
        de: ['Spenderauswahl', 'Zyklussynchronisation', 'Eizellentnahme vom Spender', 'Befruchtung', 'Embryokultur', 'Embryotransfer'],
        ru: ['Выбор донора', 'Синхронизация циклов', 'Забор яйцеклеток у донора', 'Оплодотворение', 'Культивирование эмбрионов', 'Перенос эмбрионов'],
        ar: ['اختيار المتبرع', 'تزامن الدورات', 'جمع البويضات من المتبرع', 'التخصيب', 'زراعة الأجنة', 'نقل الأجنة']
      },
      successRate: '75%',
      duration: { en: '25 days', tr: '25 gün', de: '25 Tage', ru: '25 дней', ar: '25 يوم' },
      image: '/images/yumurta-donasyonu.jpg',
      icon: 'fa-heart'
    },
    {
      id: 'sperm-donation',
      title: { en: 'Sperm Donation', tr: 'Sperm Donasyonu', de: 'Samenspende', ru: 'Донорство спермы', ar: 'التبرع بالحيوانات المنوية' },
      description: {
        en: 'Sperm donation is a treatment method used when the male partner has no sperm or insufficient sperm quality. Healthy donor sperm is used for fertilization. All donors undergo comprehensive health screenings and genetic tests.',
        tr: 'Sperm donasyonu, erkek partnerde sperm bulunmadığında veya sperm kalitesi yetersiz olduğunda kullanılan bir tedavi yöntemidir. Sağlıklı donör spermi döllenme için kullanılır. Tüm donörler kapsamlı sağlık taramaları ve genetik testlerden geçer.',
        de: 'Die Samenspende ist eine Behandlungsmethode, die angewendet wird, wenn der männliche Partner kein Sperma oder eine unzureichende Spermienqualität hat. Gesundes Spendersperma wird zur Befruchtung verwendet.',
        ru: 'Донорство спермы — это метод лечения, используемый, когда у мужского партнера нет спермы или недостаточное качество спермы. Для оплодотворения используется здоровая донорская сперма.',
        ar: 'التبرع بالحيوانات المنوية هو طريقة علاج تستخدم عندما لا يكون لدى الشريك الذكر حيوانات منوية أو جودة حيوانات منوية غير كافية. يتم استخدام حيوانات منوية متبرع صحية للتخصيب.'
      },
      steps: {
        en: ['Donor Selection', 'Sperm Preparation', 'IVF/ICSI Procedure', 'Embryo Culture', 'Embryo Transfer'],
        tr: ['Donör Seçimi', 'Sperm Hazırlığı', 'IVF/ICSI Prosedürü', 'Embriyo Kültürü', 'Embriyo Transferi'],
        de: ['Spenderauswahl', 'Spermienvorbereitung', 'IVF/ICSI-Verfahren', 'Embryokultur', 'Embryotransfer'],
        ru: ['Выбор донора', 'Подготовка спермы', 'Процедура ЭКО/ИКСИ', 'Культивирование эмбрионов', 'Перенос эмбрионов'],
        ar: ['اختيار المتبرع', 'تحضير الحيوانات المنوية', 'إجراء أطفال الأنابيب/الحقن المجهري', 'زراعة الأجنة', 'نقل الأجنة']
      },
      successRate: '70%',
      duration: { en: '20 days', tr: '20 gün', de: '20 Tage', ru: '20 дней', ar: '20 يوم' },
      image: '/images/sperm-donasyonu.jpg',
      icon: 'fa-dna'
    },
    {
      id: 'embryo-donation',
      title: { en: 'Embryo Donation', tr: 'Embriyo Donasyonu', de: 'Embryospende', ru: 'Донорство эмбрионов', ar: 'التبرع بالأجنة' },
      description: {
        en: 'Embryo donation involves using donated embryos from couples who have successfully completed their IVF treatment. This option is available for couples where both partners have fertility issues.',
        tr: 'Embriyo donasyonu, tüp bebek tedavisini başarıyla tamamlamış çiftlerden bağışlanan embriyoların kullanılmasını içerir. Bu seçenek, her iki partnerin de doğurganlık sorunları olduğu çiftler için mevcuttur.',
        de: 'Die Embryospende umfasst die Verwendung gespendeter Embryonen von Paaren, die ihre IVF-Behandlung erfolgreich abgeschlossen haben.',
        ru: 'Донорство эмбрионов включает использование пожертвованных эмбрионов от пар, которые успешно завершили лечение ЭКО.',
        ar: 'التبرع بالأجنة يتضمن استخدام أجنة متبرع بها من أزواج أكملوا علاج أطفال الأنابيب بنجاح.'
      },
      steps: {
        en: ['Embryo Selection', 'Recipient Preparation', 'Embryo Thawing', 'Embryo Transfer', 'Pregnancy Test'],
        tr: ['Embriyo Seçimi', 'Alıcı Hazırlığı', 'Embriyo Çözme', 'Embriyo Transferi', 'Gebelik Testi'],
        de: ['Embryoauswahl', 'Empfängervorbereitung', 'Embryoauftauen', 'Embryotransfer', 'Schwangerschaftstest'],
        ru: ['Выбор эмбрионов', 'Подготовка реципиента', 'Размораживание эмбрионов', 'Перенос эмбрионов', 'Тест на беременность'],
        ar: ['اختيار الأجنة', 'تحضير المستقبل', 'إذابة الأجنة', 'نقل الأجنة', 'اختبار الحمل']
      },
      successRate: '65%',
      duration: { en: '15 days', tr: '15 gün', de: '15 Tage', ru: '15 дней', ar: '15 يوم' },
      image: '/images/embriyo-donasyonu.jpg',
      icon: 'fa-seedling'
    },
    {
      id: 'pgd-pgs',
      title: { en: 'PGD/PGS (Genetic Testing)', tr: 'PGD/PGS (Genetik Tarama)', de: 'PGD/PGS (Genetische Tests)', ru: 'ПГД/ПГС (Генетическое тестирование)', ar: 'PGD/PGS (الفحص الجيني)' },
      description: {
        en: 'Preimplantation Genetic Diagnosis (PGD) and Preimplantation Genetic Screening (PGS) are advanced techniques used to screen embryos for genetic conditions before implantation. This helps ensure healthy pregnancies and reduces the risk of genetic disorders.',
        tr: 'Preimplantasyon Genetik Tanı (PGD) ve Preimplantasyon Genetik Tarama (PGS), implantasyon öncesi embriyoların genetik durumlar açısından taranması için kullanılan gelişmiş tekniklerdir. Bu, sağlıklı gebelikleri sağlamaya ve genetik bozukluk riskini azaltmaya yardımcı olur.',
        de: 'Präimplantationsdiagnostik (PGD) und Präimplantationsgenetisches Screening (PGS) sind fortschrittliche Techniken zur Untersuchung von Embryonen auf genetische Erkrankungen vor der Implantation.',
        ru: 'Преимплантационная генетическая диагностика (ПГД) и преимплантационный генетический скрининг (ПГС) — это передовые техники для скрининга эмбрионов на генетические заболевания перед имплантацией.',
        ar: 'التشخيص الوراثي قبل الزرع (PGD) والفحص الوراثي قبل الزرع (PGS) هي تقنيات متقدمة لفحص الأجنة للكشف عن الحالات الوراثية قبل الزرع.'
      },
      steps: {
        en: ['Embryo Biopsy', 'Genetic Analysis', 'Embryo Selection', 'Embryo Transfer'],
        tr: ['Embriyo Biyopsisi', 'Genetik Analiz', 'Embriyo Seçimi', 'Embriyo Transferi'],
        de: ['Embryobiopsie', 'Genetische Analyse', 'Embryoauswahl', 'Embryotransfer'],
        ru: ['Биопсия эмбриона', 'Генетический анализ', 'Выбор эмбрионов', 'Перенос эмбрионов'],
        ar: ['خزعة الجنين', 'التحليل الوراثي', 'اختيار الأجنة', 'نقل الأجنة']
      },
      successRate: '75%',
      duration: { en: '25 days', tr: '25 gün', de: '25 Tage', ru: '25 дней', ar: '25 يوم' },
      image: '/images/lazer-ile-tomurcuklanma.jpg',
      icon: 'fa-dna'
    },
    {
      id: 'iui',
      title: { en: 'IUI (Intrauterine Insemination)', tr: 'IUI (Rahim İçi Aşılama)', de: 'IUI (Intrauterine Insemination)', ru: 'ВМИ (Внутриматочная инсеминация)', ar: 'IUI (التلقيح داخل الرحم)' },
      description: {
        en: 'IUI is a less invasive fertility treatment where washed and concentrated sperm is placed directly into the uterus during ovulation. This method is often the first step in fertility treatment for couples with unexplained infertility or mild male factor issues.',
        tr: 'IUI, yıkanmış ve konsantre edilmiş spermin yumurtlama sırasında doğrudan rahime yerleştirildiği daha az invaziv bir doğurganlık tedavisidir. Bu yöntem, açıklanamayan kısırlık veya hafif erkek faktörü sorunları olan çiftler için genellikle doğurganlık tedavisinin ilk adımıdır.',
        de: 'IUI ist eine weniger invasive Fruchtbarkeitsbehandlung, bei der gewaschene und konzentrierte Spermien während des Eisprungs direkt in die Gebärmutter platziert werden.',
        ru: 'ВМИ — это менее инвазивное лечение бесплодия, при котором промытые и концентрированные сперматозоиды помещаются непосредственно в матку во время овуляции.',
        ar: 'IUI هو علاج خصوبة أقل توغلاً حيث يتم وضع الحيوانات المنوية المغسولة والمركزة مباشرة في الرحم أثناء الإباضة.'
      },
      steps: {
        en: ['Ovulation Monitoring', 'Sperm Preparation', 'Insemination', 'Pregnancy Test'],
        tr: ['Yumurtlama İzleme', 'Sperm Hazırlığı', 'Aşılama', 'Gebelik Testi'],
        de: ['Ovulationsüberwachung', 'Spermienvorbereitung', 'Insemination', 'Schwangerschaftstest'],
        ru: ['Мониторинг овуляции', 'Подготовка спермы', 'Инсеминация', 'Тест на беременность'],
        ar: ['مراقبة الإباضة', 'تحضير الحيوانات المنوية', 'التلقيح', 'اختبار الحمل']
      },
      successRate: '20%',
      duration: { en: '14 days', tr: '14 gün', de: '14 Tage', ru: '14 дней', ar: '14 يوم' },
      image: '/images/hands.jpg',
      icon: 'fa-syringe'
    },
    {
      id: 'egg-freezing',
      title: { en: 'Egg Freezing', tr: 'Yumurta Dondurma', de: 'Eizellkryokonservierung', ru: 'Заморозка яйцеклеток', ar: 'تجميد البويضات' },
      description: {
        en: 'Egg freezing (oocyte cryopreservation) allows women to preserve their fertility for the future. Eggs are collected, frozen using vitrification technology, and stored for later use. This is particularly beneficial for women who want to delay childbearing or are facing medical treatments that may affect fertility.',
        tr: 'Yumurta dondurma (oosit kriyoprezervasyonu), kadınların gelecekteki doğurganlıklarını korumalarına olanak tanır. Yumurtalar toplanır, vitrifikasyon teknolojisi kullanılarak dondurulur ve daha sonra kullanılmak üzere saklanır. Bu, özellikle çocuk sahibi olmayı ertelemek isteyen veya doğurganlığı etkileyebilecek tıbbi tedavilerle karşılaşan kadınlar için faydalıdır.',
        de: 'Die Eizellkryokonservierung ermöglicht es Frauen, ihre Fruchtbarkeit für die Zukunft zu erhalten. Eizellen werden gesammelt, mit Vitrifikationstechnologie eingefroren und für die spätere Verwendung gelagert.',
        ru: 'Заморозка яйцеклеток (криоконсервация ооцитов) позволяет женщинам сохранить свою фертильность на будущее. Яйцеклетки собираются, замораживаются с использованием технологии витрификации и хранятся для последующего использования.',
        ar: 'تجميد البويضات يسمح للنساء بالحفاظ على خصوبتهن للمستقبل. يتم جمع البويضات وتجميدها باستخدام تقنية التزجيج وتخزينها للاستخدام لاحقًا.'
      },
      steps: {
        en: ['Ovarian Stimulation', 'Egg Retrieval', 'Vitrification', 'Storage'],
        tr: ['Yumurtalık Uyarımı', 'Yumurta Toplama', 'Vitrifikasyon', 'Saklama'],
        de: ['Ovarielle Stimulation', 'Eizellentnahme', 'Vitrifikation', 'Lagerung'],
        ru: ['Стимуляция яичников', 'Забор яйцеклеток', 'Витрификация', 'Хранение'],
        ar: ['تحفيز المبايض', 'سحب البويضات', 'التزجيج', 'التخزين']
      },
      successRate: 'N/A',
      duration: { en: '15 days', tr: '15 gün', de: '15 Tage', ru: '15 дней', ar: '15 يوم' },
      image: '/images/egg.jpeg',
      icon: 'fa-snowflake'
    },
    {
      id: 'fetal-reduction',
      title: { en: 'Fetal Reduction', tr: 'Fetal Redüksiyon', de: 'Fetale Reduktion', ru: 'Редукция плода', ar: 'تقليل الأجنة' },
      description: {
        en: 'Fetal reduction is a medical procedure performed when multiple pregnancies occur, typically reducing the number of fetuses to improve the chances of a healthy pregnancy outcome. This procedure is performed under ultrasound guidance and is considered when carrying multiple fetuses poses health risks.',
        tr: 'Fetal redüksiyon, genellikle çoklu gebeliklerde sağlıklı gebelik sonucu şansını artırmak için fetüs sayısını azaltan tıbbi bir prosedürdür. Bu prosedür ultrason rehberliğinde gerçekleştirilir ve birden fazla fetüs taşımanın sağlık riskleri oluşturduğu durumlarda düşünülür.',
        de: 'Die fetale Reduktion ist ein medizinisches Verfahren, das durchgeführt wird, wenn Mehrlingsschwangerschaften auftreten, typischerweise um die Anzahl der Föten zu reduzieren, um die Chancen auf ein gesundes Schwangerschaftsergebnis zu verbessern.',
        ru: 'Редукция плода — это медицинская процедура, выполняемая при многоплодной беременности, обычно для уменьшения количества плодов с целью улучшения шансов на здоровый исход беременности.',
        ar: 'تقليل الأجنة هو إجراء طبي يتم إجراؤه عندما تحدث حالات حمل متعددة، عادة لتقليل عدد الأجنة لتحسين فرص نتيجة حمل صحية.'
      },
      steps: {
        en: ['Ultrasound Assessment', 'Procedure Planning', 'Fetal Reduction', 'Follow-up Monitoring'],
        tr: ['Ultrason Değerlendirmesi', 'Prosedür Planlaması', 'Fetal Redüksiyon', 'Takip İzleme'],
        de: ['Ultraschallbewertung', 'Verfahrensplanung', 'Fetale Reduktion', 'Nachsorgeüberwachung'],
        ru: ['Ультразвуковая оценка', 'Планирование процедуры', 'Редукция плода', 'Последующее наблюдение'],
        ar: ['تقييم الموجات فوق الصوتية', 'تخطيط الإجراء', 'تقليل الأجنة', 'المراقبة المتابعة']
      },
      successRate: '95%',
      duration: { en: '1 day', tr: '1 gün', de: '1 Tag', ru: '1 день', ar: '1 يوم' },
      image: '/images/fetal-reduksiyon.jpg',
      icon: 'fa-user-doctor'
    },
    {
      id: 'surrogacy',
      title: { en: 'Surrogacy', tr: 'Taşıyıcı Annelik', de: 'Leihmutterschaft', ru: 'Суррогатное материнство', ar: 'الأمومة البديلة' },
      description: {
        en: 'Surrogacy is an arrangement where a woman (surrogate) carries and delivers a baby for another person or couple. The embryo is created using the intended parents\' or donors\' gametes and transferred to the surrogate\'s uterus. This option is available for couples who cannot carry a pregnancy to term.',
        tr: 'Taşıyıcı annelik, bir kadının (taşıyıcı anne) başka bir kişi veya çift için bebek taşıdığı ve doğurduğu bir düzenlemedir. Embriyo, niyet edilen ebeveynlerin veya donörlerin gametleri kullanılarak oluşturulur ve taşıyıcı annenin rahmine transfer edilir. Bu seçenek, gebeliği sürdüremeyen çiftler için mevcuttur.',
        de: 'Leihmutterschaft ist eine Vereinbarung, bei der eine Frau (Leihmutter) ein Baby für eine andere Person oder ein Paar trägt und zur Welt bringt.',
        ru: 'Суррогатное материнство — это договоренность, при которой женщина (суррогатная мать) вынашивает и рожает ребенка для другого человека или пары.',
        ar: 'الأمومة البديلة هي ترتيب تحمل فيه امرأة (أم بديلة) وتلد طفلاً لشخص أو زوجين آخرين.'
      },
      steps: {
        en: ['Surrogate Selection', 'Legal Process', 'Embryo Creation', 'Embryo Transfer to Surrogate', 'Pregnancy Monitoring', 'Delivery'],
        tr: ['Taşıyıcı Anne Seçimi', 'Yasal Süreç', 'Embriyo Oluşturma', 'Taşıyıcıya Embriyo Transferi', 'Gebelik İzleme', 'Doğum'],
        de: ['Leihmutterauswahl', 'Rechtsprozess', 'Embryoerstellung', 'Embryotransfer zur Leihmutter', 'Schwangerschaftsüberwachung', 'Entbindung'],
        ru: ['Выбор суррогатной матери', 'Юридический процесс', 'Создание эмбриона', 'Перенос эмбриона суррогатной матери', 'Мониторинг беременности', 'Роды'],
        ar: ['اختيار الأم البديلة', 'العملية القانونية', 'إنشاء الجنين', 'نقل الجنين للأم البديلة', 'مراقبة الحمل', 'الولادة']
      },
      successRate: '60%',
      duration: { en: '9 months', tr: '9 ay', de: '9 Monate', ru: '9 месяцев', ar: '9 أشهر' },
      image: '/images/Surrogacy.jpg',
      icon: 'fa-hands-holding'
    },
    {
      id: 'infertility-treatment',
      title: { en: 'Infertility Treatment', tr: 'Kısırlık Tedavisi', de: 'Unfruchtbarkeitsbehandlung', ru: 'Лечение бесплодия', ar: 'علاج العقم' },
      description: {
        en: 'Comprehensive infertility treatment includes diagnosis and treatment of various causes of infertility in both men and women. Our approach includes thorough evaluation, personalized treatment plans, and advanced reproductive technologies to help couples achieve their dream of parenthood.',
        tr: 'Kapsamlı kısırlık tedavisi, hem erkeklerde hem de kadınlarda çeşitli kısırlık nedenlerinin teşhisini ve tedavisini içerir. Yaklaşımımız, kapsamlı değerlendirme, kişiselleştirilmiş tedavi planları ve çiftlerin ebeveynlik hayallerini gerçekleştirmelerine yardımcı olmak için gelişmiş üreme teknolojilerini içerir.',
        de: 'Umfassende Unfruchtbarkeitsbehandlung umfasst die Diagnose und Behandlung verschiedener Ursachen von Unfruchtbarkeit bei Männern und Frauen.',
        ru: 'Комплексное лечение бесплодия включает диагностику и лечение различных причин бесплодия как у мужчин, так и у женщин.',
        ar: 'يشمل علاج العقم الشامل تشخيص وعلاج أسباب العقم المختلفة لدى كل من الرجال والنساء.'
      },
      steps: {
        en: ['Initial Consultation', 'Diagnostic Tests', 'Treatment Planning', 'Treatment Implementation', 'Monitoring', 'Follow-up'],
        tr: ['İlk Konsültasyon', 'Tanı Testleri', 'Tedavi Planlaması', 'Tedavi Uygulaması', 'İzleme', 'Takip'],
        de: ['Erstberatung', 'Diagnosetests', 'Behandlungsplanung', 'Behandlungsdurchführung', 'Überwachung', 'Nachsorge'],
        ru: ['Первичная консультация', 'Диагностические тесты', 'Планирование лечения', 'Реализация лечения', 'Мониторинг', 'Последующее наблюдение'],
        ar: ['الاستشارة الأولية', 'الاختبارات التشخيصية', 'تخطيط العلاج', 'تنفيذ العلاج', 'المراقبة', 'المتابعة']
      },
      successRate: 'Varies',
      duration: { en: 'Varies', tr: 'Değişken', de: 'Variiert', ru: 'Варьируется', ar: 'متغير' },
      image: '/images/ivf-centre-babies.jpg',
      icon: 'fa-stethoscope'
    },
    {
      id: 'mini-ivf',
      title: { en: 'Mini-IVF', tr: 'Mini-IVF', de: 'Mini-IVF', ru: 'Мини-ЭКО', ar: 'Mini-IVF' },
      description: {
        en: 'Mini-IVF is a gentler, more cost-effective approach to IVF treatment. It uses lower doses of fertility medications and is particularly suitable for patients who want a less intensive treatment protocol or have concerns about medication side effects.',
        tr: 'Mini-IVF, IVF tedavisine daha yumuşak, daha maliyet etkin bir yaklaşımdır. Daha düşük dozlarda doğurganlık ilaçları kullanır ve özellikle daha az yoğun bir tedavi protokolü isteyen veya ilaç yan etkileri konusunda endişeleri olan hastalar için uygundur.',
        de: 'Mini-IVF ist ein schonenderer, kostengünstigerer Ansatz zur IVF-Behandlung. Es verwendet niedrigere Dosen von Fruchtbarkeitsmedikamenten.',
        ru: 'Мини-ЭКО — это более щадящий и экономичный подход к лечению ЭКО. Использует более низкие дозы препаратов для лечения бесплодия.',
        ar: 'Mini-IVF هو نهج أكثر لطفًا وفعالية من حيث التكلفة لعلاج أطفال الأنابيب. يستخدم جرعات أقل من أدوية الخصوبة.'
      },
      steps: {
        en: ['Low-Dose Medication', 'Ovarian Stimulation', 'Egg Retrieval', 'Fertilization', 'Embryo Transfer'],
        tr: ['Düşük Doz İlaç', 'Yumurtalık Uyarımı', 'Yumurta Toplama', 'Döllenme', 'Embriyo Transferi'],
        de: ['Niedrigdosierte Medikation', 'Ovarielle Stimulation', 'Eizellentnahme', 'Befruchtung', 'Embryotransfer'],
        ru: ['Низкодозные медикаменты', 'Стимуляция яичников', 'Забор яйцеклеток', 'Оплодотворение', 'Перенос эмбрионов'],
        ar: ['أدوية بجرعة منخفضة', 'تحفيز المبايض', 'سحب البويضات', 'التخصيب', 'نقل الأجنة']
      },
      successRate: '55%',
      duration: { en: '18 days', tr: '18 gün', de: '18 Tage', ru: '18 дней', ar: '18 يوم' },
      image: '/images/mini-tup-bebek.jpg',
      icon: 'fa-flask'
    },
    {
      id: 'tesa-tese',
      title: { en: 'TESA/TESE (Sperm Retrieval)', tr: 'TESA/TESE (Sperm Çıkarma)', de: 'TESA/TESE (Spermiengewinnung)', ru: 'ТЕСА/ТЕСЕ (Извлечение спермы)', ar: 'TESA/TESE (استخراج الحيوانات المنوية)' },
      description: {
        en: 'TESA (Testicular Sperm Aspiration) and TESE (Testicular Sperm Extraction) are surgical procedures to retrieve sperm directly from the testicles. These techniques are used for men with azoospermia (no sperm in ejaculate) or severe male factor infertility. Retrieved sperm can then be used for ICSI.',
        tr: 'TESA (Testiküler Sperm Aspirasyonu) ve TESE (Testiküler Sperm Ekstraksiyonu), spermin doğrudan testislerden alındığı cerrahi prosedürlerdir. Bu teknikler, azospermisi (ejakülatta sperm yokluğu) veya şiddetli erkek faktörü kısırlığı olan erkekler için kullanılır. Alınan sperm daha sonra ICSI için kullanılabilir.',
        de: 'TESA (Testikuläre Spermienaspiration) und TESE (Testikuläre Spermienextraktion) sind chirurgische Verfahren zur Gewinnung von Spermien direkt aus den Hoden.',
        ru: 'ТЕСА (Аспирация спермы из яичка) и ТЕСЕ (Извлечение спермы из яичка) — это хирургические процедуры для получения спермы непосредственно из яичек.',
        ar: 'TESA (شفط الحيوانات المنوية من الخصية) و TESE (استخراج الحيوانات المنوية من الخصية) هي إجراءات جراحية لاسترجاع الحيوانات المنوية مباشرة من الخصيتين.'
      },
      steps: {
        en: ['Pre-operative Assessment', 'Surgical Procedure', 'Sperm Extraction', 'Sperm Processing', 'ICSI Procedure'],
        tr: ['Ameliyat Öncesi Değerlendirme', 'Cerrahi Prosedür', 'Sperm Çıkarma', 'Sperm İşleme', 'ICSI Prosedürü'],
        de: ['Präoperative Beurteilung', 'Chirurgischer Eingriff', 'Spermienextraktion', 'Spermienverarbeitung', 'ICSI-Verfahren'],
        ru: ['Предоперационная оценка', 'Хирургическая процедура', 'Извлечение спермы', 'Обработка спермы', 'Процедура ИКСИ'],
        ar: ['التقييم قبل الجراحة', 'الإجراء الجراحي', 'استخراج الحيوانات المنوية', 'معالجة الحيوانات المنوية', 'إجراء ICSI']
      },
      successRate: '70%',
      duration: { en: '1 day', tr: '1 gün', de: '1 Tag', ru: '1 день', ar: '1 يوم' },
      image: '/images/sperm-donasyonu.jpg',
      icon: 'fa-user-doctor'
    },
    {
      id: 'prp',
      title: { en: 'PRP Treatment', tr: 'PRP Tedavisi', de: 'PRP-Behandlung', ru: 'Лечение PRP', ar: 'علاج PRP' },
      description: {
        en: 'PRP (Platelet Rich Plasma) treatment involves using the patient\'s own blood to create a concentrated solution rich in growth factors. This is injected into the uterine lining to improve endometrial receptivity and increase the chances of successful embryo implantation.',
        tr: 'PRP (Platelet Rich Plasma) tedavisi, hastanın kendi kanını kullanarak büyüme faktörleri açısından zengin konsantre bir çözelti oluşturmayı içerir. Bu, endometriyal reseptiviteyi iyileştirmek ve başarılı embriyo implantasyonu şansını artırmak için rahim astarına enjekte edilir.',
        de: 'Die PRP (Platelet Rich Plasma) Behandlung umfasst die Verwendung des eigenen Bluts des Patienten zur Erstellung einer konzentrierten Lösung, die reich an Wachstumsfaktoren ist.',
        ru: 'Лечение PRP (обогащенная тромбоцитами плазма) включает использование собственной крови пациента для создания концентрированного раствора, богатого факторами роста.',
        ar: 'علاج PRP (البلازما الغنية بالصفائح الدموية) يتضمن استخدام دم المريض نفسه لإنشاء محلول مركز غني بعوامل النمو.'
      },
      steps: {
        en: ['Blood Collection', 'PRP Preparation', 'Uterine Injection', 'Follow-up'],
        tr: ['Kan Toplama', 'PRP Hazırlığı', 'Rahim Enjeksiyonu', 'Takip'],
        de: ['Blutentnahme', 'PRP-Vorbereitung', 'Gebärmutterinjektion', 'Nachsorge'],
        ru: ['Забор крови', 'Подготовка PRP', 'Инъекция в матку', 'Последующее наблюдение'],
        ar: ['جمع الدم', 'تحضير PRP', 'حقن الرحم', 'المتابعة']
      },
      successRate: 'Improves',
      duration: { en: '1 day', tr: '1 gün', de: '1 Tag', ru: '1 день', ar: '1 يوم' },
      image: '/images/prpnedir.jpg',
      icon: 'fa-droplet'
    }
  ];
