'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  transmissions,
  type TransmissionCategory,
  type TransmissionType,
  CATEGORY_LABELS,
} from '@/lib/sanziman';

type FilterOption = 'all' | TransmissionCategory;

const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: 'all', label: 'Tümü' },
  { value: 'Cift_Kavramali', label: 'Çift Kavramalı' },
  { value: 'Tam_Otomatik', label: 'Tam Otomatik' },
  { value: 'CVT', label: 'CVT' },
  { value: 'Hibrit', label: 'Hibrit' },
];

function TransmissionCard({ transmission }: { transmission: TransmissionType }) {
  const topFault = transmission.commonFaults.find((f) => f.severity === 'high');

  return (
    <article className="group relative card-surface p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-accent/10 text-accent">
          {CATEGORY_LABELS[transmission.category]}
        </span>
        <span className="text-xs text-fg-muted">{transmission.brands.length} marka</span>
      </div>

      <div>
        <h2 className="text-lg font-bold text-fg leading-tight mb-2">{transmission.title}</h2>
        <p className="text-sm text-fg-soft leading-relaxed">{transmission.shortDesc}</p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {transmission.brands.slice(0, 4).map((brand) => (
          <span
            key={brand}
            className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-2 text-fg-soft border border-edge"
          >
            {brand}
          </span>
        ))}
        {transmission.brands.length > 4 && (
          <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-2 text-fg-muted border border-edge">
            +{transmission.brands.length - 4}
          </span>
        )}
      </div>

      {transmission.maintenance[0] && (
        <div className="flex items-center gap-2 text-xs text-fg-soft">
          <Wrench className="w-3 h-3 shrink-0" strokeWidth={2} />
          <span>
            <span className="text-fg font-medium">İlk bakım:</span>{' '}
            {transmission.maintenance[0].interval}
          </span>
        </div>
      )}

      {topFault && (
        <div className="status-card status-card-critical flex items-start gap-2 p-3">
          <AlertTriangle className="status-label-critical w-3.5 h-3.5 mt-0.5 shrink-0" strokeWidth={2.5} />
          <span className="text-xs leading-relaxed">
            <strong className="status-label-critical font-semibold">KRITIK</strong>{' '}
            arıza: {topFault.name}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between mt-auto pt-2">
        <div className="flex items-center gap-1.5 text-xs text-fg-muted">
          <Wrench className="w-3.5 h-3.5" strokeWidth={2} />
          <span>{transmission.commonFaults.length} bilinen arıza</span>
        </div>
        <Link
          href={`/sanziman-tipleri/${transmission.slug}/`}
          className="btn-premium flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold"
          aria-label={`${transmission.title} detaylarını incele`}
        >
          İncele
          <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
        </Link>
      </div>
    </article>
  );
}

export default function TransmissionFilter() {
  const [active, setActive] = useState<FilterOption>('all');

  const filtered =
    active === 'all'
      ? transmissions
      : transmissions.filter((t) => t.category === active);

  const visibleOptions = FILTER_OPTIONS.filter(
    (opt) => opt.value === 'all' || transmissions.some((t) => t.category === opt.value)
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-8"
        role="group"
        aria-label="Şanzıman kategorisi filtresi"
      >
        {visibleOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setActive(opt.value)}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150',
              active === opt.value
                ? 'bg-accent text-white'
                : 'bg-surface-1 text-fg-soft border border-edge hover:text-fg hover:bg-surface-2'
            )}
            aria-pressed={active === opt.value}
          >
            {opt.label}
            {opt.value !== 'all' && (
              <span className="ml-1.5 text-xs opacity-60">
                ({transmissions.filter((t) => t.category === opt.value).length})
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((t) => (
          <TransmissionCard key={t.slug} transmission={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-fg-soft py-12">Bu kategoride şanzıman bulunamadı.</p>
      )}
    </div>
  );
}
