/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      colors: {
        darker: "#222831",
        dark: "#393E46",
        accent: "#00ADB5",
        silver: "#EEEEEE",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
