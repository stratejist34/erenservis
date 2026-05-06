'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { RehberPost } from '@/data/rehber-posts';

interface CategoryOption {
  key: string;
  label: string;
  count: number;
}

interface RehberFilterProps {
  posts: RehberPost[];
  categories: CategoryOption[];
  categoryLabels: Record<string, string>;
}

export function RehberFilter({ posts, categories, categoryLabels }: RehberFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visiblePosts =
    activeCategory === 'all'
      ? posts
      : posts.filter((post) => post.categories.includes(activeCategory));

  const activeLabel =
    activeCategory === 'all'
      ? 'Tüm rehberler'
      : categoryLabels[activeCategory] ?? activeCategory;

  return (
    <section className="bg-[#f3ede4] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#7e6a56]">
              Tüm Rehberler
            </div>
            <h3 className="mt-2 font-saira text-3xl font-semibold text-[#1d140d]">
              Konuya göre filtreleyin
            </h3>
            <p className="mt-3 max-w-xl font-saira text-sm leading-7 text-[#6b5b48]">
              Bir konu seçtiğinizde aşağıdaki rehber listesi sadece o başlıktaki yazıları gösterir.
            </p>
          </div>

          <div className="max-w-xl">
            <div className="mb-2 font-jetbrains text-[11px] uppercase tracking-[0.16em] text-[#7e6a56]">
              Seçili Konu: {activeLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                aria-pressed={activeCategory === 'all'}
                className="inline-flex items-center gap-2 rounded-full border border-[#dccbb5] bg-[#fbf7f1] px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#6b5b48] transition-colors hover:border-[#c6a065] aria-pressed:border-[#8b6434] aria-pressed:bg-[#17110d] aria-pressed:text-[#f8f2ea]"
              >
                <span>Tümü</span>
                <span className="text-[#8b6434]">{posts.length}</span>
              </button>

              {categories.map((category) => (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  aria-pressed={activeCategory === category.key}
                  className="inline-flex items-center gap-2 rounded-full border border-[#dccbb5] bg-[#fbf7f1] px-3 py-1.5 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#6b5b48] transition-colors hover:border-[#c6a065] aria-pressed:border-[#8b6434] aria-pressed:bg-[#17110d] aria-pressed:text-[#f8f2ea]"
                >
                  <span>{category.label}</span>
                  <span className="text-[#8b6434]">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5 font-saira text-sm text-[#6b5b48]">
          {visiblePosts.length} rehber gösteriliyor.
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visiblePosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-[24px] border border-[#dfd0bd] bg-[#f8f2ea] p-6 transition-all hover:-translate-y-0.5 hover:border-[#c7aa7f] hover:bg-[#fbf7f1] hover:shadow-[0_16px_38px_rgba(54,36,17,0.10)]"
            >
              <div className="mb-4 flex flex-wrap gap-1.5">
                {post.categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-[#e4d8c9] bg-white px-2.5 py-1 font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#75624f]"
                  >
                    {categoryLabels[cat] ?? cat}
                  </span>
                ))}
              </div>

              <h4 className="font-saira text-xl font-semibold leading-snug text-[#1d140d] transition-colors group-hover:text-[#8b6434]">
                {post.title}
              </h4>
              <p className="mt-3 line-clamp-4 font-saira text-sm leading-7 text-[#625343]">
                {post.excerpt}
              </p>

              <Link
                href={post.href}
                className="mt-6 inline-flex items-center gap-2 font-saira text-sm font-semibold text-[#8b6434] hover:underline"
              >
                Rehbere Git
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
