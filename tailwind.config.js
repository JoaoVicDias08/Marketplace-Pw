/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        titulo: ["Oswald", "sans-serif"],
        texto: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
