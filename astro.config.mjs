import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://javid912.github.io',
  base: '/MyPortfolio',
  outDir: './dist',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name][extname]',
          chunkFileNames: '_astro/[name].js',
          entryFileNames: '_astro/[name].js'
        }
      }
    }
  }
});
