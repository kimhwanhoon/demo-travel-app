'use client';

import { useDisclosure } from '@mantine/hooks';
import { Burger, Menu } from '@mantine/core';
import MenuItems from './Menu/MenuItems';
import {
  menuGroup_Customized,
  menuGroup_Tours,
  menuGroup_Transportation,
} from './Menu/menuGroups';

export default function BurgerMenu() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Menu
      withArrow
      onClose={toggle}
    >
      <Menu.Target>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </Menu.Target>
      <Menu.Dropdown>
        <MenuItems
          label="Transportation"
          menuGroup={menuGroup_Transportation}
          key="Transportation"
        />
        <Menu.Divider />
        <MenuItems
          label="Tours"
          menuGroup={menuGroup_Tours}
          key="Tours"
        />
        <Menu.Divider />
        <MenuItems
          label="Customized Tours"
          menuGroup={menuGroup_Customized}
          key="Customized Tours"
        />
      </Menu.Dropdown>
    </Menu>
  );
}
