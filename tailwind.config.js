/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'adamina':['Adamina', 'serif']
      },
      colors: {
        'seal-green': '#A9CEC2',
      },
    },
  },
  plugins: [],
}