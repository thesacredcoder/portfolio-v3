module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#353941",
          200: "#26282B",
        },
        secondary: {
          100: "#90B8F8",
          200: "#5F85DB",
        },
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans", "sans-serif"],
      satisfy: ["satisfy", "cursive"],
    },
  },
  plugins: [],
};
