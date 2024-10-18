/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
        inria: ['Inria Sans', 'sans-serif'],
        jacques: ['Jacques Francois', 'serif'],
      },},
  },
  plugins: [],
}
