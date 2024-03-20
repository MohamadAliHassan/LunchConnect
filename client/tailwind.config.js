/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.jsx",
    "./src/pages/**/**/*.jsx",
    "./src/components/*.jsx",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

