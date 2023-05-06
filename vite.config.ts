import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      'react': 'https://cdn.skypack.dev/react@18.2.0',
      'react-dom': 'https://cdn.skypack.dev/react-dom@18.2.0'
    }
  },
  // base: "/Crud-form/",

})
