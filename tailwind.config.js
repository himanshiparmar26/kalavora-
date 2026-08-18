/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigoBloom: '#6B21AB',
        cottonBloom: '#FC5BDA',
      },
      boxShadow: {
        'neon-indigo': '0 0 20px rgba(107, 33, 171, 0.6)',
        'neon-pink': '0 0 20px rgba(252, 91, 218, 0.6)',
      }
    },
  },
  plugins: [],
}