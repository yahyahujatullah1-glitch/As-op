import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050714", // Deep Navy/Black
        surface: "#0f1221",    // Card Background
        primary: "#dc2626",    // Vibrant Red
        secondary: "#06b6d4",  // Cyan
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        inter: ["var(--font-inter)"],
        rajdhani: ["var(--font-rajdhani)"], // New Tech Font
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
