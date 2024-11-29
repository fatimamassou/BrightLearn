/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F1271',
        secondary:{
          DEFAULT:'#EFD6FE',
          100:'#9955C1',
        }, 
        bg_primary: '#EFD6FE'
      },
      backgroundImage: {
        homePage: "url('/src/pectures/backgroundHome.jpeg')",
      },
    }, // Extend the default theme if needed
  },
  plugins: [],
};
