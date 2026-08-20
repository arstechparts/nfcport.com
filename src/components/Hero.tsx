import { Play } from 'lucide-react';
import { PhoneDemo } from './PhoneDemo';
import { useLanguage } from '@/lib/language';

export function Hero() {
  const { copy } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-28">
      <div className="absolute inset-0 -z-10 grid-pattern mask-fade-b opacity-50" />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-700/30 blur-[130px]" />
      <div className="absolute top-32 right-0 -z-10 h-[380px] w-[380px] rounded-full bg-accent-600/15 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <div className="max-w-2xl">
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-balance animate-fade-up sm:text-5xl lg:text-6xl" style={{ animationDelay: '80ms' }}>
              {copy.heroTitle.split(',').map((part, i, arr) => (
                <span key={i}>
                  {i === 0 ? <span className="gradient-text">{part}</span> : part}
                  {i < arr.length - 1 && ','}
                </span>
              ))}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-cream/60 text-pretty animate-fade-up sm:text-xl" style={{ animationDelay: '160ms' }}>
              {copy.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 animate-fade-up sm:flex-row sm:items-center" style={{ animationDelay: '240ms' }}>
              <a href="#nasil-calisir" className="group inline-flex items-center justify-center gap-2 rounded-2xl glass-warm px-7 py-3.5 text-base font-semibold text-cream transition-all hover:bg-white/10">
                <Play className="h-4 w-4 fill-cream" />
                {copy.howButton}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 animate-fade-up" style={{ animationDelay: '340ms' }}>
              {[
                { v: '0.3sn', l: copy.accessSpeed },
                { v: '%82', l: copy.moreOrders },
                { v: '5', l: copy.languageSupport },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-cream sm:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs text-cream/45 sm:text-sm">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone demo */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <PhoneDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
