/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens:{
      'xxs':'280px',
      'xs':'350px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      '3xl': '1700px',
      '4xl': '2000px',
      '5xl': '2560px',
      '6xl': '3440px',
    },
    extend: {
      spacing: {
        'maxdesk': '1500px',
      },
      fontFamily: {
        // josefS: ['Josefin+Sans'],
        // lato:['Lato'],
        // mtcursive: ['MtCursiva'],
        poppins: ['Poppins'],
      },
      colors:{
        primaryport:'#1A1A29',
        primaryclaroport:'#72FA93',
        secundaryport:'#7562E0',
        plomitoport:'848191',
        transparentport:'31313F'
      }
    },
  },
  plugins: [],
}

