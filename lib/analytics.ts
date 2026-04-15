/**
 * GA4 event tracking — BrandSection conversion funnel + CTA iletişim
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

/**
 * Telefon numarasına tıklama
 * @param kaynak  - nereden tıklandı: 'hero' | 'mobile_bar' | 'floating_cta' | 'sayfa_cta' | 'footer'
 * @param sayfa   - pathname (örn. '/hizmetler/dsg-kavrama-degisimi/')
 * @param semptom - seçili semptom ID (sadece hero'da mevcut, yoksa '')
 * @param semptomEtiket - semptom türkçe adı (yoksa '')
 */
export function trackPhoneCall(params: {
  kaynak: string;
  sayfa: string;
  semptom?: string;
  semptomEtiket?: string;
}) {
  track('telefon_aramalari', {
    kaynak: params.kaynak,
    sayfa: params.sayfa,
    semptom: params.semptom ?? '',
    semptom_etiket: params.semptomEtiket ?? '',
  });
}

/**
 * WhatsApp linkine tıklama
 * @param kaynak  - nereden tıklandı: 'hero' | 'mobile_bar' | 'sayfa_cta' | 'footer'
 * @param sayfa   - pathname
 * @param semptom - seçili semptom ID
 * @param semptomEtiket - semptom türkçe adı
 * @param mesajOnizleme - pre-filled WA mesajının ilk 80 karakteri
 */
export function trackWhatsappClick(params: {
  kaynak: string;
  sayfa: string;
  semptom?: string;
  semptomEtiket?: string;
  mesajOnizleme?: string;
}) {
  track('whatsapp_yazanlar', {
    kaynak: params.kaynak,
    sayfa: params.sayfa,
    semptom: params.semptom ?? '',
    semptom_etiket: params.semptomEtiket ?? '',
    mesaj_onizleme: (params.mesajOnizleme ?? '').slice(0, 80),
  });
}
