import { fileURLToPath } from "node:url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: [
      { find: '/@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
    extensions: ['.js','.ts','.json','.jsx','.mjs','.tsx','.vue']
  },
  base: '/'
})