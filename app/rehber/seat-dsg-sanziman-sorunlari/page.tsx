import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/seat-dsg-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'Seat DSG Şanzıman Sorunları | Leon, Ibiza, Ateca, Cupra',
  description:
    'Seat DSG sorunları: Leon, Ibiza, Ateca, Arona ve Cupra modellerinde DQ200, DQ250, DQ381 ayrımı, semptomlar ve doğru servis kararı.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Seat DSG Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'Seat Leon, Ibiza, Ateca ve Cupra modellerinde DSG semptomları nasıl okunur? DQ200-DQ250-DQ381 farkı ve doğru karar rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['seat-dsg-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'Seat DSG Şanzıman Sorunları',
  description:
    'Seat modellerinde kullanılan DSG aileleri, sportif kullanımın etkisi, kavrama-mekatronik ayrımı ve bakım kararları için rehber.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'Seat DSG Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['Ibiza / Arona 1.0-1.5 TSI', 'DQ200', 'Kuru', 'Şehir içi ve sık dur-kalkta kavrama daha erken yorulabilir'],
  ['Leon 1.0-1.5 TSI / 1.6 TDI', 'DQ200', 'Kuru', 'En yaygın Seat DSG ailesi'],
  ['Leon 2.0 TDI / 2.0 TSI', 'DQ250 / DQ381', 'Islak', 'Tork yükseldikçe ıslak DSG ailesi devreye girer'],
  ['Ateca / Cupra', 'DQ381 / DQ500', 'Islak', 'Yük ve performans beklentisi bakım disiplinini daha kritik yapar'],
] as const;

const symptomRows = [
  ['1-2 geçişte silkeleme', 'Özellikle DQ200 kavrama hattı'],
  ['Anahtar / dişli ikonu', 'Mekatronik veya basınç tarafı'],
  ['Yokuşta hafif geri kaçma', 'Kavrama toleransı veya sıcaklık etkisi'],
  ['Soğukta geç bağlanma', 'Basınç ve adaptasyon tarafı'],
  ['Limp mode / koruma modu', 'Mekatronik ve elektronik koruma hattı'],
] as const;

const drivingRows = [
  ['Sportif kullanım', 'Geçiş hassasiyetini erken fark ettirir; arıza yaratmaz ama belirtileri görünür kılar'],
  ['Sık launch / ani gaz', 'Kuru kavramalı DQ200 tarafında ömrü kısaltabilir'],
  ['Ağır şehir içi trafik', 'Seat DSG’de en belirgin yorulma sebebi hâlâ dur-kalktır'],
  ['Yazılım sonrası tork artışı', 'Özellikle DQ200’de tolerans sınırını daha hızlı öne çeker'],
] as const;

const decisionRows = [
  ['Silkeleme baskın, lamba yok', 'Önce kavrama hattı düşünülür'],
  ['Lamba + geç bağlanma + soğukta nazlanma', 'Mekatronik / basınç tarafı öne çıkar'],
  ['Performanslı kullanım sonrası sertleşme', 'Sıcaklık ve adaptasyon etkisi dışlanmadan karar verilmez'],
  ['Korumaya düşme ve vites kaybı', 'Elektronik taraf bekletilmeden kontrol edilmelidir'],
] as const;

