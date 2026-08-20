import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

const faqs = [
  { q: 'NFC menü ve QR menü arasındaki fark nedir?', a: 'QR menüde müşteri kamerasıyla kodu tarar; NFC menüde telefonu etikete dokundurması yeterlidir. NFC daha hızlı ve düşük ışıkta sorunsuz çalışır. NFC PORT her ikisini de tek platformda sunar.' },
  { q: 'Müşterilerimin uygulama indirmesi gerekir mi?', a: 'Hayır. Menü doğrudan telefonun tarayıcısında açılır. Android ve iPhone dahil tüm modern telefonlarda ekstra uygulama olmadan çalışır.' },
  { q: 'Menümü güncellemek ne kadar sürer?', a: 'Yönetim panelinizden yaptığınız değişiklikler anında yayına girer. Fiyat, ürün, görsel veya kampanya eklemek saniyeler içinde tamamlanır.' },
  { q: 'NFC etiket ve QR kod matbaa hizmeti var mı?', a: 'Evet. Masaya uygun NFC etiket, kart ve stand çeşitleri ile QR kod baskı ve yerleştirme hizmeti sunuyoruz. Kurulum paketine dahil edilebilir.' },
  { q: 'Yabancı misafirler için dil desteği nasıl çalışır?', a: 'Profesyonel ve Kurumsal paketlerde 11 dile kadar otomatik çeviri desteği bulunur. Misafir menü açıldığında telefonunun diline göre menüyü görebilir.' },
  { q: 'Kurulum ne kadar sürer?', a: 'Menünüz hazır olduktan sonra kurulum bir gün içinde tamamlanır. Demo talebi oluşturarak sistemi kendi gözünüzle görebilirsiniz.' },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="sss" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-warm px-4 py-1.5 text-xs font-medium text-brand-300">S.S.S.</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl lg:text-5xl">
              Sıkça sorulan <span className="gradient-text">sorular</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl glass-warm transition-colors hover:border-brand-500/30">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
                    <span className="font-display text-base font-semibold text-cream sm:text-lg">{f.q}</span>
                    <span className={cn('grid h-8 w-8 shrink-0 place-items-center rounded-lg transition-all duration-300', isOpen ? 'bg-brand-500 text-ink-950 rotate-180' : 'bg-white/10 text-cream/65')}>{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                  </button>
                  <div className="grid transition-all duration-400 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                    <div className="overflow-hidden"><p className="px-6 pb-5 text-sm leading-relaxed text-cream/55">{f.a}</p></div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
