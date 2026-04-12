/**
 * ArticleHero — Blog ve rehber sayfaları için ortak hero bileşeni.
 * 17 blog/rehber sayfasında kullanılacak (Sprint 4).
 * Glassmorphism yok — içerik okunabilirliği öncelikli.
 */
import Link from 'next/link';

/* ── TYPES ──────────────────────────────────────────────────────────────── */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ArticleHeroProps {
  category?: string;
  title: string;
  subtitle?: string;
  readingTime?: string;
  publishedDate?: string;
  breadcrumb?: BreadcrumbItem[];
}

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function ArticleHero({
  category,
  title,
  subtitle,
  readingTime,
  publishedDate,
  breadcrumb,
}: ArticleHeroProps) {
  return (
    <section className="bg-[#070B11] pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Sayfa konumu" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#64748B]">
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true" className="text-[#334155]">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-[#94A3B8] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#94A3B8]">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Category eyebrow */}
        {category && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#38BDF8] mb-4">
            {category}
          </p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.045em] text-[#F0F4F8] leading-[1.05] mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed mb-6">
            {subtitle}
          </p>
        )}

        {/* Meta: reading time + date */}
        {(readingTime || publishedDate) && (
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
            {publishedDate && (
              <span>{publishedDate}</span>
            )}
            {publishedDate && readingTime && (
              <span aria-hidden="true" className="text-[#334155]">·</span>
            )}
            {readingTime && (
              <span>{readingTime}</span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
