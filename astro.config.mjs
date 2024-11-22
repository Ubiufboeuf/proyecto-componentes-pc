// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// import vercelServerless from '@astrojs/vercel/serverless';
// import netlify from '@astrojs/netlify';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  output: "server",
  adapter: cloudflare(),
});