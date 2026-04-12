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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
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
