import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'http://localhost:3000',
    siteName: 'ARA 5.0',
    images: [
      {
        url: 'http://localhost:3000/og/logo.png',
        width: 1200,
        height: 630,
        alt: 'ARA 5.0',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | A Renewal Agent 5.0',
  description:
    'A Renewal Agents',
  defaultTitle: 'A Renewal Agent',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export default config;
