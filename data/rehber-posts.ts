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
      'Vites geçişinde sarsıntı, takılma veya ani ileri atma hissediyorsanız ' +
      'bu büyük olasılıkla kavrama arızasının erken işaretidir. 4 senaryo ve aciliyet rehberi.',
    date: '2026-03-30',
    href: '/blog/dsg-vuruntu-semptomlari/',
    categories: ['dsg', 'kavrama', 'semptom'],
  },
  {
    slug: 'uyari-lambasi-semptomlari',
    title: 'DSG Uyarı Lambası Yandı — Ne Yapmalısınız?',
    excerpt:
      'Anahtar işareti, P sembolü veya vites göstergesi yanıp sönüyorsa ' +
      'her biri farklı anlam taşır. Hangi lamba yandığını bulun, ne yapacağınızı öğrenin.',
    date: '2026-03-30',
    href: '/blog/uyari-lambasi-semptomlari/',
    categories: ['dsg', 'uyari', 'semptom'],
  },
  {
    slug: 'dsg-mekatronik-kart',
    title: 'DSG Mekatronik Kart Fiyatı 2026',
    excerpt:
      'DSG mekatronik kart değişimi ve tamiri 2026 fiyatları: DQ200 28.000–42.000 TL, ' +
      'DQ250 32.000–48.000 TL. Tamir mi değişim mi? Ücretsiz tanı ile net karar.',
    date: '2026-04-03',
    href: '/hizmetler/dsg-mekatronik-kart/',
    categories: ['dsg', 'mekatronik', 'fiyat'],
  },
  {
    slug: 'mekatronik-nedir',
    title: 'Mekatronik Nedir? DSG Şanzımanda Görevi ve Arıza Belirtileri',
    excerpt:
      'Mekatronik ünitesi DSG şanzımanın hem beyni hem de kasıdır. ' +
      'İçindeki parçalar, arıza nedenleri ve erken müdahalenin önemi — teknik rehber.',
    date: '2026-04-10',
    href: '/blog/mekatronik-nedir/',
    categories: ['dsg', 'mekatronik', 'teknik'],
  },
  {
    slug: 'solenoid-valf-ariza-belirtileri',
    title: 'DSG Solenoid Valf Arıza Belirtileri: 7 Kritik İşaret',
    excerpt:
      'Vuruntu, limp mode, geri vitese geçememe... DSG solenoid valf arızasının ' +
      '7 kritik belirtisi ve DQ200/DQ250 model farklılıkları.',
    date: '2026-04-10',
    href: '/blog/solenoid-valf-ariza-belirtileri/',
    categories: ['dsg', 'mekatronik', 'semptom'],
  },
  {
    slug: 'edc-sanziman-ariza-belirtileri',
    title: 'EDC Şanzıman Arıza Belirtileri | Renault Clio & Megane',
    excerpt:
      'Renault ve Dacia EDC7/EDC8 şanzıman arıza belirtileri: vuruntu, titreme, geçiş gecikmesi. ' +
      'Clio ve Megane modellerinde erken teşhis ve çözüm yolları.',
    date: '2026-04-05',
    href: '/blog/edc-sanziman-ariza-belirtileri/',
    categories: ['edc', 'renault', 'semptom'],
  },
  {
    slug: 'dsg-hangi-araclarda-var',
    title: 'DSG Hangi Araçlarda Var? 2026 Tam Liste',
    excerpt:
      'DQ200, DQ250, DQ381 ve DQ500 — VW, Audi, Seat, Skoda modellerinde hangi DSG şanzımanın kullanıldığının tam listesi.',
    date: '2026-04-11',
    href: '/blog/dsg-hangi-araclarda-var/',
    categories: ['dsg', 'rehber', 'genel'],
  },
  {
    slug: 'dsg-sanziman-omru-bakimi',
    title: 'DSG Şanzıman Ömrü: Kaç KM Dayanır ve Nasıl Uzatılır?',
    excerpt:
      'DQ200 vs DQ250 ömür karşılaştırması, bakım takvimi ve ömrü kısaltan 4 hata. ' +
      'Bostancı\'da ücretsiz DSG ön tanı — Eren Servis.',
    date: '2026-04-11',
    href: '/blog/dsg-sanziman-omru-bakimi/',
    categories: ['dsg', 'bakim', 'rehber'],
  },
];
