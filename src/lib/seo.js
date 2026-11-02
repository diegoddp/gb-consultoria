import {
  COMPANY_NAME,
  CONTACT_PERSON,
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_NUMBER,
  ADDRESS_LINE,
} from '@/lib/contact';
import { SERVICES } from '@/lib/services';

// Domínio oficial, sem barra no final. Usado em canonical, Open Graph, sitemap e dados estruturados.
export const SITE_URL = 'https://gbconsultoriasst.com.br';
export const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

// Páginas indexáveis. O script de pré-renderização (tools/prerender.js) gera um HTML
// para cada uma e monta o sitemap.xml a partir desta lista.
export const ROUTES = ['/', '/sobre', '/servicos', '/contato'];

export const absoluteUrl = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Dados estruturados (schema.org) da empresa local, lidos pelo Google para a busca e o Maps.
export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#empresa`,
  name: COMPANY_NAME,
  alternateName: 'GB Consultoria SST',
  description:
    'Consultoria em segurança do trabalho para empresas de Tietê e região: PGR, LTCAT, PCMSO, eSocial SST, AVCB e CLCB, treinamentos NR e palestras.',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: OG_IMAGE,
  telephone: `+${WHATSAPP_NUMBER}`,
  email: EMAIL,
  foundingDate: '2022',
  founder: { '@type': 'Person', name: CONTACT_PERSON },
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS_LINE.replace(' – ', ', '),
    addressLocality: 'Tietê',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: [
    { '@type': 'City', name: 'Tietê' },
    { '@type': 'State', name: 'São Paulo' },
  ],
  sameAs: [INSTAGRAM_URL],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de segurança do trabalho',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.description },
    })),
  },
};
