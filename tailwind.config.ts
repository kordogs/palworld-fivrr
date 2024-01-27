import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        glass:
          "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), backdrop-filter: blur(10px)",
      }),
      animation: {
        tilt: "tilt 2s",
      },
      keyframes: {
        tilt: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      boxShadow: {
        glow: "0 0 1px #ff00de, 0 0 20px #ff00de, 0 0 3px #ff00de, 0 0 4px #ff00de, 0 0 5px #ff00de, 0 0 6px #ff00de, 0 0 7px #ff00de",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
