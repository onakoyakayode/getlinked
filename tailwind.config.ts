import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#150e28",
        pryColor: "#ffffff",
        secColor: "#903aff",
        terColor: "#d434fe",
      },
      fontFamily: {
        unicalOne: ["Unica One", "cursive"],
        clashDisplay: ["Clash Display", " sans-serif"],
      },
      mixBlendMode: {
        multiply: "multiply",
        screen: "screen",
        overlay: "overlay",
        darken: "darken",
        lighten: "lighten",
      },
    },
  },
  plugins: [],
};
export default config;
