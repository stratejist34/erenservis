import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/dsg-kavrama-tolerans-limiti/';

export const metadata: Metadata = {
  title: 'DSG Kavrama Tolerans Limiti | Adaptasyon mu Değişim mi?',
  description:
    "DSG'de kavrama tolerans limitine ulaşıldı kodu ne anlatır? Adaptasyonun yettiği ve yetmediği durumlar, K1-K2 farkı ve doğru servis kararı.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'DSG Kavrama Tolerans Limiti | Eren Otomatik Şanzıman Servisi',
    description:
      "Kavrama 1 veya kavrama 2 tolerans limiti kodu ne demek, ne zaman adaptasyon denenir, ne zaman değişim gerekir?",
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['dsg-kavrama-tolerans-limiti'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'DSG Kavrama Tolerans Limitine Ulaşıldı: Adaptasyon mu, Değişim mi?',
  description:
    "VCDS veya ODIS'te görülen DSG kavrama tolerans limiti kodunun anlamı, K1-K2 ayrımı ve karar yolu.",
  url: PAGE_URL,
  datePublished: '2026-05-04',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'DSG Kavrama Tolerans Limiti', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const transmissionRows = [
  ['DQ200', 'En yaygın', 'Disk yorulması + basınç tüpü etkisi'],
  ['DQ250', 'Orta', 'Hidrolik basınç + kavrama paketi birlikte okunur'],
  ['DQ381', 'Daha az', 'Adaptasyon ve yazılım tarafı daha baskın olabilir'],
  ['DQ500', 'Orta', 'Ağır kullanımda ıslak kavrama yorulması'],
] as const;

const symptomRows = [
  ['Tek başına kod, belirti yok', 'Erken uyarı olabilir', 'Adaptasyon + izleme'],
  ['Kod + 1-2 silkelemesi', 'Kavrama yorulması güçlü aday', 'Yakın takip / değişim hazırlığı'],
  ['Kod + kayma hissi', 'Mekanik aşınma sınırı aşılmış olabilir', 'Değişim değerlendirmesi'],
  ['Kod + soğukta gecikme', 'Basınç veya mekatronik tarafı da incelenmeli', 'Canlı veri + basınç kontrolü'],
] as const;

const precheckItems = [
  'Kod Kavrama 1 mi, Kavrama 2 mi olarak görünüyor?',
  'Araçta 1-2 silkelemesi, kayma veya yanık koku var mı?',
  'Son yağ değişimi ve adaptasyon işlemi ne zaman yapıldı?',
  'Araç daha çok şehir içi mi, uzun yol mu kullanılıyor?',
  'Daha önce bu kod silinip tekrar geri geldi mi?',
] as const;

export default function DsgKavramaToleransLimitiPage() {
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
              <span>DSG Kavrama Tolerans Limiti</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Mikro Semptom
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              DSG kavrama tolerans limitine ulaşıldı
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              VCDS veya ODIS&apos;te Kavrama 1 ya da Kavrama 2 tolerans limit kodu gördüyseniz,
              DSG size kavrama aşınmasını artık yazılımla telafi etmekte zorlandığını söylüyor
              demektir. Bu önemli bir uyarıdır; ama her zaman “hemen kavrama bitti” anlamına gelmez.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">K1 / K2</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Hangi hat etkilendi?</div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3 Yol</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Adaptasyon / basınç / değişim</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Veri</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">Canlı veri şart</div>
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
              Bu kod, kavrama disklerinin aşınmasının artık adaptasyon sınırına dayandığını anlatır.
              <strong> Karar penceresi açılmıştır</strong>; ama doğru karar, canlı veri, belirti ve
              basınç tarafı birlikte okunmadan verilmez.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            DSG, kavrama aşındıkça bunu basis settings ile telafi eder. Yani sistem kavrama devreye
            giriş noktasını yeniden öğrenir. Tolerans limiti dediğimiz şey, bu telafinin artık güvenli
            sınırına yaklaşılmasıdır.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bazı vakalarda bu kod, gerçekten kavrama paketinin ömrünün sonuna yaklaştığını söyler.
            Bazı vakalarda ise{' '}
            <Link
              href="/blog/dq200-mekatronik-tamiri/"
              className="text-brass underline decoration-brass/40 underline-offset-2 transition-colors hover:decoration-brass"
            >
              basınç veya mekatronik tarafı
            </Link>{' '}
            kavramayı olduğundan daha kötü gösterir. Fark burada ortaya çıkar.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Bu kod tam olarak ne demek?
            </h2>

            <div className="rounded-xl border border-border-hairline bg-graphite-base p-5">
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Mekatronik, kavrama aşınmasını yazılımsal olarak kompanze etmeye çalışır. Tolerans
                limit kodu çıktığında sistem aslında şunu söyler: “Aşınmayı görüyorum ve bunu artık
                sağlıklı marj içinde telafi etmekte zorlanıyorum.” Bu, karar verilmesi gereken bir eşiğe
                gelindiğini gösterir.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            K1 mi, K2 mi? Bunun anlamı ne?
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                Kavrama 1
              </div>
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Tek viteslerle çalışan hattır. Şehir içi kullanım, sık kalkış ve dur-kalk ağırlıklı
                araçlarda daha erken yorulabilir.
              </p>
            </div>

            <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
              <div className="mb-3 font-jetbrains text-xs uppercase tracking-[0.18em] text-brass">
                Kavrama 2
              </div>
              <p className="font-saira text-sm leading-7 text-text-secondary">
                Çift viteslerle çalışan hattır. Uzun yol ve yüksek vites yüklerinde etkilenebilir;
                ama sahada K1 kadar sık görünmez.
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
                    <th className="px-4 py-3">Tipik yorum</th>
                  </tr>
                </thead>
                <tbody>
                  {transmissionRows.map((row) => (
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
            Hangi durumda ne düşünülür?
          </h2>

          <div className="overflow-hidden rounded-xl border border-border-hairline">
            <table className="w-full text-left">
              <thead className="bg-graphite-elevated">
                <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                  <th className="px-4 py-3">Durum</th>
                  <th className="px-4 py-3">İlk yorum</th>
                  <th className="px-4 py-3">Karar</th>
                </tr>
              </thead>
              <tbody>
                {symptomRows.map((row) => (
                  <tr key={row[0]} className="border-t border-border-hairline bg-graphite-surface align-top">
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
              Adaptasyon ne zaman çözebilir, ne zaman çözmez?
            </h2>

            <div className="space-y-4">
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-green-800">Çözebilir</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-green-900">
                  <li>Yağ değişimi veya akü işlemi sonrası yeni çıktıysa</li>
                  <li>Belirti hafifse ve canlı veride aşınma fiziksel sınırı geçmediyse</li>
                  <li>Tek seferlik bir hata olarak görünüp tekrar etmiyorsa</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 font-saira text-lg font-semibold text-red-800">Çözmez</h3>
                <ul className="space-y-2 font-saira text-sm leading-7 text-red-900">
                  <li>Adaptasyondan kısa süre sonra kod geri geliyorsa</li>
                  <li>1-2 silkelemesi, kayma veya yanık koku eşlik ediyorsa</li>
                  <li>Basınç veya mekatronik verileri tolerans dışındaysa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
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
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-kavrama-tolerans-limiti" />
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/rehber/dsg-kavrama-ariza-belirtileri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama arıza belirtileri →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-1-2-vites-silkeleme/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG 1-2 vites silkelemesi →
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
              href="/hizmetler/dsg-kavrama-degisimi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                DSG kavrama değişimi →
              </div>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 pb-12">
          <div className="rounded-xl border border-border-subtle bg-graphite-elevated p-8 text-center">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              Tolerans limit kodunu doğru okuyalım
            </h2>
            <p className="mb-6 font-saira text-sm leading-relaxed text-text-secondary">
              Kodun gerçekten kavrama değişimi mi istediğini, yoksa önce basınç ve adaptasyon hattına
              mı bakmak gerektiğini birlikte netleştirelim.
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
