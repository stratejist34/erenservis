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
  title: "Renault EDC Vuruntu: EDC7 Arızası Belirtileri | Eren Servis Bostancı",
  description:
    "Renault Clio, Captur ve Megane EDC şanzımanda vuruntunun nedenleri, belirtileri ve " +
    "kavrama değişimi fiyatı 2026. Nissan Juke dahil. Bostancı'da ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "renault edc vuruntu",
    "renault clio şanzıman vuruntu",
    "renault captur otomatik vuruntu",
    "edc7 arıza belirtileri",
    "renault edc kavrama değişimi",
    "nissan juke şanzıman vuruntu",
    "renault otomatik şanzıman titreşim",
  ],
  openGraph: {
    title: "Renault EDC Vuruntu: Arıza Belirtileri ve Çözüm | Eren Servis",
    description:
      "Clio, Captur ve Megane'de EDC şanzıman vuruntusunun nedenleri, belirtileri ve " +
      "kavrama değişim fiyatı. Bostancı'da ücretsiz ön tanı.",
    url: "https://erenservis.net/rehber/edc-vuruntu",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Renault EDC Şanzıman Vuruntu",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/rehber/edc-vuruntu",
  },
};

const faqItems = TRANSMISSION_FAQS["edc-vuruntu"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Renault EDC Vuruntu: EDC7 Arızasının 5 Belirtisi",
  description:
    "Renault Clio, Captur, Megane ve Nissan Juke'ta EDC şanzıman vuruntusunun " +
    "nedenleri, belirti tablosu ve maliyet rehberi.",
  url: "https://erenservis.net/rehber/edc-vuruntu",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Rehber", url: "https://erenservis.net/rehber" },
  { name: "EDC Vuruntu", url: "https://erenservis.net/rehber/edc-vuruntu" },
]);

const serviceSchema = buildServiceSchema({
  name: "Renault EDC Vuruntu Teşhis ve Onarım",
  description:
    "Renault EDC şanzıman vuruntu teşhisi, kavrama paketi değişimi ve adaptasyon kalibrasyonu. Bostancı, İstanbul.",
  url: "https://erenservis.net/rehber/edc-vuruntu",
});

const modeller = [
  { model: "Renault Clio IV", motor: "0.9 TCe / 1.2 TCe", yillar: "2012–2019", risk: "Yüksek" },
  { model: "Renault Captur", motor: "1.2 TCe", yillar: "2013–2019", risk: "Yüksek" },
  { model: "Renault Megane IV", motor: "1.2 TCe", yillar: "2016–2020", risk: "Orta" },
  { model: "Renault Kadjar", motor: "1.2 TCe", yillar: "2015–2019", risk: "Orta" },
  { model: "Nissan Juke", motor: "1.6 DIG-T", yillar: "2010–2019", risk: "Orta" },
  { model: "Nissan Micra V", motor: "1.0 IG-T", yillar: "2017+", risk: "Düşük" },
];

