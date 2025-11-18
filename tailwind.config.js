/********************
 * Tailwind v3/v4 compatible config
 ********************/
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/hooks/**/*.{ts,tsx,js,jsx}",
    "./src/styles/**/*.css",
    "./src/index.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
