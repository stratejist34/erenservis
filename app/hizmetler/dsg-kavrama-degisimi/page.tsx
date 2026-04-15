import type { Metadata } from "next";
import Image from 'next/image';
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
    "DQ200 kavrama değişimi 55.000–65.000 TL, DQ250 62.000–72.000 TL. " +
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
      "DQ200 ve DQ250 için net fiyat tablosu. Nisan 2026 güncel. Garantili işlem, ücretsiz ön tanı. " +
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
  priceRange: "55.000 – 72.000 TL",
  minPrice: 55000,
  maxPrice: 72000,
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
    orijinal: "55.000 – 65.000",
    muadil: "38.000 – 46.000",
    sure: "1 gün",
    garanti: "6 ay",
    vurgu: false,
  },
  {
    model: "DQ250",
    tip: "6 ileri ıslak kavrama",
    araclar: "Passat B7/B8, A4, Tiguan, Octavia, Superb",
    orijinal: "62.000 – 72.000",
    muadil: "46.000 – 54.000",
    sure: "1–2 gün",
    garanti: "6 ay",
    vurgu: true,
  },
  {
    model: "DQ200 + Volant",
    tip: "Kavrama + çift kütleli volan",
    araclar: "Volant hasarı varsa eklenir",
    orijinal: "80.000 – 95.000",
    muadil: "62.000 – 72.000",
    sure: "1–2 gün",
    garanti: "6 ay",
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

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO — fiyat ilk ekranda ─────────────────────────────────── */}
        <section className="bg-graphite-surface text-text-primary px-4 pt-16 pb-12 border-b border-white/5">
          <div className="max-w-2xl mx-auto">

            <nav className="font-jetbrains text-xs text-iron-light mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-secondary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/hizmetler" className="hover:text-text-secondary transition-colors">Hizmetler</a>
              <span>/</span>
              <span className="text-text-secondary">DSG Kavrama Değişimi</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-medium tracking-[0.22em] uppercase text-brass mb-4">
              Hizmet — Nisan 2026 Güncel Fiyat
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Kavrama Değişimi Fiyatı 2026
            </h1>

            {/* Fiyat aralığı — ilk ekranda net görünsün */}
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-brass">55.000</span>
              <span className="text-xl text-text-secondary">–</span>
              <span className="text-4xl font-bold text-brass">72.000</span>
              <span className="font-saira text-lg text-text-secondary">TL</span>
            </div>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Model ve parça seçimine göre değişir. Ücretsiz ön tanı sonrası
              net fiyat verilir — sürpriz fatura yok.
            </p>

            {/* Hızlı özellikler */}
            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-jetbrains text-2xl font-bold text-brass">1–2 gün</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Teslim süresi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-jetbrains text-2xl font-bold text-brass">6 ay</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Garanti</div>
              </div>
              <div className="text-center">
                <div className="font-jetbrains text-2xl font-bold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Ön tanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÖRSEL — Atmosfer / kanıt katmanı ───────────────────────── */}
        <div className="mt-8 relative w-full h-72 sm:h-96 overflow-hidden bg-graphite-elevated">
          <Image
            src="/images/part2/Screenshot_83.webp"
            alt="DSG kavrama diski ve piston montajı — Eren Servis Bostancı DQ200 kavrama değişimi"
            fill
            className="object-cover brightness-[0.73] saturate-[0.6]"
            style={{ objectPosition: '50% 30%' }}
            sizes="100vw"
            priority
          />
          <div aria-hidden="true" className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))' }} />
        </div>

        {/* ── STICKY CTA — mobilde her zaman görünür ───────────────────── */}
        <div className="sticky top-0 z-40 bg-graphite-base border-b border-border-hairline
                        px-4 py-3 flex items-center justify-between
                        shadow-sm sm:hidden">
          <div>
            <div className="font-jetbrains text-xs text-iron-light">DSG Kavrama Değişimi</div>
            <div className="font-saira text-sm font-semibold text-text-primary">55.000 – 72.000 TL</div>
          </div>
          <a
            href="tel:+905327153751"
            className="bg-brass-bright text-graphite-base font-saira font-semibold
                       text-sm px-4 py-2 rounded-full hover:bg-brass transition-colors"
          >
            Ara
          </a>
        </div>

        {/* ── FİYAT TABLOSU ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Model Bazlı Fiyat Tablosu
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Orijinal ve muadil parça seçeneği mevcuttur.
            Her ikisi de 6 ay garanti kapsamındadır.
          </p>

          <div className="space-y-4">
            {fiyatTablosu.map((row) => (
              <div
                key={row.model}
                className={`rounded-xl border overflow-hidden bg-graphite-elevated ${
                  row.vurgu
                    ? "border-border-brass ring-1 ring-brass/20"
                    : "border-border-hairline"
                }`}
              >
                {row.vurgu && (
                  <div className="bg-brass-bright text-graphite-base font-jetbrains text-[10px] font-bold
                                  text-center py-1.5 uppercase tracking-[0.22em]">
                    En çok sorulan
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="font-saira font-semibold text-base text-text-primary">
                        {row.model}
                      </div>
                      <div className="font-jetbrains text-xs text-iron-light mt-0.5">{row.tip}</div>
                      <div className="font-saira text-xs text-text-secondary mt-1">{row.araclar}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-jetbrains text-xs text-iron-light mb-0.5">Muadil</div>
                      <div className="font-saira font-semibold text-base text-text-primary">
                        {row.muadil} TL
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border-hairline pt-4 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="font-jetbrains text-xs text-iron-light">Orijinal</div>
                      <div className="font-saira text-sm font-semibold text-text-secondary mt-0.5">
                        {row.orijinal} TL
                      </div>
                    </div>
                    <div className="border-x border-border-hairline">
                      <div className="font-jetbrains text-xs text-iron-light">Süre</div>
                      <div className="font-saira text-sm font-semibold text-text-secondary mt-0.5">
                        {row.sure}
                      </div>
                    </div>
                    <div>
                      <div className="font-jetbrains text-xs text-iron-light">Garanti</div>
                      <div className="font-saira text-sm font-semibold text-brass mt-0.5">
                        {row.garanti}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-jetbrains text-xs text-iron-light mt-4 leading-relaxed">
            * Fiyatlar Nisan 2026 itibarıyla geçerlidir. Döviz kuru ve parça
            temin koşullarına göre değişebilir. Kesin fiyat ücretsiz ön tanı
            sonrası yazılı olarak bildirilir.
          </p>
        </section>

        {/* ── SÜREÇ ────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
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
                    "İşlem sonrası test sürüşü yapıyoruz. 6 ay garanti belgesiyle " +
                    "aracınızı teslim ediyoruz.",
                },
              ].map((adim, i, arr) => (
                <div key={adim.no} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-brass-bright text-graphite-base
                                    font-jetbrains text-xs font-bold flex items-center justify-center
                                    shrink-0">
                      {adim.no}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-white/10 my-1" />
                    )}
                  </div>
                  <div className={`pb-8 ${i === arr.length - 1 ? "pb-0" : ""}`}>
                    <div className="font-saira font-semibold text-text-primary text-sm mb-1">
                      {adim.baslik}
                    </div>
                    <div className="font-saira text-sm text-text-secondary leading-relaxed">
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Kavrama Değişiminde Neler Yapılır?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Sadece aşınan parçayı değiştiriyoruz — gerekmeyeni değil.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <div className="font-jetbrains text-xs font-bold text-iron-light uppercase tracking-wider mb-3">
                Her değişimde yapılanlar
              </div>
              <ul className="space-y-2">
                {[
                  "Kavrama seti (plaket + baskı) değişimi",
                  "Kavrama adaptasyon sıfırlama",
                  "Hata kodları temizleme",
                  "Test sürüşü ve geçiş kalite kontrolü",
                  "6 ay garanti belgesi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-saira text-sm text-text-primary">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-jetbrains text-xs font-bold text-iron-light uppercase tracking-wider mb-3">
                Tanı sonucu gerekliyse eklenenler
              </div>
              <ul className="space-y-2">
                {[
                  "Çift kütleli volan (DMF) değişimi",
                  "Kavrama yatağı değişimi",
                  "Basınç tüpü değişimi",
                  "DSG şanzıman yağı değişimi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-saira text-sm text-text-secondary">
                    <span className="text-text-secondary mt-0.5 shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── ERKEN VS GEÇ ─────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Ne Kadar Erken, O Kadar Az Masraf
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Preserve semantic green/red comparison borders */}
              <div className="bg-graphite-elevated border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-3">
                  Erken müdahale
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  55–65K TL
                </div>
                <div className="font-saira text-sm text-text-secondary mb-4">
                  Sadece kavrama seti
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-1.5">
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

              <div className="bg-graphite-elevated border border-red-200 rounded-xl p-5">
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
                  Geç müdahale
                </div>
                <div className="text-2xl font-bold text-red-600 mb-1">
                  80–130K TL
                </div>
                <div className="font-saira text-sm text-text-secondary mb-4">
                  Kavrama + volant + mekatronik
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-1.5">
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
            Sık Sorulan Sorular
          </h2>
          <TransmissionFaq slug="dsg-kavrama-degisimi" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira font-semibold text-text-primary mb-4">
              Karar vermeden önce
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="block bg-graphite-elevated border border-border-hairline rounded-xl p-4
                           hover:border-border-brass transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Kavrama arızası belirtileri →
                </div>
              </a>
              <a
                href="/rehber/dsg-vuruntu-semptomlari"
                className="block bg-graphite-elevated border border-border-hairline rounded-xl p-4
                           hover:border-border-brass transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG vuruntu neden olur? →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── ANA CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle text-text-primary rounded-2xl p-8">
            <h2 className="font-saira text-2xl font-semibold mb-3 text-center text-text-primary">
              Fiyat almak için getirin
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed text-center">
              Önce ücretsiz ön tanı, sonra net fiyat. Onay vermeden
              hiçbir işlem başlamaz.
            </p>

            {/* Öne çıkan bilgiler */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-graphite-surface border border-border-hairline rounded-lg p-3">
                <div className="font-jetbrains text-sm font-bold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-iron-light mt-0.5">Ön tanı</div>
              </div>
              <div className="bg-graphite-surface border border-border-hairline rounded-lg p-3">
                <div className="font-jetbrains text-sm font-bold text-brass">1–2 gün</div>
                <div className="font-jetbrains text-xs text-iron-light mt-0.5">Teslim</div>
              </div>
              <div className="bg-graphite-surface border border-border-hairline rounded-lg p-3">
                <div className="font-jetbrains text-sm font-bold text-brass">6 ay</div>
                <div className="font-jetbrains text-xs text-iron-light mt-0.5">Garanti</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold
                           px-6 py-3 rounded-full hover:bg-brass transition-colors
                           text-center"
              >
                0532 715 37 51 — Hemen Ara
              </a>
              <a
                href="/iletisim"
                className="inline-block border border-border-subtle text-text-secondary
                           font-saira px-6 py-3 rounded-full hover:border-brass
                           hover:text-text-primary transition-colors text-center"
              >
                Mesaj gönder →
              </a>
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM FORMU ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <h2 className="font-saira text-xl font-semibold text-text-primary mb-6">
            Randevu veya Soru
          </h2>
          <ContactForm />
        </section>

      </main>
    </>
  );
}
