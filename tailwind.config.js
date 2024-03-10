/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#daf8ff",
        bgSecondary: "#088395",
        bgSecondaryDark: "#055965",
        primaryText: "#4A4A4A",
        accentText: "#D75F1C",
      },
    },
  },
  plugins: [],
};
