import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'http://localhost:3000',
    siteName: 'haloo',
    images: [
      {
        url: 'http://localhost:3000/og/logo.png',
        width: 1200,
        height: 630,
        alt: 'haloo',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  titleTemplate: '%s | halo',
  description:
    'halo',
  defaultTitle: 'halo',
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
};

export default config;
