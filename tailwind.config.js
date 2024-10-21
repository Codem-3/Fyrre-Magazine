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
        secondaryColor: "#000000", // Light mode secondary color
        darkPrimaryColor: "#181818", // Dark mode primary color
        darkSecondaryColor: "#FFFFFF", // Dark mode secondary color
      },
      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
    },
  },
  darkMode: 'class', // Enable dark mode support with the class strategy
  plugins: [],
}
