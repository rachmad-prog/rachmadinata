/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#030712',
        'secondary-bg': '#111827',
        border: 'rgba(255, 255, 255, 0.08)',
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          foreground: '#FFFFFF',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        muted: {
          DEFAULT: '#9CA3AF',
          foreground: '#9CA3AF',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: '#FFFFFF',
        },
        popover: {
          DEFAULT: '#030712',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
