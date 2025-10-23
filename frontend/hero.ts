import { heroui } from "@heroui/react";

export default heroui({
  defaultTheme: "light",
  layout: {
    radius: {
      small: "5px",
      large: "20px",
    },
  },
  themes: {
    dark: {
      colors: {
        primary: "#4465DB",
      },
    },
    light: {
      colors: {
        primary: "#4465DB",
        background: "#ffffff",
        foreground: "#000000",
        content1: "#ffffff",
        content2: "#f4f4f5",
        content3: "#e4e4e7",
        content4: "#d4d4d8",
        default: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
      },
    },
  },
});
