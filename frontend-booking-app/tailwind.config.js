/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': "#A90606",
        'red-bgt': '#E30505',
        'gradasi-dark-red-1': "#862A2C",
        'gradasi-light-red-1': "#C83E40",
        'gray-fault': '#828282',
        'gray-kelaut': '#999999',
        'admin-white': '#F7FAFD',
        'ungu': '#BA1DE1',
        'biru': '#2A88EE',
        'orange': '#F3650B',
        'hijau': '#20D052',
        'kuning': '#F3C10B',
        'hijau-semi-dark': '#29A419'
      }
    },
  },
  plugins: [],
}