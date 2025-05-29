export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7B373A',
        accent: '#A05A2C',
        background: '#EFE7CC',
        card: '#F8F5ED',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: [
          'Canva Sans',
          'Noto Sans Variable',
          'Noto Sans',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}; 