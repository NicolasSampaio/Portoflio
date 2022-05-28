module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('./assets/BG.svg')",
      },
      colors: {
        lincoliRed: "#F04848",
        lincoliGrey: "#C7C6C6",
      },
      fontFamily: {
        ptsans: ["PT Sans", "sans-serif"],
        avenirBlack: ["Avenir Black", "cursive"],
        avenirBook: ["Avenir Book", "cursive"],
      },
      fontSize: {
        "1.5xs": "1.0625rem",
        "1.9xl": "1.4375rem",
        "2.1xl": "1.5625rem",
        "5.5xl": "3.375rem",
      },
    },
  },
  plugins: [],
};
