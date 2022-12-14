/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        naranja: "#EC994B",
        grisClaro: "#F1EEE9",
        grisOscuro: "#73777B",
        azul: "#15133C",
      },

      fontFamily: {
        kodchasan: "kodchasan",
      },

      backdropFilter: {
        none: "none",
        blur: "blur(0px)",
      },

      keyframes: {
        escalar: {
          "0% , 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.97)" },
        },
        burbuja: {
          "0%, 100%": {
            borderRadius: "38% 80% 36% 74% / 54% 40% 77% 58%",
            transform: "translateY(0)",
          },
          "50%": {
            borderRadius: "80% 30% 80% 35% / 34% 40% 65% 89%",
            transform: "translateY(5%)",
          },
        },
      },

      animation: {
        animacionEscalar: "escalar 2.5s ease-in infinite",
        burbuja: "burbuja 8s ease-in-out infinite",
      },

      plugins: [require("tailwindcss-filters"), require("flowbite/plugin")],
    },
  },
};
