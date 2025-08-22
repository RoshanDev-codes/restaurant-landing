/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-var": "var(--color-black)",
        "grey-var": "var(--color-grey)",
        "golden-var": "var(--color-golden)",
        "white-var": "var(--color-white)",
      },
      fontFamily: {
        base: "var(--font-base)",
      },
    },
  },
  plugins: [],
};
