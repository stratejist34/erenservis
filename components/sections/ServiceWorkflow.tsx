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
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-[#F0F4F8]">
        {title}
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className={`rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 ${
              step.highlighted
                ? 'border-[#38BDF8]/25 bg-[#0C1219]'
                : 'border-white/8 bg-[#0C1219]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold tracking-[-0.02em] text-[#38BDF8]/60">
                  {step.number}
                </span>
                {step.icon && (
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                      step.highlighted
                        ? 'border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8]'
                        : 'border-white/8 bg-white/[0.02] text-[#64748B]'
                    }`}
                  >
                    {step.icon}
                  </div>
                )}
              </div>
              {step.duration && (
                <div className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1">
                  <Clock className="h-3 w-3 text-[#475569]" strokeWidth={2} />
                  <span className="font-mono text-[11px] font-medium text-[#64748B]">
                    {step.duration}
                  </span>
                </div>
              )}
            </div>

            <h3 className="mt-4 text-lg font-semibold tracking-[-0.02em] text-[#F0F4F8]">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-[#94A3B8]">
              {step.description}
            </p>

            {step.highlighted && (
              <div className="mt-3 inline-flex rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7DD3FC]">
                Ücretsiz
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
