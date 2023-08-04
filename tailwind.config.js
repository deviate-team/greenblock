/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#059669',
        'secondary-color': '#020617',
        'primary-hover-color': '#0f766e',
        'secondary-hover-color': '#7dd3fc',
    },
    fontFamily: {
      'IBM' : ['IBM Plex Sans', 'sans-serif'],
      'BAI' : ['Bai Jamjuree', 'sans-serif']
    }
    },
  },
  plugins: [],
}

