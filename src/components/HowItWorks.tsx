import { Smartphone, QrCode, UtensilsCrossed } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    num: '01',
    icon: QrCode,
    title: "QR'ı Yaklaştır veya Dokun",
    desc: 'QR kodu telefon kamerasına yaklaştırın veya NFC etikete dokundurun. Uygulama ya da indirme gerekmez.',
    img: '',
  },
  {
    num: '02',
    icon: Smartphone,
    title: 'Menü Anında Açılır',
    desc: 'Tarayıcıda saniyede yüklenen, fotoğraflı, çok dilli menü — misafir dilediğini seçer.',
    img: 'https://images.pexels.com/photos/9258712/pexels-photo-9258712.jpeg?auto=compress&cs=tinysrgb&h=500&w=500&fit=crop',
  },
  {
    num: '03',
    icon: UtensilsCrossed,
    title: 'Sipariş & Lezzet',
    desc: 'Sepete ekle, sipariş ver. Mutfak anlık bildirim alır, masaya hizmet akar.',
    img: 'https://images.pexels.com/photos/28959272/pexels-photo-28959272.jpeg?auto=compress&cs=tinysrgb&h=500&w=500&fit=crop',
  },
];

export function HowItWorks() {
  return (
    <section id="nasil-calisir" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-pattern mask-fade-b opacity-25" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-warm px-4 py-1.5 text-xs font-medium text-accent-400">
              Nasıl Çalışır
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl lg:text-5xl">
              Üç adımda <span className="gradient-text">lezzete eriş</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 120}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass-warm p-6 transition-all duration-500 hover:border-brand-500/40">
                <div className="relative h-44 overflow-hidden rounded-2xl bg-ink-900">
                  {i === 0 ? (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-500/20 via-ink-900 to-ink-950">
                      <div className="grid h-28 w-28 place-items-center rounded-2xl border border-brand-400/40 bg-ink-950/80 text-brand-300 shadow-2xl shadow-brand-500/20">
                        <QrCode className="h-20 w-20" strokeWidth={1.35} />
                      </div>
                    </div>
                  ) : (
                    <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
                  <span className="absolute bottom-3 left-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-lg">
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-brand-500/40">{s.num}</span>
                  <h3 className="font-display text-lg font-semibold text-cream">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/55">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
