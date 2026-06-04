/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Saffron / Gurukul accent (rooted in Indian academic heritage)
        saffron: {
          50: '#fff8eb',
          100: '#ffefcc',
          200: '#fedb8e',
          300: '#fcc150',
          400: '#fba627',
          500: '#f5840f',
          600: '#d96109',
          700: '#b4400b',
          800: '#923210',
          900: '#782a11',
        },
        // Deep night - the scholarly palette
        midnight: {
          50: '#f4f6fb',
          100: '#e7ecf6',
          200: '#cad7eb',
          300: '#9bb6da',
          400: '#658fc5',
          500: '#4271ad',
          600: '#325991',
          700: '#2a4876',
          800: '#263e63',
          900: '#0a1628',
          950: '#050d1a',
        },
        // Trust accent - emerald (for success/growth)
        sage: {
          50: '#f0fdf5',
          100: '#dcfce8',
          200: '#bbf7d2',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803c',
        },
        ink: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'grid': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill='none' stroke='rgba(0,0,0,0.04)' d='M0 0h40v40H0z M0 20h40 M20 0v40'/%3E%3C/svg%3E\")",
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath fill='none' stroke='rgba(255,255,255,0.05)' d='M0 0h40v40H0z M0 20h40 M20 0v40'/%3E%3C/svg%3E\")",
        'dots': "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)",
        'mandala': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='rgba(245,132,15,0.08)' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='80'/%3E%3Ccircle cx='100' cy='100' r='60'/%3E%3Ccircle cx='100' cy='100' r='40'/%3E%3Cpath d='M100 20v160 M20 100h160 M41 41l118 118 M159 41L41 159'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'elev-1': '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        'elev-2': '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'elev-3': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'elev-4': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
        'glow-saffron': '0 0 50px -10px rgba(245, 132, 15, 0.5)',
        'glow-midnight': '0 20px 60px -10px rgba(10, 22, 40, 0.4)',
      },
    },
  },
  plugins: [],
}
