# Sprint: Design System v2 — Sky + Hero Yeniden İnşa

## Bağlam

erenservis.net mevcut tasarım dili (amber accent, düşük elevation kartlar, zayıf hiyerarşi) yerine yeni bir tasarım sistemi kuruyoruz. Yön: **Cognify-inspired diagnostic clinic** — sky/electric blue accent, glassmorphism kartlar, Geist tipografi, "yaşayan zemin", semantic status sistemi.

Bu sprint **iki katmanlı**:
1. **Design system foundation** — Tailwind theme, CSS variables, fontlar, base utilities
2. **Hero bileşeni** — yeni anasayfa için ilk somut çıktı (referans prototipe birebir uyumlu)

Mevcut anasayfaya **dokunma**. Bu sprint paralel branch'te çalışacak, swap sonra yapılacak.

---

## Ön Hazırlık

### Branch
```bash
git checkout -b feat/design-system-v2-sky
```

### Referans dosya
Prototip HTML dosyası referans olarak işaretlendi: `/docs/prototypes/hero-v2-sky.html` — bu dosyayı projeye kopyala (sadece referans, kullanılmıyor). Tüm görsel kararlar (renkler, spacing, animasyonlar, glow değerleri) bu dosyadaki CSS'e birebir uymalı. Sapma yapma — eğer bir karar belirsizse referansa bak, oradaki değeri al.

---

## Görev 1 — Font Setup (Geist + Geist Mono)

### 1.1 next/font kurulumu

`app/layout.tsx` içinde:

```typescript
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});
```

Body class'ına ekle: `${geistSans.variable} ${geistMono.variable} font-sans`

### 1.2 Türkçe karakter testi
Build sonrası `ş, ğ, ı, İ, ç, ö, ü` karakterlerinin doğru render olduğunu Network sekmesinden font dosyasının latin-ext subset'ini çektiğinden teyit et.

### Kabul kriteri
- Geist Sans ve Geist Mono `next/font` üzerinden yüklenmeli
- Self-host font dosyası, manuel CSS @font-face, veya Google Fonts CDN link **OLMAMALI**
- Türkçe karakterler tam çalışmalı
- LCP'ye font'tan kaynaklı 200ms üzeri gecikme **OLMAMALI**

---

## Görev 2 — Tailwind Theme Extension

### 2.1 tailwind.config.ts güncelle

`theme.extend` içine ekle:

```typescript
colors: {
  // Backgrounds
  'bg-base': '#070B11',
  'bg-elevated': '#0C1219',

  // Surface (glassmorphism kartlar için temel — gerçek surface CSS variable ile, blur ayrı)
  'surface-1': 'rgba(20, 30, 42, 0.55)',
  'surface-2': 'rgba(28, 40, 54, 0.75)',

  // Borders
  'border-subtle': 'rgba(160, 200, 230, 0.08)',
  'border-accent': 'rgba(56, 189, 248, 0.35)',

  // Sky accent palette
  sky: {
    primary: '#38BDF8',
    bright: '#7DD3FC',
    deep: '#0284C7',
    glow: 'rgba(56, 189, 248, 0.15)',
    'glow-strong': 'rgba(56, 189, 248, 0.35)',
    soft: 'rgba(56, 189, 248, 0.6)',
  },

  // Status (semantic — sadece kendi rollerinde kullanılır)
  status: {
    optimal: '#10B981',
    warning: '#F59E0B',
    critical: '#F43F5E',
  },

  // Text
  'text-primary': '#F0F4F8',
  'text-secondary': '#94A3B8',
  'text-tertiary': '#64748B',
},

fontFamily: {
  sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-geist-mono)', 'monospace'],
},

fontSize: {
  // H1 fluid clamp — Tailwind plugin yerine inline clamp kullanılacak
  'eyebrow': ['11px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
  'meta': ['10px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
},

letterSpacing: {
  'tighter-2': '-0.025em',
  'tighter-1': '-0.015em',
},

boxShadow: {
  'glow-sky': '0 0 32px rgba(56, 189, 248, 0.3)',
  'glow-sky-strong': '0 0 44px rgba(56, 189, 248, 0.45)',
  'panel': '0 0 80px rgba(56, 189, 248, 0.10), 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
  'cta': '0 0 0 1px rgba(56, 189, 248, 0.2), 0 0 32px rgba(56, 189, 248, 0.3), 0 8px 24px rgba(2, 132, 199, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
  'cta-hover': '0 0 0 1px rgba(56, 189, 248, 0.3), 0 0 44px rgba(56, 189, 248, 0.45), 0 12px 30px rgba(2, 132, 199, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
},

backdropBlur: {
  'panel': '24px',
  'card': '20px',
  'nav': '12px',
},

animation: {
  'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
  'pulse-fast': 'pulse-fast 1.5s ease-in-out infinite',
},

keyframes: {
  'pulse-slow': {
    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
    '50%': { opacity: '0.5', transform: 'scale(0.85)' },
  },
  'pulse-fast': {
    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
    '50%': { opacity: '0.5', transform: 'scale(0.85)' },
  },
},
```

