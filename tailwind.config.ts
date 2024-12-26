import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#000033",
        secondary: "#ADD8E6",
        accent: "#00BFFF",
        white: "#FFFFFF",
        background: "#FAFAF8",
        surface: "#fff",
        muted: "#C4C3BB",
        "muted-foreground": "#A3A299",
        border: "#E6E4DD",
        input: "#F0EFEA",
        foreground: "hsl(var(--foreground))",
        sky: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica Neue", "system-ui", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
        body: ["Open Sans", "Lato", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;