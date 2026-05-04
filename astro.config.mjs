// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://emestrategia.net',
  output: 'static',   // ← static = build normal, sin SSR
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  }
});
