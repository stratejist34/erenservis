'use client';
import { createContext, useContext, useState } from 'react';

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
  const [selectedId, setSelectedId] = useState(1);
  return (
    <SymptomContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </SymptomContext.Provider>
  );
}

export const useSymptom = () => useContext(SymptomContext);
