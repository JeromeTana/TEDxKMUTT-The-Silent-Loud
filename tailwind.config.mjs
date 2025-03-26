/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#EB0028",
          600: "#C8001D",
        },
        purple: "#CE37A4",
        green: "#23A667",
        yellow: "#FDC232",
        orange: "#EF4D22",
        foreground: "#fff8f0",
        background: "#f5e8da",
        darkGray: "#666666",
        lightGray: "#A4A4A4",
        blue: "#2350A0",
        pink: "#ED8FAD",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
