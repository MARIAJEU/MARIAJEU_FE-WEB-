/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      height: {
        '128': '31rem',
      },
      fontFamily: {
        'Inter': ['Inter']
      }
    },
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx'
  ],

}

