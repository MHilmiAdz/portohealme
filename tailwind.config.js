/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maincolor: '#111827',
        secondarycolor: '#ffffff',
        tertiarycolor: '#1f2937',
        backgroundcolor: '#030712'
      },
    },
  },
  plugins: [],
}

