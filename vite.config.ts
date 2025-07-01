import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/jerome-tzehou-hsu/',  // IMPORTANT: your repo name with slashes
  plugins: [react()],
})
