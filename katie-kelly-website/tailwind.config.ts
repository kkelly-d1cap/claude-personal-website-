import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1C1C',
        'light-gray': '#F5F5F5',
        'medium-gray': '#6B6B6B',
        orange: '#FF9F40',
        lime: '#C5F542',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Avenir Next', 'Gotham', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
