import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'/',
  base: mode === 'development' ? '/dev/' : '/', // Use '/dev/' for development deployment
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/test/setup.js',
    include: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
})
