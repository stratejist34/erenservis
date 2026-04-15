'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 veya 3
}

interface Props {
  items: TocItem[];
  variant: 'mobile' | 'desktop';
}

export default function TableOfContents({ items, variant }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  if (variant === 'desktop') {
    return (
      <div className="sticky top-24 rounded-xl bg-graphite-surface border border-border-hairline p-5">
        <div className="flex items-center gap-2 mb-4">
          <List className="w-4 h-4 text-brass shrink-0" />
          <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.18em]">
            İçindekiler
          </span>
        </div>
        <nav>
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id} style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}>
                <a
                  href={`#${item.id}`}
                  className={
                    'block py-1 font-saira text-sm leading-snug transition-colors ' +
                    (activeId === item.id
                      ? 'text-brass font-medium'
                      : 'text-text-muted hover:text-text-secondary')
                  }
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  // Mobile — collapsed accordion
  return (
    <details className="mb-8 rounded-xl bg-graphite-surface border border-border-hairline group">
      <summary className="flex items-center justify-between gap-2 px-5 py-4 cursor-pointer list-none">
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-brass" />
          <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.18em]">
            İçindekiler — {items.length} bölüm
          </span>
        </div>
        <span className="font-saira text-text-muted text-xs group-open:hidden">Göster ↓</span>
        <span className="font-saira text-text-muted text-xs hidden group-open:inline">Gizle ↑</span>
      </summary>
      <nav className="px-5 pb-4 pt-1">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id} style={{ paddingLeft: item.level === 3 ? '0.75rem' : '0' }}>
              <a
                href={`#${item.id}`}
                className="block py-1 font-saira text-sm text-text-muted hover:text-text-secondary transition-colors leading-snug"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
