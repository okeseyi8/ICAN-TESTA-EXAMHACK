
import type { Config } from "tailwindcss";


const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
    
      fontFamily: {
        geist: ["Geist"],
        orb: ["Orbitron"],
      },
    },
  },
  plugins: [],
};

export default config;
