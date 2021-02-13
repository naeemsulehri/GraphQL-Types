module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto, sans-serif'],
      },
      colors: {
        dispoBlack: {
          100: '#7D7D82',
          200: '#646468',
          300: '#2D2D31',
          400: '#2C2C2D',
          500: '#19191A',
          600: '#000000',
        },
        dispoBlue: {
          100: '#60c7f4',
          500: '#2a6db1',
          900: '#1f457c',
        },
        dispoWhite: {
          100: '#fbfbfb',
        },
      },
      height: {
        150: '37.5rem',
        35: '8.7rem',
        38: '9.5rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
