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
  title: "CVT Arıza Lambası: Toyota, Honda, Nissan'da Uyarı Işığı | Eren Servis",
  description:
    "CVT şanzımanda arıza lambası neden yanar? Kayış basınç anomalisi, kontrol ünitesi hatası " +
    "ve kalibrasyon sorunu. Toyota, Honda, Nissan, Subaru rehberi. Bostancı'da ücretsiz teşhis.",
  keywords: [
    "cvt arıza lambası",
    "cvt şanzıman uyarı ışığı",
    "toyota cvt arıza lambası",
    "honda cvt uyarı lambası",
    "nissan cvt arıza ışığı",
    "cvt şanzıman hata kodu",
    "cvt kontrol ünitesi arıza",
  ],
  openGraph: {
    title: "CVT Arıza Lambası: Toyota, Honda, Nissan Rehberi | Eren Servis",
    description:
      "CVT şanzımanda uyarı ışığının nedenleri ve aciliyet değerlendirmesi. " +
      "Bostancı'da ücretsiz hata kodu okuma.",
    url: "https://www.erenservis.net/rehber/cvt-ariza-lambasi",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CVT Arıza Lambası",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/cvt-ariza-lambasi/",
  },
};

const faqItems = TRANSMISSION_FAQS["cvt-ariza-lambasi"] ?? [];

const articleSchema = buildArticleSchema({
  title: "CVT Arıza Lambası: Toyota, Honda, Nissan'da Uyarı Işığı",
  description:
    "CVT şanzımanda arıza lambası nedenleri, model bazında farklılıklar ve " +
    "aciliyet değerlendirmesi.",
  url: "https://www.erenservis.net/rehber/cvt-ariza-lambasi",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "CVT Arıza Lambası",
    url: "https://www.erenservis.net/rehber/cvt-ariza-lambasi",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "CVT Arıza Lambası Teşhis ve Onarım",
  description:
    "CVT şanzımanda arıza lambası teşhisi ve onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/cvt-ariza-lambasi",
});

const modeller = [
  { model: "Toyota Corolla (E170/E210)", tip: "CVT (Multidrive S)", risk: "Orta", not: "Yağ değişiminde hassas" },
  { model: "Toyota Auris / C-HR", tip: "CVT (Multidrive S)", risk: "Orta", not: "Özellikle 2013–2018" },
  { model: "Honda Jazz / Fit", tip: "CVT", risk: "Düşük", not: "Uzun ömürlü ama bakım kritik" },
  { model: "Honda Civic (FK7–FK8)", tip: "CVT", risk: "Düşük", not: "Kalibrasyon hassasiyeti var" },
  { model: "Nissan Juke / Note", tip: "Xtronic CVT", risk: "Orta", not: "Soğukta lamba riski" },
  { model: "Subaru XV / Forester", tip: "Lineartronic CVT", risk: "Düşük", not: "Güçlü yapı, ender lamba" },
];

const nedenler = [
  {
    no: "01",
    baslik: "Kayış / pully basınç anomalisi",
    aciklama:
      "CVT'nin metal kayışı veya pully'lerinde basınç sensörü sapma " +
      "tespit ettiğinde kontrol ünitesi hata kodu yazar. Genellikle " +
      "soğuk havalarda ilk birkaç dakika artar.",
  },
  {
    no: "02",
    baslik: "Kontrol ünitesi yazılım hatası",
    aciklama:
      "CVT kontrol modülü adaptasyon değerleri bozulduğunda veya " +
      "voltaj anomalisi yaşandığında lamba yanar. Yazılım güncellemesi " +
      "veya kalibrasyon sıfırlama çoğu durumda yeterlidir.",
  },
  {
    no: "03",
    baslik: "Yağ kalitesi düşüklüğü",
    aciklama:
      "CVT, özgün tip şanzıman yağı gerektirir (CVTF). Yanlış yağ " +
      "veya aşırı eskimiş yağ kayış sürtünme katsayısını bozar; " +
      "kontrol ünitesi bunu sapma olarak algılar.",
  },
  {
    no: "04",
    baslik: "Aşırı ısınma koruma modu",
    aciklama:
      "Uzun süre yüksek yükte çalışma (sarp yokuş, uzun römorklama) " +
      "CVT'yi ısıtır. Termal koruma devreye girince lamba yanar ve " +
      "sistem güç kısıtlamasına geçer.",
  },
];

