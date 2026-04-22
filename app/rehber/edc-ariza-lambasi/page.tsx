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
  title: "Renault EDC Arıza Lambası: Sarı Dişli Ne Anlama Gelir? | Eren Servis",
  description:
    "Renault EDC7 ve EDC8 şanzımanda sarı dişli arıza lambası neden yanar? " +
    "Clio, Fluence, Megane, Captur, Nissan Juke sahipleri için rehber. Bostancı'da ücretsiz teşhis.",
  keywords: [
    "renault edc arıza lambası",
    "renault sarı dişli ışığı",
    "edc şanzıman arıza lambası",
    "clio otomatik arıza lambası",
    "renault fluence şanzıman uyarı",
    "edc7 hata kodu",
    "nissan juke arıza lambası şanzıman",
  ],
  openGraph: {
    title: "Renault EDC Arıza Lambası: Sarı Dişli Ne Anlama Gelir? | Eren Servis",
    description:
      "EDC7 / EDC8 şanzımanda sarı dişli ışığının anlamı, nedeni ve yapılması gerekenler. " +
      "Bostancı'da ücretsiz hata kodu okuma.",
    url: "https://www.erenservis.net/rehber/edc-ariza-lambasi",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Renault EDC Arıza Lambası",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/edc-ariza-lambasi",
  },
};

const faqItems = TRANSMISSION_FAQS["edc-ariza-lambasi"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Renault EDC Arıza Lambası: Sarı Dişli Ne Anlama Gelir?",
  description:
    "EDC7 ve EDC8 şanzımanda sarı dişli ışığının nedenleri, aciliyet değerlendirmesi " +
    "ve Renault / Nissan modellerine göre farklılıklar.",
  url: "https://www.erenservis.net/rehber/edc-ariza-lambasi",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "Renault EDC Arıza Lambası",
    url: "https://www.erenservis.net/rehber/edc-ariza-lambasi",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Renault EDC Arıza Lambası Teşhis ve Onarım",
  description:
    "EDC7 / EDC8 şanzımanda arıza lambası teşhisi, hata kodu okuma ve onarım. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/edc-ariza-lambasi",
});

const modeller = [
  { model: "Renault Clio IV", motor: "1.5 dCi / 0.9 TCe", edc: "EDC7", risk: "Yüksek" },
  { model: "Renault Fluence", motor: "1.5 dCi", edc: "EDC7", risk: "Yüksek" },
  { model: "Renault Megane IV", motor: "1.5 dCi / 1.3 TCe", edc: "EDC7 / EDC8", risk: "Orta" },
  { model: "Renault Captur I", motor: "0.9 TCe / 1.5 dCi", edc: "EDC7", risk: "Orta" },
  { model: "Nissan Juke", motor: "1.5 dCi / 1.6", edc: "EDC7", risk: "Orta" },
  { model: "Renault Kadjar", motor: "1.5 dCi", edc: "EDC8", risk: "Düşük" },
];

const nedenler = [
  {
    no: "01",
    baslik: "Solenoid valf tıkanıklığı",
    aciklama:
      "EDC'nin en yaygın arıza nedeni. Kirli şanzıman yağı solenoid valfin " +
      "içini tıkar. Lamba yanar, limp mode başlar. Valf temizliği veya " +
      "değişimiyle çözülür.",
  },
  {
    no: "02",
    baslik: "Kavrama ıslanması / aşınması",
    aciklama:
      "EDC ıslak kavrama sistemi kullanır. Kavrama balatası aşındığında " +
      "kontrol ünitesi sapma tespit eder ve hata kodu kaydeder. " +
      "Lambayla birlikte gecikmeli vites geçişi veya vuruntu eşlik edebilir.",
  },
  {
    no: "03",
    baslik: "Basınç sensörü hatası",
    aciklama:
      "Hidrolik basınç sensörü yanlış okuma yapınca kontrol ünitesi " +
      "önlem olarak hata kodu yazar. Bazı durumlarda sensör değişimi yeterlidir.",
  },
  {
    no: "04",
    baslik: "Adaptasyon kayması",
    aciklama:
      "Uzun süre bakımsız kalan EDC'lerde kavrama adaptasyon değerleri " +
      "bozulur. Yazılım sıfırlama ve yeniden öğrenme işlemiyle düzelir.",
  },
];

