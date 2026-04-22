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
    canonical: 'https://www.erenservis.net/arac/',
  },
};

const DEFAULT_FILTER = 'brightness(0) invert(1)';
const FILLED_FILTER  = 'grayscale(1) brightness(4) contrast(0.6)';
const GRADIENT_FILTER = 'grayscale(1) brightness(2) contrast(0.55)';

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
      <section className="bg-graphite-base pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              20 Marka Uzmanlığı
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            Şanzıman Tamiri{' '}
            <span className="text-brass">Hizmet Verdiğimiz Markalar</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
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
        bgClass="bg-graphite-base"
      />

      <BrandTierSection
        title="Yaygın Pazar Markaları"
        subtitle="Sürekli hizmet verdiğimiz, geniş pazar payına sahip markalar"
        brands={tier2}
        bgClass="bg-graphite-surface"
      />

      <BrandTierSection
        title="Diğer Hizmet Verdiğimiz Markalar"
        subtitle="Spesifik şanzıman ailelerinde uzmanlığımızla servis verdiğimiz markalar"
        brands={tier3}
        bgClass="bg-graphite-base"
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">{title}</h2>
          <p className="font-saira text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.map((brand) => {
            const primary = getPrimaryTransmission(brand);
            const displayName = brand.displayName ?? brand.name;
            return (
              <Link
                key={brand.slug}
                href={`/arac/${brand.slug}/`}
                className="group p-5 rounded-xl border border-border-hairline bg-graphite-surface hover:border-border-brass hover:bg-graphite-elevated transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <Image
                      src={brand.logo.src}
                      alt={`${displayName} şanzıman tamiri`}
                      width={brand.logo.width}
                      height={brand.logo.height}
                      className="h-7 w-auto object-contain"
                      style={{ filter: getLogoFilter(brand.logo.filter), opacity: 0.7 }}
                    />
                  </div>
                  <h3 className="font-saira text-sm font-semibold text-text-primary leading-tight">
                    {displayName}
                  </h3>
                </div>
                {primary && (
                  <p className="font-saira text-xs text-text-secondary leading-snug">{primary.displayName}</p>
                )}
                <div className="mt-3 font-saira text-[11px] font-medium text-brass group-hover:underline">
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
