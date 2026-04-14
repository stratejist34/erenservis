import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Phone,
  MessageCircle,
  Settings,
  CheckCircle2,
  Clock,
  Shield,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import {
  MARKA_DATA,
  getBrandBySlug,
  getPrimaryTransmission,
  getSecondaryTransmissions,
  getBrandsByTransmission,
  buildBrandTransmissionTitle,
  buildBrandTransmissionAnchor,
} from '@/lib/brands';
import { buildFAQSchema, buildServiceSchema } from '@/lib/schema';
import { TRANSMISSIONS, buildTransmissionUrl } from '@/lib/transmissions';
import CrossLinkGrid from '@/components/sections/CrossLinkGrid';

export const dynamic = 'force-static';

interface Props {
  params: Promise<{ marka: string }>;
}

export function generateStaticParams() {
  return Object.keys(MARKA_DATA).map((marka) => ({ marka }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marka } = await params;
  const data = MARKA_DATA[marka];

  if (!data) return {};

  return {
    title: data.baslik,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `https://erenservis.vercel.app/arac/${marka}/`,
    },
  };
}

const PHONE_HREF = 'tel:+905327153751';
const PHONE = '0532 715 37 51';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

export default async function MarkaPage({ params }: Props) {
  const { marka } = await params;
  const data = MARKA_DATA[marka];
  if (!data) notFound();

  const brand = getBrandBySlug(marka);
  if (!brand) notFound();

  const primary = getPrimaryTransmission(brand);
  const secondary = getSecondaryTransmissions(brand);
  const crossBrandUsers = primary
    ? getBrandsByTransmission(primary.id).filter((b) => b.slug !== brand.slug)
    : [];

  const transmissionCrossLinks = brand.transmissions
    .map((bt) => {
      const t = TRANSMISSIONS[bt.familyId];
      if (!t) return null;
      return {
        href: buildTransmissionUrl(bt.familyId),
        label: t.shortName ?? t.displayName,
        sublabel: t.customerFacingName ?? t.displayName,
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const brandLabel = brand.displayName ?? brand.name;

  const transmissionPhrase = primary
    ? buildBrandTransmissionAnchor(brand).replace(' tamiri', '')
    : `${brandLabel} şanzıman`;

  const faqs = [
    {
      q: `${transmissionPhrase} tamiri ne kadar sürer?`,
      a: 'Arıza türüne göre değişmekle birlikte ortalama 1-7 iş günü içinde tamir tamamlanır. Mekatronik onarımı genellikle 2-3 gün, kavrama değişimi 3-5 gün, komple revizyon 5-7 gün sürer. Detaylı süre, ön tanı sonrası size bildirilir.',
    },
    {
      q: `${brandLabel} şanzıman tamirinde garanti veriyor musunuz?`,
      a: 'Evet, tüm şanzıman onarım işçiliğimiz 6 ay yazılı garanti kapsamındadır. Garanti kapsamı yapılan işleme göre değişebilir, detaylar fatura ile birlikte size verilir.',
    },
    {
      q: 'Ön tanı için ücret alıyor musunuz?',
      a: 'Hayır, arıza tespiti ve maliyet tahmini tamamen ücretsizdir. Aracınızı getirdiğinizde inceleyip size bilgi veriyoruz, tamir kararı sizin.',
    },
    {
      q: `${transmissionPhrase} tamir maliyeti nasıl belirlenir?`,
      a: 'Maliyet; arıza tipi, gerekli parça, işçilik süresi ve kullanılacak yedek parça türüne göre hesaplanır. Ücretsiz ön tanı sonrası net fiyat tarafınıza bildirilir, onayınız olmadan işleme başlanmaz.',
    },
    {
      q: 'Orijinal yedek parça mı kullanıyorsunuz?',
      a: 'Müşteri tercihine göre orijinal veya kaliteli muadil parça kullanılır. Her iki seçeneğin avantajları ve fiyat farkı önceden tarafınıza açıklanır.',
    },
  ];

  const faqSchema = buildFAQSchema(faqs);

  const serviceSchema = primary
    ? buildServiceSchema({
        name: buildBrandTransmissionTitle(brand),
        description: primary.description,
        url: `https://erenservis.vercel.app/arac/${marka}/`,
        areaServed: ['Bostancı', 'Kadıköy', 'İstanbul'],
      })
    : null;

  return (
    <main>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      {/* 1. Hero */}
      <section className="bg-graphite-base pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border-brass bg-brass/8 mb-6">
            <span className="font-jetbrains text-[10px] font-semibold text-brass uppercase tracking-[0.22em]">
              {brandLabel} Uzmanlığı
            </span>
          </div>
          <h1 className="font-saira text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-text-primary mb-5">
            {brandLabel}{' '}
            <span className="text-brass">Şanzıman Tamiri</span>
          </h1>
          <p className="font-saira text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-6">
            {data.description}
          </p>

          {/* Güven mini-bandı */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8 text-sm">
            <div className="flex items-center gap-2 font-saira text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-brass" />
              <span>6 ay yazılı garanti</span>
            </div>
            <div className="flex items-center gap-2 font-saira text-text-secondary">
              <Clock className="w-4 h-4 text-brass" />
              <span>Arızaya göre 1-7 iş günü</span>
            </div>
            <div className="flex items-center gap-2 font-saira text-text-secondary">
              <Shield className="w-4 h-4 text-brass" />
              <span>Ücretsiz ön tanı</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2.5 px-7 py-3.5 text-base transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold text-base hover:border-brass hover:text-text-primary transition-all"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      {/* 2. Primary Şanzıman Detay */}
      {primary && (
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-brass/8 border border-border-brass font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass mb-3">
                Ana Uzmanlık
              </span>
              <h2 className="font-saira font-semibold text-2xl text-text-primary mb-3">{primary.fullName}</h2>
              <p className="font-saira text-text-secondary max-w-2xl mx-auto">{primary.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {primary.codes.map((code) => (
                <span
                  key={code}
                  className="px-3 py-1.5 rounded-md bg-graphite-base border border-border-hairline font-jetbrains text-xs font-semibold text-text-primary"
                >
                  {code}
                </span>
              ))}
            </div>

            {primary.commonFaults && primary.commonFaults.length > 0 && (
              <div className="bg-graphite-base rounded-xl p-6 border border-border-hairline">
                <h3 className="font-saira font-semibold text-text-primary text-base mb-4">
                  {primary.displayName} Yaygın Arıza Belirtileri
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {primary.commonFaults.map((fault) => (
                    <li key={fault} className="flex items-start gap-2 font-saira text-sm text-text-primary">
                      <AlertCircle
                        className="w-4 h-4 text-brass shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span>{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Modeller */}
      <section className="pt-16 pb-8 bg-graphite-base">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira font-semibold text-2xl text-text-primary text-center mb-3">
            Servis Verdiğimiz {brandLabel} Modelleri
          </h2>
          <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
            {brandLabel} modellerinde şanzıman tamiri ve revizyon deneyimi
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.modeller.map((model) => (
              <span
                key={model}
                className="px-5 py-2.5 rounded-xl bg-graphite-surface border border-border-hairline font-saira text-text-primary font-medium text-sm"
              >
                {brandLabel} {model}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Diğer Şanzıman Aileleri */}
      {secondary.length > 0 && (
        <section className="py-16 bg-graphite-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-saira font-semibold text-2xl text-text-primary text-center mb-3">
              {brandLabel} Diğer Şanzıman Aileleri
            </h2>
            <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
              Aynı zamanda servis verdiğimiz diğer şanzıman tipleri
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {secondary.map((s) => (
                <div key={s.id} className="p-6 rounded-xl bg-graphite-base border border-border-hairline">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brass/8 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-brass" />
                    </div>
                    <h3 className="font-saira font-semibold text-text-primary text-base">{s.displayName}</h3>
                  </div>
                  <p className="font-saira text-text-secondary text-sm leading-relaxed mb-3">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.codes.slice(0, 4).map((code) => (
                      <span
                        key={code}
                        className="px-2 py-0.5 rounded font-jetbrains text-[10px] font-semibold bg-graphite-elevated border border-border-hairline text-text-secondary"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4b. Şanzıman Teknolojileri cross-link */}
      {transmissionCrossLinks.length > 0 && (
        <CrossLinkGrid
          title={`${brandLabel} Şanzıman Teknolojileri`}
          items={transmissionCrossLinks}
          variant="transmission"
        />
      )}

      {/* 5. Cross-Brand */}
      {primary && crossBrandUsers.length >= 2 && (
        <section className="pt-8 pb-16 bg-graphite-base">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-saira font-semibold text-2xl text-text-primary mb-3">
              {primary.displayName} Hangi Markalarda Var?
            </h2>
            <p className="font-saira text-text-secondary mb-8 max-w-2xl mx-auto">
              {primary.displayName} şanzıman ailesi {brandLabel} dışında şu markalarda da
              kullanılır. Aynı uzmanlık bilgisi, aynı teknik altyapı.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {crossBrandUsers.map((other) => (
                <Link
                  key={other.slug}
                  href={`/arac/${other.slug}/`}
                  className="px-5 py-2.5 rounded-xl bg-graphite-surface border border-border-hairline font-saira text-text-primary font-medium text-sm hover:border-border-brass hover:text-brass transition-colors"
                >
                  {other.displayName ?? other.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Servis Süreci */}
      <section className="py-16 bg-graphite-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira font-semibold text-2xl text-text-primary text-center mb-3">
            {brandLabel} Şanzıman Tamiri Süreci
          </h2>
          <p className="font-saira text-text-secondary text-center mb-10 max-w-xl mx-auto">
            Aracınızı bize getirdikten sonra izlediğimiz dört adım
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                step: '01',
                title: 'Ücretsiz Ön Tanı',
                desc: 'Aracınızı inceleyip arıza belirtilerini analiz ediyoruz. Maliyet aralığı için tahmini bilgi veriyoruz.',
              },
              {
                step: '02',
                title: 'Detaylı Arıza Tespiti',
                desc: 'Şanzıman beyni okuması, mekatronik testi ve gerekirse demontaj sonrası kesin teşhis koyuyoruz.',
              },
              {
                step: '03',
                title: 'Onay ve Onarım',
                desc: 'Onayınız sonrası orijinal veya muadil parça ile onarım yapıyoruz. Sürecin her aşamasında bilgilendiriyoruz.',
              },
              {
                step: '04',
                title: 'Test ve Teslim',
                desc: 'Tamir sonrası yol testi yapıyoruz, arıza kodlarını sıfırlıyoruz, 6 ay yazılı garanti ile teslim ediyoruz.',
              },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl bg-graphite-base border border-border-hairline">
                <div className="font-jetbrains text-brass text-xs font-bold mb-2">{item.step}</div>
                <h3 className="font-saira font-semibold text-text-primary text-base mb-2">{item.title}</h3>
                <p className="font-saira text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Garanti & Güven Bandı */}
      <section className="py-12 bg-graphite-base border-y border-border-hairline">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-brass/8 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-brass" />
              </div>
              <div>
                <h3 className="font-saira font-semibold text-text-primary text-base mb-1">6 Ay Yazılı Garanti</h3>
                <p className="font-saira text-text-secondary text-sm">
                  Tüm şanzıman onarım işçiliğimiz yazılı garanti kapsamındadır.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-brass/8 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-brass" />
              </div>
              <div>
                <h3 className="font-saira font-semibold text-text-primary text-base mb-1">Hızlı Teslim Süresi</h3>
                <p className="font-saira text-text-secondary text-sm">
                  Arıza türüne göre 1-7 iş günü içinde teslim edilir.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-brass/8 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brass" />
              </div>
              <div>
                <h3 className="font-saira font-semibold text-text-primary text-base mb-1">Ücretsiz Ön Tanı</h3>
                <p className="font-saira text-text-secondary text-sm">
                  Tamire başlamadan önce arıza tespiti ve maliyet bilgisi ücretsiz verilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SSS */}
      <section className="py-16 bg-graphite-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira font-semibold text-2xl text-text-primary text-center mb-3">Sık Sorulan Sorular</h2>
          <p className="font-saira text-text-secondary text-center mb-10">
            {brandLabel} şanzıman tamiri hakkında merak edilenler
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-graphite-base rounded-xl border border-border-hairline overflow-hidden"
              >
                <summary className="p-5 cursor-pointer flex items-center justify-between gap-4 list-none">
                  <h3 className="font-saira font-semibold text-text-primary text-base">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-brass shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 font-saira text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-graphite-base py-14 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-saira text-2xl sm:text-3xl font-semibold text-text-primary mb-4">{brandLabel} Şanzıman için Bizi Arayın</h2>
          <p className="font-saira text-text-secondary mb-8">
            Bostancı Oto Sanayi Sitesi, Orkide Sokak G Blok No:4 — Pazartesi-Cumartesi 08:00-18:00
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="bg-brass-bright text-graphite-base rounded-full font-saira font-semibold hover:bg-brass flex items-center gap-2 px-7 py-3.5 transition-colors"
            >
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              {PHONE}
            </a>
            <Link
              href="/hizmetler/"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-subtle text-text-secondary font-saira font-semibold hover:border-brass hover:text-text-primary transition-all text-sm"
            >
              Tüm Hizmetler &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
