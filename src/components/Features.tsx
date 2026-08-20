import { Zap, Globe, Image as ImageIcon, BellRing, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const features = [
  { icon: Zap, title: 'Anında Erişim', desc: 'NFC dokunuş veya QR tarama — menü 0.3 sn içinde açılır.', accent: 'from-brand-400 to-brand-600' },
  { icon: ImageIcon, title: 'Görsel Menü', desc: 'Her ürün için fotoğraf ve video. İştah açar, sipariş artırır.', accent: 'from-accent-400 to-accent-600' },
  { icon: Globe, title: 'Çok Dilli', desc: '5 dilde otomatik çeviri. Yabancı misafir rahatça seçer.', accent: 'from-brand-300 to-brand-500' },
  { icon: LayoutTemplate, title: 'Markaya Özel', desc: 'Logo, renk ve tarzınızla %100 özelleştirilen premium tasarım.', accent: 'from-accent-400 to-brand-500' },
  { icon: BellRing, title: 'Anlık Bildirim', desc: 'Ek talep geldiğinde garson çağırın, hesap isteğini anında alın.', accent: 'from-accent-500 to-brand-600' },
  { icon: ShieldCheck, title: 'Güvenli Altyapı', desc: '%99.9 uptime, bulut tabanlı. Verileriniz her zaman güvende.', accent: 'from-brand-500 to-brand-700' },
];

export function Features() {
  return (
    <section id="ozellikler" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-warm px-4 py-1.5 text-xs font-medium text-brand-300">Özellikler</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl lg:text-5xl">
              Görselden siparişe <span className="gradient-text">her detay</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 80} as="article">
              <div className="group relative h-full overflow-hidden rounded-3xl glass-warm p-6 transition-all duration-500 hover:border-brand-500/40 hover:bg-white/[0.07]">
                <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.accent} text-ink-950 shadow-lg transition-transform group-hover:scale-110`}>
                  <f.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-cream">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-cream/50">{f.desc}</p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand-500/0 blur-2xl transition-all duration-700 group-hover:bg-brand-500/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
