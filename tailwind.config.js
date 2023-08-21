/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "dm-serif-text": ['DM Serif Text', "serif"],
        "outfit": ['Outfit', "sans-serif"],
        "poppins": ['Poppins', "sans-serif"],
        "righteous": ['Righteous', "cursive"],
        "sanchez": ['Sanchez', "serif"]
      },
      colors: {
        "orange": "#FF4C29",
        "greyish": "#334756",
        "deepGrey": "#2C394B",
        "dark": "#082032",
        "navy": "#0E2954",
        "darkBlue": "#1F6E8C",
        "blue": "#2E8A99",
        "blueGrey": "#84A7A1",
        "red": "#fa4454",
        "darkRed": "#dc3d4b",
        "green": "#042e27",
        "lightBrown": "#b78460",
        "lightPurple": "#b38c8f",
        "offWhite": "#f4f4f4"
      },
      dropShadow: {
        card: "7px 7px 0 rgb(0,0,0)",
        capsule: "3px 3px 0 rgb(0,0,0)"
      }
    },
  },
  plugins: [],
}

