import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

const isVercel = !!process.env.VERCEL;
const isCI = !!process.env.CI;
const enableWayfinder = !isVercel && !isCI; // enable locally, disable on Vercel/CI

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
    tailwindcss(),
    // only add wayfinder plugin when enabled
    ...(enableWayfinder ? [ wayfinder({ formVariants: true }) ] : []),
  ],
  esbuild: {
    jsx: 'automatic',
  },
});
