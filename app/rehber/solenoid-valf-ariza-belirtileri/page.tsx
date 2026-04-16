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

// ─── META ─────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Solenoid Valf Arıza Belirtileri | DSG Uzmanı Bostancı | Eren Servis",
  description:
    "DSG solenoid valf arıza belirtileri ve çözüm yolları. " +
    "Bostancı Eren Servis'te profesyonel mekatronik onarımı ve garantili değişim. Hemen randevu alın.",
  keywords: [
    "solenoid valf arıza belirtileri",
    "dsg solenoid valf",
    "solenoid valf arızası",
    "dsg mekatronik solenoid",
    "solenoid valf değişimi fiyatı",
    "dsg limp mode solenoid",
    "p17bf hata kodu",
  ],
  openGraph: {
    title: "DSG Solenoid Valf Arıza Belirtileri | Eren Servis Bostancı",
    description:
      "Solenoid valf arızasının 7 kritik belirtisi. " +
      "Bostancı DSG uzmanı Eren Servis'te ücretsiz ön tanı.",
    url: "https://erenservis.net/rehber/solenoid-valf-ariza-belirtileri",
    type: "article",
    publishedTime: "2026-04-10",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://erenservis.net/images/og/solenoid-valf-ariza.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Solenoid Valf Arıza Belirtileri",
      },
    ],
  },
  alternates: {
    canonical: "https://erenservis.net/rehber/solenoid-valf-ariza-belirtileri",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["solenoid-valf-ariza-belirtileri"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Solenoid Valf Arıza Belirtileri: 7 Kritik İşaret",
  description:
    "DSG şanzımanda solenoid valf arızasının belirtileri, nedenleri ve " +
    "tamir vs. değişim kararı için kapsamlı rehber.",
  url: "https://erenservis.net/rehber/solenoid-valf-ariza-belirtileri",
  datePublished: "2026-04-10",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://erenservis.net" },
  { name: "Rehber", url: "https://erenservis.net/rehber" },
  {
    name: "Solenoid Valf Arıza Belirtileri",
    url: "https://erenservis.net/rehber/solenoid-valf-ariza-belirtileri",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Solenoid Valf Teşhis ve Değişimi",
  description:
    "Solenoid valf arızası teşhisi ve tamiri, DSG mekatronik onarımı. Bostancı, İstanbul.",
  url: "https://erenservis.net/rehber/solenoid-valf-ariza-belirtileri",
});

// ─── VERİ ─────────────────────────────────────────────────────────────────────
const belirtiler = [
  {
    baslik: "Sarsıntılı ve Vuruntulu Geçişler",
    aciklama:
      "Vites yükseltirken veya düşürürken hissedilen sert 'küt' sesi valf " +
      "basınç düzensizliğine işarettir. DQ200 kuru kavramada 1→2, DQ250'de 2→3 geçişte daha belirgindir.",
    aciliyet: "yüksek",
    model: "DQ200 / DQ250",
  },
  {
    baslik: "Geri Vitese (R) Geçmeme Sorunu",
    aciklama:
      "Solenoid valfin takılı kalması sonucu aracın geri vitese geçişi tamamen " +
      "engellenebilir. Soğukta daha belirgin, ısındıkça kısmen düzelir.",
    aciliyet: "kritik",
    model: "DQ200",
  },
  {
    baslik: "Şanzıman Koruma Modu (Limp Mode)",
    aciklama:
      "Gösterge panelinde vites harflerinin yanıp sönmesi ve aracın tek viteste " +
      "(genelde 2. vites) takılı kalmasıdır. ECU hasarı önlemek için şanzımanı koruma altına alır.",
    aciliyet: "kritik",
    model: "Tüm DSG Modelleri",
  },
  {
    baslik: "Vites Kaydırma ve Devir Yükselmesi",
    aciklama:
      "Vites geçişi sırasında motor devrinin boşa çıkmış gibi aniden yükselmesi " +
      "valf sızıntısına işaret eder. Hız sabitken kayma hissi eşlik edebilir.",
    aciliyet: "orta",
    model: "DQ250 / DQ500",
  },
  {
    baslik: "Yağ Basınç Hata Kodu (P17BF)",
    aciklama:
      "OBD cihazında görülen 'Hydraulic Pump Protection' hatası genellikle " +
      "hatalı çalışan solenoidlerden kaynaklanır. Bu kod görüldüğünde erteleme yapılmamalıdır.",
    aciliyet: "kritik",
    model: "DQ200 7 İleri",
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

const nedenler = [
  {
    baslik: "Metal Talaşı ve Kirlilik",
    aciklama:
      "Şanzıman içindeki mekanik aşınmadan kopan mikroskobik parçalar valf " +
      "gözeneklerini tıkar. Kavrama aşınması bu süreci hızlandırır.",
  },
  {
    baslik: "Şanzıman Yağı Oksidasyonu",
    aciklama:
      "Ömrünü tamamlamış yağın viskozitesini kaybetmesi, valf bobinlerinin " +
      "aşırı ısınmasına yol açar. DQ200'de her 60.000 km'de yağ değişimi şarttır.",
  },
  {
    baslik: "Elektriksel Kısa Devre",
    aciklama:
      "Mekatronik kart üzerindeki sıvı teması veya oksitlenme, solenoidlerin " +
      "sinyal almasını engeller. Arıza kodu olmaksızın da kendini gösterebilir.",
  },
  {
    baslik: "Mekanik Aşınma",
    aciklama:
      "Milyonlarca kez açılıp kapanan valf pistonları zamanla aşınarak basınç " +
      "kaçırmaya başlar. Bu durumda temizlik değil değişim gerekir.",
  },
];

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function SolenoidValfArizaBelirtileriPage() {
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

            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-text-primary transition-colors">Rehber</a>
              <span>/</span>
              <span className="text-text-secondary">Solenoid Valf Arıza Belirtileri</span>
            </nav>

            <span className="inline-block font-jetbrains text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Solenoid Valf Arıza Belirtileri: 7 Kritik İşaret
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              DSG şanzıman sisteminde vites geçişlerini yöneten solenoid valfler
              arızalandığında sürüş konforu ve güvenliği doğrudan etkilenir.
              Bostancı merkezli servisimizde bu hassas parçaları profesyonel
              ekipmanlarla test ediyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">%100</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hassas teşhis</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">6 Ay</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">İşçilik garantisi</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ön tanı</div>
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
              Solenoid valf arızası;{" "}
              <strong>
                vites geçişlerinde sert vuruntu, şanzımanın koruma moduna
                geçmesi (PRNDS yanıp sönmesi) ve geri vitese geçmeme
              </strong>{" "}
              gibi sorunlarla anlaşılır. Bu belirtiler mekatronik ünitesindeki
              yağ basıncının doğru yönetilemediğini gösterir.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            DSG şanzımanlarda mekatronik ünitesinin kalbi sayılan solenoid
            valfler, hidrolik yağı yönlendirerek vites değişimini ve kavrama
            kontrolünü sağlar. Bu valfler, mikron seviyesindeki hassasiyetle
            çalışarak aracın pürüzsüz vites değiştirmesine olanak tanır.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Zamanla aşınan veya kirlenen solenoidler, şanzıman beyninin
            komutlarını yerine getiremez hale gelir. Bostancı&apos;daki DSG uzmanı
            kadromuzla, arızanın sadece valfte mi yoksa genel mekatronik
            kartında mı olduğunu gelişmiş test cihazlarıyla saptıyoruz.
          </p>

          <div className="mt-6 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-secondary">
              Solenoid, mekatronik ünitenin bir parçası.{" "}
              <a
                href="/rehber/mekatronik-nedir"
                className="text-brass underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                Mekatronik ünitesini daha iyi anlamak için →
              </a>
            </p>
          </div>
        </section>

        {/* ── BELİRTİLER ───────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            En Yaygın Solenoid Valf Arıza Belirtileri
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Belirtinizi bulun — aciliyet ve model bilgisi aşağıda.
          </p>

          <div className="space-y-4">
            {belirtiler.map((b) => {
              const stil = aciliyetStil[b.aciliyet];
              return (
                <div key={b.baslik} className={`border rounded-xl p-5 ${stil.kart}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-saira font-semibold text-slate-800">{b.baslik}</h3>
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed text-slate-700 mb-2">{b.aciklama}</p>
                  <div className="font-jetbrains text-xs text-slate-600">Model: {b.model}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── NEDENLER ─────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Solenoid Valfler Neden Bozulur?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {nedenler.map((n) => (
                <div key={n.baslik} className="bg-graphite-base border border-border-hairline rounded-xl p-5">
                  <h3 className="font-saira font-semibold text-text-primary mb-2">{n.baslik}</h3>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">{n.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DQ200 vs DQ250 ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Modelinize Göre Solenoid Davranışı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            DQ200 ve DQ250 farklı solenoid tipleri kullanır.
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
                {[
                  "N215 Basınç Kontrol Valfi",
                  "N216 Vites Değiştirme Valfi",
                  "Hidrolik Pompa Röle İletişimi",
                  "Akümülatör Basınç Kaybı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brass mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
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
                {[
                  "N217 Ana Basınç Valfi",
                  "N218 Soğutma Valfi",
                  "K1/K2 Kavrama Solenoidleri",
                  "Vites Konumlandırma Valfleri",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brass mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── TAMİR Mİ DEĞİŞİM Mİ ─────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Solenoid Valf Tamiri Mümkün mü?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3">
                  Tamir Yeterli Olduğu Durumlar
                </div>
                <ul className="font-saira text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                    Sadece yüzeysel talaş tıkanıklığında özel solüsyonla temizlik
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                    O-ring ve conta kaçaklarında parça değişimi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                    Küçük basınç sapmaları yazılımsal kalibrasyonla düzeltilebilir
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <div className="text-xs font-bold tracking-widest uppercase text-red-700 mb-3">
                  Değişim Gereken Durumlar
                </div>
                <ul className="font-saira text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                    Solenoid bobininde elektriksel kopukluk veya direnç hatası
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                    Valf gövdesinde kalıcı çizik ve aşınma
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 shrink-0">✗</span>
                    Test bench&apos;te basınç eğrileri standart dışı çıkmışsa
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
          <TransmissionFaq slug="solenoid-valf-ariza-belirtileri" />
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              İlgili Rehberler
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="/rehber/otomatik-sanziman-gecikme"
                className="sm:col-span-2 block border border-border-hairline bg-graphite-base rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Gecikme: Tüm Tiplere Göre Rehber →
                </div>
              </a>
              <a
                href="/rehber/mekatronik-nedir"
                className="block border border-border-hairline bg-graphite-base rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Mekatronik Nedir? DSG&apos;deki Görevi →
                </div>
              </a>
              <a
                href="/hizmetler/dsg-mekatronik-kart"
                className="block border border-border-hairline bg-graphite-base rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  DSG Mekatronik Kart Fiyatı 2026 →
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Bostancı DSG Solenoid Testi ve Onarımı
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Şanzımanınızdaki vuruntuyu büyümeden teşhis edelim. Bostancı
              servisimizde ücretsiz ön tanı ve profesyonel arıza tespiti için
              hemen randevu alabilirsiniz.
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
                href="/hizmetler/dsg-mekatronik-kart"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium
                           px-6 py-3 rounded-full hover:border-brass hover:text-text-primary
                           transition-colors"
              >
                DSG Mekatronik Kart Fiyatları →
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
