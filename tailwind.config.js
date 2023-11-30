module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      gaegu: ["Gaegu", "sans-serif"],
    },
    boxShadow: {
      DEFAULT:
        "0 1px 3px 0 rgba(213, 214, 220, 1), 0 1px 2px 0 rgba(213, 214, 220, 1)",
      hover:
        "0 1px 3px 0 rgba(174, 174, 174, 1), 0 1px 2px 0 rgba(174, 174, 174, 1)",
    },
    extend: {
      colors: {
        cardBoxShadow: "#d5d6dc",
        cardBoxShadowHover: "#aeaeae",
        cardBackground: "#f3f4f7",
        colorAddButton: "#dc7777",
        levelTubeBackground: "#e4e4e4",
        levelTubeBoxShadow: "#d4d4d4",
        levelTubeValueBackground: "#f3701a",
        bottomBarBackground: "#ec5656",
        bottomBarBoxShadow: "#d9333387",
        bottomBarTextColor: "#ffffff",
        modalOutside: "#000000a3",
        modalContentBoxShadow: "#474444",
        modalContentBackground: "#ffffff",
        searchBoxBorder: "#e6e6e6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
