import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple-heart": {
          "50": "#fbf3ff",
          "100": "#f5e4ff",
          "200": "#edcfff",
          "300": "#dfa9ff",
          "400": "#cc72ff",
          "500": "#ba3cff",
          "600": "#a817ff",
          "700": "#9408e8",
          "800": "#780cb6",
          "900": "#660c97",
          "950": "#470072",
        },
      },
    },
  },
  plugins: [],
};
export default config;
