/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        picture: "url('./src/assets/5123236.jpg')",
      },
      colors: {
        beige: "#ff722a",
        darkBrown: "#621704",
        green: "#6B8E23",
        brown: "#8B4513",
        red: "#B7410E",
        blue: "#B0C4DE",
      },
      fontFamily: {
        press: [' "Press Start 2P" ', "cursive"],
      },
    },
  },
  plugins: [],
};
