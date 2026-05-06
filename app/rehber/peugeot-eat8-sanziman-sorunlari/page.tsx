import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/peugeot-eat8-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Peugeot EAT8 Şanzıman Sorunları | Vuruntu ve Gecikme Rehberi',
  description:
    'Peugeot 3008, 5008, 508, 2008 ve Opel/Citroen türevlerinde EAT8 şanzıman sorunları: vuruntu, gecikme, devir dalgalanması ve yağ disiplini.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Peugeot EAT8 Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Peugeot ve Opel grubunda kullanılan Aisin EAT8’de 3-2 vuruntu, ilk kalkış gecikmesi, yağ bakımı ve doğru servis kararı rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['peugeot-eat8-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Peugeot EAT8 Şanzıman Sorunları',
  description:
    'Aisin üretimi EAT8 şanzımanda vuruntu, gecikme, tork konvertörü davranışı ve “ömürlük yağ” yanılgısı için karar rehberi.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Peugeot EAT8 Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['Peugeot 3008 / 5008', '1.5 BlueHDi / 1.6 PureTech', 'EAT8', 'Türkiye’de en sık görülen EAT8 kullanım profili'],
  ['Peugeot 508 / 2008', 'Benzin / dizel varyasyonlar', 'EAT8', 'Şehir içi vuruntu ve ilk kalkış gecikmesi sık sorulur'],
  ['Opel Grandland / Citroen C5 Aircross / DS', 'PSA ortak altyapı', 'EAT8', 'Aynı Aisin temeli benzer semptom üretir'],
] as const;

const issueRows = [
  ['3’ten 2’ye veya 2’den 1’e sert vuruntu', 'Valf gövdesi zamanlama ve hidrolik basınç şoku'],
  ['Sabah ilk kalkışta gecikme', 'Tork konvertörü ve yağın ilk basınç tepkisi'],
  ['Sabit hızda devir dalgalanması', 'Lock-up / tork konvertörü kilitleme hattı'],
  ['Dur-kalkta öne atılma hissi', 'Vites küçültme basıncı yeterince yumuşayamıyor olabilir'],
] as const;

const oilNotes = [
  'EAT8 için “ömürlük yağ” ifadesi gerçek saha kullanımında güvenli bir bakım planı değildir.',
  'Kirlenen yağ, valf gövdesindeki hassas kanalları ve selenoid davranışını doğrudan bozar.',
  'Doğru ATF ve doğru değişim prosedürü EAT8 ömrünün ana belirleyicisidir.',
  '60.000-80.000 km bandında bakım disiplini, vuruntu ve gecikme riskini belirgin azaltır.',
] as const;

const decisionRows = [
  ['Yalnız vites küçültürken vuruntu var', 'Önce valf gövdesi ve yağ davranışı düşünülür'],
  ['Sabah ilk harekette geç bağlanıyor', 'Tork konvertörü ve ilk basınç hattı öne çıkar'],
  ['Uzun yolda devir sabit değil', 'Lock-up tarafı dikkatle okunmalıdır'],
  ['Belirti yeni başladı', 'Yağ + adaptasyonla erken çözüm şansı yüksektir'],
] as const;

