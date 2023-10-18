/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue-100': '#040c1c',
      'blue-200': '#040828',
      'blue-300': '#040c1c74',
      'blue-400': 'rgba(19, 33, 68, 1)',
      'wine-100': '#4b0716',
      'wine-200': '#201020',
      'wine-300': '#4b071690',
      'wine-400': '#4b0716c2',
      'red': '#E50914',
      'white': '#ffff',
      'grey': 'rgba(255, 255, 255, 0.1)',
      'grey-200': 'rgba(93, 91, 91, 0.933)',
      'gray': '#FFFFFFB3',
      'gray-200': 'rgba(228, 225, 225, 0.998)',
      'gray-300': '#181818',
      'magenta': 'rgb(32,12,36)',
      'black' : 'rgb(0, 0 , 0)',
      'black-100': 'rgba(0,0,0,.75)',
      'grad01': 'rgb(229, 9, 20)',
      'grad02': 'rgba(74, 42, 150, 0.5)',
      'grad03': 'rgba(74, 42, 150, 0)',
      'grad04': 'rgb(29, 82, 157)',
      'yellow': 'rgb(255, 181, 63)'
    },
    fontFamily: {
      'netflix': ' "Netflix Sans","Helvetica Neue", Helvetica, Arial, sans-serif'
    },
    screens: {
      'semi-midi': '500px',
      'midi': '800px',
      'semi-max': '1024px',
      'max': '1280px'
    },
    extend: {
      backgroundImage: {
        'login-banner': "url('/public/images/netflix-image900.jpg')",
      },
    },
  },
  plugins: [],
}

