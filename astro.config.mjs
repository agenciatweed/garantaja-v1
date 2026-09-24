import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Enquanto o domínio definitivo não existir, usa a URL que a Vercel injeta no
// build. Assim canonical, og:url e sitemap apontam para onde o site realmente
// está, em vez de para um domínio que ainda não foi registrado.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://garantajacred.com.br';

export default defineConfig({
  site,
  integrations: [sitemap()],
  redirects: {
    '/faq': '/duvidas',
    '/politicas': '/termos',
  },
  build: { inlineStylesheets: 'auto' },
});
