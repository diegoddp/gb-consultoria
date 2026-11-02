import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import App from '@/App';

export { ROUTES, absoluteUrl } from '@/lib/seo';

/** Renderiza uma rota em HTML para a pré-renderização (tools/prerender.js). */
export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script].map((t) => t.toString()).join('\n');
  return { html, head };
}
