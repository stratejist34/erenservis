import { Eyebrow } from '@/components/ui/Eyebrow';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { CTAButton } from '@/components/ui/CTAButton';
import { StatusDot } from '@/components/ui/StatusDot';

export function Hero() {
  return (
    <section className="relative z-10 max-w-[1280px] mx-auto px-8 pt-[60px] pb-[100px] grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
      {/* Sol kolon */}
      <div>
        <Eyebrow withDot>
          Bostancı · Otomatik Şanzıman Teşhis Merkezi
        </Eyebrow>

        <h1 className="mt-7 mb-6 text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.025em] text-text-primary">
          Şanzıman sorunu büyümeden teşhis edilir.
        </h1>

        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-9">
          Geç kalırsanız onarım maliyeti katlanır. DSG, ZF ve CVT sistemlerde
          doğru teşhisle süreci baştan kontrol altına alıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <CTAButton href="tel:+905327153751" variant="primary" icon={<PhoneIcon />}>
            Ücretsiz Ön Teşhis
          </CTAButton>
          <CTAButton href="https://wa.me/905327153751" variant="secondary" external icon={<WhatsAppIcon />}>
            WhatsApp&apos;tan Yazın
          </CTAButton>
        </div>

        <div className="flex gap-6 items-center flex-wrap">
          <TrustItem>Aynı gün inceleme</TrustItem>
          <TrustItem>Yazılı fiyat teklifi</TrustItem>
          <TrustItem>6 ay işçilik garantisi</TrustItem>
        </div>
      </div>

      {/* Sağ kolon — Diagnostic Panel */}
      <DiagnosticPanel />
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-[13px] text-text-tertiary">
      <span className="w-1 h-1 rounded-full bg-text-tertiary" />
      {children}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function DiagnosticPanel() {
  return (
    <GlassPanel className="p-7">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="font-mono text-[10px] uppercase text-text-tertiary tracking-[0.15em] mb-1.5">
            Risk Büyüme Eğrisi
          </div>
          <div className="text-lg font-semibold text-text-primary tracking-[-0.01em]">
            Bekledikçe maliyet büyür
          </div>
        </div>
        <LiveBadge />
      </div>

      {/* Risk Curve SVG */}
      <RiskCurveChart />

      {/* Risk Rows */}
      <div className="flex flex-col gap-2.5 mt-6">
        <RiskRow variant="optimal" label="Erken Teşhis" sublabel="Kavrama / mekatronik ayarı" value="8–15K ₺" />
        <RiskRow variant="warning" label="Geç Müdahale" sublabel="Şanzıman revizyonu" value="35–80K ₺" />
        <RiskRow variant="critical" label="İhmal" sublabel="Komple değişim" value="120K+ ₺" />
      </div>
    </GlassPanel>
  );
}

function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono text-[10px] uppercase text-sky-bright tracking-[0.1em]" style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.28)' }}>
      <span
        className="w-1.5 h-1.5 rounded-full bg-sky-primary animate-pulse-fast"
        style={{ boxShadow: '0 0 10px #38BDF8' }}
      />
      Canlı
    </span>
  );
}

function RiskCurveChart() {
  return (
    <div className="relative h-[140px]">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <line x1="0" y1="35" x2="400" y2="35" stroke="rgba(160, 200, 230, 0.06)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="0" y1="70" x2="400" y2="70" stroke="rgba(160, 200, 230, 0.06)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="0" y1="105" x2="400" y2="105" stroke="rgba(160, 200, 230, 0.06)" strokeWidth="1" strokeDasharray="2 4" />

        {/* Area fill */}
        <path
          d="M 20 110 L 100 95 L 180 75 L 260 45 L 340 18 L 380 8 L 380 140 L 20 140 Z"
          fill="url(#skyGradient)"
        />

        {/* Line */}
        <path
          d="M 20 110 L 100 95 L 180 75 L 260 45 L 340 18 L 380 8"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.5))' }}
        />

        {/* Inactive dots */}
        <circle cx="20" cy="110" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="100" cy="95" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="180" cy="75" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        {/* Active dot */}
        <circle
          cx="260"
          cy="45"
          r="5"
          fill="#38BDF8"
          stroke="#070B11"
          strokeWidth="3"
          style={{ filter: 'drop-shadow(0 0 8px #38BDF8)' }}
        />
        <circle cx="340" cy="18" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="380" cy="8" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />

        {/* Labels */}
        <text x="20" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-jetbrains, monospace)" textAnchor="start" letterSpacing="0.05em">HAFTA 1</text>
        <text x="200" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-jetbrains, monospace)" textAnchor="middle" letterSpacing="0.05em">AY 1-3</text>
        <text x="380" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-jetbrains, monospace)" textAnchor="end" letterSpacing="0.05em">AY 6+</text>
      </svg>
    </div>
  );
}

interface RiskRowProps {
  variant: 'optimal' | 'warning' | 'critical';
  label: string;
  sublabel: string;
  value: string;
}

const statusColors = {
  optimal: '#10B981',
  warning: '#F59E0B',
  critical: '#F43F5E',
};

function RiskRow({ variant, label, sublabel, value }: RiskRowProps) {
  const valueColor = statusColors[variant];

  return (
    <div
      className="grid grid-cols-[auto_1fr_auto] items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-200 risk-row"
      style={{ background: 'rgba(0, 0, 0, 0.28)', border: '1px solid rgba(160, 200, 230, 0.08)' }}
    >
      <StatusDot variant={variant} />
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-medium text-text-primary">{label}</span>
        <span className="text-[11px] text-text-tertiary">{sublabel}</span>
      </div>
      <span className="font-mono text-[13px] font-semibold tabular-nums" style={{ color: valueColor }}>
        {value}
      </span>
    </div>
  );
}
