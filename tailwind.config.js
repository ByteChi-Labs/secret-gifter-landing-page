/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#f9f9f9',
        'deep-red': '#D32F2F',
        'golden-yellow': '#FFC107',
        'forest-green': '#4CAF50',
        'royal-blue': '#2196F3',
      },
      height: {
        main: 'calc(100vh - 100px)',
      },

      keyframes: {
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      animation: {
        curve: 'curve 3.5s ease-in-out',
        appear: 'appear 2s',
        shake: 'shake 0.5s ease-in-out',
        shaking: 'shake 0.5s ease-in-out infinite alternate',
        blink: 'blink .5s step-end infinite alternate',
        typing: 'typing 4s steps(27)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
});
