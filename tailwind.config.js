/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dracula: {
          'background1': '#082f49',
          'background2': '#020617',
          'foreground': '#000000',
          'chips': '#353a57',
          'cards': '#353a57',
          't-white': '#ffffff',
          'white': '#ffffff',
          'red': '#ff5555',
          'yellow': '#f1fa8c',
          'green': '#50fa7b',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
          'pink': "#ff79c6",
          'cyan': "#8be9fd",
          'orange': "#ffb86c",
          'purple': "#bd93f9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
