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
  'prose-headings:font-saira prose-headings:text-text-primary prose-headings:font-semibold prose-headings:tracking-[-0.03em]',
  'prose-p:font-saira prose-p:text-text-secondary prose-p:leading-relaxed',
  'prose-a:text-brass hover:prose-a:text-brass-bright prose-a:no-underline hover:prose-a:underline',
  'prose-strong:text-text-primary',
  'prose-code:font-jetbrains prose-code:text-brass prose-code:bg-graphite-surface prose-code:rounded prose-code:px-1.5 prose-code:py-0.5',
  'prose-pre:bg-graphite-surface prose-pre:border prose-pre:border-border-hairline',
  'prose-blockquote:border-l-brass prose-blockquote:text-text-secondary prose-blockquote:not-italic',
  'prose-li:font-saira prose-li:text-text-secondary',
  'prose-hr:border-border-hairline',
  'max-w-none',
].join(' ');

/* ── TOC ACCORDION (mobile) ─────────────────────────────────────────────── */

function TocAccordion({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8 rounded-xl border border-border-hairline bg-graphite-surface overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-3 font-saira text-sm font-medium text-text-primary hover:bg-graphite-elevated transition-colors"
        aria-expanded={open}
      >
        <span>İçindekiler</span>
        <span className="font-jetbrains text-brass text-lg leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <ul className="px-5 pb-4 space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-saira text-sm text-iron-light hover:text-brass transition-colors"
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
        <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] text-iron-light mb-3">
          İçindekiler
        </p>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-saira text-sm text-iron-light hover:text-brass transition-colors leading-snug block"
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
    <section className={`py-12 px-4 sm:px-6 bg-graphite-base ${className}`}>
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
