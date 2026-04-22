'use client';
import { createContext, useContext, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SYMPTOMS } from '@/data/symptoms';

type SymptomContextType = {
  selectedId: number;
  setSelectedId: (id: number) => void;
};

// Default: id=1. Pages without SymptomProvider use this gracefully.
const SymptomContext = createContext<SymptomContextType>({
  selectedId: 1,
  setSelectedId: () => {},
});

export function SymptomProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL = tek kaynak. Effect ile sync yerine türev (derive) ederiz — React 19 önerilen pattern.
  const selectedId = useMemo(() => {
    const slug = searchParams.get('s');
    if (!slug) return 1;
    return SYMPTOMS.find((s) => s.slug === slug)?.id ?? 1;
  }, [searchParams]);

  const setSelectedId = useCallback(
    (id: number) => {
      const symptom = SYMPTOMS.find((s) => s.id === id);
      if (!symptom) return;
      const params = new URLSearchParams(searchParams.toString());
      params.set('s', symptom.slug);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const value = useMemo(() => ({ selectedId, setSelectedId }), [selectedId, setSelectedId]);

  return <SymptomContext.Provider value={value}>{children}</SymptomContext.Provider>;
}

export const useSymptom = () => useContext(SymptomContext);
