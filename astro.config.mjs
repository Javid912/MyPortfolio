import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://javid912.github.io',
  base: '/MyPortfolio',
  integrations: [tailwind()],
});
