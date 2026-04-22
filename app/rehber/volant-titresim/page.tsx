import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/interactive/ContactForm";
import TransmissionFaq from "@/components/sanziman/TransmissionFaq";
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  buildServiceSchema,
} from "@/lib/schema";
import { TRANSMISSION_FAQS } from "@/lib/sanziman-faq";

export const metadata: Metadata = {
  title: "Çift Kütleli Volant Titreşimi: DSG'de Sarsıntının Ana Kaynağı | Eren Servis Bostancı",
  description:
    "Çift kütleli volant (DMF) nedir, neden titrer, ne zaman değişir? DSG DQ200, DQ250, DQ381 " +
    "araçlarda volant ömrü, belirtileri ve değişim detayları. Bostancı, İstanbul.",
  keywords: [
    "çift kütleli volant titreşimi",
    "dmf titreşim",
    "volant arıza belirtileri",
    "dsg volant değişimi",
    "volant ömrü kaç km",
    "rölantide volant titreşimi",
    "klima açınca titreme",
  ],
  openGraph: {
    title: "Çift Kütleli Volant Titreşimi: DMF Yay Yorgunluğu | Eren Servis",
    description:
      "DSG araçlarda volant titreşimi belirtileri, ömrü ve değişim zamanı. Bostancı.",
    url: "https://www.erenservis.net/rehber/volant-titresim",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Çift Kütleli Volant Titreşimi",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/volant-titresim/",
  },
};

const faqItems = TRANSMISSION_FAQS["volant-titresim"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Çift Kütleli Volant Titreşimi: DSG'de Sarsıntının Ana Kaynağı",
  description:
    "Çift kütleli volant (DMF) çalışma prensibi, titreşim belirtileri, ömrü ve " +
    "DSG kavrama paketi ile birlikte değişim önerileri.",
  url: "https://www.erenservis.net/rehber/volant-titresim",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "Çift Kütleli Volant Titreşimi",
    url: "https://www.erenservis.net/rehber/volant-titresim",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Çift Kütleli Volant ve Kavrama Paketi Değişimi",
  description:
    "DSG DQ200, DQ250, DQ381 için çift kütleli volant (DMF) ve kavrama paketi birlikte değişim. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/volant-titresim",
});

const belirtiler = [
  {
    no: "01",
    baslik: "Rölantide dalgalı titreme",
    aciklama:
      "Araç D vitesinde dururken direksiyon ve koltukta hissedilen sürekli " +
      "dalgalanma. Volant iç yayları motor tork dalgalanmasını sönümleyemez " +
      "hale gelmiştir.",
  },
  {
    no: "02",
    baslik: "Klima açılınca artan titreşim",
    aciklama:
      "Klima kompresörü rölantide motora yük bindirir. Yorgun volantta bu yük " +
      "direkt şanzımana geçer — klima kapalıyken sessiz, açıkken belirgin " +
      "titreşim klasik DMF belirtisidir.",
  },
  {
    no: "03",
    baslik: "Motor çalışır çalışmaz kısa metalik takırtı",
    aciklama:
      'Kontak açıldığı anda "tıkırtı" veya "dişli zincir" gibi kısa metalik ' +
      "ses duyulur. Volant yaylarının ilk darbeyi sönümleyememesinden kaynaklanır.",
  },
  {
    no: "04",
    baslik: "Yavaş hızda araç şasesinden gelen salınım",
    aciklama:
      "20-40 km/h düşük devirde sürüşte şasi ve koltuktan gelen düzensiz " +
      "salınım. İleri safhada kavrama balatasına da zarar vermeye başlar.",
  },
];

const omurBilgisi = [
  {
    araliği: "0 — 100.000 km",
    durum: "Sağlıklı aralık",
    aciklama:
      "DMF yayları tam fonksiyonda. Düşük devirde sürüş ve sert kalkışlar " +
      "dışında aşınma hızlanmaz.",
    renk: "text-green-700 bg-green-50 border-green-200",
  },
  {
    araliği: "100.000 — 150.000 km",
    durum: "İzleme aralığı",
    aciklama:
      "İlk belirtiler çıkabilir — özellikle 2.0 TDI ve yoğun şehir trafiği " +
      "kullanımında. Rölantide hafif titreşim izlenmeli.",
    renk: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    araliği: "150.000 — 250.000 km",
    durum: "Risk aralığı",
    aciklama:
      "Kavrama paketi değişimi sırasında volantın da kontrol edilmesi şart. " +
      "Belirti varsa tek başına bile değişim önerilir.",
    renk: "text-orange-700 bg-orange-50 border-orange-200",
  },
  {
    araliği: "250.000 km üzeri",
    durum: "Değişim aralığı",
    aciklama:
      "Hemen hemen her DMF bu noktada yay yorgunluğu yaşamıştır. " +
      "Kavrama paketi ile birlikte mutlaka yenilenmelidir.",
    renk: "text-red-700 bg-red-50 border-red-200",
  },
];

