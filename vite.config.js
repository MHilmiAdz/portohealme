import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to ensure public sub-directory HTML files (like /notespack/)
// are served properly instead of falling back to SPA root in dev server
function servePublicHtml() {
  return {
    name: 'serve-public-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url) {
          const parsed = new URL(req.url, 'http://localhost');
          if (parsed.pathname.includes('/notespack') && !parsed.pathname.split('/').pop().includes('.')) {
            const normalized = parsed.pathname.endsWith('/')
              ? `${parsed.pathname}index.html`
              : `${parsed.pathname}/index.html`;
            req.url = `${normalized}${parsed.search}`;
          }
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
