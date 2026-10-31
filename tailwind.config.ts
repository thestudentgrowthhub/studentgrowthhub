import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tsgh: {
          navy: {
            DEFAULT: "#0F172A",
            light: "#1E293B",
            deep: "#070D18",
          },
          blue: {
            DEFAULT: "#1D4ED8",
            light: "#3B82F6",
            dark: "#1E3A8A",
          },
          green: {
            DEFAULT: "#10B981",
            light: "#34D399",
            dark: "#059669",
          },
          orange: {
            DEFAULT: "#F97316",
            light: "#FB923C",
            dark: "#EA580C",
          },
          cyan: {
            DEFAULT: "#0EA5E9",
            light: "#38BDF8",
            dark: "#0284C7",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
