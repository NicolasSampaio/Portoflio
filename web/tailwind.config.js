module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lincoliBg: "url('assets/BG.svg')",
      },
      colors: {
        lincoliRed: "#F04848",
        lincoliGrey: "#C7C6C6",
        lincoliColorfulGradient:
          "background: transparent linear-gradient( 267deg, #6f23d8 0%, #a2359b 0%, #e54c4c 31%, #36a9dd 55%, #bedd3d 71%, #ef49a2 85%, #808080 100% ) 0% 0% no-repeat padding-box",
      },
      fontFamily: {
        ptsans: ["PT Sans", "sans-serif"],
        avenirBlack: ["Avenir Black", "cursive"],
        avenirBook: ["Avenir Book", "cursive"],
      },
      fontSize: {
        "1.5xs": "1.0625rem", //17px
        "1.9xl": "1.4375rem", //23px
        "2.1xl": "1.5625rem", //25px
        "5.5xl": "3.375rem", //54px
        "7.5xl": "5.25rem", //84px
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
