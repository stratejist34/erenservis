import type { Metadata } from "next";
import Link from 'next/link';
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

// ─── META ────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Otomatik Şanzıman Tamiri Ne Kadar Tutar? 2026 Fiyat Rehberi",
  description:
    "DSG kavrama 18.000–35.000 TL, mekatronik kart 8.000–48.000 TL, CVT 5.000–35.000 TL. " +
    "Nisan 2026 güncel fiyat tablosu ve arıza türüne göre rehber — Eren Servis Bostancı.",
  keywords: [
    "otomatik şanzıman tamiri fiyatı",
    "şanzıman tamiri ne kadar",
    "dsg tamiri fiyatı 2026",
    "mekatronik kart fiyatı",
    "cvt tamiri fiyatı",
    "şanzıman değişimi fiyatı",
    "bostancı şanzıman tamiri",
  ],
  openGraph: {
    title: "Otomatik Şanzıman Tamiri Ne Kadar Tutar? 2026 Fiyat Rehberi",
    description:
      "Nisan 2026 güncel fiyatlar: DSG, CVT, ZF ve konvansiyonel şanzıman tamir fiyatları. " +
      "Ücretsiz ön tanı ile net fiyat — Eren Servis Bostancı.",
    url: "https://erenservis.net/rehber/otomatik-sanziman-tamiri-fiyat",
    type: "article",
    publishedTime: "2026-04-01",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://erenservis.net/images/og/otomatik-sanziman-tamiri-fiyat.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzıman Tamiri Fiyatı 2026",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/rehber/otomatik-sanziman-tamiri-fiyat",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const PAGE_URL = "https://erenservis.net/rehber/otomatik-sanziman-tamiri-fiyat";

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzıman Tamiri Ne Kadar Tutar? 2026 Fiyat Rehberi",
  description:
    "Nisan 2026 itibarıyla DSG, CVT, ZF ve konvansiyonel şanzıman tamir fiyatları ve süreleri.",
  url: PAGE_URL,
  datePublished: "2026-04-01",
});

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-tamiri-fiyat"] ?? [];
const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Rehber", url: "https://erenservis.net/rehber" },
  { name: "Otomatik Şanzıman Tamiri Fiyatı", url: PAGE_URL },
]);

