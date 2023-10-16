import '@/globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { ColorSchemeScript } from '@mantine/core';

import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import MantineProviderServer from '@/styles/mantine/MantineProviderServer';
import Header from './HomePageComponents/Header/Header';
import ChangeColorScheme from '@/components/Affix/ChangeColorScheme';

const nunito = Nunito({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Trip Website Demo',
  description: 'Developed by Hwanhoon Kim',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={nunito.className}>
        <MantineProviderServer>
          <Header />
          {children}
          <ChangeColorScheme />
        </MantineProviderServer>
      </body>
    </html>
  );
}
