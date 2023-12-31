/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '124': '524px',
        '126': '584px',
        '128': '624px',
      },
      rotate: {
        '145': '145deg',
        '230': '230deg',
      }
    },
    clipPath: {
      mypolygon: "polygon(48% 1%, 68% 2%, 88% 4%, 100% 6%, 100% 100%, 50% 100%, 0 100%, 0 11%, 15% 6%, 28% 3%);",
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      'full': '9999px',
      'large': '54px',
    },

  },

  plugins: [
    require('tailwind-clip-path'),
  ],

}


