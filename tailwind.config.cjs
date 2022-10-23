/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bkg: "#171819",
        muted: "#c9cbcf",
        accent: "#007DB8",
        brand: "#0460D9",
        brandDark: "#021F59",
        brandLight: "#0468BF",
        brandMiddle: "#66C4D9",
        brandBrown: "#BF8069",
      },
    },
  },
  plugins: [],
};
