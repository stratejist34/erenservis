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
  title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız? | Eren Servis Bostancı",
  description:
    "DSG anahtar işareti, P sembolü veya vites göstergesi yanıp sönüyor mu? " +
    "Her uyarı lambası farklı anlam taşır. Bostancı'da ücretsiz hata kodu okuma — Eren Servis.",
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
    title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız? | Eren Servis",
    description:
      "DSG'de anahtar işareti veya P lambası yanıyorsa durumu anlayın. " +
      "Bostancı'da ücretsiz hata kodu okuma — Eren Servis.",
    url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari",
    type: "article",
    publishedTime: "2026-03-30",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/images/og/dsg-uyari-lambasi.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Uyarı Lambası Semptomu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari",
  },
};

// ─── SCHEMA ───────────────────────────────────────────────────────────────────
const faqItems = TRANSMISSION_FAQS["uyari-lambasi-semptomlari"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Uyarı Lambası Yandı — Ne Yapmalısınız?",
  description:
    "DSG anahtar işareti, P sembolü veya vites göstergesi yanıyorsa ne anlama " +
    "gelir, ne yapılmalı — model bazında açıklama.",
  url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari",
  datePublished: "2026-03-30",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "DSG Uyarı Lambası",
    url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Uyarı Lambası Teşhis",
  description:
    "P ışığı ve şanzıman uyarı lambası teşhisi, hata kodu okuma ve mekatronik onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/uyari-lambasi-semptomlari",
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
    kart: "border-red-200 bg-red-50",
    etiket: "bg-red-100 text-red-700",
    etiketMetin: "Acil — çekici çağır",
    nokta: "bg-red-500",
  },
  "yüksek": {
    kart: "border-amber-200 bg-amber-50",
    etiket: "bg-amber-100 text-amber-700",
    etiketMetin: "Bugün servise git",
    nokta: "bg-amber-500",
  },
  orta: {
    kart: "border-blue-200 bg-blue-50",
    etiket: "bg-blue-100 text-blue-700",
    etiketMetin: "Yakın zamanda kontrol",
    nokta: "bg-blue-400",
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
              <a href="/rehber" className="hover:text-text-primary transition-colors">Rehber</a>
              <span>/</span>
              <span className="text-text-secondary">DSG Uyarı Lambası</span>
            </nav>

            {/* Acil uyarı bandı — PRESERVED semantic emergency */}
            <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-700/50 rounded-lg px-3 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-xs text-red-300 font-medium">
                Araç hareket etmiyorsa — aşağıya gidin
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

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Uyarı tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                {/* PRESERVED — semantic emergency red stat */}
                <div className="font-saira text-2xl font-semibold text-red-400">1</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Acil senaryo</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hata kodu okuma</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIZLI CEVAP BLOĞU ────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-10">
          <div className="border border-border-hairline bg-graphite-surface rounded-xl p-5 mb-6">
            <div className="font-jetbrains text-xs text-iron-light uppercase tracking-wider mb-3">
              Kısa cevap
            </div>
            <p className="font-saira text-sm text-text-secondary leading-relaxed">
              DSG uyarı lambaları mekatronik kartın kaydettiği hata kodlarını
              tetikler. <strong className="text-text-primary">Lamba yandığında araç sürülebilir olsa da
              hata kodu okutulmadan nedenini söylemek mümkün değil.</strong>{" "}
              Araç hareket etmiyorsa çekici — hareket ediyorsa aynı gün servis.
            </p>
          </div>

          {/* Acil durum kutusu — PRESERVED semantic emergency */}
          <div className="border-2 border-red-200 bg-red-50 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm font-bold text-red-700">
                Araç hareket etmiyor mu?
              </span>
            </div>
            <p className="text-sm text-red-700 mb-4 leading-relaxed">
              Vites göstergesi yanıp sönüyor, araç ilerlemiyor veya aniden
              durdu. Sürmeye çalışmayın — şanzıman koruma modunda.
            </p>
            <a
              href="tel:+905327153751"
              className="inline-block bg-red-600 text-white font-semibold text-sm
                         px-5 py-2.5 rounded-lg hover:bg-red-700 transition-colors"
            >
              Hemen ara: 0532 715 37 51
            </a>
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

          <div className="space-y-5">
            {lambalar.map((l) => {
              const stil = aciliyetStil[l.aciliyet];
              return (
                <div
                  key={l.sembol}
                  className={`border rounded-xl overflow-hidden ${stil.kart}`}
                >
                  {/* Başlık satırı */}
                  <div className="flex items-center justify-between gap-3 px-5 pt-5 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${stil.nokta}`} />
                        <span className="font-jetbrains text-xs text-slate-600">{l.renk}</span>
                      </div>
                      <h3 className="font-saira font-semibold text-sm sm:text-base text-slate-800">
                        {l.baslik}
                      </h3>
                    </div>
                    <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>

                  {/* Kısa cevap */}
                  <div className="px-5 pb-3">
                    <p className="font-saira text-sm font-medium text-slate-800">{l.kisa}</p>
                  </div>

                  {/* Açıklama */}
                  <div className="px-5 pb-3">
                    <p className="font-saira text-sm text-slate-700 leading-relaxed">
                      {l.aciklama}
                    </p>
                  </div>

                  {/* Yapılacaklar */}
                  <div className="px-5 pb-5">
                    <div className="font-jetbrains text-xs text-slate-600 uppercase tracking-wide mb-2">
                      Ne yapmalısınız?
                    </div>
                    <ol className="space-y-1.5">
                      {l.yapilacak.map((adim, i) => (
                        <li key={i} className="flex items-start gap-2 font-saira text-sm text-slate-700">
                          <span className="shrink-0 font-jetbrains text-xs font-bold opacity-40 mt-0.5">
                            {i + 1}.
                          </span>
                          {adim}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-3 font-jetbrains text-xs text-slate-600">
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
              okumayan servise dikkat edin. Eren Servis&apos;te her kontrol
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
              href="/rehber/dsg-vuruntu-semptomlari"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Vuruntu Neden Olur? →
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
            <a
              href="/iletisim"
              className="block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">İletişim</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                Ücretsiz Ön Tanı İçin Ara →
              </div>
            </a>
            <a
              href="/rehber/otomatik-sanziman-ariza-lambasi"
              className="sm:col-span-2 block border border-border-hairline bg-graphite-surface rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                Tüm şanzıman tiplerinde arıza lambası anlamları →
              </div>
            </a>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Lamba yandı, ne yapacağınızı bilmiyorsunuz?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Getirin, hata kodunu ücretsiz okuyalım. Nedenini net söyleriz —
              onayınız olmadan hiçbir işlem yapılmaz.
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
                href="/iletisim"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium
                           px-6 py-3 rounded-full hover:border-brass hover:text-text-primary
                           transition-colors"
              >
                Mesaj gönder →
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