### Kabul kriteri
- `bg-bg-base`, `text-text-primary`, `border-border-subtle`, `bg-sky-primary`, `shadow-cta`, `animate-pulse-slow` gibi class'lar IDE autocomplete'te görünmeli
- Eski theme.extend değerleri silinmemiş, sadece eklenmiş olmalı
- Build hatası vermemeli (`pnpm build` veya `npm run build`)

---

## Görev 3 — Global CSS

### 3.1 app/globals.css

Tailwind directive'leri altına ekle:

```css
@layer base {
  :root {
    /* CSS variables — Tailwind ile redundant ama bazı yerlerde inline kullanım için */
    --bg-base: #070B11;
    --sky-primary: #38BDF8;
    --sky-deep: #0284C7;
  }

  html {
    background: #070B11;
    color-scheme: dark;
  }

  body {
    background: #070B11;
    color: #F0F4F8;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'cv11', 'ss01';
    overflow-x: hidden;
  }

  /* Living background — fixed pseudo elements */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 50% at 75% 15%, rgba(56, 189, 248, 0.10), transparent 55%),
      radial-gradient(ellipse 70% 50% at 15% 85%, rgba(2, 132, 199, 0.08), transparent 55%),
      radial-gradient(ellipse 50% 40% at 50% 50%, rgba(56, 189, 248, 0.03), transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(160, 200, 230, 0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(160, 200, 230, 0.018) 1px, transparent 1px);
    background-size: 64px 64px;
    pointer-events: none;
    z-index: 0;
  }
}

@layer utilities {
  /* Tabular numbers — stat ve fiyat için */
  .tabular-nums {
    font-variant-numeric: tabular-nums;
  }

  /* Mobile blur fallback — performans kritik */
  @media (max-width: 900px) {
    .glass-panel,
    .glass-card,
    .glass-nav,
    .glass-button {
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      background: rgba(12, 18, 25, 0.92) !important;
    }
  }

  /* Reduced motion — kritik a11y */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

### Kabul kriteri
- `body::before` ve `body::after` zeminde görünmeli
- Mobilde (DevTools 768px) glass utility class'ları olan kartların blur'u kapanıyor olmalı
- `prefers-reduced-motion: reduce` ile pulse animasyonları durmalı (DevTools Rendering panel'den test)

---

## Görev 4 — Base Component Library

`components/ui/` altında şu dosyaları oluştur:

### 4.1 components/ui/Eyebrow.tsx

```typescript
interface EyebrowProps {
  children: React.ReactNode;
  withDot?: boolean;
  variant?: 'pill' | 'plain';
}

export function Eyebrow({ children, withDot = false, variant = 'pill' }: EyebrowProps) {
  if (variant === 'plain') {
    return (
      <div className="font-mono text-meta uppercase text-text-tertiary">
        {children}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-sky-primary/8 border border-sky-primary/22 rounded-full font-mono text-eyebrow uppercase text-sky-primary font-medium">
      {withDot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-sky-primary animate-pulse-slow"
          style={{ boxShadow: '0 0 10px #38BDF8' }}
        />
      )}
      {children}
    </div>
  );
}
```

### 4.2 components/ui/StatusDot.tsx

```typescript
interface StatusDotProps {
  variant: 'optimal' | 'warning' | 'critical';
  size?: 'sm' | 'md';
  glow?: boolean;
}

const colorMap = {
  optimal: '#10B981',
  warning: '#F59E0B',
  critical: '#F43F5E',
};

export function StatusDot({ variant, size = 'md', glow = true }: StatusDotProps) {
  const dimension = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2';
  const color = colorMap[variant];

  return (
    <span
      className={`${dimension} rounded-full inline-block`}
      style={{
        background: color,
        boxShadow: glow ? `0 0 10px ${color}` : 'none',
      }}
    />
  );
}
```

### 4.3 components/ui/GlassPanel.tsx

```typescript
interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'panel' | 'card';
}

export function GlassPanel({ children, className = '', variant = 'panel' }: GlassPanelProps) {
  const baseClass = variant === 'panel'
    ? 'bg-surface-1 backdrop-blur-panel border border-border-subtle rounded-[20px] shadow-panel glass-panel'
    : 'bg-surface-1 backdrop-blur-card border border-border-subtle rounded-2xl glass-card';

  return (
    <div className={`relative ${baseClass} ${className}`}>
      {children}
    </div>
  );
}
```

### 4.4 components/ui/CTAButton.tsx

```typescript
import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  external?: boolean;
}

