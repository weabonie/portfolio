import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        typewriter: "typewriter 2s steps(20) forwards",
        caret:
          "typewriter 2s steps(20) forwards, blink 1s steps(20) infinite 2s",
        
      },

      keyframes: {
        showCmd: {
          "99%": {
            visibility: "hidden",
          },

          "100%": {
            visibility: "visible",
          },
        },

        typewriter: {
          to: {
            left: "100%",
          },
        },

        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
