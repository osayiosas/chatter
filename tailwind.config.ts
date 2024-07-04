import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "sans-serif",
        " ui-sans-serif",
        " monospace",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "system-ui",
        "segoe ui Emoji",
        "segoe ui Symbol",
        "Apple Color Emoji",
        "Noto Color Emoji",
      ],
      serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
      mediumSerifItalic: ["charterItalic", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      mediumSerif: ["charter", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;



