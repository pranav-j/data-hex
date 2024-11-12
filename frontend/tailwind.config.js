// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBorder: '#E2E4E9',
        primary: '#375DFB',
        textPrimary: '#525866',
        textSecondary: '#868C98',
        hover: '#F6F8FA'
      },
      fontSize: {
        'small': '12px',
      },
    },
  },
  plugins: [],
};
