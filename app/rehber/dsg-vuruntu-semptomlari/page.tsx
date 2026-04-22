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

export const metadata: Metadata = {
  title: "DSG Vuruntu Neden Olur? Vites Geçişinde Sarsıntı | Eren Servis",
  description:
    "DSG şanzımanda 1→2 veya 2→3 geçişte vuruntu, sarsıntı ve takılma yaşıyorsanız " +
    "kavrama arızasının işareti olabilir. Bostancı'da ücretsiz ön tanı — Eren Servis.",
  keywords: [
    "dsg vuruntu",
    "dsg 2 den 3 e geçerken vuruntu",
    "dsg 1 den 2 ye geçerken vuruntu",
    "dsg vites geçişinde sarsıntı",
    "dsg takılma sorunu",
    "dsg kavrama vuruntu",
    "otomatik şanzıman vuruntu nedeni",
  ],
  openGraph: {
    title: "DSG Vuruntu Neden Olur? | Eren Servis Bostancı",
    description:
      "Vites geçişinde vuruntu veya sarsıntı yaşıyorsanız ertelemeyin. " +
      "Bostancı DSG uzmanı Eren Servis'te ücretsiz ön tanı.",
    url: "https://www.erenservis.net/rehber/dsg-vuruntu-semptomlari",
    type: "article",
    publishedTime: "2026-03-30",
    authors: ["Eren Servis"],
    images: [
      {
        url: "https://www.erenservis.net/images/og/dsg-vuruntu.jpg",
        width: 1200,
        height: 630,
        alt: "DSG Vuruntu Semptomu",
      },
    ],
  },
  alternates: {
    canonical: "https://www.erenservis.net/rehber/dsg-vuruntu-semptomlari",
  },
};

const faqItems = TRANSMISSION_FAQS["dsg-vuruntu-semptomlari"] ?? [];

const articleSchema = buildArticleSchema({
  title: "DSG Vuruntu Neden Olur? Vites Geçişinde Sarsıntı ve Takılma",
  description:
    "DSG şanzımanda vuruntu yaşıyorsanız kavrama arızasının erken işareti olabilir. " +
    "Model bazında nedenler ve çözüm.",
  url: "https://www.erenservis.net/rehber/dsg-vuruntu-semptomlari",
  datePublished: "2026-03-30",
});

const faqSchema = buildFAQSchema(faqItems);

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Ana Sayfa", url: "https://www.erenservis.net" },
  { name: "Rehber", url: "https://www.erenservis.net/rehber" },
  {
    name: "DSG Vuruntu Semptomu",
    url: "https://www.erenservis.net/rehber/dsg-vuruntu-semptomlari",
  },
]);

const serviceSchema = buildServiceSchema({
  name: "DSG Vuruntu Teşhis ve Onarım",
  description:
    "DSG vuruntu ve sarsıntı arızası teşhisi, kavrama bakımı ve mekatronik onarımı. Bostancı, İstanbul.",
  url: "https://www.erenservis.net/rehber/dsg-vuruntu-semptomlari",
});

const senaryolar = [
  {
    vites: "1 → 2",
    baslik: "1'den 2'ye geçişte vuruntu",
    aciklama:
      "En yaygın şikayet. Araç yeni kalktıktan sonra ilk vites geçişinde " +
      "sanki hafifçe öne atar veya titrer. Soğuk havalarda ve sabah ilk " +
      "kalkışta daha belirgindir. DQ200 kuru kavramanın karakteristik erken " +
      "arıza belirtisi.",
    neden: "Kuru kavrama (DQ200) plaket aşınması veya kavrama adaptasyon kayması.",
    aciliyet: "orta",
    model: "DQ200 ağırlıklı",
  },
  {
    vites: "2 → 3",
    baslik: "2'den 3'e geçişte vuruntu",
    aciklama:
      "Şehir içi hızlanmada, yaklaşık 30–50 km/s arası yaşanan sert veya " +
      "gecikmeli geçiş. Araç bir an için ivme kaybeder, ardından sert bağlanır. " +
      "1→2 vuruntusundan daha belirgin hissedilir ve kabin içine daha fazla " +
      "yansır.",
    neden:
      "Kavrama plaket aşınması ilerlemiş — volant veya mekatronik kart " +
      "etkilenmiş olabilir.",
    aciliyet: "yüksek",
    model: "DQ200 ve DQ250",
  },
  {
    vites: "Geri vites",
    baslik: "R vitesine alırken vuruntu veya gecikme",
    aciklama:
      "Park konumundan R'ye geçince araç 2–4 saniye bekler, ardından hafif " +
      "bir sarsıntıyla hareket eder. Soğuk havalarda çok daha belirgindir. " +
      "Çoğu sürücü bunu \"aracın özelliği\" sanır — değil.",
    neden:
      "Kuru kavrama (DQ200) soğukta optimal çalışmak için ısınma süresi " +
      "ister. Aşınma başlayınca bu gecikme uzar ve sarsıntı eşlik eder.",
    aciliyet: "orta",
    model: "DQ200 ağırlıklı",
  },
  {
    vites: "Tüm geçişler",
    baslik: "Her vites geçişinde genel sarsıntı",
    aciklama:
      "Başlangıçta yalnızca 1→2 veya 2→3'te yaşanan vuruntu zamanla tüm " +
      "geçişlere yayılmışsa kavrama plaketleri ileri düzeyde aşınmıştır. " +
      "Bu aşamada volant ve mekatronik kart riski yüksektir.",
    neden: "İleri düzey kavrama aşınması — birden fazla bileşen etkilenmiş olabilir.",
    aciliyet: "kritik",
    model: "DQ200 ve DQ250",
  },
];