export default function CvtArızaLambasıPage() {
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
              <span className="text-text-secondary">CVT</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              CVT Şanzıman
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              CVT Arıza Lambası: Toyota, Honda ve Nissan'da Uyarı Işığı
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              CVT şanzımanda arıza lambası nadiren yanar — ama yandığında
              genellikle ciddidir. Kayış basıncı, kontrol ünitesi ve yağ
              kalitesi başlıca nedenlerdir. Model bazında rehber.
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
            className="border border-blue-200 bg-blue-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-blue-900 leading-relaxed">
              CVT şanzımanda arıza lambası{" "}
              <strong>nadir yanar ama yandığında genellikle ciddidir.</strong>{" "}
              Lambayı yoksaymak kayış hasarına zemin hazırlar — bu en pahalı
              CVT arızasıdır. Lamba yandıysa en kısa sürede hata kodu okutun.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            CVT'de arıza lambası; DSG veya EDC'deki kadar sık yanmaz çünkü
            CVT'nin mekanik yapısı daha basittir. Ancak bu durumu abartmamak
            gerekir — kayış veya pully sorununun geç tespiti, sistemin
            tamamının değişimiyle sonuçlanabilir.
          </p>
        </section>

        {/* ── ETKİLENEN MODELLER ─────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              CVT Kullanan Modeller ve Risk Düzeyleri
            </h2>

            <div className="overflow-x-auto rounded-xl border border-border-hairline">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-graphite-elevated border-b border-border-hairline">
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">Model</th>
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">CVT Tipi</th>
                    <th className="font-jetbrains text-xs text-iron-light text-left px-4 py-3 font-medium">Risk</th>
                  </tr>
                </thead>
                <tbody className="bg-graphite-base divide-y divide-border-hairline">
                  {modeller.map((m) => (
                    <tr key={m.model}>
                      <td className="font-saira text-text-primary px-4 py-3">
                        <div>{m.model}</div>
                        <div className="font-saira text-xs text-text-secondary mt-0.5">{m.not}</div>
                      </td>
                      <td className="font-jetbrains text-xs text-iron-light px-4 py-3">{m.tip}</td>
                      <td className="px-4 py-3">
                        <span className={`font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          m.risk === "Orta"
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
            CVT Arıza Lambasının 4 Başlıca Nedeni
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            CVT'de lamba yandığında bu 4 neden önce araştırılır.
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

        {/* ── CVT vs Tork Konvertör ───────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              CVT ile Tork Konvertörlü Arıza Lambası Farkı
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  tip: "CVT",
                  markalar: "Toyota, Honda, Nissan, Subaru",
                  lamba: "Şanzıman simgesi veya genel uyarı",
                  risk: "Kayış / pully hasarı — pahalı",
                  oneri: "Acilen hata kodu okutun",
                },
                {
                  tip: "ZF / Aisin Tork Konvertörlü",
                  markalar: "Mercedes, BMW, Peugeot",
                  lamba: "Sarı ünlem veya motor lambası",
                  risk: "Solenoid valf — CVT'ye göre daha ucuz",
                  oneri: "48 saat içinde servise",
                },
              ].map((k) => (
                <div key={k.tip} className="border border-border-hairline rounded-xl bg-graphite-base p-5">
                  <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-brass mb-4">
                    {k.tip}
                  </div>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Markalar</dt>
                      <dd className="font-saira text-text-secondary">{k.markalar}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Lamba tipi</dt>
                      <dd className="font-saira text-text-primary">{k.lamba}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Ana risk</dt>
                      <dd className="font-saira text-text-secondary">{k.risk}</dd>
                    </div>
                    <div>
                      <dt className="font-jetbrains text-[10px] text-iron-light uppercase tracking-wide mb-0.5">Öneri</dt>
                      <dd className="font-saira text-brass font-medium">{k.oneri}</dd>
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
            <TransmissionFaq slug="cvt-ariza-lambasi" />
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
                href="/hizmetler/cvt-sanziman-tamiri"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  CVT şanzıman tamiri ve resetleme →
                </div>
              </Link>
              <Link
                href="/rehber/cvt-vuruntu"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">İlgili Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  CVT şanzımanda vuruntu →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              CVT'nizde arıza lambası yandı mı?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              CVT arızaları erken teşhiste çok daha ucuza çözülür. Eren Servis'te
              ücretsiz hata kodu okuma — Toyota, Honda, Nissan ve Subaru CVT
              şanzıman uzmanı.
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
                CVT servis detayları →
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
