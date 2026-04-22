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
  title: "Otomatik Şanzımanda Vuruntu Neden Olur? | Eren Servis Bostancı",
  description:
    "DSG, PowerShift, EDC ve CVT şanzımanlarda vuruntunun nedenleri, hangi tipte nasıl davranır, " +
    "ne zaman tehlikeli olur. Bostancı'da ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "otomatik şanzıman vuruntu",
    "şanzıman geçişte vuruntu neden olur",
    "otomatik vites geçerken vuruntu",
    "araç vuruntu yapıyor şanzıman mı",
    "otomatik şanzıman sarsıntı nedeni",
    "şanzıman tipi vuruntu karşılaştırma",
  ],
  openGraph: {
    title: "Otomatik Şanzımanda Vuruntu: Hangi Tip, Hangi Neden? | Eren Servis",
    description:
      "DSG, PowerShift, EDC ve CVT şanzımanlarda vuruntu nedenleri. " +
      "Bostancı'da ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-vuruntu/",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzımanda Vuruntu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/otomatik-sanziman-vuruntu/",
  },
};

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-vuruntu"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzımanda Vuruntu: Hangi Tip, Hangi Neden?",
  description:
    "DSG, PowerShift, EDC ve CVT şanzımanlarda vuruntunun nedenleri, " +
    "davranış farkları ve tehlike sinyalleri.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-vuruntu/",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  {
    name: "Otomatik Şanzımanda Vuruntu",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-vuruntu/",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Otomatik Şanzıman Vuruntu Teşhis ve Onarım",
  description:
    "Tüm otomatik şanzıman tiplerinde vuruntu arızası teşhisi ve onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-vuruntu/",
});

const tipler = [
  {
    kod: "DSG / S-Tronic",
    markalar: "VW, Audi, Skoda, Seat, Cupra",
    vuruntu: "Yüksek",
    neden: "Kuru kavrama (DQ200) plaket aşınması; 1→2 geçişte en sık.",
    href: "/rehber/dsg-vuruntu-semptomlari",
    linkMetin: "DSG vuruntu rehberi →",
    renk: "border-red-200 bg-red-50 text-red-700",
    badge: "En yaygın",
  },
  {
    kod: "PowerShift / DPS6",
    markalar: "Ford Focus, Fiesta, Kuga",
    vuruntu: "Yüksek",
    neden: "Islak kavrama kontrol ünitesi arızası veya kavrama paketi aşınması.",
    href: "/rehber/powershift-vuruntu",
    linkMetin: "PowerShift vuruntu rehberi →",
    renk: "border-amber-200 bg-amber-50 text-amber-700",
    badge: "Yaygın",
  },
  {
    kod: "EDC / DCT",
    markalar: "Renault Clio, Fluence, Megane, Captur; Nissan Juke",
    vuruntu: "Orta",
    neden: "EDC7/EDC8 solenoid valf veya kavrama adaptasyon kayması.",
    href: "/rehber/edc-vuruntu",
    linkMetin: "EDC vuruntu rehberi →",
    renk: "border-amber-200 bg-amber-50 text-amber-700",
    badge: "Orta sıklık",
  },
  {
    kod: "CVT",
    markalar: "Toyota, Honda, Nissan",
    vuruntu: "Düşük",
    neden: "Kayış / pully aşınması veya kontrol ünitesi hatası — nadirdir ama ciddiye alınmalı.",
    href: "/rehber/cvt-vuruntu",
    linkMetin: "CVT vuruntu rehberi →",
    renk: "border-blue-200 bg-blue-50 text-blue-700",
    badge: "Nadir",
  },
];

