import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from "vite-plugin-checker"; 

// https://vitejs.dev/config/
export default defineConfig({
  server: {
      open: true,
      proxy: {
          "^/api/.*": "http://localhost:8080",
      },
  },
  plugins: [
      react(), 
      checker({
        typescript: true,
        eslint: {
            lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
  ]
})
