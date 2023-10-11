'use client';

import {
  Box,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { MenuGroup } from '../Menu/menuGroups';
import Link from 'next/link';

interface Props {
  menuGroup: MenuGroup[];
}

export default function MenuLink({ menuGroup }: Props) {
  const { colorScheme } = useMantineColorScheme();
  const hoverStyle =
    colorScheme === 'light' ? 'hover:bg-s-blue-50' : 'hover:bg-slate-700';
  const Links = menuGroup.map((item) => (
    <UnstyledButton
      key={item.href}
      w={'100%'}
      p={10}
      className={`${hoverStyle}`}
    >
      <Box
        component={Link}
        href={item.href}
        className="flex gap-2"
      >
        <ThemeIcon
          size={34}
          variant="default"
          radius={'md'}
        >
          <item.icon className="text-s-blue-400" />
        </ThemeIcon>
        <div>
          <Text
            size="sm"
            fw={500}
          >
            {item.title}
          </Text>
          <Text
            size="xs"
            c="dimmed"
          >
            {item.desc}
          </Text>
        </div>
      </Box>
    </UnstyledButton>
  ));
  return <>{Links}</>;
}
