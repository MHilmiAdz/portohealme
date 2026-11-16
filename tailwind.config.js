/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        'jade-dark': '#07090d',     // Obsidian Slate Canvas
        'jade-deep': '#0d1117',     // Elevated Card Surface
        'jade-surface': '#131a22',  // Interactive / Secondary Surface
        'jade-primary': '#10b981',  // Vibrant Jade Accent
        'jade-mint': '#34d399',     // Crisp Emerald Highlight
        'jade-secondary': '#f59e0b', // Warm Amber Distinction
        'jade-light': '#94a3b8',    // Accessible Muted Ink (>6:1 on obsidian)
        'jade-pale': '#f1f5f9',     // Crisp Primary Ink
      },
    },
  },
  plugins: [],
}
