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
  title: "Mekatronik Nedir? DSG Şanzımanda Görevi ve Arıza Belirtileri | Eren Servis",
  description:
    "DSG şanzımanda mekatronik ünitesinin görevi, arıza belirtileri ve değişim maliyeti. " +
    "Bostancı'da ücretsiz ön tanı ve garantili tamir hizmeti — Eren Servis.",
  keywords: [
    "mekatronik nedir",
    "dsg mekatronik",
    "mekatronik kart arızası",
    "dsg mekatronik arıza belirtileri",
    "mekatronik kart fiyatı",
    "dsg şanzıman mekatronik",
    "mekatronik değişimi",
  ],
  openGraph: {
    title: "Mekatronik Nedir? DSG Şanzımanda Görevi | Eren Servis Bostancı",
    description:
      "Mekatronik arızası varsa ertelemeyin. " +
      "Bostancı DSG uzmanı Eren Servis'te ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/mekatronik-nedir/",
    type: "article",
    publishedTime: "2026-04-10",
    authors: ["Eren Servis"],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/mekatronik-nedir/",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["mekatronik-nedir"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Mekatronik Nedir? DSG Şanzımandaki Görevi ve Arıza Belirtileri",
  description:
    "DSG şanzımanlarda mekatronik ünitesinin rolü, içindeki parçalar, " +
    "arıza nedenleri ve erken müdahalenin önemi.",
  url: "https://www.erenservis.net/rehber/mekatronik-nedir/",
  datePublished: "2026-04-10",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  { name: "Mekatronik Nedir", url: "https://www.erenservis.net/rehber/mekatronik-nedir/" },
]);

// ─── VERİ ─────────────────────────────────────────────────────────────────────
const parcalar = [
  {
    baslik: "Solenoid Valfler",
    aciklama:
      "Vites geçişleri ve kavrama kontrolü için hidrolik yağ akışını milimetrik " +
      "hassasiyetle yöneten elektromanyetik anahtarlardır. Kirlenmesi veya yapışması " +
      "vites seçimini engeller.",
    onem: "yüksek",
  },
  {
    baslik: "Basınç Sensörleri",
    aciklama:
      "Ünite içindeki hidrolik basıncı sürekli ölçerek, sistemin güvenli aralıkta " +
      "çalışıp çalışmadığını kontrol ünitesine raporlar. Sensör hataları yanlış " +
      "vites seçimlerine neden olur.",
    onem: "yüksek",
  },
  {
    baslik: "Elektronik Kontrol Ünitesi (ECU)",
    aciklama:
      "Şanzımanın beynidir; sensörlerden gelen verileri işleyerek vites değişim " +
      "zamanlamasına karar veren işlemci merkezidir. Yanması komple ünite " +
      "değişimini gerektirebilir.",
    onem: "yüksek",
  },
  {
    baslik: "Hidrolik Kontrol Bloğu",
    aciklama:
      "Yağ kanallarının bulunduğu, solenoidlerden gelen komutlarla yağın ilgili " +
      "dişlilere yönlendirildiği fiziksel gövdedir. Metal talaşı birikimi kanalları tıkar.",
    onem: "orta",
  },
  {
    baslik: "Kablo Demeti",
    aciklama:
      "Sensörler ve solenoidler arasındaki veri iletimini sağlayan, ısıya dayanıklı " +
      "özel iletken hatlardır. Kırılması veya oksitlenmesi arıza kodlarına yol açar.",
    onem: "orta",
  },
];

