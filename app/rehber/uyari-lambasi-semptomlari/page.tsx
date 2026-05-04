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
  title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız? | Eren Otomatik Şanzıman Servisi Bostancı",
  description:
    "DSG anahtar işareti, P sembolü veya vites göstergesi yanıp sönüyor mu? " +
    "Her uyarı lambası farklı anlam taşır. Bostancı'da ücretsiz hata kodu okuma — Eren Otomatik Şanzıman Servisi.",
  keywords: [
    "dsg uyarı lambası",
    "dsg anahtar işareti yanıp sönüyor",
    "dsg p yanıp sönüyor araba çalışmıyor",
    "dsg şanzıman vites göstergesi yanıp sönüyor",
    "dsg hata kodu",
    "dsg şanzıman uyarı ışığı",
    "otomatik şanzıman uyarı lambası",
  ],
  openGraph: {
    title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız? | Eren Otomatik Şanzıman Servisi",
    description:
      "DSG'de anahtar işareti veya P lambası yanıyorsa durumu anlayın. " +
      "Bostancı'da ücretsiz hata kodu okuma — Eren Otomatik Şanzıman Servisi.",
    url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari/",
    type: "article",
    publishedTime: "2026-03-30",
    authors: ["Eren Otomatik Şanzıman Servisi"],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari/",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["uyari-lambasi-semptomlari"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız?",
  description:
    "DSG anahtar işareti, P sembolü veya vites göstergesi yanıyorsa ne anlama " +
    "gelir, ne yapılmalı — model bazında açıklama.",
  url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari/",
  datePublished: "2026-03-30",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  {
    name: "DSG Uyarı Lambası",
    url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari/",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Uyarı Lambası Teşhis",
  description:
    "P ışığı ve şanzıman uyarı lambası teşhisi, hata kodu okuma ve mekatronik onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari/",
});

// ─── VERİ ─────────────────────────────────────────────────────────────────────
const lambalar = [
  {
    sembol: "P",
    renk: "turuncu / sarı",
    baslik: "P veya DSG harfi yanıp sönüyor",
    kisa: "Şanzıman arızası — araç sürülebilir ama erteleme.",
    aciklama:
      "Göstergede P harfi veya DSG yazısı yanıp sönüyorsa mekatronik kart " +
      "bir hata kodu kaydetmiştir. Araç çoğu zaman sürülebilir durumda kalır " +
      "ama şanzıman koruma moduna girebilir — üst viteslere geçmez veya geç " +
      "geçiş yapar. Hata kodunu okutmadan nedenini söylemek mümkün değil.",
    yapilacak: [
      "Motoru kapatıp 30 saniye bekleyin — hata geçici ise söner.",
      "Sönmezse aynı gün servise getirin, sürüşü uzatmayın.",
      "Sürüş sırasında vuruntu veya kayma eşlik ediyorsa çekin.",
    ],
    aciliyet: "yüksek",
    araclar: "Golf, Polo, Passat, A3, A4, Tiguan ve DSG'li tüm modeller",
  },
  {
    sembol: "🔑",
    renk: "sarı / turuncu",
    baslik: "Anahtar işareti yanıp sönüyor",
    kisa: "Kavrama veya şanzıman uyarısı — en yaygın DSG uyarısı.",
    aciklama:
      "Göstergede anahtar simgesi yanıp sönmesi DSG'nin kavrama veya " +
      "mekatronik sistemiyle ilgili bir sorun tespit ettiğini gösterir. " +
      "Özellikle soğuk havalarda veya uzun süre park sonrası ilk kalkışta " +
      "çıkması kavrama aşınmasının erken işareti olabilir. Anahtar ışığı " +
      "DSG'nin en sık karşılaşılan uyarısıdır.",
    yapilacak: [
      "Motoru kapatın, 1–2 dakika bekleyin, yeniden çalıştırın.",
      "Işık tekrar yanıyorsa o gün servise getirin.",
      "Vuruntu veya geç geçiş de varsa kavrama kontrolü yaptırın.",
    ],
    aciliyet: "yüksek",
    araclar: "DQ200 kuru kavramalı modellerde (Golf 6/7, Polo, A3) daha sık",
  },
  {
    sembol: "⚙",
    renk: "turuncu / kırmızı",
    baslik: "Vites göstergesi yanıp sönüyor, araç çalışmıyor",
    kisa: "Araç hareket etmiyorsa acil — çekici çağırın.",
    aciklama:
      "Göstergede vites sembolü yanıp sönüyor ve araç ilerlemiyor ya da " +
      "aniden duruyorsa şanzıman ciddi koruma moduna girmiştir. Bu noktada " +
      "zorla sürmek mekatronik kartı veya kavramayı kalıcı olarak " +
      "bozabilir. Çekici en güvenli seçenektir.",
    yapilacak: [
      "Aracı yol kenarına çekin, motoru kapatın.",
      "Yeniden çalıştırmayı 1 kez deneyin — hareket etmiyorsa durdurun.",
      "Çekici çağırın, sürmeye çalışmayın.",
      "Servisi arayın, durumu ve arabayı tarif edin.",
    ],
    aciliyet: "kritik",
    araclar: "Tüm DSG modeller — özellikle DQ200 ve DQ250",
  },
  {
    sembol: "!",
    renk: "sarı",
    baslik: "Şanzıman veya motor uyarı lambası (genel)",
    kisa: "Hata kodu okutulmadan yorum yapılamaz.",
    aciklama:
      "Sarı ünlem veya motor uyarı lambası şanzımanla doğrudan ilgili " +
      "olmayabilir — oksijen sensörü, egzoz veya yakıt sistemi de bu lambayı " +
      "yakar. Ancak şanzıman semptomu da eşlik ediyorsa (vuruntu, geç geçiş) " +
      "önce şanzıman kontrolü yaptırın.",
    yapilacak: [
      "Semptom yoksa acil değil, en kısa sürede kontrol ettirin.",
      "Vuruntu veya geç geçiş varsa o gün servise getirin.",
      "Hata kodu okutulmadan parça değişimi önerisini kabul etmeyin.",
    ],
    aciliyet: "orta",
    araclar: "Tüm modeller",
  },
];

