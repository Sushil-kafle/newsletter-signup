/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "650px",
        md: "1060px",
        lg: "1440px",
      },
      colors: {
        tomato: " hsl(4, 100%, 67%)",
        grey: {
          dark: " hsl(234, 29%, 20%)",
          charcol: "hsl(235, 18%, 26%)",
          regular: " hsl(231, 7%, 60%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      fontSize: {
        sm: "16px",
        md: "18px",
        lg: "36px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
