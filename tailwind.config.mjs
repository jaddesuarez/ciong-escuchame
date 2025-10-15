/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Brand colors from design
        yellow: {
          DEFAULT: "#FDDA59",
        },
        pink: {
          DEFAULT: "#E6007E",
        },
        blue: {
          DEFAULT: "#007BC4",
        },
        gray: {
          light: "#F8F8F8",
        },
        // Legacy aliases for compatibility
        primary: {
          DEFAULT: "#FDDA59",
        },
        secondary: {
          DEFAULT: "#E6007E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
}
