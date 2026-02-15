/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       primaryTitle: '#012340',
       primaryContent: '#025959',
       primarySubcontent: '#027333',
       primaryBase: '#03A63C',
       primaryAccent: '#04D939',
       primaryBg: '#f6f6f6',
      }
    },
  },
  plugins: [],
}

