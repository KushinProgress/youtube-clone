/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        yt: {
          bg: '#0f0f0f',
          surface: '#121212',
          navbar: '#0f0f0f',
          card: '#181818',
          hover: '#272727',
          active: '#3f3f3f',
          border: '#272727',
          borderLight: '#303030',
          red: '#ff0000',
          redHover: '#cc0000',
          text: '#f1f1f1',
          textMuted: '#aaaaaa',
          textSubtle: '#717171',
          chip: '#272727',
          chipHover: '#383838',
          chipActiveBg: '#f1f1f1',
          chipActiveText: '#0f0f0f',
          blue: '#3ea6ff',
          badge: 'rgba(0, 0, 0, 0.8)'
        }
      },
      fontFamily: {
        roboto: ['"Roboto"', '"YouTube Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      }
    },
  },
  plugins: [],
}

