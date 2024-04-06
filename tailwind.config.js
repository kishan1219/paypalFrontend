/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'paypal-open': ['PayPalOpen', 'sans-serif'],
    },},
  },
  plugins: [],
}

