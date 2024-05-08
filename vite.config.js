import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/online-profile-project/",
  plugins: [react()],
  server: {
    host: true,
  }
})
