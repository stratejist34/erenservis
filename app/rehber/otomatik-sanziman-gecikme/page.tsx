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
  title: "Otomatik Şanzımanda Gecikme: Vites Geçişi Neden Yavaş? | Eren Otomatik Şanzıman Servisi Bostancı",
  description:
    "DSG, ZF, Aisin, CVT ve PowerShift şanzımanlarda vites gecikmesinin nedenleri. " +
    "Solenoid valf, yağ basıncı, adaptasyon bozukluğu ve çözümler. Bostancı, İstanbul.",
  keywords: [
    "otomatik şanzıman gecikme",
    "vites değişimi geç oluyor",
    "şanzıman vites geçişi yavaş",
    "dsg geç vites yapıyor",
    "zf şanzıman gecikme",
    "otomatik vites gecikmesi",
    "geç vites değişimi",
  ],
  openGraph: {
    title: "Otomatik Şanzımanda Gecikme: Vites Geç Geçiyor | Eren Otomatik Şanzıman Servisi",
    description:
      "DSG, ZF, Aisin ve CVT'de geç vites değişimi nedenleri ve çözümleri. Bostancı.",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-gecikme/",
    type: "article",
    publishedTime: "2026-04-17",
    authors: ["Eren Otomatik Şanzıman Servisi"],
    images: [
      {
        url: "https://www.erenservis.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Otomatik Şanzımanda Gecikme",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/otomatik-sanziman-gecikme/",
  },
};

const faqItems = TRANSMISSION_FAQS["otomatik-sanziman-gecikme"] ?? [];

const articleSchema = buildArticleSchema({
  title: "Otomatik Şanzımanda Gecikme: Vites Geçişi Neden Yavaş?",
  description:
    "DSG, ZF, Aisin, CVT ve PowerShift şanzımanlarda vites gecikmesinin nedenleri, " +
    "ayırt edici belirtiler ve çözüm yaklaşımı.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-gecikme/",
  datePublished: "2026-04-17",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber/" },
  {
    name: "Otomatik Şanzımanda Gecikme",
    url: "https://www.erenservis.net/rehber/otomatik-sanziman-gecikme/",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "Otomatik Şanzıman Vites Gecikmesi Teşhisi ve Onarımı",
  description:
    "DSG, ZF, Aisin ve CVT'de gecikme teşhisi, solenoid revizyonu ve adaptasyon. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/otomatik-sanziman-gecikme/",
});

const tipler = [
  {
    kod: "DSG / DCT",
    markalar: "VW, Audi, Skoda, Seat, Cupra",
    kaynak: "Mekatronik solenoid + kavrama adaptasyonu",
    anlam:
      "DSG'de gecikme solenoid valf kirliliği veya kavrama bite point " +
      "adaptasyon bozukluğundan çıkar. Mekatronik revizyonu ve yağ değişimi + " +
      "adaptasyon genellikle çözer — solenoid valf için detay rehberimize bakın.",
    href: "/rehber/solenoid-valf-ariza-belirtileri",
    linkMetin: "Solenoid valf arıza detayı →",
    renk: "border-red-200 bg-red-50 text-red-700",
    badge: "En yaygın",
  },
  {
    kod: "ZF / Aisin",
    markalar: "Mercedes, BMW, Opel, Peugeot, Citroen, Volvo",
    kaynak: "Valve body solenoid + yağ dejenerasyonu",
    anlam:
      "ZF 8HP, Mercedes 7G/9G-Tronic ve Aisin TF80-SC'de gecikme valve body " +
      "tıkanıklığı ve yağ yaşlanmasından kaynaklanır. Yağ + filtre değişimi " +
      "ilk yaklaşımdır — çözülmezse mekatronik revizyonu gerekir.",
    href: "/rehber/zf-aisin-gecikme",
    linkMetin: "ZF / Aisin gecikme rehberi →",
    renk: "border-amber-200 bg-amber-50 text-amber-700",
    badge: "Yaygın",
  },
];

const kaynaklar = [
  {
    no: "01",
    baslik: "Solenoid valf kirliliği / tıkanması",
    aciklama:
      "Şanzıman yağındaki metal parçacıklar solenoid valflerde birikir. " +
      "Valf hareket hızı yavaşlar; vites geçişi gecikir. Yağ + filtre + " +
      "valve body temizliğiyle çözülebilir — en yaygın ve en ekonomik neden.",
  },
  {
    no: "02",
    baslik: "Yağ dejenerasyonu / yanlış yağ",
    aciklama:
      "Otomatik şanzıman yağı (ATF) zamanla oksitlenir, sürtünme özellikleri " +
      "bozulur. Yanlış tip yağ kullanımı da aynı sonucu verir. 60.000-80.000 km " +
      "yağ değişim aralığı ihmal edilirse gecikme kaçınılmazdır.",
  },
  {
    no: "03",
    baslik: "Kavrama bite point adaptasyon bozukluğu",
    aciklama:
      "DSG ve DCT şanzımanlarda kavrama paketi sürüş stiline göre kendini " +
      "ayarlar (adaptasyon). Yazılım güncelleme sonrası veya uzun garajda " +
      "durma sonrası bu değer bozulur — VCDS ile sıfırlama gerekir.",
  },
  {
    no: "04",
    baslik: "ECU yazılım hatası / güncel olmaması",
    aciklama:
      "Bazı araçlarda fabrika çıkışı yazılımı güncellenmiştir. Güncel " +
      "olmayan yazılım gecikmeye yol açabilir. VW Group araçlarında ODIS, " +
      "BMW'de ISTA ile yazılım flashing çözüm olur.",
  },
];

export default function OtomatikSanzımanGecikmePage() {
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
              <span className="text-text-secondary">Otomatik Şanzımanda Gecikme</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Genel Rehber
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              Otomatik Şanzımanda Gecikme: Vites Geçişi Neden Yavaş?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Gaza bastığınızda vites değişimi 1-2 saniye gecikiyorsa bu normal
              değildir. DSG, ZF, Aisin veya CVT — her tipte farklı kaynaklardan
              çıkar. Bu rehberde tipe göre ayrıştırıyoruz.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Ana kaynak</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">0,3sn</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Normal DSG</div>
              </div>
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">Ücretsiz</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Hata okuma</div>
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
              Otomatik şanzımanda gecikme{" "}
              <strong>4 kaynaktan birinden çıkar</strong>: solenoid valf kirliliği,
              yağ dejenerasyonu, kavrama adaptasyon bozukluğu veya ECU yazılım hatası.
              İlk 2 neden yağ + filtre değişimiyle, son 2 neden adaptasyon sıfırlama
              veya yazılım güncellemesiyle çözülür.
            </p>
          </div>

          <h2 className="font-saira text-xl font-semibold text-text-primary mb-3">
            Normal vs Anormal Vites Geçişi
          </h2>
          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Sağlıklı otomatik şanzımanda vites geçişi belli süreler içindedir:
          </p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { tip: "DSG / DCT", sure: "0,3 — 0,5 sn" },
              { tip: "ZF 8HP", sure: "0,2 — 0,4 sn" },
              { tip: "Mercedes 9G", sure: "0,3 — 0,5 sn" },
              { tip: "Klasik AT", sure: "0,6 — 1,0 sn" },
              { tip: "CVT", sure: "Kademesiz" },
              { tip: "PowerShift", sure: "0,4 — 0,7 sn" },
            ].map((t) => (
              <div key={t.tip} className="border border-border-hairline bg-graphite-surface rounded-lg p-3">
                <div className="font-jetbrains text-[10px] uppercase tracking-widest text-iron-light">
                  {t.tip}
                </div>
                <div className="font-saira text-sm font-semibold text-text-primary">
                  {t.sure}
                </div>
              </div>
            ))}
          </div>

          <p className="font-saira text-text-secondary text-sm leading-relaxed">
            Bu değerlerin 2-3 katı uzun geçişler arızaya işaret eder. DSG ailesinde
            gecikme tablosu çoğunlukla{" "}
            <Link
              href="/hizmetler/dsg-mekatronik-kart/"
              className="text-brass underline decoration-brass/40 hover:decoration-brass underline-offset-2 transition-colors"
            >
              DSG mekatronik onarım ve adaptasyon servisi
            </Link>{" "}
            kapsamında çözülür.
          </p>
        </section>

        {/* ── TİP KARŞILAŞTIRMA ──────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
              Şanzıman Tipine Göre Gecikme Kaynağı
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-8">
              Aracınızın şanzıman tipine göre detaylı rehbere geçin.
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
                    Ana kaynak: <span className="text-text-primary">{tip.kaynak}</span>
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

            {/* CVT / PowerShift notu */}
            <div className="mt-4 border border-border-hairline rounded-xl bg-graphite-base p-5">
              <div className="font-jetbrains text-xs font-semibold uppercase tracking-widest text-iron-light mb-1">
                CVT / PowerShift
              </div>
              <div className="font-saira text-sm text-text-secondary mb-2">
                Toyota, Honda, Nissan, Ford
              </div>
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                CVT'de "vites geçişi" kademeli değildir ama devir artışı geciktiğinde
                kontrol ünitesi veya kayış basıncı sorunu düşünülür. Ford PowerShift'te
                gecikme kavrama adaptasyonu bozulmasıyla ilişkilidir — VW Group
                DSG'ye benzer mantıkta.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 KAYNAK ───────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Gecikmenin 4 Ortak Kaynağı
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Teşhis bu 4 neden arasından yapılır.
          </p>

          <div className="space-y-5">
            {kaynaklar.map((n) => (
              <div key={n.no} className="flex gap-4">
                <div className="font-jetbrains text-xs font-bold text-brass shrink-0 w-6 mt-0.5">
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

        {/* ── BÜYÜME ZİNCİRİ ─────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-6">
              Gecikme Nasıl Büyür?
            </h2>

            <div className="space-y-3">
              {[
                {
                  asama: "1. Hafif gecikme",
                  aciklama: "0,5-1 saniye gecikme — fark edilir ama sürüşü etkilemez. Solenoid kirliliği erken evre.",
                  renk: "bg-green-50 border-green-200 text-green-800",
                },
                {
                  asama: "2. Belirgin gecikme",
                  aciklama: "1-2 saniye gecikme — trafik ışıklarında ve kalkışta rahatsız eder. Yağ yaşlanması eklendi.",
                  renk: "bg-amber-50 border-amber-200 text-amber-800",
                },
                {
                  asama: "3. Vites atmama",
                  aciklama: "Vites zamanında değişmez, kavrama kayma başlar. Mekatronik revizyonu gerekir.",
                  renk: "bg-orange-50 border-orange-200 text-orange-800",
                },
                {
                  asama: "4. Limp mode",
                  aciklama: "Şanzıman koruma moduna girer. Araç sadece 1-2. viteste hareket eder. Acil müdahale zorunlu.",
                  renk: "bg-red-50 border-red-200 text-red-800",
                },
              ].map((a) => (
                <div key={a.asama} className={`border rounded-xl p-4 ${a.renk}`}>
                  <div className="font-saira text-sm font-semibold mb-1">{a.asama}</div>
                  <p className="font-saira text-sm leading-relaxed">{a.aciklama}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-border-hairline bg-graphite-base rounded-xl p-5">
              <p className="font-saira text-sm text-text-secondary leading-relaxed">
                1. aşamada müdahale 3.000-8.000 TL; 4. aşamaya ilerlediğinde
                50.000+ TL. Gecikmeyi erken fark edip teşhis ettirmek en büyük
                tasarruftur.
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
            <TransmissionFaq slug="otomatik-sanziman-gecikme" />
          </div>
        </section>

        {/* ── İLGİLİ REHBERLER ───────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-base font-semibold text-text-primary mb-4">
              Detay Rehberleri
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/rehber/solenoid-valf-ariza-belirtileri",
                  tip: "DSG / DCT",
                  baslik: "Solenoid Valf Arıza Belirtileri →",
                },
                {
                  href: "/rehber/zf-aisin-gecikme",
                  tip: "ZF / Aisin",
                  baslik: "ZF 8HP ve Aisin Gecikme Rehberi →",
                },
                {
                  href: "/hizmetler/dsg-mekatronik-kart",
                  tip: "Fiyat — DSG",
                  baslik: "DSG Mekatronik Kart Fiyatı →",
                },
                {
                  href: "/hizmetler/dsg-mekatronik-kart/",
                  tip: "Hizmet",
                  baslik: "DSG Mekatronik Kart Fiyatı →",
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
              Vites geç geçiyor mu?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Ücretsiz hata kodu okuma ve basınç testi — gecikmenin kaynağını
              netleştiriyoruz. Solenoid mi, yağ mı, yazılım mı — onayınız olmadan
              işlem başlamaz. 6 ay garanti, Bostancı, İstanbul.
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
