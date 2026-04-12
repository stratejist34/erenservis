import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBrandsByTier, getPrimaryTransmission } from '@/lib/brands';
import type { Brand } from '@/lib/brands';

export const metadata: Metadata = {
  title: 'Tüm Markalar | Şanzıman Tamiri Hizmet Verdiğimiz Araçlar',
  description:
    'Volkswagen, BMW, Mercedes, Audi, Renault, Ford, Fiat ve daha fazlası. 20 marka için DSG, ZF 8HP, EDC, PowerShift, Aisin EAT şanzıman tamiri Bostancı.',
  alternates: {
    canonical: 'https://erenservis.net/arac/',
  },
};

const DEFAULT_FILTER = 'brightness(0) invert(0.3)';
const FILLED_FILTER = 'grayscale(1) brightness(0.4) contrast(1)';
const GRADIENT_FILTER = 'grayscale(1) brightness(0.5) contrast(0.8)';

function getLogoFilter(filter?: 'default' | 'filled' | 'gradient'): string {
  if (filter === 'filled') return FILLED_FILTER;
  if (filter === 'gradient') return GRADIENT_FILTER;
  return DEFAULT_FILTER;
}

export default function MarkalarIndexPage() {
  const tier1 = getBrandsByTier(1);
  const tier2 = getBrandsByTier(2);
  const tier3 = getBrandsByTier(3);

  return (
    <main>
      {/* Hero */}
      <section className="hero-deep pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <span className="text-xs font-semibold text-accent-soft uppercase tracking-wider">
              20 Marka Uzmanlığı
            </span>
          </div>
          <h1 className="text-hero-text mb-5">
            Şanzıman Tamiri{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'var(--gradient-accent)' }}
            >
              Hizmet Verdiğimiz Markalar
            </span>
          </h1>
          <p className="text-hero-muted text-lg leading-relaxed max-w-2xl mx-auto">
            DSG, ZF 8HP, EDC, PowerShift, Aisin EAT ve CVT şanzıman ailelerinde 20 markaya
            hizmet veriyoruz. Aracınızı seçin, marka-spesifik bilgileri ve uzmanlık alanlarımızı
            görün.
          </p>
        </div>
      </section>

      <BrandTierSection
        title="Ana Uzmanlık Markaları"
        subtitle="Sahaya en sık gelen ve teknik derinliğimizin en güçlü olduğu markalar"
        brands={tier1}
        bgClass="bg-white"
      />

      <BrandTierSection
        title="Yaygın Pazar Markaları"
        subtitle="Sürekli hizmet verdiğimiz, geniş pazar payına sahip markalar"
        brands={tier2}
        bgClass="bg-content-secondary"
      />

      <BrandTierSection
        title="Diğer Hizmet Verdiğimiz Markalar"
        subtitle="Spesifik şanzıman ailelerinde uzmanlığımızla servis verdiğimiz markalar"
        brands={tier3}
        bgClass="bg-white"
      />
    </main>
  );
}

function BrandTierSection({
  title,
  subtitle,
  brands,
  bgClass,
}: {
  title: string;
  subtitle: string;
  brands: Brand[];
  bgClass: string;
}) {
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-content-text mb-3">{title}</h2>
          <p className="text-content-muted max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand) => {
            const primary = getPrimaryTransmission(brand);
            const displayName = brand.displayName ?? brand.name;
            return (
              <Link
                key={brand.slug}
                href={`/arac/${brand.slug}/`}
                className="group p-5 rounded-2xl bg-white border border-content-border hover:border-accent transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <Image
                      src={brand.logo.src}
                      alt={`${displayName} şanzıman tamiri`}
                      width={brand.logo.width}
                      height={brand.logo.height}
                      className="h-7 w-auto object-contain"
                      style={{ filter: getLogoFilter(brand.logo.filter) }}
                    />
                  </div>
                  <h3 className="text-content-text font-bold text-sm leading-tight">
                    {displayName}
                  </h3>
                </div>
                {primary && (
                  <p className="text-content-muted text-xs leading-snug">{primary.displayName}</p>
                )}
                <div className="mt-3 text-[11px] font-medium text-accent group-hover:underline">
                  Servis detayı →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
