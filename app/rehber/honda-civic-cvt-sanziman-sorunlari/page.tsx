import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/honda-civic-cvt-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Honda Civic CVT Şanzıman Sorunları | Kayma ve Vuruntu Rehberi',
  description:
    'Honda Civic FC5, FK7 ve FE1 CVT şanzıman sorunları: kayma, vuruntu, devir dalgalanması, HCF-2 yağ disiplini ve doğru servis kararı.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Honda Civic CVT Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Honda Civic CVT’de kayış kaçırması, kalkış vuruntusu, uğuıltu ve HCF-2 yağ hataları nasıl anlaşılır? Model rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['honda-civic-cvt-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Honda Civic CVT Şanzıman Sorunları',
  description:
    'Honda Civic FC5, FK7 ve FE1 CVT’de kayma, vuruntu, devir dalgalanması, yağ disiplini ve doğru teşhis yaklaşımı.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Honda Civic CVT Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['FC5', '1.6 / 1.5 Turbo', 'CVT', 'Türkiye’de en sık görülen Civic CVT gövdesi'],
  ['FK7', '1.5 VTEC Turbo', 'CVT', 'Yük ve ısı yönetimi daha kritik olabilir'],
  ['FE1', '1.5 e:HEV / bazı yeni varyantlar', 'CVT türevi yapı', 'Yazılım ve bakım disiplini öne çıkar'],
] as const;

const issueRows = [
  ['Kalkışta vuruntu / silkeleme', 'Başlangıç kavraması veya kalibrasyon hattı'],
  ['Devir yükseliyor ama hız aynı oranda gelmiyor', 'Kayış-kasnak tutunma kaybı'],
  ['Metalik uğultu', 'Kasnak yüzeyi, rulman veya kayış hattı'],
  ['Sıcakta belirginleşen performans farkı', 'Yağ kalitesi ve ısı yükü'],
] as const;

const oilNotes = [
  'Honda Civic CVT için doğru sıvı spesifikasyonu kritik önemdedir.',
  'HCF-2 dışı yağ kullanımı, kısa sürede tutunma karakterini bozabilir.',
  'CVT yağının görevi yalnız kaydırmak değil, kayışın doğru mikro tutunmasını da sağlamaktır.',
  'Bu yüzden “muadil ATF de olur” yaklaşımı Civic CVT’de ciddi risk taşır.',
] as const;

export default function HondaCivicCvtSanzimanSorunlariPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [articleSchema, breadcrumbSchema, faqSchema],
          }),
        }}
      />

      <main className="min-h-screen bg-graphite-base">
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="mx-auto max-w-2xl">
            <nav className="mb-6 flex items-center gap-2 text-xs text-text-secondary">
              <Link href="/" className="transition-colors hover:text-text-primary">
                Ana Sayfa
              </Link>
              <span>/</span>
              <Link href="/rehber/" className="transition-colors hover:text-text-primary">
                Rehber
              </Link>
              <span>/</span>
              <span>Honda Civic CVT</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Honda Civic CVT Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Honda Civic CVT, doğru yağ ve doğru bakım disipliniyle çok uzun ömürlü olabilir. Ama
              bakım ihmali veya yanlış yağ kullanımı başladığında verdiği belirtiler DSG ya da tam
              otomatiklerden oldukça farklıdır.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">CVT</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kayış-kasnak mimarisi</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">HCF-2</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Doğru yağ şart</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Erken Müdahale</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kasnak hasarını önler</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-700">
              Kısa cevap
            </div>
            <p className="text-sm leading-relaxed text-amber-900">
              Honda Civic CVT’de en kritik belirtiler <strong>devir yükselmesi ama hızın gelmemesi</strong>,
              <strong> kalkışta vuruntu</strong> ve <strong>uğultu</strong> şeklinde görülür. Bu tablo
              çoğu zaman yağ, kalibrasyon veya kayış-kasnak tutunma hattına bakmayı gerektirir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Civic kullanıcılarının en sık düştüğü tuzak, “Honda bozulmaz” rahatlığıyla CVT bakımını
            geciktirmektir. Oysa bu şanzımanda sessiz başlayan sorun, bir anda büyük bir kayış-kasnak
            masrafına dönüşebilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            CVT’de hissettiğiniz semptom DSG’deki gibi dişli vuruntusu değildir; daha çok uzama, devir
            dalgalanması ve metalik uğultu karakteri taşır.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi Civic hangi CVT yapısını kullanır?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Kasa</th>
                    <th className="px-4 py-3">Motor</th>
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Not</th>
                  </tr>
                </thead>
                <tbody>
                  {modelRows.map((row) => (
                    <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base align-top">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 font-saira text-sm leading-6 text-text-secondary">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            En sık görülen Civic CVT sorunları
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Belirti</th>
                  <th className="px-4 py-3">İlk şüphe hattı</th>
                </tr>
              </thead>
              <tbody>
                {issueRows.map((row) => (
                  <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base align-top">
                    {row.map((cell) => (
                      <td key={cell} className="px-4 py-3 font-saira text-sm leading-6 text-text-secondary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              HCF-2 neden bu kadar önemli?
            </h2>
            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                {oilNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Civic CVT’de en pahalı hata nedir?
          </h2>
          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Devir yükselmesi ve uzama hissi başladıktan sonra aracı uzun süre kullanmaya devam etmektir.
              Çünkü bu gecikme, yalnız kayışı değil kasnak yüzeylerini de bozmaya başlar. Kasnak iz aldığında
              maliyet hızlı büyür.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Eren’de çözüm yaklaşımı
            </h2>
            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Önce yağ tipi, bakım geçmişi ve semptom profili netleştirilir.</li>
                <li>Kalkış vuruntusu ile gerçek kayış kaçırması birbirinden ayrılır.</li>
                <li>Gerekiyorsa start clutch kalibrasyonu ve doğru öğrenme prosedürü uygulanır.</li>
                <li>Kasnak yüzeyi hasarı büyümeden müdahale hedeflenir.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/cvt-kayma/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">CVT</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                CVT şanzımanda kayma →
              </div>
            </Link>
            <Link
              href="/rehber/cvt-vuruntu/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">CVT</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                CVT vuruntu belirtileri →
              </div>
            </Link>
            <Link
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
              </div>
            </Link>
            <Link
              href="/hizmetler/cvt-sanziman-tamiri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                CVT şanzıman tamiri →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="honda-civic-cvt-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Civic CVT belirtilerini erkenden ayıralım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Kayış mı kaydırıyor, başlangıç kavraması mı yoruldu, yoksa yalnız yağ ve kalibrasyon mu
              gerekiyor; bunu netleştirip kasnak hasarı büyümeden müdahale edelim.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="tel:+905327153751"
                className="inline-block rounded-full bg-brass-bright px-6 py-3 font-saira font-semibold text-graphite-base transition-colors hover:bg-brass"
              >
                0532 715 37 51
              </a>
              <Link
                href="/iletisim/"
                className="inline-block rounded-full border border-border-subtle px-6 py-3 font-saira font-medium text-text-secondary transition-colors hover:border-brass hover:text-text-primary"
              >
                İletişim sayfasına git →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-16">
          <h2 className="mb-6 font-saira text-xl font-semibold text-text-primary">
            Randevu veya soru
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
