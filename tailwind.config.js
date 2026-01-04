/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      // Extend the default theme with custom additions
      colors: {
        'custom-blue': '#007bff',
      },
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    // Add any plugins here
    require('@tailwindcss/forms'),
  ],
}
