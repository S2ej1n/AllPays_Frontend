/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Vite 가 사용하는 Html
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        rank499: "499px",
        rank886: "886px",
        rank1205: "1205px",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}

