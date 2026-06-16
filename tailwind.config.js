export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        panel: '0 0 50px -12px rgba(0, 0, 0, 0.5)',
      },
      letterSpacing: {
        widest: '.25em',
        tighter: '-.05em',
      },
    },
  },
}