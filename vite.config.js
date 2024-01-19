// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // other Vite configurations...
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
