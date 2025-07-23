import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Changed from @vitejs/plugin-react-swc
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      // Force Babel when SWC fails
      babel: {
        plugins: [
          // Add any Babel plugins you need here
        ],
      },
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/kanyozatech-portfolio/' : '/',
  optimizeDeps: {
    // Force esbuild for dependency optimization
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // Ensure esbuild is used for JS/TS transformation
    loader: 'tsx',
  },
}));