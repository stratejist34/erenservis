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
  title: "Otomatik Şanzıman Arıza Lambası: Ne Anlama Gelir? | Eren Servis Bostancı",
  description:
    "DSG, EDC, CVT ve ZF şanzımanlarda arıza lambası ne anlama gelir, ne yapılmalı? " +
    "Sarı ile kırmızı lamba farkı, limp mode, hata kodu okuma. Bostancı'da ücretsiz teşhis.",
  keywords: [
    "otomatik şanzıman arıza lambası",
    "şanzıman uyarı lambası ne demek",
    "şanzıman arıza lambası yandı ne yapmalı",
    "dsg arıza lambası",
    "otomatik vites uyarı ışığı",
    "şanzıman sarı lamba",
    "dsg p lambası",
  ],
  openGraph: {
    title: "Otomatik Şanzıman Arıza Lambası: Ne Anlama Gelir? | Eren Servis",
    description:
      "DSG, EDC, CVT şanzımanlarda arıza lambası anlamı ve yapılması gerekenler. " +
      "Bostancı'da ücretsiz hata kodu okuma — Eren Servis.",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-ariza-lambasi",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzıman Arıza Lambası",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/otomatik-sanziman-ariza-lambasi/",
  },
};

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-ariza-lambasi"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzıman Arıza Lambası: Ne Anlama Gelir, Ne Yapılmalı?",
  description:
    "DSG, EDC, CVT ve ZF şanzımanlarda arıza lambası tipleri, anlamları ve " +
    "aciliyet değerlendirmesi.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-ariza-lambasi",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "Otomatik Şanzıman Arıza Lambası",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-ariza-lambasi",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Şanzıman Arıza Lambası Teşhis ve Hata Kodu Okuma",
  description:
    "Tüm otomatik şanzıman tiplerinde arıza lambası teşhisi ve hata kodu okuma. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-ariza-lambasi",
});

const tipler = [
  {
    kod: "DSG / S-Tronic",
    markalar: "VW, Audi, Skoda, Seat, Cupra",
    lamba: "P ışığı veya anahtar simgesi",
    anlam:
      'Mekatronik kart hata kodu kaydetmiş. "P" yazısı yanıp sönüyorsa araç ' +
      "hareket etmeyebilir; sürekli yanıyorsa dikkatli sürmeye devam edilebilir.",
    href: "/rehber/uyari-lambasi-semptomlari",
    linkMetin: "DSG arıza lambası detayları →",
    renk: "border-red-200 bg-red-50 text-red-700",
    badge: "En yaygın",
  },
  {
    kod: "Renault EDC / DCT",
    markalar: "Clio, Fluence, Megane, Captur; Nissan Juke",
    lamba: "Sarı dişli simgesi",
    anlam:
      "EDC7/EDC8 kontrol ünitesi solenoid valf veya basınç sensörü hatası tespit etmiş. " +
      "Genellikle limp mode ile birlikte gelir.",
    href: "/rehber/edc-ariza-lambasi",
    linkMetin: "EDC arıza lambası rehberi →",
    renk: "border-amber-200 bg-amber-50 text-amber-700",
    badge: "Yaygın",
  },
  {
    kod: "CVT",
    markalar: "Toyota, Honda, Nissan, Subaru",
    lamba: "Şanzıman uyarı ışığı",
    anlam:
      "Kayış/pully basınç anomalisi veya kontrol ünitesi hatası. CVT'de lamba " +
      "nadiren yanar ama yandığında ciddiye alınmalıdır.",
    href: "/rehber/cvt-ariza-lambasi",
    linkMetin: "CVT arıza lambası rehberi →",
    renk: "border-blue-200 bg-blue-50 text-blue-700",
    badge: "Nadir",
  },
];

const yapilmamasiGerekenler = [
  {
    no: "01",
    baslik: "Lambayı yoksaymak",
    aciklama:
      "Arıza lambası söndü diye sorun geçmez. Hata kodu mekatronik kartta " +
      "kayıtlı kalır. Yoksaymak altta yatan sorunu derinleştirir.",
  },
  {
    no: "02",
    baslik: "Limp mode'da uzun mesafe sürmek",
    aciklama:
      "Şanzıman kendini korumak için güç kısıtlamasına girer. Bu modda uzun " +
      "süre sürüş mekatronik kartı veya kavramayı kalıcı olarak bozabilir.",
  },
  {
    no: "03",
    baslik: "Hata kodunu silip geçmek",
    aciklama:
      "Standart OBD cihazlarıyla hata kodu silinse de neden ortadan kalkmaz. " +
      "Lamba kısa süre içinde yeniden yanar — üstelik teşhis için önemli geçmiş " +
      "veri silinmiş olur.",
  },
  {
    no: "04",
    baslik: "Teşhissiz parça değiştirmek",
    aciklama:
      "Aynı arıza lambası onlarca farklı hata kodundan tetiklenebilir. " +
      "Hata kodu okumadan yapılan parça değişimi gereksiz maliyet yaratır " +
      "ve gerçek sorun çözülmez.",
  },
];

