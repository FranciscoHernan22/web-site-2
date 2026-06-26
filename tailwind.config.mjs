/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {

        animation: {
        ceo: "pulseCEO 3s infinite"
      },

      keyframes: {
        pulseCEO: {
          "0%": {
            boxShadow: "0 0 0px rgba(59,130,246,0.6)"
          },
          "50%": {
            boxShadow: "0 0 25px rgba(59,130,246,0.9)"
          },
          "100%": {
            boxShadow: "0 0 0px rgba(59,130,246,0.6)"
          }
           }
        },

      colors: {
        vixion: {
          dark: "#101425",
          primary: "#21375b",
          soft: "#97accb",
          light: "#cbd6ea",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};