/** @type {import('tailwindcss').Config} */

// text-xs = {
//   font-size: 0.75rem;            12px
//   line-height: 1rem;             16px
// }
// text-sm = {
//   font-size: 0.875rem;           14px;
//   line-height: 1.25rem;          20px;
// }
// text-base = {
//   font-size: 1rem                16px;
//   line-height: 1.5rem            24px;
// }
// font-normal	font-weight:         400;
// text-medium =                    500;
// font-semibold	font-weight:       600;
// font-bold	font-weight:           700;
// font-extrabold	font-weight:     800;
// font-black	font-weight:         900;

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "4xl": [
        "1.063rem",
        {
          lineHeight: "1.62rem",  // 17px
          fontWeight: "600",
        },
      ],
      "5xl": [
        "1.188rem",
        {
          lineHeight: "1.813rem", // 19px
          fontWeight: "600",
        },
      ],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        success: "#1ECA63",
        primary: "#7070FF",
        primaryLight: "#9A9AFF",
        warning: "#FF6B2C",
        danger: "#EB3838",
        tagFilled: "#E8E6FF",
        body: "#5E5E6F",
        secondary: "#7F7F7F",
        button: "#424242",
        light: "#F3F5F8",
        grayLignt: "#C7C7C8",
        info: "#299DCF",
        buttonBorder: '#EAEAF1'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
