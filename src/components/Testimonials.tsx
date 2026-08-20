import { Star, Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const testimonials = [
  { quote: 'NFC dokunuşla menü açılması misafirleri büyüledi. Sipariş hızı arttı, garson yükü azaldı.', name: 'Mert Kaya', role: 'İşletme Sahibi', initial: 'M' },
  { quote: 'Sezonluk değişiklikleri anlık yapıyorum. Kağıt menü baskı masrafı tamamen bitti.', name: 'Aylin Demir', role: 'Genel Müdür', initial: 'A' },
  { quote: 'Yabancı misafirler çok dilli menüyü çok beğendi. Oda servisi siparişleri ikiye katlandı.', name: 'Can Yıldız', role: 'Kurucu', initial: 'C' },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-warm px-4 py-1.5 text-xs font-medium text-accent-400">Referanslar</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl lg:text-5xl">
              İşletmeler <span className="gradient-text">ne diyor?</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} as="article">
              <div className="relative h-full rounded-3xl glass-warm p-7 transition-all duration-500 hover:border-brand-500/30 hover:bg-white/[0.07]">
                <Quote className="h-8 w-8 text-brand-500/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-cream/70">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 font-display text-base font-bold text-ink-950">{t.initial}</div>
                  <div>
                    <div className="text-sm font-semibold text-cream">{t.name}</div>
                    <div className="text-xs text-cream/45">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
