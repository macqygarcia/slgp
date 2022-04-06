module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height'
      },
      zIndex: {
        '-10': '-10'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
