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
  title: "ZF ve Aisin Şanzımanda Gecikme: Mercedes, BMW, Peugeot Rehberi | Eren Servis",
  description:
    "ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC şanzımanlarda vites gecikmesinin " +
    "nedenleri, çözümleri ve adaptasyon süreci. Bostancı, İstanbul.",
  keywords: [
    "zf 8hp gecikme",
    "mercedes 7g tronic gecikme",
    "mercedes 9g tronic yavaş",
    "aisin tf80 gecikme",
    "bmw zf şanzıman gecikme",
    "valve body solenoid",
    "peugeot aisin gecikme",
  ],
  openGraph: {
    title: "ZF ve Aisin Şanzımanda Gecikme | Eren Servis",
    description:
      "Mercedes, BMW, Peugeot, Volvo'da tork konvertörlü şanzıman gecikmesi. Bostancı.",
    url: "https://www.erenservis.net/rehber/zf-aisin-gecikme",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZF ve Aisin Şanzıman Gecikme",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/zf-aisin-gecikme",
  },
};

const faqItems = TRANSMISSION_FAQS["zf-aisin-gecikme"] ?? [];

const articleSchema = buildArticleSchema({
  title: "ZF ve Aisin Şanzımanda Gecikme: Mercedes, BMW, Peugeot Rehberi",
  description:
    "ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC şanzımanlarda vites gecikmesi " +
    "nedenleri, valve body revizyonu ve adaptasyon süreci.",
  url: "https://www.erenservis.net/rehber/zf-aisin-gecikme",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "ZF ve Aisin Gecikme",
    url: "https://www.erenservis.net/rehber/zf-aisin-gecikme",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "ZF ve Aisin Şanzıman Valve Body Revizyonu",
  description:
    "ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC valve body, solenoid ve adaptasyon servisi. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/zf-aisin-gecikme",
});

const aileler = [
  {
    kod: "ZF 8HP",
    model: "8 ileri tork konvertörlü",
    araclar: "BMW 3-5-7 serisi, X3/X5, Range Rover, Jaguar",
    gecikme:
      "Valve body mekatronik solenoid tıkanması ana nedendir. BMW ZF 8HP'de " +
      "100.000 km üzeri yağ + mekatronik servisi şart — BMW 'lifetime oil' " +
      "yaklaşımı gerçekte uygulanabilir değil.",
    cozum: "Yağ + filtre + valve body revizyonu + ISTA adaptasyon",
    renk: "border-red-200 bg-red-50",
  },
  {
    kod: "Mercedes 7G-Tronic / 9G-Tronic",
    model: "7 veya 9 ileri, tork konvertörlü",
    araclar: "C, E, S, GLC, GLE, ML, GL sınıfı",
    gecikme:
      "Mercedes spesifik ATF (MB 236.15 veya 236.17) kullanımı zorunlu. " +
      "Yanlış yağla gecikme hızlanır. Conductor plate (mekatronik kart) " +
      "sorunları 80.000 km üzeri sık görülür.",
    cozum: "MB spec yağ değişimi + conductor plate kontrol + Xentry adaptasyon",
    renk: "border-amber-200 bg-amber-50",
  },
  {
    kod: "Aisin TF-80SC",
    model: "6 ileri tork konvertörlü",
    araclar: "Peugeot 3008/5008, Citroen C5, Volvo V40/XC60, Ford Mondeo",
    gecikme:
      "Peugeot-Citroen araçlarda AL4/AT6 olarak bilinir. Solenoid valfler " +
      "bu ailede en sık arızalanan bileşen; 120.000 km üzeri valve body " +
      "revizyonu standart hale gelir.",
    cozum: "Yağ + filtre değişimi + solenoid temizliği + adaptasyon",
    renk: "border-orange-200 bg-orange-50",
  },
];

const adaptasyonAdimlari = [
  {
    no: "01",
    baslik: "Yağ ve filtre değişimi",
    aciklama:
      "Doğru spesifikasyon yağ (ZF Lifeguard 8, MB 236.15 vs.) + filtre + " +
      "conta seti ile yenileme. Yanlış yağ gecikmeyi derinleştirir.",
  },
  {
    no: "02",
    baslik: "Valve body kontrol veya revizyon",
    aciklama:
      "Gerekirse valve body sökülür, solenoid valfler sökülerek ultrasonik " +
      "temizliğe tabi tutulur. Hasarlı solenoid yenileriyle değiştirilir.",
  },
  {
    no: "03",
    baslik: "Marka diyagnostik cihazıyla sıfırlama",
    aciklama:
      "BMW için ISTA, Mercedes için Xentry, PSA için Diagbox — genel OBD " +
      "cihazları yeterli değildir. Marka özel yazılım şanzıman adaptasyon " +
      "değerlerini sıfırlar.",
  },
  {
    no: "04",
    baslik: "Test sürüşü + öğrenme kalibrasyonu",
    aciklama:
      "50-80 km test sürüşü yapılır. ECU sürüş stilinize göre kavrama " +
      "bite point ve basınç değerlerini yeniden öğrenir. Bu süreç olmadan " +
      "revizyon yarım kalır.",
  },
];

