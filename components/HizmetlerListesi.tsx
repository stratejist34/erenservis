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

const TAG_CLS = 'text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-[#64748B]';

export default function HizmetlerListesi({ hideHeader }: { hideHeader?: boolean } = {}) {
  return (
    <section className="py-24 bg-[#070B11]" aria-labelledby="hizmetler-baslik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {!hideHeader && (
          <div className="text-center mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#38BDF8] mb-4">
              Uzmanlık Alanlarımız
            </p>
            <h2
              id="hizmetler-baslik"
              className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] text-[#F0F4F8] mb-4"
            >
              Şanzıman Hizmetlerimiz
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
              Türkiye parkında sık görülen otomatik şanzıman ailelerinde tanı, bakım ve revizyon.
              Orijinal parça, garantili işçilik.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

          {/* DSG — tam genişlik, vurgulu kart */}
          <Link
            href="/hizmetler/dsg-sanziman-tamiri/"
            className="sm:col-span-2 group rounded-2xl border border-white/8 bg-[#0C1219] overflow-hidden p-7 hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition-all"
            style={{ borderLeft: '3px solid #38BDF8' }}
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                    VW · Audi · Skoda · Seat
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0">
                    <Settings2 className="w-6 h-6 text-[#64748B]" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-[#F0F4F8] leading-snug mb-2 group-hover:text-[#7DD3FC] transition-colors">
                      DSG &amp; S-Tronic Şanzıman
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {DSG_TAGS.map((tag) => (
                        <span key={tag} className={TAG_CLS}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  VW, Audi, Skoda ve Seat DSG şanzımanlarında mekatronik ünite, kavrama paketi ve basınç
                  tüpü dahil komple revizyon. DQ200 basınç tüpü yenileme hizmeti dahil.
                </p>

                <span className="text-sm font-semibold text-[#38BDF8] group-hover:underline">
                  Detaylar &rarr;
                </span>
              </div>

              {/* Arıza paneli */}
              <div className="lg:w-60 shrink-0 rounded-xl bg-white/[0.03] border border-white/8 p-5">
                <p className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider mb-4">
                  Sık Görülen DSG Arızaları
                </p>
                <ul className="space-y-2.5">
                  {DSG_FAULTS.map((fault) => (
                    <li key={fault} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#38BDF8]" />
                      <span className="text-sm text-[#94A3B8]">{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>

          {/* Aisin & Tam Otomatik */}
          <Link
            href="/hizmetler/aisin-sanziman-tamiri/"
            className="group rounded-2xl border border-white/8 bg-[#0C1219] p-6 flex flex-col gap-3 hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-[#F0F4F8] leading-snug mb-2 group-hover:text-[#7DD3FC] transition-colors">
                  Aisin &amp; Tam Otomatik
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {AISIN_TAGS.map((tag) => (
                    <span key={tag} className={TAG_CLS}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
              Aisin ve EAT6 / EAT8 ailelerinde valf gövdesi, tork konvertörü, yağ basıncı ve geçiş sertliği
              sorunlarını marka-model bağlamında ayrı değerlendiriyoruz.
            </p>

            <ul className="space-y-2 pt-3 border-t border-white/8">
              {AISIN_FAULTS.map((fault) => (
                <li key={fault} className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span className="w-1 h-1 rounded-full bg-[#38BDF8]/50 shrink-0" />
                  {fault}
                </li>
              ))}
            </ul>

            <span className="text-xs font-semibold text-[#38BDF8] group-hover:underline">
              Detaylar &rarr;
            </span>
          </Link>

          {/* CVT / EDC / DCT */}
          <Link
            href="/hizmetler/cvt-sanziman-tamiri/"
            className="group rounded-2xl border border-white/8 bg-[#0C1219] p-6 flex flex-col gap-3 hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-[#F0F4F8] leading-snug mb-2 group-hover:text-[#7DD3FC] transition-colors">
                  CVT / EDC / DCT Şanzımanlar
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {CVT_TAGS.map((tag) => (
                    <span key={tag} className={TAG_CLS}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed flex-1">
              CVT kayma belirtileri, Renault EDC / DCT ve Ford PowerShift geçiş sorunlarını tek kategoriye
              sıkıştırmadan platforma özel ön tanı yaklaşımıyla değerlendiriyoruz.
            </p>

            <ul className="space-y-2 pt-3 border-t border-white/8">
              {CVT_FAULTS.map((fault) => (
                <li key={fault} className="flex items-center gap-2 text-xs text-[#64748B]">
                  <span className="w-1 h-1 rounded-full bg-[#38BDF8]/50 shrink-0" />
                  {fault}
                </li>
              ))}
            </ul>

            <span className="text-xs font-semibold text-[#38BDF8] group-hover:underline">
              Detaylar &rarr;
            </span>
          </Link>

          {/* Bakım — tam genişlik, yatay bant */}
          <Link
            href="/hizmetler/sanziman-bakimi/"
            className="sm:col-span-2 group rounded-2xl border border-white/8 bg-[#0C1219] px-7 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:border-[#38BDF8]/30 hover:bg-[#0F1923] transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0">
              <Gauge className="w-5 h-5 text-[#64748B]" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-[#F0F4F8] leading-snug mb-1 group-hover:text-[#7DD3FC] transition-colors">
                Şanzıman Bakım &amp; Kontrol
              </h3>
              <p className="text-sm text-[#94A3B8] leading-snug">
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
              <span className="text-xs font-semibold text-[#64748B] group-hover:text-[#38BDF8] transition-colors">
                Detaylar &rarr;
              </span>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/hizmetler/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#F0F4F8] font-semibold text-sm hover:border-[#38BDF8]/30 hover:bg-white/[0.03] transition-all"
          >
            Tüm Hizmetleri Gör
            <ArrowRight className="w-4 h-4 text-[#64748B]" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
