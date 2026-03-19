// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlodaniel-dev.github.io',
  base: '/dental-education-site',
  vite: {
    plugins: [tailwindcss()]
  }
});