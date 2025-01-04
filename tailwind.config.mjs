/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'discord-dark': '#36393f',
        'discord-darker': '#2f3136',
        'discord-blurple': '#5865f2',
        'discord-green': '#3ba55c',
        'discord-text': '#dcddde',
        'discord-light': '#b9bbbe',
        'cyber-blue': '#00f6ff',
        'cyber-purple': '#7928ca',
        'cyber-pink': '#ff0080',
        'cyber-dark': '#0a0a0a',
      },
      animation: {
        'float': 'float 15s linear infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink .75s step-end infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.2' },
          '90%': { opacity: '0.2' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}