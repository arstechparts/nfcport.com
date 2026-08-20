import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send, Mail, MapPin, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

const businessTypes = ['Restoran', 'Kafe', 'Bar & Lounge', 'Otel', 'Pastane', 'Diğer'];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
  const [form, setForm] = useState({ name: '', business: '', type: 'Restoran', phone: '', email: '', note: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const subject = encodeURIComponent(`NFC PORT teklif talebi - ${form.business}`);
    const body = encodeURIComponent([
      `Ad Soyad: ${form.name}`,
      `İşletme Adı: ${form.business}`,
      `İşletme Türü: ${form.type}`,
      `Telefon: ${form.phone}`,
      `E-posta: ${form.email || 'Belirtilmedi'}`,
      `Not: ${form.note || 'Belirtilmedi'}`,
    ].join('\n'));
    window.location.href = `mailto:info@nfcport.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('done'), 400);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section id="iletisim" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-[400px] w-[500px] rounded-full bg-brand-700/15 blur-[120px]" />
        <div className="absolute left-0 bottom-20 h-[300px] w-[400px] rounded-full bg-accent-600/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] glass-warm">
          <div className="grid lg:grid-cols-[1fr_1.1fr]">
            <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-brand-600/20 blur-3xl" />
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-4 py-1.5 text-xs font-medium text-brand-300 ring-1 ring-brand-500/20">Fiyat Teklifi</span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-cream sm:text-4xl">
                  Restoranınız için <span className="gradient-text">teklif alın</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cream/55 text-pretty">
                  Kısa formu doldurun, ihtiyacınıza en uygun QR veya NFC menü çözümü için en kısa sürede sizinle iletişime geçelim.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-10 space-y-4">
                  {[
                    { icon: Mail, label: 'E-posta', value: 'info@nfcport.com' },
                    { icon: MapPin, label: 'Adres', value: 'İstanbul, Türkiye' },
                    { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt–Cmt · 09:00–18:00' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-xl glass-warm text-brand-400"><item.icon className="h-5 w-5" /></span>
                      <div><div className="text-xs text-cream/40">{item.label}</div><div className="text-sm font-semibold text-cream/85">{item.value}</div></div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="border-t border-white/10 bg-ink-900/40 p-8 sm:p-10 lg:p-12 lg:border-l lg:border-t-0">
              {status === 'done' ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-12">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-accent-500/20 text-accent-400"><CheckCircle2 className="h-8 w-8" /></div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-cream">Teklifiniz alındı</h3>
                  <p className="mt-3 max-w-sm text-sm text-cream/55">Teşekkürler {form.name || 'değerli işletme sahibi'}! E-posta taslağınız info@nfcport.com adresi için hazırlandı.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', business: '', type: 'Restoran', phone: '', email: '', note: '' }); }} className="mt-6 rounded-xl glass-warm px-5 py-2.5 text-sm font-semibold text-cream/80 hover:bg-white/10">Yeni teklif oluştur</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Ad Soyad" required><input required value={form.name} onChange={update('name')} placeholder="Adınız" className="form-input" /></Field>
                    <Field label="İşletme Adı" required><input required value={form.business} onChange={update('business')} placeholder="İşletmeniz" className="form-input" /></Field>
                  </div>
                  <Field label="İşletme Türü">
                    <select value={form.type} onChange={update('type')} className="form-input appearance-none">
                      {businessTypes.map((t) => (<option key={t} value={t} className="bg-ink-900">{t}</option>))}
                    </select>
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Telefon" required><input required type="tel" value={form.phone} onChange={update('phone')} placeholder="05XX XXX XX XX" className="form-input" /></Field>
                    <Field label="E-posta"><input type="email" value={form.email} onChange={update('email')} placeholder="ornek@isletme.com" className="form-input" /></Field>
                  </div>
                  <Field label="Notunuz"><textarea value={form.note} onChange={update('note')} rows={3} placeholder="Kaç masa, hangi çözüm ilginizi çekiyor..." className="form-input resize-none" /></Field>
                  <button type="submit" disabled={status === 'loading'} className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-4 text-base font-semibold text-ink-950 shadow-xl shadow-brand-500/30 transition-all hover:shadow-brand-400/50 hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0">
                    {status === 'loading' ? (<><Loader2 className="h-5 w-5 animate-spin" /> Gönderiliyor...</>) : (<>Teklif İste <Send className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" /></>)}
                  </button>
                  <p className="text-center text-xs text-cream/35">Bilgileriniz gizli tutulur, üçüncü taraflarla paylaşılmaz.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input { width: 100%; border-radius: 0.875rem; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); padding: 0.75rem 1rem; font-size: 0.9rem; color: #f5ede1; transition: all 0.2s; }
        .form-input::placeholder { color: rgba(245,237,225,0.35); }
        .form-input:focus { outline: none; border-color: rgba(249,115,22,0.6); background: rgba(255,255,255,0.06); box-shadow: 0 0 0 3px rgba(249,115,22,0.15); }
        select.form-input option { color: #f5ede1; }
      `}</style>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-cream/55">{label} {required && <span className="text-brand-400">*</span>}</span>
      {children}
    </label>
  );
}
