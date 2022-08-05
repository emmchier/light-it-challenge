/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {},
      fontFamily: {},
      colors: {
        primary: {
          main: '#333333',
        },
        secondary: {
          main: '#EFEFEF',
          light: '#F7F7F7',
          dark: '#E0E0E0',
        },
        text: {
          primary: '#707070',
          secondary: '#B3B3B3',
        },
      },
      borderRadius: {
        main: '0.5rem',
      },
    },
  },
  plugins: [],
};
