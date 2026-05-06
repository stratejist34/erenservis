import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/skoda-octavia-dsg-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Skoda Octavia DSG Şanzıman Sorunları | DQ200 ve DQ250',
  description:
    "Skoda Octavia DSG sorunları, DQ200-DQ250 farkı, aile ve ticari kullanıma göre yorulma davranışı, kavrama-mekatronik ayrımı ve servis kararı.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Skoda Octavia DSG Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      "Octavia'da hangi DSG var, ticari kullanımda nasıl yorulur, DQ200 ve DQ250 hangi belirtilerle gelir?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['skoda-octavia-dsg-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Skoda Octavia DSG Şanzıman Sorunları: DQ200 ve DQ250 Rehberi',
  description:
    "Octavia DSG sahipleri için kullanım profiline göre yorulma farkı, motor-şanzıman matrisi ve doğru servis kararı.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Skoda Octavia DSG Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionMatrix = [
  ['1.0 TSI', 'DQ200', 'Kuru', '7'],
  ['1.2 TSI', 'DQ200', 'Kuru', '7'],
  ['1.4 TSI', 'DQ200', 'Kuru', '7'],
  ['1.5 TSI EVO', 'DQ200 / DQ381', 'Kuru / ıslak', '7'],
  ['1.6 TDI', 'DQ200', 'Kuru', '7'],
  ['2.0 TDI', 'DQ250 / DQ381', 'Islak', '6 / 7'],
  ['RS / 4x4 / Scout', 'DQ250 / DQ381 / DQ500', 'Islak', '6 / 7'],
] as const;

const commonIssues = [
  'Kalkışta sarsıntı ve 1-2 silkelemesi',
  'Yüklü kullanımda yokuşta geri kaçma',
  'Anahtar / dişli ikonu uyarısı',
  'Soğukta belirgin vites gecikmesi',
  'Kavrama tolerans limiti kodu',
  'Limp mode veya koruma modu',
  'P konumundan çıkmama',
] as const;

const profileRows = [
  ['Aile kullanımı', '15-25 bin km / yıl', 'Belirti tipik kilometrede gelir'],
  ['Yüklü aile kullanımı', '25-40 bin km / yıl', 'Golf 7’ye göre 20-30 bin km erken yorulma'],
  ['Ticari / taksi / uzun yol', '40-80 bin km / yıl', 'DQ200 için ağır profil, DQ250 için yağ disiplini kritik'],
] as const;

const mileageRows = [
  ['0-80.000 km', 'Çoğu zaman temiz', 'Çoğu zaman temiz'],
  ['80.000-110.000 km', 'Anahtar lambası, soğukta gecikme, geri kaçma', 'Geçiş gecikmesi başlangıcı'],
  ['110.000-140.000 km', '1-2 silkelemesi, tolerans kodu, P kilidi', 'Limp mode öyküsü, ilk kavrama yorulması'],
  ['140.000-180.000 km', 'Kavrama + basınç tüpü kombo', 'Kavrama paketi yorulması'],
  ['180.000+ km', 'Kapsamlı mekatronik + kavrama revizyonu', 'Kombo vaka'],
] as const;

const diagnosisRows = [
  ['Yüklü kalkışta sarsıntı + 1-2 silkelemesi', 'Kavrama hattı baskın'],
  ['Anahtar lambası + soğukta gecikme', 'Mekatronik / basınç hattı baskın'],
  ['Ticari kullanım + tolerans kodu', 'Kombo değerlendirme şart'],
  ['Limp mode + 2.0 TDI / RS', 'DQ250 / DQ381 basınç tarafı öne çıkar'],
] as const;

