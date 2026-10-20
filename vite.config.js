import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to ensure public sub-directory HTML files (like /notespack/)
// are served properly instead of falling back to SPA root in dev server
function servePublicHtml() {
  return {
    name: 'serve-public-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.includes('/notespack') && !req.url.includes('.')) {
          req.url = req.url.endsWith('/') ? `${req.url}index.html` : `${req.url}/index.html`;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), servePublicHtml()],
  base: '/portohealme/',
});
