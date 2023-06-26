/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        
        bebasNeue: ["var(--font-bebasneue)"],
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
        ssp: ["var(--font-ssp)"],
      },
      colors: {
        "light-grey": "#F2F3F7",
        "primary-red": "#D00D00",
        "black-main": "#2D3038",
        grey: "#9D9D9D",
        "blue-secondary": "#2846AF",
        "grey-bg": "#DDDDDD",
        "green-main": "#137403",
        "yellow-main": "#EFE616",
      },
    },
  },
  plugins: [],
}
