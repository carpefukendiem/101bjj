import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E42416",
        "primary-dark": "#C41E1A",
        secondary: "#0a1628",
        accent: "#1e3a8a",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-oswald)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
