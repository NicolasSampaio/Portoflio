module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      //font-family: 'PT Sans', sans-serif;
      fontFamily: {
        ptsans: ["PT Sans", "sans-serif"],
        avenirBlack: ["Avenir Black", "cursive"],
        avenirBook: ["Avenir Book", "cursive"],
      },
      backgroundImage: {
        texture: "url('./assets/BG.svg')",
      },
    },
  },
  plugins: [],
};
