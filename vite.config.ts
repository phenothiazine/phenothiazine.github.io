import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 你的仓库是 phenothiazine.github.io，属于用户主站，所以 base 设为 '/'
  base: '/', 
  build: {
    outDir: 'dist',
  }
})