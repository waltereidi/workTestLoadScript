import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/': './src/', 
      '@/': new URL('./src/', import.meta.url).pathname, 
      'root/': './', 
      'root/': new URL('./', import.meta.url).pathname, 
    }
  }
})