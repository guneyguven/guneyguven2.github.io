import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://guneyguven.github.io/guneyguven2.github.io',
  base: '/guneyguven2.github.io',
  integrations: [react(), mdx()],
  output: 'static',
  build: { format: 'directory' }
});
