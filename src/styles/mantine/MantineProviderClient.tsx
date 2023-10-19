'use client';

import { PrimaryColorsGroup } from '@/types/types';
import { createTheme, MantineProvider } from '@mantine/core';
import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  primaryColor: PrimaryColorsGroup;
}

export default function MantineProviderClient({
  children,
  primaryColor,
}: Props) {
  const theme = createTheme({
    colors: {
      DARK_GROUP: [
        '#d5d7e0',
        '#acaebf',
        '#8c8fa3',
        '#666980',
        '#4d4f66',
        '#34354a',
        '#2b2c3d',
        '#1d1e30',
        '#0c0d21',
        '#01010a',
      ],
      RED_GROUP: [
        '#ffebea',
        '#fed7d3',
        '#f6ada5',
        '#ef8074',
        '#ea5a4a',
        '#e74230',
        '#e73421',
        '#cd2715',
        '#b71f11',
        '#a1150a',
      ],
      ORANGE_GROUP: [
        '#fff3e3',
        '#fee5d0',
        '#f7cba3',
        '#f1af72',
        '#ec9748',
        '#ea872e',
        '#e9801f',
        '#d06d12',
        '#ba600b',
        '#a15200',
      ],
      BLUE_GROUP: [
        '#ebf2ff',
        '#d3e0fa',
        '#a1bdf7',
        '#6d99f6',
        '#467af5',
        '#3268f6',
        '#285ef7',
        '#1d4edc',
        '#1445c5',
        '#003bad',
      ],
      GRAY_GROUP: [
        '#f3f3fe',
        '#e4e6ed',
        '#c8cad3',
        '#a9adb9',
        '#9093a4',
        '#808496',
        '#767c91',
        '#656a7e',
        '#585e72',
        '#4a5167',
      ],
    },
    primaryColor,
    primaryShade: 5,
  });

  return (
    <MantineProvider
      // defaultColorScheme={'auto'}
      theme={theme}
    >
      {children}
    </MantineProvider>
  );
}
