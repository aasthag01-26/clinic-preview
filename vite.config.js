import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // default for Vite, but good to make it explicit
  },
  publicDir: 'public' // ensures files like _redirects are copied into dist/
})
