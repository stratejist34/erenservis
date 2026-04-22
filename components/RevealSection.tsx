'use client';

import { useEffect, useRef } from 'react';

type RevealVariant = 'rise' | 'left' | 'right' | 'drift';

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  stage?: 'default' | 'v1' | 'v2';
  variant?: RevealVariant;
};

// Sayfadaki tüm Reveal elementleri tek bir IntersectionObserver paylaşır —
// her instance için ayrı observer oluşturmak 7-9 observer demekti.
let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );
  return sharedObserver;
}

export default function RevealSection({
  children,
  className,
  delay = 0,
  stage = 'default',
  variant = 'rise',
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getSharedObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : 'reveal'}
      data-delay={delay}
      data-reveal={variant}
      data-stage={stage}
    >
      {children}
    </div>
  );
}
