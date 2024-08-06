import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    assetsDir: '', // Зберігайте стилі в кореневій директорії dist
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/*.html', './src/css/**/*.scss'])
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './base/reset';`
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false, // Не відображати помилки на екрані
    },
  },
});
