module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['"Fjalla One"', 'sans-serif'],
    },

    extend: {
      fontSize: {
        '2xs': '0.65rem',
      },
      colors: {
        main: '#0086E1',
        secondary: '#0086E10D',
      },
      textColor: {
        main: '#0086E1',
        'green--extended': '#00C24E',
        'red--extended': '#FF5959',
        'purple--extended': '#6F62FF',
        'black--extended': '#071824',
      },
      maxWidth: {
        '2xs': '15rem',
      },
      minWidth: {
        '2xs--extended': '14rem',
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
