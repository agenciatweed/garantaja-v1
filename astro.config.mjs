import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://garantajacred.com.br',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
