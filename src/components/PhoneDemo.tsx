import { useEffect, useState } from 'react';
import { Wifi, Signal, BatteryFull, Search, Globe, X, Check } from 'lucide-react';
import { menu, restaurant, type MenuItem } from '@/data/menu';
import { useLanguage, type SiteLanguage } from '@/lib/language';

type Stage = 'idle' | 'scanning' | 'menu';

const PHONE_LANGS: { code: SiteLanguage; label: string }[] = [
  { code: 'TR', label: 'TR' },
  { code: 'EN', label: 'EN' },
  { code: 'DE', label: 'DE' },
  { code: 'RU', label: 'RU' },
  { code: 'AR', label: 'AR' },
];

export function PhoneDemo() {
  const [stage, setStage] = useState<Stage>('idle');
  const [activeCat, setActiveCat] = useState(0);

  // Auto-play the tap → scan → menu loop when idle
  useEffect(() => {
    if (stage !== 'idle') return;
    const t = setTimeout(() => setStage('scanning'), 2600);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (stage !== 'scanning') return;
    const t = setTimeout(() => setStage('menu'), 1400);
    return () => clearTimeout(t);
  }, [stage]);

  // Auto-cycle categories once menu is open
  useEffect(() => {
    if (stage !== 'menu') return;
    const id = setInterval(() => {
      setActiveCat((c) => (c + 1) % menu.length);
    }, 3200);
    return () => clearInterval(id);
  }, [stage]);

  const reset = () => {
    setStage('idle');
    setActiveCat(0);
  };

  const cat = menu[activeCat];

  return (
    <div className="relative mx-auto w-full max-w-[330px] select-none">
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-20 rounded-[3rem] bg-brand-600/25 blur-3xl" />
      <div className="absolute -right-8 top-20 -z-20 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />

      {/* Phone shell */}
      <div className="relative rounded-[3rem] border border-white/15 bg-ink-850 p-2.5 shadow-2xl shadow-black/70 animate-float">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink-950">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-cream/80">
            <span>21:34</span>
            <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-950" />
            <div className="flex items-center gap-1.5">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Screen content */}
          <div className="relative h-[540px]">
            {stage === 'idle' && <IdleScreen />}
            {stage === 'scanning' && <ScanningScreen />}
            {stage === 'menu' && (
              <MenuScreen activeCat={activeCat} setActiveCat={setActiveCat} cat={cat} reset={reset} />
            )}
          </div>

          {/* Home indicator */}
          <div className="mx-auto mb-2 h-1 w-28 rounded-full bg-white/25" />
        </div>
      </div>

      {/* NFC tap button */}
      {stage === 'idle' && (
        <button
          onClick={() => setStage('scanning')}
          className="absolute -bottom-3 -right-3 flex flex-col items-center group"
          aria-label="NFC ile dokun"
        >
          <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-brand-500/40 bg-ink-800 shadow-xl">
            <span className="absolute inset-0 rounded-2xl border border-brand-400/60 animate-pulse-ring" />
            <span
              className="absolute inset-0 rounded-2xl border border-brand-400/40 animate-pulse-ring"
              style={{ animationDelay: '0.9s' }}
            />
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500 text-ink-950 transition-transform group-hover:scale-110">
              <Wifi className="h-6 w-6" />
            </div>
          </div>
          <span className="mt-2 rounded-full bg-ink-800/90 px-3 py-1 text-[10px] font-semibold text-brand-300 backdrop-blur">
            NFC ile dokun
          </span>
        </button>
      )}

      {/* Replay button when menu open */}
      {stage === 'menu' && (
        <button
          onClick={reset}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full glass-warm px-5 py-2 text-[11px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
        >
          ↻ Tekrar dene
        </button>
      )}

    </div>
  );
}

function IdleScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center animate-fade-up">
      <div className="relative">
        <div className="grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30">
          <span className="font-display text-3xl font-bold text-ink-950">M</span>
        </div>
        <span className="absolute -inset-2 rounded-3xl border border-brand-400/40 animate-pulse-ring" />
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-cream">{restaurant.name}</h3>
        <p className="text-xs text-cream/50">{restaurant.tagline}</p>
      </div>
      <p className="max-w-[200px] text-sm leading-relaxed text-cream/60">
        NFC etikete dokunun veya QR kodu tarayın — menü anında açılsın.
      </p>
      <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-[11px] text-cream/50">
        <Search className="h-3.5 w-3.5" /> Uygulama gerekmez
      </div>
    </div>
  );
}

