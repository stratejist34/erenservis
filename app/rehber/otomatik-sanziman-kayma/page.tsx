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
  title: "Otomatik Şanzımanda Kayma: Vites Atlama Neden Olur? | Eren Servis Bostancı",
  description:
    "DSG, CVT, ZF ve tork konvertörlü şanzımanlarda kayma ve vites atlama nedenleri. " +
    "Kavrama, basınç tüpü, kayış ve mekatronik — hangi senaryoda ne yapılır. Bostancı, İstanbul.",
  keywords: [
    "otomatik şanzıman kayma yapıyor",
    "şanzıman vites atlıyor neden",
    "dsg kayma neden olur",
    "otomatik vites kayıyor",
    "cvt kayma",
    "vites atlama otomatik vites",
    "devir atlama otomatik vites",
    "şanzıman boş yere dönüyor",
  ],
  openGraph: {
    title: "Otomatik Şanzımanda Kayma ve Vites Atlama | Eren Servis",
    description:
      "DSG, CVT ve tork konvertörlü şanzımanlarda kayma nedenleri ve çözümleri. " +
      "Bostancı'da ücretsiz teşhis.",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-kayma",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzıman Kayma ve Vites Atlama",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/otomatik-sanziman-kayma/",
  },
};

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-kayma"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzımanda Kayma: Vites Atlama Neden Olur?",
  description:
    "DSG, CVT, ZF/Aisin ve klasik otomatiklerde kayma ve vites atlama nedenleri, " +
    "ayırt edici belirtiler ve aciliyet değerlendirmesi.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-kayma",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "Otomatik Şanzımanda Kayma",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-kayma",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Otomatik Şanzıman Kayma ve Vites Atlama Teşhisi",
  description:
    "DSG, CVT ve tork konvertörlü şanzımanlarda kayma teşhisi, basınç testi ve onarım. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-kayma",
});

const tipler = [
  {
    kod: "DSG / DCT",
    markalar: "VW, Audi, Skoda, Seat, Cupra",
    kaynak: "Kavrama balatası + mekatronik basınç tüpü",
    anlam:
      "Kuru kavramalı DQ200'de balata aşınması, ıslak kavramalı DQ250/DQ381'de ise " +
      "mekatronik basınç tüpü sızıntısı kaymanın iki ana sebebidir. Mekatronik " +
      "solenoid kirliliği üçüncü neden olarak eklenir.",
    href: "/rehber/dsg-kayma-vites-atlama",
    linkMetin: "DSG kayma detay rehberi →",
    renk: "border-red-200 bg-red-50 text-red-700",
    badge: "En yaygın",
  },
  {
    kod: "CVT",
    markalar: "Toyota, Honda, Nissan, Subaru",
    kaynak: "Kayış aşınması + pully yüzey hasarı",
    anlam:
      "CVT'de kayma doğrudan kayış aşınmasının sonucudur. Geri dönüşsüz bir " +
      "süreçtir — erken müdahale pully yüzeyini korur, geç müdahale komple " +
      "set değişimine götürür.",
    href: "/rehber/cvt-kayma",
    linkMetin: "CVT kayma detay rehberi →",
    renk: "border-orange-200 bg-orange-50 text-orange-700",
    badge: "Kritik",
  },
];

