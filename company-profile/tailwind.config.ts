import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "0px",
    },
    extend: {
      colors: {
        color1: "#347928",
        color2: "#C0EBA6",
        color3: "#FFFBE6",
        color4: "#FCCD2A",
      },
    },
  },
  plugins: [],
}
export default config;
