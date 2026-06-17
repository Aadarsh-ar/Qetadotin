import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Fira Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['DM Serif Display', 'ui-serif', 'Georgia', 'serif'],
        display: ['DM Serif Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Legacy pastel tokens (kept as gold aliases for older pages)
        'sky-blue': 'hsl(var(--gold))',
        'periwinkle': 'hsl(var(--gold-soft))',
        'pastel-pink': 'hsl(var(--gold))',
        'peach-coral': 'hsl(var(--gold-soft))',
        'warm-lavender': 'hsl(var(--gold-deep))',
        surface: 'hsl(var(--noir-elev))',
        // Noir & Gold tokens
        gold: 'hsl(var(--gold))',
        'gold-soft': 'hsl(var(--gold-soft))',
        'gold-deep': 'hsl(var(--gold-deep))',
        noir: 'hsl(var(--noir))',
        'noir-elev': 'hsl(var(--noir-elev))',
        bone: 'hsl(var(--bone))',
        hairline: 'hsl(var(--hairline))'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-slow': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        'blur-in': {
          from: { opacity: '0', filter: 'blur(10px)' },
          to: { opacity: '1', filter: 'blur(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-slow': 'fade-in-slow 1s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'blur-in': 'blur-in 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite'
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem'
      },
      backdropBlur: {
        xs: '2px'
      },
      boxShadow: {
        '2xs': 'var(--shadow-2xs)',
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'pastel': '0 8px 32px -8px hsl(217 100% 81% / 0.12), 0 16px 48px -16px hsl(270 100% 86% / 0.1)',
        'pastel-lg': '0 16px 48px -8px hsl(217 100% 81% / 0.18), 0 32px 80px -16px hsl(270 100% 86% / 0.14)',
        'glass': 'inset 0 1px 0 0 hsl(0 0% 100% / 0.5), 0 8px 32px -8px hsl(217 100% 81% / 0.1)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;