export default function VolantTitresimPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [articleSchema, faqSchema, breadcrumbSchema, serviceSchema],
          }),
        }}
      />

      <main className="min-h-screen bg-graphite-base">

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <a href="/rehber" className="hover:text-text-primary transition-colors">Rehber</a>
              <span>/</span>
              <Link href="/rehber/otomatik-sanziman-sarsinti" className="hover:text-text-primary transition-colors">
                Sarsıntı
              </Link>
              <span>/</span>
              <span className="text-text-secondary">Volant Titreşimi</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Volant — DSG
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Çift Kütleli Volant Titreşimi: DSG'de Sarsıntının Ana Kaynağı
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              DSG araçlarda rölantide titreme, klima açıldığında artan sarsıntı
              ve düşük devirde şasiden gelen salınım — büyük ihtimalle çift kütleli
              volant (DMF) yay yorgunluğundan kaynaklanır.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">150k</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Dikkat eşiği</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ana belirti</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">6 ay</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Garanti</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TL;DR + DMF NEDİR ──────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div
            data-speakable="true"
            className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              Çift kütleli volant (DMF), motor titreşimini yay mekanizmasıyla
              sönümleyen ağır bir disktir. Yayları yorulduğunda{" "}
              <strong>rölantide titreşim, klima açılınca artan sarsıntı</strong>{" "}
              ve metalik takırtı başlar. Tamiri yoktur — kavrama paketi ile
              birlikte değiştirilmesi standart yaklaşımdır.
            </p>
          </div>

          <h2 className="font-saira text-xl font-semibold text-text-primary mb-3">
            Çift Kütleli Volant Nedir?
          </h2>
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Volant motordan gelen tork dalgalanmasını şanzımana yumuşak biçimde
            iletmekle görevli bir disktir. Tek kütleli volantlar basit, sert
            bağlantılı bir diskten oluşur — ancak dizel ve yüksek torklu
            motorlarda titreşim şanzımana direkt iletilirdi.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            <strong>Çift kütleli volant (DMF)</strong> iki disk arasında yay
            mekanizması barındırır. Bu yaylar motor tork dalgalanmasını
            sönümler; özellikle dizel motorlu DSG araçlarda şanzımanın daha
            uzun ömürlü çalışmasını sağlar.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Zamanla iç yaylar yorulur ve <strong>sönümleme fonksiyonu azalır</strong>.
            Artık motor titreşimi direkt kavrama paketine ve şanzımana iletilir —
            rölantide ve düşük devirde titreşim belirginleşir.
          </p>
        </section>

        {/* ── BELİRTİLER ─────────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Volant Arızasının 4 Ana Belirtisi
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Bu belirtiler sırayla ortaya çıkar — ilk ikisi uyarı, son ikisi kritik aşamadır.
            </p>

            <div className="space-y-5">
              {belirtiler.map((b) => (
                <div key={b.no} className="flex gap-4">
                  <div className="font-jetbrains text-xs font-bold text-brass shrink-0 w-6 mt-0.5">
                    {b.no}
                  </div>
                  <div>
                    <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                      {b.baslik}
                    </div>
                    <p className="font-saira text-sm text-text-secondary leading-relaxed">
                      {b.aciklama}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ÖMÜR ARALIĞI ───────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Volant Ömrü: Kilometre Aralıklarına Göre Risk
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Hangi km aralığında ne yapılmalı — yoğun şehir kullanımında üst
            sınırlar aşağı kayar.
          </p>

          <div className="space-y-4">
            {omurBilgisi.map((o) => (
              <div key={o.araliği} className={`border rounded-xl p-5 ${o.renk}`}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="font-saira text-sm font-semibold">{o.araliği}</span>
                  <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
                    {o.durum}
                  </span>
                </div>
                <p className="font-saira text-sm leading-relaxed">{o.aciklama}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TAMİR Mİ, DEĞİŞİM Mİ? ──────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Tamir mi, Değişim mi?
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="border border-red-200 bg-red-50 rounded-xl p-5">
                <div className="font-jetbrains text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                  Tamir önerilmez
                </div>
                <p className="font-saira text-sm text-red-900 leading-relaxed">
                  DMF tamiri teorik olarak mümkündür ama ömrü kısa olur.
                  Yay mekanizması bir kez yorulduğunda eski performansa
                  dönmez — kısa sürede aynı belirtiler tekrar eder.
                </p>
              </div>
              <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                <div className="font-jetbrains text-xs font-bold text-green-700 uppercase tracking-wider mb-2">
                  Standart yaklaşım
                </div>
                <p className="font-saira text-sm text-green-900 leading-relaxed">
                  Volant + kavrama paketi birlikte değişir. Ayrı ayrı iki kez
                  balata-volant masası açmak işçiliği 2 katına çıkarır —
                  kombo değişim ekonomik ve kalıcıdır.
                </p>
              </div>
            </div>

            <div className="mt-6 border border-border-hairline bg-graphite-base rounded-xl p-5">
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                DSG araçlarda 150.000 km üzeri kavrama balatası değişimi
                gündeme geldiğinde, volantın durumu mutlaka kontrol edilmelidir.
                Yorgunluk varsa birlikte değişim — yoksa tek başına balata
                değişimi kısa sürede tekrar etme riskini artırır.
              </p>
            </div>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="volant-titresim" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
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
              {[
                {
                  href: "/rehber/dsg-kavrama-ariza-belirtileri",
                  tip: "Kavrama",
                  baslik: "DSG Kavrama Arıza Belirtileri →",
                },
                {
                  href: "/hizmetler/dsg-volant-kavrama-paketi",
                  tip: "Fiyat",
                  baslik: "DSG Volant + Kavrama Paketi Fiyatı →",
                },
              ].map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
                >
                  <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">{r.tip}</div>
                  <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                    {r.baslik}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Volant titreşimi mi başladı?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Volant muayenesi kavrama paketi açılmadan yapılamaz. Ücretsiz ön
              tanımızda belirtileri değerlendirip değişim gerekip gerekmediğini
              netleştiriyoruz — 6 ay garanti, Bostancı, İstanbul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/dsg-volant-kavrama-paketi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Volant + kavrama fiyatları →
              </Link>
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM FORMU ─────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-16">
          <ContactForm />
        </section>

      </main>
    </>
  );
}
