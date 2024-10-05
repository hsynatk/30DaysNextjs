import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{

      },
      colors: {
        myPrimary:"#B8001F",
        mySecond:"#26355D",
      },
    },
  },
  plugins: [],
};
export default config;
