import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type SiteLanguage = 'TR' | 'EN' | 'DE' | 'RU' | 'AR';

type SiteCopy = {
  menu: string;
  howItWorks: string;
  faq: string;
  contact: string;
  heroTitle: string;
  heroDescription: string;
  howButton: string;
  accessSpeed: string;
  moreOrders: string;
  languageSupport: string;
};

const copy: Record<SiteLanguage, SiteCopy> = {
  TR: { menu: 'Menü', howItWorks: 'Nasıl Çalışır', faq: 'S.S.S.', contact: 'İletişim', heroTitle: 'Dokun, menü açılsın', heroDescription: 'Telefonu NFC etikete dokundur veya QR kodu tara — menünüz saniyede ekranda. Uygulama yok, bekleme yok, baskı masrafı yok.', howButton: 'Nasıl Çalışır?', accessSpeed: 'Erişim hızı', moreOrders: 'Daha fazla sipariş', languageSupport: 'Dil desteği' },
  EN: { menu: 'Menu', howItWorks: 'How It Works', faq: 'FAQ', contact: 'Contact', heroTitle: 'Tap, open the menu', heroDescription: 'Tap an NFC tag or scan a QR code — your menu appears in seconds. No app, waiting, or printing costs.', howButton: 'How It Works', accessSpeed: 'Access speed', moreOrders: 'More orders', languageSupport: 'Languages' },
  DE: { menu: 'Menü', howItWorks: 'So funktioniert es', faq: 'FAQ', contact: 'Kontakt', heroTitle: 'Tippen, Menü öffnen', heroDescription: 'NFC-Tag antippen oder QR-Code scannen — Ihr Menü erscheint in Sekunden. Ohne App, Wartezeit oder Druckkosten.', howButton: 'So funktioniert es', accessSpeed: 'Zugriffsgeschwindigkeit', moreOrders: 'Mehr Bestellungen', languageSupport: 'Sprachen' },
  RU: { menu: 'Меню', howItWorks: 'Как это работает', faq: 'FAQ', contact: 'Контакты', heroTitle: 'Коснитесь — меню откроется', heroDescription: 'Коснитесь NFC-метки или отсканируйте QR-код — меню появится за секунды. Без приложения и ожидания.', howButton: 'Как это работает', accessSpeed: 'Скорость доступа', moreOrders: 'Больше заказов', languageSupport: 'Языки' },
  AR: { menu: 'القائمة', howItWorks: 'كيف يعمل', faq: 'الأسئلة الشائعة', contact: 'تواصل معنا', heroTitle: 'المس لفتح القائمة', heroDescription: 'المس علامة NFC أو امسح رمز QR — ستظهر قائمتك خلال ثوانٍ دون تطبيق أو انتظار.', howButton: 'كيف يعمل', accessSpeed: 'سرعة الوصول', moreOrders: 'طلبات أكثر', languageSupport: 'اللغات' },
};

type LanguageContextValue = { language: SiteLanguage; setLanguage: (language: SiteLanguage) => void; copy: SiteCopy };

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>('TR');
  const value = useMemo(() => ({ language, setLanguage, copy: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
