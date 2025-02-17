import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-production-4c8b.up.railway.app/',
        changeOrigin: true,
        secure: true,
      },
    },
  }, 
  build: {
    sourcemap: false,  // Disable source maps in production to prevent errors
  },
  define: {
    'process.env': {},  // Fix issues related to process.env in Vite
  },
});
