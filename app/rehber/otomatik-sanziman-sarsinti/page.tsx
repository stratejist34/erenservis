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
  title: "Otomatik Şanzımanda Sarsıntı: Rölantide Titreşimin 4 Kaynağı | Eren Otomatik Şanzıman Servisi Bostancı",
  description:
    "DSG, CVT, ZF ve PowerShift şanzımanlarda sarsıntı neden olur? " +
    "Çift kütleli volant, kavrama balatası, tork konvertör lockup ve solenoid. " +
    "Bostancı'da ücretsiz titreşim teşhisi.",
  keywords: [
    "otomatik şanzıman titreşim",
    "rölantide şanzıman sarsıntı",
    "araç d vitesinde titriyor",
    "dsg titreşim nedeni",
    "otomatik vites sarsıntı yapıyor",
    "klima açınca sarsıntı",
    "volant titreşimi",
  ],
  openGraph: {
    title: "Otomatik Şanzımanda Sarsıntı: 4 Kaynak ve Çözümleri | Eren Otomatik Şanzıman Servisi",
    description:
      "Rölantide sarsıntı, D vitesinde titreşim ve klima ile artan sarsıntı — " +
      "nedenleri ve çözümleri. Bostancı'da ücretsiz teşhis.",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-sarsinti/",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Otomatik Şanzıman Servisi"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzımanda Sarsıntı ve Titreşim",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/otomatik-sanziman-sarsinti/",
  },
};

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-sarsinti"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzımanda Sarsıntı: Rölantide Titreşimin 4 Kaynağı",
  description:
    "DSG, CVT, ZF/Aisin ve PowerShift şanzımanlarda sarsıntı nedenleri, ayırt edici " +
    "belirtiler ve aciliyet değerlendirmesi.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-sarsinti/",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  {
    name: "Otomatik Şanzımanda Sarsıntı",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-sarsinti/",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Otomatik Şanzıman Sarsıntı ve Titreşim Teşhisi",
  description:
    "Volant, kavrama paketi ve tork konvertör kaynaklı sarsıntıların teşhisi ve onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-sarsinti/",
});

const tipler = [
  {
    kod: "DSG / S-Tronic",
    markalar: "VW, Audi, Skoda, Seat, Cupra",
    kaynak: "Çift kütleli volant + kavrama paketi",
    anlam:
      "DSG'de sarsıntının en yaygın kaynağı çift kütleli volant (DMF) yay yorgunluğudur. " +
      "Rölantide ve klima açıldığında belirginleşir — kavrama balatası aşınması eşlik edebilir.",
    href: "/rehber/dsg-kavrama-ariza-belirtileri",
    linkMetin: "DSG kavrama/volant belirtileri →",
    renk: "border-red-200 bg-red-50 text-red-700",
    badge: "En yaygın",
  },
  {
    kod: "Çift Kütleli Volant (DMF)",
    markalar: "Tüm DSG ve modern manuel araçlar",
    kaynak: "Volant iç yay mekanizması",
    anlam:
      "Volantın iç yayları yorulduğunda motor titreşimi sönümlenmez ve şanzımana direkt " +
      "iletilir. 150.000 km üzeri araçlarda yüksek risk — ayrı detay rehberinde inceledik.",
    href: "/rehber/volant-titresim",
    linkMetin: "Volant titreşim detay rehberi →",
    renk: "border-amber-200 bg-amber-50 text-amber-700",
    badge: "Kritik",
  },
];

