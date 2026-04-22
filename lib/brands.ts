// lib/brands.ts
// Sprint B1 — Marka single source of truth
// Bu dosya mevcut hiçbir bileşeni import etmez; Sprint B2'de bileşenler bu dosyayı import edecek.
// pageContent alanları app/arac/[marka]/page.tsx → MARKA_DATA'dan sadakatle taşındı.

import type { TransmissionFamily } from './transmissions';
import { TRANSMISSIONS } from './transmissions';

export type BrandTransmission = {
  familyId: keyof typeof TRANSMISSIONS;  // tip güvenliği — TRANSMISSIONS'ta olmayan id derleme hatası verir
  isPrimary: boolean;
  models?: string[];
  note?: string;
};

export type BrandGroup =
  | 'german'
  | 'french'
  | 'japanese'
  | 'korean'
  | 'italian'
  | 'british'
  | 'swedish'
  | 'romanian';

export type Brand = {
  // Kimlik
  slug: string;
  name: string;
  displayName?: string;

  // Logo (BrandLogosStrip + BrandSection'dan alınan path'ler)
  logo: {
    src: string;
    width: number;
    height: number;
    filter?: 'default' | 'filled' | 'gradient';
  };

  // Şanzıman ailesi(leri) — N-N ilişkisinin marka tarafı
  transmissions: BrandTransmission[];

  // Marka detay sayfası içeriği (app/arac/[marka]/page.tsx MARKA_DATA'dan taşındı)
  pageContent: {
    title: string;
    description: string;
    keywords: string[];
    models: string[];
    commonFaults: string[];
  };

  // Stratejik metadata
  tier: 1 | 2 | 3;
  group: BrandGroup;
};

