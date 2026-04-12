import type { Metadata } from "next";
import Link from 'next/link';
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  schemaToString,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

// ─── META ─────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DSG Şanzıman Ömrü ve Bakım Rehberi | Eren Servis Bostancı",
  description:
    "DSG şanzıman ömrü nasıl uzatılır? DQ200 vs DQ250 karşılaştırması, bakım takvimi " +
    "ve kullanım hataları. Bostancı Eren Servis'te profesyonel DSG bakımı.",
  keywords: [
    "dsg şanzıman ömrü",
    "dsg bakımı ne zaman yapılır",
    "dq200 ömrü",
    "dq250 ömrü",
    "dsg yağ değişimi",
    "dsg şanzıman kaç km dayanır",
    "dsg şanzıman bakım takvimi",
  ],
  openGraph: {
    title: "DSG Şanzıman Ömrü: Kaç KM Dayanır? | Eren Servis Bostancı",
    description:
      "DQ200 ve DQ250 ömür karşılaştırması, bakım aralıkları ve ömrü uzatmanın 3 yolu. " +
      "Bostancı'da ücretsiz ön tanı.",
    url: "https://erenservis.net/rehber/dsg-sanziman-omru-bakimi",
    type: "article",
    publishedTime: "2026-04-10",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://erenservis.net/images/og/dsg-sanziman-omru.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Şanzıman Ömrü ve Bakım Rehberi",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/rehber/dsg-sanziman-omru-bakimi",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-sanziman-omru-bakimi"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Şanzıman Ömrü: Performansı Koruma ve Bakım Rehberi",
  description:
    "DSG şanzıman ömrünü belirleyen faktörler, DQ200 vs DQ250 karşılaştırması, " +
    "bakım takvimi ve ömrü uzatmanın yolları.",
  url: "https://erenservis.net/rehber/dsg-sanziman-omru-bakimi",
  datePublished: "2026-04-10",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Rehber", url: "https://erenservis.net/rehber" },
  {
    name: "DSG Şanzıman Ömrü ve Bakım",
    url: "https://erenservis.net/rehber/dsg-sanziman-omru-bakimi",
  },
]);

// ─── VERİ ─────────────────────────────────────────────────────────────────────
const bakimAdimlar = [
  {
    km: "60.000 KM",
    islem: "Şanzıman Yağı ve Filtre Değişimi",
    aciklama:
      "Islak tip şanzımanlarda yağın özelliğini yitirmesi vites geçişlerini sertleştirir " +
      "ve aşınmayı artırır. En kritik bakım kalemidir.",
  },
  {
    km: "20.000 KM",
    islem: "Adaptasyon Kalibrasyonu",
    aciklama:
      "Yazılımsal kalibrasyon ile kavramanın aşınma payı optimize edilerek vites geçiş " +
      "kalitesi korunur. Yoğun kullanımda daha sık yapılmalıdır.",
  },
  {
    km: "80.000 KM",
    islem: "Mekatronik Filtre Kontrolü",
    aciklama:
      "Hidrolik sistemin temizliği, en pahalı parça olan mekatroniğin arıza riskini " +
      "minimize eder. Metal talaşı birikimi erken yakalanır.",
  },
  {
    km: "100.000 KM",
    islem: "Kavrama Seti Aşınma Testi",
    aciklama:
      "Kavramanın kaçırma yapıp yapmadığı bilgisayarlı sistemlerle ölçülerek erken " +
      "önlem alınır — geç kalınırsa volant hasarı da eklenir.",
  },
];

