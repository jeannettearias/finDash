import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/finDash/", // <-- This is the key fix
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
});


