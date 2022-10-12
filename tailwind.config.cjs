/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        darkBg: "#18191A",
        darkMain: "#242526",
      },
    },
  },
  plugins: [require("daisyui")],
};
