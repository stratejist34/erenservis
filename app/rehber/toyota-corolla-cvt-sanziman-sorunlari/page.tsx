import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/toyota-corolla-cvt-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Toyota Corolla CVT Şanzıman Sorunları | Vuruntu ve Uğultu Rehberi',
  description:
    'Toyota Corolla ve Auris CVT şanzıman sorunları: kalkış vuruntusu, uğultu, kayış-kasnak kaydırması, yağ disiplini ve doğru servis kararı.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Toyota Corolla CVT Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Toyota Corolla CVT’de vuruntu, rulman uğultusu, kayış kaydırması ve “ömürlük yağ” yanılgısı nasıl okunur? Model rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['toyota-corolla-cvt-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Toyota Corolla CVT Şanzıman Sorunları',
  description:
    'Toyota Corolla ve Auris CVT’de kalkış vuruntusu, uğultu, kaydırma, yağ disiplini ve doğru teşhis yaklaşımı.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Toyota Corolla CVT Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['Corolla', '1.6 benzin / hibrit / 1.2T varyasyonları', 'K310 / K311 / türevleri', 'Türkiye’de en yaygın Toyota CVT profili'],
  ['Auris', '1.6 benzin / hibrit', 'K310 / K311', 'Corolla ile çok benzer saha davranışı'],
  ['C-HR', '1.2T / hibrit', 'CVT / türevleri', 'Yük ve ısı karakteri farklılaşabilir'],
] as const;

const issueRows = [
  ['Kalkışta vuruntu / geç bağlama', 'Forward clutch ve hidrolik basınç tarafı'],
  ['40-70 km/s bandında uğultu', 'Rulman ve kasnak çevresi'],
  ['Devir yükseliyor ama araç uzamıyor', 'Kayış-kasnak tutunma kaybı'],
  ['Sıcakta davranış bozulması', 'Yağ yaşlanması ve yük etkisi'],
] as const;

const oilNotes = [
  '“Ömürlük yağ” ifadesi gerçek kullanım şartlarında güvenli bir bakım stratejisi değildir.',
  'Toyota CVT’de doğru sıvı tipi ve doğru periyot, şanzımanın ömrünü doğrudan belirler.',
  'Yanlış ATF kullanımı, tutunma karakterini bozup kısa sürede kaydırma ve vuruntu oluşturabilir.',
  'Yağ yalnız yağ değildir; valf gövdesi, kavrama davranışı ve kasnak yüzeyi üzerinde doğrudan etkilidir.',
] as const;

export default function ToyotaCorollaCvtSanzimanSorunlariPage() {
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
              <span>Toyota Corolla CVT</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Toyota Corolla CVT Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Toyota Corolla CVT, doğru bakım yapıldığında piyasadaki en dayanıklı otomatiklerden biri
              olabilir. Ama “nasıl olsa bozulmaz” rahatlığıyla bakım geciktiğinde, çok karakteristik
              vuruntu ve uğultu davranışları üretmeye başlar.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">CVT</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Aisin tabanlı yapı</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">K310 / K311</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Yaygın aileler</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Bakım Disiplini</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Ömür belirleyici</div>
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
              Toyota Corolla CVT’de en tipik sorunlar <strong>kalkışta vuruntu</strong>,
              <strong> uğultu</strong> ve <strong>devir yükselmesine rağmen hızın geç gelmesi</strong>
              şeklinde görülür. Bu tablo çoğu zaman yağ, valf gövdesi ve kayış-kasnak hattını birlikte
              okumayı gerektirir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Toyota CVT’nin ünü, kullanıcıyı bazen yanlış güvene sürükler. Oysa özellikle yoğun şehir içi,
            sıcak iklim ve bakım ihmali birleşince Corolla CVT de net semptomlar verir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Buradaki kritik fark şu: CVT arızası çoğu zaman dişli vuruntusu gibi değil, akışın bozulması,
            uğultu ve uzama hissi şeklinde ortaya çıkar.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi Corolla hangi CVT’yi kullanır?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model</th>
                    <th className="px-4 py-3">Motor tarafı</th>
                    <th className="px-4 py-3">CVT ailesi</th>
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
            En sık görülen Corolla CVT sorunları
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
              “Ömürlük yağ” yanılgısı neden tehlikeli?
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
            Corolla CVT’de en pahalı hata nedir?
          </h2>
          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Uğultu veya uzama hissi başladıktan sonra “Toyota bozulmaz” diyerek kullanmaya devam
              etmektir. Çünkü bu gecikme, rulman ve kasnak yüzeyini daha büyük bir maliyete taşır.
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
                <li>Kalkış vuruntusu ile gerçek kayış-kasnak kayması ayrılır.</li>
                <li>Gerekiyorsa valf gövdesi ve hidrolik davranış temiz şekilde okunur.</li>
                <li>Kalibrasyon ve doğru öğrenme prosedürü atlanmaz.</li>
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
              href="/rehber/honda-civic-cvt-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Benzer profil</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Honda Civic CVT şanzıman sorunları →
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
            <TransmissionFaq slug="toyota-corolla-cvt-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Corolla CVT belirtilerini erkenden ayıralım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Vuruntu mu, uğultu mu, kaydırma mı; bunun hangi seviyede olduğunu netleştirip büyük kasnak
              masrafı büyümeden doğru hatta müdahale edelim.
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
