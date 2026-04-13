/**
 * PricingTable — Şanzıman hizmet fiyatları için kart-stili tablo.
 * /rehber/otomatik-sanziman-tamiri-fiyat ve benzeri fiyat sayfalarında kullanılır.
 * Satır başına fiyat aralığı gösterir, kesin teklif vermez.
 */
import React from 'react';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

export interface PricingRow {
  service: string;
  priceMin?: string;
  priceMax?: string;
  /** Fiyat yerine özel metin: "Ücretsiz", "Teklif alın" gibi */
  priceText?: string;
  note?: string;
}

export interface PricingTableProps {
  title?: string;
  rows: PricingRow[];
  disclaimer?: string;
  currency?: string;
}

/* ── HELPERS ────────────────────────────────────────────────────────────── */

function formatPrice(row: PricingRow, currency: string): string {
  if (row.priceText) return row.priceText;
  if (row.priceMin && row.priceMax) return `${row.priceMin} – ${row.priceMax} ${currency}`;
  if (row.priceMin) return `${row.priceMin}+ ${currency}`;
  if (row.priceMax) return `${row.priceMax} ${currency}`;
  return '—';
}

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function PricingTable({
  title,
  rows,
  disclaimer,
  currency = 'TL',
}: PricingTableProps) {
  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Container */}
        <div className="rounded-xl border border-border-hairline bg-graphite-surface overflow-hidden">
          {title && (
            <div className="px-6 py-4 border-b border-border-hairline">
              <h3 className="font-saira text-base font-semibold text-text-primary tracking-[-0.02em]">
                {title}
              </h3>
            </div>
          )}

          {/* Rows */}
          <ul>
            {rows.map((row, i) => {
              const isLast = i === rows.length - 1;
              return (
                <li
                  key={i}
                  className={`px-6 py-4 flex items-start justify-between gap-4 ${
                    !isLast ? 'border-b border-border-hairline' : ''
                  } hover:bg-graphite-elevated transition-colors`}
                >
                  {/* Left: service name + note */}
                  <div className="min-w-0 flex-1">
                    <p className="font-saira text-sm font-medium text-text-primary leading-snug">
                      {row.service}
                    </p>
                    {row.note && (
                      <p className="mt-0.5 font-jetbrains text-xs text-iron-light leading-relaxed">
                        {row.note}
                      </p>
                    )}
                  </div>

                  {/* Right: price */}
                  <p className="shrink-0 font-saira text-sm font-semibold text-brass text-right whitespace-nowrap">
                    {formatPrice(row, currency)}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <p className="mt-4 font-jetbrains text-xs text-iron-light leading-relaxed">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
