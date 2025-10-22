import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';

const isVercel = !!process.env.VERCEL;
const isCI = !!process.env.CI;
const enableWayfinder = !isVercel && !isCI;

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/mev_in', // 👈 this line controls the base path
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.tsx'],
      ssr: 'resources/js/ssr.tsx',
      refresh: true,
    }),
    react(),
    tailwindcss(),
    ...(enableWayfinder ? [ wayfinder({ formVariants: true }) ] : []),
  ],
  esbuild: {
    jsx: 'automatic',
  },
});
