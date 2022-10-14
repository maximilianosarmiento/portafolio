/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],

  darkMode:'class',
  
  theme: {
    extend: {
      colors: {
        naranja: '#EC994B',
          grisClaro: '#F1EEE9',
          grisOscuro: '#73777B',
          azul: '#15133C'
      },

      fontFamily:{
        kodchasan: 'kodchasan',
      },
    

        backdropFilter: {
          'none': 'none',
          'blur': 'blur(0px)',
        },
        

      plugins: [
        require('tailwindcss-filters'),
        require('flowbite/plugin'),
      ],
    }
  },
  darkMode:'class',

}

