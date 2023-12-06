import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        inputShadow: "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
      },
    },
    colors: {
      purple: "#633cff",
      hover: "#beadff",
      lightPurple: "#EFEBFF",
      darkGrey: "#333333",
      grey: "#737373",
      border: "#D9D9D9",
      lightGrey: "#FAFAFA",
      white: "#FFFFFF",
      red: "#FF3939",
    },
  },
  plugins: [],
};
export default config;
