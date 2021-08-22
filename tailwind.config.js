const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#06202A',
        secondary: colors.yellow,
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      transform: ['hover'],
      scale: ['hover', 'group-hover'],
      textColor: ['active'],
      padding: ['last'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
