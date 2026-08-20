import { Zap, Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-sm">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-lg shadow-brand-500/30">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-cream">
              NFC<span className="text-brand-400">PORT</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/45">
            Fiziksel dünyayı dijitale bağlayan QR ve NFC menü platformu. Dokun, menü açılsın.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.instagram.com/nfcportcom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-xl glass-warm text-cream/65 transition-all hover:border-brand-500/40 hover:text-brand-400">
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a href="mailto:info@nfcport.com" aria-label="E-posta gönder" className="grid h-10 w-10 place-items-center rounded-xl glass-warm text-cream/65 transition-all hover:border-brand-500/40 hover:text-brand-400">
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/35">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> İstanbul, Türkiye</span>
            <a href="mailto:info@nfcport.com" className="transition-colors hover:text-cream/60">info@nfcport.com</a>
          </div>
          <p className="text-sm text-cream/30">© {new Date().getFullYear()} NFC PORT. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
