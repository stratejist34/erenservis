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
  title: "DSG Volant Kavrama Paketi Fiyatı 2026 | Eren Servis Bostancı",
  description:
    "DQ200 volant + kavrama kombo paketi 2026. Orijinal parçayla 80.000–95.000 TL, " +
    "muadille 62.000–72.000 TL. İkisini aynı anda değiştirmek işçilik tasarrufu sağlar. Bostancı.",
  keywords: [
    "dsg volant kavrama paketi",
    "dsg volant fiyatı 2026",
    "dq200 volant değişimi",
    "dsg kavrama volant kombo",
    "çift kütleli volan değişimi fiyatı",
    "dsg volant kavrama bostancı",
  ],
  openGraph: {
    title: "DSG Volant Kavrama Paketi Fiyatı 2026 | Eren Servis Bostancı",
    description:
      "DQ200 volant + kavrama kombo 80.000–95.000 TL. " +
      "İkisi ayrı yapılsaydı işçilik iki kez ödenirdi. Garantili, ücretsiz ön tanı.",
    url: "https://erenservis.net/hizmetler/dsg-volant-kavrama-paketi/",
    type: "website",
  },
  alternates: {
    canonical: "https://erenservis.net/hizmetler/dsg-volant-kavrama-paketi/",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-volant-kavrama-paketi"] ?? [];

const serviceSchema = buildServiceSchema({
  name: "DSG Volant ve Kavrama Paketi",
  description:
    "DQ200 DSG şanzımanlarda çift kütleli volan (DMF) ve kavrama seti kombo değişimi. " +
    "Tek seferlik işçilikle her iki parça değiştirilir. Orijinal ve muadil seçeneği, 6 ay garanti.",
  url: "https://erenservis.net/hizmetler/dsg-volant-kavrama-paketi/",
  priceRange: "62.000 – 95.000 TL",
  minPrice: 62000,
  maxPrice: 95000,
  areaServed: ["Bostancı", "Kadıköy", "Üsküdar", "Maltepe", "İstanbul"],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Hizmetler", url: "https://erenservis.net/hizmetler/" },
  {
    name: "DSG Volant Kavrama Paketi",
    url: "https://erenservis.net/hizmetler/dsg-volant-kavrama-paketi/",
  },
]);

// ─── FİYAT VERİSİ ─────────────────────────────────────────────────────────────
const fiyatTablosu = [
  {
    model: "DQ200 — Kavrama Tek",
    tip: "Sadece kavrama seti (volant sağlam)",
    araclar: "Golf 6/7, Polo, A3 8V, Fabia, Leon",
    orijinal: "55.000 – 65.000",
    muadil: "38.000 – 46.000",
    sure: "1 gün",
    garanti: "6 ay",
    vurgu: false,
  },
  {
    model: "DQ200 — Volant + Kavrama",
    tip: "Kombo paket — tek işçilikle her ikisi",
    araclar: "Volant hasar tespiti sonrası önerilir",
    orijinal: "80.000 – 95.000",
    muadil: "62.000 – 72.000",
    sure: "1–2 gün",
    garanti: "6 ay",
    vurgu: true,
  },
  {
    model: "DQ250 — Kavrama + Volant",
    tip: "Islak kavrama + volant kombo",
    araclar: "Passat B7/B8, A4, Tiguan, Octavia",
    orijinal: "85.000 – 105.000",
    muadil: "68.000 – 82.000",
    sure: "1–2 gün",
    garanti: "6 ay",
    vurgu: false,
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function DsgVolantKavramaPaketiPage() {
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

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface text-text-primary px-4 pt-16 pb-12 border-b border-white/5">
          <div className="max-w-2xl mx-auto">

            <nav className="font-jetbrains text-xs text-iron-light mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-secondary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/hizmetler/" className="hover:text-text-secondary transition-colors">Hizmetler</Link>
              <span>/</span>
              <span className="text-text-secondary">DSG Volant Kavrama Paketi</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-medium tracking-[0.22em] uppercase text-brass mb-4">
              Kombo Paket — Nisan 2026 Güncel Fiyat
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Volant + Kavrama Paketi Fiyatı 2026
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-brass">62.000</span>
              <span className="text-xl text-text-secondary">–</span>
              <span className="text-4xl font-bold text-brass">95.000</span>
              <span className="font-saira text-lg text-text-secondary">TL</span>
            </div>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Model ve parça seçimine göre değişir. İkisini aynı anda değiştirmek,
              ikinci kez işçilik ödemeyi önler. Ücretsiz ön tanı sonrası net fiyat verilir.
            </p>

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

        {/* ── MOBİL STICKY CTA ─────────────────────────────────────────── */}
        <div className="sticky top-0 z-40 bg-graphite-base border-b border-border-hairline
                        px-4 py-3 flex items-center justify-between
                        shadow-sm sm:hidden">
          <div>
            <div className="font-jetbrains text-xs text-iron-light">Volant + Kavrama Paketi</div>
            <div className="font-saira text-sm font-semibold text-text-primary">62.000 – 95.000 TL</div>
          </div>
          <a
            href="tel:+905327153751"
            className="bg-brass-bright text-graphite-base font-saira font-semibold
                       text-sm px-4 py-2 rounded-full hover:bg-brass transition-colors"
          >
            Ara
          </a>
        </div>

        {/* ── NEDEN KOMBO? ─────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Neden İkisini Birlikte Değiştirmelisiniz?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            DSG şanzıman sökülmüşken volant kontrolü zorunludur — bu fırsatı kaçırmak ileride daha pahalıya mal olur.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-graphite-elevated border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-bold text-brass uppercase tracking-wider mb-3">
                Kombo yapılırsa
              </div>
              <ul className="space-y-2.5">
                {[
                  "Şanzıman bir kez indirilir — işçilik yarı fiyat",
                  "Volant ve kavrama birlikte sıfırlanır",
                  "3 ay içinde tekrar aynı sorun çıkmaz",
                  "6 ay garanti her iki parçayı kapsar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-saira text-sm text-text-primary">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-graphite-elevated border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-bold text-iron-light uppercase tracking-wider mb-3">
                Ayrı ayrı yapılırsa
              </div>
              <ul className="space-y-2.5">
                {[
                  "İşçilik iki kez ödenir — 8.000–15.000 TL fazla",
                  "Hasarlı volantla yeni kavrama 3 ayda biter",
                  "İkinci sökme-takma ek risk taşır",
                  "Toplam maliyet komboya göre %20 daha fazla",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-saira text-sm text-text-secondary">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FİYAT TABLOSU ────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Model Bazlı Fiyat Tablosu
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Orijinal ve muadil parça seçeneği mevcuttur. Her ikisi de 6 ay garanti kapsamındadır.
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
                      Önerilen — işçilik tasarrufu
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
              * Fiyatlar Nisan 2026 itibarıyla geçerlidir. Kesin fiyat ücretsiz ön tanı
              sonrası yazılı olarak bildirilir.
            </p>
          </div>
        </section>

        {/* ── VOLAT HASARI BELİRTİLERİ ─────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Volant Hasarı Belirtileri
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Bu belirtilerden birini fark ederseniz volant kontrolü zorunludur.
          </p>

          <div className="bg-graphite-elevated border border-border-hairline rounded-xl p-6">
            <ul className="space-y-3">
              {[
                "Kalkışta veya rölantide şanzımandan titreme veya vuruntu",
                "Kavrama pedalında metalik ses ya da sert hissiyat",
                "Vites geçişlerinde darbe hissi — özellikle 1→2",
                "Motor ile şanzıman arası titreşim kokusuyla birlikte kötü koku",
                "Daha önce kavrama değişimi yapıldı ama şikayet geçmedi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-saira text-sm text-text-primary">
                  <span className="text-brass mt-0.5 shrink-0 font-bold">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
                  baslik: "Ücretsiz ön tanı ve volant kontrolü",
                  detay:
                    "Aracı getirin, hata kodu okuyoruz ve volant titreşimini test ediyoruz. " +
                    "Bu aşama tamamen ücretsizdir.",
                },
                {
                  no: "02",
                  baslik: "Net teklif — volant şart mı değil mi?",
                  detay:
                    "Tanı sonrası volantın değiştirilmesi gerekip gerekmediğini net olarak bildiriyoruz. " +
                    "Gerekmiyorsa sadece kavrama önerilir — fazla iş yapmıyoruz.",
                },
                {
                  no: "03",
                  baslik: "Onayınızla başlıyoruz",
                  detay:
                    "Sabit fiyat teklifi yazılı olarak sunulur. Onay vermeden tek parça sökülmez.",
                },
                {
                  no: "04",
                  baslik: "Adaptasyon ve teslim",
                  detay:
                    "Değişim sonrası kavrama adaptasyonu sıfırlanır, test sürüşü yapılır. " +
                    "6 ay garanti belgesiyle teslim.",
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

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
            Sık Sorulan Sorular
          </h2>
          <TransmissionFaq slug="dsg-volant-kavrama-paketi" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira font-semibold text-text-primary mb-4">
              İlgili sayfalar
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/hizmetler/dsg-kavrama-degisimi/"
                className="block bg-graphite-elevated border border-border-hairline rounded-xl p-4
                           hover:border-border-brass transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG Kavrama Değişimi Fiyatı →
                </div>
              </Link>
              <Link
                href="/blog/dsg-vuruntu-semptomlari/"
                className="block bg-graphite-elevated border border-border-hairline rounded-xl p-4
                           hover:border-border-brass transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Blog</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG Vuruntu Belirtileri →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── ANA CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle text-text-primary rounded-2xl p-8">
            <h2 className="font-saira text-2xl font-semibold mb-3 text-center text-text-primary">
              Volant kontrolü yaptırmak için getirin
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed text-center">
              Ücretsiz ön tanıda volantın değişmesi gerekip gerekmediğini tespit ediyoruz.
              Onay vermeden tek parça sökülmez.
            </p>

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
                           px-6 py-3 rounded-full hover:bg-brass transition-colors text-center"
              >
                0532 715 37 51 — Hemen Ara
              </a>
              <a
                href="/iletisim/"
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
