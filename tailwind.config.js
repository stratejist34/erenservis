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
        brand: {
          400: '#B59B75',
          500: '#A68A64',
          600: '#947554',
          700: '#7E6245',
        },
        accent: {
          400: '#B59B75',
          500: '#A68A64',
          600: '#947554',
          700: '#7E6245',
          bronze: '#9A7558',
          brass: '#8F7A58',
        },
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(180deg, #181818 0%, #111111 100%)',
        'gradient-accent': 'linear-gradient(135deg, #A68A64 0%, #9A7558 100%)',
        'gradient-glow': 'radial-gradient(circle, rgba(166,138,100,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(166, 138, 100, 0.3)',
        // v2 sky tokens
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
    },
  },
};
