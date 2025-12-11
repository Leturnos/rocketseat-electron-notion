import path from 'node:path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    resolve: {
      alias: {
        '@renderer': path.resolve('src/renderer/src/')
      },
    },
    plugins: [react(), tailwindcss()],
    // publicDir: path.resolve('resources'),
  },
})
