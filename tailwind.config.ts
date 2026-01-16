import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FAF8F3',
          light: '#FEFCF8',
        },
        text: {
          primary: '#2C2416',
          secondary: '#5A4E3F',
        },
        accent: {
          maroon: '#8B4A5C',
          terracotta: '#B8735A',
          gold: '#C9A961',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
