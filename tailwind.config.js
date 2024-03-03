/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      '4xl': ['1.063rem', { // 17px
        lineHeight: '1.62rem',
        fontWeight: '600',
      }],
      '5xl': ['1.188rem', { // 19px
        lineHeight: '1.813rem',
        fontWeight: '600',
      }],
      
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': '#7070FF',
        'primaryLight': '#9A9AFF',
        'body': '#5E5E6F',
        'secondary': '#7F7F7F',
        'button': '#424242',
        'light': '#F3F5F8',
        'grayLignt': '#C7C7C8',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")]
};
