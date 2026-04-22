'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), {
  ssr: false,
  loading: () => null,
});
const GlobalClickTracker = dynamic(() => import('@/components/tracking/GlobalClickTracker'), {
  ssr: false,
  loading: () => null,
});
const MobileCtaBar = dynamic(() => import('@/components/MobileCtaBar'), {
  ssr: false,
  loading: () => null,
});
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), {
  ssr: false,
  loading: () => null,
});

const IDLE_TIMEOUT_MS = 1200;

export default function DeferredUi() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;
    let idleId: number | null = null;

    const mountDeferredUi = () => setIsReady(true);

    const scheduleMount = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(mountDeferredUi, { timeout: IDLE_TIMEOUT_MS });
        return;
      }

      timeoutId = window.setTimeout(mountDeferredUi, IDLE_TIMEOUT_MS);
    };

    if (document.readyState === 'complete') {
      scheduleMount();
    } else {
      window.addEventListener('load', scheduleMount, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleMount);

      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <ScrollProgress />
      <GlobalClickTracker />
      <MobileCtaBar />
      <FloatingCTA />
    </>
  );
}
