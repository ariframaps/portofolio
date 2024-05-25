/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'screen-3xl': '1600px'
      },
    },
  },
  plugins: [],
}

