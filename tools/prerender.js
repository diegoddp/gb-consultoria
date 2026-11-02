#!/usr/bin/env node
// Pré-renderização: depois do "vite build", gera um HTML completo para cada página,
// para que o Google (e as prévias de WhatsApp/Instagram) leiam o conteúdo sem depender
// de JavaScript. Também gera o 404.html e o sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const { render, ROUTES, absoluteUrl } = await import(
  pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const page = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

// "/" vira index.html; "/sobre" vira sobre.html (o .htaccess serve /sobre a partir dele)
const fileFor = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const route of ROUTES) {
  fs.writeFileSync(path.join(dist, fileFor(route)), page(route));
  console.log(`pré-renderizado: ${route} -> ${fileFor(route)}`);
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'));
console.log('pré-renderizado: 404.html');

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${absoluteUrl(r)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log('gerado: sitemap.xml');
