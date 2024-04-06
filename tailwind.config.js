/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        screens: {
        lg1: "1168px",
        xl1: "1500px",
    }, 
    },
  },
  plugins: [],
}

