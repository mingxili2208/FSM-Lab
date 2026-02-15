import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Times New Roman', 'Times', 'Georgia', 'serif'],
      },
      colors: {
        base: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          border: 'var(--color-border)',
        },
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
      },
      borderRadius: {
        glass: 'var(--radius-glass)',
      },
      backdropBlur: {
        glass: 'var(--blur-glass)',
      },
    },
  },
  plugins: [],
};

export default config;
