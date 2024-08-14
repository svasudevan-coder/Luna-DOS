/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.75rem',
        '7xl': '10em',
      },

      colors: {
        buttonPurple : '#cf69ff',
        buttonPurple2: '#aa56d1',
        textPurple: '#6c2985',
        bgPurple: '#f4ebfa',
        boxPurple: '#e9ccfc',
      }

    },
  },
  plugins: [],
}

