module.exports = {
    content: ["*.html", "./src/**/*.{html,js}"],
    prefix: "tw-",
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
    ],
};