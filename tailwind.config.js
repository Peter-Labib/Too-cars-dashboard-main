module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif':['"Fjalla One"', 'sans-serif']
    },
    fontSize: {
      '2xs': '0.65rem',
    },
    extend: {
      colors: {
        main: '#0086E1',
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
