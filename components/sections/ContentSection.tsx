/**
 * ContentSection — Blog ve rehber sayfaları için prose wrapper.
 * @tailwindcss/typography tabanlı, dark mode (prose-invert).
 * İsteğe bağlı table of contents ile sidebar düzeni destekler.
 */
'use client';

import React, { useState } from 'react';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

interface TocItem {
  id: string;
  label: string;
}

type MaxWidth = 'narrow' | 'medium' | 'wide';

export interface ContentSectionProps {
  children: React.ReactNode;
  toc?: TocItem[];
  maxWidth?: MaxWidth;
  className?: string;
}

/* ── HELPERS ────────────────────────────────────────────────────────────── */

const MAX_WIDTH_CLASS: Record<MaxWidth, string> = {
  narrow: 'max-w-3xl',
  medium: 'max-w-4xl',
  wide:   'max-w-5xl',
};

const PROSE_CLASSES = [
  'prose prose-invert',
  'prose-headings:text-[#F0F4F8] prose-headings:font-medium prose-headings:tracking-[-0.03em]',
  'prose-p:text-[#94A3B8] prose-p:leading-relaxed',
  'prose-a:text-[#38BDF8] hover:prose-a:text-[#7DD3FC] prose-a:no-underline hover:prose-a:underline',
  'prose-strong:text-[#F0F4F8]',
  'prose-code:text-[#7DD3FC] prose-code:bg-[#0C1219] prose-code:rounded prose-code:px-1.5 prose-code:py-0.5',
  'prose-pre:bg-[#0C1219] prose-pre:border prose-pre:border-white/8',
  'prose-blockquote:border-l-[#38BDF8] prose-blockquote:text-[#94A3B8] prose-blockquote:not-italic',
  'prose-li:text-[#94A3B8]',
  'prose-hr:border-white/8',
  'max-w-none',
].join(' ');

/* ── TOC ACCORDION (mobile) ─────────────────────────────────────────────── */

function TocAccordion({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8 rounded-xl border border-white/8 bg-[#0C1219] overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 text-sm font-medium text-[#F0F4F8]"
        aria-expanded={open}
      >
        <span>İçindekiler</span>
        <span className="text-[#38BDF8] text-lg leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ul className="px-5 pb-4 space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-[#64748B] hover:text-[#38BDF8] transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── TOC SIDEBAR (desktop) ──────────────────────────────────────────────── */

function TocSidebar({ items }: { items: TocItem[] }) {
  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-3">
          İçindekiler
        </p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-[#64748B] hover:text-[#38BDF8] transition-colors leading-snug block"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function ContentSection({
  children,
  toc,
  maxWidth = 'medium',
  className = '',
}: ContentSectionProps) {
  const hasToc = toc && toc.length > 0;

  return (
    <section className={`py-12 px-4 sm:px-6 bg-[#070B11] ${className}`}>
      <div className={`mx-auto ${MAX_WIDTH_CLASS[maxWidth]}`}>
        {hasToc && <TocAccordion items={toc} />}

        <div className={hasToc ? 'lg:flex lg:gap-12' : ''}>
          {hasToc && <TocSidebar items={toc} />}

          <div className={`min-w-0 flex-1 ${PROSE_CLASSES}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