export function CTAButton({ href, children, variant = 'primary', icon, external }: CTAButtonProps) {
  const Component = external ? 'a' : Link;
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (variant === 'primary') {
    return (
      <Component
        href={href}
        {...externalProps}
        className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-[#061018] transition-all duration-250 hover:-translate-y-0.5 shadow-cta hover:shadow-cta-hover"
        style={{
          background: 'linear-gradient(180deg, #5DCBFA 0%, #38BDF8 50%, #0284C7 100%)',
          border: '1px solid rgba(125, 211, 252, 0.4)',
        }}
      >
        {icon}
        {children}
      </Component>
    );
  }

  return (
    <Component
      href={href}
      {...externalProps}
      className="inline-flex items-center gap-2.5 px-6 py-4 bg-surface-1 backdrop-blur-nav text-text-primary text-sm font-medium rounded-xl border border-border-subtle hover:border-border-accent hover:bg-surface-2 transition-all duration-200 glass-button"
    >
      {icon}
      {children}
    </Component>
  );
}
```

### Kabul kriteri
- 4 component da `'use client'` direktifi **OLMADAN** çalışmalı (server component)
- Hiçbiri external state, useEffect, useState içermiyor
- Tipler tam, `any` kullanılmamış

---

## Görev 5 — Hero Bileşeni

### 5.1 components/sections/Hero.tsx

`'use client'` **GEREKMİYOR**. Tüm animasyonlar CSS-only.

```typescript
import { Eyebrow } from '@/components/ui/Eyebrow';
import { GlassPanel } from '@/components/ui/GlassPanel';
import { CTAButton } from '@/components/ui/CTAButton';
import { StatusDot } from '@/components/ui/StatusDot';

export function Hero() {
  return (
    <section className="relative z-10 max-w-[1280px] mx-auto px-8 pt-15 pb-25 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 items-center">

      {/* SOL KOLON */}
      <div>
        <Eyebrow withDot>
          Bostancı · Otomatik Şanzıman Teşhis Merkezi
        </Eyebrow>

        <h1 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tighter-2 text-text-primary mb-6 mt-7">
          Şanzıman sorunu büyümeden teşhis edilir.
        </h1>

        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[480px] mb-9">
          Geç kalırsanız onarım maliyeti katlanır. DSG, ZF ve CVT sistemlerde
          doğru teşhisle süreci baştan kontrol altına alıyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <CTAButton
            href="tel:+905327153751"
            variant="primary"
            icon={<PhoneIcon />}
          >
            Ücretsiz Ön Teşhis
          </CTAButton>
          <CTAButton
            href="https://wa.me/905327153751"
            variant="secondary"
            external
            icon={<WhatsAppIcon />}
          >
            WhatsApp'tan Yazın
          </CTAButton>
        </div>

        <div className="flex gap-6 items-center flex-wrap">
          <TrustItem>Aynı gün inceleme</TrustItem>
          <TrustItem>Yazılı fiyat teklifi</TrustItem>
          <TrustItem>2 yıl işçilik garantisi</TrustItem>
        </div>
      </div>

      {/* SAĞ KOLON — DIAGNOSTIC PANEL */}
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="font-mono text-meta uppercase text-text-tertiary mb-1.5">
            Risk Büyüme Eğrisi
          </div>
          <div className="text-lg font-semibold text-text-primary tracking-tighter-1">
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
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-primary/10 border border-sky-primary/28 rounded-full font-mono text-[10px] uppercase text-sky-bright tracking-[0.1em]">
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

        {/* Dots */}
        <circle cx="20" cy="110" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="100" cy="95" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="180" cy="75" r="4" fill="#070B11" stroke="#38BDF8" strokeWidth="2" />
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
        <text x="20" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-geist-mono)" textAnchor="start" letterSpacing="0.05em">HAFTA 1</text>
        <text x="200" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-geist-mono)" textAnchor="middle" letterSpacing="0.05em">AY 1-3</text>
        <text x="380" y="135" fill="#64748B" fontSize="9" fontFamily="var(--font-geist-mono)" textAnchor="end" letterSpacing="0.05em">AY 6+</text>
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

function RiskRow({ variant, label, sublabel, value }: RiskRowProps) {
  const valueColor = {
    optimal: 'text-status-optimal',
    warning: 'text-status-warning',
    critical: 'text-status-critical',
  }[variant];

  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3.5 px-4 py-3.5 bg-black/[0.28] border border-border-subtle rounded-xl hover:border-border-accent hover:bg-black/40 transition-all duration-200">
      <StatusDot variant={variant} />
      <div className="flex flex-col gap-0.5">
        <span className="text-[13px] font-medium text-text-primary">{label}</span>
        <span className="text-[11px] text-text-tertiary">{sublabel}</span>
      </div>
      <span className={`font-mono text-[13px] font-semibold tabular-nums ${valueColor}`}>
        {value}
      </span>
    </div>
  );
}
```

### Kabul kriteri
- Component server component (no `'use client'`)
- Lighthouse Performance ≥ 95 (mobile)
- LCP < 2.0s
- CLS = 0
- Tüm interaktif elementler keyboard erişilebilir (Tab + Enter)
- Hover state'leri prototip ile birebir uyumlu

---

## Görev 6 — Test Sayfası

### 6.1 app/v2/page.tsx

Mevcut anasayfaya dokunma. Yeni bir test route oluştur:

```typescript
import { Hero } from '@/components/sections/Hero';

