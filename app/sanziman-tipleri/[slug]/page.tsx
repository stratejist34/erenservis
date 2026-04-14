import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Car, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { transmissions, getTransmissionBySlug, CATEGORY_LABELS } from '@/lib/sanziman';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';
import TransmissionTabs from '@/components/sanziman/TransmissionTabs';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import TrustBar from '@/components/sanziman/TrustBar';
import RelatedTransmissions from '@/components/sanziman/RelatedTransmissions';

function getFaqSchema(slug: string) {
  const faqs = TRANSMISSION_FAQS[slug];
  if (!faqs) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export function generateStaticParams() {
  return transmissions.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getTransmissionBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.erenservis.net/sanziman-tipleri/${data.slug}/`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.erenservis.net/sanziman-tipleri/${data.slug}/`,
    },
  };
}

export default async function SanzimanDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getTransmissionBySlug(slug);
  if (!data) notFound();

  const highFaultCount = data.commonFaults.filter((f) => f.severity === 'high').length;

  const faqSchema = getFaqSchema(data.slug);

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav
        className="pt-24 pb-0 px-4 sm:px-6 max-w-6xl mx-auto"
        aria-label="Navigasyon yolu"
      >
        <ol className="flex items-center gap-1.5 text-xs text-fg-muted flex-wrap">
          <li>
            <Link href="/" className="hover:text-fg transition-colors">
              Ana Sayfa
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" strokeWidth={2} />
          </li>
          <li>
            <Link href="/sanziman-tipleri/" className="hover:text-fg transition-colors">
              Şanzıman Türleri
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3 h-3" strokeWidth={2} />
          </li>
          <li className="text-fg-soft">{data.title}</li>
        </ol>
      </nav>

      {/* Hero Header */}
      <section className="pt-6 pb-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 rounded-md font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] bg-brass/8 text-brass">
              {CATEGORY_LABELS[data.category]}
            </span>
            {highFaultCount > 0 && (
              <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-status-critical-bg text-status-critical-text border border-status-critical-border/20">
                {highFaultCount} kritik arıza
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-fg leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-lg text-fg-soft leading-relaxed max-w-2xl mb-6">{data.shortDesc}</p>

          {/* Brand tags */}
          <div className="flex flex-wrap gap-2">
            {data.brands.map((brand) => (
              <span
                key={brand}
                className="px-3 py-1 rounded-lg text-sm font-medium bg-surface-1 text-fg-soft border border-edge"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {data.heroImage && (
        <section className="pb-6 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden">
              <Image
                src={data.heroImage}
                alt={`${data.title} onarımı — Eren Servis atölyesi`}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1152px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      )}

      {/* Main content + Sidebar */}
      <section className="pb-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabs — main column */}
          <div className="lg:col-span-2">
            <TransmissionTabs data={data} />
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            {/* Related models */}
            <div className="bg-surface-1 border border-edge rounded-xl p-5">
              <h2 className="text-sm font-semibold text-fg mb-3 flex items-center gap-2">
                <Car className="w-4 h-4 text-brass" strokeWidth={2} />
                Bu Şanzımanı Kullanan Araçlar
              </h2>
              <ul className="flex flex-col gap-2">
                {data.models.map((model) => (
                  <li
                    key={model}
                    className="flex items-start gap-2 text-sm text-fg-soft"
                  >
                    <ChevronRight
                      className="w-3.5 h-3.5 text-brass mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    {model}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Bar */}
            <TrustBar />

            {/* CTA card */}
            <div className="bg-brass/8 border border-border-brass rounded-xl p-5 flex flex-col gap-3">
              <p className="font-saira text-sm font-semibold text-text-primary">
                {data.title} arızasını ücretsiz tespit ettirin
              </p>
              <p className="font-saira text-xs text-text-secondary leading-relaxed">
                Araçta semptom varsa randevu almadan doğrudan gelin — ya da önce telefonla
                danışın.
              </p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border-subtle text-text-secondary font-saira text-sm font-semibold hover:border-brass hover:text-text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brass-bright text-graphite-base font-saira text-sm font-semibold hover:bg-brass transition-colors"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <TransmissionFaq slug={data.slug} />

      <RelatedTransmissions currentSlug={data.slug} />

      {/* Back link */}
      <div className="pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/sanziman-tipleri/"
            className="inline-flex items-center gap-2 text-sm text-fg-soft hover:text-fg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={2} />
            Tüm şanzıman türlerine dön
          </Link>
        </div>
      </div>

      {/* Sticky CTA — fixed bottom right on desktop */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-2">
        <a
          href={PHONE_HREF}
          className="bg-brass-bright text-graphite-base flex items-center gap-2 px-5 py-3 rounded-full font-saira font-semibold text-sm hover:bg-brass transition-colors"
          aria-label="Arıza tespiti için bizi arayın"
        >
          <Phone className="w-4 h-4" strokeWidth={2.5} />
          Arıza Tespiti — Bizi Ara
        </a>
      </div>
    </>
  );
}
