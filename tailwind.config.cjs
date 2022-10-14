/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },

    colors: {
      transparent: 'transparent',
      black: '000',
      white: 'FFF',

      gray: {
        500: '#121214',
        400: '#202024',
        300: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },

      cyan: {
        100: '#81D8F7',
        200: '#9BE1FB',
        300: '#97EDFC',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      boxShadow: {
        '3xl': '0 0px 15px 0px #81D8F7',
      },
    },
  },
  plugins: [],
};
