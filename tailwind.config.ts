import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        secular: ["Secular One", "sans-serif"],
      },
      colors: {
        primary: "#0070f3",
        secondary: "#00000080",
      },
    },
    animation: {
      "scroll-sm": "scroll 40s linear infinite",
      "scroll-md": "scroll 30s linear infinite",
      scroll: "scroll 20s linear infinite",
      "scroll-reverse-sm": "scroll-reverse 40s linear infinite",
      "scroll-reverse-md": "scroll-reverse 30s linear infinite",
      "scroll-reverse": "scroll-reverse 20s linear infinite",
    },
    keyframes: {
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(-50%)" },
      },
      "scroll-reverse": {
        "0%": { transform: "translateX(-50%)" },
        "100%": { transform: "translateX(0)" },
      },
    },
  },
  plugins: [],
};

export default config;