/**
 * HeroSectionDC — Cold Brass hero bileşeni.
 * Anasayfada props'suz kullanılır (tüm default'lar homepage için).
 * Brand/servis sayfalarında title, subtitle ve CTA override edilebilir.
 */
'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Phone, MessageCircle, Clock, FileText, ShieldCheck } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { SYMPTOMS } from '@/data/symptoms';
import { useSymptom } from '@/contexts/SymptomContext';
import { trackPhoneCall, trackWhatsappClick } from '@/lib/analytics';

// setInterval + pulse chain içerdiği için SSR'dan ayrıştırılıp lazy yüklenir.
// Hero'nun alt bandında yer alıyor; ilk paint'i bloke etmez.
const LiveDiagnosedFeed = dynamic(() => import('@/components/LiveDiagnosedFeed'), {
  ssr: false,
  loading: () => <div className="h-[156px]" aria-hidden="true" />,
});

/* ── INTERNAL DEFAULTS (homepage için sabit veri) ───────────────────────── */

const DEFAULT_TRUST_DOTS = [
  { icon: <Clock className="h-3.5 w-3.5" strokeWidth={2} />, label: 'Aynı gün inceleme' },
  { icon: <FileText className="h-3.5 w-3.5" strokeWidth={2} />, label: 'Yazılı fiyat teklifi' },
  { icon: <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />, label: '6 ay işçilik garantisi' },
];

const STATS = [
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '5.000+', label: 'Tamamlanan İş' },
  { value: '6 Ay', label: 'Garanti' },
] as const;

const BAR_STYLES = {
  optimal: {
    color: '#10B981',
    bgColor: 'rgba(16,185,129,0.12)',
    borderColor: 'rgba(16,185,129,0.35)',
    pct: '14%',
    status: 'OPTİMAL',
  },
  risky: {
    color: '#F59E0B',
    bgColor: 'rgba(245,158,11,0.12)',
    borderColor: 'rgba(245,158,11,0.40)',
    pct: '62%',
    status: 'RİSKLİ',
  },
  critical: {
    color: '#F43F5E',
    bgColor: 'rgba(244,63,94,0.12)',
    borderColor: 'rgba(244,63,94,0.35)',
    pct: '100%',
    status: 'KRİTİK',
  },
} as const;

/* ── TYPES ──────────────────────────────────────────────────────────────── */

interface TrustDotItem {
  label: string;
  icon?: React.ReactNode;
}

export interface HeroSectionDCProps {
  badge?: string;
  /** Metin olarak verilen title düz H1 olarak render edilir.
   *  Verilmezse anasayfaya özgü animasyonlu JSX kullanılır. */
  title?: string | React.ReactNode;
  subtitle?: string;
  ctaPhone?: { label: string; number: string };
  ctaWhatsApp?: { label: string; href: string };
  trustItems?: TrustDotItem[];
  /** true olduğunda (varsayılan) sağ taraftaki diagnostic panel gösterilir. */
  showDiagnosticPanel?: boolean;
}

const DEFAULT_CTA_PHONE = { label: 'Ücretsiz Ön Teşhis — Hemen Arayın', number: '+905327153751' };
const DEFAULT_CTA_WA    = { label: "WhatsApp'tan Yazın", href: 'https://wa.me/905327153751' };
const DEFAULT_SUBTITLE  =
  'Geç kalırsanız onarım maliyeti katlanır. DSG, ZF ve CVT sistemlerde doğru teşhisle süreci baştan kontrol altına alıyoruz.';

/* ── COMPONENT ──────────────────────────────────────────────────────────── */

