'use client';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
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

const DEFAULT_SELECTED_ID = 1;
const SLUG_TO_ID = new Map(SYMPTOMS.map((symptom) => [symptom.slug, symptom.id]));
const ID_TO_SLUG = new Map(SYMPTOMS.map((symptom) => [symptom.id, symptom.slug]));

function getSelectedIdFromSearch(search: string): number {
  const slug = new URLSearchParams(search).get('s');
  if (!slug) return DEFAULT_SELECTED_ID;
  return SLUG_TO_ID.get(slug) ?? DEFAULT_SELECTED_ID;
}

export function SymptomProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedIdState] = useState(DEFAULT_SELECTED_ID);

  useEffect(() => {
    const syncFromLocation = () => {
      const nextId = getSelectedIdFromSearch(window.location.search);
      setSelectedIdState((current) => (current === nextId ? current : nextId));
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  const setSelectedId = useCallback((id: number) => {
    const slug = ID_TO_SLUG.get(id);
    if (!slug || typeof window === 'undefined') return;

    setSelectedIdState((current) => (current === id ? current : id));

    const params = new URLSearchParams(window.location.search);
    if (id === DEFAULT_SELECTED_ID) {
      params.delete('s');
    } else {
      params.set('s', slug);
    }

    const nextSearch = params.toString();
    const nextUrl = nextSearch
      ? `${window.location.pathname}?${nextSearch}${window.location.hash}`
      : `${window.location.pathname}${window.location.hash}`;

    window.history.replaceState(window.history.state, '', nextUrl);
  }, []);

  const value = useMemo(() => ({ selectedId, setSelectedId }), [selectedId, setSelectedId]);

  return <SymptomContext.Provider value={value}>{children}</SymptomContext.Provider>;
}

export const useSymptom = () => useContext(SymptomContext);