const kaynaklar = [
  {
    no: "01",
    baslik: "Çift kütleli volant (DMF) yay yorgunluğu",
    aciklama:
      "En yaygın neden. Volantın iç yayları zamanla yorulur, motor tork " +
      "dalgalanmasını sönümleyemez. Rölantide sarsıntı, klima açılınca artan " +
      "titreşim ve metalik takırtı belirtileridir.",
  },
  {
    no: "02",
    baslik: "Kavrama balatası aşınması / ıslanması",
    aciklama:
      "Özellikle DSG DQ250 ve DQ381 ıslak kavramalarda balata aşınınca tork " +
      "transferi düzensizleşir — kalkışta hafif sarsıntı, rampada titreşim artar. " +
      "Kuru kavramada (DQ200) balata tamamen biter, sert vuruntu başlar.",
  },
  {
    no: "03",
    baslik: "Tork konvertör lockup kavraması aşınması",
    aciklama:
      "ZF 8HP, Aisin TF80-SC gibi tork konvertörlü şanzımanlarda 60-80 km/h " +
      "sabit hızda sürekli sarsıntı olur. Lockup kavraması kısmi aşınma yaşarsa " +
      'motor devir ile şanzıman çıkış devri arasında "shudder" (hafif titreşim) hissedilir.',
  },
  {
    no: "04",
    baslik: "Mekatronik solenoid / basınç dalgalanması",
    aciklama:
      "Solenoid valflerdeki tıkanıklık veya ECU adaptasyon bozukluğu vites " +
      "geçişlerinde basınç dalgalanması yaratır. Bu durum kalkışta ve yavaş " +
      "viteslerde düzensiz sarsıntı olarak hissedilir — yağ değişimi ve " +
      "adaptasyonla çözülebilir.",
  },
];

