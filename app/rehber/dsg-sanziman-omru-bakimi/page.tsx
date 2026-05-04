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
  title: "DSG Şanzıman Ömrü ve Bakım Rehberi | Eren Otomatik Şanzıman Servisi Bostancı",
  description:
    "DSG şanzıman ömrü nasıl uzatılır? DQ200 vs DQ250 karşılaştırması, bakım takvimi " +
    "ve kullanım hataları. Bostancı Eren Otomatik Şanzıman Servisi'nde profesyonel DSG bakımı.",
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
    title: "DSG Şanzıman Ömrü: Kaç KM Dayanır? | Eren Otomatik Şanzıman Servisi Bostancı",
    description:
      "DQ200 ve DQ250 ömür karşılaştırması, bakım aralıkları ve ömrü uzatmanın 3 yolu. " +
      "Bostancı'da ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/dsg-sanziman-omru-bakimi/",
    type: "article",
    publishedTime: "2026-04-10",
    authors: ["Eren Otomatik Şanzıman Servisi"],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/dsg-sanziman-omru-bakimi/",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["dsg-sanziman-omru-bakimi"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Şanzıman Ömrü: Performansı Koruma ve Bakım Rehberi",
  description:
    "DSG şanzıman ömrünü belirleyen faktörler, DQ200 vs DQ250 karşılaştırması, " +
    "bakım takvimi ve ömrü uzatmanın yolları.",
  url: "https://www.erenservis.net/rehber/dsg-sanziman-omru-bakimi/",
  datePublished: "2026-04-10",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  {
    name: "DSG Şanzıman Ömrü ve Bakım",
    url: "https://www.erenservis.net/rehber/dsg-sanziman-omru-bakimi/",
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

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-text-primary transition-colors">Rehber</a>
              <span>/</span>
              <span className="text-text-secondary">DSG Şanzıman Ömrü ve Bakım</span>
            </nav>

            <span className="inline-block font-jetbrains text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Bakım Rehberi
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Şanzıman Ömrü: Performansı Koruma ve Bakım Rehberi
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              DSG şanzımanların kullanım ömrünü belirleyen en kritik faktörler
              periyodik bakım ve doğru sürüş alışkanlıklarıdır. Bostancı merkezli
              servisimizde şanzıman sağlığınızı en üst seviyede tutuyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">250K+</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hedef ömür (km)</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">%40</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Bakımla ömür artışı</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">60K</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Yağ değişim aralığı</div>
              </div>
            </div>
          </div>
        </section>

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

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            DSG (Direct Shift Gearbox) şanzımanlar, hızlı vites geçişleri ve
            yakıt ekonomisi ile bilinse de uzun ömürlü kullanım için belirli
            hassasiyetler gerektirir. &ldquo;DSG şanzıman ömrü ne kadar?&rdquo; sorusunun
            yanıtı tamamen bakım disiplinine bağlıdır.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Bostancı'daki Eren Otomatik Şanzıman Servisi olarak, DSG şanzımanlardaki kronik sorunları
            önlemek ve mekanik ömrü maksimize etmek için uzman çözümler
            sunuyoruz. Doğru müdahalelerle şanzıman revizyonu maliyetlerinden
            kurtulmanız mümkündür — bu disiplinin merkezinde{" "}
            <Link
              href="/hizmetler/sanziman-bakimi/"
              className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
            >
              periyodik şanzıman yağı ve filtre bakım hizmetimiz
            </Link>{" "}
            yer alır.
          </p>

          <div className="mt-6 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-secondary">
              Şanzımanınızda vuruntu veya sarsıntı var mı?{" "}
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="text-brass underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                DSG kavrama arızası belirtilerini görün →
              </a>
            </p>
          </div>
        </section>

        {/* ── DQ200 vs DQ250 ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              DQ200 vs DQ250: Hangisi Daha Uzun Süruyor?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              İki model farklı kavrama yapısı nedeniyle farklı ömür eğrisi çizer.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                  DQ200 — Kuru Kavrama
                </div>
                <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                  Golf 5/6/7, Polo, A3, Leon, Fabia
                </div>
                {/* amber value → brass */}
                <div className="font-saira text-lg font-semibold text-brass mb-3">
                  120.000–150.000 KM kavrama ömrü
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-2">
                  {[
                    "Kuru kavrama yapısı nedeniyle ısıya daha duyarlıdır",
                    "Şehir içi dur-kalk trafikte kavrama aşınması hızlanır",
                    "Periyodik yazılım güncellemeleri ömrü doğrudan etkiler",
                    "Hafif ve orta torklu araçlar için optimize edilmiştir",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-brass mt-0.5 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-2">
                  DQ250 — Islak Kavrama
                </div>
                <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                  Passat, A4/A5, Tiguan, Octavia, Superb
                </div>
                {/* PRESERVED — semantic comparison green value */}
                <div className="font-saira text-lg font-semibold text-green-600 mb-3">
                  200.000–300.000 KM genel ömür
                </div>
                <ul className="font-saira text-sm text-text-secondary space-y-2">
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
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            DSG Bakım Takvimine Uymak Neden Kritik?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Her bakım adımı farklı bir riski engeller.
          </p>

          <div className="relative pl-6">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-border-hairline" />

            {bakimAdimlar.map((adim, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-graphite-base border-2 border-border-brass" />
                <div className="font-saira text-xs font-semibold text-brass mb-1">{adim.km}</div>
                <div className="font-saira font-semibold text-text-primary text-sm mb-1">{adim.islem}</div>
                <div className="font-saira text-sm text-text-secondary">{adim.aciklama}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ÖMRÜ KISALTAN HATALAR ────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              DSG Ömrünü Kısaltan 4 Hata
            </h2>

            <div className="space-y-4">
              {hatalar.map((h, i) => (
                <div key={h.baslik} className="bg-graphite-base border border-red-100 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-saira font-semibold text-text-primary mb-1">{h.baslik}</h3>
                      <p className="font-saira text-sm text-text-secondary leading-relaxed">{h.aciklama}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ÖMRÜ UZATMANIN 3 YOLU ────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
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
                <p className="font-saira text-sm text-slate-800 leading-relaxed">{ipucu}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="dsg-sanziman-omru-bakimi" />
          </div>
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
            İlgili Rehberler
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <a
              href="/rehber/dsg-kavrama-ariza-belirtileri"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Arızası Belirtileri →
              </div>
            </a>
            <a
              href="/hizmetler/dsg-kavrama-degisimi"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Değişimi Fiyatı 2026 →
              </div>
            </a>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              DSG Şanzımanınız İçin Profesyonel Sağlık Kontrolü
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Bostancı şubemizde uzman teknisyenlerimizle ücretsiz ön tanı ve
              arıza tespiti için hemen randevu alabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold
                           px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium
                           px-6 py-3 rounded-full hover:border-brass hover:text-text-primary
                           transition-colors"
              >
                DSG Kavrama Değişimi Fiyatları →
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
