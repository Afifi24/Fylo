/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'hsl(217,28%, 15%)',
        darkBlue1:'hsl(218,28%, 13%)',
        darkBlue2:'hsl(216,53%, 9%)',
        darkBlue3:'hsl(216,30%, 18%)',
        accentCyan:'hsl(176,68%, 64%)',
        accentBlue:'hsl(198,60%, 50%)',
        lightRed:'hsl(0,100%, 63%)',
      },
      fontFamily:{
        sans: ['Raleway','sans-serif'],
        opensans: ['Open Sans','sans-serif']
      },
      backgroundImage: ()=>({
       'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
       'logo-light-mode': "url('../images/logo-light-mode.svg')",
       'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
       'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')"
      })
    },
  },
  variants:{
    extend:{
      backgroundImage:['dark']
    }
  },
  plugins: [],
}

