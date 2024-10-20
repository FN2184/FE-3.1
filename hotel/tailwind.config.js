
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de que las rutas apunten a tus archivos en la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#A8DADC',
        'mint-green': '#C2E1C2',
        'neutral-gray': '#F5F5F5',
        'dark-gray': '#333333',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
