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
  title: "CVT Şanzımanda Kayma: Kayış ve Pully Aşınması | Eren Servis Bostancı",
  description:
    "CVT kayması neden olur? Toyota, Honda, Nissan ve Subaru CVT modellerinde kayış aşınması, " +
    "pully yüzey hasarı ve yağ değişimi rehberi. Bostancı, İstanbul.",
  keywords: [
    "cvt kayma",
    "cvt vites atlama",
    "toyota cvt kayma",
    "honda cvt kayma",
    "nissan cvt kayma",
    "cvt kayış aşınması",
    "cvt pully aşınması",
  ],
  openGraph: {
    title: "CVT Şanzımanda Kayma ve Vites Atlama | Eren Servis",
    description:
      "Toyota, Honda, Nissan CVT kayma nedenleri ve kayış değişim maliyeti. Bostancı.",
    url: "https://www.erenservis.net/rehber/cvt-kayma",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CVT Şanzımanda Kayma",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/cvt-kayma/",
  },
};

const faqItems = TRANSMISSION_FAQS["cvt-kayma"] ?? [];

const articleSchema = buildArticleSchema({
  title: "CVT Şanzımanda Kayma: Kayış ve Pully Aşınması",
  description:
    "Toyota, Honda, Nissan, Subaru CVT modellerinde kayma nedenleri, kayış " +
    "aşınması belirtileri ve maliyet analizi.",
  url: "https://www.erenservis.net/rehber/cvt-kayma",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "CVT Kayma",
    url: "https://www.erenservis.net/rehber/cvt-kayma",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "CVT Şanzıman Kayma Teşhisi ve Kayış Değişimi",
  description:
    "Toyota, Honda, Nissan, Subaru CVT modellerinde kayma teşhisi, kayış ve pully seti onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/cvt-kayma",
});

const markalar = [
  {
    marka: "Toyota",
    model: "Multidrive / K114, K313",
    araclar: "Corolla, Auris, C-HR, RAV4, Camry",
    ozellik:
      "Toyota CVT'de kontrol ünitesi arızaları sık görülür. Yazılım güncellemesi " +
      "erken evredeki kayma belirtilerini çözebilir. Kayış kalitesi iyidir — " +
      "200.000 km+ hizmet verir.",
    renk: "border-red-200 bg-red-50",
  },
  {
    marka: "Honda",
    model: "CVT / Earth Dreams",
    araclar: "Civic, City, HR-V, Jazz",
    ozellik:
      "Honda CVT'de kayış, tipik zayıf halkadır. Dur-kalk trafiğinde erken " +
      "aşınma başlar. Rampada kalkışta motor devri 4.000+ rpm fırlar, ivme " +
      "kaybolur — klasik Honda CVT belirtisi.",
    renk: "border-orange-200 bg-orange-50",
  },
  {
    marka: "Nissan",
    model: "JATCO CVT",
    araclar: "Qashqai, Juke, X-Trail, Micra",
    ozellik:
      'Nissan JATCO CVT\'de yağ kalitesi kritiktir — "NS-3" olmayan yağ kullanımı ' +
      "hızlı aşınmaya yol açar. Kayma başladığında genellikle kayış + pully " +
      "seti birlikte değişir.",
    renk: "border-amber-200 bg-amber-50",
  },
  {
    marka: "Subaru",
    model: "Lineartronic CVT",
    araclar: "Forester, Outback, XV, Impreza",
    ozellik:
      'AWD sistem yükü Subaru CVT\'ye ek stres yükler. Kayma genelde tork ' +
      "konvertör lockup veya kontrol modülü kaynaklıdır. Yağ + filtre " +
      "değişimiyle erken evrede çözüm olabilir.",
    renk: "border-blue-200 bg-blue-50",
  },
];

const belirtiler = [
  {
    no: "01",
    baslik: "Gaz pedalına basınca motor devri ani yükselir",
    aciklama:
      "Normal CVT'de motor devri yumuşakça artar. Aşınmış CVT'de gaz pedalına " +
      "basar basmaz devir 4.000-5.000 rpm'e fırlar ama hız aynı tempoda artmaz.",
  },
  {
    no: "02",
    baslik: "Yokuşta veya ısındıkça kayma",
    aciklama:
      "Soğukken normal, ısındıkça kayma artması kayış aşınmasının klasik " +
      "belirtisidir. Yağ sıcaklığı arttıkça viskozite düşer, kayış tutunması " +
      "zayıflar.",
  },
  {
    no: "03",
    baslik: "Metalik inleme veya tıkırtı sesi",
    aciklama:
      "Özellikle düşük hızda hızlanırken metalik inleme veya tıkırtı sesi " +
      "duyulur. Kayışın pully yüzeyinde kayması veya çelik lamellerin aşınması " +
      "kaynaklıdır.",
  },
  {
    no: "04",
    baslik: "Ani motor devri dalgalanması",
    aciklama:
      "Sabit hızla giderken motor devri nedensiz yere 500-1.000 rpm dalgalanır. " +
      "Kayış gerginliği stabil değildir — kritik aşınma seviyesine yaklaşılmıştır.",
  },
];

