import { AlertTriangle, ArrowRight, Phone } from 'lucide-react';

const PHONE_HREF = 'tel:+905327153751';
const DIAGNOSIS_HREF = 'https://wa.me/905327153751';

const SIGNALS = [
  'Küçük titreme -> kavrama aşınması başlıyor',
  'Geciken vites -> basınç düşüyor',
  'Uyarı lambası -> sistem korumaya geçiyor',
] as const;

const COST_LEVELS = [
  { text: 'ERKEN: 8.000 - 15.000 TL',  color: 'text-risk-low' },
  { text: 'GEÇ: 35.000 - 80.000 TL',   color: 'text-risk-medium' },
  { text: 'REVİZYON: 120.000+ TL',      color: 'text-risk-high' },
] as const;

export default function EscalationSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="border border-brand-500/70 bg-surface-0 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(166, 138, 100, 0.14), transparent 28%)',
          }}
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 text-accent mb-5">
              <AlertTriangle className="w-4 h-4" strokeWidth={2.4} />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em]">
                Risk Büyüme Eğrisi
              </span>
            </div>

            <h2 className="font-display uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.92] text-fg">
              Şanzıman Arızası
              <span className="block text-accent">Geciktikçe Büyür.</span>
            </h2>

            <div className="mt-8 space-y-3 text-sm sm:text-[15px] text-fg-soft leading-7">
              {SIGNALS.map((signal) => (
                <div key={signal} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bronze" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/8 bg-dark-100 p-6 sm:p-7">
            <div className="space-y-3">
              {COST_LEVELS.map((level) => (
                <div
                  key={level.text}
                  className={`border-b border-white/8 pb-3 last:border-0 last:pb-0 font-bold tracking-wide ${level.color}`}
                >
                  {level.text}
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs sm:text-sm leading-6 text-fg-muted">
              Erken teşhis, tam revizyona giden zinciri genelde ilk aşamada keser.
              Net tablo için ön kontrol yeterli.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={DIAGNOSIS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-bold text-white"
              >
                Ücretsiz Ön Kontrol
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-white/20 text-fg font-semibold hover:border-brand-500/60 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Hemen Ara
              </a>
            </div>
            <p className="text-xs text-white/40 text-center mt-3">
              Erken teşhis, tam revizyona giden zinciri keser.{' '}
              <a
                href={PHONE_HREF}
                className="text-gold-action underline hover:text-gold-action/80 transition-colors"
              >
                Hemen ara →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
