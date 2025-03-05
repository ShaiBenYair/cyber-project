import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  build: {
    outDir: 'public', // Change output directory from 'dist' to 'public'
  },
  preview: {
    port: process.env.PORT || 3000,
    allowedHosts: ['libos-beadhaffd8dpbfas.germanywestcentral-01.azurewebsites.net']
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer
      ]    
    }      
  }
})