const aciliyetStil: Record<string, { kart: string; etiket: string; etiketMetin: string }> = {
  orta: {
    kart: "border-blue-200 bg-blue-50",
    etiket: "bg-blue-100 text-blue-700",
    etiketMetin: "Takip et",
  },
  "yüksek": {
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

export default function DsgVuruntuSemptomlariPage() {
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
              <span className="text-text-secondary">DSG Vuruntu</span>
            </nav>

            <span className="font-jetbrains inline-block text-[10px] font-semibold tracking-[0.22em] uppercase text-brass mb-4">
              Arıza Belirtileri
            </span>

            <h1 className="font-saira text-3xl sm:text-4xl font-semibold text-text-primary leading-tight mb-4">
              DSG Şanzımanda Vuruntu Neden Olur?
            </h1>
            <p className="font-saira text-text-secondary text-lg leading-relaxed mb-8">
              Vites geçişinde sarsıntı, takılma veya ani ileri atma hissediyorsanız
              bu büyük olasılıkla kavrama arızasının erken işaretidir. Hangi
              geçişte, hangi koşulda yaşandığı tanıyı belirler.
            </p>

            <div className="grid grid-cols-3 gap-3 border-t border-border-hairline pt-8">
              <div className="text-center">
                <div className="font-saira text-2xl font-semibold text-brass">4</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Senaryo tipi</div>
              </div>
              <div className="text-center border-x border-border-hairline">
                <div className="font-saira text-2xl font-semibold text-brass">%80+</div>
                <div className="font-jetbrains text-xs text-text-secondary mt-1">Kavrama kaynaklı</div>
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
              DSG şanzımanda vites geçişinde vuruntu veya sarsıntı{" "}
              <strong>çoğunlukla kavrama plaketlerinin aşınmasından</strong>{" "}
              kaynaklanır. DQ200 kuru kavramada 1→2, DQ250 ıslak kavramada ise
              2→3 geçişte daha sık yaşanır. Soğuk havada belirginleşmesi ve
              ilerleyerek tüm viteslere yayılması erken müdahale gerektirdiğini
              gösterir.
            </p>
          </div>

          <p className="font-saira text-text-secondary text-base leading-relaxed mb-4">
            Vuruntunun hangi viteste ve hangi koşulda yaşandığı hem arızanın
            kaynağını hem de aciliyetini belirler. Sabah soğukta yalnızca 1→2
            geçişte yaşanan hafif sarsıntı ile her viteste hissedilen güçlü
            vuruntu aynı şey değildir.
          </p>
          <p className="font-saira text-text-secondary text-base leading-relaxed">
            Aşağıda 4 farklı senaryo ve her birinin ne anlama geldiğini
            bulabilirsiniz. Senaryonuzu tanıyın, aciliyetini görün.
          </p>

          <div className="mt-6 p-4 bg-graphite-surface border border-border-hairline rounded-xl">
            <p className="font-saira text-sm text-text-primary">
              Vuruntu var, kavrama arızası mı?{" "}
              <a
                href="/rehber/dsg-kavrama-ariza-belirtileri"
                className="text-brass underline underline-offset-2 hover:text-brass/80 transition-colors"
              >
                DSG kavrama arızasının tüm belirtilerini görün →
              </a>
            </p>
          </div>
        </section>

        {/* ── SENARYO KARTLARI ─────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Hangi Geçişte Vuruntu Yaşıyorsunuz?
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Senaryonuzu bulun — aciliyet ve olası neden aşağıda.
          </p>

          <div className="space-y-4">
            {senaryolar.map((s) => {
              const stil = aciliyetStil[s.aciliyet];
              return (
                <div
                  key={s.vites}
                  className={`border rounded-xl p-5 ${stil.kart}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-jetbrains text-xs font-bold bg-white/60 border border-current/10 px-2 py-0.5 rounded">
                        {s.vites}
                      </span>
                      <h3 className="font-saira font-semibold text-sm sm:text-base text-slate-800">
                        {s.baslik}
                      </h3>
                    </div>
                    <span className={`shrink-0 font-jetbrains text-xs font-medium px-2 py-0.5 rounded-full ${stil.etiket}`}>
                      {stil.etiketMetin}
                    </span>
                  </div>
                  <p className="font-saira text-sm leading-relaxed text-slate-700 mb-3">
                    {s.aciklama}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="font-semibold shrink-0">Olası neden:</span>
                    <span>{s.neden}</span>
                  </div>
                  <div className="mt-2 font-jetbrains text-xs text-slate-500">
                    Model: {s.model}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── NASIL ILERLER ─────────────────────────────────────────────── */}
        <section className="bg-graphite-surface px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-8">
              Vuruntu Tedavi Edilmezse Ne Olur?
            </h2>

            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-border-hairline" />

              {[
                {
                  sure: "İlk belirtiler",
                  baslik: "Yalnızca soğukta, yalnızca 1→2",
                  detay: "Kavrama plaketleri %20–30 aşınmış. Sadece kavrama seti değişimi.",
                  maliyet: "18–28K TL",
                  renk: "text-green-600",
                },
                {
                  sure: "2–4 ay sonra",
                  baslik: "Her hava, birden fazla vites",
                  detay: "Plaket aşınması %50+. Kavrama + adaptasyon sıfırlama gerekiyor.",
                  maliyet: "22–35K TL",
                  renk: "text-amber-600",
                },
                {
                  sure: "4–8 ay sonra",
                  baslik: "Güçlü vuruntu + zaman zaman takılma",
                  detay: "Metal toz birikimi başlamış. Volant yüzeyi hasar görmüş olabilir.",
                  maliyet: "35–55K TL",
                  renk: "text-orange-600",
                },
                {
                  sure: "8+ ay sonra",
                  baslik: "Her geçişte vuruntu + kayma hissi",
                  detay: "Kavrama + volant + mekatronik kart kirliliği. Üç bileşen birden.",
                  maliyet: "55–80K TL",
                  renk: "text-red-600",
                },
              ].map((adim, i) => (
                <div key={i} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-graphite-base border-2 border-border-hairline" />
                  <div className="font-jetbrains text-xs text-text-secondary mb-1">{adim.sure}</div>
                  <div className="font-saira font-semibold text-text-primary text-sm mb-1">
                    {adim.baslik}
                  </div>
                  <div className="font-saira text-sm text-text-secondary mb-1">{adim.detay}</div>
                  <div className={`font-saira text-sm font-semibold ${adim.renk}`}>
                    Tahmini maliyet: {adim.maliyet}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DQ200 vs DQ250 ───────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 py-12">
          <h2 className="font-saira text-2xl font-semibold text-text-primary mb-2">
            Modelinize Göre Vuruntu Farklı Davranır
          </h2>
          <p className="font-saira text-text-secondary text-sm mb-8">
            Aynı belirti, farklı şanzımanda farklı anlam taşır.
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
                  Sabah soğukta 1→2 vuruntu çok tipik
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Isındıktan sonra azalır — bu iyiye işaret değil
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Sıvı değişimi kavramayı iyileştirmez
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Gecikme = mekatronik kart riski yüksek
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
                  2→3 vuruntu daha sık, daha belirgin
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Erken dönemde sıvı değişimi yardımcı olabilir
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Volant hasarı DQ200&apos;e göre daha sık görülür
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brass mt-0.5 shrink-0">›</span>
                  Geç müdahale = volant + kavrama birlikte
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
            <TransmissionFaq slug="dsg-vuruntu-semptomlari" />
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
              href="/hizmetler/dsg-kavrama-degisimi"
              className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Hizmet</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                DSG Kavrama Değişimi Fiyatı 2026 →
              </div>
            </a>
            <a
              href="/rehber/otomatik-sanziman-vuruntu"
              className="block border border-border-hairline rounded-xl p-4 hover:border-border-brass hover:bg-graphite-elevated transition-all group sm:col-span-2"
            >
              <div className="font-jetbrains text-xs text-iron-light mb-1 uppercase tracking-wide">Genel Rehber</div>
              <div className="font-saira text-sm font-semibold text-text-primary group-hover:text-brass transition-colors">
                Otomatik şanzımanda vuruntunun genel nedenleri (tüm tipler) →
              </div>
            </a>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-4 pb-12">
          <div className="bg-graphite-elevated border border-border-subtle rounded-xl p-8 text-center">
            <h2 className="font-saira text-2xl font-semibold text-text-primary mb-3">
              Yukarıdaki senaryolardan biri aracınıza uyuyor mu?
            </h2>
            <p className="font-saira text-text-secondary text-sm mb-6 leading-relaxed">
              Getirin, ücretsiz ön tanı yapalım. Vuruntunun kaynağını 30 dakikada
              tespit ederiz — net fiyat, sürpriz fatura yok.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+905327153751"
                className="inline-block bg-brass-bright text-graphite-base font-saira font-semibold px-6 py-3 rounded-full hover:bg-brass transition-colors"
              >
                0532 715 37 51
              </a>
              <a
                href="/hizmetler/dsg-kavrama-degisimi"
                className="inline-block border border-border-subtle text-text-secondary font-saira font-medium px-6 py-3 rounded-full hover:border-brass hover:text-text-primary transition-colors"
              >
                Kavrama değişimi fiyatları →
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