const ortakNedenler = [
  {
    no: "01",
    baslik: "Kavrama sistemi aşınması",
    aciklama:
      "Çift kavramalı şanzımanlarda (DSG, PowerShift, EDC) kavrama plaketleri " +
      "aşındıkça geçişlerde kontrolsüz kayma yaşanır ve bu vuruntu olarak hissedilir. " +
      "Tüm tiplerde en yaygın nedendir.",
  },
  {
    no: "02",
    baslik: "Solenoid valf tıkanıklığı",
    aciklama:
      "Mekatronik veya hidrolik ünitedeki solenoid valfler yağ kirliliğinden tıkanırsa " +
      "basınç dalgalanmaları oluşur. Her vites geçişinde farklı şiddette vuruntu yaşanır.",
  },
  {
    no: "03",
    baslik: "Kavrama adaptasyonu kayması",
    aciklama:
      "Şanzıman kontrol birimi, kavramanın tutma noktasını öğrenerek çalışır. " +
      "Adaptasyon silindiğinde veya bozulduğunda geçişler kaba ve vuruntuludur. " +
      "Çoğunlukla yazılım güncellemesi veya sıfırlama ile çözülür.",
  },
  {
    no: "04",
    baslik: "Yağ kalitesi ve basıncı",
    aciklama:
      "Eskimiş veya yanlış tip şanzıman yağı sürtünme katsayısını bozar. " +
      "Islak kavramalı tiplerde bu doğrudan vuruntu olarak kendini gösterir.",
  },
  {
    no: "05",
    baslik: "Volant (çift kütleli) aşınması",
    aciklama:
      "Kavrama arızası ilerledikçe metal toz çift kütleli volanta ulaşır. " +
      "Vuruntu bu aşamada rölantiye kadar iner — tüm viteslerde hissedilir hale gelir.",
  },
];

