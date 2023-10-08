/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#6B8E23",
        brown: "#8B4513",
        red: "#B7410E",
        blue: "#B0C4DE",
      },
      boxShadow: {
        "strong-inner": "inset 0 4px 6px #B7410E",
      },
      fontFamily: {
        press: ["Press Start 2P", "cursive"],
      },
    },
  },
  plugins: [],
};
