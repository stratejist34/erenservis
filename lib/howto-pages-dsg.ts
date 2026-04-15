/**
 * Blog postları için HowTo schema verileri.
 * Slug'a göre adım adım işlem şeması tanımlanır.
 * İlgili post'larda Article schema'ya HowTo node eklenir.
 */

export interface HowToStep {
  name: string;
  text: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime: string; // ISO 8601 duration — ör: "PT2H"
  estimatedCost: {
    value: string;
    currency: string;
  };
  steps: HowToStep[];
}

export const HOWTO_PAGES: Record<string, HowToData> = {
  'en-iyi-sanziman-yagi': {
    name: 'DSG / CVT / ZF Şanzıman Yağı Nasıl Seçilir?',
    description:
      'Araç modeline ve şanzıman tipine göre doğru yağı seçme, değişim aralığını belirleme ve değişim sürecinin adımları.',
    totalTime: 'PT1H30M',
    estimatedCost: { value: '3500', currency: 'TRY' },
    steps: [
      {
        name: 'Şanzıman tipini belirle',
        text: 'Araç modelinize göre şanzıman tipini öğrenin: VW/Audi DQ200 (7 ileri kuru), DQ250 (6 ileri ıslak), CVT veya ZF 8HP. Bu bilgi genellikle ruhsatta veya servis belgesinde yer alır.',
      },
      {
        name: 'Üretici referans yağını bul',
        text: 'Üretici orijinal yağ referansını tespit edin — DQ250 için G052182A2, ZF 8HP için LifeguardFluid 8. Yanlış spesifikasyon solenoid tıkanmasına yol açar.',
      },
      {
        name: 'Muadil yağ seçimi',
        text: 'Eşdeğer muadil kullanmak isterseniz, aynı spesifikasyonu (ör. FFL-2 veya MB 236.15) karşılayan onaylı markaları tercih edin. Yağ değiştirirken filtreyi de birlikte değiştirin.',
      },
      {
        name: 'Adaptasyon sıfırlama',
        text: 'Yağ değişimi sonrası şanzıman bilgisayarının yeni yağa alışması için adaptasyon sıfırlaması yapılır. Bu adım atlanırsa yeni yağla birlikte sarsıntı başlayabilir.',
      },
      {
        name: 'Test sürüşü',
        text: 'Soğuk çalışma ile 15-20 dakikalık test sürüşü yapın. Tüm vites geçişleri pürüzsüzse işlem tamamdır.',
      },
    ],
  },

  'sanziman-yag-degisimi-fiyat-2026': {
    name: 'Şanzıman Yağ Değişimi Nasıl Yapılır?',
    description:
      'DSG, CVT ve ZF şanzımanlarda profesyonel yağ değişiminin adımları ve fiyatı etkileyen faktörler.',
    totalTime: 'PT2H',
    estimatedCost: { value: '3500', currency: 'TRY' },
    steps: [
      {
        name: 'Ön tanı ve yağ analizi',
        text: 'Eski yağ boşaltılmadan önce metal partikül analizi yapılır. Aşırı kirlilik varsa iç temizlik gerekebilir — bu adım sürpriz maliyeti önler.',
      },
      {
        name: 'Eski yağ ve filtre boşaltma',
        text: "Yağ boşaltma tapaları açılır; DSG ve CVT'de filtre de eş zamanlı çıkarılır. Filtre olmadan yapılan yağ değişimi eksik bir işlemdir.",
      },
      {
        name: 'Doğru yağ ve filtrenin montajı',
        text: 'Araç modeline uygun yağ ve yeni filtre takılır. Yağ miktarı litre olarak hassas ölçülür — az veya fazla yağ basınç sorununa yol açar.',
      },
      {
        name: 'Adaptasyon kalibrasyonu',
        text: "Şanzıman ECU'su yeni yağa alıştırılır. DQ250 ve CVT için bu adım zorunludur; atlanırsa değişim sonrası sarsıntı şikayeti başlar.",
      },
      {
        name: 'Test sürüşü ve kontrol',
        text: 'Tüm vites geçişleri test edilir, sızıntı kontrol edilir. 48 saat sonra yağ seviyesi tekrar ölçülmesi önerilir.',
      },
    ],
  },

  'otomatik-sanziman-tamiri-fiyat': {
    name: 'Otomatik Şanzıman Tamiri Süreci Nasıl İşler?',
    description:
      'Otomatik şanzıman tamirinde tanıdan teslimata kadar adım adım süreç ve her aşamanın maliyete etkisi.',
    totalTime: 'PT8H',
    estimatedCost: { value: '8500', currency: 'TRY' },
    steps: [
      {
        name: 'Bilgisayarlı tanı',
        text: 'OBD-II araçla hata kodları okunur. P17xx (hidrolik/basınç), P189x (pompa), U-serisi (elektrik) kodları arızanın kaynağını gösterir.',
      },
      {
        name: 'Mekanik ön inceleme',
        text: 'Şanzıman yağı ve filtre durumu kontrol edilir. Metal partikülü yüksekse iç mekanik hasarı düşünülür.',
      },
      {
        name: 'Basınç testi',
        text: 'Hidrolik basınç ölçümü yapılır. Düşük basınç mekatronik veya pompa arızasını gösterir; yüksek basınç mekanik tıkanıklığa işaret eder.',
      },
      {
        name: 'Parça bazlı onarım veya revizyon',
        text: 'Tanıya göre tek parça değişimi (solenoid, kavrama, kart) veya komple şanzıman revizyonu yapılır. Sabit fiyat teklifi önceden verilir.',
      },
      {
        name: 'Adaptasyon + test sürüşü',
        text: 'Şanzıman yazılımı güncellenir ve adaptasyon sıfırlanır. 20-30 km test sürüşüyle tüm vitesler kontrol edilir.',
      },
    ],
  },
};
