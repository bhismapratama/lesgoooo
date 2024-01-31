'use client';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';

import clsxm from '@/lib/clsxm';

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div className={clsxm(poppins.variable)}>
          {children}
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