export default function OtomatikSanzımanArızaLambasıPage() {
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
              <span className="text-text-secondary">Şanzıman Arıza Lambası</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Genel Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Otomatik Şanzıman Arıza Lambası Yandı — Ne Anlama Gelir?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              DSG, EDC, CVT ve ZF şanzımanlarda arıza lambası farklı mesajlar
              taşır. Sarı mı, kırmızı mı? Yanıp sönüyor mu? Bu rehber hangi
              durumda ne yapmanız gerektiğini net olarak açıklar.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Şanzıman tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Kaçınılacak hata</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hata kodu okuma</div>
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
              Şanzıman arıza lambası{" "}
              <strong>üç temel mesajdan birini</strong> taşır: geçici sensör
              titremesi (en iyi senaryo), yazılım/adaptasyon hatası (orta ciddiyet)
              veya mekanik/mekatronik arıza (acil). Hangi senaryo olduğunu
              yalnızca hata kodu okuması netleştirir — lambayı yoksaymak
              seçenek değildir.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Arıza lambası yanınca ilk tepki genellikle "acaba kendiliğinden söner mi?"
            sorusu olur. Söner de — ama bu sorunun geçtiği anlamına gelmez.
            Hata kodu mekatronik kartta kayıtlı kalır; altta yatan neden büyümeye
            devam eder.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Aşağıda şanzıman tipine göre lamba anlamlarını, yapılmaması gerekenleri
            ve aciliyet değerlendirmesini bulacaksınız.
          </p>
        </section>

        {/* ── TİP KARŞILAŞTIRMA ──────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Şanzıman Tipine Göre Arıza Lambası
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Her şanzıman tipi farklı bir simge ve anlam kullanır — aracınızı tabloda bulun.
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
                  <div className="font-jetbrains text-[11px] font-medium text-text-secondary mb-2 tracking-wide">
                    Lamba: <span className="text-text-primary">{tip.lamba}</span>
                  </div>
                  <p className="font-saira text-sm text-text-secondary leading-relaxed mb-4">
                    {tip.anlam}
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
                Mercedes, BMW, Opel, Peugeot, Citroen, Toyota (6-AT)
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                Bu sistemlerde şanzıman özel uyarı lambası genellikle motor
                arıza lambasıyla birleşik çalışır. Sarı ünlem veya dişli
                simgesi solenoid valf kirliliği ya da yağ basınç hatasını
                işaret eder. Hata kodu okunmadan kaynağı belirlemek mümkün değildir.
              </p>
            </div>
          </div>
        </section>

        {/* ── YAPILMAMASI GEREKENLER ─────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Arıza Lambası Yandığında Yapılmaması Gerekenler
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Bu 4 hata, basit bir arızayı pahalı revizyona dönüştürür.
          </p>

          <div className="space-y-5">
            {yapilmamasiGerekenler.map((n) => (
              <div key={n.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-red-400 shrink-0 w-6 mt-0.5">
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

        {/* ── ACİLİYET REHBERİ ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Ne Zaman Servise Gidilmeli?
            </h2>

            <div className="space-y-4">
              {[
                {
                  durum: "Sarı lamba — sürekli yanıyor, başka belirti yok",
                  sure: "48 saat içinde",
                  aciklama:
                    "Sistem uyarı verdi ama henüz koruma moduna girmedi. " +
                    "Dikkatli kullanımla kısa mesafe sürülebilir; ancak ertelemek riski artırır.",
                  renk: "text-green-700 bg-green-50 border-green-200",
                },
                {
                  durum: "Sarı lamba — yanıp sönüyor veya vuruntu eşlik ediyor",
                  sure: "Aynı gün",
                  aciklama:
                    "Limp mode başlamış veya başlamak üzere. Sürüşü minimum tutun, " +
                    "uzun mesafe yapmayın.",
                  renk: "text-amber-700 bg-amber-50 border-amber-200",
                },
                {
                  durum: "Kırmızı lamba veya araç hareket etmiyor",
                  sure: "Hemen durdurun",
                  aciklama:
                    "Şanzıman koruma modunda. Sürüşe devam etmek mekatronik kartı " +
                    "kalıcı olarak bozabilir. Çekici çağırın.",
                  renk: "text-red-700 bg-red-50 border-red-200",
                },
                {
                  durum: "Lamba söndü ama vuruntu / kayma sürüyor",
                  sure: "Bu hafta içinde",
                  aciklama:
                    "Hata kodu kendiliğinden silinmiş olabilir; sorun devam ediyor. " +
                    "Hata kodu geçmişi için teşhis gereklidir.",
                  renk: "text-orange-700 bg-orange-50 border-orange-200",
                },
              ].map((s) => (
                <div key={s.durum} className={`border rounded-xl p-5 ${s.renk}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="font-saira text-sm font-medium">{s.durum}</span>
                    <span className="font-jetbrains text-[10px] font-bold uppercase tracking-wider shrink-0 whitespace-nowrap">
                      {s.sure}
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
            <TransmissionFaq slug="otomatik-sanziman-ariza-lambasi" />
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
                {
                  href: "/rehber/uyari-lambasi-semptomlari",
                  tip: "DSG / S-Tronic",
                  baslik: "DSG Arıza Lambası: P Işığı ve Anahtar Simgesi →",
                },
                {
                  href: "/rehber/edc-ariza-lambasi",
                  tip: "Renault EDC",
                  baslik: "EDC Arıza Lambası: Sarı Dişli Ne Demek? →",
                },
                {
                  href: "/rehber/cvt-ariza-lambasi",
                  tip: "CVT",
                  baslik: "CVT Arıza Lambası: Toyota, Honda, Nissan →",
                },
                {
                  href: "/rehber/otomatik-sanziman-vuruntu",
                  tip: "İlgili Rehber",
                  baslik: "Arıza Lambasıyla Gelen Vuruntu Neden Olur? →",
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
              Arıza lambası yandı mı?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Hata kodu okunduktan sonra nedenini ve maliyetini net olarak söylüyoruz.
              Onayınız olmadan hiçbir işlem başlamaz. Ücretsiz ön tanı — Bostancı, İstanbul.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/hizmetler/dsg-mekatronik-kart"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Mekatronik kart fiyatları →
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
