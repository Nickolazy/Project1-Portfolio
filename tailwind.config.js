/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#27272A",
        'lavender': "#7E3AF2",
        'grayDark' : "#696969",
        'grayLight' : "#E5E7EB",
        'white' : "#FCFBFA"
      }
    },
    fontSize: {
      h1: '60px',
      h2: '32px',
      h3: '24px',
      
      subtitle: '20px',
      subtitle2: '16px',
      
      bodyText: '20px',
      bodyText2: '16px',

      subMobile: '20px',
      subMobile2: '14px',
      bodyMobile: '14px'
    }
  },
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif'],
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.h1': {
          fontSize: theme('fontSize.h1'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h2': {
          fontSize: theme('fontSize.h2'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.h3': {
          fontSize: theme('fontSize.h3'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subtitle': {
          fontSize: theme('fontSize.subtitle'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subtitle2': {
          fontSize: theme('fontSize.subtitle2'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.bodyText': {
          fontSize: theme('fontSize.bodyText'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.bodyText2': {
          fontSize: theme('fontSize.bodyText2'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subMobile': {
          fontSize: theme('fontSize.subMobile'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.subMobile2': {
          fontSize: theme('fontSize.subMobile2'),
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.montserrat'),
        },
        '.bodyMobile': {
          fontSize: theme('fontSize.bodyMobile'),
          fontWeight: theme('fontWeight.regular'),
          fontFamily: theme('fontFamily.montserrat'),
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

