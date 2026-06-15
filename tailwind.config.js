/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#58CC02',
        'primary-dark': '#46a302',
        blue: {
          app: '#1CB0F6',
        },
        red: {
          app: '#FF4B4B',
        },
        yellow: {
          app: '#FFC800',
        },
      },
    },
  },
  plugins: [],
}
