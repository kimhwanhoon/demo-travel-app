import type { PropsWithChildren } from 'react';
import MantineProviderClient from './MantineProviderClient';
import getPrimaryColor from '@/lib/theme/fetchPrimaryColor';

export default async function MantineProviderServer({
  children,
}: PropsWithChildren) {
  const primaryColor = await getPrimaryColor();

  return (
    <MantineProviderClient primaryColor={primaryColor}>
      {children}
    </MantineProviderClient>
  );
}
