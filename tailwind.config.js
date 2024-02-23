
import tailwindcss_animated from 'tailwindcss-animated'
import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [
    daisyui,
    tailwindcss_animated
  ],
  daisyui: {
    themes: ["dark"],
  }
}

