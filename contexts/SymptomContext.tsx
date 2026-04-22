'use client';
import { createContext, useContext, useState, useEffect } from 'react';
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
  const [selectedId, setSelectedIdState] = useState(1);

  useEffect(() => {
    const slug = searchParams.get('s');
    if (slug) {
      const found = SYMPTOMS.find((s) => s.slug === slug);
      if (found) setSelectedIdState(found.id);
    }
  }, [searchParams]);

  function setSelectedId(id: number) {
    setSelectedIdState(id);
    const symptom = SYMPTOMS.find((s) => s.id === id);
    if (symptom) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('s', symptom.slug);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }

  return (
    <SymptomContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SymptomContext.Provider>
  );
}

export const useSymptom = () => useContext(SymptomContext);
