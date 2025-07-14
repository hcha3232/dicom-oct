import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'


function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const indexPath = resolve(__dirname, 'dist/index.html')
      const index = readFileSync(indexPath, 'utf-8')
      writeFileSync(resolve(__dirname, 'dist/404.html'), index)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/dicom-oct',
  plugins: [react(), viteCommonjs(),tailwindcss(),copyIndexTo404],
  optimizeDeps: {
    exclude: ['@cornerstonejs/dicom-image-loader'],
    include: ['dicom-parser'],
  },
  worker: {
    format: 'es',
  },
})


