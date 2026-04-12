'use client';

import { useEffect, useState, useRef } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollProgress);
      frameRef.current = undefined;
    }

    function onScroll() {
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(updateProgress);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return progress;
}

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
