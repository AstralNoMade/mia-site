import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mia: {
          red: 'var(--mia-red)',
          'red-deep': 'var(--mia-red-deep)',
          yellow: 'var(--mia-yellow)',
          'yellow-soft': 'var(--mia-yellow-soft)',
          olive: 'var(--mia-olive)',
          graphite: 'var(--mia-graphite)',
          'graphite-deep': 'var(--mia-graphite-deep)',
          ink: 'var(--mia-ink)',
          bg: 'var(--mia-bg)',
          'bg-soft': 'var(--mia-bg-soft)',
          white: 'var(--mia-white)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
