module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8fafd",
          100: "#f8f7f7",
          900: "#141414",
          "900_02": "#071827",
          "900_01": "#112232",
        },
        blue_gray: {
          100: "#d6d6d6",
          900: "#1e3448",
          "600_00": "#4c6b8700",
          "900_00": "#1e344800",
        },
        amber: { 400: "#eac81f" },
        blue: {
          700: "#005ae2",
          A400: "#3284ff",
          A700: "#0065fe",
          A200: "#4991ff",
        },
        green: { 900: "#067808" },
        black: { 900: "#000000", "900_0c": "#0000000c" },
        white: { A700_19: "#fefefe19", A700: "#ffffff" },
        red: { A700: "#d60505" },
      },
      fontFamily: {
        gilroybold: "Gilroy-Bold",
        gilroymedium: "Gilroy-Medium",
        gilroysemibold: "Gilroy-SemiBold",
        kanit: "Kanit",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#112232,#4c6b8700)",
        gradient1: "linear-gradient(180deg ,#1e3448,#1e344800)",
      },
      boxShadow: { bs: "0px 4px  8px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
