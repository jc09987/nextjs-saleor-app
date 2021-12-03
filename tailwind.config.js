module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
