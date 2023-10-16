/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-purple": "#8062D6",
        "neon-pink": "#E384FF",
        "dark-purple": "#FFFFDD",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
