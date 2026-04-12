// lib/transmissions.ts
// Sprint B1 — Şanzıman ailesi single source of truth
// Bu dosya mevcut hiçbir bileşeni import etmez; Sprint B2'de bileşenler bu dosyayı import edecek.

export type TransmissionType =
  | 'dct-dry'   // Çift kavramalı kuru
  | 'dct-wet'   // Çift kavramalı yaş
  | 'at'        // Tam otomatik (tork konvertörlü)
  | 'cvt'       // Sürekli değişken
  | 'amt'       // Otomatikleştirilmiş manuel
  | 'phev-dct'  // Plug-in hibrit DCT
  | 'phev-at';  // Plug-in hibrit AT

export type ServiceStatus = 'active' | 'forward-looking' | 'legacy';

export type TransmissionFamily = {
  id: string;
  displayName: string;          // "ZF 8HP" — teknik kod adı
  customerFacingName?: string;  // "ZF 8 ileri tam otomatik" — müşteri dili, sayfa listelerinde kullanılır
  fullName: string;             // "ZF 8HP 8 İleri Otomatik Şanzıman"
  shortName?: string;           // "ZF8" (kart içi kısa kullanım)
  type: TransmissionType;
  codes: string[];           // ['8HP45', '8HP50', '8HP70', '8HP75']
  manufacturer: string;      // 'ZF Friedrichshafen'
  yearStart: number;
  yearEnd?: number;          // undefined = hâlâ üretimde
  serviceStatus: ServiceStatus;
  tier: 1 | 2 | 3;
  description: string;       // SEO için kısa açıklama
  commonFaults?: string[];   // Yaygın arızalar
  faqs?: Array<{ question: string; answer: string }>;  // Sayfa FAQ bölümü
};

