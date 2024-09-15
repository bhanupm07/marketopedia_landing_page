/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://giphy.com/embed/Mc1yxvp8fIGuYXHJI0')",
      },
    },
  },
  plugins: [],
};
