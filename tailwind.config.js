/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./server/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    extend: {
      colors: {
        dark: "#202020",
        light: "#fff",
        primary: "#00b0b9",
        secondary: "#DA1884",
        neutral: "#898989",
        gold: "#CCB673",
      },
      width: {
        xs: 320,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    }
  },
  plugins: [],
}