export default function SeatDsgSanzimanSorunlariPage() {
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
              <span>Seat DSG Şanzıman Sorunları</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Marka × Şanzıman
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              Seat DSG Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              Seat tarafında DSG, Volkswagen grubunun aynı mekanik temellerini taşır; ama Leon,
              Ibiza, Ateca ve Cupra kullanıcılarının sürüş karakteri daha dinamik olduğu için bazı
              belirtiler daha erken fark edilir. Bu rehber, Seat dünyasında DQ200, DQ250 ve DQ381
              hattını semptom ve karar diliyle ayırır.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DSG</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Seat’in temel otomatik ailesi
                </div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">DQ200</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  En yaygın Seat kutusu
                </div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Sportif Profil</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Belirtileri daha görünür kılar
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
              Seat DSG arızalarının dili Volkswagen grubundan farklı değildir; ama Leon ve Cupra
              gibi modellerde geçiş sertliği, silkeleme ve gaz tepkisi bozulması daha erken fark
              edilir. Sorun çoğu vakada <strong>kavrama</strong> veya <strong>mekatronik</strong>{' '}
              hattında ayrışır.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            Kullanıcının en büyük yanılgısı, performanslı sürüşün tek başına arızayı yarattığını
            düşünmektir. Gerçekte ana yük hâlâ yanlış kullanım alışkanlıkları, yoğun şehir içi
            trafik ve geciken bakımdan gelir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Seat için doğru karar, önce hangi DSG ailesine sahip olduğunuzu bilmek; sonra da
            silkeleme mi, lamba mı, geç bağlanma mı baskın buna göre hattı okumaktır.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi Seat hangi DSG’yi kullanır?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model</th>
                    <th className="px-4 py-3">Şanzıman</th>
                    <th className="px-4 py-3">Kavrama</th>
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
            Seat DSG’de en sık görülen belirtiler
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
                {symptomRows.map((row) => (
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
              Sportif kullanım Seat’te neden daha görünür?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Kullanım şekli</th>
                    <th className="px-4 py-3">Etkisi</th>
                  </tr>
                </thead>
                <tbody>
                  {drivingRows.map((row) => (
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
            Beyin mi, kavrama mı?
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
              Seat DSG’de en büyük hata ne?
            </h2>
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Hafif silkelemeyi “sportif karakter” sanıp uzun süre görmezden gelmek. Özellikle DQ200
              tarafında bu gecikme kavrama aşınmasını büyütür; lamba geldikten sonra beklemek ise
              mekatronik hattını da masaya getirebilir.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/dsg-1-2-vites-silkeleme/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">DSG Semptom</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG 1’den 2’ye silkeleme →
              </div>
            </Link>

            <Link
              href="/rehber/volkswagen-dq200-sanziman-sorunlari/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">DQ200</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Volkswagen DQ200 şanzıman sorunları →
              </div>
            </Link>

            <Link
              href="/rehber/sanziman-arizasi-nasil-anlasilir/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated sm:col-span-2"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Genel Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman arızası nasıl anlaşılır? →
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
              Seat DSG’de doğru karar erken ayrımdan geçer
            </h2>
            <p className="mb-5 font-saira text-sm leading-7 text-text-secondary">
              Leon, Ibiza, Ateca veya Cupra’da belirti başladıysa, önce hangi DSG ailesinde
              olduğunuzu ve semptomun kavrama mı mekatronik mi söylediğini netleştirmek gerekir.
              Bu ayrım, gereksiz parça değişimini ve büyüyen maliyeti önler.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim/"
                className="inline-flex items-center justify-center rounded-lg bg-brass px-5 py-3 font-saira text-sm font-semibold text-graphite-base transition-transform hover:-translate-y-0.5"
              >
                Ücretsiz ön tanı için iletişime geçin
              </Link>
              <Link
                href="/hizmetler/dsg-sanziman-tamiri/"
                className="inline-flex items-center justify-center rounded-lg border border-border-hairline px-5 py-3 font-saira text-sm font-semibold text-text-primary transition-colors hover:border-border-brass hover:text-brass"
              >
                DSG hizmet yaklaşımımızı görün
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <TransmissionFaq slug="seat-dsg-sanziman-sorunlari" />
          </div>
        </section>

        <section className="bg-graphite-base px-4 pb-20">
          <div className="mx-auto max-w-2xl">
            <ContactForm
              title="Seat DSG belirtinizi yazın"
              description="Leon, Ibiza, Ateca, Arona veya Cupra modelinizdeki belirtiyi yazın; hangi hattın öne çıktığını birlikte netleştirelim."
              source="rehber_seat_dsg_sanziman_sorunlari"
              ctaLabel="Ön tanı talep et"
            />
          </div>
        </section>
      </main>
    </>
  );
}
