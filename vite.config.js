import { defineConfig } from 'vite'
import react from '@vitejs/react-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPOSITORY-NAME/', // Change this to your exact GitHub repo name
})