const kaynaklar = [
  {
    no: "01",
    baslik: "Kavrama balatası aşınması (DSG, DCT, PowerShift)",
    aciklama:
      "Balata kompozit katmanı aşındığında sürtünme yüzeyi yeterli tork iletemez. " +
      "DSG DQ200 kuru kavramada 80.000-120.000 km, Ford PowerShift DPS6'da " +
      "50.000-90.000 km aralığında sık görülür. Kalkışta kayma + yanık kokusu klasik belirtidir.",
  },
  {
    no: "02",
    baslik: "Mekatronik basınç kaybı (DSG DQ250, ZF 8HP)",
    aciklama:
      "Mekatronik akümülatör (basınç tüpü) delindiğinde iç hidrolik basınç düşer. " +
      "Kavrama balatası sağlam olsa bile yeterli sıkışma olmaz — özellikle soğuk " +
      "havada ve rampada kayma belirginleşir.",
  },
  {
    no: "03",
    baslik: "Kayış + pully aşınması (CVT)",
    aciklama:
      "CVT kayışının çelik lamelleri pully (koni) yüzeyine baskı uygular. " +
      "Aşınma ilerlediğinde kayış tırtıklaşır; pully yüzeyinde iz oluşur. " +
      "Kayma bu noktadan sonra kaçınılmazdır.",
  },
  {
    no: "04",
    baslik: "Solenoid valf kirliliği / yazılım adaptasyonu",
    aciklama:
      "Solenoid valfteki metal parçacık birikintisi veya ECU adaptasyon " +
      "bozukluğu vites geçişlerinde kayma hissine yol açar. Yağ değişimi + " +
      "adaptasyon sıfırlama genellikle çözer — erken evrede en ekonomik onarımdır.",
  },
];

