/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          bg: '#f4f1ea',        // parchment
          surface: '#ffffff',  // paper
          border: '#d6d0c4',   // warm stone
          text: '#2c2924',     // bark
          muted: '#6b645a',    // dry leaf
          accent: '#6f7f5c',   // moss
          accentDark: '#4f5d45', // pine
          highlight: '#c9b27d', // straw
        },
      },
    },
  },
  plugins: [],
}
