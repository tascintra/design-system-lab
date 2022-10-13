/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
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
      'black': '000',
      'white': 'FFF',

      'gray-500': '#121214',
      'gray-400': '#202024',
      'gray-300': '#7C7C8A',
      'gray-200': '#C4C4CC',
      'gray-100': '#E1E1E6',

      'cyan-100': '#81D8F7',
      'cyan-200': '#92DEF7',
      'cyan-300': '#A7E8FA',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