const belirtiler = [
  {
    no: "01",
    baslik: "Frenden çıkarken takılma ve vuruntu",
    aciklama:
      "Trafik ışığında tam durup yeniden kalkarken araç bir an bekler, " +
      "ardından kısa bir sarsıntıyla hareket eder. Yavaş trafik akışında " +
      "defalarca tekrarlanır. EDC'nin en karakteristik erken belirtisidir.",
    aciliyet: "orta",
  },
  {
    no: "02",
    baslik: "Soğukta 1→2 geçişte titreme",
    aciklama:
      "Sabah ilk kalkışta, özellikle kış aylarında 1. vitesten 2. vitese geçerken " +
      "kabin içine yansıyan titreme. Araç ısındıktan sonra azalır. " +
      "Kavrama adaptasyonunun soğuk toleransını kaybettiğinin işareti.",
    aciliyet: "orta",
  },
  {
    no: "03",
    baslik: "Yavaş hızda gergin, sert geçiş",
    aciklama:
      "20–40 km/s saatte vites değişimleri gerekenden daha sert ve gecikmeli " +
      "hissedilir. Araç hızlanmayı kesiyor gibi yapıp ardından devam eder. " +
      "Solenoid valf kirliliği veya yağ basınç düşüklüğünü işaret eder.",
    aciliyet: "yüksek",
  },
  {
    no: "04",
    baslik: "Geri vitese alırken gecikme ve sarsıntı",
    aciklama:
      "D'den R'ye geçince 2–3 saniye bekleme ve ardından sert bağlanma. " +
      "Park manevrasını güçleştirir. Kavrama adaptasyonunun geribesleme " +
      "döngüsündeki hata nedeniyle oluşur.",
    aciliyet: "yüksek",
  },
  {
    no: "05",
    baslik: "Sürekli vuruntu ve hata lambası",
    aciklama:
      "Vuruntu artık her vites değişiminde hissediliyor, göstergede ünlem veya " +
      "şanzıman simgesi çıkıyor. Bu noktada araç limp mode'a girebilir. " +
      "Kavrama paketi ve solenoid sistem birlikte etkilenmiş demektir.",
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

export default function EdcVuruntuPage() {
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
              <span className="text-text-secondary">EDC Vuruntu</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri — Renault EDC
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Renault EDC Şanzımanda Vuruntu Neden Olur?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Clio, Captur veya Megane'nizde frenden çıkarken takılma, soğukta
              titreme veya sert geçiş yaşıyorsanız EDC kavrama adaptasyonu
              bozulmuş olabilir. 5 belirtiyi tanıyın — doğru evrede müdahale
              büyük masrafı engeller.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">5</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Belirti tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">6</div>
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
              Renault EDC vuruntusunun ana nedeni{" "}
              <strong>kavrama adaptasyonunun kayması veya solenoid valf kirliliğidir.</strong>{" "}
              Yavaş trafik akışında ve frenden çıkarken belirginleşen titreme, erken
              evrede adaptasyon sıfırlaması ile geçebilir. İleri evrede kavrama paketi
              değişimi kaçınılmaz olur. EDC ıslak kavrama kullandığı için DSG DQ200
              gibi soğukta ani atlamaz — titreme genellikle daha uzun süreli ve düşük
              yoğunlukludur.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            EDC (Efficient Dual Clutch), Renault'nun ıslak çift kavramalı şanzımanıdır.
            Kontrol birimi kavrama tutma noktasını sürekli öğrenerek çalışır — bu
            adaptasyon bozulduğunda geçişler kaba ve vuruntulu hale gelir.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Aşağıda 5 belirti ve bu belirtilerin ne anlama geldiğini bulabilirsiniz.
          </p>
        </section>

        {/* ── BELİRTİ KARTLARI ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            EDC Şanzıman Vuruntusunun 5 Belirtisi
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
              Hangi Renault ve Nissan Modellerinde Görülür?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              EDC şanzıman 2012'den itibaren birçok Renault ve Nissan
              modelinde kullanılmaktadır.
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
                    <tr key={m.model} className="bg-graphite-base hover:bg-graphite-elevated transition-colors">
                      <td className="font-saira font-semibold text-text-primary px-4 py-3">{m.model}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.motor}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.yillar}</td>
                      <td className="px-4 py-3">
                        <span className={`font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          m.risk === "Yüksek"
                            ? "bg-red-100 text-red-700"
                            : m.risk === "Orta"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-blue-100 text-blue-700"
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

        {/* ── EDC vs DSG FARKI ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            EDC ile DSG ve PowerShift Vuruntusunun Farkı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Üç sistem de çift kavramalı — ama vuruntunun özü ve yoğunluğu ayrışır.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                kod: "Renault EDC",
                ozellik: "Islak kavrama",
                vuruntu: "Uzun süreli, düşük yoğunluklu",
                tetik: "Frenden çıkış, yavaş trafik",
                renk: "text-amber-600",
              },
              {
                kod: "Ford DPS6",
                ozellik: "Islak kavrama",
                vuruntu: "Ani, yüksek yoğunluklu",
                tetik: "Soğuk start, 1→2 geçiş",
                renk: "text-red-600",
              },
              {
                kod: "VW DSG DQ200",
                ozellik: "Kuru kavrama",
                vuruntu: "Kısa, ani darbe",
                tetik: "Soğuk, 1→2 geçiş",
                renk: "text-red-600",
              },
            ].map((tip) => (
              <div key={tip.kod} className="bg-graphite-surface border border-border-hairline rounded-xl p-4">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                  {tip.kod}
                </div>
                <div className={`font-saira text-xs font-semibold mb-3 ${tip.renk}`}>
                  {tip.ozellik}
                </div>
                <ul className="font-saira text-xs text-text-secondary space-y-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brass shrink-0">›</span>
                    {tip.vuruntu}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brass shrink-0">›</span>
                    Tetikleyen: {tip.tetik}
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              DSG vuruntusunu araştırıyorsanız:{" "}
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
            <TransmissionFaq slug="edc-vuruntu" />
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
                href="/rehber/powershift-vuruntu"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Ford PowerShift Vuruntu Rehberi →
                </div>
              </Link>
              <Link
                href="/arac/renault"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Marka Sayfası</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Renault Şanzıman Servisi →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Renault'nuz vuruntu mu yapıyor?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Adaptasyon sıfırlama yeterli mi, yoksa kavrama paketi mi değişmeli —
              30 dakikada net teşhis. Ücretsiz ön tanı, sürpriz fatura yok.
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
