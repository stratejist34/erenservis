import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCcw, Zap, Gauge } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Eren Servis — Bostancı Otomatik Şanzıman',
  description:
    'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. Bostancı\'nın şanzıman uzmanı Eren Servis.',
  alternates: {
    canonical: 'https://erenservis.net/hizmetler/',
  },
  openGraph: {
    title: 'Hizmetlerimiz | Eren Servis — Bostancı Otomatik Şanzıman',
    description:
      'DSG, ZF, CVT ve konvansiyonel otomatik şanzıman tamiri, bakımı ve revizyonu. Bostancı\'nın şanzıman uzmanı Eren Servis.',
    url: 'https://erenservis.net/hizmetler/',
    siteName: 'Eren Servis',
    locale: 'tr_TR',
    type: 'website',
  },
};

const PHONE_HREF = 'tel:+905327153751';
const WHATSAPP_HREF = 'https://wa.me/905327153751';

const DSG_FAULTS = [
  'Kavrama balata aşınması',
  'Mekatronik kart arızası',
  'Vites geçiş sertliği',
  'Basınç tüpü problemi',
] as const;

const AISIN_FAULTS = [
  'Valf gövdesi davranış bozulması',
  'EAT6 / EAT8 geçiş sertliği',
  'Tork konvertörü ve yağ basıncı takibi',
] as const;

const CVT_FAULTS = [
  'CVT kayış kayması ve titreme',
  'EDC / DCT geçiş sertliği',
  'PowerShift vites gecikmesi',
] as const;

const DSG_TAGS = ['DQ200', 'DQ250', 'DQ381', 'DQ500'] as const;
const AISIN_TAGS = ['Aisin', 'EAT6', 'EAT8', 'AT6'] as const;
const CVT_TAGS = ['CVT', 'EDC', 'DCT', 'PowerShift'] as const;
const BAKIM_TAGS = ['Diagnostik', 'Yağ Değişimi', 'Filtre', 'Kalibrasyon'] as const;

