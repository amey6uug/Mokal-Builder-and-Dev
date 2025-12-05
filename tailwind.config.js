/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          '900': '#0f172a',
          '800': '#1e293b',
          '700': '#334155',
          '600': '#475569',
          '500': '#64748b',
          '400': '#78716c',
          '300': '#cbd5e1',
          '200': '#e2e8f0',
          '100': '#f1f5f9',
        },
        'amber': {
          '600': '#d97706',
          '500': '#f59e0b',
          '400': '#fbbf24',
        },
        'gray': {
          '400': '#9ca3af',
          '300': '#d1d5db',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-amber': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
      backdropBlur: {
        '2xl': '80px',
        '3xl': '96px',
      },
      boxShadow: {
        'amber-lg': '0 10px 30px rgba(245, 158, 11, 0.2)',
        'amber-xl': '0 20px 40px rgba(245, 158, 11, 0.15)',
      },
    },
  },
  plugins: [],
}