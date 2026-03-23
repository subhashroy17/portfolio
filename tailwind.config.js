/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#1A1A1A',
        surface:  '#222222',
        border:   '#2C2C2C',
        lavender: '#9D8DF1',
        'lavender-light': '#b3a4f5',
        'lavender-dim':   'rgba(157, 141, 241, 0.12)',
        white:    '#F5F5F0',
        muted:    '#6b6b6b',
        subtle:   '#3a3a3a',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
