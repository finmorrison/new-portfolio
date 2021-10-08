module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'primary': '#003049',
      'secondary' : '#F77F00',
      'tertiary' : '#FCBF49'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
