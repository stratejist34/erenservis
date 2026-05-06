import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/interactive/ContactForm';
import TransmissionFaq from '@/components/sanziman/TransmissionFaq';
import { buildArticleSchema, buildBreadcrumbSchema, buildFAQSchema } from '@/lib/schema';
import { TRANSMISSION_FAQS } from '@/lib/sanziman-faq';

const PAGE_URL = 'https://www.erenservis.net/rehber/bmw-zf-8hp-sanziman-sorunlari/';

export const metadata: Metadata = {
  title: 'BMW ZF 8HP Şanzıman Sorunları | 3 5 7 Serisi ve X Modeller',
  description:
    'BMW ZF 8HP şanzıman sorunları: 3, 5, 7 Serisi ve X modellerinde tork konvertörü, mekatronik, yağ kaçağı, köprü manşonu ve doğru servis kararı.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'BMW ZF 8HP Şanzıman Sorunları | Eren Otomatik Şanzıman Servisi',
    description:
      'BMW ZF 8HP’de “lifetime oil” gerçeği, köprü manşonu sızıntısı, tork konvertörü titreşimi ve doğru tamir yaklaşımı rehberi.',
    url: PAGE_URL,
    type: 'article',
    publishedTime: '2026-05-06',
    authors: ['Eren Otomatik Şanzıman Servisi'],
  },
};

const faqItems = TRANSMISSION_FAQS['bmw-zf-8hp-sanziman-sorunlari'] ?? [];

const articleSchema = buildArticleSchema({
  title: 'BMW ZF 8HP Şanzıman Sorunları',
  description:
    'BMW’de kullanılan ZF 8HP ailesinde yağ disiplini, köprü manşonu sızıntısı, tork konvertörü titreşimi ve kademeli tamir yaklaşımı.',
  url: PAGE_URL,
  datePublished: '2026-05-06',
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Ana Sayfa', url: 'https://www.erenservis.net/' },
  { name: 'Rehber', url: 'https://www.erenservis.net/rehber/' },
  { name: 'BMW ZF 8HP Şanzıman Sorunları', url: PAGE_URL },
]);

const faqSchema = buildFAQSchema(faqItems);

const modelRows = [
  ['3 Serisi / 4 Serisi', 'ZF 8HP45 / 8HP50', '320i, 320d, 330i, 420d gibi yaygın kombinasyonlar'],
  ['5 Serisi / 7 Serisi', 'ZF 8HP50 / 8HP70 / 8HP75', 'Daha yüksek tork ve konfor beklentisi birlikte gelir'],
  ['X3 / X4', 'ZF 8HP45 / 8HP50', 'SUV yükü ve ısı karakteri farklılaşabilir'],
  ['X5 / X6 / X7', 'ZF 8HP70 / 8HP75 / 8HP90', 'Ağır kasa ve yüksek tork bakım disiplinini daha kritik yapar'],
] as const;

const issueRows = [
  ['Sıcakken vites geçişlerinde gecikme', 'Eski yağ ve mekatronik yorgunluğu birlikte düşünülür'],
  ['50-90 km/s bandında hafif titreşim', 'Tork konvertörü kilitleme hattı'],
  ['Vites geçişlerinde sertleşme', 'Valf gövdesi / basınç yönetimi'],
  ['Park yerinde yağ izi veya motor yağı seviyesinde anlamsız artış', 'Mekatronik köprü manşonu veya bağlantı sızıntısı'],
] as const;

const leakRows = [
  ['Pan contası ve cıvata hattı', 'Küçük damlatma ile başlayabilir', 'Planlı bakım gerekir'],
  ['Tahliye / doldurma tapası', 'Yağ değişimi sonrası da görülebilir', 'Conta ve sıkma kalitesi kontrol edilir'],
  ['Mekatronik köprü manşonu', 'ZF 8HP’nin en tipik sızıntı hattıdır', 'Erken yakalanmazsa yağ seviyesi kritik düşebilir'],
  ['Tork konvertörü ön keçesi', 'Daha ileri seviye yorgunluk senaryosu', 'Kapsamlı tamirde değerlendirilir'],
] as const;

