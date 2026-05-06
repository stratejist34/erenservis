import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/otomatik-vites-kavrama-sorunu/';

export const metadata: Metadata = {
  title: 'Otomatik Vites Kavrama Sorunu | Belirtiler ve Ayrım Rehberi',
  description:
    'Otomatik viteste kavrama kaçırması nasıl anlaşılır? DSG, EDC, CVT, PowerShift ve tam otomatikte kayma, titreme ve devir yükselmesi rehberi.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Otomatik Vites Kavrama Sorunu | Eren Otomatik Şanzıman Servisi',
    description:
      'Araç bağırıyor ama gitmiyor mu? DSG, EDC, CVT, PowerShift ve tam otomatik şanzımanlarda kavrama sorunları nasıl farklı davranır?',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['otomatik-vites-kavrama-sorunu'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Otomatik Vites Kavrama Sorunu Nasıl Anlaşılır?',
  description:
    'Otomatik viteste kavrama kaçırması, titreme, devir yükselmesi ve şanzıman tipine göre davranış farkları.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Otomatik Vites Kavrama Sorunu', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const commonSigns = [
  ['Motor bağırıyor ama araç gitmiyor', 'Devir hızla yükseliyor, hız aynı oranda artmıyor'],
  ['Kalkışta titreme / silkeleme', 'Yokuşta veya ilk harekette araç düzgün tutunamıyor'],
  ['Geçişte kararsızlık', 'Vites değişiminde kısa boşluk veya vuruntu hissi'],
  ['Tüketimde artış', 'Aynı performans için daha fazla gaz gerekiyor'],
] as const;

const familyRows = [
  ['DSG / EDC / PowerShift', 'Silkeleme, vuruntu, 1-2 geçişte kararsızlık', 'Kuru veya ıslak çift kavrama hattı'],
  ['CVT', 'Devir yükselip hızın gelmemesi, “lastik gibi uzama” hissi', 'Kayış-kasnak veya ileri kavrama tarafı'],
  ['ZF / EAT8 / tam otomatik', 'Sabit hızda devir dalgalanması, düşük viteste sert toparlama', 'Lock-up veya iç ıslak kavrama tarafı'],
] as const;

const decisionRows = [
  ['Silkeleme + 1-2 vuruntu', 'Çift kavrama tarafı önce düşünülür'],
  ['Devir yükseliyor ama araç uzamıyor', 'Gerçek kaydırma davranışı vardır'],
  ['Lamba + kayma birlikte', 'Mekatronik veya basınç hattı da işin içindedir'],
  ['Adaptasyon sonrası kısa sürede geri dönüş', 'Fiziksel aşınma ihtimali güçlenir'],
] as const;

export default function OtomatikVitesKavramaSorunuPage() {
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
              <span>Otomatik Vites Kavrama Sorunu</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Genel Rehber
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Otomatik vites kavrama sorunu nasıl anlaşılır?
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Gaza bastığınızda araç eskisi gibi yürümüyorsa veya kalkışlarda rahatsız edici bir titreme
              hissediyorsanız, otomatik şanzımanda güç aktarımı düzgün yapılmıyor olabilir. Ama her
              kavrama sorunu her şanzımanda aynı davranmaz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3 Aile</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">DCT, CVT, tam otomatik</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4 İşaret</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Kayma, titreme, boşluk, tüketim</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Doğru Teşhis</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Parçadan önce veri</div>
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
              Otomatik viteste kavrama sorunu çoğu zaman <strong>devir yükselmesi ama hızın gelmemesi</strong>,
              <strong> kalkışta titreme</strong> ve <strong>geçişte kararsızlık</strong> ile anlaşılır.
              Ancak bu davranışın şiddeti ve anlamı DSG, EDC, CVT ve tam otomatik ailelerde farklıdır.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Halk arasında “baskı balata bitiyor” diye tarif edilen durum, otomatik şanzımanlarda da
            vardır. Ama burada tek bir mekanizma yoktur. Çift kavramalı sistemler, CVT kayış-kasnak
            yapısı ve tork konvertörlü tam otomatikler benzer şikâyeti farklı sebeplerle üretebilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bu yüzden asıl soru “kavrama var mı?” değil, “hangi ailede hangi hatta kayıp var?” sorusudur.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Genel kavrama kaçırma belirtileri
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Belirti</th>
                    <th className="px-4 py-3">Ne anlatır?</th>
                  </tr>
                </thead>
                <tbody>
                  {commonSigns.map((row) => (
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
            Şanzıman ailelerine göre farklar
          </h2>

          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Aile</th>
                  <th className="px-4 py-3">Tipik davranış</th>
                  <th className="px-4 py-3">İlk şüphe hattı</th>
                </tr>
              </thead>
              <tbody>
                {familyRows.map((row) => (
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
              En sık yapılan yanlış yorum
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Her kayma veya titreme “hemen balata değişecek” anlamına gelmez. Özellikle çift
                kavramalı sistemlerde mekatronik basınç veya adaptasyon kaybı, kavrama arızasını taklit
                edebilir. Tam otomatiklerde ise yağ ihmali ve lock-up davranışı benzer semptom üretir.
              </p>
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
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Eren’de çözüm yaklaşımı
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Önce şanzıman ailesi netleştirilir: çift kavrama mı, CVT mi, tam otomatik mi?</li>
                <li>Sonra canlı veri, yol testi ve gerekiyorsa hata kodu ile gerçek kayıp hattı ayrılır.</li>
                <li>Parça değişimi gerekiyorsa işlem sonrası adaptasyon ve kalibrasyon atlanmaz.</li>
                <li>Yalnız semptomu değil, semptomu doğuran davranışı çözen müdahale hedeflenir.</li>
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
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
              </div>
            </Link>
            <Link
              href="/rehber/golf-7-dsg-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">DSG</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Golf 7 DSG şanzıman sorunları →
              </div>
            </Link>
            <Link
              href="/rehber/fluence-vites-kutusunu-kontrol-ettiriniz/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">EDC</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Fluence vites kutusunu kontrol ettiriniz →
              </div>
            </Link>
            <Link
              href="/rehber/volkswagen-dq200-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Matris</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Volkswagen DQ200 şanzıman sorunları →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="otomatik-vites-kavrama-sorunu" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Kavrama mı, başka bir hat mı; netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Araç bağırıyor ama gitmiyorsa, semptomu aileye göre doğru okuyup gereksiz parça değişimi
              yerine doğru hatta müdahale edelim.
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
