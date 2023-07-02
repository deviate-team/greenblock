/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#2C3333',
        'second-color': '#2E4F4F',
        'third-color': '#0E8388',
        'hover-color': '#CBE4DE',
    },
    },
  },
  plugins: [],
}

