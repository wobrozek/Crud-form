import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: true,
    strictPort:true,
    port: 8080
  },
  build: {
    rollupOptions: {
      external: ['React'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        }
    },
  },
}
})
