'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const pathname = usePathname();
  const isV1 = pathname?.startsWith('/v1');

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
        className={`fixed left-0 top-0 z-[60] transition-[width,background-color,box-shadow] duration-75 ease-out ${
          isV1
            ? 'h-[3px] bg-[var(--signal-alloy)] shadow-[0_0_18px_rgba(232,225,215,0.3)]'
            : 'h-[2px] bg-accent'
        }`}
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
          className={`fixed bottom-24 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors shadow-lg md:bottom-6 ${
            isV1
              ? 'border-edge-hi bg-surface-0/90 text-fg-soft hover:bg-surface-1 hover:text-[var(--signal-alloy)] md:right-6'
              : 'border-edge bg-surface-3 text-fg-soft hover:bg-surface-2 hover:text-fg md:right-[13rem]'
          }`}
          aria-label="Sayfanin basina don"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
}
