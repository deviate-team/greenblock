/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#064420',
        'secondary-color': '#E4EFE7',
        'primary-hover-color': '#FAF1E6',
        'secondary-hover-color': '#FDFAF6',
    },
    fontFamily: {
      'IBM' : ['IBM Plex Sans', 'sans-serif'],
      'BAI' : ['Bai Jamjuree', 'sans-serif']
    }
    },
  },
  plugins: [],
}

