const btn=document.querySelector('.menu');
const nav=document.querySelector('.nav');
if(btn){
  btn.addEventListener('click',()=>{
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
  document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}

const translations={
tr:{
  title:'NFC PORT — Fiziksel Dünyayı Dijitale Bağlayın',
  navBusiness:'NFC İşletme',navVehicle:'NFC Araç',navLost:'NFC Kayıp',navBag:'NFC Bavul & Çanta',navValet:'NFC Vale Kartı',navHelmet:'NFC Kask',navRealEstate:'NFC Emlak',navForSale:'NFC Satılık Araç',navContact:'İletişim',
  eyebrow:'FİZİKSEL DÜNYAYI DİJİTALE BAĞLAYIN',heroTitle:'Tek dokunuşla<br>bilgiye, insana ve<br>hizmete <span>erişin.</span>',heroText:'NFC teknolojisiyle ürünlerinizi, hizmetlerinizi ve iletişimlerinizi dijital dünyaya bağlayın. Akıllı, hızlı ve sürdürülebilir çözümler.',discover:'Çözümlerimizi Keşfedin ↓',heroAlt:'NFC PORT çözümleri',
  solutionsTitle:'NFC Çözümleri',solutionsIntro:'İhtiyacınıza uygun NFC çözümlerimizi keşfedin.',
  businessTitle:'NFC İşletme',businessAlt:'NFC İşletme dijital menü',businessText:'İşletmenizi dijitale taşıyın, müşterilerinize modern ve pratik bir deneyim sunun.',businessDigitalMenu:'<strong>Dijital Menü:</strong> QR okutmadan, telefonunuzu NFC etiketine dokundurarak menünüzü anında açın.',businessQrMenu:'<strong>QR Menü:</strong> İşletmenize özel QR menü çözümleri.',businessHotel:'<strong>Otel Çözümleri:</strong> Dijital menü, oda servisi, housekeeping ve bellboy çağırma.',businessBeach:'<strong>Beach Club Çözümleri:</strong> Dijital menü, sipariş, garson çağırma ve hesap isteme.',businessGoogle:'Google Puanlama ve Yorum',businessValet:'Vale Kart ile Araç Hazırlanması',businessWaiter:'Garson Çağırma ve Hesap İsteme',businessWifi:'Hızlı Wi‑Fi Erişim',
  vehicleTitle:'NFC Araç',vehicleText:'Park halinde aracınıza ulaşılması gereken durumlarda, NFC etiketi sayesinde araç sahibine hızlı ve kolay şekilde ulaşılmasını sağlar.',vehicleItem:'Araç sahibine hızlı ve kolay ulaşım',
  petText:'Evcil hayvanınız kaybolduğunda NFC etiketi sayesinde sahibine hızlıca ulaşılmasını sağlar.',petItem:'Sahibine hızlı ulaşım',
  lostTitle:'NFC Kayıp (Çocuk & Yaşlı)',lostAlt:'NFC Kayıp çocuk ve yaşlı',lostText:'Çocuk veya yaşlı yakınınızın kaybolması durumunda, NFC etiketi üzerindeki iletişim bilgileri sayesinde size hızlıca ulaşılmasına yardımcı olur.',lostItem:'Yakınına hızlı ulaşım',
  bagTitle:'NFC Bavul & Çanta',bagAlt:'NFC Bavul ve Çanta',bagText:'Bavul, çanta ve değerli eşyalarınız için sadece sahibine hızlı ulaşım sağlar.',bagItem:'Sahibine hızlı ulaşım',
  valetTitle:'NFC Vale Kartı',valetText:'Vale hizmetlerinde araç bilgilerine ve teslim sürecine hızlı erişim sağlar.',valetItem:'Hızlı teslim süreci',
  helmetTitle:'NFC Kask',helmetAlt:'NFC Kask acil durum bilgileri',helmetText:'Motorlu kazalarda, kullanıcının belirlediği acil durumda yetkilendirilmiş kişiye ulaşılmasını kolaylaştırır.',helmetItem:'Acil durum için yetkilendirilmiş kişiye hızlı erişim',
  googleAlt:'NFC Google puan ve yorum tabelası',googleText:'Müşterilerinizin Google’da işletmenizi kolayca değerlendirmesine yardımcı olur.',googleItem1:'Google puanlama sayfasına hızlı erişim',googleItem2:'Yorum bırakma sürecini kolaylaştırır',
  realEstateTitle:'NFC Emlak',realEstateAlt:'NFC Emlak sahibinden.com mağaza bağlantısı',realEstateText:'Emlak ofisinizin camındaki NFC etiketi sayesinde ziyaretçileriniz mağaza ve ilanlarınıza tek dokunuşla ulaşabilir.',realEstateItem1:'Sahibinden.com mağaza sayfasına hızlı erişim',realEstateItem2:'Güncel portföye kolay ulaşım',
  forSaleTitle:'NFC Satılık Araç',forSaleAlt:'NFC Satılık Araç sahibinden.com ilan bağlantısı',forSaleText:'Aracınızın camındaki NFC etiketi sayesinde ilgilenen kişiler doğrudan satılık araç ilanınıza ulaşabilir.',forSaleItem1:'Sahibinden.com ilanına hızlı erişim',forSaleItem2:'Araç bilgileri, fotoğraflar ve ilan detaylarına kolay ulaşım',
  benefit1Title:'Temassız ve Hızlı',benefit1Text:'Tek dokunuşla anında bilgiye erişin.',benefit2Title:'Güncellenebilir İçerik',benefit2Text:'Bilgileriniz her zaman güncel kalsın.',benefit3Title:'Güvenli ve Güvenilir',benefit3Text:'Kontrollü ve pratik dijital erişim.',benefit4Title:'Sürdürülebilir Gelecek',benefit4Text:'Kağıt tüketimini azaltmaya yardımcı olun.',
  contactTitle:'Bizimle İletişime Geçin',contactText:'NFC çözümleri hakkında bilgi almak ve iş birliği için bize ulaşın.',footerRights:'© 2026 NFC PORT. Tüm hakları saklıdır.'
},
en:{
  title:'NFC PORT — Connect the Physical World to Digital',
  navBusiness:'NFC Business',navVehicle:'NFC Vehicle',navLost:'NFC Safety',navBag:'NFC Luggage & Bag',navValet:'NFC Valet Card',navHelmet:'NFC Helmet',navRealEstate:'NFC Real Estate',navForSale:'NFC Car for Sale',navContact:'Contact',
  eyebrow:'CONNECT THE PHYSICAL WORLD TO DIGITAL',heroTitle:'One tap to<br>information, people and<br>services. <span>Instantly.</span>',heroText:'Connect your products, services and communications to the digital world with NFC technology. Smart, fast and sustainable solutions.',discover:'Discover Our Solutions ↓',heroAlt:'NFC PORT solutions',
  solutionsTitle:'NFC Solutions',solutionsIntro:'Discover the NFC solution that fits your needs.',
  businessTitle:'NFC Business',businessAlt:'NFC Business digital menu',businessText:'Bring your business into the digital world and offer your customers a modern, practical experience.',businessDigitalMenu:'<strong>Digital Menu:</strong> Open your menu instantly by tapping the NFC tag—no QR scanning required.',businessQrMenu:'<strong>QR Menu:</strong> Custom QR menu solutions for your business.',businessHotel:'<strong>Hotel Solutions:</strong> Digital menu, room service, housekeeping and bellboy call.',businessBeach:'<strong>Beach Club Solutions:</strong> Digital menu, ordering, waiter call and bill request.',businessGoogle:'Google Ratings & Reviews',businessValet:'Valet Vehicle Preparation',businessWaiter:'Call Waiter & Request Bill',businessWifi:'Fast Wi‑Fi Access',
  vehicleTitle:'NFC Vehicle',vehicleText:'When someone needs to reach you about your parked vehicle, the NFC tag makes contacting the owner quick and easy.',vehicleItem:'Quick and easy access to the vehicle owner',
  petText:'If your pet gets lost, the NFC tag helps the finder quickly contact the owner.',petItem:'Fast contact with the owner',
  lostTitle:'NFC Safety (Child & Senior)',lostAlt:'NFC safety for children and seniors',lostText:'If a child or elderly family member gets lost, the contact information on the NFC tag helps the finder reach you quickly.',lostItem:'Fast access to a family contact',
  bagTitle:'NFC Luggage & Bag',bagAlt:'NFC Luggage and Bag',bagText:'For luggage, bags and valuables, it provides a simple way to contact the owner quickly.',bagItem:'Fast contact with the owner',
  valetTitle:'NFC Valet Card',valetText:'Provides quick access to vehicle information and the handover process for valet services.',valetItem:'Faster handover process',
  helmetTitle:'NFC Helmet',helmetAlt:'NFC Helmet emergency information',helmetText:'In a motor vehicle accident, it helps people quickly reach the emergency contact authorized by the user.',helmetItem:'Fast access to the authorized emergency contact',
  googleAlt:'NFC Google rating and review sign',googleText:'Helps customers rate and review your business on Google more easily.',googleItem1:'Quick access to your Google rating page',googleItem2:'Makes leaving a review easier',
  realEstateTitle:'NFC Real Estate',realEstateAlt:'NFC Real Estate listing link',realEstateText:'With an NFC tag on your office window, visitors can reach your store and listings with a single tap.',realEstateItem1:'Quick access to your online store page',realEstateItem2:'Easy access to your current portfolio',
  forSaleTitle:'NFC Car for Sale',forSaleAlt:'NFC car-for-sale listing link',forSaleText:'With an NFC tag on the vehicle window, interested buyers can open the sales listing directly.',forSaleItem1:'Quick access to the vehicle listing',forSaleItem2:'Easy access to vehicle details, photos and listing information',
  benefit1Title:'Contactless & Fast',benefit1Text:'Access information instantly with one tap.',benefit2Title:'Updatable Content',benefit2Text:'Keep your information up to date at all times.',benefit3Title:'Safe & Reliable',benefit3Text:'Controlled and practical digital access.',benefit4Title:'Sustainable Future',benefit4Text:'Help reduce paper consumption.',
  contactTitle:'Contact Us',contactText:'Get in touch for information about NFC solutions and partnership opportunities.',footerRights:'© 2026 NFC PORT. All rights reserved.'
},
de:{
  title:'NFC PORT — Die physische Welt digital verbinden',
  navBusiness:'NFC Business',navVehicle:'NFC Fahrzeug',navLost:'NFC Sicherheit',navBag:'NFC Gepäck & Tasche',navValet:'NFC Valet-Karte',navHelmet:'NFC Helm',navRealEstate:'NFC Immobilien',navForSale:'NFC Fahrzeugverkauf',navContact:'Kontakt',
  eyebrow:'DIE PHYSISCHE WELT DIGITAL VERBINDEN',heroTitle:'Mit einer Berührung<br>zu Informationen, Menschen<br>und Services <span>gelangen.</span>',heroText:'Verbinden Sie Produkte, Dienstleistungen und Kommunikation mit NFC-Technologie mit der digitalen Welt. Intelligent, schnell und nachhaltig.',discover:'Lösungen entdecken ↓',heroAlt:'NFC PORT Lösungen',
  solutionsTitle:'NFC Lösungen',solutionsIntro:'Entdecken Sie die passende NFC-Lösung für Ihren Bedarf.',
  businessTitle:'NFC Business',businessAlt:'NFC Business digitales Menü',businessText:'Bringen Sie Ihr Unternehmen in die digitale Welt und bieten Sie Ihren Kunden ein modernes, praktisches Erlebnis.',businessDigitalMenu:'<strong>Digitales Menü:</strong> Öffnen Sie Ihr Menü sofort per NFC – ganz ohne QR-Code.',businessQrMenu:'<strong>QR-Menü:</strong> Individuelle QR-Menü-Lösungen für Ihr Unternehmen.',businessHotel:'<strong>Hotel-Lösungen:</strong> Digitales Menü, Zimmerservice, Housekeeping und Bellboy-Ruf.',businessBeach:'<strong>Beach-Club-Lösungen:</strong> Digitales Menü, Bestellung, Kellnerruf und Rechnungsanforderung.',businessGoogle:'Google Bewertungen & Rezensionen',businessValet:'Fahrzeugvorbereitung durch Valet',businessWaiter:'Kellner rufen & Rechnung anfordern',businessWifi:'Schneller Wi‑Fi-Zugang',
  vehicleTitle:'NFC Fahrzeug',vehicleText:'Wenn jemand Sie wegen Ihres geparkten Fahrzeugs erreichen muss, ermöglicht der NFC-Tag eine schnelle und einfache Kontaktaufnahme.',vehicleItem:'Schneller Kontakt zum Fahrzeughalter',
  petText:'Wenn Ihr Haustier verloren geht, hilft der NFC-Tag dem Finder, den Besitzer schnell zu kontaktieren.',petItem:'Schneller Kontakt zum Besitzer',
  lostTitle:'NFC Sicherheit (Kind & Senior)',lostAlt:'NFC Sicherheit für Kinder und Senioren',lostText:'Wenn ein Kind oder älterer Angehöriger vermisst wird, helfen die Kontaktinformationen auf dem NFC-Tag, Sie schnell zu erreichen.',lostItem:'Schneller Kontakt zu Angehörigen',
  bagTitle:'NFC Gepäck & Tasche',bagAlt:'NFC Gepäck und Tasche',bagText:'Für Gepäck, Taschen und Wertgegenstände ermöglicht der NFC-Tag eine schnelle Kontaktaufnahme mit dem Besitzer.',bagItem:'Schneller Kontakt zum Besitzer',
  valetTitle:'NFC Valet-Karte',valetText:'Ermöglicht bei Valet-Services schnellen Zugriff auf Fahrzeuginformationen und Übergabeprozesse.',valetItem:'Schneller Übergabeprozess',
  helmetTitle:'NFC Helm',helmetAlt:'NFC Helm Notfallinformationen',helmetText:'Bei einem Unfall erleichtert der NFC-Tag den schnellen Kontakt mit der vom Nutzer autorisierten Notfallperson.',helmetItem:'Schneller Zugriff auf den autorisierten Notfallkontakt',
  googleAlt:'NFC Google Bewertungs- und Rezensionstafel',googleText:'Erleichtert es Ihren Kunden, Ihr Unternehmen bei Google zu bewerten.',googleItem1:'Schneller Zugriff auf die Google-Bewertungsseite',googleItem2:'Vereinfacht das Hinterlassen einer Rezension',
  realEstateTitle:'NFC Immobilien',realEstateAlt:'NFC Immobilien Angebotslink',realEstateText:'Mit einem NFC-Tag am Schaufenster erreichen Besucher Ihr Online-Portfolio und Ihre Angebote mit nur einer Berührung.',realEstateItem1:'Schneller Zugriff auf Ihre Online-Shopseite',realEstateItem2:'Einfacher Zugriff auf das aktuelle Portfolio',
  forSaleTitle:'NFC Fahrzeugverkauf',forSaleAlt:'NFC Verkaufsanzeige für Fahrzeuge',forSaleText:'Mit einem NFC-Tag an der Fahrzeugscheibe gelangen Interessenten direkt zur Verkaufsanzeige.',forSaleItem1:'Schneller Zugriff auf die Fahrzeuganzeige',forSaleItem2:'Einfacher Zugriff auf Fahrzeugdaten, Fotos und Inseratsdetails',
  benefit1Title:'Kontaktlos & Schnell',benefit1Text:'Mit einer Berührung sofort auf Informationen zugreifen.',benefit2Title:'Aktualisierbare Inhalte',benefit2Text:'Ihre Informationen bleiben jederzeit aktuell.',benefit3Title:'Sicher & Zuverlässig',benefit3Text:'Kontrollierter und praktischer digitaler Zugriff.',benefit4Title:'Nachhaltige Zukunft',benefit4Text:'Helfen Sie, Papierverbrauch zu reduzieren.',
  contactTitle:'Kontaktieren Sie uns',contactText:'Kontaktieren Sie uns für Informationen zu NFC-Lösungen und Kooperationen.',footerRights:'© 2026 NFC PORT. Alle Rechte vorbehalten.'
},
ru:{
  title:'NFC PORT — Соединяем физический мир с цифровым',
  navBusiness:'NFC для бизнеса',navVehicle:'NFC для авто',navLost:'NFC Безопасность',navBag:'NFC Багаж и сумки',navValet:'NFC Valet-карта',navHelmet:'NFC Шлем',navRealEstate:'NFC Недвижимость',navForSale:'NFC Продажа авто',navContact:'Контакты',
  eyebrow:'СОЕДИНЯЕМ ФИЗИЧЕСКИЙ МИР С ЦИФРОВЫМ',heroTitle:'Одно касание —<br>и доступ к информации,<br>людям и <span>сервисам.</span>',heroText:'Связывайте товары, услуги и коммуникации с цифровым миром с помощью NFC. Умные, быстрые и устойчивые решения.',discover:'Смотреть решения ↓',heroAlt:'Решения NFC PORT',
  solutionsTitle:'NFC Решения',solutionsIntro:'Выберите NFC-решение под вашу задачу.',
  businessTitle:'NFC для бизнеса',businessAlt:'NFC цифровое меню для бизнеса',businessText:'Перенесите ваш бизнес в цифровую среду и предложите клиентам современный и удобный опыт.',businessDigitalMenu:'<strong>Цифровое меню:</strong> Откройте меню одним касанием NFC — без сканирования QR-кода.',businessQrMenu:'<strong>QR-меню:</strong> Индивидуальные QR-меню для вашего бизнеса.',businessHotel:'<strong>Решения для отелей:</strong> Цифровое меню, room service, housekeeping и вызов bellboy.',businessBeach:'<strong>Решения для Beach Club:</strong> Цифровое меню, заказ, вызов официанта и запрос счёта.',businessGoogle:'Оценки и отзывы Google',businessValet:'Подготовка автомобиля Valet',businessWaiter:'Вызов официанта и запрос счёта',businessWifi:'Быстрый доступ к Wi‑Fi',
  vehicleTitle:'NFC для авто',vehicleText:'Если нужно связаться с владельцем припаркованного автомобиля, NFC-метка позволяет сделать это быстро и удобно.',vehicleItem:'Быстрая связь с владельцем автомобиля',
  petText:'Если питомец потеряется, NFC-метка поможет нашедшему быстро связаться с владельцем.',petItem:'Быстрая связь с владельцем',
  lostTitle:'NFC Безопасность (дети и пожилые)',lostAlt:'NFC для безопасности детей и пожилых',lostText:'Если ребёнок или пожилой близкий потеряется, контактные данные на NFC-метке помогут быстро связаться с вами.',lostItem:'Быстрая связь с близкими',
  bagTitle:'NFC Багаж и сумки',bagAlt:'NFC Багаж и сумки',bagText:'Для багажа, сумок и ценных вещей NFC помогает быстро связаться с владельцем.',bagItem:'Быстрая связь с владельцем',
  valetTitle:'NFC Valet-карта',valetText:'Обеспечивает быстрый доступ к данным автомобиля и процессу выдачи в valet-сервисе.',valetItem:'Быстрый процесс выдачи',
  helmetTitle:'NFC Шлем',helmetAlt:'NFC Шлем для экстренной связи',helmetText:'При ДТП помогает быстро связаться с человеком, которого пользователь назначил контактным лицом для экстренной ситуации.',helmetItem:'Быстрый доступ к экстренному контакту',
  googleAlt:'NFC Google табличка для оценок и отзывов',googleText:'Помогает клиентам легко оценить ваш бизнес и оставить отзыв в Google.',googleItem1:'Быстрый переход на страницу Google',googleItem2:'Упрощает процесс оставления отзыва',
  realEstateTitle:'NFC Недвижимость',realEstateAlt:'NFC ссылка на объявления недвижимости',realEstateText:'NFC-метка на витрине офиса позволяет посетителям одним касанием открыть ваш магазин и объявления.',realEstateItem1:'Быстрый доступ к странице онлайн-магазина',realEstateItem2:'Удобный доступ к актуальному портфолио',
  forSaleTitle:'NFC Продажа авто',forSaleAlt:'NFC ссылка на объявление о продаже авто',forSaleText:'NFC-метка на стекле автомобиля позволяет заинтересованным покупателям сразу открыть объявление о продаже.',forSaleItem1:'Быстрый доступ к объявлению',forSaleItem2:'Удобный доступ к данным автомобиля, фото и деталям объявления',
  benefit1Title:'Бесконтактно и быстро',benefit1Text:'Получайте информацию одним касанием.',benefit2Title:'Обновляемый контент',benefit2Text:'Информация всегда остаётся актуальной.',benefit3Title:'Безопасно и надёжно',benefit3Text:'Контролируемый и удобный цифровой доступ.',benefit4Title:'Устойчивое будущее',benefit4Text:'Помогайте сокращать расход бумаги.',
  contactTitle:'Связаться с нами',contactText:'Свяжитесь с нами, чтобы узнать больше о NFC-решениях и сотрудничестве.',footerRights:'© 2026 NFC PORT. Все права защищены.'
},
ar:{
  title:'NFC PORT — اربط العالم المادي بالعالم الرقمي',
  navBusiness:'NFC للأعمال',navVehicle:'NFC للسيارة',navLost:'NFC للأمان',navBag:'NFC للأمتعة والحقائب',navValet:'بطاقة NFC للفاليه',navHelmet:'NFC للخوذة',navRealEstate:'NFC للعقارات',navForSale:'NFC لبيع السيارة',navContact:'تواصل معنا',
  eyebrow:'اربط العالم المادي بالعالم الرقمي',heroTitle:'بلمسة واحدة<br>تصل إلى المعلومات والأشخاص<br>والخدمات <span>بسرعة.</span>',heroText:'اربط منتجاتك وخدماتك ووسائل التواصل بالعالم الرقمي عبر تقنية NFC. حلول ذكية وسريعة ومستدامة.',discover:'اكتشف حلولنا ↓',heroAlt:'حلول NFC PORT',
  solutionsTitle:'حلول NFC',solutionsIntro:'اكتشف حل NFC المناسب لاحتياجك.',
  businessTitle:'NFC للأعمال',businessAlt:'قائمة رقمية NFC للأعمال',businessText:'انقل أعمالك إلى العالم الرقمي وقدّم لعملائك تجربة عصرية وعملية.',businessDigitalMenu:'<strong>القائمة الرقمية:</strong> افتح قائمتك فوراً بلمس علامة NFC من دون الحاجة إلى مسح QR.',businessQrMenu:'<strong>قائمة QR:</strong> حلول قوائم QR مخصصة لنشاطك التجاري.',businessHotel:'<strong>حلول الفنادق:</strong> قائمة رقمية، خدمة الغرف، التدبير الفندقي وطلب موظف الأمتعة.',businessBeach:'<strong>حلول Beach Club:</strong> قائمة رقمية، الطلب، استدعاء النادل وطلب الحساب.',businessGoogle:'تقييمات ومراجعات Google',businessValet:'تجهيز السيارة عبر الفاليه',businessWaiter:'طلب النادل وطلب الحساب',businessWifi:'دخول سريع إلى Wi‑Fi',
  vehicleTitle:'NFC للسيارة',vehicleText:'عندما يحتاج شخص إلى التواصل مع مالك سيارة متوقفة، تتيح علامة NFC الوصول إليه بسرعة وسهولة.',vehicleItem:'تواصل سريع وسهل مع مالك السيارة',
  petText:'إذا فُقد حيوانك الأليف، تساعد علامة NFC من يجده على التواصل مع المالك بسرعة.',petItem:'تواصل سريع مع المالك',
  lostTitle:'NFC للأمان (الأطفال وكبار السن)',lostAlt:'NFC لأمان الأطفال وكبار السن',lostText:'عند فقدان طفل أو شخص مسن، تساعد معلومات التواصل على علامة NFC في الوصول إليك بسرعة.',lostItem:'وصول سريع إلى أحد أفراد العائلة',
  bagTitle:'NFC للأمتعة والحقائب',bagAlt:'NFC للأمتعة والحقائب',bagText:'للأمتعة والحقائب والأغراض القيّمة، توفّر NFC وسيلة سريعة للتواصل مع المالك.',bagItem:'تواصل سريع مع المالك',
  valetTitle:'بطاقة NFC للفاليه',valetText:'توفر وصولاً سريعاً إلى معلومات السيارة وإجراءات التسليم في خدمات الفاليه.',valetItem:'تسليم أسرع',
  helmetTitle:'NFC للخوذة',helmetAlt:'NFC للخوذة ومعلومات الطوارئ',helmetText:'في الحوادث المرورية تساعد على الوصول بسرعة إلى جهة الاتصال التي حدّدها المستخدم للطوارئ.',helmetItem:'وصول سريع إلى جهة اتصال الطوارئ المعتمدة',
  googleAlt:'لوحة NFC لتقييمات ومراجعات Google',googleText:'تساعد عملاءك على تقييم نشاطك وترك مراجعة على Google بسهولة.',googleItem1:'وصول سريع إلى صفحة التقييم على Google',googleItem2:'تسهّل ترك المراجعة',
  realEstateTitle:'NFC للعقارات',realEstateAlt:'NFC لروابط العقارات والإعلانات',realEstateText:'تتيح علامة NFC على واجهة مكتب العقارات للزوار الوصول إلى متجرك وإعلاناتك بلمسة واحدة.',realEstateItem1:'وصول سريع إلى صفحة المتجر الإلكتروني',realEstateItem2:'وصول سهل إلى العقارات المتاحة حالياً',
  forSaleTitle:'NFC لبيع السيارة',forSaleAlt:'NFC لرابط إعلان بيع السيارة',forSaleText:'تتيح علامة NFC على زجاج السيارة للمهتمين فتح إعلان البيع مباشرة.',forSaleItem1:'وصول سريع إلى إعلان السيارة',forSaleItem2:'وصول سهل إلى معلومات السيارة والصور وتفاصيل الإعلان',
  benefit1Title:'بدون تلامس وسريع',benefit1Text:'الوصول إلى المعلومات فوراً بلمسة واحدة.',benefit2Title:'محتوى قابل للتحديث',benefit2Text:'حافظ على معلوماتك محدثة دائماً.',benefit3Title:'آمن وموثوق',benefit3Text:'وصول رقمي عملي ومتحكم به.',benefit4Title:'مستقبل مستدام',benefit4Text:'ساهم في تقليل استهلاك الورق.',
  contactTitle:'تواصل معنا',contactText:'تواصل معنا للحصول على معلومات حول حلول NFC وفرص التعاون.',footerRights:'© 2026 NFC PORT. جميع الحقوق محفوظة.'
}
};

function applyLanguage(lang){
  if(!translations[lang]) lang='tr';
  const t=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.title=t.title;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.textContent=t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const key=el.dataset.i18nHtml;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
    const key=el.dataset.i18nAlt;
    if(t[key]!==undefined) el.alt=t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  localStorage.setItem('nfcport-language',lang);
}

document.querySelectorAll('.lang-btn').forEach(button=>{
  button.addEventListener('click',()=>applyLanguage(button.dataset.lang));
});

applyLanguage(localStorage.getItem('nfcport-language')||'tr');
