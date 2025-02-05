/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        josefinSans: ["JosefinSans"],
      },
      colors: {
        background: {
          main: "#1E1E1E",
        },
        text: {
          primary: "#E2E2E2",
          secondary: "#B2BEC3",
        },
        accent: {
          primary: "#6C5CE7",
          secondary: "#A3A1FF",
        },
        button: {
          background: "#d0e6f3",
          hover: "#9F9FFF",
          text: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
