import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // Define a raiz do projeto, que deve conter o index.html
  build: {
    outDir: 'dist', // Diretório de saída para os arquivos de build (padrão é "dist")
  },
  server: {
    port: 5173, // Porta do servidor de desenvolvimento (opcional)
    open: true, // Abre o navegador automaticamente (opcional)
  },
});