const hatalar = [
  {
    baslik: "Sürünme (Creeping) Modu",
    aciklama:
      "Yoğun trafikte freni tam bırakmadan aracın yavaşça gitmesine izin vermek kavramayı " +
      "hızla ısıtır. DQ200 kuru kavramanın en büyük düşmanı budur.",
  },
  {
    baslik: "Ani ve Sert Kalkışlar",
    aciklama:
      "Sürekli tam gaz kalkışlar dişli grubuna ve mekatronik basınç tüpüne aşırı yük " +
      "bindirir. Kavrama ömrünü yarıya indirebilir.",
  },
  {
    baslik: "D Konumunda Uzun Bekleme",
    aciklama:
      "Uzun süreli beklemelerde vitesi D konumunda tutmak hidrolik sistemde gereksiz " +
      "basınç oluşturur. N konumuna almak yeterlidir.",
  },
  {
    baslik: "Yanlış Yağ Seçimi",
    aciklama:
      "Fabrika onaylı olmayan şanzıman yağları sızdırmazlık elemanlarına zarar vererek " +
      "ömrü kısaltır. Orijinal spesifikasyon şarttır.",
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function DsgSanzimanOmruBakimiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToString(articleSchema) }}
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
              <a href="/rehber" className="hover:text-zinc-300 transition-colors">Rehber</a>
              <span>/</span>
              <span className="text-zinc-400">DSG Şanzıman Ömrü ve Bakım</span>
            </nav>

            <span className="inline-block text-xs font-medium tracking-widest uppercase text-amber-400 mb-4">
              Bakım Rehberi
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              DSG Şanzıman Ömrü: Performansı Koruma ve Bakım Rehberi
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              DSG şanzımanların kullanım ömrünü belirleyen en kritik faktörler
              periyodik bakım ve doğru sürüş alışkanlıklarıdır. Bostancı merkezli
              servisimizde şanzıman sağlığınızı en üst seviyede tutuyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-zinc-800 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">250K+</div>
                <div className="text-xs text-zinc-400 mt-1">Hedef ömür (km)</div>
              </div>
              <div className="text-center border-x border-zinc-800">
                <div className="text-2xl font-bold text-amber-400">%40</div>
                <div className="text-xs text-zinc-400 mt-1">Bakımla ömür artışı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">60K</div>
                <div className="text-xs text-zinc-400 mt-1">Yağ değişim aralığı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GÜVEN ŞERİDİ ─────────────────────────────────────────────── */}

        {/* ── GİRİŞ + HIZLI CEVAP ─────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              DSG şanzıman ömrü, düzenli yağ değişimi ve doğru kullanım ile{" "}
              <strong>200.000–250.000 kilometreye</strong> kadar çıkabilir.
              Özellikle kuru tip DQ200 modellerinde kavrama sağlığına dikkat
              etmek bu süreyi belirleyen temel unsurdur.
            </p>
          </div>

          <p className="text-zinc-700 text-base leading-relaxed mb-4">
            DSG (Direct Shift Gearbox) şanzımanlar, hızlı vites geçişleri ve
            yakıt ekonomisi ile bilinse de uzun ömürlü kullanım için belirli
            hassasiyetler gerektirir. &ldquo;DSG şanzıman ömrü ne kadar?&rdquo; sorusunun
            yanıtı tamamen bakım disiplinine bağlıdır.
          </p>
          <p className="text-zinc-700 text-base leading-relaxed">
            Bostancı Eren Servis olarak, DSG şanzımanlardaki kronik sorunları
            önlemek ve mekanik ömrü maksimize etmek için uzman çözümler
            sunuyoruz. Doğru müdahalelerle şanzıman revizyonu maliyetlerinden
            kurtulmanız mümkündür.
          </p>

          <div className="mt-6 p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <p className="text-sm text-zinc-700">
              Şanzımanınızda vuruntu veya sarsıntı var mı?{" "}
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="text-amber-600 underline underline-offset-2 hover:text-amber-800 transition-colors"
              >
                DSG kavrama arızası belirtilerini görün →
              </a>
            </p>
          </div>
        </section>

        {/* ── DQ200 vs DQ250 ───────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-2">
              DQ200 vs DQ250: Hangisi Daha Uzun Süruyor?
            </h2>
            <p className="text-zinc-500 text-sm mb-8">
              İki model farklı kavrama yapısı nedeniyle farklı ömür eğrisi çizer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">
                  DQ200 — Kuru Kavrama
                </div>
                <div className="text-sm font-semibold text-zinc-800 mb-1">
                  Golf 5/6/7, Polo, A3, Leon, Fabia
                </div>
                <div className="text-lg font-bold text-amber-600 mb-3">
                  120.000–150.000 KM kavrama ömrü
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  {[
                    "Kuru kavrama yapısı nedeniyle ısıya daha duyarlıdır",
                    "Şehir içi dur-kalk trafikte kavrama aşınması hızlanır",
                    "Periyodik yazılım güncellemeleri ömrü doğrudan etkiler",
                    "Hafif ve orta torklu araçlar için optimize edilmiştir",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">
                  DQ250 — Islak Kavrama
                </div>
                <div className="text-sm font-semibold text-zinc-800 mb-1">
                  Passat, A4/A5, Tiguan, Octavia, Superb
                </div>
                <div className="text-lg font-bold text-green-600 mb-3">
                  200.000–300.000 KM genel ömür
                </div>
                <ul className="text-sm text-zinc-600 space-y-2">
                  {[
                    "Yağ banyolu kavrama sayesinde ısıyı daha iyi tahliye eder",
                    "Yüksek torklu motorlarda daha dayanıklı performans sergiler",
                    "60.000 km'de bir yağ değişimi sistem sağlığı için kritiktir",
                    "Mekanik parçaların aşınma hızı kuru tipe göre daha düşüktür",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── BAKIM TAKVİMİ ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-2">
            DSG Bakım Takvimine Uymak Neden Kritik?
          </h2>
          <p className="text-zinc-500 text-sm mb-8">
            Her bakım adımı farklı bir riski engeller.
          </p>

          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-zinc-200" />

            {bakimAdimlar.map((adim, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-amber-400" />
                <div className="text-xs font-bold text-amber-600 mb-1">{adim.km}</div>
                <div className="font-semibold text-zinc-900 text-sm mb-1">{adim.islem}</div>
                <div className="text-sm text-zinc-600">{adim.aciklama}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ÖMRÜ KISALTAN HATALAR ────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">
              DSG Ömrünü Kısaltan 4 Hata
            </h2>

            <div className="space-y-4">
              {hatalar.map((h, i) => (
                <div key={h.baslik} className="bg-white border border-red-100 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1">{h.baslik}</h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">{h.aciklama}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ÖMRÜ UZATMANIN 3 YOLU ────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-zinc-900 mb-8">
            DSG Ömrünü Uzatmanın 3 Yolu
          </h2>

          <div className="space-y-4">
            {[
              "Yoğun trafikte vitesi manuel veya S moduna alarak sürekli 1→2 vites geçişini engelleyin.",
              "Yokuşlarda kalkış yapmadan önce el freni desteği kullanarak yükü şanzımandan alın.",
              "Her periyodik bakımda bilgisayarlı arıza taraması ve adaptasyon kontrolü yaptırın.",
            ].map((ipucu, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                <span className="text-green-600 font-bold text-lg shrink-0">{i + 1}</span>
                <p className="text-sm text-zinc-700 leading-relaxed">{ipucu}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="bg-zinc-50 px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-sanziman-omru-bakimi" />
          </div>
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="text-base font-semibold text-zinc-900 mb-4">
            İlgili Rehberler
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="/rehber/dsg-kavrama-ariza-belirtileri"
              className="block border border-zinc-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Rehber</div>
              <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                DSG Kavrama Arızası Belirtileri →
              </div>
            </a>
            <a
              href="/hizmetler/dsg-kavrama-degisimi"
              className="block border border-zinc-200 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50 transition-all group"
            >
              <div className="text-xs text-zinc-400 mb-1 uppercase tracking-wide">Hizmet</div>
              <div className="text-sm font-semibold text-zinc-800 group-hover:text-amber-700 transition-colors">
                DSG Kavrama Değişimi Fiyatı 2026 →
              </div>
            </a>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-zinc-950 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              DSG Şanzımanınız İçin Profesyonel Sağlık Kontrolü
            </h2>
            <p className="text-zinc-300 text-sm mb-6 leading-relaxed">
              Bostancı şubemizde uzman teknisyenlerimizle ücretsiz ön tanı ve
              arıza tespiti için hemen randevu alabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-amber-400 text-zinc-950 font-semibold
                           px-6 py-3 rounded-xl hover:bg-amber-300 transition-colors"
              >
                0532 715 37 51
              </a>
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-zinc-700 text-zinc-300 font-medium
                           px-6 py-3 rounded-xl hover:border-zinc-500 hover:text-white
                           transition-colors"
              >
                DSG Kavrama Değişimi Fiyatları →
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
