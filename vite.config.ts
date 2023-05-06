import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react': 'https://lf-eden-npm-cdn.bcystatic.com/obj/eden-npm-cdn/v1/dev/react/17.0.2/37d9c5c2.js',
      'react-dom': 'https://lf-eden-npm-cdn.bcystatic.com/obj/eden-npm-cdn/v1/dev/react-dom/17.0.2/93d15a88.js'
    }
  },
  plugins: [
    react()
  ],
})
