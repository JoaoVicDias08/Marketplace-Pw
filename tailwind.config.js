/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // pega todos os arquivos JS/TS/JSX/TSX dentro de src
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
