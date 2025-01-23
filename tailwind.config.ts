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
        terminal: "#98c278",
        console: "#e4c17b",
        title: "#60afee",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      animation: {
        homeSelect: "selectionMove 0.4s steps(5) alternate infinite",
        typewriter: "typewriter 1.25s steps(20) forwards",
        caret:
          "typewriter 1.25s steps(20) forwards, blink 1.25s steps(20) infinite 1.25s",
        videoFade: "videoFade 0.2s linear forwards",

        projectLeftQuote: "projectLeftQuote 0.4s linear alternate infinite",
        projectRightQuote: "projectRightQuote 0.4s linear alternate infinite",
      },

      keyframes: {
        projectLeftQuote: {
          to: {
            left: "-1.7rem"
          }
        },

        projectRightQuote: {
          to: {
            right: "-1.7rem"
          }
        },

        videoFade: {
          to: {
            opacity: "100",
          }
        },

        showCmd: {
          "99%": {
            visibility: "hidden",
          },

          "100%": {
            visibility: "visible",
          },
        },

        selectionMove: {
          to: {
            transform: "translateX(-2.25rem)"
          }
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
