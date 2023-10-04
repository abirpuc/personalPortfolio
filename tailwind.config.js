// /** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors:{
        backgroundColor:'#f0f2f5',
        primaryColor:'#059669',
        secondaryColor:'#0d9488',
        textColor:'#6b7280',
        darkBackgroundColor:'#0f172a',
        darkPrimaryColor:'#036ffc',
        darkSecondaryColor:'#c4b5fd',
        darkTextColor:'#d4d4d4',
        focusBorderColor:'#3730a3'
      },
      backgroundImage:{
        patter:'url(./assets/pattern.svg)',
        darkPattern:'url(./assets/pattern-dark.svg)'
      }
    },
  },
  plugins: [],
}

