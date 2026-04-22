import { BRANDS, getPrimaryTransmission } from '@/lib/brands';
import { buildBrandListSchema } from '@/lib/schema';
import BrandSectionClient, { type FlatBrand } from './BrandSectionClient';

const brandListSchema = buildBrandListSchema();

// Server-side: ağır `lib/brands.ts` ve `lib/transmissions.ts` modüllerini burada
// çözer, client bundle'a yalnızca düzleştirilmiş minimum veri gönderir.
const FLAT_BRANDS: FlatBrand[] = BRANDS.map((b) => {
  const primary = getPrimaryTransmission(b);
  return {
    slug: b.slug,
    displayName: b.displayName ?? b.name,
    primaryDisplayName: primary?.displayName ?? '',
    primaryCustomerFacingName: primary?.customerFacingName ?? '',
    primaryCodes: primary?.codes.slice(0, 3) ?? [],
    logoSrc: b.logo.src,
    logoWidth: b.logo.width,
    logoHeight: b.logo.height,
    logoFilter: b.logo.filter,
  };
});

export default function BrandSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandListSchema) }}
      />
      <BrandSectionClient brands={FLAT_BRANDS} />
    </>
  );
}