export default function HizmetlerPage() {
  return (
    <main>
      {/* Hero Section — Cold Brass Hybrid */}
      <section className="relative bg-graphite-base pt-32 pb-20 overflow-hidden">
        {/* Hairline grid background — çok sönük */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{
               backgroundImage: `linear-gradient(rgba(255,252,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,252,245,0.5) 1px, transparent 1px)`,
               backgroundSize: '64px 64px'
             }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Eyebrow — JetBrains Mono caps */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-brass" />
            <span className="font-jetbrains text-[11px] tracking-[0.18em] uppercase text-brass">
              UZMANLIK_ALANLARIMIZ
            </span>
            <span className="h-px w-8 bg-brass" />
          </div>

          {/* Display title — Saira + Fraunces italic moment */}
          <h1 className="font-saira font-semibold text-[64px] md:text-[88px] leading-[0.95] tracking-tight text-text-primary mb-2">
            Şanzıman
          </h1>
          <p className="font-fraunces italic font-normal text-[64px] md:text-[88px] leading-[0.95] tracking-tight text-text-primary mb-8">
            hizmetlerimiz.
          </p>

          {/* Subtitle */}
          <p className="font-saira text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Tüm otomatik şanzıman türlerinde komple tanı, bakım ve revizyon.
            Orijinal parça garantisi, %0 tolerans.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PHONE_HREF}
               className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 bg-brass-bright text-graphite-base hover:bg-brass transition-colors duration-200 inline-flex items-center gap-2">
              FİYAT TEKLİFİ AL →
            </a>
            <a href={WHATSAPP_HREF}
               target="_blank"
               rel="noopener noreferrer"
               className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 border border-border-strong text-text-primary hover:border-brass hover:text-brass transition-colors duration-200 inline-flex items-center gap-2">
              <span className="text-base">●</span> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust Strip — 4 sütun, Cold Iron divider'lı */}
      <section className="bg-graphite-base border-t border-iron-deep">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">

            <div className="text-center md:border-r md:border-iron-deep px-4">
              <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">EST.</div>
              <div className="font-saira font-bold text-3xl text-text-primary">2008</div>
            </div>

            <div className="text-center md:border-r md:border-iron-deep px-4">
              <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">GARANTİ</div>
              <div className="font-saira font-bold text-3xl text-text-primary">730 <span className="text-base text-text-secondary">GÜN</span></div>
            </div>

            <div className="text-center md:border-r md:border-iron-deep px-4">
              <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">REVİZYON</div>
              <div className="font-saira font-bold text-3xl text-text-primary">48 <span className="text-base text-text-secondary">SAAT</span></div>
            </div>

            <div className="text-center px-4">
              <div className="font-jetbrains text-[10px] tracking-[0.2em] text-iron-light uppercase mb-2">REVİZE</div>
              <div className="font-saira font-bold text-3xl text-text-primary">2400+</div>
            </div>

          </div>
        </div>
      </section>

      {/* Servis Kartları — Cold Brass Hybrid */}
      <section className="bg-graphite-base py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-6">

          {/* DSG & S-Tronic Vurgu Kartı */}
          <div className="relative bg-graphite-surface border border-border-subtle">
            {/* Sol dikey brass çubuk */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brass" />

            <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 p-8 md:p-12">

              {/* SOL: Ana içerik */}
              <div>
                {/* Eyebrow rozeti — JetBrains Mono tag stili */}
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-iron-deep">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass" />
                  <span className="font-jetbrains text-[10px] tracking-[0.18em] uppercase text-text-secondary">
                    EN_COK_TALEP
                  </span>
                </div>

                {/* Başlık — tek h3, iki span block */}
                <h3 className="font-saira font-semibold text-3xl md:text-4xl text-text-primary leading-tight mb-5">
                  <span className="block">DSG & S-Tronic</span>
                  <span className="block">Şanzıman</span>
                </h3>

                {/* Tag/chip listesi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {DSG_TAGS.map(code => (
                    <span key={code}
                          className="font-jetbrains text-[10px] tracking-wider px-2.5 py-1 border border-iron text-iron-light uppercase">
                      {code}
                    </span>
                  ))}
                </div>

                {/* Açıklama */}
                <p className="font-saira text-text-secondary leading-relaxed mb-8 max-w-xl">
                  VW, Audi, Skoda ve Seat DSG şanzımanlarında mekatronik ünite,
                  kavrama paketi ve basınç tüpü dahil komple revizyon. DQ200 basınç
                  tüpü yenileme hizmeti dahil.
                </p>

                {/* Detaylar link */}
                <Link href="/hizmetler/dsg-sanziman-tamiri/"
                      className="font-jetbrains text-xs tracking-[0.2em] uppercase text-brass hover:text-brass-bright transition-colors inline-flex items-center gap-2 border-b border-brass pb-1">
                  DETAYLAR →
                </Link>
              </div>

              {/* SAĞ: Sık görülen arızalar */}
              <div className="border-l border-iron-deep pl-8">
                <div className="font-jetbrains text-[10px] tracking-[0.18em] uppercase text-iron-light mb-5 pb-3 border-b border-iron-deep">
                  SIK_GORULEN_DSG_ARIZALARI
                </div>

                <ul className="space-y-3">
                  {DSG_FAULTS.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="font-jetbrains text-iron mt-1">—</span>
                      <span className="font-saira text-text-secondary text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* İki Standart Kart */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Aisin & Tam Otomatik */}
            <div className="bg-graphite-surface border border-border-subtle p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 flex items-center justify-center border border-iron-deep">
                  <RefreshCcw className="w-5 h-5 text-brass" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">
                    Aisin & Tam Otomatik
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {AISIN_TAGS.map(code => (
                      <span key={code}
                            className="font-jetbrains text-[9px] tracking-wider px-2 py-0.5 border border-iron text-iron-light uppercase">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="font-saira text-text-secondary text-sm leading-relaxed mb-6">
                Aisin ve EAT6 / EAT8 ailelerinde valf gövdesi, tork konvertörü,
                yağ basıncı ve geçiş sertliği sorunlarını marka-model bağlamında
                ayrı değerlendiriyoruz.
              </p>

              <div className="border-t border-iron-deep mb-5" />

              <ul className="space-y-2 mb-6">
                {AISIN_FAULTS.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-jetbrains text-brass text-xs mt-1">▸</span>
                    <span className="font-jetbrains text-[11px] text-iron-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/hizmetler/aisin-sanziman-tamiri/"
                    className="font-jetbrains text-[11px] tracking-[0.2em] uppercase text-brass hover:text-brass-bright transition-colors inline-flex items-center gap-2">
                DETAYLAR →
              </Link>
            </div>

            {/* CVT / EDC / DCT */}
            <div className="bg-graphite-surface border border-border-subtle p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 flex items-center justify-center border border-iron-deep">
                  <Zap className="w-5 h-5 text-brass" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-saira font-semibold text-xl text-text-primary mb-3">
                    CVT / EDC / DCT Şanzımanlar
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {CVT_TAGS.map(code => (
                      <span key={code}
                            className="font-jetbrains text-[9px] tracking-wider px-2 py-0.5 border border-iron text-iron-light uppercase">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="font-saira text-text-secondary text-sm leading-relaxed mb-6">
                CVT kayma belirtileri, Renault EDC / DCT ve Ford PowerShift geçiş
                sorunlarını tek kategoriye sıkıştırmadan platforma özel ön tanı
                yaklaşımıyla değerlendiriyoruz.
              </p>

              <div className="border-t border-iron-deep mb-5" />

              <ul className="space-y-2 mb-6">
                {CVT_FAULTS.map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-jetbrains text-brass text-xs mt-1">▸</span>
                    <span className="font-jetbrains text-[11px] text-iron-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/hizmetler/cvt-sanziman-tamiri/"
                    className="font-jetbrains text-[11px] tracking-[0.2em] uppercase text-brass hover:text-brass-bright transition-colors inline-flex items-center gap-2">
                DETAYLAR →
              </Link>
            </div>

          </div>

          {/* Mini Kart — Şanzıman Bakım & Kontrol */}
          <div className="bg-graphite-surface border border-border-subtle px-8 py-5 flex items-center gap-6 flex-wrap md:flex-nowrap">

            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-9 h-9 flex items-center justify-center border border-iron-deep flex-shrink-0">
                <Gauge className="w-4 h-4 text-brass" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-saira font-semibold text-base text-text-primary mb-0.5">
                  Şanzıman Bakım & Kontrol
                </h3>
                <p className="font-saira text-text-secondary text-sm leading-snug">
                  Yağ değişimi, filtre yenileme ve bilgisayarlı diagnostik. Düzenli
                  bakım = uzun şanzıman ömrü.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {BAKIM_TAGS.map(tag => (
                  <span key={tag}
                        className="font-jetbrains text-[9px] tracking-wider px-2 py-1 border border-iron text-iron-light uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/hizmetler/sanziman-bakimi/"
                    className="font-jetbrains text-[10px] tracking-[0.2em] uppercase text-brass hover:text-brass-bright transition-colors whitespace-nowrap">
                DETAYLAR →
              </Link>
            </div>
          </div>

          {/* Tüm Hizmetleri Gör */}
          <div className="text-center mt-8">
            <Link href="/iletisim/"
                  className="font-saira font-semibold text-sm tracking-wide uppercase px-8 py-4 border border-border-strong text-text-primary hover:border-brass hover:text-brass transition-colors duration-200 inline-flex items-center gap-2">
              ÜCRETSİZ ÖN TANI İÇİN ARA →
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
