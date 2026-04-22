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
  title: "CVT Şanzımanda Vuruntu: Kayış Aşınması mı? | Eren Servis Bostancı",
  description:
    "Toyota, Honda ve Nissan CVT şanzımanda vuruntu neden olur? Kayış aşınması, pully ve " +
    "kontrol birimi. Nadir ama ciddi — 2026 tanı ve maliyet rehberi. Ücretsiz ön tanı Bostancı.",
  keywords: [
    "cvt şanzıman vuruntu",
    "toyota cvt titreşim",
    "honda cvt vuruntu neden",
    "nissan xtronic titreşim",
    "cvt kayış aşınması belirtileri",
    "cvt şanzıman sarsıntı",
    "cvt yağ değişimi vuruntu",
  ],
  openGraph: {
    title: "CVT Şanzımanda Vuruntu: Kayış mı, Kontrol Birimi mi? | Eren Servis",
    description:
      "CVT'de vuruntu nadirdir ama olduğunda ciddidir. Kayış aşınması, pully sorunu ve " +
      "CVT yağı — nedenleri, belirtileri ve maliyet. Bostancı'da ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/cvt-vuruntu/",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CVT Şanzıman Vuruntu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/cvt-vuruntu/",
  },
};

const faqItems = TRANSMISSION_FAQS["cvt-vuruntu"] ?? [];

const articleSchema = buildArticleSchema({
  title: "CVT Şanzımanda Vuruntu: Kayış Aşınması mı, Kontrol Birimi mi?",
  description:
    "Toyota, Honda ve Nissan CVT şanzımanlarda vuruntunun nedenleri, " +
    "belirtileri ve onarım maliyet rehberi.",
  url: "https://www.erenservis.net/rehber/cvt-vuruntu/",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  { name: "CVT Vuruntu", url: "https://www.erenservis.net/rehber/cvt-vuruntu/" },
]);

const serviceSchema = buildServiceSchema({
  name: "CVT Şanzıman Vuruntu Teşhis ve Onarım",
  description:
    "CVT şanzıman kayış aşınması teşhisi, pully seti değişimi ve CVT yağ revizyonu. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/cvt-vuruntu/",
});

const modeller = [
  { model: "Toyota Corolla / Auris", sistem: "Multidrive S / Super CVT-i", yillar: "2014+", risk: "Orta" },
  { model: "Toyota C-HR / Yaris", sistem: "Multidrive S", yillar: "2017+", risk: "Düşük" },
  { model: "Honda Jazz / HR-V", sistem: "CVT (Earth Dreams)", yillar: "2015+", risk: "Orta" },
  { model: "Honda Civic / CR-V", sistem: "CVT", yillar: "2017+", risk: "Düşük" },
  { model: "Nissan Qashqai / X-Trail", sistem: "Xtronic CVT", yillar: "2014+", risk: "Orta" },
  { model: "Nissan Note / Micra", sistem: "Xtronic CVT", yillar: "2013+", risk: "Düşük" },
  { model: "Subaru Outback / Forester", sistem: "Lineartronic CVT", yillar: "2015+", risk: "Orta" },
];

const nedenler = [
  {
    baslik: "Metal kayış aşınması",
    aciklama:
      "CVT'nin kalbinde iki pully arasında hareket eden metal itici kayış bulunur. " +
      "150.000 km üzerinde veya CVT yağı ihmal edilmiş araçlarda kayış segmentleri " +
      "aşınır. Belirli hız aralıklarında (40–70 km/s) sistematik titreşim oluşturur.",
    agirlik: "kritik",
  },
  {
    baslik: "Pully (konika) yüzey hasarı",
    aciklama:
      "Birincil ve ikincil pullyların konik yüzeyleri kayış basıncından " +
      "zamanla çizilir. Yüzey pürüzlüğü kayışın pully üzerinde titremesine neden olur. " +
      "Kayış ve pully seti genellikle birlikte değiştirilir.",
    agirlik: "kritik",
  },
  {
    baslik: "Bozulmuş CVT yağı",
    aciklama:
      "CVT yağı hem güç iletimini hem de soğutmayı sağlar. Bozulmuş yağ kayışın " +
      "tutunma katsayısını düşürür ve mikro-kayma oluşturur. " +
      "Erken evrede yağ değişimi titreşimi tamamen giderebilir.",
    agirlik: "orta",
  },
  {
    baslik: "Kontrol birimi (TCU) hatası",
    aciklama:
      "TCU, pully basıncını ve kayış gerilimini milisaniye hassasiyetiyle yönetir. " +
      "Yazılım hatası veya sensör arızası bu dengeyi bozar. " +
      "Genellikle diyagnoz cihazında hata kodu eşliğinde görülür.",
    agirlik: "orta",
  },
];

const aciliyetStil: Record<string, { renk: string; etiket: string }> = {
  kritik: { renk: "border-red-200 bg-red-50 text-red-800", etiket: "bg-red-100 text-red-700" },
  orta: { renk: "border-amber-200 bg-amber-50 text-amber-800", etiket: "bg-amber-100 text-amber-700" },
  dusuk: { renk: "border-blue-200 bg-blue-50 text-blue-800", etiket: "bg-blue-100 text-blue-700" },
};

