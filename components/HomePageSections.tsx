import HeroSectionDC from '@/components/sections/HeroSectionDC';
import SymptomSelector from '@/components/sections/SymptomSelector';
import ServicesSection from '@/components/sections/ServicesSection';
import BrandLogosStrip from '@/components/sections/BrandLogosStrip';
import ServiceWorkflow from '@/components/sections/ServiceWorkflow';
import ReviewsSection from '@/components/sections/ReviewsSection';
import BrandSection from '@/components/sections/BrandSection';
import BlogPreview from '@/components/sections/BlogPreview';
import FinalCTA from '@/components/sections/FinalCTA';
import RevealSection from '@/components/RevealSection';
import SectionMarker from '@/components/SectionMarker';

// Fold-altı ağır section'lar ayrı chunk'a — ilk JS payload'u küçültür.

export default function HomePageSections() {
  return (
    <>
      {/* Hero — no reveal, built-in hero-item animations */}
      <HeroSectionDC />

      {/* Marka logoları strip — hero'nun hemen altında */}
      <BrandLogosStrip />

      {/* ── 01 — graphite-base (sayfa default) ── */}
      <div id="ariza-tespit">
        <SectionMarker index="01" label="ARIZA_TESPIT_SISTEMI" />
        <RevealSection className="relative z-[1]" variant="drift">
          <SymptomSelector />
        </RevealSection>
      </div>

      {/* ── 02 — graphite-surface band ── */}
      <SectionMarker index="02" label="SERVIS_KATALOGU" />
      <div className="w-full bg-graphite-surface">
        <RevealSection className="relative z-[1]" variant="rise" delay={1}>
          <ServicesSection />
        </RevealSection>
      </div>

      {/* ── 03 — graphite-base (sayfa default) ── */}
      <SectionMarker index="03" label="KONTROL_ADIM_DIZISI" />
      <RevealSection className="relative z-[1]" variant="rise">
        <ServiceWorkflow />
      </RevealSection>

      {/* ── 04 — graphite-surface band ── */}
      <SectionMarker index="04" label="MUSTERI_DEGERLENDIRMELERI" />
      <div className="w-full bg-graphite-surface">
        <RevealSection className="relative z-[1]" variant="rise" delay={1}>
          <ReviewsSection />
        </RevealSection>
      </div>

      {/* ── 05 — graphite-base (sayfa default) ── */}
      <SectionMarker index="05" label="MARKA_KATALOG" />
      <RevealSection className="relative z-[1]" variant="rise">
        <BrandSection />
      </RevealSection>

      {/* ── 06 — graphite-surface band ── */}
      <SectionMarker index="06" label="TEKNIK_MAKALE_ARSIVI" />
      <div className="w-full bg-graphite-surface">
        <RevealSection className="relative z-[1]" variant="drift">
          <BlogPreview />
        </RevealSection>
      </div>

      {/* Final CTA — graphite-surface band (kapanış) */}
      <div className="w-full bg-graphite-surface">
        <RevealSection className="relative z-[1]" variant="drift" delay={1}>
          <FinalCTA />
        </RevealSection>
      </div>
    </>
  );
}
