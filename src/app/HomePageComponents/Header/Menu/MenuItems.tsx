import { MenuLabel } from '@mantine/core';
import { MenuGroup } from './menuGroups';
import MenuItem from './MenuItem';
import React from 'react';

interface Props {
  menuGroup: MenuGroup[];
  label: string;
}

export default function MenuItems({ menuGroup, label }: Props) {
  const MENU = menuGroup.map((menu) => (
    <MenuItem
      key={menu.title}
      href={menu.href}
      icon={menu.icon}
      title={menu.title}
    />
  ));

  return (
    <React.Fragment>
      <MenuLabel>{label}</MenuLabel>
      {MENU}
    </React.Fragment>
  );
}
