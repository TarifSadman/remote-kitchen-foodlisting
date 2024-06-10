import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      jules: "var(--font-julesbiglight), sans-serif",
      sebastian: "var(--font-sebastianBobby), sans-serif",
    },
    extend: {
      colors: {
        primary: "#dbbba0",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1110px',
      // => @media (min-width: 1110px) { ... }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
export default config;
