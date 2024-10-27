/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src directory
      './public/index.html', // Include the main HTML file
    ],
    theme: {
      extend: {
        // Custom theme configurations can go here
        colors: {
          primary: '#1D4ED8', // Example primary color
          secondary: '#FBBF24', // Example secondary color
        },
        fontFamily: {
          sans: ['Helvetica', 'Arial', 'sans-serif'], // Example font family
        },
      },
    },
    plugins: [],
  }
  
