/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
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
        white: '#ffffff'
      },
      backgroundImage: {
        homePage: "url('/src/pectures/backgroundHome.jpeg')",
      },
      boxShadow: {
        DEFAULT: '0px 0px 18px 1px rgb(93, 75, 100)',
        100: '6px 0px 18px 1px rgb(93, 75, 100)',
        button: '2px 2px 7px #258694',
      },
    }, // Extend the default theme if needed
  },
  plugins: [],
};