export default function HeroSectionDC({
  badge            = 'Bostancı · Otomatik Şanzıman Uzmanı',
  title,
  subtitle         = DEFAULT_SUBTITLE,
  ctaPhone         = DEFAULT_CTA_PHONE,
  ctaWhatsApp      = DEFAULT_CTA_WA,
  trustItems       = DEFAULT_TRUST_DOTS,
  showDiagnosticPanel = true,
}: HeroSectionDCProps) {
  const phoneHref = `tel:${ctaPhone.number.replace(/\s/g, '')}`;
  const pathname = usePathname() ?? '/';
  const { selectedId, setSelectedId } = useSymptom();
  const selected = SYMPTOMS.find((s) => s.id === selectedId) ?? SYMPTOMS[0];

  const [delayedId, setDelayedId] = useState(selectedId);
  const [ctaFading, setCtaFading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [liveFeedReady, setLiveFeedReady] = useState(false);
  const [prevSelectedId, setPrevSelectedId] = useState(selectedId);

  // selectedId değişince fade + interaction flag'ini render sırasında tetikle —
  // React 19 önerilen pattern (useEffect ile sync setState yerine prev-value diff).
  if (prevSelectedId !== selectedId) {
    setPrevSelectedId(selectedId);
    setHasInteracted(true);
    if (delayedId !== selectedId) setCtaFading(true);
  }

  useEffect(() => {
    if (!ctaFading) return;
    const t = setTimeout(() => {
      setDelayedId(selectedId);
      setCtaFading(false);
    }, 120);
    return () => clearTimeout(t);
  }, [ctaFading, selectedId]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let idleId: number | null = null;

    const mountLiveFeed = () => setLiveFeedReady(true);

    const scheduleMount = () => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(mountLiveFeed, { timeout: 1500 });
        return;
      }

      timeoutId = setTimeout(mountLiveFeed, 1500);
    };

    if (document.readyState === 'complete') {
      scheduleMount();
    } else {
      window.addEventListener('load', scheduleMount, { once: true });
    }

    return () => {
      window.removeEventListener('load', scheduleMount);

      if (idleId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const delayed = SYMPTOMS.find((s) => s.id === delayedId) ?? SYMPTOMS[0];
  const preDiagLabel = `${delayed.shortLabel} için ön teşhis al`;
  const preDiagContext = `Muhtemel: ${delayed.label} — ${delayed.severity === 'high' ? 'Yüksek risk' : 'Orta risk'}`;
  const preDiagWaHref = `https://wa.me/905327153751?text=${encodeURIComponent(
    `Merhaba, aracımda ${delayed.shortLabel.toLocaleLowerCase('tr-TR')} problemi var. Ön teşhis için bilgi almak istiyorum.`
  )}`;

  return (
    <section className="relative overflow-hidden">

      {/* ===== LAYER 1: Gerçek servis görüntüsü — FULL WIDTH =====
          Mobilde crop edilmiş küçük varyant (900x1200, ~31 KB), desktop'ta
          orijinal 1866x1050. <picture> sayesinde tek bir LCP candidate yükleniyor. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source media="(max-width: 768px)" srcSet="/images/part2/Screenshot_57-mobile.webp" />
          <img
            src="/images/part2/Screenshot_57.webp"
            alt=""
            fetchPriority="high"
            decoding="async"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ filter: 'saturate(0.7)' }}
          />
        </picture>
      </div>

      {/* ===== LAYER 2: Gradient overlay ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            to right,
            rgba(10,10,10,0.82) 0%,
            rgba(10,10,10,0.62) 38%,
            rgba(10,10,10,0.40) 68%,
            rgba(10,10,10,0.22) 100%
          )`,
        }}
      />

      {/* ===== LAYER 3: İçerik — max-w kısıtlaması burada ===== */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      <div className="pt-10 lg:pt-16">
        {/* Badge */}
        <div className="hero-item-1 mb-6 inline-flex items-center rounded-full border border-border-brass bg-brass/8 px-4 py-1.5 font-jetbrains text-[11px] font-medium uppercase tracking-[0.22em] text-brass">
          {badge}
        </div>

        {/* H1 */}
        <h1 className="hero-item-2 max-w-[12ch] font-saira text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-text-primary sm:text-6xl lg:text-7xl">
          {title != null ? title : (
            <>
              Şanzıman sorunu{' '}
              <span className="relative inline-block">
                <span className="text-brass">büyümeden</span>
                <span
                  aria-hidden="true"
                  className="animate-fill-bar absolute bottom-0 left-0 h-px rounded-full bg-gradient-to-r from-brass to-brass-bright"
                  style={{ '--bar-target': '100%', animationDelay: '0.5s' } as React.CSSProperties}
                />
              </span>{' '}
              teşhis edilir.
            </>
          )}
        </h1>

        <p className="hero-item-3 mt-7 max-w-[52ch] font-saira text-lg leading-8 text-text-secondary">
          {subtitle}
        </p>

        <p className="hero-item-3 mt-3 font-jetbrains text-[11px] uppercase tracking-widest text-iron-light">
          DSG · ZF · CVT · Aisin şanzımanlarda uzman teşhis
        </p>

        {/* Mini semptom seçici */}
        <div className="hero-item-4 mt-5 flex flex-wrap gap-2">
          {SYMPTOMS.map((s) => {
            const isActive = selectedId === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                aria-pressed={isActive}
                className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-jetbrains text-xs transition-all duration-200 ease-out ${
                  isActive
                    ? 'border-brass bg-brass/20 font-semibold text-text-primary'
                    : 'border-border-hairline bg-graphite-surface/60 text-text-secondary hover:-translate-y-px hover:border-border-brass hover:bg-brass/5 hover:text-text-primary'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    s.severity === 'high'
                      ? isActive ? 'bg-red-500' : 'bg-red-400'
                      : isActive ? 'bg-amber-500' : 'bg-amber-400'
                  }`}
                />
                {s.shortLabel}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hero-item-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            data-tracked="true"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brass-bright px-7 py-4 font-saira text-base font-semibold text-graphite-base transition-colors hover:bg-brass"
            onClick={() => trackPhoneCall({
              kaynak: 'hero',
              sayfa: pathname,
              semptom: selected?.id != null ? String(selected.id) : undefined,
              semptomEtiket: selected?.shortLabel,
            })}
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={2.5} />
            {ctaPhone.label}
          </a>
          <a
            href={ctaWhatsApp.href}
            data-tracked="true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle px-6 py-4 font-saira text-base font-medium text-text-secondary transition hover:border-brass hover:text-text-primary"
            onClick={() => trackWhatsappClick({
              kaynak: 'hero',
              sayfa: pathname,
              semptom: selected?.id != null ? String(selected.id) : undefined,
              semptomEtiket: selected?.shortLabel,
              mesajOnizleme: preDiagWaHref,
            })}
          >
            <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
            {ctaWhatsApp.label}
          </a>
        </div>

        {/* Trust dots */}
        <div className="hero-item-5 mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-jetbrains text-xs text-iron-light">
          {trustItems.map((dot) => (
            <span key={dot.label} className="inline-flex items-center gap-2">
              {dot.icon ?? <span className="h-1.5 w-1.5 rounded-full bg-brass/60" />}
              {dot.label}
            </span>
          ))}
        </div>
      </div>

      {/* Sağ — Diagnostic Cost Readout */}
      {showDiagnosticPanel && (
        <div
          className="animate-scan-reveal relative z-10 grid gap-4 lg:max-w-[92%] lg:pt-12"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative overflow-hidden rounded-xl border border-border-subtle bg-graphite-surface p-5">
            {/* 3D model arka plan */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
              style={{
                backgroundImage: 'url(/images/diagnostic_model_3d.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center right',
                opacity: 0.07,
              }}
            />
            {/* Terminal header */}
            <div className="relative z-10 mb-5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="font-jetbrains text-[11px] tracking-wider text-iron-light">
                MALIYET_ANALIZI.exe
              </span>
              {selectedId > 1 ? (
                <span className="ml-auto font-jetbrains text-[10px] tracking-wider text-[#38BDF8]">
                  › {selected.label}
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="animate-hero-cursor ml-auto inline-block h-[13px] w-[7px] rounded-sm bg-brass/60"
                />
              )}
            </div>

            <div className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.22em] text-iron-light">
              Risk Büyüme Eğrisi
            </div>
            <div className="mt-2 font-saira text-xl font-semibold tracking-[-0.03em] text-text-primary">
              Bekledikçe maliyet{' '}
              <span className="text-brass">büyür</span>
            </div>

            <div className="mt-5 space-y-3">
              {((['optimal', 'risky', 'critical'] as const)).map((key, i) => {
                const style = BAR_STYLES[key];
                const data = selected.costProfile[key];
                return (
                  <div key={key}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-jetbrains text-[11px] text-iron-light">{data.label}</span>
                      <span className="font-jetbrains text-[11px] font-semibold" style={{ color: style.color }}>
                        {style.status}
                      </span>
                    </div>
                    <div className="relative h-8 overflow-hidden rounded-lg border border-border-hairline bg-graphite-elevated">
                      <div
                        className="animate-fill-bar absolute inset-y-0 left-0 rounded-lg"
                        style={{
                          '--bar-target': style.pct,
                          background: style.bgColor,
                          borderRight: `2px solid ${style.borderColor}`,
                          animationDelay: `${0.5 + i * 0.15}s`,
                        } as React.CSSProperties}
                      />
                      <div className="absolute inset-0 flex items-center justify-between px-3">
                        <span className="font-jetbrains text-sm font-semibold" style={{ color: style.color }}>
                          {data.range}
                        </span>
                        <span className="font-jetbrains text-[10px] text-iron-light">{data.caption}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stat mini-cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-xl border border-border-subtle bg-graphite-surface p-3.5 transition-colors hover:border-border-brass"
              >
                <div className="font-saira text-3xl font-semibold tracking-[-0.03em] text-text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 font-jetbrains text-xs font-medium uppercase tracking-[0.16em] text-iron-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== HERO ALT CTA BANDI ===== */}
      <div className="relative z-10 col-span-full mt-16 overflow-hidden rounded-2xl border border-border-hairline bg-graphite-surface/95">
        <div className="relative grid grid-cols-1 items-center gap-8 px-8 py-8 sm:grid-cols-[auto_1fr_auto]">
          {/* Sol — bağlam */}
          <div className="sm:max-w-[200px]">
            <div className="font-saira text-base font-semibold text-text-primary">Son teşhisler</div>
            <div className="mt-1 font-saira text-xs text-iron-light">Gerçek servis kayıtları</div>
          </div>

          {/* Orta — canlı liste */}
          <div className="w-full sm:max-w-[560px]">
            {liveFeedReady ? <LiveDiagnosedFeed /> : <div className="h-[156px]" aria-hidden="true" />}
          </div>

          {/* Sağ — aksiyon */}
          <div
            className="flex flex-col items-center gap-2 transition-opacity duration-300 ease-out sm:items-end"
            style={{ opacity: !hasInteracted ? 0.6 : ctaFading ? 0.7 : 1 }}
          >
            <div className="font-saira text-[11px] text-iron-light">{preDiagContext}</div>
            <a
              href={preDiagWaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brass bg-brass/5 px-8 py-3 font-saira text-sm font-medium text-text-primary transition-colors duration-200 ease-out hover:border-brass hover:bg-brass/10"
            >
              {preDiagLabel}
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
