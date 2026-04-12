import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { transmissions, CATEGORY_LABELS } from '@/lib/sanziman';

export default function RelatedTransmissions({ currentSlug }: { currentSlug: string }) {
  const related = transmissions.filter((t) => t.slug !== currentSlug);
  if (related.length === 0) return null;

  return (
    <section className="pb-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-base font-semibold text-fg mb-4">
          Diğer Şanzıman Türleri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {related.map((t) => {
            const topFault = t.commonFaults.find((f) => f.severity === 'high');
            return (
              <Link
                key={t.slug}
                href={`/sanziman-tipleri/${t.slug}/`}
                className="group card-surface flex flex-col gap-2 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {CATEGORY_LABELS[t.category]}
                  </span>
                  <ArrowRight
                    className="w-3.5 h-3.5 text-fg-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2.5}
                  />
                </div>
                <p className="text-sm font-semibold text-fg leading-snug">{t.title}</p>
                {topFault && (
                  <div className="flex items-start gap-1.5 mt-auto pt-1">
                    <AlertTriangle
                      className="w-3 h-3 text-status-critical-label shrink-0 mt-0.5"
                      strokeWidth={2.5}
                    />
                    <span className="text-[11px] text-fg-muted leading-relaxed line-clamp-1">
                      {topFault.name}
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
