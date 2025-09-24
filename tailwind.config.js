/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#0b1220',
          deeper: '#0a0f1e'
        },
        surface: '#0f172a',
        'surface-2': '#111827',
        brand: {
          400: '#3b82f6',
          500: '#2563eb'
        },
        accent: {
          400: '#8b5cf6',
          500: '#7c3aed'
        }
      },
      boxShadow: {
        glass: '0 10px 30px rgba(2, 8, 23, 0.45)',
        card: '0 20px 60px rgba(2,8,23,.55)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(900px 500px at -10% -20%, rgba(59,130,246,0.35) 0%, transparent 60%), radial-gradient(900px 500px at 110% 10%, rgba(124,58,237,0.30) 0%, transparent 60%), linear-gradient(90deg, #0f172a 0%, #111827 100%)',
        'section-gradient': 'radial-gradient(1200px 600px at 0% 0%, rgba(37,99,235,.15), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(124,58,237,.18), transparent 60%), linear-gradient(90deg, #0b1220 0%, #0e1726 100%)',
        'offers-gradient': 'linear-gradient(180deg, #0b1220 0%, #0b1220 45%, #0f172a 100%)'
      }
    }
  },
  plugins: []
};