export const TRANSMISSIONS: Record<string, TransmissionFamily> = {

  // ═══════════════════════════════════════════════════════════
  // TIER 1 — SERVİS ÇEKİRDEĞİ
  // ═══════════════════════════════════════════════════════════

  'dsg-dq200': {
    id: 'dsg-dq200',
    displayName: 'DSG DQ200',
    customerFacingName: 'DSG DQ200 (7 ileri kuru kavrama)',
    fullName: 'DSG DQ200 Kuru Kavramalı Şanzıman',
    shortName: 'DQ200',
    type: 'dct-dry',
    codes: ['DQ200', '0AM', '0CW'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2008,
    serviceStatus: 'active',
    tier: 1,
    description: 'Volkswagen Grubunun düşük tork uygulamaları için geliştirdiği 7 ileri kuru çift kavramalı şanzıman. Polo, Golf, A1, A3, Octavia, Ibiza, Leon ve T-Cross gibi 1.0–1.5 TSI motorlu modellerde yaygın. Mekatronik ve kavrama balata sorunlarıyla bilinir.',
    commonFaults: [
      'Mekatronik valf gövdesi arızası',
      'Kuru kavrama balata aşınması',
      'Vites geçişlerinde vuruntu (özellikle 1→2, 2→3)',
      'Çift kütleli volan sorunları',
      'Şanzıman beyni yazılım hataları',
    ],
    faqs: [
      { question: 'DQ200 şanzıman ne kadar dayanır?', answer: 'Düzenli mekatronik bakımı ve yazılım güncellemesiyle 200.000 km ve üzeri ömür beklenir. Kuru kavrama diskleri genellikle 80.000–120.000 km arasında yenilenir.' },
      { question: 'DQ200 titremesi ne zaman tehlikeli olur?', answer: 'Soğuk motorla 5–10 dakikadan uzun süren titreme, ani vites atlamayan adaptasyon veya P hata kodları varsa servis gereklidir. Geciktirmek mekatronik hasarını artırır.' },
      { question: 'DQ200 ile DSG aynı şey mi?', answer: 'DSG, Volkswagen Grubu\'nun çift kavramalı şanzıman ailesi adıdır. DQ200 bu ailenin 7 ileri kuru kavramalı versiyonudur. DQ250 ise ıslak kavramalı 6 ileri versiyondur.' },
      { question: 'DQ200 mekatronik tamiri mi, yoksa yenileme mi?', answer: 'Solenoid veya sensör arızalarında revizyon yeterlidir. Mekatronik beyninin elektronik kartı hasar görmüşse yenileme gerekebilir. Doğru teşhis maliyeti 2–3 katına düşürür.' },
      { question: 'DQ200 tamiri Bostancı\'da yapılıyor mu?', answer: 'Evet. Eren Servis, Bostancı Oto Sanayi Sitesi\'nde DQ200 mekatronik revizyonu, kavrama değişimi ve yazılım güncellemesi yapıyor. Ücretsiz ön tanı için arayabilirsiniz.' },
    ],
  },

  'dsg-dq250': {
    id: 'dsg-dq250',
    displayName: 'DSG DQ250',
    customerFacingName: 'DSG DQ250 (6 ileri yaş kavrama)',
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
    faqs: [
      { question: 'DQ250 ne kadar dayanır?', answer: 'Islak kavrama sistemi sayesinde DQ200\'den daha uzun ömürlüdür. Bakımlı kullanımda 200.000 km üzeri beklenir. Şanzıman yağı 60.000 km\'de değiştirilmelidir.' },
      { question: 'DQ250 mekatronik tamiri gerekiyor mu?', answer: 'DQ250 mekatronik arızaları DQ200 kadar sık değildir. En yaygın sorun mekatronik yağ sızıntısıdır. Erken müdahale mekatronik yenilenmesini önler.' },
      { question: 'DQ250 hangi araçlarda var?', answer: 'Volkswagen Passat 2.0 TDI/TSI, Golf GTI, Audi A3 2.0 TFSI, Skoda Octavia RS ve benzeri yüksek torklu VAG grubu araçlarda yaygındır.' },
      { question: 'DQ250 ile DQ200 farkı nedir?', answer: 'DQ250 ıslak kavramalı (yağ banyosunda) 6 ileri, DQ200 kuru kavramalı 7 ileri şanzımandır. DQ250 daha yüksek tork kapasitesi sunar; kavrama titremesi DQ200\'e göre çok daha azdır.' },
      { question: 'DQ250 tamiri Bostancı\'da yapılıyor mu?', answer: 'Evet, Eren Servis Bostancı Oto Sanayi Sitesi\'nde DQ250 mekatronik, kavrama ve yağ değişimi hizmetleri verilmektedir.' },
    ],
  },

  'dsg-dq381': {
    id: 'dsg-dq381',
    displayName: 'DSG DQ381',
    customerFacingName: 'DSG DQ381 (7 ileri yaş kavrama, yeni nesil)',
    fullName: 'DSG DQ381 Yaş Kavramalı Şanzıman',
    shortName: 'DQ381',
    type: 'dct-wet',
    codes: ['DQ381', '0GC'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2016,
    serviceStatus: 'active',
    tier: 1,
    description: 'DQ250\'nin yerine geliştirilen 7 ileri yaş çift kavramalı şanzıman. Yeni nesil Golf, Tiguan, Passat, Octavia ve Cupra Formentor gibi modellerde kullanılır. 1.5 ton üstü araçlarda standart hâle geldi.',
    commonFaults: [
      'Mekatronik solenoid tıkanması',
      'Şanzıman yağı bozulması',
      'Vites geçişlerinde gecikme',
    ],
  },

  'zf-8hp': {
    id: 'zf-8hp',
    displayName: 'ZF 8HP',
    customerFacingName: 'ZF 8HP (8 ileri tam otomatik)',
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
    faqs: [
      { question: 'ZF 8HP şanzıman ne kadar dayanır?', answer: 'Düzgün bakımla 300.000 km ve üzeri dayanır. Şanzıman yağı üretici önerisi olan 80.000 km\'de değil, 60.000 km\'de değiştirilmesi uzun ömür için önerilir.' },
      { question: 'ZF 8HP yağ değişimi ne sıklıkla yapılmalı?', answer: 'Üretici ömür boyu doldurma der; ancak uzman görüşü 60.000–80.000 km\'de değişim yönündedir. Eski yağ valf gövdesini kirletir ve vites gecikmesine yol açar.' },
      { question: 'ZF 8HP revizyonu mu değişimi mi?', answer: 'Valf gövdesi revizyonu ve yağ değişimi çoğu durumda yeterlidir. Tam revizyon ancak iç mekanik hasar (dişli veya plaka aşınması) durumunda gerekir.' },
      { question: 'ZF 8HP hangi araçlarda var?', answer: 'BMW 3/5/7 Serisi, X3/X5, Audi A6/A7/A8/Q7/Q8, Land Rover Discovery, Range Rover ve diğer premium araçlarda kullanılmaktadır.' },
      { question: 'BMW şanzıman tamiri Bostancı\'da yapılıyor mu?', answer: 'Evet. Eren Servis, ZF 8HP dahil BMW ve diğer premium marka şanzıman tamirlerini Bostancı\'da gerçekleştirmektedir.' },
    ],
  },

  'renault-edc': {
    id: 'renault-edc',
    displayName: 'Renault EDC',
    customerFacingName: 'EDC 6-7 ileri çift kavrama',
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
    customerFacingName: 'PowerShift 6 ileri çift kavrama',
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

  'dsg-dq500': {
    id: 'dsg-dq500',
    displayName: 'DSG DQ500',
    customerFacingName: 'DSG DQ500 (7 ileri yüksek tork, yaş kavrama)',
    fullName: 'DSG DQ500 Yüksek Tork Yaş Kavramalı Şanzıman',
    shortName: 'DQ500',
    type: 'dct-wet',
    codes: ['DQ500', '0BH', '0BT'],
    manufacturer: 'Volkswagen Group',
    yearStart: 2009,
    serviceStatus: 'active',
    tier: 2,
    description: 'Yüksek tork dayanımı için geliştirilen 7 ileri yaş çift kavramalı şanzıman. VW Amarok V6, Touareg eski nesil, Audi RS3, TT-RS ve Cupra Ateca/Formentor 4Drive gibi performans ve prestij modellerinde kullanılır.',
    commonFaults: [
      'Mekatronik solenoid arızası',
      'Yaş kavrama paketi aşınması',
      'Şanzıman yağı kirlenmesi',
    ],
  },

  'dsg-dq400e': {
    id: 'dsg-dq400e',
    displayName: 'DSG DQ400e',
    customerFacingName: 'DSG DQ400e (Plug-in Hibrit)',
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
    customerFacingName: 'S-Tronic DL382 (7 ileri yaş kavrama)',
    fullName: 'Audi S-Tronic DL382 Yaş Kavramalı Şanzıman',
    shortName: 'DL382',
    type: 'dct-wet',
    codes: ['DL382', '0CK'],
    manufacturer: 'Audi / Volkswagen Group',
    yearStart: 2015,
    serviceStatus: 'active',
    tier: 2,
    description: 'Audi\'nin enine motor yerleşimli ön çekiş ve quattro modelleri için 7 ileri yaş çift kavramalı şanzıman. A3, A4, A5, Q3, Q5 modellerinde standart.',
    commonFaults: [
      'Mekatronik solenoid arızası',
      'Kavrama paketi aşınması',
      'Vites geçişlerinde sertlik',
    ],
  },

  's-tronic-dl501': {
    id: 's-tronic-dl501',
    displayName: 'S-Tronic DL501',
    customerFacingName: 'S-Tronic DL501 (7 ileri quattro, yaş kavrama)',
    fullName: 'Audi S-Tronic DL501 Yaş Kavramalı Şanzıman',
    shortName: 'DL501',
    type: 'dct-wet',
    codes: ['DL501', '0B5'],
    manufacturer: 'Audi / Volkswagen Group',
    yearStart: 2008,
    serviceStatus: 'active',
    tier: 2,
    description: '7 ileri yaş çift kavramalı, Audi\'nin uzunlamasına motor yerleşimli quattro modelleri için. A4, A5, A6, A7, Q5 ve S/RS modellerinde kullanılır.',
    commonFaults: [
      'Mekatronik solenoid arızası',
      'Kavrama paketi aşınması',
      'ZF 8HP tork konvertörü sorunu',
    ],
  },

  'zf-8hp-phev': {
    id: 'zf-8hp-phev',
    displayName: 'ZF 8HP Hibrit',
    customerFacingName: 'ZF 8HP Plug-in Hibrit',
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

  'aisin-eat': {
    id: 'aisin-eat',
    displayName: 'Aisin EAT',
    customerFacingName: 'Aisin EAT6 / EAT8 (6-8 ileri tam otomatik)',
    fullName: 'Aisin EAT6 / EAT8 Tam Otomatik Şanzıman',
    shortName: 'Aisin EAT',
    type: 'at',
    codes: ['EAT6', 'EAT8', 'AWF6F25', 'AWF8F35', 'AWF8F45', 'TF-72SC', 'TF-80SC'],
    manufacturer: 'Aisin',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 2,
    description: 'Aisin\'in PSA, Stellantis ve diğer üreticiler için sağladığı 6 ve 8 ileri tam otomatik şanzıman ailesi. Peugeot 208/308/2008/3008/5008, Citroën C3/C4/C5 Aircross, DS Automobiles, Opel yeni nesil (Astra/Corsa/Mokka), Fiat Egea benzinli ve Volvo XC40/XC60/XC90 modellerinde kullanılır.',
    commonFaults: [
      'Solenoid kirlenmesi',
      'Tork konvertör kilitleme kavraması aşınması',
      'Şanzıman yağı bozulması (uzun aralık ihmali)',
    ],
  },

  'mercedes-7g-tronic': {
    id: 'mercedes-7g-tronic',
    displayName: 'Mercedes 7G-Tronic',
    customerFacingName: '7G-Tronic 722.9 (7 ileri tam otomatik)',
    fullName: 'Mercedes-Benz 7G-Tronic Plus 722.9 Şanzıman',
    shortName: '7G-Tronic',
    type: 'at',
    codes: ['722.9', '7G-Tronic Plus', 'NAG2'],
    manufacturer: 'Mercedes-Benz',
    yearStart: 2010,
    yearEnd: 2017,
    serviceStatus: 'active',
    tier: 2,
    description: 'Mercedes\'in 7 ileri tam otomatik şanzımanı. C-Sınıfı (W204/W205), E-Sınıfı (W212), GLA, GLC, GLE ve S-Sınıfı modellerde 2010–2017 arası yaygın. 9G-Tronic ile değiştirildi.',
    commonFaults: [
      'Vites gecikmesi ve sarsıntı',
      'Tork konvertörü kilitleme arızası',
      'Y3/15 solenoid sorunu',
    ],
  },

  'mercedes-9g-tronic': {
    id: 'mercedes-9g-tronic',
    displayName: 'Mercedes 9G-Tronic',
    customerFacingName: '9G-Tronic 725.0 (9 ileri tam otomatik)',
    fullName: 'Mercedes-Benz 9G-Tronic 725.0 Şanzıman',
    shortName: '9G-Tronic',
    type: 'at',
    codes: ['725.0', '9G-Tronic'],
    manufacturer: 'Mercedes-Benz',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 2,
    description: 'Mercedes\'in 9 ileri tam otomatik şanzımanı. C, E, S, CLS, GLC, GLE, GLS ve G-Class modellerinde 2013\'ten itibaren standart. Yumuşak vites geçişleri ve geniş tork aralığıyla bilinir.',
    commonFaults: [
      '9G-Tronic solenoid tıkanıklığı',
      'Şanzıman yağ sızıntısı',
      'Vites adaptasyon hatası',
    ],
  },

  'fiat-dct': {
    id: 'fiat-dct',
    displayName: 'Fiat DCT',
    customerFacingName: 'DCT 6 ileri kuru kavrama',
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
    displayName: '7DCT',
    customerFacingName: '7DCT çift kavrama (kuru)',
    fullName: 'Hyundai-Kia 7DCT Çift Kavramalı Şanzıman',
    shortName: '7DCT',
    type: 'dct-dry',
    codes: ['7DCT300', '7DCT', 'D7UF1'],
    manufacturer: 'Hyundai-Kia',
    yearStart: 2015,
    serviceStatus: 'active',
    tier: 3,
    description: '7 ileri çift kavramalı şanzıman. Hyundai i20, i30, Tucson, Kona, Bayon ve Kia Ceed, Stonic, Sportage, Niro modellerinde kullanılır. Kuru kavrama yapısı.',
    commonFaults: [
      'DCT düşük hızda vuruntu',
      'Solenoid valf tıkanıklığı',
      'Kavrama kayması',
    ],
  },

  'hyundai-kia-dct8': {
    id: 'hyundai-kia-dct8',
    displayName: '8DCT',
    customerFacingName: '8DCT yaş kavrama (yeni nesil)',
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
    customerFacingName: 'CVT sürekli değişken şanzıman',
    fullName: 'Honda CVT Sürekli Değişken Şanzıman',
    shortName: 'Honda CVT',
    type: 'cvt',
    codes: ['CVT'],
    manufacturer: 'Honda',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Honda\'nın geliştirdiği sürekli değişken şanzıman. Civic, City, HR-V, CR-V, Jazz ve Accord modellerinde kullanılır. Sağlamlığıyla bilinir.',
    commonFaults: [
      'CVT metal kayış aşınması',
      'Kasnak (puli) yüzey hasarı',
      'CVT titreme ve kayma hissi',
    ],
  },

  'toyota-cvt': {
    id: 'toyota-cvt',
    displayName: 'Toyota CVT',
    customerFacingName: 'Multidrive S CVT sürekli değişken',
    fullName: 'Toyota Multidrive S Sürekli Değişken Şanzıman',
    shortName: 'Toyota CVT',
    type: 'cvt',
    codes: ['K310', 'K311', 'K313', 'K114'],
    manufacturer: 'Aisin / Toyota',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Toyota\'nın Aisin ortaklığıyla geliştirdiği sürekli değişken şanzıman. Corolla, Yaris, Yaris Cross, RAV4, C-HR ve Auris modellerinde kullanılır. Hibrit modellerde e-CVT varyantı.',
    commonFaults: [
      'CVT kayış aşınması',
      'Aisin valf gövdesi problemi',
      'Tork konvertörü kilitleme sorunu',
    ],
  },

  'nissan-jatco-cvt': {
    id: 'nissan-jatco-cvt',
    displayName: 'Nissan Jatco CVT',
    customerFacingName: 'Xtronic CVT sürekli değişken şanzıman',
    fullName: 'Nissan Jatco CVT Sürekli Değişken Şanzıman',
    shortName: 'Jatco CVT',
    type: 'cvt',
    codes: ['JF015E', 'JF016E', 'JF017E', 'JF020E'],
    manufacturer: 'Jatco / Nissan',
    yearStart: 2013,
    serviceStatus: 'active',
    tier: 3,
    description: 'Jatco\'nun Nissan için ürettiği CVT şanzıman ailesi. Qashqai, Juke, X-Trail ve Micra modellerinde kullanılır. Bazı varyantları aşınma sorunlarıyla bilinir.',
    commonFaults: [
      'Xtronic CVT kayış aşınması',
      'Kasnak yüzey pürüzlenmesi',
      'CVT yağ bozulması',
    ],
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

export function buildTransmissionUrl(id: string): string {
  return `/sanziman/${id}/`;
}

export function getTransmissionsByType(type: TransmissionType): TransmissionFamily[] {
  return Object.values(TRANSMISSIONS).filter((t) => t.type === type);
}
