/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "banner": "url(src/assets/images/banner.jpg)",
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
    colors: {
      "primary": "#7E90FE",
      "secondary": "#9873FF",
      "white": "#FFFFFF",
      "accent": "#aff799",
      "trans": "#00000000",
      "dark": "#131820",
      "gray": "#808080",
    },
  },
  plugins: [],
}