export default function EdcArızaLambasıPage() {
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
              <Link href="/rehber/otomatik-sanziman-ariza-lambasi" className="hover:text-text-primary transition-colors">
                Şanzıman Arıza Lambası
              </Link>
              <span>/</span>
              <span className="text-text-secondary">EDC</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Renault EDC / DCT
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Renault EDC Arıza Lambası: Sarı Dişli Ne Anlama Gelir?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Dashboard'da sarı dişli veya şanzıman simgesi yanarsa EDC
              kontrol ünitesi bir hata kodu kaydetmiştir. Hangi nedenden
              geldiğine ve ne kadar acil olduğuna dair Clio, Fluence,
              Megane ve Nissan Juke sahipleri için rehber.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Başlıca neden</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">6</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Etkilenen model</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hata kodu okuma</div>
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
              EDC'deki sarı dişli ışığı{" "}
              <strong>solenoid valf tıkanıklığı, kavrama aşınması veya
              adaptasyon kaymasından</strong> birinin işaretidir. Lamba
              sürekli yanıyorsa 48 saat içinde servise gidin; yanıp sönüyorsa
              veya araç limp moddaysa aynı gün gelin.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Renault EDC (Efficiency Dual Clutch), ıslak kavrama sistemiyle
            çalışan bir çift kavramalı otomatik şanzımandır. DSG'ye benzer
            ama özellikle EDC7 versiyonunda solenoid valf hassasiyeti
            yüksektir — yağ değişimi gecikirse tıkanıklık riski artar.
          </p>
        </section>

        {/* ── ETKİLENEN MODELLER ─────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Hangi Renault ve Nissan Modellerinde Görülür?
            </h2>

            <div className="overflow-x-auto rounded-xl border border-border-hairline">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-graphite-elevated border-b border-border-hairline">
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">Model</th>
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">Motor</th>
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">EDC</th>
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">Risk</th>
                  </tr>
                </thead>
                <tbody className="bg-graphite-base divide-y divide-border-hairline">
                  {modeller.map((m) => (
                    <tr key={m.model}>
                      <td className="font-saira text-text-primary px-4 py-3">{m.model}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.motor}</td>
                      <td className="font-jetbrains text-xs text-iron-light px-4 py-3">{m.edc}</td>
                      <td className="px-4 py-3">
                        <span className={`font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          m.risk === "Yüksek"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : m.risk === "Orta"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
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

        {/* ── NEDENLER ───────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            EDC Arıza Lambasının 4 Başlıca Nedeni
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Her nedende farklı bir müdahale gerekir — teşhissiz işlem yapmayın.
          </p>

          <div className="space-y-5">
            {nedenler.map((n) => (
              <div key={n.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass/60 shrink-0 w-6 mt-0.5">
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

        {/* ── EDC vs DSG ─────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              EDC ile DSG Arıza Lambası Farkı
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  tip: "Renault EDC",
                  lamba: "Sarı dişli simgesi",
                  sistem: "Islak kavrama — yağ içinde çalışır",
                  hata: "Solenoid valf, basınç sensörü, adaptasyon",
                  teşhis: "Renault/Nissan uyumlu teşhis cihazı",
                },
                {
                  tip: "DSG / S-Tronic",
                  lamba: "P harfi veya anahtar simgesi",
                  sistem: "Kuru (DQ200) veya ıslak (DQ250) kavrama",
                  hata: "Mekatronik kart, solenoid, kavrama",
                  teşhis: "VAG teşhis cihazı (VCDS / OBD)",
                },
              ].map((k) => (
                <div key={k.tip} className="border border-border-hairline rounded-xl bg-graphite-base p-5">
                  <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-brass mb-4">
                    {k.tip}
                  </div>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Lamba</dt>
                      <dd className="font-saira text-text-primary">{k.lamba}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Sistem</dt>
                      <dd className="font-saira text-text-secondary">{k.sistem}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Yaygın hata</dt>
                      <dd className="font-saira text-text-secondary">{k.hata}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Teşhis</dt>
                      <dd className="font-saira text-text-secondary">{k.teşhis}</dd>
                    </div>
                  </dl>
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
            <TransmissionFaq slug="edc-ariza-lambasi" />
          </div>
        </section>

        {/* ── HUB BACKLINK ───────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/rehber/otomatik-sanziman-ariza-lambasi"
                className="sm:col-span-2 block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Tüm şanzıman tiplerinde arıza lambası anlamları →
                </div>
              </Link>
              <Link
                href="/arac/renault"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Marka Sayfası</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Renault şanzıman servisi →
                </div>
              </Link>
              <Link
                href="/rehber/edc-vuruntu"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">İlgili Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  EDC şanzımanda vuruntu →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Renault'nuzun arıza lambası mı yandı?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              EDC teşhisinde model uyumlu cihaz gereklidir. Eren Servis'te
              Renault ve Nissan EDC şanzımanları için ücretsiz hata kodu okuma.
              Net fiyat, onaysız işlem yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/arac/renault"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Renault servis detayları →
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-2xl mx-auto px-4 pb-16">
          <ContactForm />
        </section>

      </main>
    </>
  );
}
