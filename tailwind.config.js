module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        canva: {
          purple: '#8b3dff',
          purpleAccent: '#7731d8',
          purpleDeep: '#612dae',
          teal: '#00c4cc',
          blue: '#1a62ff',
          blueLight: '#3d8bff',
          dark: '#0d1216',
          white: '#fff',
          bgLight: '#f0f1f5',
          bgLighter: '#f6f7f8',
          green: '#008009',
          red: '#db142c',
          orange: '#ad5a00',
          lavender: '#e7dbff',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'Canva Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 