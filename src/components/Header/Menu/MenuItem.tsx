import { MenuItem as Item } from '@mantine/core';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  key: Props['title'];
  title: string;
  icon: ReactNode;
  href: string;
}

export default function MenuItem({ key, title, icon, href }: Props) {
  return (
    <Item
      key={key}
      leftSection={icon}
    >
      <Link href={href}>{title}</Link>
    </Item>
  );
}
