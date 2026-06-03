import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e8ff",
          500: "#3b6cf6",
          600: "#2b54d4",
          700: "#1f3fa6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
