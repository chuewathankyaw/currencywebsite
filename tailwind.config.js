/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      extend: {
        display: ["group-focus"],
      },
    },
    screens: {
      xs: "320px",
      ss: "720px",
      sm: "870px",
      md: "1060px",
      lg: "1200px",
      xl: "1420px",
    },
  },
};

