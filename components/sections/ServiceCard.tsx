/**
 * ServiceCard — Hizmet grid'i için kart bileşeni.
 * /hizmetler ve anasayfa hizmetler listesinde kullanılır.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  priceFrom?: string;
}

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  badge,
  priceFrom,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-4 p-6 rounded-xl border border-border-hairline bg-graphite-surface hover:border-border-brass hover:bg-graphite-elevated transition-all"
    >
      {/* Badge — üst sağ köşe */}
      {badge && (
        <span className="absolute top-4 right-4 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-border-brass bg-brass/8 text-brass">
          {badge}
        </span>
      )}

      {/* Icon */}
      {icon && (
        <span className="text-brass w-fit">
          {icon}
        </span>
      )}

      {/* Title */}
      <h3 className="font-saira text-lg font-medium text-text-primary leading-snug group-hover:text-brass transition-colors pr-16">
        {title}
      </h3>

      {/* Description */}
      <p className="font-saira text-sm text-text-secondary leading-relaxed flex-1">
        {description}
      </p>

      {/* Footer: price + arrow */}
      <div className="flex items-center justify-between pt-2 border-t border-border-hairline">
        {priceFrom ? (
          <span className="font-saira text-sm font-medium text-brass">{priceFrom}</span>
        ) : (
          <span />
        )}
        <ArrowRight
          className="h-4 w-4 text-iron-light group-hover:text-brass group-hover:translate-x-0.5 transition-all"
          strokeWidth={2}
        />
      </div>
    </Link>
  );
}