function ScanningScreen() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden">
      {/* QR-like scanning visual */}
      <div className="relative h-40 w-40 rounded-2xl border-2 border-brand-400/50 bg-ink-900 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-0.5 p-2 opacity-60">
          {Array.from({ length: 64 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1px]"
              style={{
                background: Math.random() > 0.45 ? '#fdba74' : 'transparent',
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 h-0.5 bg-brand-400 shadow-[0_0_12px_2px_rgba(249,115,22,0.7)] animate-scan-line" />
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-brand-300">
        <span className="h-2 w-2 animate-ping rounded-full bg-brand-400" />
        Menüye bağlanıyor...
      </div>
    </div>
  );
}

function MenuScreen({
  activeCat,
  setActiveCat,
  cat,
  reset,
}: {
  activeCat: number;
  setActiveCat: (n: number) => void;
  cat: (typeof menu)[number];
  reset: () => void;
}) {
  const { language, setLanguage } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="relative flex h-full flex-col animate-slide-up">
      {/* Header */}
      <div className="relative shrink-0">
        <img
          src={restaurant.heroImg}
          alt=""
          className="h-20 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
        <div className="absolute bottom-2 left-4 right-4 flex items-end justify-between">
          <div>
            <h3 className="font-display text-lg font-bold text-cream">{restaurant.name}</h3>
            <p className="text-[10px] text-cream/60">Masa 1</p>
          </div>
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-cream/80 backdrop-blur"
            >
              <Globe className="h-3 w-3" /> {language}
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
                <div className="absolute right-0 z-20 mt-1 w-24 overflow-hidden rounded-xl glass-warm p-1 shadow-2xl shadow-black/50">
                  {PHONE_LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangOpen(false); }}
                      className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-[10px] font-medium transition-colors ${l.code === language ? 'bg-brand-500/15 text-brand-300' : 'text-cream/75 hover:bg-white/5'}`}
                    >
                      {l.label}
                      {l.code === language && <Check className="h-3 w-3" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex shrink-0 gap-1.5 overflow-x-auto px-3 py-2 no-scrollbar">
        {menu.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActiveCat(i)}
            className={`shrink-0 rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition-all ${
              i === activeCat
                ? 'bg-brand-500 text-ink-950'
                : 'bg-white/5 text-cream/55'
            }`}
          >
            {c.emoji} {c.name}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="flex-1 space-y-2 overflow-y-auto px-3 pb-2 no-scrollbar">
        {cat.items.map((item, idx) => (
          <div
            key={item.name}
            className="flex gap-2.5 rounded-2xl bg-white/[0.04] p-2 transition-all hover:bg-white/[0.07]"
            style={{ animation: `fade-up 0.5s ease-out ${idx * 100}ms both` }}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="h-12 w-12 shrink-0 overflow-hidden rounded-lg"
              aria-label={`${item.name} görselini büyüt`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </button>
            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <span className="truncate text-xs font-bold text-cream">{item.name}</span>
              <p className="mt-0.5 line-clamp-1 text-[10px] text-cream/45">{item.desc}</p>
              <span className="mt-1 text-sm font-bold text-brand-400">{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex shrink-0 justify-center border-t border-white/10 bg-ink-900/80 px-3 py-2 backdrop-blur">
        <button
          onClick={reset}
          className="rounded-lg bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-1.5 text-[11px] font-bold text-ink-950"
        >
          Menü
        </button>
      </div>

      {selectedItem && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-ink-950/85 p-5 backdrop-blur-sm">
          <div className="relative w-full overflow-hidden rounded-3xl bg-ink-900 shadow-2xl">
            <img src={selectedItem.img} alt={selectedItem.name} className="aspect-square w-full object-cover" />
            <div className="p-4">
              <h4 className="font-display text-base font-semibold text-cream">{selectedItem.name}</h4>
              <p className="mt-1 text-xs leading-relaxed text-cream/55">{selectedItem.desc}</p>
              <div className="mt-2 text-sm font-bold text-brand-400">{selectedItem.price}</div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-ink-950/80 text-cream"
              aria-label="Görseli kapat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
