//  @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },

    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "20px",
      },
      colors: {
        blueLight: "#8FB2F5",
        gray900: "#13131A",
        gray800: "#16161F",
        gray700: "#1C1C27",
        gray600: "#22222F",
        gray500: "#3B3B54",
        gray400: "#7F7F98",
        gray300: "#ABABC4",
        gray200: "#BFBFD4",
        gray100: "#FAFAFA",
        inputColor:"#1E1E29"
      },
    },
  },
  plugins: [],
};
