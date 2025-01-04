import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://javid912.github.io',
  base: '/MyPortfolio',
  build: {
    assets: '_astro'
  },
  vite: {
    base: '/MyPortfolio/',
    build: {
      assetsDir: '_astro'
    }
  },
  outDir: './dist',
  publicDir: './public',
  trailingSlash: 'always'
});
