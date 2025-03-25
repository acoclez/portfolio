// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// src/assets/css/main.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Vos styles personnalisés ci-dessous */
body {
  background-color: #111827; /* bg-gray-900 */
  color: white;
}