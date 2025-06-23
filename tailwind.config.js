/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'brand-green': '#B9FF66',
        'brand-dark': '#191A23',
        'brand-light': '#F3F3F3',
      },
      fontSize: {
        // Desktop sizes
        'h1-desktop': ['60px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3-desktop': ['30px', { lineHeight: '1.2', fontWeight: '500' }],
        'h4-desktop': ['20px', { lineHeight: '1.2', fontWeight: '500' }],
        'p-desktop': ['18px', { lineHeight: '1.5', fontWeight: '400' }],
        // Mobile sizes
        'h1-mobile': ['43px', { lineHeight: '1.2', fontWeight: '500' }],
        'h2-mobile': ['36px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3-mobile': ['26px', { lineHeight: '1.2', fontWeight: '500' }],
        'h4-mobile': ['18px', { lineHeight: '1.2', fontWeight: '500' }],
        'p-mobile': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-delayed': 'fadeIn 0.8s ease-out 0.3s both',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-infinite': 'slideInfinite 20s linear infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'bounce-orbit': 'bounceOrbit 3s ease-in-out infinite',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'bounce-in-delayed': 'bounceIn 0.8s ease-out 0.4s both',
        'float': 'float 3s ease-in-out infinite',
        'float-random': 'floatRandom 4s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 2s ease-in-out infinite',
        'pulse-rotate': 'pulseRotate 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spinReverse 12s linear infinite',
        'highlight-expand': 'highlightExpand 1s ease-out 0.5s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInfinite: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceOrbit: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-15px) scale(1.1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
          '50%': { transform: 'translateY(-20px) rotate(12deg)' },
        },
        floatRandom: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-15px) translateX(3px)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        pulseRotate: {
          '0%, 100%': { transform: 'rotate(45deg) scale(1)' },
          '50%': { transform: 'rotate(45deg) scale(1.2)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        highlightExpand: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
};