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
  title: "Ford PowerShift Vuruntu: DPS6 Arızası Belirtileri | Eren Servis",
  description:
    "Ford Focus ve Fiesta PowerShift (DPS6) şanzımanda vuruntunun 5 belirtisi, nedenleri ve " +
    "kavrama seti değişimi fiyatı 2026. Bostancı'da ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "powershift vuruntu",
    "ford focus şanzıman vuruntu",
    "ford fiesta otomatik vuruntu",
    "dps6 vuruntu neden",
    "ford powershift arıza belirtileri",
    "powershift kavrama değişimi fiyatı",
    "ford focus otomatik şanzıman titreşim",
  ],
  openGraph: {
    title: "Ford PowerShift Vuruntu: DPS6 Arızası Belirtileri | Eren Servis",
    description:
      "Focus ve Fiesta'da DPS6 vuruntusunun nedenleri, belirtileri ve kavrama seti değişim fiyatı. " +
      "Bostancı'da ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/powershift-vuruntu",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ford PowerShift DPS6 Vuruntu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/powershift-vuruntu",
  },
};

const faqItems = TRANSMISSION_FAQS["powershift-vuruntu"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Ford PowerShift Vuruntu: DPS6 Arızasının 5 Belirtisi",
  description:
    "Ford Focus ve Fiesta DPS6 şanzımanda vuruntunun nedenleri, " +
    "belirti tablosu, adaptasyon sıfırlama ve kavrama seti maliyeti.",
  url: "https://www.erenservis.net/rehber/powershift-vuruntu",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "PowerShift Vuruntu",
    url: "https://www.erenservis.net/rehber/powershift-vuruntu",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Ford PowerShift DPS6 Vuruntu Teşhis ve Onarım",
  description:
    "Ford PowerShift DPS6 şanzıman vuruntu teşhisi, kavrama seti değişimi ve TCM onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/powershift-vuruntu",
});

const modeller = [
  { model: "Ford Focus", motor: "1.0 EcoBoost / 1.6 Ti-VCT", yillar: "2012–2018", risk: "Yüksek" },
  { model: "Ford Fiesta", motor: "1.0 EcoBoost / 1.6 Ti-VCT", yillar: "2013–2019", risk: "Yüksek" },
  { model: "Ford Kuga", motor: "1.5 EcoBoost", yillar: "2013–2016", risk: "Orta" },
  { model: "Ford C-Max", motor: "1.0 EcoBoost", yillar: "2010–2015", risk: "Orta" },
  { model: "Ford EcoSport", motor: "1.0 EcoBoost", yillar: "2013–2018", risk: "Orta" },
];

const belirtiler = [
  {
    no: "01",
    baslik: "Soğukta 1→2 geçişte titreme",
    aciklama:
      "Sabah ilk kalkışta, araç tam ısınmadan yapılan ilk vites geçişinde " +
      "kabin içine yansıyan titreme veya sarsıntı. Araç birkaç dakika çalıştıktan " +
      "sonra azalır ama tamamen geçmez. DPS6'nın en yaygın erken belirtisidir.",
    aciliyet: "orta",
  },
  {
    no: "02",
    baslik: "Düşük hızda (10–30 km/s) sallanma",
    aciklama:
      "Şehir içi trafik akışında, kavrama bağlanırken araç ritmik sallanma yapar. " +
      "Motor sesinde değişiklik olmadan sadece kabin hissedilir. " +
      "Adaptasyon kayması veya kavrama paketi aşınmasının işareti.",
    aciliyet: "orta",
  },
  {
    no: "03",
    baslik: "Ani ileri atma (lurch)",
    aciklama:
      "Duraksız hızlanırken şanzıman geçişi yaparken araç bir anlık sert ileri " +
      "atar. Sürücü gaz vermediği halde itme hissi oluşur. " +
      "Kontrol birimi kavrama tutma noktasını yanlış hesaplıyor.",
    aciliyet: "yüksek",
  },
  {
    no: "04",
    baslik: "Hızlanmada kayma hissi",
    aciklama:
      "Gaz verildiğinde devir yükselir ama araç hızlanmaz — kavrama tam tutmuyor. " +
      "DSG kavrama kaymasıyla birebir aynı his. Bu aşamada kavrama " +
      "paketi ciddi şekilde aşınmış demektir.",
    aciliyet: "yüksek",
  },
  {
    no: "05",
    baslik: "Limp mode ve hata lambası",
    aciklama:
      "Şanzıman kendini koruma moduna girer, araç 3. vitesi aşmaz. " +
      "Göstergede 'ŞANZİMAN ARIZASI' veya sarı ünlem işareti çıkar. " +
      "Bu noktada sürmeye devam etmek TCM hasarını büyütür.",
    aciliyet: "kritik",
  },
];

const aciliyetStil: Record<string, { kart: string; etiket: string; etiketMetin: string }> = {
  orta: {
    kart: "border-blue-200 bg-blue-50",
    etiket: "bg-blue-100 text-blue-700",
    etiketMetin: "Takip et",
  },
  yüksek: {
    kart: "border-amber-200 bg-amber-50",
    etiket: "bg-amber-100 text-amber-700",
    etiketMetin: "Yakın zamanda git",
  },
  kritik: {
    kart: "border-red-200 bg-red-50",
    etiket: "bg-red-100 text-red-700",
    etiketMetin: "Bu hafta git",
  },
};