const aciliyetStil: Record<
  string,
  { kart: string; etiket: string; etiketMetin: string; nokta: string }
> = {
  kritik: {
    kart: "border-red-500/30 bg-red-950/20",
    etiket: "bg-red-500/15 text-red-300 border border-red-500/20",
    etiketMetin: "Acil — çekici çağır",
    nokta: "bg-red-400",
  },
  "yüksek": {
    kart: "border-amber-500/30 bg-amber-500/8",
    etiket: "bg-amber-500/15 text-amber-200 border border-amber-500/20",
    etiketMetin: "Bugün servise git",
    nokta: "bg-amber-400",
  },
  orta: {
    kart: "border-border-subtle bg-graphite-surface",
    etiket: "bg-brass/10 text-brass border border-brass/20",
    etiketMetin: "Kontrol ettir",
    nokta: "bg-brass",
  },
};

// ─── SAYFA ────────────────────────────────────────────────────────────────────
export default function UyariLambasiSemptomlariPage() {
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

        {/* ── HERO — kırmızı ton, acil his ─────────────────────────────── */}
        <section className="bg-graphite-base px-4 pt-28 pb-12">
          <div className="max-w-2xl mx-auto">

            <nav className="text-xs text-text-secondary mb-6 flex items-center gap-2">
              <Link href="/" className="hover:text-text-primary transition-colors">Ana Sayfa</Link>
              <span>/</span>
              <Link href="/rehber" className="hover:text-text-primary transition-colors">Rehber</Link>
              <span>/</span>
              <span className="text-text-secondary">DSG Uyarı Lambası</span>
            </nav>

            {/* Acil uyarı bandı — PRESERVED semantic emergency */}
            <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-500/30 rounded-lg px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs text-red-300 font-medium">
                Araç hareket etmiyorsa sürmeye devam etmeyin
              </span>
            </div>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Uyarı Lambası Yandı — Ne Yapmalısınız?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Anahtar işareti, P sembolü veya vites göstergesi yanıp sönüyorsa
              her biri farklı anlam taşır. Hangi lamba yandığını bulun,
              ne yapacağınızı öğrenin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="rounded-xl border border-border-hairline bg-graphite-surface p-4 text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Uyarı tipi</div>
              </div>
              <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4 text-center">
                {/* PRESERVED — semantic emergency red stat */}
                <div className="font-saira text-2xl font-semibold text-red-400">1</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Kritik senaryo</div>
              </div>
              <div className="rounded-xl border border-border-hairline bg-graphite-surface p-4 text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hata kodu okuma</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIZLI CEVAP BLOĞU ────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-10">
          <div className="border border-border-hairline bg-graphite-surface rounded-2xl p-6 mb-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="font-jetbrains text-xs text-iron-light uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="font-saira text-sm text-text-secondary leading-relaxed">
              DSG uyarı lambaları mekatronik kartın kaydettiği hata kodlarını
              tetikler. <strong className="text-text-primary">Lamba yandığında araç sürülebilir olsa da
              hata kodu okutulmadan nedenini söylemek mümkün değil.</strong>{" "}
              Araç hareket etmiyorsa çekici — hareket ediyorsa aynı gün servis. Kod okutma
              ve sonrasındaki revizyon süreci{" "}
              <Link
                href="/hizmetler/dsg-sanziman-tamiri/"
                className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
              >
                DSG arıza kodu teşhis ve mekatronik onarımı
              </Link>{" "}
              kapsamında ilerler.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-red-500/25 bg-red-950/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="text-sm font-bold text-red-300">
                  Hemen durmanız gereken durum
                </span>
              </div>
              <p className="font-saira text-sm text-red-100/90 mb-4 leading-relaxed">
                Vites göstergesi yanıp sönüyor, araç ilerlemiyor veya aniden
                durdu. Sürmeye çalışmayın; şanzıman koruma modunda olabilir.
              </p>
              <a
                href="tel:+905327153751"
                className="inline-block bg-red-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors"
              >
                Hemen ara: 0532 715 37 51
              </a>
            </div>

            <div className="border border-border-hairline bg-graphite-surface rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-brass" />
                <span className="text-sm font-bold text-text-primary">
                  Araç gidiyorsa ilk adım
                </span>
              </div>
              <p className="font-saira text-sm text-text-secondary mb-4 leading-relaxed">
                Işık yanıyor ama araç ilerliyorsa tahmin yürütmeyin. Aynı gün hata
                kodu okutulursa mekatronik, kavrama ve sensör tarafı hızla ayrıştırılır.
              </p>
              <Link
                href="/hizmetler/dsg-sanziman-tamiri/"
                className="inline-flex items-center text-sm font-semibold text-text-primary underline decoration-brass/40 underline-offset-2 hover:decoration-brass transition-colors"
              >
                DSG teşhis sürecini gör →
              </Link>
            </div>
          </div>
        </section>

        {/* ── LAMBA KARTLARI ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Hangi Lamba Yandı?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Sembolü veya rengi tanıyın — yapılacaklar aşağıda.
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-red-300 mb-2">Kritik</div>
              <p className="font-saira text-sm text-text-primary">Araç ilerlemiyorsa sürmeye devam etmeyin, çekici çağırın.</p>
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/8 p-4">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-amber-200 mb-2">Yüksek</div>
              <p className="font-saira text-sm text-text-primary">Araç gidiyor olsa bile aynı gün hata kodu okutulmalı.</p>
            </div>
            <div className="rounded-xl border border-border-subtle bg-graphite-surface p-4">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-brass mb-2">Genel</div>
              <p className="font-saira text-sm text-text-primary">Semptom yoksa planlı kontrol yeterli olabilir, parça değişimine koşmayın.</p>
            </div>
          </div>

          <div className="space-y-5">
            {lambalar.map((l) => {
              const stil = aciliyetStil[l.aciliyet];
              return (
                <div
                  key={l.sembol}
                  className={`border rounded-xl overflow-hidden ${stil.kart}`}
                >
                  {/* Başlık satırı */}
                  <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center min-w-8 h-8 rounded-lg border border-white/10 bg-graphite-base text-text-primary font-jetbrains text-sm">
                          {l.sembol}
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full ${stil.nokta}`} />
                        <span className="font-jetbrains text-xs text-text-secondary">{l.renk}</span>
                      </div>
                      <h3 className="font-saira font-semibold text-sm sm:text-base text-text-primary">
                        {l.baslik}
                      </h3>
                    </div>
                    <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>

                  {/* Kısa cevap */}
                  <div className="px-5 pb-3 border-t border-white/5">
                    <p className="font-saira text-sm font-medium text-text-primary pt-4">{l.kisa}</p>
                  </div>

                  {/* Açıklama */}
                  <div className="px-5 pb-3">
                    <p className="font-saira text-sm text-text-secondary leading-relaxed">
                      {l.aciklama}
                    </p>
                  </div>

                  {/* Yapılacaklar */}
                  <div className="px-5 pb-5">
                    <div className="font-jetbrains text-xs text-iron-light uppercase tracking-wide mb-2">
                      Ne yapmalısınız?
                    </div>
                    <ol className="space-y-1.5">
                      {l.yapilacak.map((adim, i) => (
                        <li key={i} className="flex items-start gap-2 font-saira text-sm text-text-secondary">
                          <span className="shrink-0 font-jetbrains text-xs font-bold text-brass/70 mt-0.5">
                            {i + 1}.
                          </span>
                          {adim}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4 pt-3 border-t border-white/5 font-jetbrains text-xs text-iron-light">
                      Etkilenen araçlar: {l.araclar}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── HATA KODU OLMADAN YORUM YAPILMAZ ─────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Hata Kodu Okutulmadan Parça Değiştirmeyin
            </h2>
            <p className="font-saira text-text-secondary text-sm leading-relaxed mb-4">
              DSG uyarı lambası onlarca farklı hata kodu tarafından
              tetiklenebilir. Aynı P lambası bir gün sadece sensör
              temizliğiyle geçerken başka bir araçta mekatronik kart
              değişimi gerektirebilir.
            </p>
            <p className="font-saira text-text-secondary text-sm leading-relaxed mb-6">
              &quot;DSG&apos;niz bozulmuş, mekatronik kart lazım&quot; diyen ama hata kodu
              okumayan servise dikkat edin. Eren Otomatik Şanzıman Servisi&apos;nde her kontrol
              önce hata kodu okumasıyla başlar — tanı olmadan teklif verilmez.
            </p>

            {/* Süreç */}
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { no: "1", baslik: "Hata kodu okuma", alt: "Ücretsiz" },
                { no: "2", baslik: "Tanı ve teklif", alt: "Net fiyat" },
                { no: "3", baslik: "Onay sonrası işlem", alt: "Garanti ile" },
              ].map((adim) => (
                <div
                  key={adim.no}
                  className="bg-graphite-base border border-border-hairline rounded-xl p-4"
                >
                  <div className="font-saira text-2xl font-semibold text-text-primary mb-1">
                    {adim.no}
                  </div>
                  <div className="font-saira text-xs font-semibold text-text-primary mb-0.5">
                    {adim.baslik}
                  </div>
                  <div className="font-saira text-xs text-brass font-medium">
                    {adim.alt}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border-hairline bg-graphite-base p-5">
              <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-iron-light mb-2">
                Pratik not
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                “Direkt mekatronik değişecek” veya “kesin kavrama bitmiş” gibi hızlı yorumlar,
                kod okuma ve canlı veri olmadan güvenilir değildir. Bu sayfa teşhis öncesi yön bulmanız içindir;
                kesin karar için hata kodu ve semptom birlikte değerlendirilmelidir.
              </p>
            </div>
          </div>
        </section>

        {/* ── SSS ──────────────────────────────────────────────────────── */}
        <section className="bg-graphite-base px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Sık Sorulan Sorular
            </h2>
            <TransmissionFaq slug="uyari-lambasi-semptomlari" />
          </div>
        </section>

        {/* ── İÇ LİNKLER ──────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-10">
          <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
            İlgili Rehberler
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              href="/rehber/dsg-kavrama-ariza-belirtileri"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Arızası Belirtileri →
              </div>
            </Link>
            <Link
              href="/rehber/dsg-vuruntu-semptomlari"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Vuruntu Neden Olur? →
              </div>
            </Link>
            <Link
              href="/hizmetler/dsg-kavrama-degisimi"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Değişimi Fiyatı 2026 →
              </div>
            </Link>
            <Link
              href="/iletisim"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">İletişim</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                Ücretsiz Ön Tanı İçin Ara →
              </div>
            </Link>
            <Link
              href="/rehber/otomatik-sanziman-ariza-lambasi"
              className="sm:col-span-2 block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                Tüm şanzıman tiplerinde arıza lambası anlamları →
              </div>
            </Link>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-2xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Lamba yandı, ne yapacağınızı bilmiyorsunuz?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Getirin, hata kodunu ücretsiz okuyalım. Nedenini net söyleriz —
              onayınız olmadan hiçbir işlem yapılmaz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold
                           px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <Link
                href="/iletisim"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium
                           px-6 py-3 rounded-full hover:border-brass hover:text-text-primary
                           transition-colors"
              >
                Mesaj gönder →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-left">
              <div className="rounded-xl border border-white/5 bg-graphite-base p-4">
                <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-iron-light mb-2">1</div>
                <p className="font-saira text-sm text-text-primary">Gösterge sembolünü ve semptomu dinleriz.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-graphite-base p-4">
                <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-iron-light mb-2">2</div>
                <p className="font-saira text-sm text-text-primary">Hata kodunu okur, hangi sistemin uyardığını ayırırız.</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-graphite-base p-4">
                <div className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-iron-light mb-2">3</div>
                <p className="font-saira text-sm text-text-primary">Net teşhis ve işlem sırasını onayınızla çıkarırız.</p>
              </div>
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
