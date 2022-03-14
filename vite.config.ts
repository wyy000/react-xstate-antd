import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import WindCSS from 'vite-plugin-windicss'
// @ts-ignore
import path from 'path'

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindCSS(),
  ],
  alias: {
    '@/': pathResolve('./'),
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
    ],
  },
})
