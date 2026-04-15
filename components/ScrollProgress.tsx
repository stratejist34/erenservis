'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[60] h-[2px] bg-brass transition-[width] duration-75 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
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
