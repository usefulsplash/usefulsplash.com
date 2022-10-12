/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E2C25",
        secondary: "#BFC89E",
        accent: "#4A5650",
      },
    },
  },
  plugins: [],
};
