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
        layedover: {
          navy: '#171527', 
          teal: '#10A5B5', 
          green: '#5C8A3F', 
        },
      },
    },
  },
  plugins: [],
};
export default config;