import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1B1A18',
        'ink-soft': '#4A4845',
        ash: '#979797',
        paper: '#F1EFEA',
        page: '#E3E1DB',
        rule: '#C9C6BE',
        saffron: '#EF7D00',
        ember: '#C25E00',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
      },
      fontSize: {
        // Modular scale, ~1.25 on mobile widening to ~1.333 on desktop
        xs: ['0.78rem', { lineHeight: '1.5' }],
        sm: ['0.9rem', { lineHeight: '1.6' }],
        base: ['1.0rem', { lineHeight: '1.75' }],
        lg: ['1.15rem', { lineHeight: '1.7' }],
        xl: ['1.4rem', { lineHeight: '1.45' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        '3xl': ['2.2rem', { lineHeight: '1.18' }],
        '4xl': ['2.9rem', { lineHeight: '1.1' }],
        '5xl': ['3.8rem', { lineHeight: '1.04' }],
        '6xl': ['5rem', { lineHeight: '1.0' }],
        '7xl': ['6.5rem', { lineHeight: '0.96' }],
      },
      maxWidth: {
        measure: '64ch',
        wide: '86rem',
      },
      transitionTimingFunction: {
        quill: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
