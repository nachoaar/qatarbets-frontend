/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [ 'koulen', '-apple-system', 'BlinkMacSystemFont'],
        'serif': ['Georgia', 'Cambria'],
        'mono': ['SFMono-Regular', 'Menlo'],
        'display': ['Oswald'],
        'body': ['Open Sans']
      },
      colors: {
        'rojo': '#D20A46',
        'rojosec': '#FF003F',
        'rojobg': '#CB0032',
        'morado': '#550065',
        'moradobg': '#550065',
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
