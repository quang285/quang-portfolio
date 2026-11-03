import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://duyquangnguyen.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  integrations: [mdx()],
});
