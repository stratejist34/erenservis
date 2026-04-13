/**
 * ServiceWorkflow — 4 adımlı servis süreci bileşeni.
 * Anasayfa ve /sanziman/[id] sayfalarında kullanılır.
 * steps prop verilmezse dahili DEFAULT_STEPS kullanılır.
 */
import React from 'react';
import { Phone, Search, FileText, Truck, Clock } from 'lucide-react';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

export interface ServiceWorkflowStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
  icon?: React.ReactNode;
  highlighted?: boolean;
}

interface ServiceWorkflowProps {
  eyebrow?: string;
  title?: string;
  steps?: ServiceWorkflowStep[];
}

/* ── DEFAULTS ───────────────────────────────────────────────────────────── */

export const DEFAULT_STEPS: ServiceWorkflowStep[] = [
  {
    number: '01',
    title: 'Bizi Arayın',
    description: 'Şanzıman sorununuzu telefonla anlatın. Ön bilgi ve tahmini maliyet aralığı verelim.',
    duration: '~ 5 dakika',
    icon: <Phone className="h-4 w-4" strokeWidth={2} />,
  },
  {
    number: '02',
    title: 'Ücretsiz Ön Teşhis',
    description: 'Aracınızı getirin, bilgisayarlı diagnostik ile arızayı birebir tespit edelim.',
    duration: '~ 30 dakika',
    icon: <Search className="h-4 w-4" strokeWidth={2} />,
    highlighted: true,
  },
  {
    number: '03',
    title: 'Net Fiyat Teklifi',
    description: 'Tespit sonrası yazılı, sürprizsiz fiyat teklifi. Onayınız olmadan işlem başlamaz.',
    duration: 'Anında',
    icon: <FileText className="h-4 w-4" strokeWidth={2} />,
  },
  {
    number: '04',
    title: 'Onarım ve Teslim',
    description: 'Orijinal parça ile onarım. Test sürüşü ve garanti belgesi ile teslim.',
    duration: '1–3 gün',
    icon: <Truck className="h-4 w-4" strokeWidth={2} />,
  },
];

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function ServiceWorkflow({
  eyebrow = 'Süreç',
  title   = '4 adımda kontrollü servis',
  steps   = DEFAULT_STEPS,
}: ServiceWorkflowProps) {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-text-primary">
        {title}
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
              step.highlighted
                ? 'border-border-brass bg-graphite-surface'
                : 'border-border-hairline bg-graphite-surface'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-jetbrains text-2xl font-bold tracking-[-0.02em] text-brass/60">
                  {step.number}
                </span>
                {step.icon && (
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                      step.highlighted
                        ? 'border-border-brass bg-brass/10 text-brass'
                        : 'border-border-hairline bg-graphite-elevated text-iron-light'
                    }`}
                  >
                    {step.icon}
                  </div>
                )}
              </div>
              {step.duration && (
                <div className="flex items-center gap-1.5 rounded-full border border-border-hairline bg-graphite-elevated px-2.5 py-1">
                  <Clock className="h-3 w-3 text-iron-deep" strokeWidth={2} />
                  <span className="font-jetbrains text-[11px] font-medium text-iron-light">
                    {step.duration}
                  </span>
                </div>
              )}
            </div>

            <h3 className="mt-4 font-saira text-lg font-semibold tracking-[-0.02em] text-text-primary">
              {step.title}
            </h3>
            <p className="mt-1.5 font-saira text-sm leading-6 text-text-secondary">
              {step.description}
            </p>

            {step.highlighted && (
              <div className="mt-3 inline-flex rounded-full border border-border-brass bg-brass/8 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
                Ücretsiz
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
