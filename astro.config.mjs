import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://human-first-tech.github.io',
  base: '/LAHSIV',
  trailingSlash: 'ignore',
  integrations: [tailwind(), sitemap()],
});
