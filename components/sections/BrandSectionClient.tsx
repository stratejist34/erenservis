'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SYMPTOMS } from '@/data/symptoms';
import { useSymptom } from '@/contexts/SymptomContext';
import {
  trackFeaturedBrandClick,
  trackCatalogBrandClick,
  trackBrandSectionView,
  trackCatalogReached,
  trackMicroCtaClick,
} from '@/lib/analytics';

export type FlatBrand = {
  slug: string;
  displayName: string;
  primaryDisplayName: string;
  primaryCustomerFacingName: string;
  primaryCodes: string[];
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  logoFilter?: 'default' | 'filled' | 'gradient';
};

type Props = {
  brands: FlatBrand[];
};

const DEFAULT_FILTER = 'brightness(0) invert(1)';
const FILLED_FILTER = 'grayscale(1) brightness(4) contrast(0.6)';
const GRADIENT_FILTER = 'grayscale(1) brightness(2) contrast(0.55)';

function getLogoFilter(filter?: 'default' | 'filled' | 'gradient'): string {
  if (filter === 'filled') return FILLED_FILTER;
  if (filter === 'gradient') return GRADIENT_FILTER;
  return DEFAULT_FILTER;
}

export default function BrandSectionClient({ brands }: Props) {
  const { selectedId } = useSymptom();
  const symptom = SYMPTOMS.find((s) => s.id === selectedId) ?? SYMPTOMS[0];
  const brandsBySlug = new Map(brands.map((b) => [b.slug, b]));
  const allFeaturedSlugs = symptom.topBrandGroups.flatMap((g) => g.slugs);
  const remainingBrands = brands.filter((b) => !allFeaturedSlugs.includes(b.slug));
  const total = String(brands.length).padStart(2, '0');

  const sectionRef = useRef<HTMLElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const symptomRef = useRef(symptom.shortLabel);
  useEffect(() => {
    symptomRef.current = symptom.shortLabel;
  }, [symptom.shortLabel]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    const sectionObs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const scrollDepth = Math.round(
          (window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100,
        );
        trackBrandSectionView(symptomRef.current, scrollDepth);
        sectionObs.disconnect();
      },
      { threshold: 0.2 },
    );
    sectionObs.observe(sectionEl);

    const catalogEl = catalogRef.current;
    let catalogObs: IntersectionObserver | null = null;
    if (catalogEl) {
      catalogObs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          trackCatalogReached(symptomRef.current);
          catalogObs?.disconnect();
        },
        { threshold: 0.1 },
      );
      catalogObs.observe(catalogEl);
    }

    return () => {
      sectionObs.disconnect();
      catalogObs?.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto mt-24 max-w-7xl px-4 sm:px-6" aria-label="Araç markaları">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-graphite-surface px-4 py-1.5 mb-4">
          <span className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Markaya Özel Servis</span>
        </div>
        <h2 className="font-saira text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
          Seçtiğiniz belirtiye göre en sık görülen şanzıman aileleri
        </h2>
        <p className="mt-3 font-saira text-sm text-iron-light max-w-xl mx-auto">
          Seçtiğiniz {symptom.shortLabel} belirtisi, en çok şu şanzıman ailelerinde karşımıza çıkar.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-border-brass/30 bg-graphite-surface p-5 space-y-5">
        {(() => {
          let featuredPosition = 0;
          return symptom.topBrandGroups.map((group) => {
            const groupBrands = group.slugs
              .map((slug) => brandsBySlug.get(slug))
              .filter((b): b is FlatBrand => Boolean(b));
            return (
              <div key={group.label}>
                <div className="mb-2 font-jetbrains text-[9px] uppercase tracking-[0.18em] text-iron-light">
                  {group.label}
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {groupBrands.map((brand) => {
                    const transmissionLabel = brand.primaryCustomerFacingName || brand.primaryDisplayName;
                    const pos = featuredPosition++;
                    return (
                      <Link
                        key={brand.slug}
                        href={`/arac/${brand.slug}/`}
                        aria-label={`${brand.displayName} şanzıman tamiri`}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-border-brass border-l-[3px] border-l-brass bg-graphite-elevated p-3 transition-colors duration-200 hover:bg-graphite-base"
                        onClick={() =>
                          trackFeaturedBrandClick(
                            brand.displayName,
                            brand.primaryDisplayName,
                            symptom.shortLabel,
                            pos,
                          )
                        }
                      >
                        <div className="min-w-0 flex-1">
                          <div className="font-saira text-sm font-semibold text-text-primary">{brand.displayName}</div>
                          {transmissionLabel && (
                            <div className="mt-0.5 font-jetbrains text-xs text-iron-light">{transmissionLabel}</div>
                          )}
                          <div className="mt-1 font-jetbrains text-xs text-text-secondary">{group.reason}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          });
        })()}
      </div>

      <p
        className="mb-8 text-center font-saira text-sm text-iron-light cursor-default"
        onClick={() => trackMicroCtaClick(symptom.shortLabel)}
      >
        Markanızı seçin — size özel arıza ve maliyet senaryosunu gösterelim
      </p>

      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-border-hairline" />
        <span className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-iron-light/50">Markanız yukarıda yoksa — biz yine de buradayız</span>
        <div className="h-px flex-1 bg-border-hairline" />
      </div>

      <div ref={catalogRef} className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 items-stretch">
        {remainingBrands.map((brand, i) => {
          const transmissionLabel = brand.primaryCustomerFacingName || brand.primaryDisplayName;
          const codes = brand.primaryCodes;
          const logoFilter = getLogoFilter(brand.logoFilter);
          const index = String(i + 1).padStart(2, '0');

          return (
            <Link
              key={brand.slug}
              href={`/arac/${brand.slug}/`}
              aria-label={`${brand.displayName} ${brand.primaryDisplayName} şanzıman tamiri detayları`}
              className="group relative overflow-hidden rounded-xl border border-border-subtle bg-graphite-surface p-5 pb-14 transition-colors duration-200 hover:border-border-brass hover:bg-graphite-elevated"
              onClick={() =>
                trackCatalogBrandClick(
                  brand.displayName,
                  brand.primaryDisplayName,
                  symptom.shortLabel,
                  i,
                )
              }
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-jetbrains text-[10px] tracking-[0.12em] text-iron-light">
                  MARK_{index} / {total}
                </span>
                <span className="text-iron-light" style={{ fontSize: '7px' }}>◆</span>
              </div>

              <div className="font-saira text-xl font-semibold leading-tight text-text-primary">
                {brand.displayName}
              </div>

              {transmissionLabel && (
                <div className="mt-1 font-jetbrains text-[10px] leading-relaxed text-iron-light">
                  {transmissionLabel}
                </div>
              )}

              {codes.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5" aria-label="Desteklenen şanzıman kodları">
                  {codes.map((code) => (
                    <span
                      key={code}
                      className="inline-flex items-center rounded border border-border-hairline bg-graphite-base px-1.5 py-0.5 font-jetbrains text-[9px] font-medium tracking-wide text-iron-light"
                    >
                      {code}
                    </span>
                  ))}
                </div>
              )}

              <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 translate-x-3 translate-y-3" aria-hidden="true">
                <Image
                  src={brand.logoSrc}
                  alt=""
                  width={brand.logoWidth}
                  height={brand.logoHeight}
                  className="h-full w-full object-contain"
                  style={{ filter: logoFilter, opacity: 0.12 }}
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/arac/"
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
