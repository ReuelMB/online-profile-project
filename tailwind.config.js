/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false, // Disable the default aspect ratio utilities
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Enable the aspect ratio plugin
    // ...
  ],
}