export default function OtomatikSanzımanVuruntuPage() {
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
              <span className="text-text-secondary">Otomatik Şanzımanda Vuruntu</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Genel Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Otomatik Şanzımanda Vuruntu Neden Olur?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Vites geçişinde sarsıntı veya darbe hissediyorsanız neden,
              hangi şanzıman tipinde bu daha sık görülür ve ne zaman acile
              dönüşür — şanzıman tiplerine göre karşılaştırmalı rehber.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Şanzıman tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">5</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ortak neden</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ön tanı</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIZLI CEVAP ────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <div
            data-speakable="true"
            className="border border-amber-200 bg-amber-50 rounded-xl p-5 mb-8"
          >
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="text-sm text-amber-900 leading-relaxed">
              Otomatik şanzımanda vuruntu{" "}
              <strong>çoğunlukla kavrama sistemi arızasından</strong> kaynaklanır.
              Kuru kavramalı DSG (DQ200) ve Ford PowerShift (DPS6) en sık etkilenen
              tiplerdir. Renault EDC orta sıklıkta, CVT şanzımanlar ise nadiren
              vuruntu yapar. Hangi şanzıman tipine sahip olduğunuzu bilmiyorsanız,
              aşağıdaki karşılaştırma tablosundan aracınızı bulabilirsiniz.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            "Vuruntu" şikayeti her şanzıman tipinde farklı bir mekanizmadan gelir.
            DSG'deki vuruntu ile PowerShift'tekinin sebebi benzer görünse de
            çözüm yöntemi ve maliyet önemli ölçüde ayrışır. Renault Clio, Megane
            veya Captur gibi robotize vites kullanan modellerde şikâyet
            yaşıyorsanız{' '}
            <Link href="/rehber/edc-vuruntu/" className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors">
              EDC vuruntu nedenleri
            </Link>{' '}
            ayrı bir kol; ön tanıyı bu rehberle eşleştirmek gereksiz parça
            değişiminin önüne geçer.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Aşağıda 4 tip karşılaştırmasını ve hepsinde görülen 5 ortak nedeni
            bulacaksınız — vuruntu kavrama kaynaklıysa onarım{" "}
            <Link
              href="/hizmetler/dsg-kavrama-degisimi/"
              className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
            >
              DSG kavrama grup değişimi hizmetimiz
            </Link>{" "}
            kapsamında yapılır.
          </p>
        </section>

        {/* ── TİP KARŞILAŞTIRMA ──────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Hangi Şanzıman Tipinde Hangi Vuruntu?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Her tip için vuruntu sıklığı, tipik neden ve detay rehberine bağlantı.
            </p>

            <div className="space-y-4">
              {tipler.map((tip) => (
                <div
                  key={tip.kod}
                  className="border border-border-hairline rounded-xl bg-graphite-base p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                        {tip.kod}
                      </div>
                      <div className="font-saira text-sm text-text-secondary">
                        {tip.markalar}
                      </div>
                    </div>
                    <span className={`shrink-0 font-jetbrains text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tip.renk}`}>
                      {tip.badge}
                    </span>
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                    {tip.neden}
                  </p>
                  <Link
                    href={tip.href}
                    className="font-saira text-sm font-medium text-brass hover:text-brass/80 transition-colors underline underline-offset-2"
                  >
                    {tip.linkMetin}
                  </Link>
                </div>
              ))}
            </div>

            {/* ZF / Aisin notu */}
            <div className="mt-4 border border-border-hairline rounded-xl bg-graphite-base p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                ZF / Aisin — Tork Konvertörlü
              </div>
              <div className="font-saira text-sm text-text-secondary mb-2">
                Mercedes, BMW, Opel, Toyota (6-AT), Peugeot / Citroen Aisin
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Tork konvertörlü şanzımanlar klasik kavrama kullanmadığı için
                vuruntu pratikte görülmez. Sert geçiş hissediliyorsa solenoid
                valf kirliliği veya tork konvertör kilitleme arızası araştırılır.
              </p>
            </div>
          </div>
        </section>

        {/* ── ORTAK NEDENLER ─────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Tüm Tiplerde Görülen 5 Ortak Neden
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Şanzıman tipi ne olursa olsun, bu nedenlerin herhangi biri vuruntya
            yol açabilir.
          </p>

          <div className="space-y-5">
            {ortakNedenler.map((n) => (
              <div key={n.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass/60 shrink-0 w-6 mt-0.5">
                  {n.no}
                </div>
                <div>
                  <div className="font-saira text-sm font-semibold text-text-primary mb-1">
                    {n.baslik}
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed">
                    {n.aciklama}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── NE ZAMAN TEHLİKELİ? ────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Vuruntu Ne Zaman Acil Hale Gelir?
            </h2>

            <div className="space-y-4">
              {[
                {
                  isaret: "Soğukta yalnızca 1→2 geçişte",
                  durum: "Erken evre",
                  aciklama: "Kavrama adaptasyonu bozulmuş veya plaket %20–30 aşınmış. Servis kontrolü yeterli, masraf düşük.",
                  renk: "text-green-600 bg-green-50 border-green-200",
                },
                {
                  isaret: "Her hava, birden fazla vites",
                  durum: "Orta evre",
                  aciklama: "Plaket aşınması %50+ seviyesinde. Kavrama seti değişimi gerekli — geciktirmek volantı riske atar.",
                  renk: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  isaret: "Güçlü vuruntu + zaman zaman kayma",
                  durum: "İleri evre",
                  aciklama: "Metal toz birikimi başlamış, volant yüzeyi hasar görmüş olabilir. Birden fazla parça değişimi gerekebilir.",
                  renk: "text-orange-700 bg-orange-50 border-orange-200",
                },
                {
                  isaret: "Her geçişte vuruntu + uyarı lambası",
                  durum: "Kritik",
                  aciklama: "Kavrama + volant + mekatronik kart kirliliği. Bu aşamada masraf 3–4 kat yüksek. Acilen servise getirin.",
                  renk: "text-red-700 bg-red-50 border-red-200",
                },
              ].map((s) => (
                <div key={s.isaret} className={`border rounded-xl p-5 ${s.renk}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="font-jetbrains text-xs font-semibold">{s.isaret}</span>
                    <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider shrink-0">
                      {s.durum}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed">{s.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SSS ────────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="otomatik-sanziman-vuruntu" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              Şanzıman Tipinize Göre Detaylı Rehber
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/rehber/dsg-vuruntu-semptomlari", tip: "DSG / S-Tronic", baslik: "DSG Vuruntu: DQ200 ve DQ250 Detayları →" },
                { href: "/rehber/powershift-vuruntu", tip: "Ford PowerShift", baslik: "PowerShift Vuruntu: DPS6 Arıza Belirtileri →" },
                { href: "/rehber/edc-vuruntu", tip: "Renault EDC", baslik: "EDC Vuruntu: EDC7 / EDC8 Rehberi →" },
                { href: "/rehber/cvt-vuruntu", tip: "CVT", baslik: "CVT Şanzımanda Vuruntu →" },
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
              Aracınız vuruntu yapıyor mu?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Hangi şanzıman tipine sahip olduğunuzu bilmesek de,
              30 dakikada teşhis koyuyoruz. Ücretsiz ön tanı — net fiyat, sürpriz fatura yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Kavrama değişimi fiyatları →
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