export default function OctaviaDsgSanzimanSorunlariPage() {
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
              <span>Skoda Octavia DSG</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Model Rehberi
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Skoda Octavia DSG Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Octavia, Golf ile aynı DSG ailesini paylaşsa da kullanım profili daha yüklü, daha
              uzun kilometreli ve ticari tarafa daha yakın olduğu için yorulma davranışı farklıdır.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Profil</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Aile / yüklü / ticari</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En sık görülen aile</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Kombo</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Tek arıza sanmayın</div>
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
              Octavia DSG, Golf ile aynı mekanik aileden gelir ama kullanım profili yüzünden daha
              erken yorulabilir. Özellikle yüklü ve ticari kullanımda <strong>kavrama + basınç
              kombinasyonu</strong> daha sık görülür.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Octavia&apos;nın büyük bagajı, uzun yol ve taksi geçmişi, DSG&apos;nin hangi kilometrede
            belirti vereceğini doğrudan değiştirir. Aynı DQ200, Golf 7&apos;ye göre çoğu zaman daha erken
            yıpranmış görünür.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bu yüzden Octavia tarafında yalnız “kavrama mı mekatronik mi” değil, “kullanım profili
            bu yorulmayı ne kadar hızlandırdı” sorusunu da sormak gerekir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Octavia&apos;da hangi DSG var?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Motor</th>
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Kavrama</th>
                    <th className="px-4 py-3">İleri</th>
                  </tr>
                </thead>
                <tbody>
                  {transmissionMatrix.map((row) => (
                    <tr key={row[0]} className="border-t border-border-hairline bg-graphite-base">
                      {row.map((cell) => (
                        <td key={cell} className="px-4 py-3 font-saira text-sm text-text-secondary">
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
          <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
            Octavia&apos;da en sık görülen 7 DSG sorunu
          </h2>
          <div className="grid gap-3 mt-8">
            {commonIssues.map((item, index) => (
              <div key={item} className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
                <div className="mb-2 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="font-saira text-base font-semibold text-text-primary">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Aile kullanımı ile ticari kullanım neden farklı sonuç verir?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Profil</th>
                    <th className="px-4 py-3">Yıllık km</th>
                    <th className="px-4 py-3">Tipik etki</th>
                  </tr>
                </thead>
                <tbody>
                  {profileRows.map((row) => (
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
            DQ200 ve DQ250 Octavia&apos;da nasıl farklı yorulur?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                DQ200
              </div>
              <ul className="space-y-2 font-saira text-sm text-text-secondary">
                <li>Yüklü kullanım kuru kavramayı Golf 7&apos;ye göre daha erken yorar.</li>
                <li>Basınç tüpü, P kilidi ve bobin hattı sık devreye girer.</li>
                <li>Ticari kullanımda 90-120 bin km bandında ilk ciddi belirtiler görülebilir.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-2 font-jetbrains text-xs font-semibold uppercase tracking-[0.16em] text-iron-light">
                DQ250 / DQ381
              </div>
              <ul className="space-y-2 font-saira text-sm text-text-secondary">
                <li>Yağ + filtre disiplini ömrü doğrudan belirler.</li>
                <li>Limp mode, gecikme ve pres regülatör tarafı daha tipik sinyallerdir.</li>
                <li>Ticari profilde yine kombo vakalar daha erken gelir.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 font-saira text-2xl font-semibold text-text-primary">
              Kilometre × belirti tablosu
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline mt-8">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Kilometre</th>
                    <th className="px-4 py-3">DQ200 Octavia</th>
                    <th className="px-4 py-3">DQ250 / DQ381 Octavia</th>
                  </tr>
                </thead>
                <tbody>
                  {mileageRows.map((row) => (
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
            Octavia&apos;da kavrama mı, mekatronik mi?
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
                {diagnosisRows.map((row) => (
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
              Adaptasyon ne zaman anlamlıdır?
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Denemeye değer</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                  <li>Yağ değişimi veya akü işlemi sonrası belirti başladıysa</li>
                  <li>Kod yeni yazıldıysa ve belirti hafifse</li>
                  <li>Canlı veri hâlâ tolerans içindeyse</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Yetersiz kalır</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                  <li>Kavrama aşınması sınırı geçtiyse</li>
                  <li>Basınç tüpü veya hidrolik basınç fiziksel olarak zayıfsa</li>
                  <li>Adaptasyon sonrası belirti kısa sürede geri dönüyorsa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="skoda-octavia-dsg-sanziman-sorunlari" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/rehber/golf-7-dsg-sanziman-sorunlari/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Karşılaştırma</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">Golf 7 DSG rehberi →</div>
            </Link>
            <Link href="/rehber/dsg-yokusta-geri-kacirma/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DSG yokuşta geri kaçırma →</div>
            </Link>
            <Link href="/hizmetler/dsg-kavrama-degisimi/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DSG kavrama değişimi →</div>
            </Link>
            <Link href="/blog/dq200-mekatronik-tamiri/" className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated">
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">DQ200 mekatronik tamiri →</div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Octavia DSG profilini doğru okuyalım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Aile kullanımı mı, yüklü mü, ticari mi; hangi profile göre yorulduğunu netleştirip
              doğru tamir hattına geçelim.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <a href="tel:+905327153751" className="inline-block rounded-full bg-brass-bright px-6 py-3 font-saira font-semibold text-graphite-base transition-colors hover:bg-brass">
                0532 715 37 51
              </a>
              <Link href="/iletisim/" className="inline-block rounded-full border border-border-subtle px-6 py-3 font-saira font-medium text-text-secondary transition-colors hover:border-brass hover:text-text-primary">
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
