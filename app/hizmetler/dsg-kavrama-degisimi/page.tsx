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
  title: "DSG Kavrama Değişimi Fiyatı 2026 | Eren Servis Bostancı",
  description:
    "DQ200 kavrama değişimi 18.000–28.000 TL, DQ250 22.000–35.000 TL. " +
    "Bostancı'da garantili DSG kavrama değişimi. Ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "dsg kavrama değişimi fiyatı",
    "dsg kavrama değişimi fiyatı 2026",
    "dq200 kavrama fiyatı",
    "dq250 kavrama fiyatı",
    "dsg kavrama değişimi bostancı",
    "dsg kavrama ne kadar",
    "kavrama değişimi fiyatı",
  ],
  openGraph: {
    title: "DSG Kavrama Değişimi Fiyatı 2026 | Eren Servis Bostancı",
    description:
      "DQ200 ve DQ250 için net fiyat tablosu. Garantili işlem, ücretsiz ön tanı. " +
      "Bostancı DSG uzmanı Eren Servis.",
    url: "https://erenservis.net/hizmetler/dsg-kavrama-degisimi",
    type: "website",
    images: [
      {
        url: "https://erenservis.net/images/og/dsg-kavrama-degisimi.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Kavrama Değişimi Fiyatı 2026",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/hizmetler/dsg-kavrama-degisimi",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-kavrama-degisimi"] ?? [];

const serviceSchema = buildServiceSchema({
  name: "DSG Kavrama Değişimi",
  description:
    "DQ200 ve DQ250 DSG şanzıman kavrama seti değişimi. Orijinal ve muadil " +
    "parça seçeneği, garantili işlem, ücretsiz ön tanı.",
  url: "https://erenservis.net/hizmetler/dsg-kavrama-degisimi",
  priceRange: "18.000 – 35.000 TL",
  areaServed: ["Bostancı", "Kadıköy", "Üsküdar", "Maltepe", "İstanbul"],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Hizmetler", url: "https://erenservis.net/hizmetler" },
  {
    name: "DSG Kavrama Değişimi",
    url: "https://erenservis.net/hizmetler/dsg-kavrama-degisimi",
  },
]);

// ─── FİYAT VERİSİ ─────────────────────────────────────────────────────────────
const fiyatTablosu = [
  {
    model: "DQ200",
    tip: "7 ileri kuru kavrama",
    araclar: "Golf 6/7, Polo, A3 8V, Fabia, Leon",
    orijinal: "24.000 – 28.000",
    muadil: "18.000 – 22.000",
    sure: "1 gün",
    garanti: "12 ay",
    vurgu: false,
  },
  {
    model: "DQ250",
    tip: "6 ileri ıslak kavrama",
    araclar: "Passat B7/B8, A4, Tiguan, Octavia, Superb",
    orijinal: "30.000 – 35.000",
    muadil: "22.000 – 27.000",
    sure: "1–2 gün",
    garanti: "12 ay",
    vurgu: true,
  },
  {
    model: "DQ200 + Volant",
    tip: "Kavrama + çift kütleli volan",
    araclar: "Volant hasarı varsa eklenir",
    orijinal: "38.000 – 48.000",
    muadil: "28.000 – 36.000",
    sure: "1–2 gün",
    garanti: "12 ay",
    vurgu: false,
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function DsgKavramaDegisimiPage() {
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

        {/* ── HERO — fiyat ilk ekranda ─────────────────────────────────── */}
        <section className="bg-zinc-950 text-white px-4 pt-16 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-zinc-500 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-zinc-300 transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/hizmetler" className="hover:text-zinc-300 transition-colors">Hizmetler</a>
              <span>/</span>
              <span className="text-zinc-400">DSG Kavrama Değişimi</span>
            </nav>

            <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
              Hizmet — Nisan 2026 Güncel Fiyat
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              DSG Kavrama Değişimi Fiyatı 2026
            </h1>

            {/* Fiyat aralığı — ilk ekranda net görünsün */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-amber-400">18.000</span>
              <span className="text-xl text-zinc-400">–</span>
              <span className="text-4xl font-bold text-amber-400">35.000</span>
              <span className="text-lg text-zinc-400">TL</span>
            </div>
            <p className="text-zinc-400 text-sm mb-8">
              Model ve parça seçimine göre değişir. Ücretsiz ön tanı sonrası
              net fiyat verilir — sürpriz fatura yok.
            </p>

            {/* Hızlı özellikler */}
            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">1–2 gün</div>
                <div className="text-xs text-zinc-400 mt-1">Teslim süresi</div>
              </div>
              <div className="text-center border-x border-zinc-800">
                <div className="text-2xl font-bold text-amber-400">12 ay</div>
                <div className="text-xs text-zinc-400 mt-1">Garanti</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">Ücretsiz</div>
                <div className="text-xs text-zinc-400 mt-1">Ön tanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÜVEN ŞERİDİ ─────────────────────────────────────────────── */}

        {/* ── STICKY CTA — mobilde her zaman görünür ───────────────────── */}
        <div className="sticky top-0 z-40 bg-white border-b border-zinc-100
                        px-4 py-3 flex items-center justify-between
                        shadow-sm sm:hidden">
          <div>
            <div className="text-xs text-zinc-500">DSG Kavrama Değişimi</div>
            <div className="text-sm font-bold text-zinc-900">18.000 – 35.000 TL</div>
          </div>
          <a
            href="tel:+905327153751"
            className="bg-amber-400 text-zinc-950 text-sm font-semibold
                       px-4 py-2 rounded-lg"
          >
            Ara
          </a>
        </div>

        {/* ── FİYAT TABLOSU ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
            Model Bazlı Fiyat Tablosu
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Orijinal ve muadil parça seçeneği mevcuttur.
            Her ikisi de 12 ay garanti kapsamındadır.
          </p>

          <div className="space-y-4">
            {fiyatTablosu.map((row) => (
              <div
                key={row.model}
                className={`rounded-xl border overflow-hidden ${
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
                      <div className="text-xs text-zinc-500 mt-0.5">{row.tip}</div>
                      <div className="text-xs text-zinc-400 mt-1">{row.araclar}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs text-zinc-400 mb-0.5">Muadil</div>
                      <div className="text-base font-bold text-zinc-900">
                        {row.muadil} TL
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-100 pt-4 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xs text-zinc-400">Orijinal</div>
                      <div className="text-sm font-semibold text-zinc-700 mt-0.5">
                        {row.orijinal} TL
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
            * Fiyatlar Nisan 2026 itibarıyla geçerlidir. Döviz kuru ve parça
            temin koşullarına göre değişebilir. Kesin fiyat ücretsiz ön tanı
            sonrası yazılı olarak bildirilir.
          </p>
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
                  baslik: "Ücretsiz ön tanı",
                  detay:
                    "Aracınızı getirin, hata kodu okuyoruz ve kavrama durumunu " +
                    "kontrol ediyoruz. Bu aşama tamamen ücretsiz.",
                },
                {
                  no: "02",
                  baslik: "Net teklif",
                  detay:
                    "Tanı sonrası gerekli işlemi, parça seçeneğini (orijinal/muadil) " +
                    "ve kesin fiyatı yazılı olarak bildiriyoruz.",
                },
                {
                  no: "03",
                  baslik: "Onayınızla başlıyoruz",
                  detay:
                    "Onay vermeden hiçbir işlem başlamaz. Fiyat değişmez, " +
                    "ek ücret çıkmaz.",
                },
                {
                  no: "04",
                  baslik: "Test ve teslim",
                  detay:
                    "İşlem sonrası test sürüşü yapıyoruz. 12 ay garanti belgesiyle " +
                    "aracınızı teslim ediyoruz.",
                },
              ].map((adim, i, arr) => (
                <div key={adim.no} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-zinc-950
                                    text-xs font-bold flex items-center justify-center
                                    shrink-0">
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

        {/* ── NE DEĞİŞTİRİLİR ──────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
            Kavrama Değişiminde Neler Yapılır?
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Sadece aşınan parçayı değiştiriyoruz — gerekmeyeni değil.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Her değişimde yapılanlar
              </div>
              <ul className="space-y-2">
                {[
                  "Kavrama seti (plaket + baskı) değişimi",
                  "Kavrama adaptasyon sıfırlama",
                  "Hata kodları temizleme",
                  "Test sürüşü ve geçiş kalite kontrolü",
                  "12 ay garanti belgesi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-700">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Tanı sonucu gerekliyse eklenenler
              </div>
              <ul className="space-y-2">
                {[
                  "Çift kütleli volan (DMF) değişimi",
                  "Kavrama yatağı değişimi",
                  "Basınç tüpü değişimi",
                  "DSG şanzıman yağı değişimi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-500">
                    <span className="text-zinc-300 mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── ERKEN VS GEÇ ─────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              Ne Kadar Erken, O Kadar Az Masraf
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">
                  Erken müdahale
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  18–28K TL
                </div>
                <div className="text-sm text-zinc-600 mb-4">
                  Sadece kavrama seti
                </div>
                <ul className="text-sm text-zinc-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    Volant sağlam
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    Mekatronik temiz
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    1 gün işlem
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-red-200 rounded-xl p-5">
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                  Geç müdahale
                </div>
                <div className="text-2xl font-bold text-red-600 mb-1">
                  45–80K TL
                </div>
                <div className="text-sm text-zinc-600 mb-4">
                  Kavrama + volant + mekatronik
                </div>
                <ul className="text-sm text-zinc-600 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    Volant hasar görmüş
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    Metal toz kirliliği
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">✗</span>
                    2–3 gün işlem
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            Sık Sorulan Sorular
          </h2>
          <TransmissionFaq slug="dsg-kavrama-degisimi" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">
              Karar vermeden önce
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Rehber</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  Kavrama arızası belirtileri →
                </div>
              </a>
              <a
                href="/rehber/dsg-vuruntu-semptomlari"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Rehber</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  DSG vuruntu neden olur? →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── ANA CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-zinc-950 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-3 text-center">
              Fiyat almak için getirin
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed text-center">
              Önce ücretsiz ön tanı, sonra net fiyat. Onay vermeden
              hiçbir işlem başlamaz.
            </p>

            {/* Öne çıkan bilgiler */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm">Ücretsiz</div>
                <div className="text-zinc-400 text-xs mt-0.5">Ön tanı</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3">
                <div className="text-amber-400 font-bold text-sm">1–2 gün</div>
                <div className="text-zinc-400 text-xs mt-0.5">Teslim</div>
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
                           px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors
                           text-center"
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
