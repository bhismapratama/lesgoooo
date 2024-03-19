'use client';
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { Poppins } from 'next/font/google';
import { DefaultSeo } from 'next-seo';

import '@/styles/globals.css';

import api from '@/lib/api';
import clsxm from '@/lib/clsxm';

import Toast from '@/components/Toast';

import SEO from '@/seo.config';

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
          <Toast />
          <DefaultSeo {...SEO} />
          <div className={clsxm(poppins.variable)}>
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
