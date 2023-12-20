import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https:// vitejs.dev/config/
export default defineConfig({
  base: process.env.PUBLIC_URL ?? '/',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src'),
      '@types': path.resolve(__dirname, '../types')
    }
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  envPrefix: 'APP_'
})
