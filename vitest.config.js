import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/': './src/', 
      '@/': new URL('./src/', import.meta.url).pathname, 
    }
  }
})