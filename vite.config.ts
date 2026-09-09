import path from 'node:path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/hexly_react/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@app': path.resolve(import.meta.dirname, './src/app'),
      '@router': path.resolve(import.meta.dirname, './src/router'),
      '@pages': path.resolve(import.meta.dirname, './src/pages'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@shared': path.resolve(import.meta.dirname, './src/shared'),
      '@data': path.resolve(import.meta.dirname, './src/shared/data'),
      '@styles': path.resolve(import.meta.dirname, './src/styles'),
    },
  },
});
