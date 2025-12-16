// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue}',
    // add shadcn-vue components path if outside src
    './src/components/ui/**/*.{vue,ts,tsx,js,jsx,astro}'
  ],
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
