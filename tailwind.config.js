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
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
