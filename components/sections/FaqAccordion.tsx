'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqAccordion({ items, title = 'Sık Sorulan Sorular' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
      {title && (
        <h2 className="font-saira text-2xl font-semibold tracking-[-0.03em] text-text-primary mb-6">{title}</h2>
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-border-hairline bg-graphite-surface">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-saira text-text-primary font-medium hover:bg-graphite-elevated transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="text-sm sm:text-base">{item.question}</span>
              <span className="flex-shrink-0 font-jetbrains text-brass text-lg leading-none">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-5 font-saira text-sm leading-7 text-text-secondary">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
