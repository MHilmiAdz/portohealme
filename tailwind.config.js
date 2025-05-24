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
      keyframes: {
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

