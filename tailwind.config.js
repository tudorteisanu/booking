/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        primary: '#004225',
        'dark-green': '#004225',
        'light-green': '#007E47',
        'info': '#3595FF',
      },
      minHeight: {
        desktop: 'calc(100vh - 318px)'
      }
    },
  },
  plugins: [],
}

