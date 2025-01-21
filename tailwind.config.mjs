/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "auto-slide": "auto-slide-left 25s linear infinite",
      },
      keyframes: {
        "auto-slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        transform:'transform',
      },
      transitionDuration: {
        'menu': '5s', // Equivalent to 2s
      },
      transitionTimingFunction: {
        'ease-in-linear': 'cubic-bezier(0.4, 0, 1, 1)', // Custom easing
      },
  
    },
  },
  plugins: [require("tailwindcss-animate")],
};
