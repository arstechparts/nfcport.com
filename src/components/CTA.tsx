import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

export function CTA() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-brand-700 p-10 text-center sm:p-16">
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-ink-950/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-ink-950/20 px-4 py-1.5 text-xs font-medium text-cream ring-1 ring-white/20">
                <Sparkles className="h-3.5 w-3.5" /> Bugün başlayın
              </div>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance text-ink-950 sm:text-4xl lg:text-5xl">
                Dokun, lezzete ulaş
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-ink-950/80 sm:text-lg">
                Kendi işletmeniz için dijital menü deneyimini keşfedin ve ücretsiz demo talep edin.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#iletisim" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cream px-8 py-4 text-base font-semibold text-ink-950 shadow-2xl transition-all hover:-translate-y-0.5">
                  Demo Talep Et <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
