const { colors, fontFamily } = require('./src/styles/theme')  // eslint-disable-line

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily,
      keyframes: {
        bullet: {
          '0%, 100%': { transform: 'scale(0.8)', opacity: 0.5 },  // Awalnya lebih kecil dan redup
          '50%': { transform: 'scale(1.2)', opacity: 1 }, // Membesar di tengah-tengah animasi
        },
      },
      animation: {
        bullet: 'bullet 0.8s infinite ease-in-out', // Kecepatan animasi lebih cepat
      },
      // Custom delay untuk animasi
      animationDelay: {
        200: '200ms',
        400: '400ms',
      },
      // Menambahkan delay agar bullet bergerak bergantian
      transitionDelay: {
        200: '200ms',
        400: '400ms',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.delay-200': {
          'animation-delay': '200ms',
        },
        '.delay-400': {
          'animation-delay': '400ms',
        },
      }
      addUtilities(newUtilities)
    },
  ],
};

export default config;
