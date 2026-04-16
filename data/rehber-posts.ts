export interface RehberPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  categories: string[];
}

export const REHBER_POSTS: RehberPost[] = [
  {
    slug: 'otomatik-sanziman-ariza-lambasi',
    title: 'Otomatik Şanzıman Arıza Lambası',
    excerpt:
      'DSG, EDC, CVT şanzımanlarda arıza lambası ne anlama gelir? Sarı ile kırmızı fark, limp mode ve ne yapmalısınız.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-ariza-lambasi/',
    categories: ['genel', 'ariza-lambasi'],
  },
  {
    slug: 'edc-ariza-lambasi',
    title: 'Renault EDC Arıza Lambası',
    excerpt:
      'EDC7 ve EDC8 şanzımanda sarı dişli ışığının anlamı. Clio, Fluence, Megane, Nissan Juke sahipleri için rehber.',
    date: '2026-04-17',
    href: '/rehber/edc-ariza-lambasi/',
    categories: ['edc', 'renault', 'ariza-lambasi'],
  },
  {
    slug: 'cvt-ariza-lambasi',
    title: 'CVT Arıza Lambası',
    excerpt:
      'CVT şanzımanda arıza lambası nadir yanar ama ciddiye alınmalı. Toyota, Honda, Nissan ve Subaru rehberi.',
    date: '2026-04-17',
    href: '/rehber/cvt-ariza-lambasi/',
    categories: ['cvt', 'ariza-lambasi'],
  },
  {
    slug: 'otomatik-sanziman-gecikme',
    title: 'Otomatik Şanzımanda Gecikme',
    excerpt:
      'Vites geçişi neden geç oluyor? DSG, ZF, Aisin ve CVT karşılaştırmalı — solenoid, yağ, adaptasyon ve yazılım.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-gecikme/',
    categories: ['genel', 'gecikme'],
  },
  {
    slug: 'zf-aisin-gecikme',
    title: 'ZF ve Aisin Şanzımanda Gecikme',
    excerpt:
      'ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC gecikme nedenleri, valve body revizyonu ve marka spesifik yağ uyarıları.',
    date: '2026-04-17',
    href: '/rehber/zf-aisin-gecikme/',
    categories: ['zf', 'aisin', 'gecikme'],
  },
  {
    slug: 'otomatik-sanziman-kayma',
    title: 'Otomatik Şanzımanda Kayma',
    excerpt:
      'Gaza basınca motor bağırır ama araç ivmelenmez — DSG, CVT ve tork konvertörlü şanzımanlarda kayma ve vites atlama rehberi.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-kayma/',
    categories: ['genel', 'kayma'],
  },
  {
    slug: 'dsg-kayma-vites-atlama',
    title: 'DSG Kayma ve Vites Atlama',
    excerpt:
      'DQ200 kuru, DQ250 ıslak, DQ381 ıslak kavrama farkları. Basınç tüpü, solenoid ve kavrama paketi fiyatları.',
    date: '2026-04-17',
    href: '/rehber/dsg-kayma-vites-atlama/',
    categories: ['dsg', 'kayma'],
  },
  {
    slug: 'cvt-kayma',
    title: 'CVT Şanzımanda Kayma',
    excerpt:
      'Toyota, Honda, Nissan, Subaru CVT modellerinde kayış aşınması, pully yüzey hasarı ve yağ değişimi.',
    date: '2026-04-17',
    href: '/rehber/cvt-kayma/',
    categories: ['cvt', 'kayma'],
  },
  {
    slug: 'otomatik-sanziman-sarsinti',
    title: 'Otomatik Şanzımanda Sarsıntı',
    excerpt:
      'Rölantide titreşim, klima açılınca artan sarsıntı, hızda shudder — 4 kaynak ve ayırt etme. DSG, CVT, ZF karşılaştırmalı rehber.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-sarsinti/',
    categories: ['genel', 'sarsinti'],
  },
  {
    slug: 'volant-titresim',
    title: 'Çift Kütleli Volant Titreşimi',
    excerpt:
      "DSG'de sarsıntının ana kaynağı çift kütleli volant (DMF). Belirtileri, ömrü, değişim zamanı ve kavrama paketi kombosu.",
    date: '2026-04-17',
    href: '/rehber/volant-titresim/',
    categories: ['dsg', 'volant', 'sarsinti'],
  },
  {
    slug: 'otomatik-sanziman-vuruntu',
    title: 'Otomatik Şanzımanda Vuruntu',
    excerpt:
      'DSG, PowerShift, EDC ve CVT şanzımanlarda vuruntunun nedenleri. Hangi tipte nasıl davranır, ne zaman tehlikeli olur — karşılaştırmalı rehber.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-vuruntu/',
    categories: ['genel', 'vuruntu'],
  },
  {
    slug: 'cvt-vuruntu',
    title: 'CVT Şanzımanda Vuruntu',
    excerpt:
      "CVT'de vuruntu nadirdir ama olduğunda ciddidir. Kayış aşınması, pully ve kontrol ünitesi — Toyota, Honda, Nissan rehberi.",
    date: '2026-04-17',
    href: '/rehber/cvt-vuruntu/',
    categories: ['cvt', 'vuruntu'],
  },
  {
    slug: 'edc-vuruntu',
    title: 'Renault EDC Vuruntu Belirtileri',
    excerpt:
      'EDC7 ve EDC8 şanzımanlarda vuruntu neden olur? Clio, Captur, Megane ve Nissan Juke sahipleri için rehber.',
    date: '2026-04-17',
    href: '/rehber/edc-vuruntu/',
    categories: ['edc', 'renault', 'vuruntu'],
  },
  {
    slug: 'powershift-vuruntu',
    title: 'Ford PowerShift Vuruntu Belirtileri',
    excerpt:
      'Ford Focus ve Fiesta DPS6 şanzımanda vuruntunun 5 belirtisi, nedenleri ve kavrama seti değişimi fiyatı 2026.',
    date: '2026-04-17',
    href: '/rehber/powershift-vuruntu/',
    categories: ['powershift', 'ford', 'vuruntu'],
  },
  {
    slug: 'dsg-kavrama-ariza-belirtileri',
    title: 'DSG Kavrama Arızası Belirtileri',
    excerpt:
      'Vuruntu, titreme, güç kaybı... DSG kavrama arızasının 7 kritik belirtisi ve ne zaman servise gitmeniz gerektiği.',
    date: '2026-03-30',
    href: '/rehber/dsg-kavrama-ariza-belirtileri/',
    categories: ['dsg', 'kavrama'],
  },
];
