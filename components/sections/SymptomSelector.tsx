'use client';

import { Phone, ChevronRight, AlertCircle } from 'lucide-react';
import { SYMPTOMS } from '@/data/symptoms';
import { useSymptom } from '@/contexts/SymptomContext';

const PHONE_HREF = 'tel:+905327153751';

export default function SymptomSelector() {
  const { selectedId, setSelectedId } = useSymptom();
  const active = SYMPTOMS.find((s) => s.id === selectedId)!;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">Arıza Tespiti</div>
      <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.04em] text-text-primary lg:text-4xl">
        DSG arıza belirtileri: hangisi sizde var?
      </h2>
      <p className="mt-3 font-saira text-sm text-text-secondary max-w-xl">
        Şu belirtilerden birini yaşıyorsanız, ücretsiz ön teşhis için buradayız.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_1fr_0.9fr]">
        {/* Sol — Semptom kartları (ilk 2) */}
        <div className="grid gap-3">
          {SYMPTOMS.slice(0, 2).map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`group relative flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                selectedId === s.id
                  ? 'border-border-brass bg-graphite-elevated'
                  : 'border-border-hairline bg-graphite-surface hover:border-border-brass hover:bg-graphite-elevated'
              }`}
            >
              <span
                className={`relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  s.severity === 'high'
                    ? 'bg-red-500/15 text-red-400 dot-glow-critical'
                    : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
                }`}
              >
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <div className="relative">
                <div className="font-saira text-sm font-medium text-text-primary">{s.title}</div>
                <div className="mt-1 font-saira text-xs leading-5 text-text-secondary">{s.description}</div>
              </div>
              <ChevronRight
                className={`relative mt-0.5 h-4 w-4 shrink-0 text-text-tertiary transition-all duration-300 ${
                  selectedId === s.id ? 'rotate-90 text-brass' : ''
                }`}
              />
            </button>
          ))}
        </div>

        {/* Orta — Semptom kartları (son 3) */}
        <div className="grid gap-3">
          {SYMPTOMS.slice(2, 5).map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`group relative flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                selectedId === s.id
                  ? 'border-border-brass bg-graphite-elevated'
                  : 'border-border-hairline bg-graphite-surface hover:border-border-brass hover:bg-graphite-elevated'
              }`}
            >
              <span
                className={`relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  s.severity === 'high'
                    ? 'bg-red-500/15 text-red-400 dot-glow-critical'
                    : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
                }`}
              >
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <div className="relative">
                <div className="font-saira text-sm font-medium text-text-primary">{s.title}</div>
                <div className="mt-1 font-saira text-xs leading-5 text-text-secondary">{s.description}</div>
              </div>
              <ChevronRight
                className={`relative mt-0.5 h-4 w-4 shrink-0 text-text-tertiary transition-all duration-300 ${
                  selectedId === s.id ? 'rotate-90 text-brass' : ''
                }`}
              />
            </button>
          ))}
        </div>

        {/* Sağ — Highlight kart */}
        <div className="rounded-xl border border-border-brass bg-graphite-elevated p-5">
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full ${
                  active.severity === 'high'
                    ? 'bg-red-500/15 text-red-400 dot-glow-critical'
                    : 'bg-amber-500/15 text-amber-400 dot-glow-warning'
                }`}
              >
                <AlertCircle className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span
                className={`font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  active.severity === 'high' ? 'text-red-400' : 'text-amber-400'
                }`}
              >
                {active.severity === 'high' ? 'Yüksek Risk' : 'Orta Risk'}
              </span>
            </div>

            {/* Risk gauge */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex-1 h-1.5 rounded-full bg-graphite-base overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    active.severity === 'high' ? 'dot-glow-critical' : 'dot-glow-warning'
                  }`}
                  style={{
                    width: active.severity === 'high' ? '85%' : '55%',
                    background:
                      active.severity === 'high'
                        ? 'linear-gradient(90deg, rgba(244,63,94,0.3), #F43F5E)'
                        : 'linear-gradient(90deg, rgba(245,158,11,0.3), #F59E0B)',
                  }}
                />
              </div>
              <span
                className={`font-jetbrains text-[11px] font-semibold ${
                  active.severity === 'high' ? 'text-red-400' : 'text-amber-400'
                }`}
              >
                {active.severity === 'high' ? '85%' : '55%'}
              </span>
            </div>

            <div className="mt-4 font-saira text-lg font-semibold tracking-[-0.02em] text-text-primary">
              {active.title}
            </div>
            <p className="mt-2 font-saira text-sm leading-6 text-text-secondary">
              {active.description}
            </p>
            <div className="mt-4 rounded-xl border border-border-hairline bg-graphite-base/60 p-3">
              <div className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] text-iron-light">
                Olası Neden
              </div>
              <div className="mt-1.5 font-saira text-sm text-text-secondary">{active.cause}</div>
            </div>
            <a
              href={PHONE_HREF}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brass-bright px-5 py-3 font-saira text-sm font-semibold text-graphite-base transition hover:-translate-y-0.5 hover:bg-brass"
            >
              <Phone className="h-4 w-4" strokeWidth={2.5} />
              Ücretsiz Ön Teşhis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
