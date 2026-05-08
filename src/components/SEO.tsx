import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  const siteTitle = `${title} | Oficina Mecânica`;
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}