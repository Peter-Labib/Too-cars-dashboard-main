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
      height: {
        5.5: '22px',
      },
      maxWidth: {
        '2xs': '15rem',
      },
      minWidth: {
        '2xs--extended': '14rem',
      },
      keyframes: {
        buzz: {
          '50%': {
            transform: 'translateX(1px) rotate(1deg)',
          },
          '100%': {
            transform: 'translateX(-1px) rotate(-1deg)',
          },
        },
      },
      animation: {
        buzz: 'buzz 1s linear infinite',
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
