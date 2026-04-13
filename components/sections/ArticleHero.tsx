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
    <section className="bg-graphite-base pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Sayfa konumu" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 font-jetbrains text-xs text-iron-light">
              {breadcrumb.map((item, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden="true" className="text-iron-deep">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-text-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-text-secondary">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Category eyebrow */}
        {category && (
          <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-brass mb-4">
            {category}
          </p>
        )}

        {/* Title */}
        <h1 className="font-saira text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-text-primary leading-[1.05] mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-saira text-lg text-text-secondary max-w-2xl leading-relaxed mb-6">
            {subtitle}
          </p>
        )}

        {/* Meta: reading time + date */}
        {(readingTime || publishedDate) && (
          <div className="flex flex-wrap items-center gap-4 font-jetbrains text-xs text-iron-light">
            {publishedDate && (
              <span>{publishedDate}</span>
            )}
            {publishedDate && readingTime && (
              <span aria-hidden="true" className="text-iron-deep">·</span>
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
