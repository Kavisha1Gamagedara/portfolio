/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0e0f12',
          surface: '#15171e',
          card: '#1b1e27',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#ffffff',
          muted: '#8f9cae',
        },
        light: {
          bg: '#ffffff',
          surface: '#f9f9fb',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
          text: '#111215',
          muted: '#64748b',
        },
        accent: {
          coral: '#ff4a57',
          coralHover: '#e53a47',
          mint: '#55e6a5',
          mintHover: '#3dd692',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
