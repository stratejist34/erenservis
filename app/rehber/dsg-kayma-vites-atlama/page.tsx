import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

export const metadata: Metadata = {
  title: "DSG'de Kayma ve Vites Atlama: DQ200, DQ250, DQ381 | Eren Servis Bostancı",
  description:
    "DSG kayması neden olur? Kuru kavrama (DQ200) ve ıslak kavrama (DQ250, DQ381) " +
    "arasındaki fark, basınç tüpü, solenoid ve çözüm maliyetleri. Bostancı, İstanbul.",
  keywords: [
    "dsg kayma",
    "dsg vites atlama",
    "dq200 kayma",
    "dq250 kayma",
    "dq381 kayma",
    "dsg basınç tüpü kayma",
    "dsg kavrama devir atıyor",
  ],
  openGraph: {
    title: "DSG'de Kayma ve Vites Atlama: Kuru vs Islak Kavrama | Eren Servis",
    description:
      "DQ200, DQ250, DQ381 DSG modellerinde kayma nedenleri ve çözümleri. Bostancı.",
    url: "https://www.erenservis.net/rehber/dsg-kayma-vites-atlama",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Kayma ve Vites Atlama",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/dsg-kayma-vites-atlama",
  },
};

const faqItems = TRANSMISSION_FAQS["dsg-kayma-vites-atlama"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG'de Kayma ve Vites Atlama: DQ200, DQ250, DQ381 Farkları",
  description:
    "DSG şanzımanda kayma kaynakları, kuru ve ıslak kavrama farkları, " +
    "basınç tüpü ve mekatronik çözüm maliyetleri.",
  url: "https://www.erenservis.net/rehber/dsg-kayma-vites-atlama",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "DSG Kayma ve Vites Atlama",
    url: "https://www.erenservis.net/rehber/dsg-kayma-vites-atlama",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Kayma Teşhisi ve Basınç Tüpü Değişimi",
  description:
    "DQ200, DQ250, DQ381 DSG modellerinde kayma teşhisi, basınç testi ve onarım. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/dsg-kayma-vites-atlama",
});

const modeller = [
  {
    kod: "DQ200",
    tip: "7 ileri — Kuru Kavrama",
    araclar: "VW Polo, Golf, Caddy, Jetta (1.2-1.6 TSI, 1.6 TDI)",
    aninaKayma:
      "Balata kompozit katman aşınması (80.000-120.000 km). Kalkışta motor devri " +
      "yükselirken araç gecikmeli ilerler — yanık kavrama kokusu eşlik eder.",
    cozum: "Kavrama paketi değişimi",
    maliyet: "55.000–72.000 TL",
    renk: "border-red-200 bg-red-50",
  },
  {
    kod: "DQ250",
    tip: "6 ileri — Islak Kavrama",
    araclar: "VW Passat, Tiguan, Golf GTI, Audi A3 (2.0 TSI, 2.0 TDI)",
    aninaKayma:
      "Mekatronik basınç tüpü (akümülatör) delinmesi. 150.000 km üzeri sık görülür. " +
      "Kavrama sağlam olsa bile iç basınç düşer, sıkışma yetersiz kalır.",
    cozum: "Basınç tüpü değişimi veya mekatronik revizyonu",
    maliyet: "15.000–25.000 TL (basınç tüpü)",
    renk: "border-amber-200 bg-amber-50",
  },
  {
    kod: "DQ381",
    tip: "7 ileri — Islak Kavrama",
    araclar: "VW Arteon, Golf R, Tiguan Allspace (2.0 TSI, 2.0 TDI)",
    aninaKayma:
      "Yeni nesil ıslak kavrama — basınç tüpü hastalığı daha nadir. Kayma genelde " +
      "solenoid valf kirliliği veya yağ dejenerasyonundan çıkar. Kavrama " +
      "balata aşınması 200.000 km+ aralığında başlar.",
    cozum: "Yağ değişimi + mekatronik revizyon",
    maliyet: "8.000–18.000 TL",
    renk: "border-orange-200 bg-orange-50",
  },
];

const belirtiler = [
  {
    no: "01",
    baslik: "Gaz pedalına basıldığında motor devri aniden yükseliyor",
    aciklama:
      "Devir 3.000-4.000 rpm'e fırlıyor ama araç aynı tempoda ivmelenmiyor. " +
      "Kavrama tork iletemiyor demektir.",
  },
  {
    no: "02",
    baslik: "Rampada geri kayma hissi",
    aciklama:
      "D vitesinde yokuş çıkarken araç geri kayma eğilimi gösterir. Kuru " +
      "kavramada balata tamamen aşındığında belirgindir.",
  },
  {
    no: "03",
    baslik: "Yanık kavrama kokusu",
    aciklama:
      "Özellikle DQ200'de kalkış sırasında veya rampada yanık kağıt/kavrama " +
      "kokusu hissedilir. Balata sürtünme yüzeyi aşırı ısınmış ve yanmaktadır.",
  },
  {
    no: "04",
    baslik: "Soğuk havada daha belirgin kayma",
    aciklama:
      "DQ250 basınç tüpü sızıntısının erken belirtisi soğuk havada belirginleşen " +
      "kaymadır. Motor ısındıkça geçici rahatlar — bu aldatıcıdır, sorun ilerlemektedir.",
  },
];

export default function DSGKaymaVitesAtlamaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [articleSchema, faqSchema, breadcrumbSchema, serviceSchema],
          }),
        }}
      />

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-text-primary transition-colors">Rehber</a>
              <span>/</span>
              <Link href="/rehber/otomatik-sanziman-kayma" className="hover:text-text-primary transition-colors">
                Kayma
              </Link>
              <span>/</span>
              <span className="text-text-secondary">DSG</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              DSG Detay
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG'de Kayma ve Vites Atlama: DQ200, DQ250, DQ381 Farkları
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              DSG kayması şanzıman tipine göre farklı kaynaklardan çıkar.
              Kuru kavramada balata aşınması, ıslak kavramada basınç tüpü
              veya solenoid — yanlış teşhis yanlış parça değişimine yol açar.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">DSG modeli</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">8-72K ₺</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Çözüm aralığı</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">6 ay</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Garanti</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TL;DR ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div
            data-speakable="true"
            className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              DSG'de kayma{" "}
              <strong>kuru kavramada balata aşınması, ıslak kavramada basınç tüpü</strong>{" "}
              sızıntısından çıkar. Çözüm maliyeti 8.000 TL (yağ + adaptasyon) ile
              72.000 TL (komple kavrama paketi) arasında değişir — erken teşhis
              maliyeti 3-4 katına kadar düşürür.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            DSG kayması "motor bağırıyor ama gitmiyor" olarak tarif edilir.
            Motor devri ivmelenmeden yükselir; özellikle yokuşta ve kalkışta
            belirgindir. Ancak kaynağı aracınızın DSG modeline bağlıdır.
          </p>
        </section>

        {/* ── DSG MODELLERİ ──────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              DSG Modeline Göre Kayma Kaynağı
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Aracınızın DSG modelini bulun — hangi kaynak en olası görelim.
            </p>

            <div className="space-y-4">
              {modeller.map((m) => (
                <div
                  key={m.kod}
                  className={`border rounded-xl p-5 ${m.renk}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-jetbrains text-xs font-bold uppercase tracking-widest text-text-primary mb-1">
                        {m.kod}
                      </div>
                      <div className="font-saira text-sm font-semibold text-graphite-base">
                        {m.tip}
                      </div>
                    </div>
                    <span className="shrink-0 font-jetbrains text-[10px] font-bold uppercase tracking-wider text-graphite-base">
                      {m.maliyet}
                    </span>
                  </div>
                  <div className="font-saira text-xs text-graphite-base mb-3">
                    <strong>Araçlar:</strong> {m.araclar}
                  </div>
                  <p className="font-saira text-sm text-graphite-base leading-relaxed mb-2">
                    {m.aninaKayma}
                  </p>
                  <div className="font-jetbrains text-[11px] text-graphite-base">
                    <strong>Çözüm:</strong> {m.cozum}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BELİRTİLER ─────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            DSG Kaymasının 4 Belirtisi
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Bu belirtilerin kombinasyonu kaynağı gösterir.
          </p>

          <div className="space-y-5">
            {belirtiler.map((b) => (
              <div key={b.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass shrink-0 w-6 mt-0.5">
                  {b.no}
                </div>
                <div>
                  <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                    {b.baslik}
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">
                    {b.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── KURU vs ISLAK KARŞILAŞTIRMA ────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Kuru vs Islak Kavrama: Kayma Açısından Fark
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="border border-border-hairline bg-graphite-base rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                  Kuru Kavrama (DQ200)
                </div>
                <ul className="font-saira text-sm text-text-secondary leading-relaxed space-y-2">
                  <li>• Balata aşınması ana kayma nedeni</li>
                  <li>• 80.000-120.000 km risk aralığı</li>
                  <li>• Yanık koku belirgin</li>
                  <li>• Tek çözüm: kavrama paketi değişimi</li>
                </ul>
              </div>
              <div className="border border-border-hairline bg-graphite-base rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                  Islak Kavrama (DQ250, DQ381)
                </div>
                <ul className="font-saira text-sm text-text-secondary leading-relaxed space-y-2">
                  <li>• Basınç tüpü / solenoid sık neden</li>
                  <li>• 150.000-200.000 km risk aralığı</li>
                  <li>• Yanık koku olmaz</li>
                  <li>• Ekonomik çözüm mümkün (basınç tüpü)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-kayma-vites-atlama" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              İlgili Rehberler
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/rehber/otomatik-sanziman-kayma"
                className="sm:col-span-2 block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Kayma: Tüm Tipler ve Ayırt Etme →
                </div>
              </a>
              {[
                {
                  href: "/hizmetler/dsg-basinc-tupu",
                  tip: "Fiyat",
                  baslik: "DSG Basınç Tüpü Değişimi Fiyatı →",
                },
                {
                  href: "/hizmetler/dsg-kavrama-degisimi",
                  tip: "Fiyat",
                  baslik: "DSG Kavrama Değişimi Fiyatı →",
                },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
                >
                  <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">{r.tip}</div>
                  <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                    {r.baslik}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              DSG kaymasını doğru teşhis ettirin
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Kuru mu ıslak mı, balata mı basınç mı — yanlış teşhis binlerce TL
              fazla maliyet demektir. Ücretsiz basınç testi, 6 ay garanti,
              Bostancı, İstanbul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/dsg-basinc-tupu"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Basınç tüpü fiyatları →
              </Link>
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM FORMU ─────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <ContactForm />
        </section>

      </main>
    </>
  );
}
