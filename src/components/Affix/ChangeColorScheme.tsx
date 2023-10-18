'use client';

import {
  ActionIcon,
  Affix,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrightnessDown, IconMoonFilled } from '@tabler/icons-react';
import React from 'react';

export default function ChangeColorScheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorscheme = useComputedColorScheme('light');

  return (
    <Affix position={{ bottom: 10, right: 10 }}>
      {computedColorscheme === 'light' ? (
        <ActionIcon
          variant='outline'
          aria-label='toggle dark mode'
          onClick={() => setColorScheme('dark')}
        >
          <IconMoonFilled className='p-1' />
        </ActionIcon>
      ) : (
        <ActionIcon
          variant='outline'
          aria-label='toggle dark mode'
          onClick={() => setColorScheme('light')}
        >
          <IconBrightnessDown />
        </ActionIcon>
      )}
    </Affix>
  );
}
