module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'customblack': '#252525',
        'custombrown': '#23120b',
        'customyellow': '#fdb827',
        'customblue': '#291cd9',
        'customred': '#ff0000',
        'customdarkred': '#af0404',
        'customgray': '#414141',
        'customwhite': '#f1f1f1'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        slideIn1: 'slideIn 1s ease-in-out forwards 0.1s',
        slideIn2: 'slideIn 1s ease-in-out forwards 0.25s',
        slideIn3: 'slideIn 1s ease-in-out forwards 0.4s',
        slideIn4: 'slideIn 1s ease-in-out forwards 0.55s',
        slideIn5: 'slideIn 1s ease-in-out forwards 0.7s',
        slideIn6: 'slideIn 1s ease-in-out forwards 1s',
        slideIn7: 'slideIn 1s ease-in-out forwards 2s',
        slideIn8: 'slideIn 1s ease-in-out forwards 3s'
      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
