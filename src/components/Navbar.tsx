import { useEffect, useState } from 'react';
import { Menu, X, Zap, Globe, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage, type SiteLanguage } from '@/lib/language';

const LANG_OPTIONS: { code: SiteLanguage; label: string }[] = [
  { code: 'TR', label: 'Türkçe' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'RU', label: 'Русский' },
  { code: 'AR', label: 'العربية' },
];

export function Navbar() {
  const { language, setLanguage, copy } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { label: copy.menu, href: '#menu' },
    { label: copy.howItWorks, href: '#nasil-calisir' },
    { label: copy.faq, href: '#sss' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const pick = (code: SiteLanguage) => { setLanguage(code); setLangOpen(false); };

  return (
    <header className={cn('fixed top-0 inset-x-0 z-50 transition-all duration-500', scrolled ? 'py-3' : 'py-5')}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={cn(
          'flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500',
          scrolled ? 'glass-warm h-14 shadow-2xl shadow-black/40' : 'h-16 bg-transparent'
        )}>
          <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-cream">
              NFC<span className="text-brand-400">PORT</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-4 py-2 text-sm font-medium text-cream/70 transition-colors hover:text-cream hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-xl glass-warm px-3 py-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
                aria-label="Dil seç"
              >
                <Globe className="h-4 w-4" />
                {language}
              </button>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 z-20 mt-2 w-40 overflow-hidden rounded-xl glass-warm p-1 shadow-2xl shadow-black/50">
                    {LANG_OPTIONS.map((o) => (
                      <button
                        key={o.code}
                        onClick={() => pick(o.code)}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                          o.code === language ? 'bg-brand-500/15 text-brand-300' : 'text-cream/75 hover:bg-white/5 hover:text-cream'
                        )}
                      >
                        {o.label}
                        {o.code === language && <Check className="h-3.5 w-3.5" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <a href="#iletisim" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/30 transition-all hover:shadow-brand-400/50 hover:-translate-y-0.5">
              {copy.contact} <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass-warm text-cream" aria-label="Menü">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className={cn('lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
        <div className="absolute inset-0 bg-ink-950/85 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className={cn('absolute right-0 top-0 h-full w-[82%] max-w-sm bg-ink-900 border-l border-white/10 p-6 pt-24 transition-transform duration-400', open ? 'translate-x-0' : 'translate-x-full')}>
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3.5 text-base font-medium text-cream/80 transition-colors hover:bg-white/5 hover:text-cream">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            <p className="mb-2 px-1 text-xs font-medium text-cream/40">Dil</p>
            <div className="grid grid-cols-2 gap-2">
              {LANG_OPTIONS.map((o) => (
                <button
                  key={o.code}
                  onClick={() => pick(o.code)}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                    o.code === language ? 'bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/30' : 'glass-warm text-cream/75'
                  )}
                >
                  {o.label}
                  {o.code === language && <Check className="h-3.5 w-3.5" />}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <a href="#iletisim" onClick={() => setOpen(false)} className="block rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 px-5 py-3 text-center text-sm font-semibold text-ink-950">{copy.contact}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
