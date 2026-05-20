/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        dark: {
          950: '#030014',
          900: '#060613',
          800: '#0d0d21',
          700: '#141432',
          600: '#1d1d42',
        },
        brand: {
          600: '#6d28d9',
          500: '#7c3aed',
          400: '#8b5cf6',
          300: '#a78bfa',
        },
        neon: {
          violet: '#8b5cf6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
        'nebula-gradient': 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), rgba(6, 182, 212, 0.1) 40%, rgba(3, 0, 20, 0) 70%)',
      }
    },
  },
  plugins: [],
}
