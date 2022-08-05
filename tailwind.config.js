/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '416px',
      },
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
      fontSize: {
        lgXXX: '3rem', // 48px
        lgXX: '2.5rem', // 40px
        lgX: '2rem', // 32px
        lg: '1.5rem', // 24px
        md: '1.25rem', // 20px
        sm: '1rem', // 16px
        smX: '0.875rem', // 14px
        smXX: '0.75rem', // 14px
      },
      lineHeight: {
        lgXXX: '3.688rem', // 59px
        lgXX: '3.125rem', // 50px
        lgX: '2.813rem', // 45px
        lg: '2.625rem', // 42px
        md: '2.125rem', // 34px
        sm: '1.875rem', // 30px
        smX: '1.625rem', // 26px
        smXX: '1.5rem', // 24px
      },
      borderRadius: {
        main: '0.5rem',
      },
    },
  },
  plugins: [],
};
