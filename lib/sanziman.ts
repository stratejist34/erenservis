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
      'VW Golf 7 / 8 (1.4 TSI, 2.0 GTI)',
      'VW Passat B8 (2.0 TDI)',
      'Audi A3 S-Tronic',
      'Audi A4 / A5 S-Tronic',
      'Skoda Octavia vRS',
      'SEAT Leon Cupra',
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
      'DSG (Direct Shift Gearbox) ve Audi tarafında S-Tronic, Volkswagen Group\'un tescilli çift kavramalı otomatik şanzıman teknolojisidir. İki ayrı kavrama paketiyle tek ve çift vitesleri eş zamanlı yönetir; bir sonraki vitesi önceden "hazır bekletir." Kuru kavramalı DQ200 (7 ileri) ve ıslak kavramalı DQ250/DQ381/DQ500 olmak üzere başlıca dört platform mevcuttur. Yüksek torq değerleri ve yakıt verimliliği ile günümüzde en yaygın şanzıman türlerinden biri olmakla birlikte, mekatronik ünitesi ve kavrama grubu konusunda özel servis deneyimi gerektirmektedir.',
    shortDesc:
      'VW, Audi ve Skoda\'da kullanılan çift kavramalı şanzıman. DQ200 baskı tüpü ve mekatronik arızaları konusunda özel uzmanlık gerektirir.',
    serviceHref: '/hizmetler/dsg-sanziman-tamiri/',
    heroImage: '/images/sanziman/dsg-s-tronic.webp',
    metaTitle: 'DSG & S-Tronic Şanzıman Arızaları ve Bakımı | Eren Servis Bostancı',
    metaDescription:
      'DSG DQ200, DQ250 ve DQ381 şanzıman arızaları, belirtiler, bakım aralıkları ve çözümler. Bostancı\'nın DSG uzmanı Eren Servis ile tanışın.',
  },

  {
    title: 'ZF Otomatik Şanzıman',
    slug: 'zf-otomatik',
    category: 'Tam_Otomatik',
    brands: ['BMW', 'Mercedes-Benz', 'Audi', 'Jaguar', 'Land Rover', 'Maserati'],
    models: [
      'BMW 3 Serisi (E90/F30/G20)',
      'BMW 5 Serisi (F10/G30)',
      'BMW X5 (E70/F15/G05)',
      'Audi A6 3.0 TDI (8HP)',
      'Land Rover Discovery 4 / 5',
      'Jaguar XF / F-Pace',
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
      { task: 'Şanzıman yağı ve filtre değişimi', interval: 'Her 60.000–80.000 km' },
      { task: 'Solenoid valfi temizliği', interval: 'Belirtide veya 100.000 km' },
      { task: 'Torque konvertör kontrolü', interval: 'Her 80.000 km' },
      { task: 'Valf gövdesi diagnostik testi', interval: 'Belirtide' },
    ],
    description:
      'ZF Friedrichshafen AG tarafından üretilen ZF 8HP ve 6HP serisi torque konvertörlü tam otomatik şanzımanlardır. Özellikle BMW ve Audi premium segmentinde yaygın olup 1.000 Nm\'ye kadar torq taşıyabilen güçlü bir platform sunar. "Ömür boyu yağ" söylemi yüzünden bakımı ihmal edilen ZF şanzımanlar, torque konvertör ve solenoid arızalarıyla sıkça karşılaşır. Orijinal ZF LifeGuardFluid 6 veya 8 ile düzenli bakım, uzun ömrün anahtarıdır.',
    shortDesc:
      'BMW, Audi ve Land Rover\'da kullanılan güçlü 8 ileri otomatik şanzıman. "Ömür boyu yağ" efsanesine rağmen düzenli bakım kritik öneme sahiptir.',
    serviceHref: '/hizmetler/zf-sanziman-tamiri/',
    metaTitle: 'ZF Otomatik Şanzıman Arızaları ve Bakımı | Eren Servis Bostancı',
    metaDescription:
      'ZF 8HP ve 6HP şanzıman arızaları, torque konvertör sorunları ve bakım aralıkları. BMW ve Audi ZF şanzıman uzmanı Eren Servis.',
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
    metaTitle: 'CVT Şanzıman Arızaları, Metal Kayış ve Bakım | Eren Servis Bostancı',
    metaDescription:
      'CVT şanzıman arızaları (JF015E, JF011E, Lineartronic), metal kayış aşınması, yağ değişim aralıkları ve Bostancı CVT servis bilgileri.',
  },

  {
    title: 'Konvansiyonel Otomatik Şanzıman',
    slug: 'tiptronic-konvansiyonel',
    category: 'Tam_Otomatik',
    brands: ['Mercedes-Benz', 'Toyota', 'Hyundai', 'Kia', 'GM', 'Ford'],
    models: [
      'Mercedes-Benz E-Klasse (W211/W212) — 722.9',
      'Mercedes-Benz C-Klasse (W204) — 722.6',
      'Toyota Avensis / Camry — Aisin 6-speed',
      'Hyundai Tucson / Santa Fe — A6GF1',
      'Kia Sorento / Optima — A6MF2',
      'Ford Mondeo / S-Max — 6F15/6F27',
    ],
    commonFaults: [
      {
        name: 'Valf gövdesi (valve body) aşınması',
        severity: 'high',
        description:
          'En yaygın arıza kaynağı. Hidrolik kanallar aşınır ya da solenoid valfler bloke olur. Belirti: sert vites geçişi, belirli viteslerde takılma, P0750–P0778 kodları.',
      },
      {
        name: 'Fren bandı (brake band) gevşemesi',
        severity: 'medium',
        description:
          'Mercedes 722 serilerinde fren bandı ayarı kritiktir. Bandın gevşemesi 2.–4. viteslerde kayma ve güç kayıpları yaratır.',
      },
      {
        name: 'Yağ pompası hasarı',
        severity: 'high',
        description:
          'Yağ pompası basıncını kaybederse şanzıman yeterli hidrolik basınç üretemez. Tüm devirlerde belirsiz vites geçişleri ve P0218 ısı hatası tipik bulgulardır.',
      },
      {
        name: 'Torque konvertör titremesi',
        severity: 'medium',
        description:
          'TCC (kilitleme kaplinsi) aşınması, 60–90 km/s hız bandında titreme yaratır. Yağ içinde aşınma tozu varsa tüm şanzıman risk altındadır.',
      },
    ],
    advantages: [
      'Kanıtlanmış teknoloji — 50 yıllık geliştirme geçmişi',
      'Güçlü torq kapasitesi ve dayanıklılık',
      'Geniş yedek parça ağı ve deneyimli teknisyen kitlesi',
      'DSG veya CVT gibi özel servis gereksinimleri yok',
    ],
    disadvantages: [
      'Modern çift kavramalı şanzımanlara kıyasla daha yüksek yakıt tüketimi',
      'Daha fazla vites oranı = daha büyük ve ağır yapı',
      'Valf gövdesi ve torque konvertör hasarı birikimli olarak ilerler',
    ],
    maintenance: [
      { task: 'Şanzıman yağı ve filtre değişimi', interval: 'Her 40.000–60.000 km' },
      { task: 'Fren bandı ayarı (Mercedes 722.6 / 722.9)', interval: 'Her 60.000 km' },
      { task: 'Torque konvertör testi', interval: 'Her 80.000 km veya belirtide' },
      { task: 'Solenoid valfi temizliği / değişimi', interval: 'Belirtide' },
    ],
    description:
      'Konvansiyonel otomatik şanzıman (torque konvertörlü, çok kademeli), 1960\'lardan bu yana en olgun otomobil şanzıman teknolojisidir. Mercedes-Benz 722.6 ve 722.9 serisi ile Aisin W/TF serisi bu platformun en yaygın örnekleridir. Torque konvertör, planet dişli seti ve hidrolik valf gövdesi üçlüsüne dayanan bu sistem, doğru bakım ile 300.000 km üzerinde sorunsuz çalışabilir. Valf gövdesi aşınması ve torque konvertör hasarı en sık karşılaşılan arızalardır; her ikisi de erken tanıyla uygun maliyetle onarılabilir.',
    shortDesc:
      'Mercedes 722 ve Aisin serisi geleneksel otomatik şanzımanlar. Doğru bakım ve yağ değişimiyle 300.000 km üzeri ömür mümkündür.',
    serviceHref: '/hizmetler/konvansiyonel-sanziman/',
    metaTitle: 'Konvansiyonel Otomatik Şanzıman Arızaları ve Bakımı | Eren Servis',
    metaDescription:
      'Mercedes 722.6 / 722.9, Aisin ve GM otomatik şanzıman arızaları, valf gövdesi, torque konvertör ve bakım bilgileri. Bostancı Eren Servis.',
  },
];

export function getTransmissionBySlug(slug: string): TransmissionType | undefined {
  return transmissions.find((t) => t.slug === slug);
}

export function getTransmissionsByCategory(category: TransmissionCategory): TransmissionType[] {
  return transmissions.filter((t) => t.category === category);
}
