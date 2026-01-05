import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// Plugin to copy index.html to 404.html for GitHub Pages SPA routing
const ghPagesPlugin = () => {
  return {
    name: 'gh-pages-404',
    closeBundle() {
      const distPath = join(process.cwd(), 'dist')
      const indexPath = join(distPath, 'index.html')
      const html404Path = join(distPath, '404.html')
      
      // Simply copy index.html to 404.html
      // GitHub Pages will serve 404.html for any 404, which loads our SPA
      copyFileSync(indexPath, html404Path)
    }
  }
}

export default defineConfig({
  plugins: [react(), ghPagesPlugin()],
  base: '/ERGASIA-KOINONIKI-ERGASIA-ERGASIAKO-XORO/', // Important: must match your repo name
})