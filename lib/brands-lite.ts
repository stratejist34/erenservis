// lib/brands-lite.ts
// Client bundle için minimal marka metadata.
// Header.tsx gibi 'use client' dosyaları bunu import eder; lib/brands.ts tamamı
// (pageContent, keywords, commonFaults) browser'a gitmez.
// Senkronizasyon: tools/validate-data-integrity.mjs her slug için brands.ts ile eşleşmeyi doğrular.

export type BrandLite = {
  slug: string;
  name: string;
  displayName?: string;
  tier: 1 | 2 | 3;
  primaryTransmissionLabel: string; // TRANSMISSIONS[primary].displayName ile aynı olmalı
};

export const BRANDS_LITE: BrandLite[] = [
  // TIER 1 — Servis Lokomotifi
  { slug: 'volkswagen', name: 'Volkswagen', tier: 1, primaryTransmissionLabel: 'DSG DQ200' },
  { slug: 'renault',    name: 'Renault',    tier: 1, primaryTransmissionLabel: 'Renault EDC' },
  { slug: 'ford',       name: 'Ford',       tier: 1, primaryTransmissionLabel: 'Ford PowerShift' },
  { slug: 'audi',       name: 'Audi',       tier: 1, primaryTransmissionLabel: 'S-Tronic DL382' },
  { slug: 'bmw',        name: 'BMW',        tier: 1, primaryTransmissionLabel: 'ZF 8HP' },
  { slug: 'fiat',       name: 'Fiat',       tier: 1, primaryTransmissionLabel: 'Fiat DCT' },

  // TIER 2
  { slug: 'skoda',    name: 'Skoda',                         tier: 2, primaryTransmissionLabel: 'DSG DQ200' },
  { slug: 'seat',     name: 'Seat',     displayName: 'Seat / Cupra', tier: 2, primaryTransmissionLabel: 'DSG DQ200' },
  { slug: 'peugeot',  name: 'Peugeot',                       tier: 2, primaryTransmissionLabel: 'Aisin EAT' },
  { slug: 'opel',     name: 'Opel',                          tier: 2, primaryTransmissionLabel: 'Aisin EAT' },
  { slug: 'mercedes', name: 'Mercedes',                      tier: 2, primaryTransmissionLabel: 'Mercedes 9G-Tronic' },
  { slug: 'citroen',  name: 'Citroën',                       tier: 2, primaryTransmissionLabel: 'Aisin EAT' },
  { slug: 'dacia',    name: 'Dacia',                         tier: 2, primaryTransmissionLabel: 'Renault EDC' },

  // TIER 3
  { slug: 'hyundai',    name: 'Hyundai',                                          tier: 3, primaryTransmissionLabel: '7DCT' },
  { slug: 'kia',        name: 'Kia',                                              tier: 3, primaryTransmissionLabel: '7DCT' },
  { slug: 'toyota',     name: 'Toyota',                                           tier: 3, primaryTransmissionLabel: 'Toyota CVT' },
  { slug: 'honda',      name: 'Honda',                                            tier: 3, primaryTransmissionLabel: 'Honda CVT' },
  { slug: 'nissan',     name: 'Nissan',                                           tier: 3, primaryTransmissionLabel: 'Nissan Jatco CVT' },
  { slug: 'volvo',      name: 'Volvo',                                            tier: 3, primaryTransmissionLabel: 'Aisin EAT' },
  { slug: 'land-rover', name: 'Land Rover', displayName: 'Land Rover / Range Rover', tier: 3, primaryTransmissionLabel: 'ZF 8HP' },
];

export function getLiteBrandsByTier(tier: 1 | 2 | 3): BrandLite[] {
  return BRANDS_LITE.filter((b) => b.tier === tier);
}
