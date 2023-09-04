/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
    },
    fontFamily:{
      Roboto:["Roboto,sans-serif"]
    },
    container:{
      padding:"2rem",
      center:true,
    },
    screens:{
      sm:"640px",
      md:"768px",
    },
    colors:{
      "weather-primary":"#00668A",
      "weather-secondary":"#004E71",
      "weather-white":"#ffff",
      "weather-black":"#000000",
    }
  },
  plugins: [],
}