export default function OtomatikSanzımanSarsıntıPage() {
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
              <span className="text-text-secondary">Otomatik Şanzımanda Sarsıntı</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Genel Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Otomatik Şanzımanda Sarsıntı: Rölantide Titreşimin 4 Kaynağı
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Rölantide D vitesinde titreyen araç, klima açılınca artan sarsıntı,
              60-80 km/h'de sabit titreşim... Hepsi farklı bir bileşeni işaret eder.
              Bu rehber hangi titreşimin ne anlama geldiğini net olarak açıklar.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Olası kaynak</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">150k</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">km volant eşiği</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Titreşim teşhisi</div>
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
              Otomatik şanzımanda sarsıntı{" "}
              <strong>4 bileşenden birinde başlar</strong>: çift kütleli volant (en yaygın),
              kavrama balatası, tork konvertör lockup kavraması veya mekatronik
              solenoid. Ne zaman hissedildiği (rölantide, hızda, vites geçişinde)
              kaynağı doğrudan gösterir.
            </p>
          </div>

          <h2 className="font-saira text-xl font-semibold text-text-primary mb-3">
            Sarsıntı mı, Vuruntu mu? Farkı Anlayın
          </h2>
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Bu iki terim sıklıkla karıştırılır — ama nedenleri farklıdır.
            Solenoid basınç dalgalanması kaynaklı sarsıntılarda çözüm
            genellikle{" "}
            <Link
              href="/hizmetler/dsg-mekatronik-kart/"
              className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
            >
              DSG mekatronik kart revizyonu
            </Link>{" "}
            ile tamamlanır.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="border border-border-hairline rounded-xl bg-graphite-surface p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                Sarsıntı
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Sürekli veya rölantide süren <strong>dalgalı titreşim</strong>.
                Sabit hızda ve dururken belirginleşir. Volant, tork konvertör lockup
                gibi dönen parça kaynaklıdır.
              </p>
            </div>
            <div className="border border-border-hairline rounded-xl bg-graphite-surface p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                Vuruntu
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Vites geçişi veya kalkışta hissedilen <strong>ani tek bir darbe</strong>.
                Kavrama balatası, mekatronik adaptasyon veya diferansiyel kaynaklıdır.
              </p>
            </div>
          </div>

          <p className="font-saira text-text-secondary text-sm leading-relaxed">
            Vuruntu için detaylı rehber:{" "}
            <Link href="/rehber/otomatik-sanziman-vuruntu" className="text-brass hover:text-brass/80 underline underline-offset-2">
              Otomatik şanzımanda vuruntu rehberi →
            </Link>
          </p>
        </section>

        {/* ── TİP KARŞILAŞTIRMA ──────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Şanzıman Tipine Göre Sarsıntı Kaynağı
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

            {/* Tork konvertör / CVT / PowerShift notu */}
            <div className="mt-4 border border-border-hairline rounded-xl bg-graphite-base p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                ZF / Aisin / CVT / PowerShift
              </div>
              <div className="font-saira text-sm text-text-secondary mb-2">
                Mercedes, BMW, Toyota, Honda, Ford
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                ZF 8HP ve Aisin TF80-SC'de sarsıntı{" "}
                <strong>tork konvertör lockup kavraması aşınmasından</strong>{" "}
                çıkar — 60-80 km/h sabit hızda "shudder" titreşim belirgindir.
                CVT'de kayış titreşimi (özellikle düşük hızda) ayrı bir tipolojidir.
                Ford PowerShift'te kuru kavrama sertliği kalkışta sarsıntı yaratır.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 KAYNAK ───────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Sarsıntının 4 Ortak Kaynağı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Dört farklı bileşen, dört farklı titreşim profili yaratır.
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
              Sarsıntı Ne Zaman Acil?
            </h2>

            <div className="space-y-4">
              {[
                {
                  durum: "Rölantide hafif titreme, klima kapalıyken yok",
                  sure: "Bu ay içinde",
                  aciklama:
                    "Volant erken evre yorgunluğu. Acil değil ama artış takip edilmeli. " +
                    "Sürüş güvenliğini tehlikeye atmaz.",
                  renk: "text-green-700 bg-green-50 border-green-200",
                },
                {
                  durum: "Klima açılınca belirgin sarsıntı, metalik takırtı",
                  sure: "2-4 hafta içinde",
                  aciklama:
                    "Volant yay mekanizması ilerlemiş aşınma. Kavrama balatasına zarar " +
                    "vermeden tek başına volant değişimi hâlâ mümkün.",
                  renk: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  durum: "60-80 km/h'de sürekli titreşim, gaz kalktığında geçiyor",
                  sure: "Bu hafta içinde",
                  aciklama:
                    "Tork konvertör lockup kavraması aşınması. Ertelendiğinde tork konvertör " +
                    "tamamen revize gerektirebilir — solenoid temizliği hâlâ çözüm olabilir.",
                  renk: "text-orange-700 bg-orange-50 border-orange-200",
                },
                {
                  durum: "Şiddetli sarsıntı + kalkışta vuruntu + arıza lambası",
                  sure: "Hemen servise",
                  aciklama:
                    "Kavrama balatası bitmiş veya volant kritik hasarda. Sürüşe devam " +
                    "etmek mekatronik kart ve iç dişlilere zarar verir.",
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
            <TransmissionFaq slug="otomatik-sanziman-sarsinti" />
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
                  href: "/rehber/dsg-kavrama-ariza-belirtileri",
                  tip: "DSG / DCT",
                  baslik: "DSG Kavrama ve Balata Arıza Belirtileri →",
                },
                {
                  href: "/rehber/volant-titresim",
                  tip: "Çift Kütleli Volant",
                  baslik: "Volant Titreşimi: DSG'de Sarsıntının Ana Kaynağı →",
                },
                {
                  href: "/rehber/otomatik-sanziman-vuruntu",
                  tip: "İlgili Rehber",
                  baslik: "Vuruntu: Sarsıntıdan Farkı ve Kaynakları →",
                },
                {
                  href: "/hizmetler/dsg-volant-kavrama-paketi",
                  tip: "Fiyat",
                  baslik: "DSG Volant + Kavrama Paketi Fiyatı →",
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
              Sarsıntı kaynağını net öğrenin
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Rölantide titreşim mi, hızda sarsıntı mı? Ücretsiz teşhisle
              kaynağı söyleriz — onayınız olmadan hiçbir işlem başlamaz.
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
                href="/hizmetler/dsg-volant-kavrama-paketi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Volant + kavrama fiyatları →
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