export const BRANDS: Brand[] = [

  // ═══════════════════════════════════════════════════════════
  // TIER 1 — SERVİS LOKOMOTİFİ
  // ═══════════════════════════════════════════════════════════

  {
    slug: 'volkswagen',
    name: 'Volkswagen',
    logo: { src: '/images/brands/volkswagen-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'dsg-dq200', isPrimary: true,  models: ['Polo', 'Golf 1.0/1.5 TSI', 'T-Cross', 'T-Roc 1.0', 'Caddy'] },
      { familyId: 'dsg-dq250', isPrimary: false, models: ['Golf GTI eski', 'Tiguan eski', 'Passat B7'] },
      { familyId: 'dsg-dq381', isPrimary: false, models: ['Golf R', 'Tiguan 2.0 TSI', 'Arteon', 'Passat B8'] },
      { familyId: 'dsg-dq500', isPrimary: false, models: ['Amarok V6', 'Touareg 7P V6'], note: 'Yüksek tork ve prestij segmenti' },
      { familyId: 'dsg-dq400e', isPrimary: false, models: ['Golf eHybrid', 'Passat GTE', 'Tiguan eHybrid'] },
      { familyId: 'zf-8hp',    isPrimary: false, models: ['Touareg 3 (CR) 2018+'], note: 'Touareg üst segment ZF 8HP65 kullanır' },
    ],
    pageContent: {
      title: 'Volkswagen Şanzıman Tamiri | DSG & Otomatik Servis',
      description: 'Volkswagen DSG şanzıman tamiri Bostancı. Golf, Passat, Tiguan modellerinde mekatronik, kavrama ve DQ200/DQ250 revizyon. Garantili işçilik.',
      keywords: ['volkswagen şanzıman tamiri', 'vw dsg tamiri', 'golf şanzıman arızası', 'passat dsg tamiri', 'dq200 tamiri'],
      models: ['Golf', 'Passat', 'Tiguan', 'Polo', 'Jetta', 'Caddy'],
      commonFaults: [
        'Vites sarsıntısı ve vuruntu',
        'Mekatronik kart arızası',
        'Kavrama balata aşınması',
        'Basınç tüpü problemi',
        'Yarış halinde vites yukarı çıkmama',
      ],
    },
    tier: 1,
    group: 'german',
  },

  {
    slug: 'renault',
    name: 'Renault',
    logo: { src: '/images/brands/Renault_2021.svg.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'renault-edc', isPrimary: true, models: ['Clio', 'Megane', 'Captur', 'Kadjar'] },
    ],
    pageContent: {
      title: 'Renault Şanzıman Tamiri | EDC & Otomatik Servis Bostancı',
      description: 'Renault EDC ve otomatik şanzıman tamiri. Clio, Megane, Talisman modellerinde EDC7, EDC8 ve tam otomatik revizyon. Uzman servis.',
      keywords: ['renault şanzıman tamiri', 'edc şanzıman tamiri', 'clio edc arızası', 'megane otomatik şanzıman', 'dacia şanzıman tamiri'],
      models: ['Clio', 'Megane', 'Talisman', 'Captur', 'Kadjar', 'Koleos'],
      commonFaults: [
        'EDC vuruntu ve sarsıntı',
        'Kavrama balata aşınması',
        'Aktüatör motor arızası',
        'Vites geçişlerinde gecikme',
        'Gösterge panelinde arıza lambası',
      ],
    },
    tier: 1,
    group: 'french',
  },

  {
    slug: 'ford',
    name: 'Ford',
    logo: { src: '/images/brands/ford-logo.webp', width: 40, height: 40, filter: 'gradient' },
    transmissions: [
      { familyId: 'ford-powershift', isPrimary: true, models: ['Focus', 'Fiesta', 'B-Max', 'EcoSport', 'Mondeo', 'Kuga'] },
    ],
    pageContent: {
      title: 'Ford Şanzıman Tamiri | PowerShift & Otomatik Servis',
      description: 'Ford PowerShift ve otomatik şanzıman tamiri. Focus, Mondeo, Kuga modellerinde 6DCT250, 6DCT450 revizyon ve mekatronik onarım.',
      keywords: ['ford şanzıman tamiri', 'powershift tamiri', 'focus şanzıman arızası', 'mondeo otomatik şanzıman', 'kuga powershift'],
      models: ['Focus', 'Mondeo', 'Kuga', 'Puma', 'Fiesta', 'Transit'],
      commonFaults: [
        'PowerShift vuruntu ve sarsıntı',
        'Kavrama balata aşınması',
        'Mekatronik kart arızası',
        'Vites geçişlerinde zorlanma',
        'Gösterge panelinde şanzıman uyarısı',
      ],
    },
    tier: 1,
    group: 'german',
  },

  {
    slug: 'audi',
    name: 'Audi',
    logo: { src: '/images/brands/audi-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 's-tronic-dl382', isPrimary: true,  models: ['A3 8V/8Y', 'A4 B9', 'A5', 'Q3', 'Q5'] },
      { familyId: 's-tronic-dl501', isPrimary: false, models: ['A4 B8', 'A5', 'A6 C7', 'A7', 'Q5 eski'] },
      { familyId: 'dsg-dq200',     isPrimary: false, models: ['A1', 'A3 8P 1.4'] },
      { familyId: 'zf-8hp',        isPrimary: false, models: ['A6 C8', 'A7', 'A8', 'Q7', 'Q8'] },
    ],
    pageContent: {
      title: 'Audi Şanzıman Tamiri | S-Tronic & Quattro Servis Bostancı',
      description: 'Audi S-tronic (DSG) ve otomatik şanzıman tamiri Bostancı. A3, A4, A6, Q5 modellerinde DQ250, DL501 ve ZF 8HP revizyon. Garantili işçilik.',
      keywords: ['audi şanzıman tamiri', 's-tronic tamiri', 'audi a4 şanzıman arızası', 'audi q5 otomatik şanzıman', 'dl501 tamiri'],
      models: ['A3 (8P/8V/8Y)', 'A4 (B8/B9)', 'A5', 'A6 (C7/C8)', 'Q3', 'Q5', 'TT'],
      commonFaults: [
        'S-tronic vuruntu ve kavrama kayması',
        'DL501 mekatronik solenoid arızası',
        'Kavrama balata aşınması',
        'ZF 8HP tork konvertörü sorunu',
        'Vites geçişlerinde sertlik',
      ],
    },
    tier: 1,
    group: 'german',
  },

  {
    slug: 'bmw',
    name: 'BMW',
    logo: { src: '/images/brands/bmw-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'zf-8hp',      isPrimary: true,  models: ['3 Serisi', '4 Serisi', '5 Serisi', '7 Serisi', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7'], note: 'GA8HP45Z, GA8HP50Z, GA8HP70Z varyantları' },
      { familyId: 'zf-8hp-phev', isPrimary: false, models: ['xDrive40e', '530e', '745e', 'X5 xDrive45e'] },
    ],
    pageContent: {
      title: 'BMW Şanzıman Tamiri | ZF & Steptronic Servis Bostancı',
      description: 'BMW ZF ve Steptronic otomatik şanzıman tamiri Bostancı. 3 Serisi, 5 Serisi, X5 modellerinde GA6HP, GA8HP revizyon ve mekatronik onarım. Garantili işçilik.',
      keywords: ['bmw şanzıman tamiri', 'bmw otomatik şanzıman', 'zf şanzıman tamiri', 'bmw steptronic arıza', 'bmw 3 serisi şanzıman', 'ga8hp tamiri'],
      models: ['3 Serisi (E90/F30/G20)', '5 Serisi (E60/F10/G30)', 'X3', 'X5', '1 Serisi', '7 Serisi'],
      commonFaults: [
        'Vites geçişinde sertlik ve vuruntu',
        'Tork konvertörü kilitleme sorunu',
        'Valf gövdesi (mechatronics) arızası',
        'Yağ basıncı düşüklüğü ve sızıntı',
        'Şanzıman uyarı lambası — limp mode',
      ],
    },
    tier: 1,
    group: 'german',
  },

  {
    slug: 'fiat',
    name: 'Fiat',
    logo: { src: '/images/brands/FIAT-LOGO.svg', width: 40, height: 40 },
    transmissions: [
      { familyId: 'fiat-dct',  isPrimary: true,  models: ['Egea Multijet dizel', '500X', '500L', 'Tipo Multijet'] },
      { familyId: 'aisin-eat', isPrimary: false, models: ['Egea 1.6 E-Torq benzinli', 'Doblo'], note: 'Aisin TF-72SC / TF-80SC' },
    ],
    pageContent: {
      title: 'Fiat Şanzıman Tamiri | DCT & Otomatik Servis Bostancı',
      description: 'Fiat DCT ve otomatik şanzıman tamiri Bostancı. Egea, 500X, Tipo modellerinde çift kavramalı ve Aisin otomatik şanzıman revizyonu. Garantili işçilik.',
      keywords: ['fiat şanzıman tamiri', 'egea şanzıman tamiri', 'fiat dct tamiri', 'egea otomatik şanzıman', 'fiat şanzıman arızası'],
      models: ['Egea Sedan', 'Egea HB', 'Egea Cross', 'Egea SW', '500', '500X', '500L', 'Tipo', 'Doblo'],
      commonFaults: [
        'DCT mekatronik arızası',
        'Kuru kavrama balata aşınması',
        'Mekatronik ısınma sorunları',
        'Vites geçişlerinde sarsıntı',
      ],
    },
    tier: 1,
    group: 'italian',
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 2 — SAĞLAM HACİM
  // ═══════════════════════════════════════════════════════════

  {
    slug: 'skoda',
    name: 'Skoda',
    logo: { src: '/images/brands/skoda-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'dsg-dq200', isPrimary: true,  models: ['Fabia', 'Octavia 1.0–1.6', 'Scala', 'Kamiq'] },
      { familyId: 'dsg-dq381', isPrimary: false, models: ['Octavia 4', 'Kodiaq 2.0', 'Karoq'] },
    ],
    pageContent: {
      title: 'Skoda Şanzıman Tamiri | DSG Servis Bostancı',
      description: 'Skoda DSG şanzıman tamiri Bostancı. Octavia, Superb, Kodiaq modellerinde DQ200, DQ250, DQ381 mekatronik ve kavrama değişimi. Garantili servis.',
      keywords: ['skoda şanzıman tamiri', 'octavia dsg tamiri', 'skoda superb şanzıman', 'skoda kodiaq otomatik şanzıman', 'skoda mekatronik tamiri'],
      models: ['Octavia (3./4. Nesil)', 'Superb (3T/3V)', 'Fabia', 'Kodiaq', 'Karoq', 'Scala'],
      commonFaults: [
        'DQ200 kavrama vuruntu ve sarsıntı',
        'Mekatronik kart arızası',
        'Basınç tüpü çatlaması',
        'Adaptasyon bozulması',
        'Vites geçişlerinde gecikme',
      ],
    },
    tier: 2,
    group: 'german',
  },

  {
    slug: 'seat',
    name: 'Seat',
    displayName: 'Seat / Cupra',
    logo: { src: '/images/brands/seat-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'dsg-dq200',  isPrimary: true,  models: ['Ibiza', 'Leon 1.0–1.5 TSI', 'Arona'] },
      { familyId: 'dsg-dq381',  isPrimary: false, models: ['Leon 4 2.0', 'Ateca 2.0'] },
      { familyId: 'dsg-dq500',  isPrimary: false, models: ['Tarraco 4Drive'], note: 'Yüksek tork segmenti' },
      { familyId: 'dsg-dq400e', isPrimary: false, models: ['Cupra Formentor PHEV', 'Cupra Born'] },
    ],
    pageContent: {
      title: 'Seat & Cupra Şanzıman Tamiri | DSG Servis Bostancı',
      description: 'Seat ve Cupra DSG şanzıman tamiri Bostancı. Leon, Ateca, Cupra Formentor modellerinde DQ200, DQ381 mekatronik ve kavrama değişimi.',
      keywords: ['seat şanzıman tamiri', 'cupra şanzıman tamiri', 'seat leon dsg tamiri', 'seat ateca şanzıman arızası', 'cupra formentor dsg'],
      models: ['Leon (5F/KL)', 'Ibiza', 'Ateca', 'Tarraco', 'Cupra Formentor', 'Cupra Born'],
      commonFaults: [
        'DQ200 kalkışta vuruntu',
        'Kavrama balata aşınması',
        'Mekatronik kart arızası',
        'Basınç tüpü sorunu',
        'Vites geçişlerinde gecikme',
      ],
    },
    tier: 2,
    group: 'german',
  },

  {
    slug: 'peugeot',
    name: 'Peugeot',
    logo: { src: '/images/brands/Peugeot-logo.webp', width: 40, height: 40, filter: 'filled' },
    transmissions: [
      { familyId: 'aisin-eat', isPrimary: true, models: ['208', '308', '2008', '3008', '5008', '508', 'Rifter'] },
    ],
    pageContent: {
      title: 'Peugeot Şanzıman Tamiri | EAT6 & EAT8 Servis Bostancı',
      description: 'Peugeot EAT6 ve EAT8 şanzıman tamiri. 308, 3008, 508 modellerinde valf gövdesi revizyonu ve mekatronik onarım. Garantili servis.',
      keywords: ['peugeot şanzıman tamiri', 'eat6 tamiri', 'eat8 tamiri', '308 şanzıman arızası', '3008 otomatik şanzıman'],
      models: ['308', '3008', '508', '5008', '2008', 'Rifter'],
      commonFaults: [
        'EAT6 valf gövdesi aşınması',
        '2den 3e geçişte takılma',
        'R viteste gecikme',
        'Yağ basıncı düşüklüğü',
        'Adaptasyon hatası',
      ],
    },
    tier: 2,
    group: 'french',
  },

  {
    slug: 'opel',
    name: 'Opel',
    logo: { src: '/images/brands/opel-logo.svg', width: 40, height: 40 },
    transmissions: [
      { familyId: 'aisin-eat', isPrimary: true, models: ['Astra K', 'Insignia', 'Crossland', 'Grandland', 'Corsa F', 'Mokka B'] },
    ],
    pageContent: {
      title: 'Opel Şanzıman Tamiri | EAT6 & Otomatik Servis Bostancı',
      description: 'Opel otomatik şanzıman tamiri. Astra, Insignia, Crossland modellerinde EAT6 ve tam otomatik revizyon. Uzman servis, garantili işçilik.',
      keywords: ['opel şanzıman tamiri', 'astra şanzıman arızası', 'insignia otomatik şanzıman', 'eat6 opel tamiri'],
      models: ['Astra', 'Insignia', 'Crossland', 'Grandland', 'Corsa', 'Mokka'],
      commonFaults: [
        'EAT6 geçiş sertliği',
        'Valf gövdesi aşınması',
        'Tork konvertörü kilitleme sorunu',
        'Yağ basıncı düşüklüğü',
        'Vites geçişlerinde gecikme',
      ],
    },
    tier: 2,
    group: 'german',
  },

  {
    slug: 'mercedes',
    name: 'Mercedes',
    logo: { src: '/images/brands/mercedes-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'mercedes-9g-tronic', isPrimary: true,  models: ['C Serisi W205/W206', 'E Serisi W213', 'S Serisi', 'GLC', 'GLE', 'GLS'] },
      { familyId: 'mercedes-7g-tronic', isPrimary: false, models: ['C Serisi W204', 'E Serisi W212', 'GLA eski', 'GLE eski'] },
    ],
    pageContent: {
      title: 'Mercedes Şanzıman Tamiri | 7G-Tronic & 9G-Tronic Servis Bostancı',
      description: 'Mercedes otomatik şanzıman tamiri Bostancı. C, E, S Serisi ve GLC modellerinde 7G-Tronic, 9G-Tronic revizyon ve mekatronik onarım. Garantili servis.',
      keywords: ['mercedes şanzıman tamiri', '7g-tronic tamiri', '9g-tronic tamiri', 'mercedes c serisi şanzıman', 'mercedes e serisi otomatik şanzıman'],
      models: ['C Serisi (W204/W205/W206)', 'E Serisi (W212/W213)', 'S Serisi', 'GLC', 'GLE', 'CLA', 'A Serisi'],
      commonFaults: [
        '7G-Tronic vites gecikmesi ve sarsıntı',
        'Tork konvertörü kilitleme arızası',
        'Valf gövdesi (Y3/15 solenoid) sorunu',
        'Şanzıman yağ sızıntısı',
        '9G-Tronic solenoid tıkanıklığı',
      ],
    },
    tier: 2,
    group: 'german',
  },

  {
    slug: 'citroen',
    name: 'Citroën',
    logo: { src: '/images/brands/Citroen-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'aisin-eat', isPrimary: true, models: ['C3', 'C4 B7/C41', 'C5 Aircross', 'C5 X', 'Berlingo', 'SpaceTourer'] },
    ],
    pageContent: {
      title: 'Citroën Şanzıman Tamiri | EAT6 & EAT8 Servis Bostancı',
      description: 'Citroën EAT6 ve EAT8 otomatik şanzıman tamiri Bostancı. C3, C4, C5 Aircross modellerinde valf gövdesi revizyonu ve mekatronik onarım. Garantili servis.',
      keywords: ['citroen şanzıman tamiri', 'eat6 citroen tamiri', 'c4 şanzıman arızası', 'c5 aircross otomatik şanzıman', 'berlingo şanzıman tamiri'],
      models: ['C3', 'C4 (B7/C41)', 'C5 Aircross', 'C5 X', 'Berlingo', 'SpaceTourer'],
      commonFaults: [
        'EAT6 2→3 vites takılması',
        'Valf gövdesi solenoid aşınması',
        'R vitesinde gecikme',
        'Yağ basıncı düşüklüğü',
        'Adaptasyon hatası ve vuruntu',
      ],
    },
    tier: 2,
    group: 'french',
  },

  {
    slug: 'dacia',
    name: 'Dacia',
    logo: { src: '/images/brands/Dacia-Logo-2021.svg', width: 40, height: 40 },
    transmissions: [
      { familyId: 'renault-edc', isPrimary: true, models: ['Sandero Stepway', 'Duster EDC', 'Jogger', 'Logan MCV'] },
    ],
    pageContent: {
      title: 'Dacia Şanzıman Tamiri | EDC & Otomatik Servis Bostancı',
      description: 'Dacia EDC otomatik şanzıman tamiri Bostancı. Sandero, Duster, Jogger modellerinde EDC çift kavramalı şanzıman revizyonu ve kavrama değişimi. Garantili servis.',
      keywords: ['dacia şanzıman tamiri', 'dacia edc tamiri', 'duster şanzıman arızası', 'sandero otomatik şanzıman', 'jogger şanzıman tamiri'],
      models: ['Sandero', 'Sandero Stepway', 'Duster', 'Jogger', 'Logan', 'Lodgy'],
      commonFaults: [
        'EDC vuruntu ve sarsıntı',
        'Kuru kavrama balata aşınması',
        'Mekatronik beyin arızası',
        'Şanzıman kilitlenmesi',
      ],
    },
    tier: 2,
    group: 'french',
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 3 — TAMAMLAYICI
  // ═══════════════════════════════════════════════════════════

  {
    slug: 'hyundai',
    name: 'Hyundai',
    logo: { src: '/images/brands/hyundai.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'hyundai-kia-dct',  isPrimary: true,  models: ['i20', 'i30', 'Kona', 'Bayon', 'Elantra Sport'] },
      { familyId: 'hyundai-kia-dct8', isPrimary: false, models: ['Tucson yeni', 'Kona yeni', 'Ioniq 5/6'] },
    ],
    pageContent: {
      title: 'Hyundai Şanzıman Tamiri | DCT & Otomatik Servis Bostancı',
      description: 'Hyundai otomatik ve DCT şanzıman tamiri Bostancı. Tucson, i30, Elantra, Santa Fe modellerinde 6-7 ileri DCT ve tam otomatik revizyon.',
      keywords: ['hyundai şanzıman tamiri', 'hyundai tucson şanzıman arızası', 'hyundai dct tamiri', 'i30 otomatik şanzıman', 'santa fe şanzıman'],
      models: ['Tucson', 'Santa Fe', 'i30', 'Elantra', 'Kona', 'Ioniq (5/6)'],
      commonFaults: [
        'DCT vuruntu ve kavrama kayması',
        'Solenoid valf tıkanıklığı',
        'Tork konvertörü kilitleme sorunu',
        'Şanzıman yağ sızıntısı',
        'Vites geçişlerinde sertlik',
      ],
    },
    tier: 3,
    group: 'korean',
  },

  {
    slug: 'kia',
    name: 'Kia',
    logo: { src: '/images/brands/kia.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'hyundai-kia-dct',  isPrimary: true,  models: ['Ceed', 'ProCeed', 'Stonic', 'Niro'] },
      { familyId: 'hyundai-kia-dct8', isPrimary: false, models: ['Sportage yeni', 'EV6'] },
    ],
    pageContent: {
      title: 'Kia Şanzıman Tamiri | DCT & Otomatik Servis Bostancı',
      description: 'Kia otomatik ve DCT şanzıman tamiri Bostancı. Sportage, Ceed, Stinger modellerinde 6-7 ileri DCT ve tam otomatik revizyon. Garantili servis.',
      keywords: ['kia şanzıman tamiri', 'kia sportage şanzıman arızası', 'kia ceed dct tamiri', 'stinger otomatik şanzıman', 'kia sorento şanzıman'],
      models: ['Sportage', 'Ceed / ProCeed', 'Sorento', 'Stinger', 'EV6', 'Niro'],
      commonFaults: [
        'DCT düşük hızda vuruntu',
        'Tork konvertörü aşınması',
        'Valf gövdesi solenoid arızası',
        'Şanzıman adaptasyon kayması',
        'Yağ sızıntısı',
      ],
    },
    tier: 3,
    group: 'korean',
  },

  {
    slug: 'toyota',
    name: 'Toyota',
    logo: { src: '/images/brands/toyota.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'toyota-cvt', isPrimary: true, models: ['Corolla', 'Yaris', 'Yaris Cross', 'C-HR', 'RAV4', 'Auris'] },
    ],
    pageContent: {
      title: 'Toyota Şanzıman Tamiri | Aisin & CVT Servis Bostancı',
      description: 'Toyota Aisin ve CVT şanzıman tamiri. Corolla, Camry, RAV4 modellerinde U660E, TF-80SC ve hibrit CVT revizyon. Garantili servis.',
      keywords: ['toyota şanzıman tamiri', 'corolla şanzıman arızası', 'toyota cvt tamiri', 'aisin toyota tamiri', 'rav4 otomatik şanzıman'],
      models: ['Corolla', 'Camry', 'RAV4', 'Yaris', 'C-HR', 'Highlander'],
      commonFaults: [
        'CVT kayış aşınması',
        'Aisin valf gövdesi problemi',
        'Tork konvertörü kilitleme sorunu',
        'Vites geçişlerinde sarsıntı',
        'Yağ basıncı düşüklüğü',
      ],
    },
    tier: 3,
    group: 'japanese',
  },

  {
    slug: 'honda',
    name: 'Honda',
    logo: { src: '/images/brands/honda-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'honda-cvt', isPrimary: true, models: ['Civic', 'Jazz', 'HR-V', 'CR-V', 'Accord', 'ZR-V'] },
    ],
    pageContent: {
      title: 'Honda Şanzıman Tamiri | CVT & Otomatik Servis Bostancı',
      description: 'Honda CVT ve otomatik şanzıman tamiri Bostancı. Civic, CR-V, HR-V modellerinde CVT kayış, kasnak ve tam otomatik revizyon. Garantili servis.',
      keywords: ['honda şanzıman tamiri', 'honda cvt tamiri', 'civic cvt arızası', 'cr-v otomatik şanzıman', 'honda şanzıman kayış değişimi'],
      models: ['Civic (10./11. Nesil)', 'CR-V', 'HR-V', 'Jazz', 'Accord', 'ZR-V'],
      commonFaults: [
        'CVT metal kayış aşınması',
        'Kasnak (puli) yüzey hasarı',
        'CVT titreme ve kayma hissi',
        'Soğukta geçiş sorunu',
        'Yağ bozulması kaynaklı vuruntu',
      ],
    },
    tier: 3,
    group: 'japanese',
  },

  {
    slug: 'nissan',
    name: 'Nissan',
    logo: { src: '/images/brands/nissan.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'nissan-jatco-cvt', isPrimary: true, models: ['Qashqai J11/J12', 'X-Trail', 'Juke', 'Micra'] },
    ],
    pageContent: {
      title: 'Nissan Şanzıman Tamiri | CVT & Otomatik Servis Bostancı',
      description: 'Nissan CVT ve otomatik şanzıman tamiri Bostancı. Qashqai, X-Trail, Juke modellerinde Xtronic CVT kayış ve kasnak revizyonu. Garantili servis.',
      keywords: ['nissan şanzıman tamiri', 'nissan cvt tamiri', 'qashqai cvt arızası', 'x-trail otomatik şanzıman', 'nissan xtronic tamiri'],
      models: ['Qashqai (J11/J12)', 'X-Trail', 'Juke', 'Micra', 'Navara', 'Leaf'],
      commonFaults: [
        'Xtronic CVT kayış aşınması',
        'Kasnak yüzey pürüzlenmesi',
        'CVT yağ bozulması',
        'Soğukta titreme ve kayma',
        'Hızlanmada gecikme hissi',
      ],
    },
    tier: 3,
    group: 'japanese',
  },

  {
    slug: 'volvo',
    name: 'Volvo',
    logo: { src: '/images/brands/volvo-logo-2021.svg', width: 40, height: 40 },
    transmissions: [
      { familyId: 'aisin-eat', isPrimary: true, models: ['XC40', 'XC60', 'XC90', 'S60', 'S90', 'V60', 'V90'], note: 'Volvo Geartronic = Aisin AT' },
    ],
    pageContent: {
      title: 'Volvo Şanzıman Tamiri | Geartronic & Otomatik Servis Bostancı',
      description: 'Volvo Geartronic (Aisin) otomatik şanzıman tamiri Bostancı. XC60, XC90, S60, S90 modellerinde valf gövdesi revizyonu ve solenoid onarımı. Garantili servis.',
      keywords: ['volvo şanzıman tamiri', 'volvo geartronic tamiri', 'xc60 şanzıman arızası', 'xc90 otomatik şanzıman', 'volvo aisin tamiri'],
      models: ['XC40', 'XC60', 'XC90', 'S60', 'S90', 'V60', 'V90'],
      commonFaults: [
        'Aisin solenoid kirlenmesi',
        'Tork konvertör kilitleme kavraması aşınması',
        'Şanzıman yağı bozulması (uzun aralık ihmali)',
      ],
    },
    tier: 3,
    group: 'swedish',
  },

  {
    slug: 'land-rover',
    name: 'Land Rover',
    displayName: 'Land Rover / Range Rover',
    logo: { src: '/images/brands/land-rover-logo.webp', width: 40, height: 40 },
    transmissions: [
      { familyId: 'zf-8hp',      isPrimary: true,  models: ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery 4', 'Discovery 5', 'Discovery Sport', 'Defender'], note: 'Tüm modern JLR gam ZF 8HP kullanır' },
      { familyId: 'zf-8hp-phev', isPrimary: false, models: ['Range Rover P400e', 'Range Rover Sport P400e'] },
    ],
    pageContent: {
      title: 'Land Rover / Range Rover ZF 8HP Şanzıman Tamiri | Bostancı',
      description: 'Land Rover ve Range Rover ZF 8HP otomatik şanzıman tamiri. Range Rover, Sport, Velar, Evoque, Discovery ve Defender için Bostancı\'da uzman servis.',
      keywords: ['land rover şanzıman tamiri', 'range rover şanzıman tamiri', 'discovery şanzıman tamiri', 'velar şanzıman', 'evoque şanzıman', 'jlr zf 8hp'],
      models: ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery', 'Discovery Sport', 'Defender', 'Freelander'],
      commonFaults: [
        'ZF 8HP mekatronik arızası',
        'Tork konvertör kilitleme sorunu',
        'Şanzıman yağı sızıntısı',
        'Off-road kullanım kaynaklı erken aşınma',
      ],
    },
    tier: 3,
    group: 'british',
  },
];

// ═══════════════════════════════════════════════════════════
// HELPER FONKSİYONLAR
// ═══════════════════════════════════════════════════════════

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find(b => b.slug === slug);
}

export function getBrandsByTier(tier: 1 | 2 | 3): Brand[] {
  return BRANDS.filter(b => b.tier === tier);
}

export function getBrandsByTransmission(familyId: string): Brand[] {
  return BRANDS.filter(b => b.transmissions.some(t => t.familyId === familyId));
}

export function getPrimaryTransmission(brand: Brand): TransmissionFamily | null {
  const primary = brand.transmissions.find(t => t.isPrimary);
  return primary ? (TRANSMISSIONS[primary.familyId] ?? null) : null;
}

export function getSecondaryTransmissions(brand: Brand): TransmissionFamily[] {
  return brand.transmissions
    .filter(t => !t.isPrimary)
    .map(t => TRANSMISSIONS[t.familyId])
    .filter((t): t is TransmissionFamily => t !== undefined);
}

export function getActiveBrands(): Brand[] {
  return BRANDS;
}

/**
 * Marka + şanzıman başlığını akıllıca birleştirir.
 * Şanzıman displayName'i marka adıyla başlıyorsa marka adını tekrar etmez.
 *
 * Örnekler:
 *   VW + "DSG DQ200"       → "Volkswagen DSG DQ200 Şanzıman Tamiri"
 *   Renault + "Renault EDC" → "Renault EDC Şanzıman Tamiri"  (tek kez)
 *   Land Rover + "ZF 8HP"  → "Land Rover / Range Rover ZF 8HP Şanzıman Tamiri"
 */
export function buildBrandTransmissionTitle(brand: Brand): string {
  const primary = getPrimaryTransmission(brand);
  if (!primary) return `${brand.displayName ?? brand.name} Şanzıman Tamiri`;

  const brandLabel = brand.displayName ?? brand.name;
  const transmissionLabel = primary.displayName;

  const startsWithBrand = transmissionLabel
    .toLowerCase()
    .startsWith(brand.name.toLowerCase());

  if (startsWithBrand) {
    // Şanzıman adı zaten marka adını içeriyor → önüne displayName ekle (farklıysa)
    if (brand.displayName && brand.displayName !== brand.name) {
      return `${brand.displayName} ${transmissionLabel} Şanzıman Tamiri`;
    }
    return `${transmissionLabel} Şanzıman Tamiri`;
  }

  return `${brandLabel} ${transmissionLabel} Şanzıman Tamiri`;
}

/**
 * Kart alt satırı için kısa anchor text: "{Brand} {Transmission} tamiri →"
 */
export function buildBrandTransmissionAnchor(brand: Brand): string {
  const primary = getPrimaryTransmission(brand);
  if (!primary) return `${brand.displayName ?? brand.name} tamiri`;

  const transmissionLabel = primary.displayName;
  const startsWithBrand = transmissionLabel
    .toLowerCase()
    .startsWith(brand.name.toLowerCase());

  if (startsWithBrand) {
    if (brand.displayName && brand.displayName !== brand.name) {
      return `${brand.displayName} ${transmissionLabel} tamiri`;
    }
    return `${transmissionLabel} tamiri`;
  }

  return `${brand.displayName ?? brand.name} ${transmissionLabel} tamiri`;
}

// ═══════════════════════════════════════════════════════════
// BACKWARD COMPAT — mevcut app/arac/[marka]/page.tsx için
// Bu export sayesinde o sayfa Sprint B2'ye kadar değiştirilmeden çalışır.
// ═══════════════════════════════════════════════════════════

export const MARKA_DATA = Object.fromEntries(
  BRANDS.map(b => [b.slug, {
    ad: b.displayName ?? b.name,
    baslik: b.pageContent.title,
    description: b.pageContent.description,
    keywords: b.pageContent.keywords,
    sanzimanlar: b.transmissions
      .map(t => {
        const fam = TRANSMISSIONS[t.familyId];
        return fam ? (fam.customerFacingName ?? fam.displayName) : undefined;
      })
      .filter((name): name is string => Boolean(name)),
    modeller: b.pageContent.models,
    arizalar: b.pageContent.commonFaults,
  }])
) as Record<string, {
  ad: string;
  baslik: string;
  description: string;
  keywords: string[];
  sanzimanlar: string[];
  modeller: string[];
  arizalar: string[];
}>;

// ═══════════════════════════════════════════════════════════
// TİP GÜVENLİĞİ KONTROLÜ
// Her BrandTransmission.familyId TRANSMISSIONS objesinin bir key'i olmalı.
// Yanlış bir id yazılırsa TypeScript derleme hatası verir.
// ═══════════════════════════════════════════════════════════

type _ValidateTransmissionIds = {
  [K in keyof typeof TRANSMISSIONS]: K extends string ? K : never;
};
