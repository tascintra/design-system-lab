/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    


    colors: {
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
