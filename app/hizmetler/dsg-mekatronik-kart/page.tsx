import type { Metadata } from "next";
import Link from 'next/link';
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

// ─── META ─────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DSG Mekatronik Kart Fiyatı 2026 | Eren Servis Bostancı",
  description:
    "DSG mekatronik kart değişimi ve tamiri 2026 fiyatları: DQ200 28.000–42.000 TL, " +
    "DQ250 32.000–48.000 TL. Bostancı'da garantili işlem, ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "dsg mekatronik kart fiyatı",
    "dsg mekatronik kart fiyatı 2026",
    "dsg mekatronik değişimi",
    "dq200 mekatronik kart fiyatı",
    "dq250 mekatronik kart fiyatı",
    "dsg mekatronik tamiri",
    "7 ileri dsg mekatronik kart fiyatı",
  ],
  openGraph: {
    title: "DSG Mekatronik Kart Fiyatı 2026 | Eren Servis Bostancı",
    description:
      "DQ200 ve DQ250 mekatronik kart 2026 fiyat tablosu. " +
      "Tamir mi, değişim mi? Ücretsiz tanı ile net karar — Eren Servis Bostancı.",
    url: "https://erenservis.net/hizmetler/dsg-mekatronik-kart",
    type: "website",
    images: [
      {
        url: "https://erenservis.net/images/og/dsg-mekatronik-kart.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Mekatronik Kart Fiyatı 2026",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/hizmetler/dsg-mekatronik-kart",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-mekatronik-kart"] ?? [];

const serviceSchema = buildServiceSchema({
  name: "DSG Mekatronik Kart Değişimi ve Tamiri",
  description:
    "DQ200 ve DQ250 DSG şanzıman mekatronik kart değişimi ve tamiri. " +
    "Hata kodu bazlı tanı, orijinal ve muadil parça seçeneği, garantili işlem.",
  url: "https://erenservis.net/hizmetler/dsg-mekatronik-kart",
  priceRange: "28.000 – 48.000 TL",
  areaServed: ["Bostancı", "Kadıköy", "Üsküdar", "Maltepe", "İstanbul"],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Hizmetler", url: "https://erenservis.net/hizmetler" },
  {
    name: "DSG Mekatronik Kart",
    url: "https://erenservis.net/hizmetler/dsg-mekatronik-kart",
  },
]);

// ─── FİYAT VERİSİ ─────────────────────────────────────────────────────────────
const fiyatTablosu = [
  {
    model: "DQ200",
    tip: "7 ileri kuru kavrama mekatroniği",
    araclar: "Golf 6/7, Polo, A3 8V, Fabia, Leon",
    tamir: "8.000 – 14.000",
    degisim: "28.000 – 42.000",
    sure: "1–2 gün",
    garanti: "12 ay",
    vurgu: true,
  },
  {
    model: "DQ250",
    tip: "6 ileri ıslak kavrama mekatroniği",
    araclar: "Passat B7/B8, A4, Tiguan, Octavia, Superb",
    tamir: "10.000 – 18.000",
    degisim: "32.000 – 48.000",
    sure: "1–2 gün",
    garanti: "12 ay",
    vurgu: false,
  },
  {
    model: "DQ381",
    tip: "7 ileri kuru kavrama — yeni nesil",
    araclar: "Golf 8, Tiguan 2, Passat B9, Arteon",
    tamir: "Tanı gerekli",
    degisim: "38.000 – 58.000",
    sure: "2 gün",
    garanti: "12 ay",
    vurgu: false,
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function DsgMekatronikKartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-zinc-950 text-white px-4 pt-16 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-zinc-500 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-zinc-300 transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/hizmetler" className="hover:text-zinc-300 transition-colors">Hizmetler</a>
              <span>/</span>
              <span className="text-zinc-400">DSG Mekatronik Kart</span>
            </nav>

            <span className="inline-block text-xs font-medium tracking-widest
                             uppercase text-amber-400 mb-4">
              Hizmet — Nisan 2026 Güncel Fiyat
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              DSG Mekatronik Kart Fiyatı 2026
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-amber-400">28.000</span>
              <span className="text-xl text-zinc-400">–</span>
              <span className="text-4xl font-bold text-amber-400">48.000</span>
              <span className="text-lg text-zinc-400">TL</span>
            </div>
            <p className="text-zinc-400 text-sm mb-2">
              Değişim fiyatı. Tamir imkânı varsa{" "}
              <span className="text-amber-400 font-medium">8.000 – 18.000 TL</span>&apos;ye
              çözülebilir — tanı olmadan söylemek mümkün değil.
            </p>
            <p className="text-zinc-500 text-xs mb-8">
              Model, parça seçimi ve arıza kapsamına göre değişir.
              Ücretsiz ön tanı sonrası net fiyat verilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-8">
              <div className="text-center">
                <div className="text-lg font-bold text-amber-400">Tamir</div>
                <div className="text-xs text-zinc-400 mt-1">Mümkünse önce dene</div>
              </div>
              <div className="text-center border-x border-zinc-800">
                <div className="text-lg font-bold text-amber-400">12 ay</div>
                <div className="text-xs text-zinc-400 mt-1">Garanti</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-amber-400">Ücretsiz</div>
                <div className="text-xs text-zinc-400 mt-1">Hata kodu okuma</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÜVEN ŞERİDİ ─────────────────────────────────────────────── */}

        {/* ── STICKY CTA mobil ─────────────────────────────────────────── */}
        <div className="sticky top-0 z-40 bg-white border-b border-zinc-100
                        px-4 py-3 flex items-center justify-between
                        shadow-sm sm:hidden">
          <div>
            <div className="text-xs text-zinc-500">Mekatronik Kart — Nisan 2026</div>
            <div className="text-sm font-bold text-zinc-900">28.000 – 48.000 TL</div>
          </div>
          <a
            href="tel:+905327153751"
            className="bg-amber-400 text-zinc-950 text-sm font-semibold
                       px-4 py-2 rounded-lg"
          >
            Ara
          </a>
        </div>

        {/* ── TAMİR Mİ DEĞİŞİM Mİ ─────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
            Tamir mi, Değişim mi?
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Bu sorunun cevabı hata koduna ve hasar kapsamına göre değişir.
            Her mekatronik kart değişim gerektirmez.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Tamir */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="text-xs font-bold text-green-700 uppercase
                              tracking-wider mb-3">
                Tamir mümkün
              </div>
              <div className="text-xl font-bold text-green-700 mb-3">
                8.000 – 18.000 TL
              </div>
              <ul className="text-sm text-zinc-600 space-y-2">
                {[
                  "Sensör veya solenoid arızası",
                  "Kavrama kaynaklı ikincil kirlilik",
                  "Yazılım hatası (flash güncellemesi)",
                  "Erken dönem mekatronik sorunu",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Değişim */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <div className="text-xs font-bold text-zinc-500 uppercase
                              tracking-wider mb-3">
                Değişim gerekli
              </div>
              <div className="text-xl font-bold text-zinc-700 mb-3">
                28.000 – 48.000 TL
              </div>
              <ul className="text-sm text-zinc-600 space-y-2">
                {[
                  "Mekatronik kart yanmış veya kırık",
                  "Metal toz kirliliği — kart içi hasar",
                  "Geç müdahale sonucu ilerlemiş arıza",
                  "Tamir denemesi başarısız olmuş kart",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Önemli:</strong> Hata kodu okumadan &quot;mekatronik kart lazım&quot;
              diyen servise dikkat edin. Eren Servis&apos;te tanı olmadan parça
              önerisi yapılmaz — önce okuma, sonra karar.
            </p>
          </div>
        </section>

        {/* ── FİYAT TABLOSU ────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Model Bazlı Fiyat Tablosu
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Nisan 2026 güncel fiyatlar. Döviz kuru değişimlerine
              göre güncellenir.
            </p>

            <div className="space-y-4">
              {fiyatTablosu.map((row) => (
                <div
                  key={row.model}
                  className={`rounded-xl border overflow-hidden bg-white ${
                    row.vurgu
                      ? "border-amber-300 ring-1 ring-amber-200"
                      : "border-zinc-200"
                  }`}
                >
                  {row.vurgu && (
                    <div className="bg-amber-400 text-zinc-950 text-xs font-bold
                                    text-center py-1.5 uppercase tracking-wider">
                      En çok sorulan
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="font-bold text-zinc-900 text-base">
                          {row.model}
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5">
                          {row.tip}
                        </div>
                        <div className="text-xs text-zinc-400 mt-1">
                          {row.araclar}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs text-zinc-400 mb-0.5">
                          Değişim
                        </div>
                        <div className="text-base font-bold text-zinc-900">
                          {row.degisim} TL
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-zinc-100 pt-4 grid grid-cols-3
                                    gap-3 text-center">
                      <div>
                        <div className="text-xs text-zinc-400">Tamir</div>
                        <div className="text-sm font-semibold text-green-600 mt-0.5">
                          {row.tamir} TL
                        </div>
                      </div>
                      <div className="border-x border-zinc-100">
                        <div className="text-xs text-zinc-400">Süre</div>
                        <div className="text-sm font-semibold text-zinc-700 mt-0.5">
                          {row.sure}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400">Garanti</div>
                        <div className="text-sm font-semibold text-amber-600 mt-0.5">
                          {row.garanti}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              * Fiyatlar Nisan 2026 itibarıyla geçerlidir. Döviz kuru ve
              parça temin koşullarına bağlı olarak değişebilir. Kesin fiyat
              ücretsiz ön tanı sonrası yazılı olarak bildirilir.
            </p>
          </div>
        </section>

        {/* ── KAVRAMA BAĞLANTISI ────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Mekatronik Arızasının Sık Görülen Nedeni: Kavrama
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            DSG mekatronik kart arızalarının önemli bir kısmı doğrudan
            elektriksel değil, kavrama kökenlidir. Aşınan kavrama plaketlerinden
            çıkan metal tozları şanzıman yağına karışır ve zamanla mekatronik
            kartın sensör ve solenoidlerine ulaşır.
          </p>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            Bu durumda yalnızca mekatronik kart değiştirmek sorunu çözmez —
            kavrama da değişmediyse yeni kart tekrar kirlenir. Tanı aşamasında
            her iki sistem birlikte değerlendirilir.
          </p>
          <a
            href="/rehber/dsg-kavrama-ariza-belirtileri"
            className="inline-flex items-center gap-2 text-sm font-medium
                       text-amber-600 hover:text-amber-800 transition-colors"
          >
            Kavrama arızası belirtilerini öğrenin →
          </a>
        </section>

        {/* ── SÜREÇ ────────────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">
              Nasıl Çalışıyoruz?
            </h2>

            <div className="space-y-0">
              {[
                {
                  no: "01",
                  baslik: "Ücretsiz hata kodu okuma",
                  detay:
                    "Teşhis cihazıyla tüm hata kodlarını okuyoruz. " +
                    "Bu aşama tamamen ücretsiz, araç teslimi gerekmez.",
                },
                {
                  no: "02",
                  baslik: "Tamir mi değişim mi — net karar",
                  detay:
                    "Hata koduna ve fiziksel incelemeye göre tamir " +
                    "mümkünse önce o seçeneği sunuyoruz. Her iki " +
                    "seçeneğin fiyatını yazılı bildiriyoruz.",
                },
                {
                  no: "03",
                  baslik: "Onayınızla başlıyoruz",
                  detay:
                    "Fiyat onayı olmadan hiçbir işlem başlamaz. " +
                    "Teklif verildikten sonra fiyat değişmez.",
                },
                {
                  no: "04",
                  baslik: "Adaptasyon ve test",
                  detay:
                    "İşlem sonrası mekatronik adaptasyonu yeniliyor, " +
                    "test sürüşü yapılıyor. 12 ay garanti belgesiyle teslim.",
                },
              ].map((adim, i, arr) => (
                <div key={adim.no} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-400
                                    text-zinc-950 text-xs font-bold
                                    flex items-center justify-center shrink-0">
                      {adim.no}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-200 my-1" />
                    )}
                  </div>
                  <div className={`pb-8 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                    <div className="font-semibold text-zinc-900 text-sm mb-1">
                      {adim.baslik}
                    </div>
                    <div className="text-sm text-zinc-600 leading-relaxed">
                      {adim.detay}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            Sık Sorulan Sorular
          </h2>
          <TransmissionFaq slug="dsg-mekatronik-kart" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">
              İlgili sayfalar
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/rehber/dsg-mekatronik-ariza-belirtileri",
                  tip: "Rehber",
                  baslik: "Mekatronik arıza belirtileri →",
                },
                {
                  href: "/hizmetler/dsg-kavrama-degisimi",
                  tip: "Hizmet",
                  baslik: "DSG kavrama değişimi fiyatı →",
                },
                {
                  href: "/rehber/dsg-kavrama-ariza-belirtileri",
                  tip: "Rehber",
                  baslik: "Kavrama arızası belirtileri →",
                },
                {
                  href: "/rehber/uyari-lambasi-semptomlari",
                  tip: "Rehber",
                  baslik: "DSG uyarı lambası yandı →",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block bg-white border border-zinc-200 rounded-xl p-4
                             hover:border-amber-300 hover:bg-amber-50
                             transition-all group"
                >
                  <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">
                    {link.tip}
                  </div>
                  <div className="text-sm font-semibold text-zinc-800
                                  group-hover:text-amber-700 transition-colors">
                    {link.baslik}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANA CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-zinc-950 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Mekatronik kart mı, başka bir şey mi?
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed text-center">
              Ücretsiz hata kodu okuma ile başlayalım. Ne olduğunu net
              söyleriz — onayınız olmadan hiçbir işlem yapılmaz.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm">Ücretsiz</div>
                <div className="text-zinc-400 text-xs mt-0.5">Hata kodu okuma</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm">Net fiyat</div>
                <div className="text-zinc-400 text-xs mt-0.5">Sürpriz yok</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm">12 ay</div>
                <div className="text-zinc-400 text-xs mt-0.5">Garanti</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-amber-400 text-zinc-950 font-semibold
                           px-6 py-3 rounded-xl hover:bg-amber-300
                           transition-colors text-center"
              >
                0532 715 37 51 — Hemen Ara
              </a>
              <a
                href="/iletisim"
                className="inline-block border border-zinc-700 text-zinc-300
                           font-medium px-6 py-3 rounded-xl hover:border-zinc-500
                           hover:text-white transition-colors text-center"
              >
                Mesaj gönder →
              </a>
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM FORMU ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <h2 className="text-xl font-bold text-zinc-900 mb-6">
            Randevu veya Soru
          </h2>
          <ContactForm />
        </section>

      </main>
    </>
  );
}
