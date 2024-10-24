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
        fadeIn: '