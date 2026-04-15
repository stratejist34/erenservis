/**
 * Blog postlarına enjekte edilen servis bilgi kutusu.
 * Her slug için semptom, gecikme riski, süre ve fiyat aralığı tanımlanır.
 * Sadece ilgili postlarda gösterilir — kayıt yoksa kutu render edilmez.
 */

export interface PostServiceBlock {
  symptoms: string[];
  risks: string[];
  duration: string;
  warranty: string;
  priceRange?: {
    min: number;
    max: number;
    label: string; // ör: "8.500 – 24.000 TL"
  };
}

const BLOCKS: Record<string, PostServiceBlock> = {
  'dsg-mekatronik-ariza-fiyati': {
    symptoms: [
      'Gösterge panelinde şanzıman/anahtar uyarı lambası',
      'Yalnızca tek veya çift viteste kalma',
      'Kalkışta 2-3 saniyelik vites gecikmesi',
      'P17BF / P189C hata kodları',
    ],
    risks: [
      'Geç müdahalede arıza tüm şanzımana yayılır',
      'Seyirde ani güç kesintisi — trafik güvenlik riski',
      'Kart tamiri yerine komple ünite değişimine dönüşür',
    ],
    duration: '1 iş günü',
    warranty: 'Orijinal veya kaliteli muadil, 6 ay garanti',
    priceRange: {
      min: 8500,
      max: 52000,
      label: '8.500 – 52.000 TL',
    },
  },

  'en-iyi-sanziman-yagi': {
    symptoms: [
      'Vites geçişlerinde sarsıntı veya gecikme',
      'Yakıt tüketiminde açıklanamayan artış',
      'Solenoid tıkanması sonrası limp mode',
    ],
    risks: [
      'Yanlış yağ → solenoid ve kavrama hasarı',
      'Gecikmiş değişim → mekatronik filtre kirliliği',
      'CVT'de standart ATF kullanımı → kayış çizilmesi',
    ],
    duration: '45 – 90 dakika',
    warranty: 'Üretici onaylı veya eşdeğer spesifikasyonlu yağ',
    priceRange: {
      min: 3500,
      max: 16000,
      label: '3.500 – 16.000 TL',
    },
  },

  'sanziman-yag-degisimi-fiyat-2026': {
    symptoms: [
      'Şanzıman yağı değişim lambasının yanması',
      'Vites geçişlerinde kayma veya takılma',
      'Altta yağ lekesi — sızdırmazlık sorunu',
    ],
    risks: [
      'Kirli yağ → solenoid tıkanması ve kavrama hasarı',
      'Geç değişim mekatronik revizyonuna yol açar',
      'Adaptasyon sıfırlanmadan değişim → yeni yağda sarsıntı',
    ],
    duration: '1 – 3 saat (model ve yağ tipine göre)',
    warranty: 'Filtre dahil, adaptasyon kalibrasyonu ile birlikte',
    priceRange: {
      min: 3500,
      max: 18000,
      label: '3.500 – 18.000 TL',
    },
  },

  'dsg-kavrama-ariza-belirtileri': {
    symptoms: [
      'Gaz verilince motor devir alıyor ama araç hızlanmıyor',
      '1-2. viteste sert vuruş veya "tok" sesi',
      'Soğukta hareket güçlüğü, uzun çekim gecikmesi',
      'DSG titreşimi şehir içi stop-go trafikte belirgin',
    ],
    risks: [
      'Hasarlı kavrama diğer DSG bileşenlerine zarar verir',
      'Yol ortasında güç aktarımının tamamen kesilmesi',
      'Kavrama hasarı mekatronik değişimine kadar uzayabilir',
    ],
    duration: '1 – 2 iş günü',
    warranty: 'Orijinal veya kaliteli muadil, 6 ay garanti',
    priceRange: {
      min: 12000,
      max: 79000,
      label: '12.000 – 79.000 TL',
    },
  },

  'dsg-vuruntu-semptomlari': {
    symptoms: [
      '1→2 veya 2→3 vites geçişinde dürtme hissi',
      'Düşük hızda veya durma anında titreşim',
      'Soğuk motorda belirgin, ısındıkça azalan vuruntu',
    ],
    risks: [
      'Vuruntu kavrama aşınmasının erken belirtisidir',
      'Erken müdahale = sadece kavrama; geç müdahale = kavrama + volant',
      'Volant hasarı maliyeti 3 kata çıkarır',
    ],
    duration: '1 – 2 iş günü',
    warranty: 'Orijinal veya kaliteli muadil, 6 ay garanti',
    priceRange: {
      min: 12000,
      max: 95000,
      label: '12.000 – 95.000 TL',
    },
  },

  'otomatik-sanziman-tamiri-fiyat': {
    symptoms: [
      'Vites geçişlerinde sarsıntı veya gecikmeli tepki',
      'Geri vites veya belirli vitese girememe',
      'Limp mode — araç 3. viteste kilitli kalıyor',
    ],
    risks: [
      'Tanı yapılmadan tamir = yanlış parça değişimi riski',
      'Geç müdahalede tek parça tamiri komple revizyona dönüşür',
    ],
    duration: 'Tanıya göre 1 – 5 iş günü',
    warranty: 'İşlem bazlı garanti, 3-6 ay',
    priceRange: {
      min: 8500,
      max: 95000,
      label: '8.500 – 95.000 TL',
    },
  },
};

export function getPostServiceBlock(slug: string): PostServiceBlock | null {
  return BLOCKS[slug] ?? null;
}
