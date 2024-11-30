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
        manrope: ['Manrope'],
      },
      colors:{
        primaryport:'#1A1A29',
        primaryclaroport:'#72FA93',
        secundaryport:'#7562E0',
        plomitoport:'848191',
        transparentport:'31313F'
      },
      boxShadow: {
        common: "0px 10px 60px 0px rgba(121, 74, 255, 0.2)",
        small: "0px 10px 20px -8px rgba(121, 74, 255, 0.3)",
        "business-red": "0px 10px 60px 0px #D90A2C80",
        "business-red-sm": "0px 16px 32px 0px #D90A2C4D",
        card: "0px 10px 60px 0px rgba(22, 21, 25, 0.1)",
        "blue-card": "0px 10px 60px 0px #5F57FF80",
        "card-sm": "0px 16px 32px 0px #1615191A",
        "card-xm": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        purple: "0px 10px 60px 0px #794AFF4D",
        orange: "0px 10px 60px 0px #f2844d80",
        "it-blue-sh": "0px 10px 60px 0px rgba(95, 87, 255, 0.1)",
        "it-blue-bg": "0px 10px 60px 0px rgba(95, 87, 255, 0.5)",
        "blue-sass-sh": "0px 10px 60px 0px #007AFF33",
        "cari-green": "0px 10px 60px 0px #00DF8E26",
      },
    },
  },
  plugins: [],
}

