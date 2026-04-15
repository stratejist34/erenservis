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

      <main className="min-h-screen bg-graphite-base">
        {/* Hero */}
        <section className="pt-24 pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em] mb-3">
              {t.type} · {t.manufacturer}
            </p>
            <h1 className="font-saira text-4xl md:text-5xl font-semibold tracking-[-0.045em] text-text-primary mb-4">
              {t.fullName}
            </h1>
            {t.customerFacingName && t.customerFacingName !== t.fullName && (
              <p className="font-saira text-lg text-text-secondary mb-4">{t.customerFacingName}</p>
            )}
            {t.description && (
              <p className="font-saira text-base text-text-secondary max-w-2xl mb-8 leading-7">{t.description}</p>
            )}
            <a
              href="tel:+905327153751"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-brass-bright hover:bg-brass text-graphite-base font-saira font-semibold transition-colors"
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
                  className="p-4 rounded-xl border border-border-hairline bg-graphite-surface"
                >
                  <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.15em] text-text-secondary mb-1">
                    {item.label}
                  </p>
                  <p className="font-saira text-sm font-semibold text-text-primary">{item.value}</p>
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
            <h2 className="font-saira text-xl font-semibold tracking-[-0.03em] text-text-primary mb-5">
              Bilinen Arızalar
            </h2>
            <ul className="space-y-3">
              {t.commonFaults.map((fault, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border border-border-hairline bg-graphite-surface"
                >
                  <span className="text-brass mt-0.5 flex-shrink-0">⚠</span>
                  <span className="font-saira text-sm text-text-secondary leading-6">{fault}</span>
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
              { value: '6 Ay', label: 'İşçilik Garantisi' },
              { value: '100%', label: 'Yazılı Teklif' },
            ].map((s) => (
              <div
                key={s.label}
                className="p-4 rounded-xl border border-border-hairline bg-graphite-surface text-center"
              >
                <p className="font-saira text-2xl font-semibold tracking-[-0.03em] text-brass">
                  {s.value}
                </p>
                <p className="font-saira text-xs text-text-secondary mt-1">{s.label}</p>
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