export default function PeugeotEat8SanzimanSorunlariPage() {
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
              <span>Peugeot EAT8 Şanzıman Sorunları</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Marka × Şanzıman
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Peugeot EAT8 Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              EAT8, Peugeot, Citroen, DS ve Opel grubunda kullanılan Aisin üretimi, tork
              konvertörlü tam otomatik bir şanzımandır. Dayanıklılığı yüksek olsa da özellikle
              yağ disiplini geciktiğinde 3-2 vuruntu, ilk kalkış gecikmesi ve sabit hızda devir
              dalgalanması gibi çok net semptomlar üretir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">EAT8</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Aisin tam otomatik
                </div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3-2 Vuruntu</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  En sık şikâyet hattı
                </div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Yağ Disiplini</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  En kritik bakım başlığı
                </div>
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
              EAT8, DSG gibi çift kavramalı bir sistem değildir. Bu yüzden arızaları da farklı
              okunur. En tipik tablo, <strong>vites küçültürken sert vuruntu</strong>,
              <strong> ilk kalkışta gecikme</strong> ve <strong>devir dalgalanması</strong> olarak
              görünür. Çoğu vakada ana eksen yağ, valf gövdesi ve tork konvertörü hattıdır.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            EAT8 sahiplerinin en sık düştüğü tuzak, “tam otomatik zaten sağlamdır” rahatlığıyla
            yağ bakımını ertelemektir. Oysa bu şanzıman, doğru bakım yapıldığında çok dayanıklı;
            ihmal edildiğinde ise pahalı bir valf gövdesi veya tork konvertörü tablosuna gider.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Doğru karar, önce belirtinin hangi koşulda çıktığını anlamak; sonra yağ, valf gövdesi
            ve lock-up hattını birlikte okumaktır.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi araçlarda EAT8 var?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model grubu</th>
                    <th className="px-4 py-3">Motor tarafı</th>
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
            EAT8’de en sık görülen belirtiler
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
            Belirtiye göre ilk yorum
          </h2>
          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Belirti kombinasyonu</th>
                  <th className="px-4 py-3">İlk yorum</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row) => (
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
          <div className="mx-auto max-w-2xl rounded-xl border border-border-brass/30 bg-graphite-base p-5">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              EAT8’de en büyük hata nedir?
            </h2>
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Vuruntu başladıktan sonra yalnız yazılım güncellemesiyle oyalanmak. Erken dönemde
              yağ, adaptasyon ve valf gövdesi okumak yeterliyken; uzun süre beklemek daha büyük
              hidrolik hasara ve tork konvertörü maliyetine dönüşebilir.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Semptom Rehberi</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
              </div>
            </Link>

            <Link
              href="/rehber/toyota-corolla-cvt-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Aisin Yaklaşımı</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Toyota Corolla CVT şanzıman sorunları →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-base px-4 py-12">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border-brass/40 bg-graphite-surface p-6">
            <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
              Servis Kararı
            </div>
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              EAT8’de her vuruntu komple şanzıman demek değildir
            </h2>
            <p className="mb-5 font-saira text-sm leading-7 text-text-secondary">
              Peugeot, Citroen veya Opel grubunda EAT8 belirti veriyorsa; doğru teşhisle çoğu
              zaman yağ, adaptasyon ve valf gövdesi ekseninde rasyonel çözüm bulunabilir. Önemli
              olan, vuruntunun ne kadar erken yakalandığıdır.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim/"
                className="inline-flex items-center justify-center rounded-lg bg-brass px-5 py-3 font-saira text-sm font-semibold text-graphite-base transition-transform hover:-translate-y-0.5"
              >
                Ücretsiz ön tanı için iletişime geçin
              </Link>
              <Link
                href="/hizmetler/zf-sanziman-tamiri/"
                className="inline-flex items-center justify-center rounded-lg border border-border-hairline px-5 py-3 font-saira text-sm font-semibold text-text-primary transition-colors hover:border-border-brass hover:text-brass"
              >
                Tam otomatik hizmet yaklaşımımızı görün
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <TransmissionFaq slug="peugeot-eat8-sanziman-sorunlari" />
          </div>
        </section>

        <section className="bg-graphite-base px-4 pb-20">
          <div className="mx-auto max-w-2xl">
            <ContactForm
              title="EAT8 belirtinizi yazın"
              description="Peugeot, Citroen, DS veya Opel EAT8 şanzımanınızdaki vuruntu ya da gecikmeyi yazın; ilk bakılacak hattı birlikte netleştirelim."
              source="rehber_peugeot_eat8_sanziman_sorunlari"
              ctaLabel="Ön tanı talep et"
            />
          </div>
        </section>
      </main>
    </>
  );
}
