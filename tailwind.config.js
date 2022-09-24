/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/*.{css,scss}", "./index.html", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#554DDE",
          pink: "#F44E77",
          LightPink: "#f77e9c",
          black: "#000000",
          stoke: "#CAD6F1",
          footer: "#DCE2F0",
          bgColor: "#F2F6FF",
        },
        secondary: {
          light: "#6A6D9E",
          dark: "#16194F",
        },
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
      dropShadow: {
        cardShadow: "drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15))",
      },
      boxShadow: {
        faqShadow: "0px 25px 50px rgba(22, 25, 79, 0.05)",
        btnShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      screens: {
        'mobile': '420px',
      },  
    },
    plugins: [],
  }
};