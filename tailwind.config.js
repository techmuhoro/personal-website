/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: '#E9FD00',
            dark: '#080F1A',
         },
         fontFamily: {
            inter: "'Inter', sans-serif",
         },
         backgroundImage: {
            'plus-pattern': "url('/pattern.png')",
         },
      },
   },
   plugins: [],
};
