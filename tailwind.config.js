/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FFFFFF", // Light mode primary color
        secondaryColor: "#181818", // Light mode secondary color
        borderColor: "#B17457",
      },
      screens: {
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'vsm': '460px',
        'tiny': '360px',
      },
    },
  },
  darkMode: 'class', // Enable dark mode support with the class strategy
  plugins: [],
}
