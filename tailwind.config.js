/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#012d1d',
          container: '#1b4332',
          fixed: '#c1ecd4',
          'fixed-dim': '#a5d0b9',
        },
        secondary: {
          DEFAULT: '#0e6c4a',
          container: '#a0f4c8',
          fixed: '#a0f4c8',
          'fixed-dim': '#85d7ad',
        },
        tertiary: {
          DEFAULT: '#152b1c',
          container: '#2a4131',
        },
        surface: {
          DEFAULT: '#faf8ff',
          dim: '#d6d9ef',
          bright: '#faf8ff',
          'container-lowest': '#ffffff',
          'container-low': '#f3f2ff',
          container: '#ebedff',
          'container-high': '#e4e7fe',
          'container-highest': '#dee1f8',
          tint: '#3f6653',
          variant: '#dee1f8',
        },
        'on-surface': {
          DEFAULT: '#171b2b',
          variant: '#414844',
        },
        outline: {
          DEFAULT: '#717973',
          variant: '#c1c8c2',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
          'on-container': '#93000a',
        },
        background: '#F3FCEB',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['"Hanken Grotesk"', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      spacing: {
        'margin-mobile': '16px',
        'margin-desktop': '48px',
        'safe': 'env(safe-area-inset-bottom)',
      },
      boxShadow: {
        card: '0px 4px 20px rgba(27, 67, 50, 0.08)',
        'card-hover': '0px 8px 28px rgba(27, 67, 50, 0.12)',
        modal: '0px 12px 32px rgba(27, 67, 50, 0.12)',
        'bottom-nav': '0px -4px 20px rgba(27, 67, 50, 0.08)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '16px', letterSpacing: '0.01em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.04em', fontWeight: '600' }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
