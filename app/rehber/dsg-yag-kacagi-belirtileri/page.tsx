import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/dsg-yag-kacagi-belirtileri/';

export const metadata: Metadata = {
  title: 'DSG Yağ Kaçağı Belirtileri | Sızıntı Ne Zaman Ciddidir?',
  description:
    'DSG yağ kaçağı nasıl anlaşılır? Zemindeki iz, geç bağlama, vuruntu, ısınma ve mekatronik çevresi sızıntısı için karar rehberi.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DSG Yağ Kaçağı Belirtileri | Eren Otomatik Şanzıman Servisi',
    description:
      'DSG yağ sızıntısı yalnız leke ile değil, geç bağlama, vuruntu ve sıcak sürüşte karakter değişimiyle de anlaşılır.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['dsg-yag-kacagi-belirtileri'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'DSG Yağ Kaçağı Belirtileri Nelerdir?',
  description:
    'DSG yağ kaçağında zemindeki iz, geç bağlama, vuruntu, sıcak kullanımda davranış değişimi ve doğru servis kararı.',
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'DSG Yağ Kaçağı Belirtileri', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const signs = [
  'Park edilen yerde kırmızı-kahverengi damla veya çizgi izi',
  'D veya R konumunda gecikmeli bağlama, sabah ilk çalıştırmada zayıf tutuş',
  'Yeni başlayan vuruntu, geçiş kararsızlığı veya kısa boşluk hissi',
  'Yanık yağ kokusu ve uzun sürüşte artan ısınma hissi',
] as const;

const leakRows = [
  ['Conta / kapak çevresi', 'Yerde iz + sürüşte belirgin sorun yok', 'Erken müdahalede lokal kalabilir'],
  ['Mekatronik çevresi', 'Leke + geç bağlama + vuruntu', 'Basınç davranışı da etkilenebilir'],
  ['İhmal edilmiş kaçak', 'Koku + sıcakta davranış bozulması + ek semptomlar', 'Kavrama ve basınç tarafını büyütebilir'],
] as const;

const driveRows = [
  ['Yalnız hafif iz var, davranış normal', 'Kısa süreli kullanım olabilir ama erken kontrol doğru olur'],
  ['İz + geç bağlama veya vuruntu var', 'Beklemeyin, yakın zamanda servis'],
  ['Koku + sıcakta bariz karakter değişimi var', 'Uzun yol ve yoğun kullanım doğru değildir'],
  ['Lamba, kayma veya boşa düşme eşlik ediyor', 'Sürmeyin, çekici daha güvenli'],
] as const;

export default function DsgYagKacagiBelirtileriPage() {
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
              <span>DSG Yağ Kaçağı Belirtileri</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              DSG yağ kaçağı belirtileri
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Yağ kaçağı çoğu zaman yalnız yerdeki leke ile fark edilir sanılır. Oysa DSG kutularda
              sızıntı büyümeden önce geç bağlama, vuruntu ve sıcak sürüşte karakter değişimi de
              verebilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4 İşaret</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Leke, gecikme, vuruntu, koku</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3 Seviye</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Lokal, basınç, zincir risk</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Erken</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Maliyet avantajı</div>
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
              DSG yağ kaçağı, yalnız park yerindeki damla ile değil; <strong>geç bağlama</strong>,
              <strong> yeni başlayan vuruntu</strong> ve <strong>sıcak sürüşte davranış değişimi</strong>{' '}
              ile de anlaşılır. Erken yakalanırsa lokal kalır, gecikirse basınç ve kavrama tarafını da
              büyütebilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            DSG şanzımanda yağ eksilmesi her zaman anında büyük arıza üretmez. Sorun tam da bu yüzden
            tehlikelidir: kullanıcı “biraz eksiltmiş” diye düşünürken sistem basıncı ve geçiş karakteri
            yavaş yavaş bozulabilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Özellikle mekatronik çevresinde kaçak varsa konu yalnız sıvı seviyesi değildir. Basınç
            davranışı değiştikçe{' '}
            <Link
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              mekatronik semptomları
            </Link>{' '}
            ve kavrama davranışı da etkilenebilir.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              En sık görülen belirtiler
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                {signs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Kaçak her zaman aynı seviyede değildir
          </h2>

          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Kaynak</th>
                  <th className="px-4 py-3">İmza</th>
                  <th className="px-4 py-3">Karar</th>
                </tr>
              </thead>
              <tbody>
                {leakRows.map((row) => (
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
              En pahalı hata nedir?
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Kaçağın kaynağını çözmeden yalnız yağ ekleyip kullanmaya devam etmektir. Çünkü sürücü çoğu
                zaman ne kadar ve ne hızla eksilttiğini doğru okuyamaz. Küçük görünen sızıntı, bir süre sonra
                basınç davranışını bozup kavrama tarafını da gereksiz yere yormaya başlar.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Sürmeye devam edilir mi?
          </h2>

          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">Karar</th>
                </tr>
              </thead>
              <tbody>
                {driveRows.map((row) => (
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
              Serviste neye bakılır?
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
                <li>Kaçağın yeri ve tazeliği netleştirilir.</li>
                <li>Mekatronik çevresi ve bağlantı noktaları kontrol edilir.</li>
                <li>Basınç davranışı ve geç bağlama şikâyeti canlı veri ile okunur.</li>
                <li>Vuruntu, kayma veya sıcak sürüş farkı yol testinde doğrulanır.</li>
                <li>Sonra yalnız gerçekten sorun üreten hatta müdahale edilir.</li>
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
              href="/blog/dsg-mekatronik-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG mekatronik arıza belirtileri →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-anahtar-isareti-yanip-sonuyor/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG anahtar işareti yanıp sönüyor →
              </div>
            </Link>
            <Link
              href="/blog/sanziman-yag-degisimi-fiyat-2026/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman yağ değişimi fiyatı →
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
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-yag-kacagi-belirtileri" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Kaçağı büyümeden netleştirelim
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Zemindeki izi, kokuyu ve sürüşteki değişimi birlikte okuyalım; yalnız yağ ekleyip riski
              büyütmek yerine doğru hatta müdahale edelim.
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
