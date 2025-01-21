module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables dark mode
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#a855f7",
          pink: "#14b8a6",
          blue: "#0369a1",
        },
      },
      backgroundImage: {
        "mesh-gradient": "url('/mesh.jpg')",
      },
    },
  },
  plugins: [],
};
