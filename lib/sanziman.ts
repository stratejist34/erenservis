export type TransmissionCategory = 'Cift_Kavramali' | 'Tam_Otomatik' | 'CVT' | 'Hibrit';

export interface TransmissionFault {
  name: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

export interface MaintenanceItem {
  task: string;
  interval: string;
}

export interface TransmissionType {
  title: string;
  slug: string;
  category: TransmissionCategory;
  brands: string[];
  models: string[];
  commonFaults: TransmissionFault[];
  advantages: string[];
  disadvantages: string[];
  maintenance: MaintenanceItem[];
  description: string;
  shortDesc: string;
  serviceHref: string; // ilgili /hizmetler/* sayfası
  heroImage?: string; // opsiyonel — yoksa hero section render edilmez
  metaTitle: string;
  metaDescription: string;
}

export const CATEGORY_LABELS: Record<TransmissionCategory, string> = {
  Cift_Kavramali: 'Çift Kavramalı',
  Tam_Otomatik: 'Tam Otomatik',
  CVT: 'CVT',
  Hibrit: 'Hibrit',
};

export const transmissions: TransmissionType[] = [
  {
    title: 'DSG & S-Tronic Şanzıman',
    slug: 'dsg-s-tronic',
    category: 'Cift_Kavramali',
    brands: ['Volkswagen', 'Audi', 'Skoda', 'SEAT', 'Porsche'],
    models: [
      'VW Golf 7 / 8 (DQ200 – 1.4 TSI, DQ381 – 2.0 GTI)',
      'VW Passat B8 (DQ250 – 2.0 TDI)',
      'VW Passat / Golf GTE / Tiguan eHybrid (DQ400e – PHEV 6 ileri)',
      'Audi A3 / Q3 S-Tronic (DQ200, DQ381)',
      'Audi A4 / A5 / Q5 S-Tronic (DL382 – longitudinal 7 ileri)',
      'Audi A6 / A7 / Q7 S-Tronic (DL501 – longitudinal ıslak, >500 Nm)',
      'Skoda Octavia vRS / Superb (DQ381)',
      'SEAT Leon Cupra / Cupra Formentor (DQ381)',
    ],
    commonFaults: [
      {
        name: 'Kavrama balatası aşınması',
        severity: 'high',
        description:
          'DQ200 (kuru kavrama) modellerinde 80.000–120.000 km arasında kavrama balataları kritik düzeyde aşınır. Belirtiler: düşük hızda titreme, vitesler arası sarsıntı.',
      },
      {
        name: 'Mekatronik ünite arızası',
        severity: 'high',
        description:
          'Mekatronik, şanzımanın "beynidir". Yağ sızıntısı veya ısı nedeniyle elektronik kartlar hasar görebilir. Hata kodu: P17BF veya P189E.',
      },
      {
        name: 'Çift kavrama paketi yıpranması',
        severity: 'medium',
        description:
          'Uzun süreli şehir içi trafiği çift kavramayı erken yıpratır. Semptom: vites değiştirmede gecikme, nötr konumda sürüklenme hissi.',
      },
      {
        name: 'Yağ borusu/baskı tüpü patlaması',
        severity: 'medium',
        description:
          'DQ200 şanzımanlarda yağ baskı tüpü zamanla çatlayabilir veya patlayabilir. Ani yağ kaybına yol açar ve mekatroniği risk altına sokar.',
      },
      {
        name: 'Solenoid valfi tıkanması',
        severity: 'low',
        description:
          'Kirli veya düşük kaliteli yağ kullanımı solenoid valflerini tıkayabilir. Semptom: vites takılması, P0746 hata kodu.',
      },
    ],
    advantages: [
      'Torque konvertörsüz yapı sayesinde yakıt tüketiminde %15–20 tasarruf',
      'Düzinelerce milisaniyede gerçekleşen ışık hızında vites değişimi',
      'Sportif sürüş deneyimi — manuel mod ve padleshift desteği',
      'Çift kavrama sayesinde bir sonraki vites önceden hazırlanır',
    ],
    disadvantages: [
      'Kuru kavrama (DQ200) şehir içinde daha çabuk aşınır',
      'Islak kavrama (DQ250/381) orijinal yağ kalitesine çok duyarlı',
      'Mekatronik onarımı yüksek uzmanlık gerektirir',
    ],
    maintenance: [
      { task: 'Şanzıman yağı değişimi (DQ200 — kuru kavrama)', interval: 'Her 60.000 km' },
      { task: 'Şanzıman yağı değişimi (DQ250/381/500 — ıslak kavrama)', interval: 'Her 40.000 km' },
      { task: 'Kavrama grubu kontrolü', interval: 'Her 60.000 km veya belirtide' },
      { task: 'Mekatronik ünite diagnostik testi', interval: 'Her 40.000 km' },
      { task: 'Baskı tüpü görsel kontrolü', interval: 'Her yıl veya 20.000 km' },
    ],
    description:
      'DSG (Direct Shift Gearbox) ve Audi tarafında S-Tronic, Volkswagen Group\'un tescilli çift kavramalı otomatik şanzıman teknolojisidir. İki ayrı kavrama paketiyle tek ve çift vitesleri eş zamanlı yönetir; bir sonraki vitesi önceden "hazır bekletir." Enine motorlu araçlarda kuru kavramalı DQ200 (7 ileri), ıslak kavramalı DQ250 / DQ381 / DQ500 ve PHEV uyumlu DQ400e (6 ileri); boyuna motorlu Audi\'lerde ise DL382 (7 ileri) ve yüksek torq kapasiteli DL501 platformları kullanılır. Yakıt verimliliği ile günümüzde en yaygın şanzıman türlerinden biri olmakla birlikte, mekatronik ünitesi ve kavrama grubu konusunda özel servis deneyimi gerektirmektedir.',
    shortDesc:
      'VW, Audi ve Skoda\'da kullanılan çift kavramalı şanzıman. DQ200 baskı tüpü ve mekatronik arızaları konusunda özel uzmanlık gerektirir.',
    serviceHref: '/hizmetler/dsg-sanziman-tamiri/',
    heroImage: '/images/sanziman/dsg-s-tronic.webp',
    metaTitle: 'DSG & S-Tronic Şanzıman Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'DSG DQ200, DQ250 ve DQ381 şanzıman arızaları, belirtiler, bakım aralıkları ve çözümler. Bostancı\'nın DSG uzmanı Eren Otomatik Şanzıman Servisi ile tanışın.',
  },

  {
    title: 'ZF Otomatik Şanzıman',
    slug: 'zf-otomatik',
    category: 'Tam_Otomatik',
    brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Jaguar', 'Land Rover', 'Maserati'],
    models: [
      'BMW 3 Serisi (E90/F30/G20) — 8HP',
      'BMW 5 Serisi (F10/G30) — 8HP45/50/70',
      'BMW X5 / X6 (E70/F15/G05) — 8HP70/90',
      'Audi A6 / A7 / Q7 3.0 TDI — 8HP',
      'Land Rover Discovery 4 / 5 — 8HP70',
      'Range Rover Evoque / Discovery Sport — 9HP48 (9 ileri enine)',
      'Jaguar XF / F-Pace — 8HP45/70',
      'Maserati Ghibli / Levante — 8HP70',
    ],
    commonFaults: [
      {
        name: 'Torque konvertör kilitleme hasarı',
        severity: 'high',
        description:
          'ZF 8HP\'de torque konvertörün kilitleme plakası (TCC) sürtünmesiyle yağ kirlenebilir ve tüm şanzımana metal parçacığı yayılabilir. Semptom: düşük hızda titreme, D konumunda durma.',
      },
      {
        name: 'Solenoid valfi arızası',
        severity: 'high',
        description:
          'Yaşlanan yağ solenoid valflerini tıkar. Vites gecikmesi, sert vites değişimi veya P0750–P0770 arası hata kodları tipik belirtilerdir.',
      },
      {
        name: 'Valf gövdesi (valve body) hasarı',
        severity: 'medium',
        description:
          'Hidrolik basınç arızaları valf gövdesinin kanallarını bozabilir. Genellikle yüksek km ve uzun yağ değişim aralıklarından kaynaklanır.',
      },
      {
        name: 'Yağ filtresi tıkanması',
        severity: 'low',
        description:
          'Üretici tarafından "ömür boyu yağ" denilse de pratik kullanımda 80.000 km sonrasında yağ bozulur ve filtre tıklanır.',
      },
    ],
    advantages: [
      '8 ileri vites oranı ile geniş hız aralığında verimli çalışma',
      'Düşük yakıt tüketimi — ZF 6HP\'e kıyasla ~%6 iyileşme',
      'Elektro-hidrolik kontrol sayesinde hızlı adaptasyon',
      'Güçlü torq kapasitesi: 1.000 Nm\'ye kadar varyantlar mevcut',
    ],
    disadvantages: [
      'Yağ değişimi ihmal edildiğinde torque konvertör hasarı pahalıya çıkar',
      '"Ömür boyu yağ" etiketi yanıltıcı — gerçekte 60.000–80.000 km\'de değişim önerilir',
      'BMW\'ye özel bağlantı protokolleri nedeniyle jenerik diagnoze cihazları yetersiz kalabilir',
    ],
    maintenance: [
      { task: 'Şanzıman yağı ve filtre değişimi (8HP — LifeGuardFluid 8)', interval: 'Her 60.000–80.000 km' },
      { task: 'Şanzıman yağı değişimi (9HP48 — enine, Evoque/Discovery Sport)', interval: 'Her 60.000 km' },
      { task: 'Solenoid valfi temizliği', interval: 'Belirtide veya 100.000 km' },
      { task: 'Torque konvertör kontrolü', interval: 'Her 80.000 km' },
      { task: 'Valf gövdesi diagnostik testi', interval: 'Belirtide' },
    ],
    description:
      'ZF Friedrichshafen AG tarafından üretilen ZF 8HP, 6HP ve 9HP serisi torque konvertörlü tam otomatik şanzımanlardır. Özellikle BMW ve Audi premium segmentinde yaygın olup 1.000 Nm\'ye kadar torq taşıyabilen güçlü bir platform sunar. Land Rover Evoque ve Discovery Sport gibi enine motorlu araçlarda ise 9HP48 (9 ileri) kullanılır — bu versiyon, adaptasyon hassasiyeti yönünden 8HP\'den ayrışır. "Ömür boyu yağ" söylemi yüzünden bakımı ihmal edilen ZF şanzımanlar, torque konvertör ve solenoid arızalarıyla sıkça karşılaşır. Orijinal ZF LifeGuardFluid 6 veya 8 ile düzenli bakım, uzun ömrün anahtarıdır.',
    shortDesc:
      'BMW, Audi ve Land Rover\'da kullanılan güçlü 8 ileri otomatik şanzıman. "Ömür boyu yağ" efsanesine rağmen düzenli bakım kritik öneme sahiptir.',
    serviceHref: '/hizmetler/zf-sanziman-tamiri/',
    metaTitle: 'ZF Otomatik Şanzıman Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'ZF 8HP ve 6HP şanzıman arızaları, torque konvertör sorunları ve bakım aralıkları. BMW ve Audi ZF şanzıman uzmanı Eren Otomatik Şanzıman Servisi.',
  },

  {
    title: 'CVT Şanzıman',
    slug: 'cvt-sanziman',
    category: 'CVT',
    brands: ['Nissan', 'Toyota', 'Honda', 'Subaru', 'Mitsubishi'],
    models: [
      'Nissan Qashqai (J10/J11)',
      'Nissan X-Trail (T31/T32)',
      'Toyota Corolla Hybrid (E210)',
      'Honda HR-V / CR-V',
      'Subaru Forester / Outback (Lineartronic)',
      'Mitsubishi ASX / Eclipse Cross',
    ],
    commonFaults: [
      {
        name: 'Metal kayış (push belt) aşınması',
        severity: 'high',
        description:
          'CVT\'nin kalbi olan metal kayış (veya zincir), kirli yağ, aşırı yük ya da yüksek km sonucunda aşınır. Semptom: ivicelenme sırasında kayma hissi, motor sesinde artış.',
      },
      {
        name: 'Primer/sekonder puli hasarı',
        severity: 'high',
        description:
          'Konik puli yüzeyleri çizildiğinde oranı doğru tutturamaz. Genellikle kayış aşınmasına eşlik eder. Belirtisi: sabit devirde motorun "koşar gibi" çalışması.',
      },
      {
        name: 'Yağ sızıntısı ve solenoid arızası',
        severity: 'medium',
        description:
          'Nissan JF015E/JF011E modellerinde yağ pompası rondelasından sızıntı yaygındır. Hidrolik solenoidler kirli yağda hızla bloke olur.',
      },
      {
        name: 'Aşırı ısınma',
        severity: 'medium',
        description:
          'CVT yağı, konvansiyonel ATF\'ye kıyasla ısıya daha duyarlıdır. Yüksek yük altında (tow, dağlık arazi) yağ bozulur ve kayış–puli sistemi zarar görür.',
      },
    ],
    advantages: [
      'Motor devir aralığını sürekli optimize ederek yakıt verimliliğini artırır',
      'Vites şoku yok — düzgün ve kesintisiz ivmelenme',
      'Hibrit sistemlerle ideal entegrasyon (Toyota E-CVT)',
      'Şehir içi trafikte konforlu kullanım',
    ],
    disadvantages: [
      'Spor sürüşe veya yüksek tork çıkışına uygun değil',
      'Metal kayış hasarı genellikle "tam revizyon" gerektirir',
      'CVT özgün yağı (NS-2, NS-3, CVT Fluid) pahalı ve kritik',
      'Motor sesi ile hız arasındaki ayrışma bazı sürücülerde rahatsızlık yaratır',
    ],
    maintenance: [
      { task: 'CVT yağı değişimi (orijinal NS-2/NS-3 veya eşdeğer)', interval: 'Her 40.000 km' },
      { task: 'Yağ filtresi kontrolü (Nissan JF serisi)', interval: 'Her 40.000 km' },
      { task: 'Puli ve kayış görsel kontrolü (endoskopik)', interval: 'Her 80.000 km' },
      { task: 'Aşırı ısınma sigortası — termostat testi', interval: 'Belirtide' },
    ],
    description:
      'CVT (Continuously Variable Transmission — Sürekli Değişken Şanzıman), iki konik puli arasında gezinen çelik kayış veya zincir aracılığıyla vites oranını sürekli ve kesintisiz değiştirir. Japonya merkezli üreticilerin tercihi olan bu platform, yakıt verimliliğinde avantajlı olmakla birlikte metal kayış ve puli grubu, şanzımanın en kritik ve en sık arızalanan parçalarıdır. Doğru CVT yağı kullanımı ve 40.000 km\'de bir yağ değişimi, ciddi revizyonun önündeki en önemli bariyerdir.',
    shortDesc:
      'Nissan, Toyota ve Honda\'da kullanılan sürekli değişken şanzıman. Metal kayış aşınması ve yağ kalitesi kritik önemdedir.',
    serviceHref: '/hizmetler/cvt-sanziman-tamiri/',
    metaTitle: 'CVT Şanzıman Arızaları, Metal Kayış ve Bakım | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'CVT şanzıman arızaları (JF015E, JF011E, Lineartronic), metal kayış aşınması, yağ değişim aralıkları ve Bostancı CVT servis bilgileri.',
  },

  {
    title: 'Mercedes 7G / 9G-Tronic',
    slug: 'mercedes-7g-9g-tronic',
    category: 'Tam_Otomatik',
    brands: ['Mercedes-Benz'],
    models: [
      'C-Klasse W204 / W205 — 722.9 (7G-Tronic Plus)',
      'E-Klasse W212 / W213 — 722.9 / 725.0',
      'S-Klasse W221 / W222 — 722.9 / 725.0',
      'GLC / GLE / GLS — 725.0 (9G-Tronic)',
      'CLS / CLA / A-Klasse (arka çekişli) — 725.0',
      'Sprinter / Vito (arka çekişli) — 722.9',
    ],
    commonFaults: [
      {
        name: 'Y3/8n5 konnektör yağ sızıntısı',
        severity: 'high',
        description:
          '7G-Tronic 722.9\'un kronik sorunu: elektrik konnektöründen (Y3/8n5) şanzıman yağı TCU kablo demetine sızar ve mekatronik kartı hasar görür. Belirti: "N" takılması, vites geçişi kaybı, P2767–P2768 hata kodları.',
      },
      {
        name: 'Elektrikli plaka (13-pin conductor plate) arızası',
        severity: 'high',
        description:
          '722.9 modelinde iletken plaka, hız sensörü ve solenoid bağlantılarını barındırır. Yağdan etkilendiğinde komple plaka değişimi zorunlu olur. 60.000–120.000 km bandında sıkça görülür.',
      },
      {
        name: '9G-Tronic adaptasyon kaybı',
        severity: 'medium',
        description:
          '725.0 yazılımı hassas adaptasyon gerektirir. Pil değişimi, akü bağlantısı kesme veya yazılım hatası sonrası vites karakteri bozulur — Star diagnoz cihazıyla güncel adaptasyon şart.',
      },
      {
        name: 'Valf gövdesi solenoid aşınması',
        severity: 'medium',
        description:
          'Yüksek km\'de valf gövdesindeki düzenleyici solenoidler yıpranır. Sert 2–3 veya 4–5 geçişi, düşük hızda sarsıntı tipik belirtilerdir.',
      },
      {
        name: 'Tork konvertör kilitleme titremesi',
        severity: 'medium',
        description:
          'TCC kilitleme balatası aşındığında 60–90 km/s bandında "shudder" hissedilir. Erken müdahale konvertörü kurtarır; ihmal edilirse tüm şanzımana metal tozu yayılır.',
      },
    ],
    advantages: [
      '9G-Tronic ile 9 ileri vites → dar devir bantlarıyla yakıt verimi',
      'Yüksek torq kapasitesi — 1.000 Nm\'ye kadar V8 ve AMG varyantları',
      'Planet dişli mimarisi sayesinde dayanıklı uzun ömür',
      'Mercedes Star diagnoz ağında geniş adaptasyon seçenekleri',
    ],
    disadvantages: [
      'Y3/8n5 konnektör sızıntısı yağ değişimi sırasında özel dikkat ister',
      'Adaptasyon kaybında Star cihazı zorunlu — jenerik OBD yeterli değil',
      'İletken plaka arızası tek başına 5 haneli maliyet yaratabilir',
    ],
    maintenance: [
      { task: 'Şanzıman yağı ve filtre değişimi (722.9 – MB 236.14)', interval: 'Her 60.000 km' },
      { task: 'Şanzıman yağı ve filtre değişimi (725.0 – MB 236.15/17)', interval: 'Her 60.000 km' },
      { task: 'Y3/8n5 konnektör yağ sızıntısı kontrolü', interval: 'Her 40.000 km veya yağ değişiminde' },
      { task: 'Adaptasyon sıfırlama ve öğretme (Star Diagnose)', interval: 'Her yağ değişiminde' },
    ],
    description:
      'Mercedes-Benz\'in kendi geliştirdiği 722.9 (7G-Tronic / 7G-Tronic Plus) ve 725.0 (9G-Tronic) serileri, arka çekişli binek ve SUV gamının omurgasıdır. 7 ve 9 ileri vitesli planet dişli mimarisi, yüksek torq kapasitesiyle birlikte dar devir aralıklarında çalışma imkânı sunar. Ancak 722.9\'un kronik "Y3/8n5 konnektör" yağ sızıntısı, 13-pin iletken plaka arızası ve 725.0\'ın adaptasyon hassasiyeti bu platformun en kritik servis konularıdır. Doğru Mercedes onaylı yağ (MB 236.14 / 236.15 / 236.17) ve yazılım adaptasyonu, 300.000 km üzeri ömür için belirleyicidir.',
    shortDesc:
      'Mercedes C / E / S / GLC / GLE serisi için 7G ve 9G-Tronic planet dişli otomatikler. Y3/8n5 konnektör ve iletken plaka arızaları özel uzmanlık ister.',
    serviceHref: '/hizmetler/konvansiyonel-sanziman/',
    metaTitle: 'Mercedes 7G / 9G-Tronic Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'Mercedes 722.9 ve 725.0 şanzıman arızaları, Y3/8n5 konnektör sızıntısı, iletken plaka ve adaptasyon. Bostancı Mercedes şanzıman servisi.',
  },

  {
    title: 'Aisin & EAT Şanzıman',
    slug: 'aisin-eat',
    category: 'Tam_Otomatik',
    brands: ['Peugeot', 'Citroen', 'Opel', 'Volvo', 'Toyota', 'Fiat', 'Mini'],
    models: [
      'Peugeot 3008 / 5008 / 508 — EAT6 / EAT8',
      'Citroen C4 / C5 Aircross — EAT6 / EAT8',
      'Opel Astra / Insignia / Grandland — AT6 (Aisin)',
      'Volvo S60 / V60 / XC60 — TF-80SC / TF-81SC',
      'Toyota Avensis / Camry / RAV4 — Aisin 6-AT',
      'Fiat 500X / Tipo / Doblo — TF-71SC',
      'Mini Cooper / Countryman (F-series) — Aisin 6-AT',
    ],
    commonFaults: [
      {
        name: 'Valf gövdesi solenoid tıkanması',
        severity: 'high',
        description:
          'EAT6 / AT6 ailesinde en yaygın arıza. Bakımı ihmal edilmiş yağ, düzenleyici ve kilitleme solenoidlerini blokajlar. Belirti: 2-3 sert geçiş, belirli viteslerde takılma, P0731–P0736 kodları.',
      },
      {
        name: 'Tork konvertör balatası (TCC) aşınması',
        severity: 'high',
        description:
          'TF-80SC ve TF-81SC\'de yüksek km\'de TCC sürtünme balatası dağılır; yağa metal tozu karışır. Düşük-orta hızda "shudder" tipik belirtidir. Erken tanı tork konvertörü revize etmeye imkân verir.',
      },
      {
        name: 'Yağ sızıntısı (pan conta + sağ şaft keçesi)',
        severity: 'medium',
        description:
          'Volvo TF-80SC ve Peugeot EAT6 modellerinde yağ karter contası ve sağ aks keçesinden sızıntı yaygındır. Yağ seviye düşüşü fark edilmezse mekatroniğe ciddi hasar verebilir.',
      },
      {
        name: 'Mekatronik / TCU adaptasyon hatası',
        severity: 'medium',
        description:
          'EAT8 ve AT8 modellerinde yazılım güncellemesi ya da akü değişimi sonrası adaptasyon kaybı görülür. Vites geçişi dengesizleşir; marka diagnoz cihazıyla yeniden öğretme şarttır.',
      },
    ],
    advantages: [
      'Kanıtlanmış Aisin torque konvertör mimarisi — dayanıklı yapı',
      'EAT8 ile 8 ileri vites sayesinde yakıt verimi iyileşmesi',
      'Peugeot, Citroen, Volvo, Toyota gibi geniş marka yelpazesine uyumlu',
      'Valf gövdesi ve solenoid seti jenerik muadilleri bulunabiliyor',
    ],
    disadvantages: [
      'Yağ değişimi ihmal edildiğinde TCC aşınması ve metal tozu riski yüksek',
      'EAT8 yazılım adaptasyonu için marka diagnoz cihazı gerekli',
      'Volvo TF-80SC onarım maliyeti 6-speed AT ortalamasının üzerinde',
    ],
    maintenance: [
      { task: 'Şanzıman yağı ve filtre değişimi (AW-1 / JWS 3309)', interval: 'Her 60.000 km' },
      { task: 'Valf gövdesi solenoid seti kontrolü', interval: 'Her 100.000 km veya belirtide' },
      { task: 'Tork konvertör kilitleme testi', interval: 'Her 80.000 km' },
      { task: 'Mekatronik/TCU adaptasyon (marka scanner)', interval: 'Her yağ değişiminde' },
    ],
    description:
      'Aisin AW ve Aisin Europe üretimi otomatik şanzımanlar, Toyota\'nın yan sanayi markası Aisin\'in geliştirdiği torque konvertörlü tam otomatik platformlardır. Peugeot-Citroen grubunda "EAT6" ve "EAT8", Opel\'de "AT6", Volvo\'da "Geartronic" isimleriyle pazarlanır. TF-71SC, TF-72SC, TF-80SC ve TF-81SC kod serileri farklı torq sınıflarını hedefler. Bakım ihmalinde valf gövdesi solenoidleri ve tork konvertör balatası kritik zayıf noktalardır; doğru Aisin AW-1 yağ ve düzenli adaptasyon ile 250.000 km üzeri ömür mümkündür.',
    shortDesc:
      'Peugeot, Citroen, Volvo, Opel ve Toyota modellerinde kullanılan Aisin EAT6 / EAT8 / TF-SC otomatikler. Valf gövdesi ve TCC aşınması başlıca servis konusu.',
    serviceHref: '/hizmetler/aisin-sanziman-tamiri/',
    metaTitle: 'Aisin EAT6 / EAT8 / TF-SC Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'Aisin EAT6, EAT8 ve TF-80SC şanzıman arızaları, valf gövdesi solenoid ve tork konvertör bakımı. Peugeot, Citroen, Volvo, Opel Aisin servisi Bostancı.',
  },

  {
    title: 'Renault EDC Şanzıman',
    slug: 'renault-edc',
    category: 'Cift_Kavramali',
    brands: ['Renault', 'Dacia', 'Nissan'],
    models: [
      'Renault Megane 3 / 4 — EDC6 (DC4)',
      'Renault Clio 4 / 5 — EDC6 (DC4)',
      'Renault Captur / Kadjar — EDC6 / EDC7',
      'Renault Fluence / Symbol — EDC6',
      'Dacia Duster / Logan — EDC (DC4)',
      'Nissan Juke / Qashqai (MR16) — EDC6',
    ],
    commonFaults: [
      {
        name: 'Kuru kavrama balatası erken aşınması',
        severity: 'high',
        description:
          'EDC6 (DC4) kuru kavramalıdır ve düşük tork için bile şehir içinde beklenenden erken aşınır. 60.000–90.000 km bandında kavrama paketi değişimi gerekebilir. Belirti: ivmelenme sırasında devir artışına rağmen güç kaybı, düşük hızda titreme.',
      },
      {
        name: 'Mekatronik rezistans arızası',
        severity: 'high',
        description:
          'EDC mekatroniğindeki rezistans devreleri ısıyla yıpranır. Vites seçim motorları doğru pozisyonu tutamaz — "N" takılması, P17BF benzeri hata kodları tipik belirtidir. Uzmanlık gerektiren bir onarım kalemidir.',
      },
      {
        name: 'Adaptasyon kaybı ve "N" takılması',
        severity: 'medium',
        description:
          'Kavrama balatası ve mekatronik gerilimi arasındaki adaptasyon bozulunca araç durduğunda nötrda kalır, D veya R\'e geçmez. Clip diagnoz cihazıyla adaptasyon öğretmesi ve kavrama kalibrasyonu şarttır.',
      },
      {
        name: 'Baskı plakası (concentric slave) deformasyonu',
        severity: 'medium',
        description:
          'Kavrama hidroliğini yöneten konsantrik slave silindir deforme olursa vites geçişi sert veya eksik olur. Kavrama paketi değişimi sırasında birlikte revize edilmesi önerilir.',
      },
      {
        name: 'Vuruntu ve vites atlama',
        severity: 'medium',
        description:
          '1–2 veya 2–3 geçişlerinde vuruntu, EDC\'nin klasik belirtisidir. Kaynak genellikle kavrama balatası veya mekatronik hidrolik birimidir; detaylı değerlendirme /rehber/edc-vuruntu/ sayfamızda.',
      },
    ],
    advantages: [
      'DSG\'ye kıyasla daha uygun yedek parça maliyeti',
      'Hafif yapısı sayesinde 1.2–1.6 litre motorlarda yakıt verimi',
      'Kuru kavrama → yağ değişimi gerektirmez, sadece kavrama bakımı',
      'Renault Clip diagnoz ağında geniş teşhis ve kalibrasyon seçenekleri',
    ],
    disadvantages: [
      'Kuru kavrama şehir içinde erken aşınır (60–90.000 km)',
      'Mekatronik rezistans hatası tekrarlayabilir — ısı yönetimi kritik',
      'Adaptasyon için marka (Clip) diagnoz cihazı şart, jenerik tarayıcı yetmez',
    ],
    maintenance: [
      { task: 'Kavrama paketi kontrolü (EDC6 / EDC7)', interval: 'Her 60.000 km veya belirtide' },
      { task: 'Mekatronik basınç ve rezistans testi', interval: 'Her 40.000 km' },
      { task: 'Kavrama adaptasyonu (Clip diagnoz)', interval: 'Belirtide veya kavrama değişiminde' },
      { task: 'Diferansiyel yağ değişimi (EDC gövde yağı)', interval: 'Her 60.000 km' },
    ],
    description:
      'EDC (Efficient Dual Clutch), Renault-Nissan ittifakının Getrag ortaklığıyla geliştirdiği 6 ve 7 ileri kuru kavramalı çift kavramalı şanzımandır. Clio, Megane, Captur, Fluence ve Nissan Juke gibi küçük–orta sınıf modellerde yaygındır. DSG DQ200\'e mimari olarak benzer ancak mekatronik tasarımı ve kavrama sistemi farklıdır. En yaygın servis konuları kavrama balatası aşınması, mekatronik rezistans arızası ve adaptasyon kaybıdır. Erken belirti tanıma (vuruntu, nötr takılma) ile onarım maliyeti düşük tutulabilir.',
    shortDesc:
      'Renault Clio, Megane, Captur ve Nissan Juke\'ta kullanılan 6/7 ileri kuru kavramalı çift kavramalı şanzıman. Kavrama ve mekatronik başlıca servis konusu.',
    serviceHref: '/hizmetler/dsg-kavrama-degisimi/',
    metaTitle: 'Renault EDC Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'Renault EDC6 / EDC7 (DC4) şanzıman arızaları, kavrama aşınması, mekatronik rezistans ve adaptasyon. Clio, Megane, Captur EDC servisi Bostancı.',
  },

  {
    title: 'Ford PowerShift Şanzıman',
    slug: 'ford-powershift',
    category: 'Cift_Kavramali',
    brands: ['Ford', 'Volvo'],
    models: [
      'Ford Focus Mk3 / Mk4 — DPS6 (6DCT250, kuru)',
      'Ford Fiesta Mk7 — DPS6 (6DCT250, kuru)',
      'Ford C-Max / B-Max — DPS6',
      'Ford Kuga 1. nesil — MPS6 (6DCT450, ıslak)',
      'Ford Galaxy / S-Max — MPS6',
      'Ford Mondeo 2.0 TDCi — MPS6',
      'Volvo S40 / V50 / S60 (2.0D) — MPS6',
    ],
    commonFaults: [
      {
        name: 'DPS6 kuru kavrama agresif aşınması',
        severity: 'high',
        description:
          'Ford Focus / Fiesta DPS6\'nın en kronik sorunudur. Kuru kavrama balatası düşük km\'de (40–70.000 km) ağır titreme, kayma ve vuruntu yapabilir. Ford bu nedenle birçok pazarda uzatılmış garanti kampanyası başlatmıştır.',
      },
      {
        name: 'TCM (Transmission Control Module) yazılım hataları',
        severity: 'high',
        description:
          'Eski TCM yazılımı yanlış adaptasyon öğrenir; vites geçişleri ve kavrama kapama zamanlaması bozulur. Güncel Ford IDS firmware ile sıklıkla çözülür. Belirti: rölanti titreme, D-R geçişinde şok.',
      },
      {
        name: 'Mekatronik transfer plakası (TCM input shaft seal) sızıntısı',
        severity: 'high',
        description:
          'DPS6 mekatroniğindeki giriş mili keçesi sızıntı yapıp TCM kartına yağ bulaştırır. Hasarlı TCM genellikle komple değişim gerektirir; erken keçe değişimi maliyeti düşürür.',
      },
      {
        name: 'Vuruntu (judder) ve rölanti titreme',
        severity: 'medium',
        description:
          'Focus ve Fiesta\'da kırmızı trafikte "vibrasyon" ve kalkışta vuruntu klasik belirti. Değerlendirme /rehber/powershift-vuruntu/ sayfamızda detaylandırılmıştır; genellikle kavrama + TCM kombosu çözer.',
      },
      {
        name: 'MPS6 ıslak kavrama yağ bozulması',
        severity: 'medium',
        description:
          'Kuga, Galaxy, Volvo S40/V50\'de kullanılan MPS6 (6DCT450) ıslak kavramalıdır. Yağ değişimi 60.000 km\'de yapılmazsa kavrama paketi ve mekatronik hasar görür.',
      },
    ],
    advantages: [
      'DCT mimarisi → otomatiğe göre %10–15 yakıt tasarrufu',
      'MPS6 ıslak versiyon 300+ Nm torq taşıyabilir',
      'Ford IDS ile güncel yazılım desteği geniş',
      'Kuru kavrama (DPS6) mekanik olarak sade ve onarılabilir',
    ],
    disadvantages: [
      'DPS6 kavrama ömrü beklentinin altında (40–70.000 km)',
      'TCM yazılımı güncel tutulmazsa ikincil hasarlar kümelenir',
      'Keçe sızıntısı ihmal edilirse TCM değişimi maliyeti patlar',
    ],
    maintenance: [
      { task: 'DPS6 kavrama paketi kontrolü', interval: 'Her 40.000 km veya belirtide' },
      { task: 'MPS6 şanzıman yağı değişimi (ıslak — Ford WSS-M2C200-D2)', interval: 'Her 60.000 km' },
      { task: 'TCM firmware güncellemesi ve adaptasyon (Ford IDS)', interval: 'Her yağ/kavrama işleminde' },
      { task: 'Mekatronik giriş mili keçesi kontrolü', interval: 'Her 40.000 km' },
    ],
    description:
      'Ford PowerShift, Getrag ortaklığıyla geliştirilen çift kavramalı şanzıman platformudur. İki varyantı vardır: küçük araçlarda kullanılan kuru kavramalı DPS6 (6DCT250) ve orta/üst sınıf araçlarda kullanılan ıslak kavramalı MPS6 (6DCT450). DPS6, özellikle Focus ve Fiesta modellerinde kavrama aşınması ve TCM yazılım sorunları nedeniyle uluslararası davalara konu olmuş; Ford birçok pazarda uzatılmış garanti ve yazılım güncellemesi yayınlamıştır. Doğru tanı ile kavrama + TCM + yazılım kombosu sayesinde sorunsuz kullanım sağlanabilir. MPS6 ise düzenli yağ değişimi ile 200.000 km üzeri ömre ulaşabilir.',
    shortDesc:
      'Ford Focus, Fiesta, Kuga ve Volvo S40 / V50\'de kullanılan DPS6 (kuru) ve MPS6 (ıslak) çift kavramalı şanzımanlar. Kavrama, TCM ve mekatronik servis odak noktası.',
    serviceHref: '/hizmetler/eat-sanziman-tamiri/',
    metaTitle: 'Ford PowerShift (DPS6 / MPS6) Arızaları ve Bakımı | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'Ford Focus / Fiesta DPS6 ve Kuga / Galaxy MPS6 şanzıman arızaları, kavrama aşınması, TCM yazılım ve mekatronik sızıntı. Bostancı Ford PowerShift servisi.',
  },

  {
    title: 'Klasik 6-Speed AT (Hyundai / Kia / GM)',
    slug: 'tiptronic-konvansiyonel',
    category: 'Tam_Otomatik',
    brands: ['Hyundai', 'Kia', 'GM', 'Chevrolet', 'Opel', 'Ford'],
    models: [
      'Hyundai Tucson / Santa Fe / i40 — A6GF1 / A6MF1',
      'Hyundai Sonata / Elantra — A6GF1',
      'Kia Sorento / Sportage / Optima — A6MF2 / A6GF2',
      'Kia Ceed / Carens — A6MF1',
      'Opel Insignia / Astra 2.0 CDTI — GM 6T40 / 6T45',
      'Chevrolet Cruze / Captiva — GM 6T40',
      'Ford Mondeo / S-Max (eski nesil) — 6F15 / 6F35',
    ],
    commonFaults: [
      {
        name: 'Valf gövdesi (valve body) aşınması',
        severity: 'high',
        description:
          'A6GF1 / A6MF2 ve GM 6T ailesinde hidrolik kanallar zamanla aşınır, solenoid valfler bloke olur. Belirti: sert vites geçişi, belirli viteslerde takılma, P0750–P0778 hata kodları.',
      },
      {
        name: 'Tork konvertör kilitleme (TCC) titremesi',
        severity: 'medium',
        description:
          'TCC balatası aşınması özellikle Hyundai / Kia A6GF1\'de 60–90 km/s bandında titreme yaratır. Yağ içinde metal partikülü bulunduğunda tüm şanzıman risk altına girer.',
      },
      {
        name: 'Yağ pompası basınç kaybı',
        severity: 'high',
        description:
          'Yağ pompası basıncını kaybettiğinde tüm şanzıman yeterli hidrolik güç üretemez. Belirsiz vites geçişleri ve P0218 aşırı ısı hatası tipik bulgulardır.',
      },
      {
        name: 'Solenoid valfi tıkanması (GM 6T)',
        severity: 'medium',
        description:
          'Chevrolet Cruze / Opel Insignia GM 6T40\'ta solenoid bloke hata kodları (P0751, P0756) yaygındır. Valf gövdesi revizyonu genellikle çözer.',
      },
    ],
    advantages: [
      'Kanıtlanmış planet dişli mimarisi — 50 yıllık geliştirme geçmişi',
      'Yedek parça maliyeti premium segmente kıyasla düşük',
      'Bakımı yapılmış örnekler 250–300 bin km\'e rahat ulaşır',
      'Jenerik diagnoz cihazlarıyla temel teşhis mümkün',
    ],
    disadvantages: [
      'Modern 8–9 ileri otomatiklere kıyasla daha yüksek yakıt tüketimi',
      'Valf gövdesi ve tork konvertör hasarı birikimli ilerler',
      'Geçiş karakteri premium platformlar kadar akıcı değil',
    ],
    maintenance: [
      { task: 'Şanzıman yağı ve filtre değişimi', interval: 'Her 40.000–60.000 km' },
      { task: 'Tork konvertör kilitleme testi', interval: 'Her 80.000 km veya belirtide' },
      { task: 'Solenoid valfi temizliği / değişimi', interval: 'Belirtide' },
      { task: 'Valf gövdesi basınç testi', interval: 'Her 100.000 km' },
    ],
    description:
      'Hyundai-Kia A6GF1 / A6MF2, GM 6T40 / 6T45 ve Ford 6F15 / 6F35 gibi 6 ileri vitesli klasik tam otomatik şanzımanlar, orta segment sedan ve SUV\'larda yaygın olarak kullanılır. Tork konvertör, planet dişli seti ve hidrolik valf gövdesi üçlüsüne dayanan bu sistem, doğru bakım ile 250.000 km üzerinde sorunsuz çalışabilir. Mercedes 7G/9G-Tronic ve Aisin EAT ailelerine kıyasla daha uygun yedek parça maliyeti ve geniş teknisyen kitlesi avantajıdır. Valf gövdesi aşınması ve tork konvertör hasarı en sık karşılaşılan arızalardır; her ikisi de erken tanıyla uygun maliyetle onarılabilir.',
    shortDesc:
      'Hyundai, Kia, Opel/GM ve eski nesil Ford 6 ileri otomatiklerin oluşturduğu klasik AT ailesi. Uygun maliyetli bakım ile 250.000 km üzeri ömür mümkündür.',
    serviceHref: '/hizmetler/konvansiyonel-sanziman/',
    metaTitle: 'Hyundai A6GF1 / Kia A6MF2 / GM 6T Klasik Otomatik | Eren Otomatik Şanzıman Servisi',
    metaDescription:
      'Hyundai, Kia ve Opel 6 ileri klasik otomatik şanzıman arızaları, valf gövdesi, tork konvertör ve bakım bilgileri. Bostancı Eren Otomatik Şanzıman Servisi.',
  },
];

export function getTransmissionBySlug(slug: string): TransmissionType | undefined {
  return transmissions.find((t) => t.slug === slug);
}

export function getTransmissionsByCategory(category: TransmissionCategory): TransmissionType[] {
  return transmissions.filter((t) => t.category === category);
}
