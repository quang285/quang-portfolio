import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://quang285.github.io',
  base: '/quang-portfolio',
  trailingSlash: 'always',
  integrations: [mdx()],
});
