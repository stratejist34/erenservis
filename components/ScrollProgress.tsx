'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastShowTop = false;

    const update = () => {
      ticking = false;
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      const bar = barRef.current;
      if (bar) {
        bar.style.width = `${pct}%`;
        bar.setAttribute('aria-valuenow', String(Math.round(pct)));
      }
      const next = scrolled > 400;
      if (next !== lastShowTop) {
        lastShowTop = next;
        setShowTop(next);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        ref={barRef}
        className="fixed left-0 top-0 z-[60] h-[2px] bg-brass transition-[width] duration-75 ease-out"
        style={{ width: '0%' }}
        role="progressbar"
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Sayfa ilerleme cubugu"
      />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-5 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-border-hairline bg-graphite-elevated text-text-secondary shadow-lg transition-colors hover:bg-graphite-surface hover:text-text-primary md:bottom-20"
          aria-label="Sayfanin basina don"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
