/**
 * HeroSectionDC — Diagnostic Cyan hero bileşeni.
 * Anasayfada props'suz kullanılır (tüm default'lar homepage için).
 * Brand/servis sayfalarında title, subtitle ve CTA override edilebilir.
 */
import React from 'react';
import { Phone, MessageCircle, Clock, FileText, ShieldCheck } from 'lucide-react';

/* ── INTERNAL DEFAULTS (homepage için sabit veri) ───────────────────────── */

const DEFAULT_TRUST_DOTS = [
  { icon: <Clock className="h-3.5 w-3.5" strokeWidth={2} />, label: 'Aynı gün inceleme' },
  { icon: <FileText className="h-3.5 w-3.5" strokeWidth={2} />, label: 'Yazılı fiyat teklifi' },
  { icon: <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2} />, label: '2 yıl işçilik garantisi' },
];

const STATS = [
  { value: '15+', label: 'Yıl Deneyim' },
  { value: '5.000+', label: 'Tamamlanan İş' },
  { value: '6 Ay', label: 'Garanti' },
] as const;

const COST_BARS = [
  {
    label: 'Erken Teşhis',
    range: '8–15K ₺',
    pct: '14%',
    color: '#10B981',
    bgColor: 'rgba(16,185,129,0.12)',
    borderColor: 'rgba(16,185,129,0.35)',
    status: 'OPTİMAL',
    note: 'Kavrama / mekatronik',
  },
  {
    label: 'Geç Müdahale',
    range: '35–80K ₺',
    pct: '62%',
    color: '#F59E0B',
    bgColor: 'rgba(245,158,11,0.12)',
    borderColor: 'rgba(245,158,11,0.40)',
    status: 'RİSKLİ',
    note: 'Şanzıman revizyonu',
  },
  {
    label: 'İhmâl',
    range: '120K+ ₺',
    pct: '100%',
    color: '#F43F5E',
    bgColor: 'rgba(244,63,94,0.12)',
    borderColor: 'rgba(244,63,94,0.35)',
    status: 'KRİTİK',
    note: 'Komple değişim',
  },
] as const;

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

  return (
    <section className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">

      {/* ===== LAYER 1: Gerçek servis görüntüsü — EN ARKADA ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -left-16 -right-16 -top-10 -bottom-10 z-0"
        style={{
          backgroundImage: 'url(/images/servis.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px) brightness(0.6)',
          opacity: 0.60,
        }}
      />

      {/* ===== LAYER 2: Gradient overlay ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(7,11,17,0.97) 0%,
            rgba(7,11,17,0.88) 40%,
            rgba(7,11,17,0.62) 100%
          )`,
        }}
      />

      {/* ===== LAYER 3: Sky radial glow ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 28% 50%, rgba(56,189,248,0.18) 0%, transparent 65%)',
        }}
      />

      {/* ===== LAYER 4: İçerik ===== */}
      <div className="relative z-10 pt-10 lg:pt-16">
        {/* Badge */}
        <div className="hero-item-1 mb-6 inline-flex items-center rounded-full border border-[#38BDF8]/20 bg-[#38BDF8]/8 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7DD3FC]">
          {badge}
        </div>

        {/* H1 */}
        <h1 className="hero-item-2 max-w-[12ch] text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-7xl text-[#F0F4F8]">
          {title != null ? title : (
            <>
              Şanzıman sorunu{' '}
              <span className="relative inline-block">
                <span className="text-[#38BDF8]">büyümeden</span>
                <span
                  aria-hidden="true"
                  className="animate-fill-bar absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]"
                  style={{ '--bar-target': '100%', animationDelay: '0.5s' } as React.CSSProperties}
                />
              </span>{' '}
              teşhis edilir.
            </>
          )}
        </h1>

        <p className="hero-item-3 mt-7 max-w-[52ch] text-lg leading-8 text-[#94A3B8]">
          {subtitle}
        </p>

        {/* CTA */}
        <div className="hero-item-4 mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#38BDF8] px-7 py-4 text-base font-semibold text-[#070B11] shadow-[0_12px_36px_rgba(56,189,248,0.25)] ring-1 ring-[#7DD3FC]/20 transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(56,189,248,0.35)]"
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={2.5} />
            {ctaPhone.label}
          </a>
          <a
            href={ctaWhatsApp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-4 text-base font-medium text-[#F0F4F8] transition hover:bg-white/[0.04] hover:border-[#38BDF8]/30"
          >
            <MessageCircle className="h-4.5 w-4.5" strokeWidth={2} />
            {ctaWhatsApp.label}
          </a>
        </div>

        {/* Trust dots */}
        <div className="hero-item-5 mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#64748B]">
          {trustItems.map((dot) => (
            <span key={dot.label} className="inline-flex items-center gap-2">
              {dot.icon ?? <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] dot-glow-sky" />}
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
          <div className="glass-surface-strong rounded-[28px] p-5">
            {/* Terminal header */}
            <div className="mb-5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-[11px] tracking-wider text-[#64748B]">
                MALIYET_ANALIZI.exe
              </span>
              <span
                aria-hidden="true"
                className="animate-hero-cursor ml-auto inline-block h-[13px] w-[7px] rounded-sm bg-[#38BDF8]/60"
              />
            </div>

            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#64748B]">
              Risk Büyüme Eğrisi
            </div>
            <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-[#F0F4F8]">
              Bekledikçe maliyet{' '}
              <span className="text-[#38BDF8]">büyür</span>
            </div>

            <div className="mt-5 space-y-3">
              {COST_BARS.map((bar, i) => (
                <div key={bar.label}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="font-mono text-[11px] text-[#64748B]">{bar.label}</span>
                    <span className="font-mono text-[11px] font-semibold" style={{ color: bar.color }}>
                      {bar.status}
                    </span>
                  </div>
                  <div className="relative h-8 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <div
                      className={`animate-fill-bar absolute inset-y-0 left-0 rounded-lg ${i === 0 ? 'dot-glow-success' : i === 1 ? 'dot-glow-warning' : 'dot-glow-critical'}`}
                      style={{
                        '--bar-target': bar.pct,
                        background: bar.bgColor,
                        borderRight: `2px solid ${bar.borderColor}`,
                        animationDelay: `${0.5 + i * 0.15}s`,
                      } as React.CSSProperties}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-3">
                      <span className="font-mono text-sm font-semibold" style={{ color: bar.color }}>
                        {bar.range}
                      </span>
                      <span className="font-mono text-[10px] text-[#475569]">{bar.note}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat mini-cards */}
          <div className="grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="stat-glow-top rounded-[24px] border border-white/8 bg-[#0C1219]/80 p-3.5 backdrop-blur-sm transition hover:-translate-y-1"
              >
                <div className="text-3xl font-semibold tracking-[-0.03em] text-[#F0F4F8]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-[#64748B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== HERO ALT CTA BANDI ===== */}
      <div className="relative z-10 col-span-full mt-16 overflow-hidden rounded-2xl">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/servis.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            filter: 'blur(15px) saturate(0.8)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(7,11,17,0.9) 0%, rgba(7,11,17,0.7) 50%, rgba(7,11,17,0.9) 100%)',
          }}
        />
        <div className="relative flex flex-col items-center justify-center gap-4 px-8 py-8 sm:flex-row sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-sm font-medium text-[#94A3B8]">Bostancı&apos;nın şanzıman uzmanı</div>
            <div className="text-lg font-semibold text-[#F0F4F8]">15 yıllık deneyim, 2 yıl garanti</div>
          </div>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-[#38BDF8]/30 bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-[#070B11] transition hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" strokeWidth={2.5} />
            Hemen Ara
          </a>
        </div>
      </div>
    </section>
  );
}
