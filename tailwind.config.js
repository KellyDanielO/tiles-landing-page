/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        action: ['"Aclonica"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        foreground: "#000",
        main: '#fff',
        primary: '#150c3f'
      },
      backgroundImage: {
        'hero-background': "url('src/assets/images/tiles-6.jpg')",
      },
    },
  },
  plugins: [],
}