import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4317,
    allowedHosts: [
      '100.100.4.60',
      'cak3d-oracle-vm.tailac984b.ts.net',
      'localhost',
      '127.0.0.1',
    ],
  },
  preview: {
    host: '0.0.0.0',
    port: 4317,
    allowedHosts: [
      '100.100.4.60',
      'cak3d-oracle-vm.tailac984b.ts.net',
      'localhost',
      '127.0.0.1',
    ],
  },
});