export default function CvtVuruntuPage() {
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
              <span className="text-text-secondary">CVT Vuruntu</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri — CVT Şanzıman
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              CVT Şanzımanda Vuruntu: Nadir Ama Ciddi
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              CVT şanzıman teoride en yumuşak geçişi sağlar — vuruntu yapmaması
              gerekir. Yaptığında ise neden mekanik veya elektronik kaynaklıdır.
              Toyota, Honda ve Nissan sahipleri için kayış, pully ve kontrol
              birimi rehberi.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Olası neden</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">7</div>
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
              CVT şanzımanda vuruntu{" "}
              <strong>DSG veya PowerShift'e göre çok daha nadirdir</strong> — çünkü
              CVT kavrama basamağı kullanmaz. Ama yaşandığında genellikle{" "}
              <strong>metal kayış aşınması veya bozulmuş CVT yağından</strong>{" "}
              kaynaklanır. Erken evrede yağ değişimi sorunu çözebilir; geç
              evrede kayış ve pully seti birlikte değişmek zorunda kalır. Bu
              onarım tork konvertörlü şanzımana göre daha maliyetlidir.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            CVT, sürtünmesiz metal kayış ve kademesiz pully sistemiyle çalışır.
            Vites basamağı olmadığı için klasik "vites geçişi vuruntusunu" yaşamaz.
            Hissedilen titreşim farklı bir mekanizmadan — kayış resonansı,
            mikro-kayma veya TCU hatasından — gelir.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Bu farkı bilmeden "DSG arızası gibi" aramak yanlış tanıya yol açar.
            Aşağıda CVT'ye özgü 4 neden ve tanı ipuçları bulabilirsiniz.
          </p>
        </section>

        {/* ── CVT NEDEN YAPAR? ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              CVT Vuruntusunun 4 Nedeni
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Her neden farklı belirti ve çözüm gerektiriyor — doğru tanı önemli.
            </p>

            <div className="space-y-4">
              {nedenler.map((n, i) => {
                const stil = aciliyetStil[n.agirlik];
                return (
                  <div key={i} className={`border rounded-xl p-5 ${stil.renk}`}>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-jetbrains text-xs font-bold bg-white/60 border border-current/10 px-2 py-0.5 rounded">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-saira font-semibold text-sm sm:text-base">
                          {n.baslik}
                        </h3>
                      </div>
                      <span className={`shrink-0 font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${stil.etiket}`}>
                        {n.agirlik === "kritik" ? "Mekanik hasar" : "Yazılım / yağ"}
                      </span>
                    </div>
                    <p className="font-saira text-sm leading-relaxed">
                      {n.aciklama}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CVT VE NORMAL OTOMATİK FARKI ──────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            CVT ile Tork Konvertörlü Şanzıman Vuruntusunun Farkı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Aynı "titreşim" şikayeti iki farklı sistemden çok farklı nedenlerle gelebilir.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                CVT Şanzıman
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Vites basamağı yok — klasik vuruntu yaşanmaz
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Titreşim belirli hız bandında sürekli hissedilir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Kayış / pully mekanik sorunu — pahalı onarım
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  CVT yağı değişimi bazen tek başına çözer
                </li>
              </ul>
            </div>

            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                Tork Konvertörlü (ZF / Aisin)
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Vuruntu pratikte görülmez
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Sorun varsa tork konvertör kilitleme arızası
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Genel olarak en dayanıklı otomatik tip
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Mercedes 7G, BMW ZF 8HP, Toyota 6AT
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              DSG veya PowerShift şanzımanın vuruntusunu araştırıyorsanız:{" "}
              <Link
                href="/rehber/otomatik-sanziman-vuruntu"
                className="text-brass underline underline-offset-2 hover:text-brass/80 transition-colors"
              >
                Tüm şanzıman tipleri karşılaştırması →
              </Link>
            </p>
          </div>
        </section>

        {/* ── ETKİLENEN MODELLER ─────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Hangi Araçlarda CVT Vuruntu Görülür?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              150.000 km üzeri ve CVT yağı değiştirilmemiş araçlarda risk artar.
            </p>

            <div className="overflow-hidden rounded-xl border border-border-hairline">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-graphite-elevated border-b border-border-hairline">
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Model</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3 hidden sm:table-cell">CVT Sistemi</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Yıllar</th>
                    <th className="font-jetbrains text-[10px] uppercase tracking-wider text-iron-light text-left px-4 py-3">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-hairline">
                  {modeller.map((m) => (
                    <tr key={m.model} className="bg-graphite-base hover:bg-graphite-elevated transition-colors">
                      <td className="font-saira font-semibold text-text-primary px-4 py-3">{m.model}</td>
                      <td className="font-saira text-text-secondary px-4 py-3 hidden sm:table-cell">{m.sistem}</td>
                      <td className="font-saira text-text-secondary px-4 py-3">{m.yillar}</td>
                      <td className="px-4 py-3">
                        <span className={`font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          m.risk === "Orta"
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

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="cvt-vuruntu" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
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
                href="/hizmetler/cvt-sanziman-tamiri"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  CVT Şanzıman Tamiri ve Resetleme →
                </div>
              </Link>
              <Link
                href="/rehber/dsg-vuruntu-semptomlari"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG Vuruntu Rehberi (Karşılaştırma için) →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              CVT'niz titreşim mi yapıyor?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Kayış mı aşınmış, yağ mı bozulmuş, TCU hatası mı — 30 dakikada
              net teşhis. CVT yağ değişimi yeterliyse gereksiz parça değiştirmiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/cvt-sanziman-tamiri"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                CVT tamiri hakkında →
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
