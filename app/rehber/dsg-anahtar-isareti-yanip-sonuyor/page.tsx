import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/dsg-anahtar-isareti-yanip-sonuyor/';

export const metadata: Metadata = {
  title: 'DSG Anahtar İşareti Yanıp Sönüyor | Aktif Hata mı?',
  description:
    "DSG'de anahtar işareti yanıp sönüyorsa nedir, sürülür mü? DQ200-DQ250 ayrımı, mekatronik şüphesi, geçici hata ve servis kararı rehberi.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DSG Anahtar İşareti Yanıp Sönüyor | Eren Otomatik Şanzıman Servisi',
    description:
      "DSG anahtar lambası ne anlatır, ne zaman servis gerekir, ne zaman çekici gerekir? DQ200 odaklı pratik karar rehberi.",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['dsg-anahtar-isareti-yanip-sonuyor'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'DSG Anahtar İşareti Yanıp Sönüyor: Aktif Hata mı, Geçici Uyarı mı?',
  description:
    "DSG anahtar ikonu yandığında ne anlama gelir, sürmeye devam edilir mi, DQ200 ve DQ250'de ne zaman mekatronik şüphesi doğar?",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'DSG Anahtar İşareti', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const colorRows = [
  ['Sarı / turuncu sabit', 'Pasif arıza kodu', '50-100 km içinde servise tarama'],
  ['Sarı / turuncu yanıp sönüyor', 'Aktif hata tekrarlanıyor', 'İlk fırsatta servis, uzun yola çıkmayın'],
  ['Kırmızı', 'Kritik arıza riski', 'Hemen durun, çekici çağırın'],
  ['Kontakta kısa süre yanıp sönme', 'Sistem testi', 'Normal davranış'],
] as const;

const dsgRows = [
  ['DQ200', 'Çok yaygın', 'Bobin, basınç sensörü, P kilidi, basınç tüpü'],
  ['DQ250', 'Yaygın', 'Pres regülatör, hidrolik basınç, kavrama etkisi'],
  ['DQ381', 'Daha az', 'Yazılım ve adaptasyon tarafı'],
  ['DQ500', 'Orta', 'Ağır yük + basınç yönetimi'],
] as const;

const dangerSignals = [
  'P konumundan çıkmama veya çıkmakta zorlanma',
  'Sürüşte ani boşa düşme',
  'Limp mode veya 3. vitese kilitlenme',
  'Geri vitesin tutmaması',
  'Soğukta belirgin gecikme ile lambanın birlikte görünmesi',
  'Yanık koku veya ek şanzıman uyarısı',
] as const;

const precheckItems = [
  'Lamba ilk ne zaman yandı: soğukta mı, sürüşte mi, dur-kalkta mı?',
  'Lambaya başka belirti eşlik ediyor mu: boşa düşme, sarsıntı, P kilidi, koku?',
  'Son akü, yağ veya yazılım işlemi ne zaman yapıldı?',
  'Araçta hangi DSG ailesi var: DQ200, DQ250, DQ381 veya DQ500?',
  'Daha önce tarama yapıldıysa hangi hata kodları okundu?',
] as const;

export default function DsgAnahtarIsaretiPage() {
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
              <span>DSG Anahtar İşareti</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              DSG anahtar işareti yanıp sönüyor
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Gösterge panelindeki anahtar veya anahtarlı dişli ikonu, DSG&apos;nizin
              “beni kontrol et” demesidir. Ama her vakada acil mekanik çöküş anlamına gelmez;
              doğru karar, rengin ve eşlik eden belirtinin birlikte okunmasıyla verilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">En sık imza</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Renk</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Aciliyet belirler</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Veri</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Tahmin değil tarama</div>
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
              DSG&apos;de anahtar işareti çoğu zaman <strong>TCU&apos;nun bir hata kaydettiğini</strong>{' '}
              gösterir. Tek başına yandığında planlı servis işidir; boşa düşme, limp mode, P
              kilidi veya koku eşlik ediyorsa çekici gerektirebilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Bu uyarı en sık DQ200 ailesinde karşımıza çıkar. Sahada bunun arkasında çoğu zaman
            solenoid, basınç sensörü, basınç tüpü veya P kilidi hattı vardır. Ama bazen akü
            değişimi, yazılım güncellemesi veya adaptasyon kaybı gibi daha hafif sebepler de aynı
            lambayı üretir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bu yüzden doğru yaklaşım, lambayı yalnız söndürmek değil; sebebin yazılımsal mı yoksa{' '}
            <Link
              href="/blog/dq200-mekatronik-tamiri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              mekatronik tarafında fiziksel bir arıza mı
            </Link>{' '}
            olduğunu netleştirmektir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Renge göre ilk karar
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Renk / davranış</th>
                    <th className="px-4 py-3">Anlam</th>
                    <th className="px-4 py-3">Aksiyon</th>
                  </tr>
                </thead>
                <tbody>
                  {colorRows.map((row) => (
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

            <div className="mt-5 rounded-xl border border-border-hairline bg-graphite-base p-4">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Kontak açıldığında lambanın birkaç saniye görünmesi normaldir. Gerçek uyarı,
                motor çalıştıktan sonra sönmeyen veya sürüş sırasında tekrar beliren lambadır.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Yanıp sönüyor mu, sabit mi?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                Sabit yanıyorsa
              </div>
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Sistem bir hata kodu kaydetmiş ve geçici çözümle yürümeye devam ediyor demektir.
                Çoğu zaman acil değil ama ihmal edilirse aynı hata aktifleşebilir.
              </p>
            </div>

            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                Yanıp sönüyorsa
              </div>
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Hata aktif olarak tekrar üretiliyor demektir. Yani sistem hâlâ o anormal sinyali
                görüyordur. Bu durumda beklemek yerine erken kontrol daha doğrudur.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              En sık hangi DSG ailesinde görülür?
            </h2>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Sıklık</th>
                    <th className="px-4 py-3">En tipik kaynak</th>
                  </tr>
                </thead>
                <tbody>
                  {dsgRows.map((row) => (
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
            Hangi belirtiler tehlike sinyalidir?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              {dangerSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sürmeye devam edilir mi?
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Kısa süreli sürüş mümkün olabilir</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                  <li>Sarı sabit lamba var ama başka belirti yoksa</li>
                  <li>Sarı yanıp sönüyor ama araç performansı normal ve gecikme yoksa</li>
                  <li>Akü veya yazılım işlemi sonrası tek seferlik görünmüşse</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Sürmeyin, çekici çağırın</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                  <li>Lamba ile birlikte boşa düşme yaşanıyorsa</li>
                  <li>P konumundan çıkmama veya limp mode varsa</li>
                  <li>Kırmızı uyarı görülüyorsa</li>
                  <li>Yanık koku, geri vites tutmama veya sert sarsıntı eşlik ediyorsa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Adaptasyon ve hata silme ne zaman yeterli kalır?
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-text-primary">Yeterli kalabildiği durumlar</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Akü değişimi sonrası öğrenme değerleri bozulduysa</li>
                <li>Yağ değişiminden sonra basis settings yapılmadıysa</li>
                <li>Tek seferlik sensör paraziti oluştuysa ve kod geri gelmiyorsa</li>
              </ul>
            </div>

            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <h3 className="mb-2 font-saira text-lg font-semibold text-text-primary">Yetmediği durumlar</h3>
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Kod silindikten sonra kısa sürede aynı lamba geri yanıyorsa</li>
                <li>Canlı veride basınç veya solenoid değerleri tolerans dışındaysa</li>
                <li>Soğukta gecikme, P kilidi veya boşa düşme eşlik ediyorsa</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Servise gitmeden önce kontrol listesi
            </h2>

            <div className="relative pl-6">
              <div className="absolute bottom-2 left-2 top-2 w-px bg-border-hairline" />
              {precheckItems.map((step, index) => (
                <div key={step} className="relative mb-6 last:mb-0">
                  <div className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-border-brass bg-graphite-base" />
                  <div className="mb-1 font-jetbrains text-xs text-brass">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="font-saira text-sm leading-7 text-text-secondary">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Eren&apos;de teşhis akışı nasıl ilerler?
          </h2>

          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              <li>Ücretsiz ön tanı ile belirti dinlenir.</li>
              <li>VCDS veya orijinal cihazla kalıcı ve geçici kodlar okunur.</li>
              <li>Canlı veride basınç, sıcaklık, solenoid ve kavrama değerleri izlenir.</li>
              <li>Gerekirse adaptasyon denenir ve kodun geri dönme davranışı takip edilir.</li>
              <li>Sonra yalnız gereken kapsam için yazılı fiyat verilir.</li>
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-anahtar-isareti-yanip-sonuyor" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/uyari-lambasi-semptomlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Uyarı lambası semptomları →
              </div>
            </Link>
            <Link
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG mekatronik arıza belirtileri →
              </div>
            </Link>
            <Link
              href="/blog/dq200-mekatronik-tamiri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DQ200 mekatronik tamiri →
              </div>
            </Link>
            <Link
              href="/rehber/solenoid-valf-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Solenoid valf arıza belirtileri →
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Anahtar lambasını büyümeden netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Tek başına hata silmek yerine, kodun neden yazıldığını birlikte okuyalım ve gerçekten
              hangi hatta müdahale gerektiğini netleştirelim.
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
