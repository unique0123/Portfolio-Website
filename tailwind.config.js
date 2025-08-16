/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // adjust paths to where your components/pages live
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.pink,
        secondary: colors.blue,
        // add your custom colors here
      },
    },
  },
  plugins: [],
}