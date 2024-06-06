/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
    ],
    theme: {
        fontFamily: {
            sans: ["Quicksand", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "var(--primary-color)",
            },
        },
    },
    plugins: [],
};
