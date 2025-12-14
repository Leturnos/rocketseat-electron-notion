import path from 'node:path'
import { defineConfig } from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

const tsconfigPaths = tsconfigPathsPlugin({
  projects: [path.resolve('tsconfig.json')],
})

export default defineConfig({
  main: {
    plugins:[tsconfigPaths],
    resolve: {
      alias: {
        '@shared': path.resolve('src/shared')
      }
    }
  },
  preload: {
    plugins:[tsconfigPaths],
    resolve: {
      alias: {
        '@shared': path.resolve('src/shared')
      }
    }
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform),
    },
    // resolve: {
    //   alias: {
    //     '@renderer': path.resolve('src/renderer/src/')
    //   },
    // },
    plugins: [react(), tailwindcss(), tsconfigPaths],
  },
})