export default function PowershiftVuruntuPage() {
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
              <span className="text-text-secondary">PowerShift Vuruntu</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri — Ford DPS6
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Ford PowerShift Vuruntu Neden Olur?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Focus ve Fiesta'da soğukta titreme, şehir içi sallanma veya ani
              atma yaşıyorsanız DPS6 kavrama paketi arızasının erken işareti
              olabilir. 5 belirtiyi tanıyın — doğru zamanda servis, 3× tasarruf.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">5</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Belirti tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">5</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Etkilenen model</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ön tanı</div>
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
              Ford PowerShift (DPS6) vuruntusunun ana nedeni{" "}
              <strong>kavrama paketi aşınması veya kavrama adaptasyonunun bozulmasıdır.</strong>{" "}
              Soğukta başlayan hafif titreme 2–4 ay içinde her hızda hissedilen sert
              vuruntya dönüşebilir. Adaptasyon sıfırlaması erken evrede yeterli
              olabilir; ileri evrede kavrama seti değişimi gerekir.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            DPS6, Ford'un 6 ileri ıslak çift kavramalı şanzımanıdır. DSG'nin
            kuru kavramasından farklı olarak ıslak kavrama kullanır — bu teoride
            daha uzun ömür demektir, ancak kontrol ünitesinin kavrama adaptasyonunu
            doğru yapması kritik öneme sahiptir. Yazılım veya mekanik sorun
            adaptasyonu bozduğunda vuruntu başlar.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Aşağıda 5 belirti ve her birinin ne anlama geldiğini bulabilirsiniz.
            Belirtinizi tanıyın, aciliyetini görün.
          </p>
        </section>

        {/* ── BELİRTİ KARTLARI ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            DPS6 Vuruntusunun 5 Belirtisi
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Belirtinizi bulun — aciliyet ve olası neden aşağıda.
          </p>

          <div className="space-y-4">
            {belirtiler.map((b) => {
              const stil = aciliyetStil[b.aciliyet];
              return (
                <div key={b.no} className={`border rounded-xl p-5 ${stil.kart}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-jetbrains text-xs font-bold bg-white/60 border border-current/10 px-2 py-0.5 rounded">
                        {b.no}
                      </span>
                      <h3 className="font-saira font-semibold text-sm sm:text-base text-slate-800">
                        {b.baslik}
                      </h3>
                    </div>
                    <span className={`shrink-0 font-jetbrains text-xs font-medium px-2 py-0.5 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed text-slate-700">
                    {b.aciklama}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ETKİLENEN MODELLER ─────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Hangi Ford Modellerinde Görülür?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              DPS6 şanzıman 2010–2019 yılları arasında üretilen birçok Ford
              modelinde kullanılmıştır.
            </p>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-graphite-elevated border-b border-border-hairline">
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Model</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Motor</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Yıllar</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-hairline">
                  {modeller.map((m) => (
                    <tr key={m.model + m.yillar} className="bg-graphite-base hover:bg-graphite-elevated transition-colors">
                      <td className="font-saira font-semibold text-text-primary px-4 py-3">{m.model}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.motor}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.yillar}</td>
                      <td className="px-4 py-3">
                        <span className={`font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          m.risk === "Yüksek"
                            ? "bg-red-100 text-red-700"
                            : "bg-amber-100 text-amber-700"
                        }`}>
                          {m.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── DPS6 vs DSG FARKI ──────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            DPS6 ile DSG Vuruntusunun Farkı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            İki sistem de çift kavramalı şanzıman ama vuruntunun nedeni ve
            onarım yolu birbirinden ayrışır.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                Ford DPS6 — Islak Kavrama
              </div>
              <div className="font-saira text-sm font-semibold text-text-primary mb-3">
                Focus, Fiesta, Kuga
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Islak kavrama — yağ içinde çalışır
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Düşük hız sarsıntısı daha uzun sürer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Adaptasyon sıfırlama erken evrede etkili
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Kavrama seti değişimi DQ200'den daha pahalı işçilik
                </li>
              </ul>
            </div>

            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                VW DSG DQ200 — Kuru Kavrama
              </div>
              <div className="font-saira text-sm font-semibold text-text-primary mb-3">
                Golf, Polo, A3, Leon
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Kuru kavrama — soğukta çok hassas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  1→2 geçiş vuruntusunun başlangıç noktası
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Sıvı değişiminin kavramaya etkisi yok
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Mekatronik kirliliği riski daha yüksek
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              DSG (VW) vuruntusunu araştırıyorsanız:{" "}
              <Link
                href="/rehber/dsg-vuruntu-semptomlari"
                className="text-brass underline underline-offset-2 hover:text-brass/80 transition-colors"
              >
                DSG vuruntu rehberi →
              </Link>
            </p>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="powershift-vuruntu" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              İlgili Rehberler
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/rehber/otomatik-sanziman-vuruntu"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group sm:col-span-2"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Tüm otomatik şanzıman vuruntu tipleri — DSG, PowerShift, EDC, CVT →
                </div>
              </Link>
              <Link
                href="/rehber/dsg-vuruntu-semptomlari"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG Vuruntu: DQ200 / DQ250 Rehberi →
                </div>
              </Link>
              <Link
                href="/arac/ford"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Marka Sayfası</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Ford Şanzıman Servisi — Tüm Modeller →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Ford'unuz vuruntu mu yapıyor?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              DPS6 adaptasyon sıfırlama mı, yoksa kavrama seti değişimi mi
              gerekiyor — 30 dakikada net teşhis. Ücretsiz ön tanı, sürpriz fatura yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Kavrama değişimi fiyatları →
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
