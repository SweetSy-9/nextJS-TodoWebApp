/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-gradient-moonlit': {
          'background': '#141E30',  /* fallback for old browsers */
          'background': '-webkit-linear-gradient(to right, #243B55, #141E30)',  /* Chrome 10-25, Safari 5.1-6 */
          'background': 'linear-gradient(to right, #243B55, #141E30)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        },
          '.bg-gradient-deep-space': {
            'background': '#000000',  /* fallback for old browsers */
            'background': '-webkit-linear-gradient(to right, #434343, #000000)',  /* Chrome 10-25, Safari 5.1-6 */
            'background': 'linear-gradient(to right, #434343, #000000)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        },
        '.global-transition': {
          'transition': '150ms ease-in-out', 
        },
        
      })
    })
  ],
  theme: {
    extend: {},
  },
}
