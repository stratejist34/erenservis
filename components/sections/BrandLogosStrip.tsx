import Link from 'next/link';
import NextImage from 'next/image';
import { BRANDS } from '@/lib/brands';
import type { Brand } from '@/lib/brands';

// Varsayılan filtre: siyaha indir → beyaza çevir (ince konturlu logolarda ideal)
const DEFAULT_FILTER  = 'brightness(0) invert(1)';
// Dolgulu / geniş hatlı logolar için: gri tonlama → parlaklaştır (Peugeot vb.)
const FILLED_FILTER   = 'grayscale(1) brightness(4) contrast(0.6)';
// İçinde gradient olan logolar için: gradiyanı düzleştir, eşit beyazlat (Ford)
const GRADIENT_FILTER = 'grayscale(1) brightness(2) contrast(0.55)';

function getLogoFilter(filter?: 'default' | 'filled' | 'gradient'): string {
  if (filter === 'filled') return FILLED_FILTER;
  if (filter === 'gradient') return GRADIENT_FILTER;
  return DEFAULT_FILTER;
}

// 20 marka: ilk 10 ROW1, son 10 ROW2
const ROW1 = BRANDS.slice(0, 10);
const ROW2 = BRANDS.slice(10);

function LogoItem({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/arac/${brand.slug}/`}
      title={`${brand.displayName ?? brand.name} şanzıman tamiri`}
      className="flex-shrink-0"
      tabIndex={-1}
      aria-hidden="true"
    >
      <NextImage
        src={brand.logo.src}
        alt=""
        width={80}
        height={40}
        sizes="80px"
        style={{ filter: getLogoFilter(brand.logo.filter), opacity: 0.5, width: 'auto', height: '40px' }}
        className="object-contain flex-shrink-0 transition-opacity duration-300 hover:opacity-85"
      />
    </Link>
  );
}

function MarqueeRow({
  brands,
  className,
}: {
  brands: Brand[];
  className: string;
}) {
  // Seamless loop: içeriği 2 kez tekrarla, animasyon -50% noktasına geçince
  // görünmez şekilde başa döner
  const doubled = [...brands, ...brands];
  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div className={`flex gap-10 sm:gap-14 ${className}`} style={{ width: 'max-content' }}>
        {doubled.map((brand, i) => (
          <LogoItem key={`${brand.slug}-${i}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default function BrandLogosStrip() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-0 sm:px-6" aria-label="Servis verdiğimiz markalar">
      <div className="mb-5 flex flex-wrap items-center justify-center gap-2 px-4">
        <span className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">Servis Verdiğimiz Markalar</span>
      </div>

      <div className="relative">
        <div className="space-y-4">
          <MarqueeRow brands={ROW1} className="brand-marquee" />
          <MarqueeRow brands={ROW2} className="brand-marquee-rev" />
        </div>

        {/* Kenar silikleştirme */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10"
          style={{ background: 'linear-gradient(to right, #15130F, transparent)' }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10"
          style={{ background: 'linear-gradient(to left, #15130F, transparent)' }}
        />
      </div>
    </section>
  );
}
