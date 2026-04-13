import Link from 'next/link';
import Image from 'next/image';
import { BRANDS, getPrimaryTransmission, buildBrandTransmissionTitle, buildBrandTransmissionAnchor } from '@/lib/brands';
import { buildBrandListSchema } from '@/lib/schema';

const DEFAULT_FILTER  = 'brightness(0) invert(1)';
const FILLED_FILTER   = 'grayscale(1) brightness(4) contrast(0.6)';
const GRADIENT_FILTER = 'grayscale(1) brightness(2) contrast(0.55)';

function getLogoFilter(filter?: 'default' | 'filled' | 'gradient'): string {
  if (filter === 'filled') return FILLED_FILTER;
  if (filter === 'gradient') return GRADIENT_FILTER;
  return DEFAULT_FILTER;
}

const brandListSchema = buildBrandListSchema();

export default function BrandSection() {
  return (
    <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6" aria-label="Araç markaları">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandListSchema) }}
      />

      <div className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-graphite-surface px-4 py-1.5 mb-4">
          <span className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Markaya Özel Servis</span>
        </div>
        <h2 className="font-saira text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          Hangi markanın şanzımanını tamir ediyoruz?
        </h2>
        <p className="mt-3 font-saira text-sm text-iron-light max-w-xl mx-auto">
          Her markanın şanzıman ailesi farklıdır. Aracınızı seçin, size özel arıza bilgisi ve fiyat aralığı görelim.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 items-stretch">
        {BRANDS.map((brand) => {
          const primary = getPrimaryTransmission(brand);
          const displayName = brand.displayName ?? brand.name;
          const codes = primary?.codes.slice(0, 3) ?? [];
          const logoFilter = getLogoFilter(brand.logo.filter);

          return (
            <Link
              key={brand.slug}
              href={`/arac/${brand.slug}/`}
              aria-label={`${displayName} ${primary?.displayName ?? ''} şanzıman tamiri detayları`}
              className="group flex flex-col gap-3 rounded-xl border border-border-hairline bg-graphite-surface p-5 transition-all duration-200 hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-graphite-elevated p-1.5">
                <Image
                  src={brand.logo.src}
                  alt={`${displayName} şanzıman tamiri`}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className="h-full w-full object-contain"
                  style={{ filter: logoFilter, opacity: 0.7 }}
                />
              </div>

              <div>
                <h3 className="font-saira text-sm font-semibold text-text-primary leading-tight">
                  {buildBrandTransmissionTitle(brand)}
                </h3>

                <div
                  className="mt-2 flex flex-wrap gap-1"
                  aria-label="Desteklenen şanzıman kodları"
                >
                  {codes.map((code) => (
                    <span
                      key={code}
                      className="inline-flex items-center rounded-md border border-border-brass bg-brass/8 px-1.5 py-0.5 font-jetbrains text-[10px] font-medium tracking-wide text-brass"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto font-saira text-[11px] font-medium text-brass group-hover:underline">
                {buildBrandTransmissionAnchor(brand)} →
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/arac/volkswagen/"
          className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-5 py-2 font-saira text-sm text-text-secondary transition hover:text-text-primary"
        >
          Tüm Marka Sayfaları
          <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
