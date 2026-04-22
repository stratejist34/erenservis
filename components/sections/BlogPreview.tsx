import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

/**
 * Son 3 blog/rehber yazısı preview'ı.
 * Ana sayfada Yorumlar ile Final CTA arasında gösterilir.
 * Statik veri — server component, 0 JS client-side.
 */

const PREVIEW_POSTS = [
  {
    title: 'Otomatik Şanzıman Tamiri Ne Kadar Tutar?',
    excerpt: 'DSG kavrama, mekatronik kart, CVT — 2026 güncel fiyat tablosu ve arıza türüne göre rehber.',
    href: '/rehber/otomatik-sanziman-tamiri-fiyat/',
    category: 'Fiyat Rehberi',
  },
  {
    title: 'DSG Kavrama Arızası Belirtileri',
    excerpt: 'Vuruntu, titreme, güç kaybı... DSG kavrama arızasının 7 kritik belirtisi.',
    href: '/rehber/dsg-kavrama-ariza-belirtileri/',
    category: 'DSG Rehber',
  },
  {
    title: 'DSG Mekatronik Kart Fiyatı 2026',
    excerpt: 'DQ200 ve DQ250 mekatronik kart değişimi ve tamiri fiyatları. Tamir mi değişim mi?',
    href: '/hizmetler/dsg-mekatronik-kart/',
    category: 'Fiyat',
  },
] as const;

export default function BlogPreview() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">
            Bilgi Merkezi
          </div>
          <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-text-primary">
            Şanzıman rehberi
          </h2>
        </div>
        <Link
          href="/blog/"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border-subtle px-4 py-2 font-saira text-sm font-medium text-text-secondary transition hover:border-brass hover:text-text-primary"
        >
          Tüm Yazılar
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {PREVIEW_POSTS.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group rounded-xl border border-border-hairline bg-graphite-elevated p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-brass"
          >
            {/* Category tag */}
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-3.5 w-3.5 text-brass" strokeWidth={2} />
              <span className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.18em] text-brass">
                {post.category}
              </span>
            </div>

            <h3 className="font-saira text-base font-semibold tracking-[-0.02em] text-text-primary leading-snug mb-2 group-hover:text-brass transition-colors duration-200">
              {post.title}
            </h3>
            <p className="font-saira text-sm leading-6 text-text-secondary mb-4">
              {post.excerpt}
            </p>

            <span className="inline-flex items-center gap-1 font-saira text-sm font-medium text-brass group-hover:gap-2 transition-all duration-200">
              Oku
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile "tüm yazılar" link */}
      <div className="mt-6 text-center sm:hidden">
        <Link
          href="/blog/"
          className="inline-flex items-center gap-1.5 font-saira text-sm font-medium text-brass"
        >
          Tüm Yazılar
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
