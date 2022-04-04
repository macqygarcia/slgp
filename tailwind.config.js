module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
