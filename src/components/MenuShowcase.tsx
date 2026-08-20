import { useState } from 'react';

import { Reveal } from './Reveal';
import { menu, restaurant } from '@/data/menu';
import { cn } from '@/lib/utils';

export function MenuShowcase() {
  const [active, setActive] = useState(0);
  const cat = menu[active];

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-40 h-[420px] w-[500px] rounded-full bg-brand-700/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-warm px-4 py-1.5 text-xs font-medium text-brand-300">
              Menü deneyimi
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl lg:text-5xl">
              Menünüz <span className="gradient-text">ekranda canlanır</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-cream/55 text-pretty">
              Her ürünün fotoğrafı, açıklaması ve fiyatı — dokunmatikten siparişe kadar tek akış.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-10">
          {/* Category nav */}
          <Reveal>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 no-scrollbar">
              {menu.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    'group flex shrink-0 items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all lg:w-full',
                    i === active ? 'bg-gradient-to-r from-brand-500/20 to-transparent ring-1 ring-brand-500/30' : 'hover:bg-white/5'
                  )}
                >
                  <span className="text-xl">{c.emoji}</span>
                  <span className={cn('text-sm font-semibold transition-colors', i === active ? 'text-cream' : 'text-cream/55')}>
                    {c.name}
                  </span>
                  <span className="ml-auto hidden rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-cream/40 lg:block">
                    {c.items.length}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Items grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {cat.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 80} as="article">
                <div className="group relative overflow-hidden rounded-3xl glass-warm transition-all duration-500 hover:border-brand-500/40 hover:bg-white/[0.07]">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-ink-950/80 px-3 py-1 text-sm font-bold text-brand-400 backdrop-blur">
                      {item.price}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-semibold text-cream">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-cream/50">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
