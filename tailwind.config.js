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
        backgroundcolor: '#030712',
        // 'Emerald Night' Balanced Palette
        'jade-dark': '#020617',    // Midnight Navy Base
        'jade-deep': '#0f172a',    // Deep Slate/Navy Surface
        'jade-primary': '#10b981', // Vibrant Jade Accent
        'jade-secondary': '#f59e0b', // Amber highlight for balance
        'jade-light': '#94a3b8',   // Muted Slate Text
        'jade-pale': '#f8fafc',    // Off-white Text
      },
      keyframes: {
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'bounce-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)', // Overshoot
          },
          '70%': {
            transform: 'scale(0.9)',  // Settle back
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',    // Final state
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        }
      },
      // 2. Define the animation utilities
      animation: {
        'blob': 'blob 7s infinite',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        // You can add more variations if needed
        'bounce-in-slow': 'bounce-in 1s ease-out',
        'fade-in-up-fast': 'fade-in-up 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

