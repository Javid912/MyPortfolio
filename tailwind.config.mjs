/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'discord-blurple': '#5865F2',
        'discord-dark': '#36393F',
        'discord-darker': '#2F3136',
        'discord-text': '#DCDDDE',
        'discord-green': '#57F287',
      },
    },
  },
  plugins: [],
}
