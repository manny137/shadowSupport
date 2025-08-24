import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dotenv from 'dotenv';
// import dotenvExpand from 'dotenv-expand';

// dotenvExpand.expand(dotenv.config());

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
