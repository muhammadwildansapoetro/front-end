/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#252A34",
        accent1: "#08D9D6",
        accent2: "#FF2E63",
      },
    },
  },
  plugins: [],
};
