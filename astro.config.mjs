import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://javid912.github.io',
  base: '/MyPortfolio',
  build: {
    assets: 'assets'
  },
  vite: {
    base: '/MyPortfolio/',
    build: {
      assetsDir: 'assets'
    }
  },
  outDir: './dist',
  publicDir: './public'
});