const nedenler = [
  {
    baslik: "Aşırı Isınma",
    aciklama:
      "Yoğun trafikte sürekli dur-kalk yapmak, ünite içindeki elektronik devrelerin " +
      "limit değerleri aşmasına neden olur. Uzun vadede ECU'yu etkiler.",
    aciliyet: "orta",
  },
  {
    baslik: "Yağ Kirliliği ve Talaşlanma",
    aciklama:
      "Şanzıman içindeki mekanik aşınma sonucu oluşan metal talaşlarının mekatronik " +
      "kanallarını tıkaması en yaygın arıza sebebidir. Kavrama aşınması bu süreci hızlandırır.",
    aciliyet: "yüksek",
  },
  {
    baslik: "Yüksek Basınç Çatlakları",
    aciklama:
      "Hidrolik pompanın yarattığı basıncın ünite gövdesinde mikro çatlaklara neden " +
      "olması basınç kaybıyla sonuçlanır. DQ200 modellerde basınç tüpü kronik zayıf noktadır.",
    aciliyet: "yüksek",
  },
  {
    baslik: "Kısa Devre ve Oksitlenme",
    aciklama:
      "Şanzıman yağına karışan nem elektronik kart üzerindeki devrelerin yanmasına " +
      "neden olur. Bu durumda sistem tamamen durabilir, araç vites seçemez.",
    aciliyet: "kritik",
  },
];

