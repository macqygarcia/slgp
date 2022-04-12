module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        backgroundColor: 'backgroundColor'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
