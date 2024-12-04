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
            },
        },
    },
    plugins: [],
};
