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
  {
    slug: 'dsg-vuruntu-semptomlari',
    title: 'DSG Şanzımanda Vuruntu Neden Olur?',
    excerpt:
      'Vites geçişinde sarsıntı veya ani ileri atma hissediyorsanız bu büyük olasılıkla kavrama arızasının erken işaretidir. 4 senaryo ve aciliyet rehberi.',
    date: '2026-03-30',
    href: '/rehber/dsg-vuruntu-semptomlari/',
    categories: ['dsg', 'kavrama', 'semptom'],
  },
  {
    slug: 'dsg-1-2-vites-silkeleme',
    title: "DSG 1'den 2'ye Geçerken Silkeleme",
    excerpt:
      "DQ200 ve DQ250'de 1'den 2'ye geçişte silkeleme neden olur, kavrama mı mekatronik mi, adaptasyon ne zaman yeterli kalır?",
    date: '2026-05-04',
    href: '/rehber/dsg-1-2-vites-silkeleme/',
    categories: ['dsg', 'kavrama', 'semptom'],
  },
  {
    slug: 'dsg-anahtar-isareti-yanip-sonuyor',
    title: 'DSG Anahtar İşareti Yanıp Sönüyor',
    excerpt:
      "DSG'de anahtar işareti veya anahtarlı dişli ikonu ne anlatır, ne zaman servis gerekir, ne zaman çekici gerekir?",
    date: '2026-05-04',
    href: '/rehber/dsg-anahtar-isareti-yanip-sonuyor/',
    categories: ['dsg', 'uyari', 'semptom'],
  },
  {
    slug: 'dsg-kavrama-tolerans-limiti',
    title: 'DSG Kavrama Tolerans Limitine Ulaşıldı',
    excerpt:
      "Kavrama 1 veya Kavrama 2 tolerans limiti kodu ne anlatır, adaptasyon ne zaman yeter, ne zaman değişim gündeme gelir?",
    date: '2026-05-04',
    href: '/rehber/dsg-kavrama-tolerans-limiti/',
    categories: ['dsg', 'kavrama', 'semptom'],
  },
  {
    slug: 'dsg-yokusta-geri-kacirma',
    title: 'DSG Yokuşta Geri Kaçırıyor',
    excerpt:
      "DSG rampada geri kaçıyorsa kavrama mı, hill-hold mu, mekatronik basınç mı? DQ200 ve DQ250 için risk ve karar rehberi.",
    date: '2026-05-04',
    href: '/rehber/dsg-yokusta-geri-kacirma/',
    categories: ['dsg', 'kavrama', 'semptom'],
  },
  {
    slug: 'dsg-yag-kacagi-belirtileri',
    title: 'DSG Yağ Kaçağı Belirtileri',
    excerpt:
      'DSG yağ sızıntısı zemindeki iz, geç bağlama, vuruntu ve sıcak sürüşte karakter değişimiyle nasıl anlaşılır? Karar rehberi.',
    date: '2026-05-04',
    href: '/rehber/dsg-yag-kacagi-belirtileri/',
    categories: ['dsg', 'yag-kacagi', 'semptom'],
  },
  {
    slug: 'uyari-lambasi-semptomlari',
    title: 'DSG Uyarı Lambası Yandı — Ne Yapmalısınız?',
    excerpt:
      'Anahtar işareti, P sembolü veya vites göstergesi yanıp sönüyorsa her biri farklı anlam taşır. Hangi lamba yandığını bulun, ne yapacağınızı öğrenin.',
    date: '2026-03-30',
    href: '/rehber/uyari-lambasi-semptomlari/',
    categories: ['dsg', 'uyari', 'semptom'],
  },
  {
    slug: 'mekatronik-nedir',
    title: 'Mekatronik Nedir? DSG Şanzımanda Görevi ve Arıza Belirtileri',
    excerpt:
      'Mekatronik ünitesi DSG şanzımanın hem beyni hem de kasıdır. İçindeki parçalar, arıza nedenleri ve erken müdahalenin önemi — teknik rehber.',
    date: '2026-04-10',
    href: '/rehber/mekatronik-nedir/',
    categories: ['dsg', 'mekatronik', 'teknik'],
  },
  {
    slug: 'solenoid-valf-ariza-belirtileri',
    title: 'DSG Solenoid Valf Arıza Belirtileri: 7 Kritik İşaret',
    excerpt:
      'Vuruntu, limp mode, geri vitese geçememe... DSG solenoid valf arızasının 7 kritik belirtisi ve DQ200/DQ250 model farklılıkları.',
    date: '2026-04-10',
    href: '/rehber/solenoid-valf-ariza-belirtileri/',
    categories: ['dsg', 'mekatronik', 'semptom'],
  },
  {
    slug: 'dsg-sanziman-omru-bakimi',
    title: 'DSG Şanzıman Ömrü ve Bakımı',
    excerpt:
      'DSG şanzıman kaç km gider? DQ200, DQ250, DQ381 ömür farkları, bakım aralıkları ve ömrü uzatan 5 kural.',
    date: '2026-04-10',
    href: '/rehber/dsg-sanziman-omru-bakimi/',
    categories: ['dsg', 'bakim'],
  },
  {
    slug: 'passat-dsg-sanziman-sorunlari',
    title: 'Passat DSG Şanzıman Sorunları',
    excerpt:
      "Passat'ta DQ250, DQ381 ve DQ500 farkları, uzun yol ve filo kullanımında görülen DSG belirtileri, mekatronik mi kavrama mı ayrımı.",
    date: '2026-05-04',
    href: '/rehber/passat-dsg-sanziman-sorunlari/',
    categories: ['dsg', 'gecikme', 'kayma'],
  },
  {
    slug: 'otomatik-sanziman-tamiri-fiyat',
    title: 'Otomatik Şanzıman Tamiri Ne Kadar Tutar? 2026 Fiyat Rehberi',
    excerpt:
      'DSG, ZF, Aisin, CVT ve PowerShift otomatik şanzıman tamir fiyatları 2026. Hangi arıza ne kadar, nelere dikkat edilmeli.',
    date: '2026-04-10',
    href: '/rehber/otomatik-sanziman-tamiri-fiyat/',
    categories: ['genel', 'fiyat'],
  },
  {
    slug: 'golf-7-dsg-sanziman-sorunlari',
    title: 'Golf 7 DSG Şanzıman Sorunları',
    excerpt:
      "Golf 7'de DQ200 ve DQ250 farkı, hangi kilometrede hangi belirti geldiği, kavrama-mekatronik ayrımı ve bakım disiplini rehberi.",
    date: '2026-05-04',
    href: '/rehber/golf-7-dsg-sanziman-sorunlari/',
    categories: ['dsg', 'golf', 'model'],
  },
  {
    slug: 'skoda-octavia-dsg-sanziman-sorunlari',
    title: 'Skoda Octavia DSG Şanzıman Sorunları',
    excerpt:
      "Octavia'da DQ200 ve DQ250 farkı, aile ve ticari kullanıma göre yorulma davranışı, kavrama-mekatronik ayrımı ve bakım disiplini rehberi.",
    date: '2026-05-04',
    href: '/rehber/skoda-octavia-dsg-sanziman-sorunlari/',
    categories: ['dsg', 'octavia', 'model'],
  },
  {
    slug: 'audi-a3-s-tronic-sanziman-sorunlari',
    title: 'Audi A3 S-Tronic Şanzıman Sorunları',
    excerpt:
      "A3'te S-Tronic ile DSG ilişkisi, DQ200 ve DQ250 farkı, premium beklentiyle öne çıkan belirtiler ve doğru servis kararı rehberi.",
    date: '2026-05-04',
    href: '/rehber/audi-a3-s-tronic-sanziman-sorunlari/',
    categories: ['dsg', 'audi', 'model'],
  },
  {
    slug: 'volkswagen-dq200-sanziman-sorunlari',
    title: 'Volkswagen DQ200 Şanzıman Sorunları',
    excerpt:
      'Volkswagen DQ200 kuru DSG’de P17BF, basınç tüpü, 1-2 silkelemesi ve kronik mekatronik-kavrama davranışları için karar rehberi.',
    date: '2026-05-04',
    href: '/rehber/volkswagen-dq200-sanziman-sorunlari/',
    categories: ['dsg', 'volkswagen', 'dq200'],
  },
  {
    slug: 'sanziman-arizasi-nasil-anlasilir',
    title: 'Şanzıman Arızası Nasıl Anlaşılır?',
    excerpt:
      'Şanzıman arızası gecikme, vuruntu, ses, koku, kaçak ve uyarı lambasıyla nasıl anlaşılır? İlk karar rehberi.',
    date: '2026-05-04',
    href: '/rehber/sanziman-arizasi-nasil-anlasilir/',
    categories: ['genel', 'semptom', 'ariza'],
  },
];
