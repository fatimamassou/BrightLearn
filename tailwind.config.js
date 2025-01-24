/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}', // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#4F1271',
          100: '#783F8E' ,
          200: '#AC3FE9' ,
        },
        secondary:{
          DEFAULT:'#EFD6FE',
          100:'#9955C1',
          200: '#5E1885',
        }, 
        bg_primary: '#EFD6FE',
        bg_secondary: '#F7F7FE' ,
        grey: '#D9D9D9',
        white: '#ffffff',
      },
      backgroundImage: {
        homePage: 'url(\'/src/pectures/backgroundHome.jpeg\')',
      },
      boxShadow: {
        DEFAULT: '0px -2px 20px 2px rgb(158, 146, 163)',
        100: '8px 8px 10px 2px rgb(158, 146, 163)',
        200: '4px 6px 14px rgb(78, 52, 90)',
        300: '0px 0px 14px rgb(78, 52, 90)',
        button: '2px 2px 7px #258694',
      },
      borderWidth: {
        '3': '3px' ,
      },
      borderRadius: {
        'custom': '18%', 
        100: '8%', 
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        lg: '2px 2px 4px rgb(137, 87, 160)',
      },
    }, // Extend the default theme if needed
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
