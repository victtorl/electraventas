/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./node_modules/flowbite/**/*.{js,ts}",
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
      'prevsm':'420px',
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
      fontSize: {
        18: [
          "18px",
          {
            lineHeight: "27px",
            letterSpacing: "-0.03em",
          },
        ],
        20: [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.03em",
          },
        ],
        22: [
          "22px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.03em",
          },
        ],
        24: [
          "24px",
          {
            lineHeight: "35px",
            letterSpacing: "-0.03em",
          },
        ],
        34: [
          "34px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.03em",
          },
        ],
        48: [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.03em",
          },
        ],
        65: [
          "65px",
          {
            lineHeight: "70px",
            letterSpacing: "-0.03em",
          },
        ],
        75: [
          "75px",
          {
            lineHeight: "85px",
            letterSpacing: "-0.03em",
          },
        ],
        pone: ["16px", "30px"],
        ptwo: ["16px", "26px"],
      },
      fontFamily: {
        josefS: ['Josefin+Sans'],
        playw:['Playwrite+CO+Guides'],
        lato:['Lato'],
        mtcursive: ['MtCursiva'],
        inter:['Inter'],
        poppins: ['Poppins'],
        manrope: ['Manrope'],
      },
      colors:{
        elecktraamarillo:"#ffcc03",
        elecktranegro:"#000000",
        elektraplomo:"#9d9d9c",
        primaryport:'#1A1A29',
        primaryclaroport:'#72FA93',
        secundaryport:'#7562E0',
        plomitoport:'848191',
        transparentport:'31313F',
        limaverdeoscuro:"#002E3B",
        limagris:"#DBD4DC",
        limalila:"#5A2881",
        limaamarillo:"#E5BC48",
        limalilafuerte:"#3C1D63",
        primarylima:'#4b188e',
        secundarylima:'#002e3b',
        terciarylima:'#f6c238',
        purple: "#794AFF",
        "main-black": "#101828",
        "main-gray": "#F3F4F9",
        "blue-seo": "#5D51F2",
        "black-seo": "#27272F",
        "gray-seo": "#F4F3FE",
        "ai-soft": "#0A0118",
        "buisness-red": "#D90A2C",
        "buisness-light-black": "#111013",
        "buisness-gray": "#F9F8FA",
        "buisness-dark-black": "#161519",
        green: "#161519",
        orange: "#F2844D",
        "green-dark": "#15362C",
        "it-blue": "#5F57FF",
        // "it-blue":"#5A2881",
        "it-gray": "#F6F6F6",
        "it-black": "#150D21",
        "blue-sass": "#007AFF",
        "app-main": "#C6FE1E",
        "app-dark": "#10100E",
        "app-gray": "#F5F5F5",
        paragraph: "#6D6D6D",
        "paragraph-2": "#C5BAD3",
        "gray-69": "#696969",
        "caribbean-green": "#00DF8E",
        "dark-silver": "#707070",
        "auro-metal-saurus": "#6E7485",
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
  plugins: [
    require('flowbite/plugin')
  ],
}

