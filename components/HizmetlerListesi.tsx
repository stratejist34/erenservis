import { ArrowRight, Gauge, RefreshCcw, Settings2, Zap } from 'lucide-react';
import Link from 'next/link';

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

const TAG_CLS = 'font-jetbrains text-[10px] font-medium px-2 py-0.5 rounded-full bg-graphite-elevated border border-border-hairline text-iron-light';

export default function HizmetlerListesi({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section className="py-24 bg-graphite-base" aria-labelledby="hizmetler-baslik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!hideHeader && (
          <div className="text-center mb-14">
            <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-brass mb-4">
              Uzmanlık Alanlarımız
            </p>
            <h2
              id="hizmetler-baslik"
              className="font-saira text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-text-primary mb-4"
            >
              Şanzıman Hizmetlerimiz
            </h2>
            <p className="font-saira text-text-secondary max-w-xl mx-auto leading-relaxed">
              Türkiye parkında sık görülen otomatik şanzıman ailelerinde tanı, bakım ve revizyon.
              Orijinal parça, garantili işçilik.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

          {/* DSG — tam genişlik, vurgulu kart */}
          <Link
            href="/hizmetler/dsg-sanziman-tamiri/"
            className="sm:col-span-2 group rounded-xl border border-border-hairline bg-graphite-surface overflow-hidden p-7 hover:border-border-brass hover:bg-graphite-elevated transition-all"
            style={{ borderLeft: '3px solid var(--color-brass)' }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="mb-4">
                  <span className="font-jetbrains text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brass/10 text-brass border border-border-brass">
                    VW · Audi · Skoda · Seat
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-graphite-elevated border border-border-hairline flex items-center justify-center shrink-0">
                    <Settings2 className="w-6 h-6 text-iron-light" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-saira text-xl font-semibold text-text-primary leading-snug mb-2 group-hover:text-brass transition-colors">
                      DSG &amp; S-Tronic Şanzıman
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {DSG_TAGS.map((tag) => (
                        <span key={tag} className={TAG_CLS}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="font-saira text-sm text-text-secondary leading-relaxed mb-6">
                  VW, Audi, Skoda ve Seat DSG şanzımanlarında mekatronik ünite, kavrama paketi ve basınç
                  tüpü dahil komple revizyon. DQ200 basınç tüpü yenileme hizmeti dahil.
                </p>

                <span className="font-saira text-sm font-semibold text-brass group-hover:underline">
                  Detaylar &rarr;
                </span>
              </div>

              {/* Arıza paneli */}
              <div className="lg:w-60 shrink-0 rounded-xl bg-graphite-elevated border border-border-hairline p-5">
                <p className="font-jetbrains text-[10px] font-semibold text-iron-light uppercase tracking-wider mb-4">
                  Sık Görülen DSG Arızaları
                </p>
                <ul className="space-y-2.5">
                  {DSG_FAULTS.map((fault) => (
                    <li key={fault} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-brass" />
                      <span className="font-saira text-sm text-text-secondary">{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          {/* Aisin & Tam Otomatik */}
          <Link
            href="/hizmetler/aisin-sanziman-tamiri/"
            className="group rounded-xl border border-border-hairline bg-graphite-surface p-6 flex flex-col gap-3 hover:border-border-brass hover:bg-graphite-elevated transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-graphite-elevated border border-border-hairline flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5 text-iron-light" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-saira text-base font-semibold text-text-primary leading-snug mb-2 group-hover:text-brass transition-colors">
                  Aisin &amp; Tam Otomatik
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {AISIN_TAGS.map((tag) => (
                    <span key={tag} className={TAG_CLS}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-saira text-sm text-text-secondary leading-relaxed flex-1">
              Aisin ve EAT6 / EAT8 ailelerinde valf gövdesi, tork konvertörü, yağ basıncı ve geçiş sertliği
              sorunlarını marka-model bağlamında ayrı değerlendiriyoruz.
            </p>

            <ul className="space-y-2 pt-3 border-t border-border-hairline">
              {AISIN_FAULTS.map((fault) => (
                <li key={fault} className="flex items-center gap-2 font-saira text-xs text-iron-light">
                  <span className="w-1 h-1 rounded-full bg-brass/50 shrink-0" />
                  {fault}
                </li>
              ))}
            </ul>

            <span className="font-saira text-xs font-semibold text-brass group-hover:underline">
              Detaylar &rarr;
            </span>
          </Link>

          {/* CVT / EDC / DCT */}
          <Link
            href="/hizmetler/cvt-sanziman-tamiri/"
            className="group rounded-xl border border-border-hairline bg-graphite-surface p-6 flex flex-col gap-3 hover:border-border-brass hover:bg-graphite-elevated transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-graphite-elevated border border-border-hairline flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-iron-light" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="font-saira text-base font-semibold text-text-primary leading-snug mb-2 group-hover:text-brass transition-colors">
                  CVT / EDC / DCT Şanzımanlar
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {CVT_TAGS.map((tag) => (
                    <span key={tag} className={TAG_CLS}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="font-saira text-sm text-text-secondary leading-relaxed flex-1">
              CVT kayma belirtileri, Renault EDC / DCT ve Ford PowerShift geçiş sorunlarını tek kategoriye
              sıkıştırmadan platforma özel ön tanı yaklaşımıyla değerlendiriyoruz.
            </p>

            <ul className="space-y-2 pt-3 border-t border-border-hairline">
              {CVT_FAULTS.map((fault) => (
                <li key={fault} className="flex items-center gap-2 font-saira text-xs text-iron-light">
                  <span className="w-1 h-1 rounded-full bg-brass/50 shrink-0" />
                  {fault}
                </li>
              ))}
            </ul>

            <span className="font-saira text-xs font-semibold text-brass group-hover:underline">
              Detaylar &rarr;
            </span>
          </Link>

          {/* Bakım — tam genişlik, yatay bant */}
          <Link
            href="/hizmetler/sanziman-bakimi/"
            className="sm:col-span-2 group rounded-xl border border-border-hairline bg-graphite-surface px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-border-brass hover:bg-graphite-elevated transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-graphite-elevated border border-border-hairline flex items-center justify-center shrink-0">
              <Gauge className="w-5 h-5 text-iron-light" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-saira text-base font-semibold text-text-primary leading-snug mb-1 group-hover:text-brass transition-colors">
                Şanzıman Bakım &amp; Kontrol
              </h3>
              <p className="font-saira text-sm text-text-secondary leading-snug">
                Yağ değişimi, filtre yenileme ve bilgisayarlı diagnostik.
                Düzenli bakım = uzun şanzıman ömrü.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2.5 shrink-0">
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {BAKIM_TAGS.map((tag) => (
                  <span key={tag} className={TAG_CLS}>{tag}</span>
                ))}
              </div>
              <span className="font-saira text-xs font-semibold text-iron-light group-hover:text-brass transition-colors">
                Detaylar &rarr;
              </span>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/hizmetler/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-subtle font-saira text-text-primary font-semibold text-sm hover:border-brass transition-all"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-4 h-4 text-iron-light" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
