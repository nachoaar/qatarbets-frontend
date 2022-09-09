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
        'fifa': ['Aclonica', 'sans-serif'],
        'titulodash': ['Roboto', 'sans-serif']
      },
      colors: {
        'rojo': '#D20A46',
        'rojosec': '#FF003F',
        'morado': '#550065',
        'moradosec': '#6D0082',
        'moradopie': '#1C0021',
        'blanco': '#FFFF',
        'amarillo': '#FFBF00',
        'grisfooter': '#7A7A7A',
        'gris': '#E4E4E4',
        'gristexto': '#8B8BA7',
        'textotable': '#5C5C5C'
      },
      backgroundImage: {
        'soccerPlayers': "url('../src/media/Soccer_Players.png')",
        'canchita': "url('../src/media/cancha.jpg')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
