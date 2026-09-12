import type { GetServerSideProps } from 'next';
import { SERVICE_PAGES_CONTENT } from '../constants';

const BASE_URL = 'https://lexonit.com';

const STATIC_ROUTES: string[] = [
  '/',
  '/services',
  '/services/it-providers',
  '/products',
  '/products/sakhi-safety',
  '/products/autohiru',
  '/clients',
  '/career',
  '/pricing',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/sakhi-privacy',
];

function generateSiteMap(): string {
  const serviceSlugs = Object.keys(SERVICE_PAGES_CONTENT);
  const serviceRoutes = serviceSlugs.map((slug) => `/services/${slug}`);
  const allRoutes = [...STATIC_ROUTES, ...serviceRoutes];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

// This component is never rendered — getServerSideProps writes the XML
// response directly and ends it before Next.js tries to render anything.
export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};