const decisionRows = [
  ['Soğukken normal, ısınınca geçişler bozuluyor', 'Önce yağ disiplini, sonra mekatronik tarafı düşünülür'],
  ['Sabit hızda hafif titreşim var', 'Tork konvertörü kilitleme hattı öne çıkar'],
  ['Yağ kaçağı + sertleşme birlikte var', 'Sürüşü zorlamadan kısa sürede kontrol gerekir'],
  ['Yetkili servis doğrudan komple değişim önerdi', 'Kademeli tamir ihtimali mutlaka sorgulanmalıdır'],
] as const;

const serviceSteps = [
  'Önce yağ değişim geçmişi ve varyasyon bilgisi netleştirilir.',
  'ISTA / orijinal teşhisle kalıcı-geçici kodlar ve canlı veriler okunur.',
  'Köprü manşonu, pan ve bağlantı hatlarında sızıntı fiziksel olarak kontrol edilir.',
  'Yağ + filtre + pan + adaptasyon ile çözülebilecek vaka, doğrudan büyük tamire taşınmaz.',
  'Gerekirse mekatronik, tork konvertörü ve valf gövdesi kademeli olarak değerlendirilir.',
] as const;

export default function BmwZf8hpSanzimanSorunlariPage() {
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
              <span>BMW ZF 8HP Şanzıman Sorunları</span>
            </nav>

            <span className="mb-4 inline-block font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
              Marka × Şanzıman
            </span>

            <h1 className="mb-4 font-saira text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
              BMW ZF 8HP Şanzıman Sorunları
            </h1>
            <p className="mb-8 font-saira text-lg leading-relaxed text-text-secondary">
              ZF 8HP, BMW dünyasının en başarılı otomatik şanzıman ailelerinden biridir. Doğru
              bakımla çok uzun ömürlü olabilir; ama “ömürlük yağ” yanılgısı, mekatronik köprü
              manşonu sızıntısı ve geciken müdahale yüzünden pahalı bir tabloya da dönüşebilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">ZF 8HP</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Premium tam otomatik
                </div>
              </div>
              <div className="border-x border-border-hairline text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Kademeli Tamir</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Her vaka komple yenileme değildir
                </div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Yağ Disiplini</div>
                <div className="mt-1 font-jetbrains text-xs text-text-secondary">
                  Ömrü belirleyen ana başlık
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
              BMW ZF 8HP’de en kritik başlıklar <strong>yağ disiplini</strong>,
              <strong> mekatronik köprü manşonu sızıntısı</strong>, <strong>tork konvertörü titreşimi</strong>{' '}
              ve <strong>sıcakta belirti artışı</strong>dır. Pek çok vaka doğru sırayla ilerlenirse
              komple yenilemeye gitmeden çözülebilir.
            </p>
          </div>

          <p className="mb-4 font-saira text-base leading-relaxed text-text-secondary">
            BMW sahibinin en sık duyduğu cümle “komple değişim gerekir” olur. Oysa saha gerçeğinde
            ZF 8HP vakalarının önemli kısmı yağ, filtre, pan, sızıntı düzeltmesi ve mekatronik
            tarafında kademeli müdahaleyle çözülebilir.
          </p>
          <p className="font-saira text-base leading-relaxed text-text-secondary">
            Bu rehberin amacı, ZF 8HP’de hangi semptomun küçük müdahale, hangisinin daha kapsamlı
            tamir istediğini ayırmaktır.
          </p>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-6 font-saira text-2xl font-semibold text-text-primary">
              Hangi BMW modellerinde ZF 8HP var?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Model grubu</th>
                    <th className="px-4 py-3">Tipik varyasyon</th>
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
            ZF 8HP’de en sık görülen belirtiler
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
              Mekatronik köprü manşonu neden bu kadar önemli?
            </h2>
            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-left">
                <thead className="bg-graphite-elevated">
                  <tr className="font-jetbrains text-[11px] uppercase tracking-[0.16em] text-iron-light">
                    <th className="px-4 py-3">Hat</th>
                    <th className="px-4 py-3">Nasıl görünür?</th>
                    <th className="px-4 py-3">Ne yapılır?</th>
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
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            “Lifetime oil” gerçekten doğru mu?
          </h2>
          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <p className="mb-4 font-saira text-sm leading-7 text-text-secondary">
              Katalogdaki “lifetime oil” ifadesi, gerçek saha kullanımında güvenli bir bakım planı
              değildir. Özellikle yoğun şehir içi, yüksek ısı ve ağır kullanımlarda ZF 8HP yağı
              zamanla özelliğini kaybeder.
            </p>
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Pratikte 60.000-100.000 km bandında yağ + filtre + pan disiplini, ZF 8HP ömrünün en
              kritik belirleyicisidir.
            </p>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
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
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-12">
          <h2 className="mb-8 font-saira text-2xl font-semibold text-text-primary">
            Eren’de ZF 8HP teşhis akışı
          </h2>
          <div className="rounded-xl border border-border-hairline bg-graphite-surface p-5">
            <ul className="space-y-2 font-saira text-sm leading-7 text-text-secondary">
              {serviceSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl rounded-xl border border-border-brass/30 bg-graphite-base p-5">
            <h2 className="mb-3 font-saira text-2xl font-semibold text-text-primary">
              ZF 8HP’de en büyük hata nedir?
            </h2>
            <p className="font-saira text-sm leading-7 text-text-secondary">
              Kademeli teşhisi atlayıp doğrudan komple yenileme korkusuna teslim olmak. Erken
              dönemde yağ, pan, adaptasyon ve sızıntı çözümüyle kurtulabilecek çok sayıda BMW,
              geç kalındığında gereksiz büyüyen maliyetle karşılaşır.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-4 py-10">
          <h2 className="mb-4 font-saira text-base font-semibold text-text-primary">
            İlgili rehberler
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/hizmetler/zf-sanziman-tamiri/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">ZF Hizmeti</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                ZF şanzıman tamiri →
              </div>
            </Link>

            <Link
              href="/hizmetler/sanziman-bakimi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Bakım</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Şanzıman bakımı →
              </div>
            </Link>

            <Link
              href="/blog/otomatik-sanziman-ustasi-secimi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Karar</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik şanzıman ustası seçimi →
              </div>
            </Link>

            <Link
              href="/rehber/otomatik-sanziman-ariza-lambasi/"
              className="group block rounded-xl border border-border-hairline bg-graphite-surface p-4 transition-all hover:border-border-brass hover:bg-graphite-elevated"
            >
              <div className="mb-1 font-jetbrains text-xs uppercase tracking-wide text-iron-light">Uyarı</div>
              <div className="font-saira text-sm font-semibold text-text-primary transition-colors group-hover:text-brass">
                Otomatik şanzıman arıza lambası →
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-graphite-surface px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <TransmissionFaq slug="bmw-zf-8hp-sanziman-sorunlari" />
          </div>
        </section>

        <section className="bg-graphite-base px-4 pb-20">
          <div className="mx-auto max-w-2xl">
            <ContactForm
              title="BMW ZF 8HP belirtinizi yazın"
              description="3 Serisi, 5 Serisi, 7 Serisi veya X modellerinizdeki gecikme, titreşim ya da sızıntı belirtisini yazın; hangi hattın öne çıktığını birlikte netleştirelim."
              source="rehber_bmw_zf_8hp_sanziman_sorunlari"
              ctaLabel="Ön tanı talep et"
            />
          </div>
        </section>
      </main>
    </>
  );
}
