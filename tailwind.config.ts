import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#9814DC",
          magenta: "#C71FE2",
          lavender: "#E2A9F0",
          deep: "#24052F",
          night: "#110A13",
        },
        editorial: {
          bg: "#F7F5F8",
          paper: "#FFFFFF",
          ink: "#110A13",
          muted: "#6A6372",
          faint: "#E6E2E8",
          border: "rgba(152, 20, 220, 0.12)",
        },
        obsidian: {
          bg: "#110A13",
          surface: "#1A121E",
          elevated: "#231828",
          ink: "#F7F5F8",
          muted: "#9C92A4",
          border: "rgba(226, 169, 240, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.06em",
        widest: "0.14em",
        ultra: "0.22em",
      },
      lineHeight: {
        tighter: "1.08",
        tight: "1.18",
        relaxed: "1.68",
      },
    },
  },
  plugins: [],
};

export default config;

