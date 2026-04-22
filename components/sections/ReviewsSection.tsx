import { Star } from 'lucide-react';
import { REVIEWS } from '@/data/reviews';
import { buildReviewsSchema, schemaToString } from '@/lib/schema';

const DATE_FORMATTER = new Intl.DateTimeFormat('tr-TR', {
  month: 'long',
  year: 'numeric',
});

export default function ReviewsSection() {
  const reviewsSchema = buildReviewsSchema(
    REVIEWS.map((r) => ({
      name: r.name,
      vehicle: r.vehicle,
      rating: r.rating,
      text: r.text,
      datePublished: r.datePublished,
    })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(reviewsSchema) }}
      />

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6">
        <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">
          Müşteri Yorumları
        </div>
        <h2 className="mt-4 font-saira text-3xl font-semibold tracking-[-0.04em] lg:text-4xl text-text-primary">
          Bizden Hizmet Alanların Yorumları
        </h2>

        <div className="mt-5 flex flex-wrap items-center gap-4 font-jetbrains text-sm text-iron-light">
          <span className="font-semibold text-brass">4.6/5 Google</span>
          <span className="text-iron-deep">·</span>
          <span className="font-semibold text-brass">35 Değerlendirme</span>
          <span className="text-iron-deep">·</span>
          <span className="font-semibold text-brass">1.500+ Onarım</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={`${review.name}-${review.datePublished}`}
              className="group rounded-xl border border-border-hairline bg-graphite-elevated p-5 transition-all duration-300 hover:-translate-y-1 hover:border-border-brass"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-brass"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <time
                  dateTime={review.datePublished}
                  className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-iron-light"
                >
                  {DATE_FORMATTER.format(new Date(review.datePublished))}
                </time>
              </div>

              <p className="mt-4 font-saira text-sm leading-[1.75] text-text-secondary">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-3 border-t border-border-hairline pt-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/10 font-saira text-xs font-semibold text-brass">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-saira text-sm font-medium text-text-primary">
                    {review.name}
                  </div>
                  <div className="font-jetbrains text-xs text-iron-light">
                    {review.vehicle}
                    {review.transmissionFamily && (
                      <span className="text-brass"> · {review.transmissionFamily}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
