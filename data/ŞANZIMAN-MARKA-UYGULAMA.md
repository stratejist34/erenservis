Tamam, hazırlıyorum. Üç şey vereceğim sırayla:

Sprint B kapsamı ve yapısal kararlar (kısa, okuman lazım)
lib/brands.ts taslağı (büyük dosya, Claude Code'a referans olacak)
Sprint B Claude Code prompt'u (uygulama talimatı)

Önce — Sprint B Kapsamı ve Riskler
Bu büyük bir refactor olacak. Sprint A'dan çok daha riskli çünkü hem yeni dosya yaratıyoruz hem mevcut 5 dosyayı yeniden bağlıyoruz hem de en kritik olarak app/arac/[marka]/page.tsx'in veri kaynağını değiştiriyoruz. O dosya 16 sayfayı statik üretiyor; yanlış yaparsak 16 sayfa kırılır.
Stratejim: Sprint B'yi iki alt sprint'e bölüyorum:
Sprint B1 — Veri Katmanı (sadece dosya yarat, bağlantı yok)

lib/brands.ts oluştur
lib/transmissions.ts oluştur (şanzıman aileleri ayrı dosya — daha temiz)
TypeScript tipleri tanımla
Veri dolduralım
Helper fonksiyonlar yaz (getBrandsByTransmission, getPrimaryTransmission, getActiveBrands)
Hiçbir mevcut dosyaya dokunma
Build temiz çıkmalı (yeni dosyalar import edilmediği için zaten kırılmaz)

Sprint B2 — Bağlantı Katmanı (mevcut bileşenleri yeni veriye bağla)

app/arac/[marka]/page.tsx → MARKA_DATA'yı lib/brands.ts'ten al
BrandSection.tsx → lib/brands.ts'ten al
BrandLogosStrip.tsx → lib/brands.ts'ten al
Header.tsx → lib/brands.ts'ten al
Footer.tsx → lib/brands.ts'ten al
lib/schema.ts → buildBrandListSchema() artık tüm aktif markaları kapsasın
Her dosya değişikliğinde build kontrolü

Bu ikiye bölme güvenlik kalkanı. B1 başarısızsa B2'ye hiç geçmeyiz. B1 başarılıysa B2 sırasında bir bileşen kırılırsa diğerleri etkilenmez çünkü her biri bağımsız.
Kabul ediyor musun bu ikiye bölmeyi? Eğer "tek seferde yap" dersen onu da yaparım ama riskli. Önerim ikiye bölmek.
Yapısal Karar — Şanzıman Verisi Ayrı Dosya
lib/brands.ts ve lib/transmissions.ts ayrı olsun, çünkü:

Şanzıman aileleri marka-bağımsız — ZF 8HP tek bir varlık, 8 markada kullanılıyor. Her markanın altına kopyalamak yanlış.
/sanziman/[id] sayfaları açabilmek için — ileride şanzıman-bazlı landing page'ler yapacaksak (önemli SEO fırsatı), şanzıman verisi ayrı bir entity olmalı
TypeScript tip güvenliği — Brand.transmissions[].familyId referansı transmissions.ts'teki id'lere bağlı olur, otomatik tip kontrolü yapılır

lib/
├── brands.ts          // 20 marka
├── transmissions.ts   // 19 şanzıman ailesi (15 active + 4 forward-looking)
└── schema.ts          // mevcut, sadece güncellenecek
Şimdi lib/transmissions.ts Taslağı
typescript// lib/transmissions.ts

export type TransmissionType =
  | 'dct-dry'      // Çift kavramalı kuru
  | 'dct-wet'      // Çift kavramalı yaş
  | 'at'           // Tam otomatik (tork konvertörlü)
  | 'cvt'          // Sürekli değişken
  | 'amt'          // Otomatikleştirilmiş manuel
  | 'phev-dct'     // Plug-in hibrit DCT
  | 'phev-at';     // Plug-in hibrit AT

export type ServiceStatus = 'active' | 'forward-looking' | 'legacy';

export type TransmissionFamily = {
  id: string;
  displayName: string;        // "ZF 8HP"
  fullName: string;           // "ZF 8HP Otomatik Şanzıman"
  shortName?: string;         // "ZF8" (kart içi kısa kullanım)
  type: TransmissionType;
  codes: string[];            // ['8HP45', '8HP50', '8HP70', '8HP75']
  manufacturer: string;       // 'ZF Friedrichshafen'
  yearStart: number;
  yearEnd?: number;           // undefined = hâlâ üretimde
  serviceStatus: ServiceStatus;
  tier: 1 | 2 | 3;
  description: string;        // SEO için kısa açıklama (50-100 kelime)
  commonFaults?: string[];    // Yaygın arızalar
};

export const TRANSMISSIONS: Record<string, TransmissionFamily> = {

  // ═══════════════════════════════════════════════════════════
  // TIER 1 — SERVİS ÇEKİRDEĞİ
  // ═══════════════════════════════════════════════════════════

  'dsg-dq200': {
    id: 'dsg-dq200',
    displayName: 'DSG DQ200',
    fullName: 'DSG DQ200 Kuru Kavramalı Şanzıman',
    shortName: 'DQ200',
    type: 'dct-dry',
    codes: ['DQ200', '0AM', '0CW'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2008,
    serviceStatus: 'active',
    tier: 1,
    description: 'Volkswagen Grubunun düşük tork uygulamaları için geliştirdiği 7 ileri kuru çift kavramalı şanzıman. Polo, Golf, A1, A3, Octavia, Ibiza, Leon ve T-Cross gibi 1.0-1.5 TSI motorlu modellerde yaygın. Mekatronik ve kavrama balata sorunlarıyla bilinir.',
    commonFaults: [
      'Mekatronik valf gövdesi arızası',
      'Kuru kavrama balata aşınması',
      'Vites geçişlerinde vuruntu (özellikle 1→2, 2→3)',
      'Çift kütleli volan sorunları',
      'Şanzıman beyni yazılım hataları',
    ],
  },

  'dsg-dq250': {
    id: 'dsg-dq250',
    displayName: 'DSG DQ250',
    fullName: 'DSG DQ250 Yaş Kavramalı Şanzıman',
    shortName: 'DQ250',
    type: 'dct-wet',
    codes: ['DQ250', '02E'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2003,
    serviceStatus: 'active',
    tier: 1,
    description: '6 ileri yaş çift kavramalı, VW Grubunun ilk DSG nesli. Golf GTI, Tiguan, Passat ve Audi A3/TT gibi 2.0 TSI ve 2.0 TDI motorlarda kullanılır. Yaş kavrama yapısı sayesinde DQ200\'den daha dayanıklı ama yine de mekatronik ve solenoid sorunları görülür.',
    commonFaults: [
      'Mekatronik solenoid arızası',
      'Yaş kavrama paketi aşınması',
      'Sıcak halde vites kayması',
      'Şanzıman yağı kirlenmesi',
    ],
  },

  'dsg-dq381': {
    id: 'dsg-dq381',
    displayName: 'DSG DQ381',
    fullName: 'DSG DQ381 Yaş Kavramalı Şanzıman',
    shortName: 'DQ381',
    type: 'dct-wet',
    codes: ['DQ381', '0GC'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2016,
    serviceStatus: 'active',
    tier: 1,
    description: 'DQ250\'nin yerine geliştirilen 7 ileri yaş çift kavramalı şanzıman. Yeni nesil Golf, Tiguan, Passat, Octavia ve Cupra Formentor gibi modellerde kullanılır. 1.5 ton üstü araçlarda standart hâle geldi.',
  },

  'dsg-dq500': {
    id: 'dsg-dq500',
    displayName: 'DSG DQ500',
    fullName: 'DSG DQ500 Yüksek Tork Yaş Kavramalı Şanzıman',
    shortName: 'DQ500',
    type: 'dct-wet',
    codes: ['DQ500', '0BH', '0BT'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2009,
    serviceStatus: 'active',
    tier: 2,
    description: 'Yüksek tork dayanımı için geliştirilen 7 ileri yaş çift kavramalı şanzıman. VW Amarok V6, Touareg eski nesil, Audi RS3, TT-RS ve Cupra Ateca/Formentor 4Drive gibi performans ve prestij modellerinde kullanılır.',
  },

  'dsg-dq400e': {
    id: 'dsg-dq400e',
    displayName: 'DSG DQ400e',
    fullName: 'DSG DQ400e Plug-in Hibrit Şanzıman',
    shortName: 'DQ400e',
    type: 'phev-dct',
    codes: ['DQ400e', '0DD'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2014,
    serviceStatus: 'forward-looking',
    tier: 2,
    description: 'Plug-in hibrit araçlar için geliştirilen 6 ileri yaş çift kavramalı şanzıman. Golf eHybrid, Passat GTE, Tiguan eHybrid, Audi A3 e-tron ve Cupra Formentor PHEV modellerinde kullanılır. Elektrik motoru şanzıman içine entegre.',
  },

  's-tronic-dl382': {
    id: 's-tronic-dl382',
    displayName: 'S-Tronic DL382',
    fullName: 'Audi S-Tronic DL382 Yaş Kavramalı Şanzıman',
    shortName: 'DL382',
    type: 'dct-wet',
    codes: ['DL382', '0CK'],
    manufacturer: 'Audi / Volkswagen Group',
    yearStart: 2015,
    serviceStatus: 'active',
    tier: 2,
    description: 'Audi\'nin enine motor yerleşimli ön çekiş ve quattro modelleri için 7 ileri yaş çift kavramalı şanzıman. A3, A4, A5, Q3, Q5 modellerinde standart.',
  },

  's-tronic-dl501': {
    id: 's-tronic-dl501',
    displayName: 'S-Tronic DL501',
    fullName: 'Audi S-Tronic DL501 Yaş Kavramalı Şanzıman',
    shortName: 'DL501',
    type: 'dct-wet',
    codes: ['DL501', '0B5'],
    manufacturer: 'Audi / Volkswagen Group',
    yearStart: 2008,
    serviceStatus: 'active',
    tier: 2,
    description: '7 ileri yaş çift kavramalı, Audi\'nin uzunlamasına motor yerleşimli quattro modelleri için. A4, A5, A6, A7, Q5 ve S/RS modellerinde kullanılır.',
  },

  'zf-8hp': {
    id: 'zf-8hp',
    displayName: 'ZF 8HP',
    fullName: 'ZF 8HP 8 İleri Otomatik Şanzıman',
    shortName: 'ZF8',
    type: 'at',
    codes: ['8HP45', '8HP50', '8HP55', '8HP65', '8HP70', '8HP75', '8HP90', '8HP95', 'GA8HP45Z', 'GA8HP70X'],
    manufacturer: 'ZF Friedrichshafen',
    yearStart: 2009,
    serviceStatus: 'active',
    tier: 1,
    description: 'Dünyanın en yaygın kullanılan 8 ileri tam otomatik şanzımanı. BMW\'nin neredeyse tüm modellerinde, Audi A6/A7/A8/Q7/Q8, Land Rover, Range Rover, Jaguar, VW Touareg, Maserati ve Rolls-Royce gibi 20\'den fazla markada kullanılır. Mekatronik solenoid ve valf gövdesi arızaları yaygın.',
    commonFaults: [
      'Mekatronik solenoid tıkanması',
      'Tork konvertör kilitleme kavraması aşınması',
      'Valf gövdesi sızdırma',
      'Şanzıman yağı pompası rulman arızası',
      'Yazılım/TCU adaptasyon hataları',
    ],
  },

  'zf-8hp-phev': {
    id: 'zf-8hp-phev',
    displayName: 'ZF 8HP Hibrit',
    fullName: 'ZF 8HP Plug-in Hibrit Otomatik Şanzıman',
    shortName: 'ZF8 PHEV',
    type: 'phev-at',
    codes: ['8P75H', '8HP75H'],
    manufacturer: 'ZF Friedrichshafen',
    yearStart: 2014,
    serviceStatus: 'forward-looking',
    tier: 2,
    description: 'ZF 8HP\'nin plug-in hibrit varyantı. Tork konvertörü yerine elektrik motoru entegre. BMW xDrive40e, 530e, 745e, X5 xDrive45e ve Range Rover P400e modellerinde kullanılır.',
  },

  'renault-edc': {
    id: 'renault-edc',
    displayName: 'Renault EDC',
    fullName: 'Renault Efficient Dual Clutch Şanzıman',
    shortName: 'EDC',
    type: 'dct-dry',
    codes: ['EDC6', 'EDC7', 'DC4'],
    manufacturer: 'Getrag / Renault',
    yearStart: 2010,
    serviceStatus: 'active',
    tier: 1,
    description: '6 ve 7 ileri çift kavramalı otomatik şanzıman. Renault Clio, Megane, Captur, Kadjar, Talisman ve Dacia Duster, Sandero Stepway, Jogger gibi pazar lideri modellerde kullanılır. Türkiye\'de en yaygın çift kavramalı şanzıman ailesi.',
    commonFaults: [
      'Vites geçişlerinde vuruntu',
      'Kuru kavrama balata aşınması',
      'Mekatronik beyin arızası',
      'Şanzıman kilitlenmesi',
    ],
  },

  'ford-powershift': {
    id: 'ford-powershift',
    displayName: 'Ford PowerShift',
    fullName: 'Ford PowerShift Çift Kavramalı Şanzıman',
    shortName: 'PowerShift',
    type: 'dct-dry',
    codes: ['6DCT250', '6DCT450', 'MPS6'],
    manufacturer: 'Getrag / Ford',
    yearStart: 2010,
    serviceStatus: 'active',
    tier: 1,
    description: 'Ford\'un 6 ileri çift kavramalı şanzımanı. 6DCT250 (kuru) Focus, Fiesta, B-Max, EcoSport modellerinde; 6DCT450 (yaş) Mondeo, Kuga, S-Max ve Galaxy modellerinde kullanılır. Kuru tip varyantı kronik kavrama ve mekatronik sorunlarıyla bilinir.',
    commonFaults: [
      'Kuru kavrama balata aşınması',
      'Mekatronik TCM arızası',
      'Vites geçişlerinde sarsıntı ve titreşim',
      'Düşük hızda kasılma',
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 2 — SAĞLAM HACİM
  // ═══════════════════════════════════════════════════════════

  'aisin-eat': {
    id: 'aisin-eat',
    displayName: 'Aisin EAT (PSA/Stellantis)',
    fullName: 'Aisin EAT6 / EAT8 Tam Otomatik Şanzıman',
    shortName: 'Aisin EAT',
    type: 'at',
    codes: ['EAT6', 'EAT8', 'AWF6F25', 'AWF8F35', 'AWF8F45', 'TF-72SC', 'TF-80SC'],
    manufacturer: 'Aisin',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 2,
    description: 'Aisin\'in PSA, Stellantis ve diğer üreticiler için sağladığı 6 ve 8 ileri tam otomatik şanzıman ailesi. Peugeot 208/308/2008/3008/5008, Citroën C3/C4/C5 Aircross, DS Automobiles tüm gam, Opel yeni nesil (Astra/Corsa/Mokka), Fiat Egea benzinli ve Volvo XC40/XC60/XC90 modellerinde kullanılır. Sağlam yapısıyla bilinir.',
    commonFaults: [
      'Solenoid kirlenmesi',
      'Tork konvertör kilitleme kavraması aşınması',
      'Şanzıman yağı bozulması (uzun aralık ihmali)',
    ],
  },

  'mercedes-7g-tronic': {
    id: 'mercedes-7g-tronic',
    displayName: 'Mercedes 7G-Tronic',
    fullName: 'Mercedes-Benz 7G-Tronic Plus 722.9 Şanzıman',
    shortName: '7G-Tronic',
    type: 'at',
    codes: ['722.9', '7G-Tronic Plus', 'NAG2'],
    manufacturer: 'Mercedes-Benz',
    yearStart: 2010,
    yearEnd: 2017,
    serviceStatus: 'active',
    tier: 2,
    description: 'Mercedes\'in 7 ileri tam otomatik şanzımanı. C-Sınıfı (W204/W205), E-Sınıfı (W212), GLA, GLC, GLE ve S-Sınıfı modellerde 2010-2017 arası yaygın. 9G-Tronic ile değiştirildi.',
  },

  'mercedes-9g-tronic': {
    id: 'mercedes-9g-tronic',
    displayName: 'Mercedes 9G-Tronic',
    fullName: 'Mercedes-Benz 9G-Tronic 725.0 Şanzıman',
    shortName: '9G-Tronic',
    type: 'at',
    codes: ['725.0', '9G-Tronic'],
    manufacturer: 'Mercedes-Benz',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 2,
    description: 'Mercedes\'in 9 ileri tam otomatik şanzımanı. C, E, S, CLS, GLC, GLE, GLS ve G-Class modellerinde 2013\'ten itibaren standart. Yumuşak vites geçişleri ve geniş tork aralığıyla bilinir.',
  },

  'fiat-dct': {
    id: 'fiat-dct',
    displayName: 'Fiat DCT',
    fullName: 'Fiat Dual Clutch Transmission',
    shortName: 'Fiat DCT',
    type: 'dct-dry',
    codes: ['C635 DDCT', '6-DDCT'],
    manufacturer: 'Fiat / Stellantis',
    yearStart: 2010,
    serviceStatus: 'active',
    tier: 2,
    description: '6 ileri çift kuru kavramalı şanzıman. Fiat Egea Multijet dizel modellerinde, 500X, 500L, Tipo ve bazı Alfa Romeo modellerinde kullanılır. Türkiye pazarının en çok satan modeli olan Egea\'da yaygın.',
    commonFaults: [
      'Kuru kavrama balata aşınması',
      'Mekatronik ısınma sorunları',
      'Vites geçişlerinde sarsıntı',
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // TIER 3 — TAMAMLAYICI
  // ═══════════════════════════════════════════════════════════

  'hyundai-kia-dct': {
    id: 'hyundai-kia-dct',
    displayName: 'Hyundai/Kia DCT',
    fullName: 'Hyundai-Kia 7DCT Çift Kavramalı Şanzıman',
    shortName: '7DCT',
    type: 'dct-dry',
    codes: ['7DCT300', '7DCT', 'D7UF1'],
    manufacturer: 'Hyundai-Kia',
    yearStart: 2015,
    serviceStatus: 'active',
    tier: 3,
    description: '7 ileri çift kavramalı şanzıman. Hyundai i20, i30, Tucson, Kona, Bayon ve Kia Ceed, Stonic, Sportage, Niro modellerinde kullanılır. Kuru kavrama yapısı.',
  },

  'hyundai-kia-dct8': {
    id: 'hyundai-kia-dct8',
    displayName: 'Hyundai/Kia 8DCT',
    fullName: 'Hyundai-Kia 8DCT Yeni Nesil Çift Kavramalı',
    shortName: '8DCT',
    type: 'dct-wet',
    codes: ['8DCT'],
    manufacturer: 'Hyundai-Kia',
    yearStart: 2020,
    serviceStatus: 'forward-looking',
    tier: 3,
    description: 'Hyundai-Kia\'nın yeni nesil 8 ileri yaş çift kavramalı şanzımanı. Yeni Tucson, Kona, Sportage ve Ioniq modellerinde kullanılmaya başlandı.',
  },

  'honda-cvt': {
    id: 'honda-cvt',
    displayName: 'Honda CVT',
    fullName: 'Honda CVT Sürekli Değişken Şanzıman',
    shortName: 'Honda CVT',
    type: 'cvt',
    codes: ['CVT'],
    manufacturer: 'Honda',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Honda\'nın geliştirdiği sürekli değişken şanzıman. Civic, City, HR-V, CR-V, Jazz ve Accord modellerinde kullanılır. Sağlamlığıyla bilinir.',
  },

  'toyota-cvt': {
    id: 'toyota-cvt',
    displayName: 'Toyota CVT / Multidrive S',
    fullName: 'Toyota Multidrive S Sürekli Değişken Şanzıman',
    shortName: 'Toyota CVT',
    type: 'cvt',
    codes: ['K310', 'K311', 'K313', 'K114'],
    manufacturer: 'Aisin / Toyota',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Toyota\'nın Aisin ortaklığıyla geliştirdiği sürekli değişken şanzıman. Corolla, Yaris, Yaris Cross, RAV4, C-HR ve Auris modellerinde kullanılır. Hibrit modellerde e-CVT varyantı.',
  },

  'nissan-jatco-cvt': {
    id: 'nissan-jatco-cvt',
    displayName: 'Nissan Jatco CVT',
    fullName: 'Nissan Jatco CVT Sürekli Değişken Şanzıman',
    shortName: 'Jatco CVT',
    type: 'cvt',
    codes: ['JF015E', 'JF016E', 'JF017E', 'JF020E'],
    manufacturer: 'Jatco / Nissan',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Jatco\'nun Nissan için ürettiği CVT şanzıman ailesi. Qashqai, Juke, X-Trail ve Micra modellerinde kullanılır. Bazı varyantları aşınma sorunlarıyla bilinir.',
  },
};

// ═══════════════════════════════════════════════════════════
// HELPER FONKSİYONLAR
// ═══════════════════════════════════════════════════════════

export function getActiveTransmissions(): TransmissionFamily[] {
  return Object.values(TRANSMISSIONS).filter(t => t.serviceStatus === 'active');
}

export function getForwardLookingTransmissions(): TransmissionFamily[] {
  return Object.values(TRANSMISSIONS).filter(t => t.serviceStatus === 'forward-looking');
}

export function getTransmissionsByTier(tier: 1 | 2 | 3): TransmissionFamily[] {
  return Object.values(TRANSMISSIONS).filter(t => t.tier === tier);
}

export function getTransmissionById(id: string): TransmissionFamily | undefined {
  return TRANSMISSIONS[id];
}
Bu dosya ~350 satır olur. Detaylı, ama her alan SEO veya UX'e hizmet ediyor.
lib/brands.ts Taslağı
20 markayı tek mesajda dolduramam, çok uzun olur. Bu yüzden taslakta 3 markayı tam göstereceğim (VW, BMW, Land Rover — N-N ilişkisinin farklı örnekleri), diğer 17'yi prompt'a referans olarak vereceğim, Claude Code aynı pattern'i takip ederek dolduracak. Zaten elimizdeki MARKA_DATA'yı baz alacak, sıfırdan yazmıyor.
typescript// lib/brands.ts

import type { TransmissionFamily } from './transmissions';
import { TRANSMISSIONS } from './transmissions';

export type BrandTransmission = {
  familyId: keyof typeof TRANSMISSIONS;  // tip güvenliği
  isPrimary: boolean;
  models?: string[];
  note?: string;
};

export type Brand = {
  // Kimlik
  slug: string;
  name: string;
  displayName?: string;

  // Logo (mevcut BrandLogosStrip + BrandSection'dan)
  logo: {
    src: string;
    width: number;
    height: number;
    filter?: 'default' | 'filled' | 'gradient';
  };

  // Şanzıman ailesi(leri) — N-N ilişkisinin marka tarafı
  transmissions: BrandTransmission[];

  // Marka detay sayfası içeriği (mevcut MARKA_DATA'dan taşınacak)
  pageContent: {
    title: string;
    description: string;
    keywords: string[];
    models: string[];
    commonFaults: string[];
  };

  // Stratejik metadata
  tier: 1 | 2 | 3;
  group?: 'german' | 'french' | 'japanese' | 'korean' | 'italian' | 'british' | 'swedish' | 'romanian';
};

export const BRANDS: Brand[] = [

  // ═══════════════════════════════════════════════════════════
  // TIER 1 — SERVİS LOKOMOTİFİ
  // ═══════════════════════════════════════════════════════════

  {
    slug: 'volkswagen',
    name: 'Volkswagen',
    logo: { src: '/logos/vw.svg', width: 48, height: 48 },
    transmissions: [
      { familyId: 'dsg-dq200', isPrimary: true, models: ['Polo', 'Golf 1.0/1.5 TSI', 'T-Cross', 'T-Roc 1.0', 'Caddy'] },
      { familyId: 'dsg-dq250', isPrimary: false, models: ['Golf GTI eski', 'Tiguan eski', 'Passat B7'] },
      { familyId: 'dsg-dq381', isPrimary: false, models: ['Golf R', 'Tiguan 2.0 TSI', 'Arteon', 'Passat B8'] },
      { familyId: 'dsg-dq500', isPrimary: false, models: ['Amarok V6', 'Touareg 7P V6'], note: 'Yüksek tork ve prestij segmenti' },
      { familyId: 'dsg-dq400e', isPrimary: false, models: ['Golf eHybrid', 'Passat GTE', 'Tiguan eHybrid'] },
      { familyId: 'zf-8hp', isPrimary: false, models: ['Touareg 3 (CR) 2018+'], note: 'Touareg üst segment için ZF 8HP65 kullanır' },
    ],
    pageContent: {
      title: 'Volkswagen DSG Şanzıman Tamiri | Bostancı',
      description: 'Volkswagen DSG şanzıman tamiri, mekatronik onarımı ve kavrama değişimi. DQ200, DQ250, DQ381, DQ500 ve hibrit DQ400e modelleri için Bostancı\'da uzman servis.',
      keywords: ['volkswagen dsg tamiri', 'vw şanzıman tamiri', 'dq200 tamiri', 'dq250 tamiri', 'dsg mekatronik'],
      models: ['Polo', 'Golf', 'Passat', 'Tiguan', 'T-Roc', 'T-Cross', 'Touareg', 'Amarok', 'Caddy', 'Arteon'],
      commonFaults: [
        'DSG mekatronik arızası',
        'Kuru kavrama balata aşınması',
        'Vites geçişlerinde vuruntu',
        'Çift kütleli volan sorunları',
      ],
    },
    tier: 1,
    group: 'german',
  },

  {
    slug: 'bmw',
    name: 'BMW',
    logo: { src: '/logos/bmw.svg', width: 48, height: 48 },
    transmissions: [
      { familyId: 'zf-8hp', isPrimary: true, models: ['3 Serisi', '4 Serisi', '5 Serisi', '7 Serisi', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7'], note: 'GA8HP45Z, GA8HP50Z, GA8HP70Z varyantları' },
      { familyId: 'zf-8hp-phev', isPrimary: false, models: ['xDrive40e', '530e', '745e', 'X5 xDrive45e'] },
    ],
    pageContent: {
      title: 'BMW ZF 8HP Şanzıman Tamiri | Bostancı',
      description: 'BMW ZF 8HP otomatik şanzıman tamiri, mekatronik onarımı ve solenoid değişimi. 8HP45, 8HP50, 8HP70, 8HP75 tüm varyantlar için Bostancı\'da uzman servis.',
      keywords: ['bmw şanzıman tamiri', 'zf 8hp tamiri', 'bmw mekatronik', '8hp45 tamiri', '8hp70 tamiri', 'ga8hp tamiri'],
      models: ['1 Serisi', '2 Serisi', '3 Serisi', '4 Serisi', '5 Serisi', '6 Serisi', '7 Serisi', '8 Serisi', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4'],
      commonFaults: [
        'ZF 8HP mekatronik solenoid arızası',
        'Tork konvertör kilitleme aşınması',
        'Şanzıman yağı sızıntısı',
        'TCU adaptasyon hataları',
      ],
    },
    tier: 1,
    group: 'german',
  },

  // ... 4 marka daha Tier 1: Renault, Audi, Ford, Fiat

  // ═══════════════════════════════════════════════════════════
  // TIER 2 — SAĞLAM HACİM (7 marka)
  // ═══════════════════════════════════════════════════════════

  // ... Skoda, Seat/Cupra, Peugeot, Opel, Mercedes, Citroën, Dacia

  // ═══════════════════════════════════════════════════════════
  // TIER 3 — TAMAMLAYICI (7 marka)
  // ═══════════════════════════════════════════════════════════

  // ... Hyundai, Kia, Toyota, Honda, Nissan, Volvo, Land Rover

  {
    slug: 'land-rover',
    name: 'Land Rover',
    displayName: 'Land Rover / Range Rover',
    logo: { src: '/logos/land-rover.svg', width: 48, height: 48 },
    transmissions: [
      { familyId: 'zf-8hp', isPrimary: true, models: ['Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Discovery 4', 'Discovery 5', 'Discovery Sport', 'Defender'], note: 'Tüm modern JLR gam ZF 8HP kullanır' },
      { familyId: 'zf-8hp-phev', isPrimary: false, models: ['Range Rover P400e', 'Range Rover Sport P400e'] },
    ],
    pageContent: {
      title: 'Land Rover / Range Rover ZF 8HP Şanzıman Tamiri | Bostancı',
      description: 'Land Rover ve Range Rover ZF 8HP otomatik şanzıman tamiri. Range Rover, Sport, Velar, Evoque, Discovery ve Defender için Bostancı\'da uzman servis. BMW ZF 8HP uzmanlığıyla aynı teknoloji.',
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
  return primary ? TRANSMISSIONS[primary.familyId] : null;
}

export function getSecondaryTransmissions(brand: Brand): TransmissionFamily[] {
  return brand.transmissions
    .filter(t => !t.isPrimary)
    .map(t => TRANSMISSIONS[t.familyId])
    .filter((t): t is TransmissionFamily => t !== undefined);
}

export function getActiveBrands(): Brand[] {
  return BRANDS;  // şu an hepsi aktif, ileride filtre eklenebilir
}

// MARKA_DATA uyumluluk katmanı — mevcut app/arac/[marka]/page.tsx için
// Bu sayede o sayfa hiçbir refactor gerektirmeden çalışmaya devam eder
export const MARKA_DATA = Object.fromEntries(
  BRANDS.map(b => [b.slug, {
    ad: b.name,
    baslik: b.pageContent.title,
    description: b.pageContent.description,
    keywords: b.pageContent.keywords,
    sanzimanlar: b.transmissions.map(t => TRANSMISSIONS[t.familyId]?.displayName).filter(Boolean),
    modeller: b.pageContent.models,
    arizalar: b.pageContent.commonFaults,
  }])
);
