import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // ← Must be imported

export default defineConfig({
  base: '/kanyozatech-creator/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8080
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})