/**
 * GA4 event tracking — BrandSection conversion funnel
 *
 * Tüm fonksiyonlar window.gtag yoksa sessizce çıkar (SSR-safe).
 */

type GtagFn = (
  command: 'event',
  name: string,
  params: Record<string, string | number | boolean>,
) => void;

function track(event: string, params: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { gtag?: GtagFn };
  w.gtag?.('event', event, params);
}

/** Featured önerilen kart tıklaması */
export function trackFeaturedBrandClick(
  brand: string,
  transmissionType: string,
  symptom: string,
  position: number,
) {
  track('featured_brand_click', {
    brand,
    transmission_type: transmissionType,
    symptom,
    position,
    source: 'featured',
  });
}

/** Katalog grid kart tıklaması */
export function trackCatalogBrandClick(
  brand: string,
  transmissionType: string,
  symptom: string,
  position: number,
) {
  track('catalog_brand_click', {
    brand,
    transmission_type: transmissionType,
    symptom,
    position,
    source: 'catalog',
  });
}

/**
 * BrandSection viewport'a girdiğinde — bir kez ateşlenir.
 * scroll_depth: 0-100 arası sayfa yüzdesi.
 */
export function trackBrandSectionView(symptom: string, scrollDepth: number) {
  track('brand_section_view', { symptom, scroll_depth: scrollDepth });
}

/**
 * Kullanıcı katalog grid'e scroll ettiğinde — bir kez ateşlenir.
 * Featured → katalog geçiş oranını ölçmek için.
 */
export function trackCatalogReached(symptom: string) {
  track('brand_catalog_reached', { symptom, source: 'catalog' });
}

/** "Markanızı seçin" micro CTA tıklaması */
export function trackMicroCtaClick(symptom: string) {
  track('brand_micro_cta_click', { symptom });
}
