/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Point to files containing Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Customize colors
        secondary: "#4B5563",
      },
      spacing: {
        '18': '4.5rem', // Additional spacing
      },
    },
  },
  plugins: [],
}
