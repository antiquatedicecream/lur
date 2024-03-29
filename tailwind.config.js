module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "media",
  theme: {
    fontFamily: {
      'adriane-text': ['adriane-text'],
      'adriane-text-bold': ['adriane-text-bold'],
      'adriane-text-italic': ['adriane-text-italic'],
      'josefin-sans-v32-latin-regular': ['josefin-sans-v32-latin-regular'],
      'josefin-sans-v32-latin-semibold': ['josefin-sans-v32-latin-semibold'],
      'josefin-sans-v32-latin-bold': ['josefin-sans-v32-latin-bold']
    },
    extend: {
      colors: {
        'uil-black': '#000000',
        'uil-grey': '#E4E4E4',
        'uil-key': '#990500',
        'uil-accent-one': '#EF4543',
        'uil-accent-two': '#FFE2D8',
        'uil-post': '#FFF5F2',
        'commemorative-post': '#ffece9', // ffe8e5
        'commemorative-text': '#6e0500',
        'commemorative-hero-bg': '#ffece9'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
