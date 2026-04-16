import type { Metadata } from "next";
import Link from 'next/link';
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

// ─── META ────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DSG Kavrama Arızası Belirtileri | Eren Servis Bostancı",
  description:
    "DSG kavrama arızasının 7 kritik belirtisi: vuruntu, titreme, geç geçiş, koku. " +
    "Bostancı'da ücretsiz ön tanı. DQ200 ve DQ250 uzmanı Eren Servis.",
  keywords: [
    "dsg kavrama arızası belirtileri",
    "dsg kavrama sorunu",
    "dsg vuruntu nedeni",
    "dsg titreme belirtileri",
    "kavrama değişimi ne zaman",
    "dq200 kavrama arızası",
    "otomatik şanzıman kavrama sorunu",
  ],
  openGraph: {
    title: "DSG Kavrama Arızası Belirtileri | Eren Servis Bostancı",
    description:
      "Aracınız vuruntu yapıyor, geç geçiş mi yapıyor? DSG kavrama arızasının " +
      "7 kritik belirtisini öğrenin. Eren Servis Bostancı'da ücretsiz ön tanı.",
    url: "https://erenservis.net/rehber/dsg-kavrama-ariza-belirtileri",
    type: "article",
    publishedTime: "2026-03-30",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://erenservis.net/images/og/dsg-kavrama-ariza.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Kavrama Arızası Belirtileri",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/rehber/dsg-kavrama-ariza-belirtileri",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const PAGE_URL = "https://erenservis.net/rehber/dsg-kavrama-ariza-belirtileri";

const articleSchema = buildArticleSchema({
  title: "DSG Kavrama Arızası Belirtileri: 7 Kritik Uyarı İşareti",
  description:
    "DSG kavrama arızasının erken belirtilerini tanıyın, gereksiz masraftan kaçının.",
  url: PAGE_URL,
  datePublished: "2026-03-30",
});

const faqItems = TRANSMISSION_FAQS["dsg-kavrama-ariza-belirtileri"] ?? [];
const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Rehber", url: "https://erenservis.net/rehber" },
  { name: "DSG Kavrama Arızası Belirtileri", url: PAGE_URL },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Kavrama Arızası Onarımı",
  description:
    "Kavrama balatası değişimi ve DSG revizyonu. Bostancı, İstanbul.",
  url: PAGE_URL,
});

// ─── BELİRTİ VERİSİ ──────────────────────────────────────────────────────────
const belirtiler = [
  {
    no: "01",
    baslik: "Vites geçişinde vuruntu veya sarsıntı",
    aciklama:
      "Özellikle 1→2 ve 2→3 vites geçişlerinde araç sanki hafifçe öne atlar ya da takılır. " +
      "Soğuk havalarda veya uzun süre park sonrası ilk kalkışta daha belirgindir.",
    aciliyet: "yüksek",
  },
  {
    no: "02",
    baslik: "Düşük hızda titreme",
    aciklama:
      "Şehir içi trafikte, 20–40 km/s aralığında araç hafif titrer. Motor değil, " +
      "aktarma organlarından gelen titreşim hissi. Kavrama plaketleri aşınmaya başladığının " +
      "erken işareti.",
    aciliyet: "yüksek",
  },
  {
    no: "03",
    baslik: "Geç veya sert geçiş",
    aciklama:
      "Gaz pedalına basıldığında araç geç tepki verir, sonra sert bir şekilde vitese girer. " +
      "Kronikleşirse kavrama ile birlikte mekatronik kart da hasar görebilir.",
    aciliyet: "yüksek",
  },
  {
    no: "04",
    baslik: "Hareket ederken kayma hissi",
    aciklama:
      "Motor devrinin yükselmesine karşın aracın hızlanamaması. Motor ses olarak bağırırken " +
      "araba sanki yük taşır gibi ağır ilerler. İleri düzey kavrama aşınmasının işareti.",
    aciliyet: "kritik",
  },
  {
    no: "05",
    baslik: "Yanık koku",
    aciklama:
      "Özellikle trafik sıkışıklığında veya eğimli yollarda içeriden gelen yanık koku. " +
      "Kavrama plaketlerinin aşırı ısındığını gösterir. Bu noktada hasar çok hızlı ilerler.",
    aciliyet: "kritik",
  },
  {
    no: "06",
    baslik: "DSG uyarı lambası",
    aciklama:
      "Göstergede sarı veya turuncu şanzıman/dişli simgesi yanıyorsa araç sorunu " +
      "mekatronik kart üzerinden kayıt altına almıştır. Hata kodu okunmadan yorum yapılamaz.",
    aciliyet: "kritik",
  },
  {
    no: "07",
    baslik: "Geri vitese gecikmeli geçiş",
    aciklama:
      "Park konumundan R'ye aldığınızda araç 2–4 saniye gecikmeyle hareket eder ya da " +
      "hafif bir vuruntu ile girer. Soğuk havada daha belirgindir. Kuru kavrama " +
      "(DQ200) arızasında sıkça görülür.",
    aciliyet: "orta",
  },
];

