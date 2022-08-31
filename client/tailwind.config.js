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
        'redApp': '#FF003F',
        'mikeWhite': '#fefefe',
        'mikeBlack': '#2b2b2b'
      },
      backgroundImage: {
        'soccerPlayers': "url('../src/media/Soccer_Players.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
}
