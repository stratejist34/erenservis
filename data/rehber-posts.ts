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
    slug: 'otomatik-sanziman-vuruntu',
    title: 'Otomatik Şanzımanda Vuruntu',
    excerpt:
      'DSG, PowerShift, EDC ve CVT şanzımanlarda vuruntunun nedenleri. Hangi tipte nasıl davranır, ne zaman tehlikeli olur — karşılaştırmalı rehber.',
    date: '2026-04-17',
    href: '/rehber/otomatik-sanziman-vuruntu/',
    categories: ['genel', 'vuruntu'],
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
