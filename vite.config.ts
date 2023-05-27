import dsv from '@rollup/plugin-dsv';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), dsv()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  }
});