export default function ZFAisinGecikmePage() {
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
              <Link href="/rehber/otomatik-sanziman-gecikme" className="hover:text-text-primary transition-colors">
                Gecikme
              </Link>
              <span>/</span>
              <span className="text-text-secondary">ZF / Aisin</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              ZF / Aisin Detay
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              ZF ve Aisin Şanzımanda Gecikme: Mercedes, BMW, Peugeot Rehberi
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Tork konvertörlü şanzımanlarda gecikme, mekatronik valve body
              solenoid ve yağ kalitesinden çıkar. ZF 8HP, Mercedes 7G/9G-Tronic
              ve Aisin TF80-SC — her biri farklı servis yaklaşımı ister.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">3</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Şanzıman ailesi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Adım servis</div>
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
              ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC şanzımanlarda
              gecikme <strong>valve body solenoid tıkanması + yağ yaşlanmasından</strong>{" "}
              çıkar. Çözüm: marka spesifik yağ + filtre değişimi + valve body
              revizyonu + marka diyagnostik adaptasyon — yarım yapılan servis
              sorunu çözmez.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Tork konvertörlü otomatik şanzımanlar (ZF, Mercedes, Aisin) aile
            içinde benzer çalışır ama servis prosedürleri farklılaşır. Özellikle
            yağ spesifikasyonu ve diyagnostik cihaz seçimi kritiktir.
          </p>
        </section>

        {/* ── 3 AİLE ─────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              3 Şanzıman Ailesine Göre Gecikme Profili
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Aracınızın hangi şanzıman ailesine ait olduğunu bulun.
            </p>

            <div className="space-y-4">
              {aileler.map((a) => (
                <div key={a.kod} className={`border rounded-xl p-5 ${a.renk}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-jetbrains text-xs font-bold uppercase tracking-widest text-graphite-base mb-1">
                        {a.kod}
                      </div>
                      <div className="font-saira text-sm font-semibold text-graphite-base">
                        {a.model}
                      </div>
                    </div>
                  </div>
                  <div className="font-saira text-xs text-graphite-base mb-3">
                    <strong>Araçlar:</strong> {a.araclar}
                  </div>
                  <p className="font-saira text-sm text-graphite-base leading-relaxed mb-3">
                    {a.gecikme}
                  </p>
                  <div className="font-jetbrains text-[11px] text-graphite-base">
                    <strong>Çözüm yaklaşımı:</strong> {a.cozum}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVİS ADIMLARI ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Servis Süreci: 4 Adım
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Gecikme probleminin tam çözümü bu 4 adımı gerektirir — birini
            atlamak sorunu yarım bırakır.
          </p>

          <div className="space-y-5">
            {adaptasyonAdimlari.map((a) => (
              <div key={a.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass shrink-0 w-6 mt-0.5">
                  {a.no}
                </div>
                <div>
                  <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                    {a.baslik}
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">
                    {a.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── YAĞ SPESİFİKASYONU UYARI ───────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Yağ Spesifikasyonu Kritik
            </h2>

            <div className="space-y-3">
              {[
                { aile: "ZF 8HP", yag: "ZF Lifeguard 8 (Shell L12108)" },
                { aile: "Mercedes 7G-Tronic", yag: "MB-Approval 236.14" },
                { aile: "Mercedes 9G-Tronic", yag: "MB-Approval 236.15 / 236.17" },
                { aile: "Aisin TF-80SC (Peugeot)", yag: "Total Fluide ATX / JWS 3309" },
                { aile: "Aisin TF-80SC (Volvo)", yag: "Volvo ATF JWS 3309" },
              ].map((y) => (
                <div key={y.aile} className="flex items-center justify-between gap-4 border border-border-hairline bg-graphite-base rounded-lg p-4">
                  <div className="font-saira text-sm font-semibold text-text-primary">
                    {y.aile}
                  </div>
                  <div className="font-jetbrains text-xs text-brass">
                    {y.yag}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-red-200 bg-red-50 rounded-xl p-5">
              <p className="font-saira text-sm text-red-900 leading-relaxed">
                <strong>Uyarı:</strong> "Dex-VI uyumlu" gibi genel yağlar
                tork konvertörlü sistemlerde uygun değildir. Yanlış yağ
                kullanımı gecikmeyi iki katına çıkarır ve solenoidleri hasara
                uğratır.
              </p>
            </div>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="zf-aisin-gecikme" />
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
                href="/rehber/otomatik-sanziman-gecikme"
                className="sm:col-span-2 block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Gecikme: Tüm Tipler →
                </div>
              </a>
              {[
                {
                  href: "/arac/bmw",
                  tip: "Marka",
                  baslik: "BMW Şanzıman Tamiri →",
                },
                {
                  href: "/arac/mercedes",
                  tip: "Marka",
                  baslik: "Mercedes Şanzıman Tamiri →",
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
              ZF / Aisin gecikme için doğru adres
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Marka spesifik yağ, valve body revizyonu ve diyagnostik adaptasyon —
              yarım servis değil, tam çözüm. 6 ay garanti, Bostancı, İstanbul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Tüm hizmetler →
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
