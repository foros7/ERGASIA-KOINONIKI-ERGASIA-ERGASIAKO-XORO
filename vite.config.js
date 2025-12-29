import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ERGASIA-KOINONIKI-ERGASIA-ERGASIAKO-XORO/', // Important: must match your repo name
})