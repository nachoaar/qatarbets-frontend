/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'redApp': '#FF003F',
        'mikeWhite': '#fefefe',
        'mikeBlack': '#2b2b2b'
      },
    },
  },
  plugins: [],
}