const aciliyetStil: Record<string, { kart: string; etiket: string; etiketMetin: string }> = {
  orta: {
    kart: "border-blue-200 bg-blue-50",
    etiket: "bg-blue-100 text-blue-700",
    etiketMetin: "Takip et",
  },
  yüksek: {
    kart: "border-amber-200 bg-amber-50",
    etiket: "bg-amber-100 text-amber-700",
    etiketMetin: "Yakın zamanda git",
  },
  kritik: {
    kart: "border-red-200 bg-red-50",
    etiket: "bg-red-100 text-red-700",
    etiketMetin: "Bu hafta git",
  },
};

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function MekatronikNedirPage() {
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
              <span className="text-text-secondary">Mekatronik Nedir</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Teknik Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Mekatronik Nedir? DSG Şanzımandaki Görevi ve Arıza Belirtileri
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Mekatronik ünitesi, DSG şanzımanların hem beyni hem de kası görevini
              üstlenen, vites geçişlerini milisaniyeler içinde yöneten en kritik kontrol
              merkezidir. Bu ünitede meydana gelen elektronik veya hidrolik aksamalar
              aracın tüm yürüyen sistemini doğrudan etkiler.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">45 DK</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Arıza tespiti</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">%98</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Tamir başarı oranı</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">6 Ay</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">İşçilik garantisi</div>
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
              Mekatronik, DSG şanzımanlarda vites değişimlerini ve kavrama hareketlerini
              yöneten,{" "}
              <strong>
                elektronik kontrol ünitesi (ECU) ile hidrolik valf gövdesinin
                birleşiminden oluşan
              </strong>{" "}
              bir kontrol merkezidir. Sürücünün komutlarını ve aracın hız verilerini
              işleyerek vitesleri fiziksel olarak değiştiren &ldquo;akıllı&rdquo; sistem olarak
              tanımlanır.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Çift kavramalı (DSG) şanzımanların kalbi olarak kabul edilen mekatronik
            ünitesi, aracın sürüş dinamiklerini belirleyen temel unsurdur. Hem yazılımsal
            hem de mekanik bir yapıda olması, arızaların teşhisinde uzmanlık ve profesyonel
            ekipman gerektirir.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Bostancı&apos;daki servisimizde Volkswagen, Audi, Seat ve Skoda grubu araçlarda
            sıkça karşılaşılan mekatronik arızalarını, orijinal yedek parça ve ileri
            teknoloji diyagnoz cihazları ile çözüme kavuşturuyoruz.
          </p>

          <div className="mt-6 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              Mekatronik arızası mı şüpheleniyorsunuz?{" "}
              <a
                href="/hizmetler/dsg-mekatronik-kart"
                className="text-brass underline underline-offset-2 hover:text-brass/80 transition-colors"
              >
                DSG mekatronik kart değişimi fiyatlarını görün →
              </a>
            </p>
          </div>
        </section>

        {/* ── MEKATRONİK İÇİNDEKİ PARÇALAR ────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              DSG Mekatronik Ünitesi İçindeki Parçalar
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Mekatronik tek bir parça değil, birlikte çalışan bir sistemdir.
            </p>

            <div className="space-y-4">
              {parcalar.map((p) => (
                <div key={p.baslik} className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-saira font-semibold text-text-primary">{p.baslik}</h3>
                    <span
                      className={`shrink-0 font-jetbrains text-xs font-medium px-2 py-0.5 rounded-full ${
                        p.onem === "yüksek"
                          ? "bg-brass/8 text-brass"
                          : "bg-graphite-elevated text-text-secondary"
                      }`}
                    >
                      {p.onem === "yüksek" ? "Kritik parça" : "Destek parçası"}
                    </span>
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{p.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARIZA NEDENLERİ ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Mekatronik Kart Neden Arızalanır?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Her nedenin aciliyeti farklıdır — senaryonuzu tanıyın.
          </p>

          <div className="space-y-4">
            {nedenler.map((n) => {
              const stil = aciliyetStil[n.aciliyet];
              return (
                <div key={n.baslik} className={`border rounded-xl p-5 ${stil.kart}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-saira font-semibold text-slate-800">{n.baslik}</h3>
                    <span className={`shrink-0 font-jetbrains text-xs font-medium px-2 py-0.5 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed text-slate-700">{n.aciklama}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── ERKEN / GEÇ KARŞILAŞTIRMA ────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Erken mi Geç mi Müdahale?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3">
                  Erken Müdahale
                </div>
                <ul className="text-sm text-slate-700 space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    Sadece basınç tüpü veya conta değişimi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    Elektronik kart onarımı ile kurtarma şansı
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    Dişli grubunun zarar görmemesi
                  </li>
                </ul>
                <div className="font-saira text-sm font-semibold text-green-700">15.000–25.000 TL</div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-red-700 mb-3">
                  Geç Müdahale
                </div>
                <ul className="text-sm text-slate-700 space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    Komple mekatronik ünitesi değişimi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    Kavrama ve volanın da hasar alması
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    Yolda kalma ve çekici maliyetleri
                  </li>
                </ul>
                <div className="font-saira text-sm font-semibold text-red-700">35.000–65.000 TL</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DQ200 vs DQ250 ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Modelinize Göre Mekatronik Farklı Davranır
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Aynı arıza tipi, farklı şanzımanda farklı anlam taşır.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                DQ200 — Kuru Kavrama
              </div>
              <div className="font-saira text-sm font-semibold text-text-primary mb-3">
                Golf 5/6/7, Polo, A3, Leon, Fabia
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  7 ileri kuru tip şanzımanlarda basınç tüpü gevşemesi kroniktir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  P17BF arıza kodu mekatronik gövde çatlağına işaret eder
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Viteslerde anahtar işareti yanıp sönmesi ilk belirtidir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Geri viteste sarsıntı mekatronik kontrol hatası olabilir
                </li>
              </ul>
            </div>

            <div className="bg-graphite-surface border border-border-hairline rounded-xl p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-3">
                DQ250 — Islak Kavrama
              </div>
              <div className="font-saira text-sm font-semibold text-text-primary mb-3">
                Passat, A4/A5, Tiguan, Octavia, Superb
              </div>
              <ul className="font-saira text-sm text-text-secondary space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  6 ileri ıslak tip şanzımanlarda yağ bakımı gecikirse mekatronik tıkanır
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Vites geçişlerinde vuruntu ve sertlik gözlemlenir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  PRND yanıp sönme modu (Limp Mode) sık görülen belirtidir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Solenoidlerin kirlenmesi viteslerin seçilememesine neden olur
                </li>
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
            <TransmissionFaq slug="mekatronik-nedir" />
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
              className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Arızası Belirtileri →
              </div>
            </a>
            <a
              href="/hizmetler/dsg-mekatronik-kart"
              className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Mekatronik Kart Fiyatı 2026 →
              </div>
            </a>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Mekatronik Arızasından mı Şüpheleniyorsunuz?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Bostancı Eren Servis&apos;te DSG uzmanlarımızla 45 dakikada arıza tespiti
              yapıyoruz. Arızayı büyümeden yakalamak için hemen randevu alın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <a
                href="/hizmetler/dsg-mekatronik-kart"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Mekatronik kart fiyatları →
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
