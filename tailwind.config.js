/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Couleurs principales
        accent: {
          50: "#f0f4f6",
          100: "#e1e9ed",
          200: "#c3d3db",
          300: "#a5bdc9",
          400: "#87a7b7",
          500: "#5D7B8A", // Couleur d'accent principale
          600: "#4a6270",
          700: "#384a56",
          800: "#25313c",
          900: "#131922",
          DEFAULT: "#5D7B8A",
        },
        // Couleurs secondaires
        yellow: {
          50: "#fff9e6",
          100: "#fff3cc",
          200: "#FFE799", // Couleur yellow secondaire
          300: "#ffdb66",
          400: "#ffcf33",
          500: "#ffc300",
          600: "#cc9c00",
          700: "#997500",
          800: "#664e00",
          900: "#332700",
          DEFAULT: "#FFE799",
        },
        // Couleurs de texte
        text: {
          primary: "#2c2c18", // Texte principal
          secondary: "#484828", // Texte secondaire
          muted: "#808068", // Texte atténué
        },
        // Couleurs de fond
        background: {
          primary: "#fafaf8", // Fond principal
          secondary: "#f5f5f0", // Fond secondaire
          tertiary: "#eaeae0", // Fond tertiaire
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
