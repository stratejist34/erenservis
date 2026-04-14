export interface Symptom {
  id: number;
  severity: 'high' | 'medium';
  /** Hero pill buton için kısa etiket */
  shortLabel: string;
  title: string;
  description: string;
  cause: string;
  /** Hero terminal label — kısa, teknik */
  label: string;
  /** FinalCTA için kişiselleştirilmiş içerik */
  cta: {
    title: string;
    sub: string;
  };
  /**
   * Bu arızanın en sık görüldüğü markalar, şanzıman ailesi bazında gruplanmış.
   * 4 aile: 'DSG / DCT' | 'CVT' | 'Aisin / EAT' | 'ZF / Tork Konvertörlü'
   * sluglar lib/brands.ts ile eşleşmeli.
   * reason: BrandSection kartında gösterilen kısa teknik neden (≤6 kelime)
   */
  topBrandGroups: { label: string; slugs: string[]; reason: string }[];
}

export const SYMPTOMS: Symptom[] = [
  {
    id: 1,
    severity: 'high',
    shortLabel: 'Vuruntu',
    title: 'Vites geçişte vuruntu',
    description: 'Özellikle 1→2 ve 2→3 geçişlerde hissedilen sert darbe.',
    cause: 'Kavrama balatası aşınması veya mekatronik valf timing hatası.',
    label: 'Kavrama / Mekatronik',
    cta: {
      title: 'Vuruntu büyümeden önce teşhis ettirin.',
      sub: 'Kavrama sorunu erken yakalanırsa 5× daha ucuza çözülür.',
    },
    topBrandGroups: [
      { label: 'DSG / DCT araçları', slugs: ['volkswagen', 'audi', 'skoda', 'seat'], reason: 'Kavrama balatası aşınması riski' },
      { label: 'Aisin / EAT araçları', slugs: ['peugeot', 'citroen'], reason: 'Solenoid valf veya kavrama paketi sorunu' },
    ],
  },
  {
    id: 2,
    severity: 'high',
    shortLabel: 'Uyarı Lambası',
    title: 'DSG uyarı lambası',
    description: 'Gösterge panelinde "P" ışığı, anahtar işareti veya şanzıman simgesi.',
    cause: 'Mekatronik ünite arızası veya basınç sensörü hatası.',
    label: 'Mekatronik Ünite',
    cta: {
      title: 'Uyarı lambası sistem mesajıdır.',
      sub: 'Kalibrasyonla çözülür — büyümeden önce gelin.',
    },
    topBrandGroups: [
      { label: 'DSG / DCT araçları', slugs: ['volkswagen', 'audi', 'skoda', 'seat'], reason: 'Mekatronik ünite hata kodu' },
      { label: 'CVT araçları', slugs: ['toyota', 'honda', 'nissan'], reason: 'Basınç sensörü veya kontrol ünitesi' },
      { label: 'Aisin / EAT araçları', slugs: ['peugeot', 'citroen'], reason: 'EAT modül hata kodu' },
    ],
  },
  {
    id: 3,
    severity: 'high',
    shortLabel: 'Kayma',
    title: 'Kayma ve devir atlama',
    description: 'Gaz verildiğinde devir yükselir ama hız artmaz.',
    cause: 'Kavrama balatası sıfırlanmış veya basınç tüpü kaçak.',
    label: 'Basınç Tüpü / Kavrama',
    cta: {
      title: 'Kayma mekatronik kart belirtisidir.',
      sub: 'Bugün teşhis — büyük masrafı engelle.',
    },
    topBrandGroups: [
      { label: 'DSG / DCT araçları', slugs: ['volkswagen', 'ford', 'renault'], reason: 'Kavrama balatası sıfırlanmış' },
      { label: 'CVT araçları', slugs: ['toyota', 'honda', 'nissan'], reason: 'Kayış / pully aşınması' },
    ],
  },
  {
    id: 4,
    severity: 'medium',
    shortLabel: 'Gecikme',
    title: 'Geç vites değişimi',
    description: 'Vites geçişleri normalden yavaş, gecikmeli olur.',
    cause: 'Solenoid valf tıkanıklığı veya yağ basıncı düşüklüğü.',
    label: 'Solenoid Valf',
    cta: {
      title: 'Gecikme ihmal edilirse revizyona döner.',
      sub: '30 dakikada net teşhis. Ücretsiz.',
    },
    topBrandGroups: [
      { label: 'ZF / Tork konvertörlü araçlar', slugs: ['mercedes', 'bmw', 'opel'], reason: 'Solenoid valf tıkanıklığı' },
      { label: 'Aisin / EAT araçları', slugs: ['peugeot', 'citroen', 'toyota'], reason: 'Yağ basıncı düşüklüğü' },
      { label: 'CVT araçları', slugs: ['honda', 'nissan'], reason: 'Kayış aşınması veya kontrol birimi hatası' },
    ],
  },
  {
    id: 5,
    severity: 'medium',
    shortLabel: 'Titreşim',
    title: 'Rölantide titreşim',
    description: 'D vitesinde dururken araçta anlamsız sarsıntı.',
    cause: 'Volant balatalık problemi veya çift kütleli volant aşınması.',
    label: 'Volant / Kavrama',
    cta: {
      title: 'Titreme kavrama paketini işaret eder.',
      sub: '30 dakikada net teşhis. Ücretsiz.',
    },
    topBrandGroups: [
      { label: 'DSG / DCT araçları', slugs: ['volkswagen', 'audi', 'skoda', 'seat'], reason: 'Çift kütleli volant aşınması' },
      { label: 'Aisin / EAT araçları', slugs: ['peugeot', 'citroen', 'toyota'], reason: 'Tork konvertör titreşimi' },
    ],
  },
];

export const DEFAULT_SYMPTOM = SYMPTOMS[0];
