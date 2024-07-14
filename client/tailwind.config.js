/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'pl': '0 -22px 25px 3px',
        'tl': '0 22px 20px 7px',
      }, 
    },
  },
  plugins: [],
}