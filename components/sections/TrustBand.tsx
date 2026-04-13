/**
 * TrustBand — Güven göstergesi bant bileşeni.
 * /sanziman/[id], /arac/[marka] ve diğer servis sayfalarında kullanılır.
 */
import React from 'react';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

export interface TrustBandItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TrustBandProps {
  items: TrustBandItem[];
  variant?: 'default' | 'compact';
  className?: string;
}

/* ── DEFAULTS ───────────────────────────────────────────────────────────── */

export const DEFAULT_TRUST_ITEMS: TrustBandItem[] = [
  { value: '15+',    label: 'Yıl Deneyim' },
  { value: '4.000+', label: 'Tamamlanan Tamir' },
  { value: '2 Yıl',  label: 'İşçilik Garantisi' },
  { value: '100%',   label: 'Yazılı Teklif' },
];

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function TrustBand({
  items,
  variant = 'default',
  className = '',
}: TrustBandProps) {
  const isCompact = variant === 'compact';

  return (
    <section
      aria-label="Güven göstergeleri"
      className={`py-8 px-4 sm:px-6 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`grid gap-3 ${
            items.length === 3
              ? 'grid-cols-3'
              : 'grid-cols-2 sm:grid-cols-4'
          }`}
        >
          {items.map((item) => (
            <div
              key={item.label}
              className={`
                flex flex-col items-center justify-center text-center
                rounded-xl border border-border-hairline bg-graphite-surface
                transition hover:-translate-y-0.5
                ${isCompact ? 'p-3' : 'p-4 sm:p-5'}
              `}
            >
              {item.icon && (
                <span className="mb-2 text-brass">{item.icon}</span>
              )}
              <p
                className={`font-saira font-semibold tracking-[-0.03em] text-brass ${
                  isCompact ? 'text-xl' : 'text-2xl'
                }`}
              >
                {item.value}
              </p>
              <p
                className={`mt-1 font-jetbrains text-iron-light ${
                  isCompact ? 'text-[10px]' : 'text-xs'
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