export default function CVTKaymaPage() {
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
              <Link href="/rehber/otomatik-sanziman-kayma" className="hover:text-text-primary transition-colors">
                Kayma
              </Link>
              <span>/</span>
              <span className="text-text-secondary">CVT</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              CVT Detay
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              CVT Şanzımanda Kayma: Kayış ve Pully Aşınması
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              CVT'de kayma doğrudan kayış aşınmasının sonucudur. Toyota,
              Honda, Nissan ve Subaru CVT modellerinde kayma nedenleri
              farklılaşır — yağ kalitesi, kontrol ünitesi veya kayış seti.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Marka kapsamı</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Belirti</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Teşhis</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TL;DR ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div
            data-speakable="true"
            className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              CVT'de kayma <strong>kayış aşınması, pully yüzey hasarı ve yanlış
              yağ kullanımından</strong> çıkar. Erken evrede yağ + filtre değişimi
              kaymayı durdurabilir; ileri evrede kayış + pully seti değişimi
              zorunludur. Geri dönüşsüz bir süreç — ertelemek yıkıcıdır.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            CVT şanzımanın çalışma prensibi iki koni (pully) arasına gerilmiş
            bir çelik kayışa dayanır. Kayış konilerin çapını değiştirerek
            sürekli değişken vites oranı üretir. Bu sistem kayıp başladığında
            geri dönüşsüz hasar zinciri başlar.
          </p>
        </section>

        {/* ── MARKA KARŞILAŞTIRMA ────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Markaya Göre CVT Kayma Profili
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Her markanın CVT'si farklı zayıf noktaya sahiptir.
            </p>

            <div className="space-y-4">
              {markalar.map((m) => (
                <div key={m.marka} className={`border rounded-xl p-5 ${m.renk}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-jetbrains text-xs font-bold uppercase tracking-widest text-graphite-base mb-1">
                        {m.marka}
                      </div>
                      <div className="font-saira text-sm font-semibold text-graphite-base">
                        {m.model}
                      </div>
                    </div>
                  </div>
                  <div className="font-saira text-xs text-graphite-base mb-3">
                    <strong>Araçlar:</strong> {m.araclar}
                  </div>
                  <p className="font-saira text-sm text-graphite-base leading-relaxed">
                    {m.ozellik}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BELİRTİLER ─────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            CVT Kaymasının 4 Belirtisi
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Bu belirtiler sırasıyla ortaya çıkar — ilk ikisi uyarı, son ikisi acil.
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
        </section>

        {/* ── KAYIŞ vs PULLY ─────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Sadece Kayış mı, Tüm Set mi?
            </h2>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="border border-green-200 bg-green-50 rounded-xl p-5">
                <div className="font-jetbrains text-xs font-bold text-green-700 uppercase tracking-wider mb-2">
                  Erken evre
                </div>
                <p className="font-saira text-sm text-green-900 leading-relaxed">
                  Pully yüzeyinde iz yoksa sadece kayış değişimi yeterlidir.
                  Yağ + filtre + kayış değişimi maliyeti 25.000-45.000 TL
                  aralığında kalır.
                </p>
              </div>
              <div className="border border-red-200 bg-red-50 rounded-xl p-5">
                <div className="font-jetbrains text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                  Geç evre
                </div>
                <p className="font-saira text-sm text-red-900 leading-relaxed">
                  Pully yüzeyinde iz/tırtık varsa kayış + pully seti birlikte
                  değişir. Maliyet 80.000-150.000 TL aralığına kadar çıkabilir.
                </p>
              </div>
            </div>

            <div className="mt-6 border border-border-hairline bg-graphite-base rounded-xl p-5">
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                CVT kayması hissedildiği anda servise gitmek şart. Her gün gecikme
                pully yüzeyine kalıcı iz bırakır — tek başına kayış değişimi
                artık yeterli olmaz.
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
            <TransmissionFaq slug="cvt-kayma" />
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
                href="/rehber/otomatik-sanziman-kayma"
                className="sm:col-span-2 block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
              >
                <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
                <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                  Otomatik Şanzımanda Kayma: Tüm Tipler →
                </div>
              </a>
              {[
                {
                  href: "/rehber/cvt-vuruntu",
                  tip: "CVT",
                  baslik: "CVT Vuruntu Belirtileri →",
                },
                {
                  href: "/hizmetler/cvt-sanziman-tamiri",
                  tip: "Fiyat",
                  baslik: "CVT Şanzıman Tamiri Fiyatı →",
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
              CVT kayması ertelenmez
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Her gün bekleme pully yüzeyine kalıcı iz bırakır. Ücretsiz
              teşhisle kaymanın evresini net söyleriz — 6 ay garanti,
              Bostancı, İstanbul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/cvt-sanziman-tamiri"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                CVT tamir fiyatları →
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
