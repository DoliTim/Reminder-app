/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Custom primary color
        secondary: '#ec4899', // Custom secondary color
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounce: 'bounce 1s infinite', // Example of another animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}