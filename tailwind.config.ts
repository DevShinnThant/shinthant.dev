import type { Config } from "tailwindcss"

const config = {
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
    fontFamily: {
      jost: "Jost, sans-serif",
    },
    extend: {
      boxShadow: {
        resume_btn_shadow:
          "0 0 5px hsl(var(--accent-color)), 0 0 25px hsl(var(--accent-color)), 0 0 50px hsl(var(--accent-color)), 0 0 200px hsl(var(--accent-color))",
      },
      colors: {
        accentColor: "hsl(var(--accent-color))",

        // Navbar
        navbar_text_size: "var(--navbar-text-color)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        baseBackground: "hsl(var(--base-background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Navbar
        "frame-nav-btn-line-1": {
          "0%": { left: "-100%" },
          "100%": {
            left: "100%",
          },
        },
        "frame-nav-btn-line-2": {
          "0%": { top: "-100%" },
          "100%": {
            top: "100%",
          },
        },
        "frame-nav-btn-line-3": {
          "0%": { right: "-100%", display: "block" },
          "100%": {
            right: "100%",
          },
        },
        "frame-nav-btn-line-4": {
          "0%": { bottom: "-100%" },
          "100%": {
            bottom: "100%",
          },
        },
        // Navbar
        "frame-hero-bg": {
          "0%": {
            transform: "translate(0%,0%)",
          },
          "100%": {
            transform: "translate(-20%,-20%)",
          },
        },
        "frame-contact-me-btn-icon": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animate-nav-btn-line-1": "frame-nav-btn-line-1 2s infinite",
        "animate-nav-btn-line-2": "frame-nav-btn-line-2 2s infinite",
        "animate-nav-btn-line-3": "frame-nav-btn-line-3 2s infinite",
        "animate-nav-btn-line-4": "frame-nav-btn-line-4 2s infinite",
        "animate-frame-hero-bg": "frame-hero-bg 10s infinite",
        "animate-frame-contact-me-btn-icon":
          "frame-contact-me-btn-icon .3s ease",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: any) {
      addUtilities({
        ".bg-clip-text": {
          "background-clip": "text",
          "-webkit-background-clip": "text",
        },
      })
    },
  ],
} satisfies Config

export default config
