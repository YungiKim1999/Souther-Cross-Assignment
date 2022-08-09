/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'sc-blue': '#0f6ea5',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
