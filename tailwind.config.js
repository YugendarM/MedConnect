/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        medBlue: "#4DA8F6",
        medConnect : {
          medBlue: '#4DA8F6',
          bgLightGreen: '#e5f3f3',
          bgLightBlue: '#edf4ff',
          bgLightYellow: '#fceec0',
          bgTransparent: '#f8f8f8',
          bgdarkGray: '#1a1a1a',
          classicBg: '#EBEBEB',
          fontGray: '#696969',
          lightGrayBg: '#f8f8f8',
          900: '#0d0d0d',
      }
      },
      borderRadius:{
        extra: "50px"
      },
      boxShadow: {
        custom: '0 50px 25px -24px rgb(0 0 0 / 0.3)'
      }
    },
  },
  plugins: [],
}

