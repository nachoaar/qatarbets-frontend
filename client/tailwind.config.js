/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'parrafo': ['Marvel', 'sans-serif'],
        'titulo': ['Koulen', 'cursive'],
        'fifa': ['Aclonica', 'sans-serif']
      },
      colors: {
        'rojo': '#D20A46',
        'rojosec': '#FF003F',
        'morado': '#550065',
        'moradosec': '#6D0082',
        'blanco': '#FFFF',
        'amarillo': '#FFBF00'
      },
      backgroundImage: {
        'soccerPlayers': "url('../src/media/Soccer_Players.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
