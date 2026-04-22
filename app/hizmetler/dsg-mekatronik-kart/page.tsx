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
  title: "DSG Mekatronik Kart Fiyatı 2026 | Eren Servis Bostancı",
  description:
    "DSG mekatronik kart değişimi ve tamiri 2026 fiyatları: DQ200 45.000–58.000 TL, " +
    "DQ250 55.000–68.000 TL. Bostancı'da garantili işlem, ücretsiz ön tanı — Eren Servis.",
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
    url: "https://www.erenservis.net/hizmetler/dsg-mekatronik-kart/",
    type: "website",
  },
  alternates: {
    canonical: "https://www.erenservis.net/hizmetler/dsg-mekatronik-kart/",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-mekatronik-kart"] ?? [];

const serviceSchema = buildServiceSchema({
  name: "DSG Mekatronik Kart Değişimi ve Tamiri",
  description:
    "DQ200 ve DQ250 DSG şanzıman mekatronik kart değişimi ve tamiri. " +
    "Hata kodu bazlı tanı, orijinal ve muadil parça seçeneği, garantili işlem.",
  url: "https://www.erenservis.net/hizmetler/dsg-mekatronik-kart/",
  priceRange: "45.000 – 68.000 TL",
  minPrice: 45000,
  maxPrice: 68000,
  areaServed: ["Bostancı", "Kadıköy", "Üsküdar", "Maltepe", "İstanbul"],
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Hizmetler", url: "https://www.erenservis.net/hizmetler/" },
  {
    name: "DSG Mekatronik Kart",
    url: "https://www.erenservis.net/hizmetler/dsg-mekatronik-kart/",
  },
]);

// ─── FİYAT VERİSİ ─────────────────────────────────────────────────────────────
const fiyatTablosu = [
  {
    model: "DQ200",
    tip: "7 ileri kuru kavrama mekatroniği",
    araclar: "Golf 6/7, Polo, A3 8V, Fabia, Leon",
    tamir: "14.000 – 20.000",
    degisim: "45.000 – 58.000",
    sure: "1–2 gün",
    garanti: "6 ay",
    vurgu: true,
  },
  {
    model: "DQ250",
    tip: "6 ileri ıslak kavrama mekatroniği",
    araclar: "Passat B7/B8, A4, Tiguan, Octavia, Superb",
    tamir: "18.000 – 25.000",
    degisim: "55.000 – 68.000",
    sure: "1–2 gün",
    garanti: "6 ay",
    vurgu: false,
  },
  {
    model: "DQ381",
    tip: "7 ileri kuru kavrama — yeni nesil",
    araclar: "Golf 8, Tiguan 2, Passat B9, Arteon",
    tamir: "Tanı gerekli",
    degisim: "65.000 – 80.000",
    sure: "2 gün",
    garanti: "6 ay",
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

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface text-text-primary px-4 pt-16 pb-12 border-b border-white/5">
          <div className="max-w-2xl mx-auto">

            <nav className="font-jetbrains text-xs text-iron-light mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-secondary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/hizmetler" className="hover:text-text-secondary transition-colors">Hizmetler</a>
              <span>/</span>
              <span className="text-text-secondary">DSG Mekatronik Kart</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-medium tracking-[0.22em]
                             uppercase text-brass mb-4">
              Hizmet — Nisan 2026 Güncel Fiyat
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Mekatronik Kart Fiyatı 2026
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl font-bold text-brass">45.000</span>
              <span className="text-xl text-text-secondary">–</span>
              <span className="text-4xl font-bold text-brass">68.000</span>
              <span className="font-saira text-lg text-text-secondary">TL</span>
            </div>
            <p className="font-saira text-text-secondary text-sm mb-2">
              Değişim fiyatı. Tamir imkânı varsa{" "}
              <span className="text-brass font-medium">14.000 – 25.000 TL</span>&apos;ye
              çözülebilir — tanı olmadan söylemek mümkün değil.
            </p>
            <p className="font-jetbrains text-iron-light text-xs mb-8">
              Model, parça seçimi ve arıza kapsamına göre değişir.
              Ücretsiz ön tanı sonrası net fiyat verilir.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-jetbrains text-lg font-bold text-brass">Tamir</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Mümkünse önce dene</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-jetbrains text-lg font-bold text-brass">6 ay</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Garanti</div>
              </div>
              <div className="text-center">
                <div className="font-jetbrains text-lg font-bold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-iron-light mt-1">Hata kodu okuma</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÖRSEL — Atmosfer / kanıt katmanı ───────────────────────── */}
        <div className="mt-8 relative w-full h-72 sm:h-96 overflow-hidden bg-graphite-elevated">
          <Image
            src="/images/part2/Screenshot_83.webp"
            alt="Wolf's Tech DSG mekatronik onarım kiti ve solenoid valfi — Eren Servis Bostancı"
            fill
            className="object-cover object-top brightness-[0.73] saturate-[0.6]"
            sizes="100vw"
            priority
          />
          <div aria-hidden="true" className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.25))' }} />
        </div>

        {/* ── STICKY CTA mobil ─────────────────────────────────────────── */}
        <div className="sticky top-0 z-40 bg-graphite-base border-b border-border-hairline
                        px-4 py-3 flex items-center justify-between
                        shadow-sm sm:hidden">
          <div>
            <div className="font-jetbrains text-xs text-iron-light">Mekatronik Kart — Nisan 2026</div>
            <div className="font-saira text-sm font-semibold text-text-primary">45.000 – 68.000 TL</div>
          </div>
          <a
            href="tel:+905327153751"
            className="bg-brass-bright text-graphite-base font-saira font-semibold
                       text-sm px-4 py-2 rounded-full hover:bg-brass transition-colors"
          >
            Ara
          </a>
        </div>

        {/* ── TAMİR Mİ DEĞİŞİM Mİ ─────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Tamir mi, Değişim mi?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Bu sorunun cevabı hata koduna ve hasar kapsamına göre değişir.
            Her mekatronik kart değişim gerektirmez.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {/* Tamir — preserve semantic green */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="text-xs font-bold text-green-700 uppercase
                              tracking-wider mb-3">
                Tamir mümkün
              </div>
              <div className="text-xl font-bold text-green-700 mb-3">
                14.000 – 25.000 TL
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
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
            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-bold text-iron-light uppercase
                              tracking-wider mb-3">
                Değişim gerekli
              </div>
              <div className="font-saira text-xl font-semibold text-text-secondary mb-3">
                45.000 – 68.000 TL
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                {[
                  "Mekatronik kart yanmış veya kırık",
                  "Metal toz kirliliği — kart içi hasar",
                  "Geç müdahale sonucu ilerlemiş arıza",
                  "Tamir denemesi başarısız olmuş kart",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-text-secondary mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Preserve amber callout — keeps editorial intent */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Önemli:</strong> Hata kodu okumadan &quot;mekatronik kart lazım&quot;
              diyen servise dikkat edin. Eren Servis&apos;te tanı olmadan parça
              önerisi yapılmaz — önce okuma, sonra karar.
            </p>
          </div>
        </section>

        {/* ── FİYAT TABLOSU ────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Model Bazlı Fiyat Tablosu
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Nisan 2026 güncel fiyatlar. Döviz kuru değişimlerine
              göre güncellenir.
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
                        <div className="font-jetbrains text-xs text-iron-light mt-0.5">
                          {row.tip}
                        </div>
                        <div className="font-saira text-xs text-text-secondary mt-1">
                          {row.araclar}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-jetbrains text-xs text-iron-light mb-0.5">
                          Değişim
                        </div>
                        <div className="font-saira font-semibold text-base text-text-primary">
                          {row.degisim} TL
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border-hairline pt-4 grid grid-cols-3
                                    gap-3 text-center">
                      <div>
                        <div className="font-jetbrains text-xs text-iron-light">Tamir</div>
                        <div className="font-saira text-sm font-semibold text-green-600 mt-0.5">
                          {row.tamir} TL
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
              * Fiyatlar Nisan 2026 itibarıyla geçerlidir. Döviz kuru ve
              parça temin koşullarına bağlı olarak değişebilir. Kesin fiyat
              ücretsiz ön tanı sonrası yazılı olarak bildirilir.
            </p>
          </div>
        </section>

        {/* ── KAVRAMA BAĞLANTISI ────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-4">
            Mekatronik Arızasının Sık Görülen Nedeni: Kavrama
          </h2>
          <p className="font-saira text-text-secondary text-sm leading-relaxed mb-4">
            DSG mekatronik kart arızalarının önemli bir kısmı doğrudan
            elektriksel değil, kavrama kökenlidir. Aşınan kavrama plaketlerinden
            çıkan metal tozları şanzıman yağına karışır ve zamanla mekatronik
            kartın sensör ve{' '}
            <Link href="/rehber/solenoid-valf-ariza-belirtileri/" className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors">
              solenoid valflerine
            </Link>{' '}
            ulaşır — bu aşamadan sonra P189C veya P0841 kodlarının çıkması şaşırtıcı değildir.
          </p>
          <p className="font-saira text-text-secondary text-sm leading-relaxed mb-6">
            Bu durumda yalnızca mekatronik kart değiştirmek sorunu çözmez —
            kavrama da değişmediyse yeni kart tekrar kirlenir. Tanı aşamasında
            her iki sistem birlikte değerlendirilir.
          </p>
          <a
            href="/rehber/dsg-kavrama-ariza-belirtileri"
            className="inline-flex items-center gap-2 font-saira text-sm font-medium
                       text-brass hover:underline transition-colors"
          >
            Kavrama arızası belirtilerini öğrenin →
          </a>
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
                    "test sürüşü yapılıyor. 6 ay garanti belgesiyle teslim.",
                },
              ].map((adim, i, arr) => (
                <div key={adim.no} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-brass-bright
                                    text-graphite-base font-jetbrains text-xs font-bold
                                    flex items-center justify-center shrink-0">
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
          <TransmissionFaq slug="dsg-mekatronik-kart" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira font-semibold text-text-primary mb-4">
              İlgili sayfalar
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/rehber/solenoid-valf-ariza-belirtileri/",
                  tip: "Rehber",
                  baslik: "Solenoid valf arıza belirtileri →",
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
                  className="block bg-graphite-elevated border border-border-hairline rounded-xl p-4
                             hover:border-border-brass
                             transition-all group"
                >
                  <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">
                    {link.tip}
                  </div>
                  <div className="font-saira text-sm font-semibold text-text-primary
                                  group-hover:text-brass transition-colors">
                    {link.baslik}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANA CTA ──────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle text-text-primary rounded-2xl p-8">
            <h2 className="font-saira text-2xl font-semibold mb-3 text-center text-text-primary">
              Mekatronik kart mı, başka bir şey mi?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed text-center">
              Ücretsiz hata kodu okuma ile başlayalım. Ne olduğunu net
              söyleriz — onayınız olmadan hiçbir işlem yapılmaz.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-6 text-center">
              <div className="bg-graphite-surface border border-border-hairline rounded-lg p-3">
                <div className="font-jetbrains text-sm font-bold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-iron-light mt-0.5">Hata kodu okuma</div>
              </div>
              <div className="bg-graphite-surface border border-border-hairline rounded-lg p-3">
                <div className="font-jetbrains text-sm font-bold text-brass">Net fiyat</div>
                <div className="font-jetbrains text-xs text-iron-light mt-0.5">Sürpriz yok</div>
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
                           px-6 py-3 rounded-full hover:bg-brass
                           transition-colors text-center"
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
