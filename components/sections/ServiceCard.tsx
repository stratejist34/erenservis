/**
 * ServiceCard — Hizmet grid'i için glassmorphism kart bileşeni.
 * /hizmetler ve anasayfa hizmetler listesinde kullanılır (Sprint 4).
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
      className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/8 bg-[#0C1219]/80 backdrop-blur-sm hover:border-[#38BDF8]/30 hover:bg-[#0F1923] hover:shadow-glow-sky transition-all"
    >
      {/* Badge — üst sağ köşe */}
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/8 text-[#7DD3FC]">
          {badge}
        </span>
      )}

      {/* Icon */}
      {icon && (
        <span className="text-[#38BDF8] w-fit">
          {icon}
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-medium text-[#F0F4F8] leading-snug group-hover:text-[#7DD3FC] transition-colors pr-16">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
        {description}
      </p>

      {/* Footer: price + arrow */}
      <div className="flex items-center justify-between pt-2 border-t border-white/8">
        {priceFrom ? (
          <span className="text-sm font-medium text-[#38BDF8]">{priceFrom}</span>
        ) : (
          <span />
        )}
        <ArrowRight
          className="h-4 w-4 text-[#64748B] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all"
          strokeWidth={2}
        />
      </div>
    </Link>
  );
}
