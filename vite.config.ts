import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// No GitHub Pages o site fica em /nome-do-repositorio/. O workflow define BASE_PATH;
// em desenvolvimento, Vercel e Netlify o padrão "/" continua valendo.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})