export default function OtomatikSanzımanKaymaPage() {
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
              <span className="text-text-secondary">Otomatik Şanzımanda Kayma</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Genel Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Otomatik Şanzımanda Kayma: Vites Atlama Neden Olur?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Gaza basınca motor bağırır ama araç ivmelenmez — bu klasik
              "kayma" veya "vites atlama" tablosudur. DSG, CVT ve tork
              konvertörlü sistemlerde kaynağı farklıdır. Bu rehberde tipe
              göre ayrıştırıyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ana kaynak</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">3</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Şanzıman tipi</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Basınç testi</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIZLI CEVAP ────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div
            data-speakable="true"
            className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              Otomatik şanzımanda kayma{" "}
              <strong>3 kaynaktan çıkar</strong>: kavrama balatası aşınması (en
              yaygın), mekatronik basınç kaybı veya CVT kayış aşınması. Motor
              devri yükselirken hızın artmaması kaymanın temel belirtisidir —
              ertelemek maliyeti 3-4 katına çıkarır.
            </p>
          </div>

          <h2 className="font-saira text-xl font-semibold text-text-primary mb-3">
            Kayma ve Vites Atlama — Fark Nedir?
          </h2>
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Halk dilinde "vites atlama" veya "devir atlama", teknik dilde
            "kayma" olarak bilinen bu tablo aslında iki farklı açıdan aynı
            olayı anlatır:
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="border border-border-hairline rounded-xl bg-graphite-surface p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                Kayma (teknik)
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Kavrama veya kayışın yeterli tork iletememesi.
                <strong> Nedendir.</strong> Kaynak şanzıman içindedir.
              </p>
            </div>
            <div className="border border-border-hairline rounded-xl bg-graphite-surface p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                Vites Atlama (halk dili)
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Kaymanın dışarıdan görünümü: motor devri normal dışı yükseğe
                fırlar. <strong>Sonuçtur.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── TİP KARŞILAŞTIRMA ──────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Şanzıman Tipine Göre Kayma
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Aracınızın şanzıman tipine göre detaylı rehbere geçin.
            </p>

            <div className="space-y-4">
              {tipler.map((tip) => (
                <div
                  key={tip.kod}
                  className="border border-border-hairline rounded-xl bg-graphite-base p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                        {tip.kod}
                      </div>
                      <div className="font-saira text-sm text-text-secondary">
                        {tip.markalar}
                      </div>
                    </div>
                    <span className={`shrink-0 font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tip.renk}`}>
                      {tip.badge}
                    </span>
                  </div>
                  <div className="font-jetbrains text-[11px] font-medium text-text-secondary mb-2 tracking-wide">
                    Ana kaynak: <span className="text-text-primary">{tip.kaynak}</span>
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                    {tip.anlam}
                  </p>
                  <Link
                    href={tip.href}
                    className="font-saira text-sm font-medium text-brass hover:text-brass/80 transition-colors underline underline-offset-2"
                  >
                    {tip.linkMetin}
                  </Link>
                </div>
              ))}
            </div>

            {/* Tork konvertör notu */}
            <div className="mt-4 border border-border-hairline rounded-xl bg-graphite-base p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                ZF / Aisin — Tork Konvertörlü
              </div>
              <div className="font-saira text-sm text-text-secondary mb-2">
                Mercedes, BMW, Opel, Peugeot, Citroen
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Bu sistemlerde kayma genellikle <strong>tork konvertör iç kavraması</strong>{" "}
                aşınmasından çıkar — gaz pedalına basıldığında motor devri hemen
                1.500 rpm üzerine fırlar ama ivmelenme geciker. Yağ kalitesi ve
                solenoid temizliği erken evrede kritik rol oynar.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 KAYNAK ───────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Kaymanın 4 Ortak Kaynağı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Dört farklı bileşen, dört farklı kayma profili yaratır.
          </p>

          <div className="space-y-5">
            {kaynaklar.map((n) => (
              <div key={n.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass shrink-0 w-6 mt-0.5">
                  {n.no}
                </div>
                <div>
                  <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                    {n.baslik}
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">
                    {n.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ACİLİYET REHBERİ ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Kayma Ne Zaman Acil?
            </h2>

            <div className="space-y-4">
              {[
                {
                  durum: "Sadece rampada ve soğuk havada hafif kayma",
                  sure: "2 hafta içinde",
                  aciklama:
                    "Mekatronik basınç kaybının erken belirtisi veya solenoid kirliliği. " +
                    "Yağ değişimi + basınç testiyle çözülebilir.",
                  renk: "text-green-700 bg-green-50 border-green-200",
                },
                {
                  durum: "Düz yolda gaza basınca motor devri fırlıyor",
                  sure: "Bu hafta içinde",
                  aciklama:
                    "Kavrama balatası ilerlemiş aşınma veya CVT kayış erken sorun. " +
                    "Ertelendiğinde pully/volant hasarı başlar.",
                  renk: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  durum: "Her viteste kayma + yanık kavrama kokusu",
                  sure: "Aynı gün",
                  aciklama:
                    "Balata tamamen aşınmış veya kayış tırtıklaşmış. Sürüşe devam " +
                    "etmek mekatronik kartı ve pully setini kalıcı zarar verir.",
                  renk: "text-orange-700 bg-orange-50 border-orange-200",
                },
                {
                  durum: "Kayma + arıza lambası + araç hareket etmiyor",
                  sure: "Hemen durdurun",
                  aciklama:
                    "Sistem koruma moduna girmiş. Çekici çağırın — zorla sürüş iç " +
                    "dişlilere ve yağ pompasına zarar verir.",
                  renk: "text-red-700 bg-red-50 border-red-200",
                },
              ].map((s) => (
                <div key={s.durum} className={`border rounded-xl p-5 ${s.renk}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="font-saira text-sm font-medium">{s.durum}</span>
                    <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
                      {s.sure}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed">{s.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="otomatik-sanziman-kayma" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              Detay Rehberleri
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/rehber/dsg-kayma-vites-atlama",
                  tip: "DSG / DCT",
                  baslik: "DSG'de Kayma ve Vites Atlama →",
                },
                {
                  href: "/rehber/cvt-kayma",
                  tip: "CVT",
                  baslik: "CVT Kayma: Kayış ve Pully Aşınması →",
                },
                {
                  href: "/hizmetler/dsg-basinc-tupu",
                  tip: "Fiyat — DSG",
                  baslik: "DSG Basınç Tüpü Değişimi Fiyatı →",
                },
                {
                  href: "/hizmetler/dsg-kavrama-degisimi",
                  tip: "Fiyat — DSG",
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
              Kayma başladıysa zaman kritik
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Ücretsiz basınç testi ve teşhisle kaymanın kaynağını netleştiriyoruz.
              Onayınız olmadan hiçbir işlem başlamaz. Bostancı, İstanbul —
              6 ay garanti.
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
