/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#800000',
        accent: '#D4AF37',
        'background-light': '#f8f6f6',
        'background-dark': '#221610',
      },
      fontFamily: {
        display: ['Helvetica', 'Arial', 'sans-serif'],
        'serif-hero': ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
