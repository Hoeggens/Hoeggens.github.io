/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',       // <-- note the `src/` prefix
    './src/components/**/*.{js,ts,jsx,tsx}', // if you have a components folder under src
    // any other folders you keep JSX in, e.g.:
    // './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        footer: 'var(--color-footer)',
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary-text)',
        card: 'var(--color-card-bg)',
        border: 'var(--color-border)',
        hoverlink: 'var(--color-hoverlink)',
      },
    },
  },
  plugins: [],
};