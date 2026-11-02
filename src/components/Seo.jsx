import React from 'react';
import { Helmet } from 'react-helmet';
import { absoluteUrl, OG_IMAGE } from '@/lib/seo';

/**
 * Título, descrição, URL canônica e cartões de compartilhamento (Open Graph) de cada página.
 * Sem "path" (página 404), não gera canonical e pede para não indexar.
 */
const Seo = ({ title, description, path }) => {
  const url = path ? absoluteUrl(path) : null;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {url ? <link rel="canonical" href={url} /> : <meta name="robots" content="noindex" />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default Seo;
