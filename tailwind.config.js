module.exports = {
  theme: {
    extend: {
      colors: {
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
      },
    },
  },
};
