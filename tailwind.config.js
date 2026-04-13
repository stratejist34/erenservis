module.exports = {
  theme: {
    extend: {
      colors: {
        'gold-action': 'var(--color-gold-action)',
        'gold-info': 'var(--color-gold-info)',
        'risk-high': 'var(--color-risk-high)',
        'risk-medium': 'var(--color-risk-medium)',
        'risk-low': 'var(--color-risk-low)',
        dark: {
          50: '#0F0F10',
          100: '#131313',
          200: '#171717',
          250: '#1D1B1A',
          300: '#2B2825',
        },
        // Cold Brass Hybrid
        graphite: {
          base:     'var(--color-graphite-base)',
          surface:  'var(--color-graphite-surface)',
          elevated: 'var(--color-graphite-elevated)',
        },
        iron: {
          DEFAULT: 'var(--color-iron)',
          deep:    'var(--color-iron-deep)',
          light:   'var(--color-iron-light)',
        },
        brass: {
          DEFAULT: 'var(--color-brass)',
          bright:  'var(--color-brass-bright)',
          dim:     'var(--color-brass-dim)',
        },
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
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        meta: ['10px', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      letterSpacing: {
        'tighter-2': '-0.025em',
        'tighter-1': '-0.015em',
      },
      fontFamily: {
        saira: ['var(--font-saira)', 'system-ui', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'Courier New', 'monospace'],
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
    },
  },
};