// ─── FİYAT VERİSİ ────────────────────────────────────────────────────────────
const fiyatTablosu = [
  {
    tip: "DSG Kavrama Değişimi",
    model: "DQ200 / DQ250",
    aralik: "18.000 – 35.000",
    sure: "1–2 gün",
    not: "Volant hasarı varsa eklenir",
  },
  {
    tip: "DSG Mekatronik Kart",
    model: "Tamir (mümkünse)",
    aralik: "8.000 – 18.000",
    sure: "1 gün",
    not: "Sensör, solenoid, yazılım arızası",
  },
  {
    tip: "DSG Mekatronik Kart",
    model: "Değişim",
    aralik: "28.000 – 48.000",
    sure: "1–2 gün",
    not: "Orijinal veya muadil parça",
  },
  {
    tip: "CVT Şanzıman Tamiri",
    model: "Nissan, Toyota, Subaru",
    aralik: "5.000 – 35.000",
    sure: "1–4 gün",
    not: "Kayış, puli veya valf gövdesi",
  },
  {
    tip: "ZF 8HP Tamiri",
    model: "BMW, Audi, Jaguar, Land Rover",
    aralik: "12.000 – 45.000",
    sure: "2–4 gün",
    not: "Torque konvertör, solenoid, valf gövdesi",
  },
  {
    tip: "Konvansiyonel Şanzıman",
    model: "Mercedes, Aisin",
    aralik: "8.000 – 35.000",
    sure: "1–3 gün",
    not: "Fren bandı, valf gövdesi, yağ değişimi",
  },
  {
    tip: "Şanzıman Yağı Değişimi",
    model: "Tüm modeller",
    aralik: "2.500 – 6.000",
    sure: "2–3 saat",
    not: "DSG, CVT, ZF, ATF yağları",
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function OtomatikSanzimanTamiriFiyatPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-zinc-950 text-white px-4 pt-16 pb-12">
          <div className="max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-xs text-zinc-500 mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-zinc-300 transition-colors">
                Ana Sayfa
              </Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-zinc-300 transition-colors">
                Rehber
              </a>
              <span>/</span>
              <span className="text-zinc-400">Fiyat Rehberi</span>
            </nav>

            {/* Etiket */}
            <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
              Nisan 2026 Güncel
            </span>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              Otomatik Şanzıman Tamiri Ne Kadar Tutar?
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              DSG, CVT, ZF ve konvansiyonel şanzımanlar için 2026 fiyat rehberi. 
              Tamir mi değişim mi? Hata kodu okumadan net fiyat verilemez.
            </p>

            {/* Hızlı özet kartları */}
            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">2.5K</div>
                <div className="text-xs text-zinc-400 mt-1">Başlangıç fiyatı</div>
              </div>
              <div className="text-center border-x border-zinc-800">
                <div className="text-2xl font-bold text-amber-400">48K</div>
                <div className="text-xs text-zinc-400 mt-1">Maksimum değişim</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">Ücretsiz</div>
                <div className="text-xs text-zinc-400 mt-1">Ön tanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÜVEN ŞERİDİ ─────────────────────────────────────────────── */}

        {/* ── GİRİŞ ────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <p className="text-zinc-700 text-base leading-relaxed mb-4">
            Otomatik şanzıman tamiri fiyatları büyük ölçüde arızanın türüne, 
            şanzıman tipine ve araç modeline göre değişir. Aynı vuruntu semptomu 
            kavrama değişimiyle (18.000–35.000 TL) çözülebileceği gibi mekatronik 
            kart değişimiyle (28.000–48.000 TL) de sonuçlanabilir — aradaki fark 
            20.000 TL&apos;nin üzerindedir.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed">
            Bu rehberde Nisan 2026 itibarıyla güncel fiyat aralıklarını ve 
            sürelerini bulacaksınız. Net fiyat için araç getirilip hata kodu 
            okunmalıdır. Eren Servis&apos;te ön tanı ücretsizdir.
          </p>
        </section>

        {/* ── FİYAT TABLOSU ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
            2026 Fiyat Tablosu
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Fiyatlar Nisan 2026 itibarıyla geçerlidir. Döviz kuru ve parça temin 
            koşullarına göre değişebilir.
          </p>

          <div className="space-y-4">
            {fiyatTablosu.map((row, i) => (
              <div
                key={i}
                className="border border-zinc-200 rounded-xl p-5 hover:border-amber-300 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="font-bold text-zinc-900 text-base">
                      {row.tip}
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">{row.model}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-zinc-400 mb-0.5">Fiyat Aralığı</div>
                    <div className="text-lg font-bold text-amber-600">
                      {row.aralik} TL
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-100 pt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-zinc-400">Süre:</span>{" "}
                    <span className="font-medium text-zinc-700">{row.sure}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400">Not:</span>{" "}
                    <span className="text-zinc-600">{row.not}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-400 mt-6 leading-relaxed">
            * Fiyatlar yaklaşık değerlerdir. Arızanın kapsamı, parça seçimi 
            (orijinal/muadil) ve araç durumuna göre değişebilir. Kesin fiyat 
            ücretsiz ön tanı sonrası yazılı olarak bildirilir.
          </p>
        </section>

        {/* ── TAMİR Mİ DEĞİŞİM Mİ ──────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              Tamir mi, Değişim mi Daha Mantıklı?
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              Çoğu durumda tamir önce denenir — mümkünse değişimden 3–4 kat daha ekonomiktir.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">
                  Tamir Önceliği
                </div>
                <div className="text-xl font-bold text-green-700 mb-1">
                  3–4 Kat Tasarruf
                </div>
                <div className="text-sm text-zinc-600 mb-4">
                  Mekatronik kart: 8.000–18.000 TL
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Sensör veya solenoid arızası
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Erken dönem yazılım hatası
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    Kavrama kaynaklı kirlilik
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    1 günde teslim
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                  Değişim Gerekirse
                </div>
                <div className="text-xl font-bold text-zinc-700 mb-1">
                  Kalıcı Çözüm
                </div>
                <div className="text-sm text-zinc-600 mb-4">
                  Mekatronik kart: 28.000–48.000 TL
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5">›</span>
                    Fiziksel kart hasarı
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5">›</span>
                    İleri düzey metal toz kirliliği
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5">›</span>
                    Tamir denemesi başarısız
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-0.5">›</span>
                    1–2 günde teslim
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-amber-800 leading-relaxed">
                <strong>Önemli:</strong> Araç yaşı, kilometre ve hasar kapsamı bu 
                kararı belirler. Tanı olmadan &quot;tamir edilir&quot; veya &quot;değişim gerekir&quot; 
                demek mümkün değildir.
              </p>
            </div>
          </div>
        </section>

        {/* ── TELEFONDA FİYAT ──────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4">
            Neden Telefonda Net Fiyat Veremiyoruz?
          </h2>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            Aynı semptom farklı arızalara işaret edebilir:
          </p>
          <ul className="text-sm text-zinc-600 space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">›</span>
              <strong>Vuruntu:</strong> Kavrama değişimi (18.000–35.000 TL) veya 
              mekatronik kart (28.000–48.000 TL)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">›</span>
              <strong>Kayma:</strong> Kavrama aşınması veya yağ değişimi ihtiyacı
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">›</span>
              <strong>Titreme:</strong> Kavrama, volant veya mekatronik kart
            </li>
          </ul>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Bu yüzden Eren Servis&apos;te ön tanı ücretsizdir. Aracınızı getirin, 
            hata kodunu okuyalım, net fiyatı yazılı bildirelim.
          </p>
        </section>

        {/* ── SÜRELER ───────────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              İşlem Süreleri
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-zinc-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">2–3s</div>
                <div className="text-xs text-zinc-500">Yağ Değişimi</div>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">1–2g</div>
                <div className="text-xs text-zinc-500">Kavrama / Kart</div>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">2–4g</div>
                <div className="text-xs text-zinc-500">ZF / CVT Revizyon</div>
              </div>
              <div className="bg-white border border-zinc-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-amber-600 mb-1">12ay</div>
                <div className="text-xs text-zinc-500">Garanti</div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 mt-4 text-center">
              Süreler parça teminini kapsar. Orijinal parça beklenmesi gerekirse uzayabilir.
            </p>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            Sık Sorulan Sorular
          </h2>
          <TransmissionFaq slug="otomatik-sanziman-tamiri-fiyat" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-base font-semibold text-zinc-900 mb-4">
              İlgili sayfalar
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  DSG Kavrama Değişimi Fiyatı →
                </div>
              </a>
              <a
                href="/hizmetler/dsg-mekatronik-kart"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  DSG Mekatronik Kart Fiyatı →
                </div>
              </a>
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Rehber</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  DSG Kavrama Arıza Belirtileri →
                </div>
              </a>
              <a
                href="/rehber/uyari-lambasi-semptomlari"
                className="block bg-white border border-zinc-200 rounded-xl p-4
                           hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Rehber</div>
                <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                  DSG Uyarı Lambası Yandı →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-zinc-950 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Aracınız için net fiyat alın
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Ücretsiz ön tanı ile başlayalım. Hata kodunu okuyalım, 
              net fiyatı yazılı bildirelim — sürpriz yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-amber-400 text-zinc-950 font-semibold
                           px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
              >
                0532 715 37 51 — Hemen Ara
              </a>
              <a
                href="/hizmetler"
                className="inline-block border border-zinc-700 text-zinc-300 font-medium
                           px-6 py-3 rounded-xl hover:border-zinc-500 hover:text-white
                           transition-colors"
              >
                Tüm hizmetler →
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
