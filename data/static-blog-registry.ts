/**
 * Mevcut static TSX blog sayfaları için read-only metadata index.
 *
 * BU DOSYAYA YENİ ENTRY EKLEME.
 * Yeni blog yazıları her zaman data/posts.json'a eklenir ve
 * app/blog/[slug]/page.tsx dynamic template'i tarafından render edilir.
 *
 * Bu dosya yalnızca önceden oluşturulmuş statik TSX sayfalarını (app/blog/slug/page.tsx)
 * blog listing'e dahil etmek için vardır. Rehber içerikleri /rehber/ namespace'inde
 * tutulur — REHBER_POSTS (data/rehber-posts.ts) kanoniktir.
 */

export interface StaticBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  categories: string[];
}

export const STATIC_BLOG_POSTS: StaticBlogPost[] = [
  // /blog/ static TSX sayfaları
  {
    slug: 'edc-sanziman-ariza-belirtileri',
    title: 'EDC Şanzıman Arıza Belirtileri | Renault Clio & Megane',
    excerpt:
      'Renault ve Dacia EDC7/EDC8 şanzıman arıza belirtileri: vuruntu, titreme, geçiş gecikmesi. Clio ve Megane modellerinde erken teşhis ve çözüm yolları.',
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
    slug: 'dsg-mekatronik-ariza-fiyati',
    title: 'DSG Mekatronik Arıza Fiyatı 2026: Tamir mi, Değişim mi?',
    excerpt:
      'DQ200 ve DQ250 mekatronik arıza fiyatları 2026 güncel listesi. Kart tamiri, hidrolik ünite revizyonu ve güçlendirilmiş basınç tüpü maliyetleri.',
    date: '2026-04-11',
    href: '/blog/dsg-mekatronik-ariza-fiyati/',
    categories: ['fiyat', 'mekatronik'],
  },
];
