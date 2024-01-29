/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,ejs}'],
  theme: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Museo',
      body: 'Museo',
    },
    colors: {
      text: 'var(--text)',
      black_text: 'var(--black-text)',
      background: 'var(--background)',
      linen: 'var(--linen)',
      accent: 'var(--accent)',
      darkaccent: 'var(--darkaccent)',
      darkestaccent: 'var(--darkestaccent)',
    }
  },
  plugins: [],
}

