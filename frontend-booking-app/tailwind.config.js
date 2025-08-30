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
      },
      animation: {
        glitch: 'glitch 1.5s linear infinite',
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px, 0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px, 0) skew(0deg)' },
          '62%': { transform: 'translate(0, 0) skew(5deg)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
      },
    },
  }, // <-- KOMA SUDAH DITAMBAHKAN DI SINI
  plugins: [],
}