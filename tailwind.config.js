/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: '#CC2D4A',
      secondary: '#8FA206',
      tertiary: '#61AEC9',
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/LA.jpg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        instagram: "url('../svg/instagram.svg')",
        twitter: "url('../svg/twitter.svg')",
        map: "url('../svg/map.svg')",
        home: "url('../svg/home.svg')",
        search: "url('../svg/search.svg')",
        heart: "url('../svg/heart.svg')",
        user: "url('../svg/user.svg')",
        moon: "url('../svg/moon.svg')",
      },
      gridTemplateColumns: {
        cardCol: '2fr 3fr',
      },
      gridTemplateRows: {
        cardRow: '620px repeat(2, 400px)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
