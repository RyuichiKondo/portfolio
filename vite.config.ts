import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  base: process.env.GITHUB_PAGES ? "portfolio" : "./", 
  plugins: [react()],
})
