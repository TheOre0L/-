/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
    theme: {
        extend: {},
        fontFamily: {
            mont: ['montserrat'],
        },
        colors: {
            'tifany': '#81D8D0',
        },
    },
    plugins: [flowbite.plugin()],
};
