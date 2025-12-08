/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using standard tailwind colors in the code for reliability, 
        // but defining these just in case we need custom shades later.
        terminal: {
          black: "#0A0C10",
          panel: "#161B22",
          amber: "#FF9900",
          green: "#00FF41",
          red: "#FF3333",
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Consolas"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        // The new scrolling animation for the ticker
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Keyframes for moving elements left forever
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}