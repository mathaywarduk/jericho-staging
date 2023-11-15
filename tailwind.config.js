const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
    './*.md',
  ],
  theme: {
    fontSize: {
      sm: "1rem", // 16px
      base: "1.125rem", // 18px
      md: "1.375rem", // 22px
      lg: "1.6875rem", // 27px
      xl: "2rem", // 32px
      "2xl": "3.125rem", // 50px
      "3xl": "3.75rem", // 60px
      "4xl": "5rem", // 80px
      "5xl": "6rem", // 96px
    },
    screens: {
      sm: "375px",
      awks: "484px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    extend: {
      fontFamily: {
        sans: ["open-sans", ...defaultTheme.fontFamily.sans],
        headings: ["sole-serif-titling-variable", ...defaultTheme.fontFamily.serif],
        type: ["sole-serif-small-variable", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        48: "12rem",
        75: "18.75rem",
        "half-container": "80rem", 
        "container": "160rem", 
        "75vw": "75vw",
        "1/2": "50%",
        "7/12": "58.3333%",
        "2/3": "66.6666667%",
      },
      maxHeight: {
        "75vh": "75vh",
      },
      height: {
        "screen-plus": "110vh",
      },
      inset: {
        "1/20": "5%",
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}