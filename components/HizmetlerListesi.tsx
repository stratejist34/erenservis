import { ArrowRight, Gauge, RefreshCcw, Settings2, Zap } from 'lucide-react';
import Link from 'next/link';

const DSG_FAULTS = [
  'Kavrama balata asinmasi',
  'Mekatronik kart arizasi',
  'Vites gecis sertligi',
  'Basinc tupu problemi',
] as const;

const AISIN_FAULTS = [
  'Valf govdesi davranis bozulmasi',
  'EAT6 / EAT8 gecis sertligi',
  'Tork konvertoru ve yag basinci takibi',
] as const;

const DSG_TAGS = ['DQ200', 'DQ250', 'DQ381', 'DQ500'] as const;
const AISIN_TAGS = ['Aisin', 'EAT6', 'EAT8', 'AT6'] as const;
const CVT_TAGS = ['CVT', 'EDC', 'DCT', 'PowerShift'] as const;
const BAKIM_TAGS = ['Diagnostik', 'Yag Degisimi', 'Filtre', 'Kalibrasyon'] as const;

export default function HizmetlerListesi({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section className="py-24 bg-surface-2" aria-labelledby="hizmetler-baslik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!hideHeader && (
          <div className="text-center mb-14">
            <p className="section-tag mb-4">Uzmanlik Alanlarimiz</p>
            <h2 id="hizmetler-baslik" className="text-fg mb-4">
              Sanziman Hizmetlerimiz
            </h2>
            <p className="text-fg-soft max-w-xl mx-auto leading-relaxed">
              Turkiye parkinda sik gorulen otomatik sanziman ailelerinde tani, bakim ve revizyon.
              Orijinal parca, garantili iscilik.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <Link
            href="/hizmetler/dsg-sanziman-tamiri/"
            className="sm:col-span-2 group card-surface overflow-hidden p-7"
            style={{ borderLeft: '3px solid var(--accent-primary)' }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent/15 text-accent">
                    En Cok Talep
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-surface-0 flex items-center justify-center shrink-0">
                    <Settings2 className="w-6 h-6 text-fg-soft" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-fg leading-snug mb-2 group-hover:text-accent-hi transition-colors duration-200">
                      DSG &amp; S-Tronic Sanziman
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {DSG_TAGS.map((tag) => (
                        <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface-0 text-fg-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-fg-soft leading-relaxed mb-6">
                  VW, Audi, Skoda ve Seat DSG sanzimanlarinda mekatronik unite, kavrama paketi ve basinc
                  tupu dahil komple revizyon. DQ200 basinc tupu yukseltme hizmeti dahil.
                </p>

                <span className="text-sm font-semibold text-accent group-hover:underline">
                  Detaylar &rarr;
                </span>
              </div>

              <div className="lg:w-60 shrink-0 rounded-xl bg-surface-0 border border-edge p-5">
                <p className="text-[10px] font-semibold text-fg-muted uppercase tracking-wider mb-4">
                  Sik Gorulen DSG Arizalari
                </p>
                <ul className="space-y-2.5">
                  {DSG_FAULTS.map((fault) => (
                    <li key={fault} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent-soft)' }} />
                      <span className="text-sm text-fg-soft">{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          <Link
            href="/hizmetler/aisin-sanziman-tamiri/"
            className="group card-surface p-6 flex flex-col gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-surface-0 flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5 text-fg-soft" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-fg leading-snug mb-1 group-hover:text-accent-hi transition-colors duration-200">
                  Aisin &amp; Tam Otomatik
                </h3>
                <p className="text-xs text-white/40 mt-1 mb-2">Peugeot, Citroen, Opel, Toyota ve Aisin tabanli tam otomatik platformlar</p>
                <div className="flex flex-wrap gap-1.5">
                  {AISIN_TAGS.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface-0 text-fg-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-fg-soft leading-relaxed flex-1">
              Aisin ve EAT6 / EAT8 ailelerinde valf govdesi, tork konvertoru, yag basinci ve gecis sertligi
              problemlerini marka-model baglaminda ayri degerlendiriyoruz.
            </p>

            <ul className="space-y-2 pt-3 border-t border-edge">
              {AISIN_FAULTS.map((fault) => (
                <li key={fault} className="flex items-center gap-2 text-xs text-fg-muted">
                  <span className="w-1 h-1 rounded-full bg-edge-hi shrink-0" />
                  {fault}
                </li>
              ))}
            </ul>

            <span className="text-xs font-semibold text-accent group-hover:underline">
              Aisin Detaylar &rarr;
            </span>

            <Link
              href="/hizmetler/eat-sanziman-tamiri/"
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent/80 hover:text-accent transition-colors"
            >
              EAT6 / EAT8 Servisi &rarr;
            </Link>
          </Link>

          <Link
            href="/hizmetler/cvt-sanziman-tamiri/"
            className="group card-surface p-6 flex flex-col gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-surface-0 flex items-center justify-center">
              <Zap className="w-5 h-5 text-fg-soft" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-fg leading-snug mb-1 group-hover:text-accent-hi transition-colors duration-200">
                CVT / EDC / DCT Takibi
              </h3>
              <p className="text-xs text-white/40 mt-1 mb-2">Nissan ve Toyota CVT ile Renault EDC / DCT ve Ford PowerShift semptomlari</p>
              <p className="text-sm text-fg-soft leading-relaxed">
                CVT kayma davranisi ile Renault EDC / DCT ve Ford PowerShift gecis semptomlarini ayni listede
                eritmeden, platforma gore ayri on teshis mantigi ile okuyoruz.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {CVT_TAGS.map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface-0 text-fg-muted">
                  {tag}
                </span>
              ))}
            </div>

            <span className="text-xs font-semibold text-accent group-hover:underline">
              Detaylar &rarr;
            </span>
          </Link>

          <Link
            href="/hizmetler/sanziman-bakimi/"
            className="sm:col-span-2 group card-surface px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          >
            <div className="w-10 h-10 rounded-xl bg-surface-2 flex items-center justify-center shrink-0">
              <Gauge className="w-5 h-5 text-fg-soft" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-fg leading-snug mb-1 group-hover:text-accent-hi transition-colors duration-200">
                Sanziman Bakim &amp; Kontrol
              </h3>
              <p className="text-sm text-fg-soft leading-snug">
                Yag degisimi, filtre yenileme ve bilgisayarli diagnostik.
                Duzenli bakim = uzun sanziman omru.
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2.5 shrink-0">
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                {BAKIM_TAGS.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-surface-2 text-fg-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-semibold text-fg-muted group-hover:text-accent transition-colors duration-200">
                Detaylar &rarr;
              </span>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/hizmetler/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-edge-hi text-fg font-semibold text-sm hover:bg-surface-2 transition-colors"
          >
            Tum Hizmetleri Gor
            <ArrowRight className="w-4 h-4 text-fg-soft" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
