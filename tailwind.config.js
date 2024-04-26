/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#1fb6ff",
      "primary-opacity": "rgba(31, 182, 255, 0.8)",
      "secondary": "#7e5bef",
      "black": "#000000",
      "white": "#ffffff",
    },
    extend: {
      spacing: {
        "vh-1": "1vh",
        "vh-3": "3vh",
        "vh-5": "5vh",
        "vh-10": "10vh",
        "vh-30": "30vh",
        "vh-50": "50vh",
        "vw-1": "1vw",
        "vw-3": "3vw",
        "vw-5": "5vw",
      }
    },
  },
  plugins: [],
}
