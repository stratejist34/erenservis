import HeroSection from '@/components/sections/HeroSection';
import SymptomSelector from '@/components/sections/SymptomSelector';
import ServicesSection from '@/components/sections/ServicesSection';
import ServiceWorkflow from '@/components/sections/ServiceWorkflow';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FinalCTA from '@/components/sections/FinalCTA';
import BrandLogosStrip from '@/components/sections/BrandLogosStrip';
import BrandSection from '@/components/sections/BrandSection';
import BlogPreview from '@/components/sections/BlogPreview';
import RevealSection from '@/components/RevealSection';

export default function HomePageSections() {
  return (
    <>
      {/* Hero — no reveal, built-in hero-item animations */}
      <HeroSection />

      {/* Marka logoları strip — hero'nun hemen altında */}
      <BrandLogosStrip />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-16">
        <div className="section-divider" />
      </div>

      {/* Belirtiler */}
      <RevealSection className="relative z-[1]" variant="drift">
        <SymptomSelector />
      </RevealSection>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="section-divider" />
      </div>

      {/* Hizmetler */}
      <RevealSection className="relative z-[1]" variant="rise" delay={1}>
        <ServicesSection />
      </RevealSection>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="section-divider" />
      </div>

      {/* 4 Adım Süreç */}
      <RevealSection className="relative z-[1]" variant="rise">
        <ServiceWorkflow />
      </RevealSection>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="section-divider" />
      </div>

      {/* Müşteri Yorumları */}
      <RevealSection className="relative z-[1]" variant="rise" delay={1}>
        <ReviewsSection />
      </RevealSection>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="section-divider" />
      </div>

      {/* Marka Sayfaları — Blog Preview öncesi */}
      <RevealSection className="relative z-[1]" variant="rise">
        <BrandSection />
      </RevealSection>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-24">
        <div className="section-divider" />
      </div>

      {/* Blog Preview — Yorumlar ile Final CTA arası */}
      <RevealSection className="relative z-[1]" variant="drift">
        <BlogPreview />
      </RevealSection>

      {/* Final CTA — kapanış */}
      <RevealSection className="relative z-[1]" variant="drift" delay={1}>
        <FinalCTA />
      </RevealSection>
    </>
  );
}