const aciliyetRenk: Record<string, string> = {
  kritik: "bg-red-50 border-red-200 text-red-700",
  yüksek: "bg-amber-50 border-amber-200 text-amber-700",
  orta: "bg-blue-50 border-blue-200 text-blue-700",
};

const aciliyetEtiket: Record<string, string> = {
  kritik: "Kritik",
  yüksek: "Yüksek öncelik",
  orta: "Takip et",
};

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function DsgKavramaArizaBelirtileriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [articleSchema, faqSchema, breadcrumbSchema, serviceSchema],
          }),
        }}
      />

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="max-w-2xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">
                Ana Sayfa
              </Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-text-primary transition-colors">
                Rehber
              </a>
              <span>/</span>
              <span className="text-text-secondary">DSG Kavrama Arızası</span>
            </nav>

            {/* Etiket */}
            <span className="inline-block font-jetbrains text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri
            </span>

            {/* H1 */}
            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Kavrama Arızası Belirtileri
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Aracınızda vuruntu, titreme veya geç geçiş mi var? Bu 7 belirti
              DSG kavrama arızasının erken habercisidir. Erken tanı, gereksiz
              masrafı önler.
            </p>

            {/* Hızlı özet kartları */}
            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">7</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Kritik belirti</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">%80</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">
                  Vuruntu = kavrama
                </div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">
                  Ücretsiz
                </div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ön tanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GİRİŞ ────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            DSG şanzımanlar kuru veya ıslak kavrama kullanır. Zamanla kavrama
            plaketleri aşınır, bu tamamen normaldir. Sorun şu: kavrama arızaları
            sessiz başlar ve çoğu sürücü belirtileri &ldquo;arabanın özelliği&rdquo; sanır.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Oysa erken dönemde fark edilen bir kavrama sorunu yalnızca kavrama
            değişimiyle çözülür. Geciktirilirse kavrama aşınan metal tozları
            mekatronik karta ulaşır — fatura iki katına çıkar. Aşağıdaki
            belirtilerden birini yaşıyorsanız ücretsiz ön tanı için
            getirmenizi öneririz.
          </p>

          {/* İç link — money page */}
          <div className="mt-6 p-4 bg-graphite-surface border border-border-brass rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              <strong>Belirtiler tanıdık geldi mi?</strong>{" "}
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="text-brass underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                DSG kavrama değişimi fiyatlarını ve sürecini görün →
              </a>
            </p>
          </div>
        </section>

        {/* ── BELİRTİLER ───────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            7 Kritik Belirti
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Birden fazlası varsa, tanıyı ertelemeyin.
          </p>

          <div className="space-y-4">
            {belirtiler.map((b) => (
              <div
                key={b.no}
                className={`border rounded-xl p-5 ${aciliyetRenk[b.aciliyet]}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-jetbrains text-xs font-bold opacity-50">
                      {b.no}
                    </span>
                    <h3 className="font-saira font-semibold text-sm sm:text-base">
                      {b.baslik}
                    </h3>
                  </div>
                  <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-white/60 border border-current/20">
                    {aciliyetEtiket[b.aciliyet]}
                  </span>
                </div>
                <p className="font-saira text-sm leading-relaxed opacity-90 ml-7">
                  {b.aciklama}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MODELe GÖRE FARK ─────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              DQ200 ve DQ250&apos;de Farklı Davranış
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Aynı belirti, farklı modelde farklı anlam taşır.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* DQ200 */}
              <div className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                  DQ200 — Kuru Kavrama
                </div>
                <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                  Golf, Polo, A3, Leon
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Sabah ilk kalkışta vuruntu çok belirgin
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Sıvı değişiminin kavramaya etkisi yok
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Gecikme = mekatronik kart riski
                  </li>
                </ul>
              </div>

              {/* DQ250 */}
              <div className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                  DQ250 — Islak Kavrama
                </div>
                <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                  Passat, A4, Octavia, Tiguan
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Kayma hissi ön plana çıkar
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Erken dönemde sıvı değişimi yardımcı olabilir
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brass mt-0.5">›</span>
                    Volant hasarı DQ200&apos;e göre daha sık
                  </li>
                </ul>
              </div>
            </div>

            <p className="font-jetbrains text-xs text-iron-light mt-4 text-center">
              Aracınızın modelini bilmiyorsanız{" "}
              <a
                href="/iletisim"
                className="underline underline-offset-2 hover:text-text-secondary transition-colors"
              >
                bize sorun
              </a>
              , 2 dakikada öğrenelim.
            </p>
          </div>
        </section>

        {/* ── GECİKMENİN MALİYETİ ──────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
            Erken vs. Geç Müdahale
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* PRESERVED — semantic comparison green card */}
            <div className="border border-green-200 bg-green-50 rounded-xl p-5">
              <div className="text-xs font-bold text-green-700 uppercase tracking-wider mb-3">
                Erken müdahale
              </div>
              <div className="text-2xl font-bold text-green-700 mb-1">
                18–35K TL
              </div>
              <div className="text-sm text-green-800">
                Sadece kavrama seti değişimi
              </div>
              <ul className="text-sm text-green-700 mt-4 space-y-1">
                <li>✓ 1 gün işlem</li>
                <li>✓ Volant korunmuş</li>
                <li>✓ Mekatronik sağlıklı</li>
              </ul>
            </div>

            {/* PRESERVED — semantic comparison red card */}
            <div className="border border-red-200 bg-red-50 rounded-xl p-5">
              <div className="text-xs font-bold text-red-700 uppercase tracking-wider mb-3">
                Geç müdahale
              </div>
              <div className="text-2xl font-bold text-red-700 mb-1">
                45–80K TL
              </div>
              <div className="text-sm text-red-800">
                Kavrama + volant + mekatronik
              </div>
              <ul className="text-sm text-red-700 mt-4 space-y-1">
                <li>✗ 2–3 gün işlem</li>
                <li>✗ Volant hasarlı</li>
                <li>✗ Mekatronik kirlenmiş</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-kavrama-ariza-belirtileri" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ─────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              İlgili Rehberler
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/rehber/otomatik-sanziman-sarsinti"
                className="sm:col-span-2 block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Sarsıntı: 4 Kaynak ve Ayırt Etme →
                </div>
              </a>
              <a
                href="/rehber/volant-titresim"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Volant</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Çift Kütleli Volant Titreşimi Detayı →
                </div>
              </a>
              <a
                href="/rehber/otomatik-sanziman-vuruntu"
                className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Vuruntu</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Vuruntu Rehberi →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Belirtilerden biri tanıdık geldi mi?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Aracınızı getirin, ücretsiz ön tanı yapalım. Sorun varsa net fiyat
              verelim — sürpriz fatura yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold
                           px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                Hemen Ara
              </a>
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium
                           px-6 py-3 rounded-full hover:border-brass hover:text-text-primary
                           transition-colors"
              >
                Kavrama değişimi fiyatları →
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
