import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  // Set base path for GitHub Pages deployment (repo name as subdirectory)
  base: '/pollinations/',
  server: {
    open: true
  },
  build: {
    outDir: 'build'
  }
})