export default function V2Page() {
  return (
    <main className="relative">
      <Hero />
    </main>
  );
}

export const metadata = {
  title: 'Eren Servis v2 — Design Preview',
  robots: 'noindex, nofollow',
};
```

`noindex, nofollow` **kritik** — bu sayfa Google'a sızmamalı.

### Kabul kriteri
- `/v2` route'u açıldığında prototipin Next.js karşılığı render olmalı
- Mobil + desktop responsive davranış prototip ile birebir aynı
- View source'ta `<meta name="robots" content="noindex, nofollow">` görünmeli

---

## Görev 7 — Quality Check

Sprint sonunda şu kontrol listesini çalıştır:

### Build
```bash
pnpm build
```
- TypeScript hatası **OLMAMALI**
- Tailwind unknown class uyarısı **OLMAMALI**
- Build size delta'sını kaydet (öncesi vs sonrası)

### Lighthouse (mobile, throttled)
`/v2` üzerinde çalıştır:
- Performance ≥ 95
- Accessibility = 100
- Best Practices = 100
- SEO ≥ 95 (noindex olduğu için 100 olmayabilir, normal)

### Görsel regresyon
- Mevcut anasayfa (`/`) **hiç değişmemiş** olmalı — eski tasarım dili olduğu gibi duruyor
- `/v2` yeni dili gösteriyor

### qa-check.js
Mevcut script'i `/v2` üzerinde çalıştır, çıktıyı raporla.

---

## Çıktı / Deliverable

Sprint sonunda şu dosyalar mevcut olmalı:

```
app/
  layout.tsx                          [DEĞİŞTİ — font import]
  globals.css                         [DEĞİŞTİ — base + utilities]
  v2/
    page.tsx                          [YENİ]

components/
  ui/
    Eyebrow.tsx                       [YENİ]
    StatusDot.tsx                     [YENİ]
    GlassPanel.tsx                    [YENİ]
    CTAButton.tsx                     [YENİ]
  sections/
    Hero.tsx                          [YENİ]

docs/
  prototypes/
    hero-v2-sky.html                  [YENİ — referans, gitignore'a EKLENMESİN]

tailwind.config.ts                    [DEĞİŞTİ — theme.extend]
```

---

## Yapılmaması Gerekenler (Anti-Goals)

- ❌ Mevcut `/` anasayfasına dokunma
- ❌ `'use client'` ekleme (hero ve UI component'leri **server component** olmalı)
- ❌ Framer Motion, react-spring, gsap **kurma** — animasyonlar CSS-only
- ❌ Recharts, victory, nivo **kurma** — chart inline SVG
- ❌ Lucide-react'i wildcard import etme (`import * as Icons` yasak)
- ❌ Manuel font dosyası download edip self-host'lama — **sadece** `next/font/google`
- ❌ Background için PNG/JPG image kullanma — sadece CSS gradient
- ❌ Schema.ts dosyasına dokunma (bu sprint scope dışı)
- ❌ Mevcut sayfaların SEO/metadata'sına dokunma

---

## Sprint Sonrası

Bu sprint tamamlanıp `/v2` onaylandıktan sonra **Sprint 2** açılacak:
- Belirtiler bölümü
- Hizmetler bölümü
- Süreç bölümü
- Footer

Hepsi tamamlanınca **swap sprint**'i ile `/v2` → `/` taşıma yapılacak. **Şimdi sadece bu sprint'e odaklan.**

---

## Soru / Belirsizlik Durumunda

Eğer prototip referansında olmayan bir karar gerekiyorsa:
1. **Önce referans dosyaya bak** (`docs/prototypes/hero-v2-sky.html`)
2. Hâlâ belirsizse, **dur ve sor** — kendin uydurma
3. Spacing/sizing belirsizse, Tailwind'in default scale'ini kullan (`p-4`, `gap-3` vs.)
