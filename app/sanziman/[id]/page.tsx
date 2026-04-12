import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  TRANSMISSIONS,
  getTransmissionById,
  buildTransmissionUrl,
} from '@/lib/transmissions';
import { getBrandsByTransmission } from '@/lib/brands';
import {
  buildTransmissionSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  schemaToString,
} from '@/lib/schema';
import CrossLinkGrid from '@/components/sections/CrossLinkGrid';
import FaqAccordion from '@/components/sections/FaqAccordion';
import ServiceWorkflow from '@/components/sections/ServiceWorkflow';
import FinalCTA from '@/components/sections/FinalCTA';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(TRANSMISSIONS).map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const t = getTransmissionById(id);
  if (!t) return {};

  const title = `${t.fullName} Tamiri | Eren Servis Bostancı`;
  const description = t.description
    ? `${t.fullName} tamiri ve revizyonu. Bostancı'nda uzman servis. ${t.description.slice(0, 100)}`
    : `${t.fullName} şanzıman tamiri. Bostancı, İstanbul.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://erenservis.net${buildTransmissionUrl(id)}`,
      siteName: 'Eren Servis',
      locale: 'tr_TR',
      type: 'website',
    },
    alternates: { canonical: `https://erenservis.net${buildTransmissionUrl(id)}` },
  };
}

export default async function TransmissionPage({ params }: PageProps) {
  const { id } = await params;
  const t = getTransmissionById(id);
  if (!t) notFound();

  const relatedBrands = getBrandsByTransmission(id);
  const faqs = t.faqs ?? [];

  const transmissionSchema = buildTransmissionSchema({
    transmission: t,
    relatedBrands,
    url: `https://erenservis.net${buildTransmissionUrl(id)}`,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Ana Sayfa', url: 'https://erenservis.net/' },
    { name: 'Şanzıman Tipleri', url: 'https://erenservis.net/sanziman/' },
    {
      name: t.shortName ?? t.displayName,
      url: `https://erenservis.net${buildTransmissionUrl(id)}`,
    },
  ]);
  const faqSchema =
    faqs.length > 0
      ? buildFAQSchema(faqs.map((f) => ({ q: f.question, a: f.answer })))
      : null;

  const brandCrossLinks = relatedBrands.map((b) => ({
    href: `/arac/${b.slug}/`,
    label: b.name,
    sublabel: b.pageContent.models.slice(0, 2).join(', '),
    logo: b.logo,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(transmissionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }}
        />
      )}

      <main className="min-h-screen bg-[#070B11]">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-eyebrow text-[#38BDF8] uppercase tracking-[0.18em] mb-3">
              {t.type} · {t.manufacturer}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-[#F0F4F8] mb-4">
              {t.fullName}
            </h1>
            {t.customerFacingName && t.customerFacingName !== t.fullName && (
              <p className="text-lg text-[#64748B] mb-4">{t.customerFacingName}</p>
            )}
            {t.description && (
              <p className="text-base text-[#94A3B8] max-w-2xl mb-8 leading-7">{t.description}</p>
            )}
            <a
              href="tel:+905327153751"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070B11] font-semibold transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 10px 40px rgba(56,189,248,0.25)' }}
            >
              Ücretsiz Ön Tanı İçin Ara
            </a>
          </div>
        </section>

        {/* Teknik Detay Kartları */}
        <section className="py-6 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Tip', value: t.type },
                { label: 'Üretici', value: t.manufacturer },
                { label: 'İlk Yıl', value: String(t.yearStart) },
                { label: 'Kodlar', value: t.codes.slice(0, 3).join(', ') },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl border border-white/8 bg-[#0C1219]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#64748B] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#F0F4F8]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bu şanzımanı kullanan markalar */}
        {brandCrossLinks.length > 0 && (
          <CrossLinkGrid
            title="Bu Şanzımanı Kullanan Araçlar"
            items={brandCrossLinks}
            variant="brand"
          />
        )}

        {/* Bilinen Arızalar */}
        {t.commonFaults && t.commonFaults.length > 0 && (
          <section className="mx-auto mt-12 max-w-4xl px-4 sm:px-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-[#F0F4F8] mb-5">
              Bilinen Arızalar
            </h2>
            <ul className="space-y-3">
              {t.commonFaults.map((fault, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-2xl border border-white/8 bg-[#0C1219]"
                >
                  <span className="text-[#F59E0B] mt-0.5 flex-shrink-0">⚠</span>
                  <span className="text-sm text-[#94A3B8] leading-6">{fault}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <ServiceWorkflow />

        {/* Trust Band */}
        <section className="mx-auto mt-8 max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: '15+', label: 'Yıl Deneyim' },
              { value: '4.000+', label: 'Tamamlanan Tamir' },
              { value: '2 Yıl', label: 'İşçilik Garantisi' },
              { value: '100%', label: 'Yazılı Teklif' },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-2xl border border-white/8 bg-[#0C1219] text-center"
              >
                <p className="text-2xl font-semibold tracking-[-0.03em] text-[#38BDF8]">
                  {s.value}
                </p>
                <p className="text-xs text-[#64748B] mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {faqs.length > 0 && <FaqAccordion items={faqs} />}

        <FinalCTA />
      </main>
    </>
  );
}
