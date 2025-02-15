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
});
