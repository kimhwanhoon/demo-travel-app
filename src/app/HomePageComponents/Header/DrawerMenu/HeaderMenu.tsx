'use client';

import { Burger, Divider, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  menuGroup_Customized,
  menuGroup_Tours,
  menuGroup_Transportation,
} from '../Menu/menuGroups';
import DrawerMenuElementGroup from './DrawerMenuElementGroup';
import saveIsScrolledFromTop from '@/store/saveIsScrolledFromTop';

export default function HeaderMenu() {
  const [drawerOpened, { toggle: toggleMenu }] = useDisclosure(false);
  const [transportationOpened, { toggle: toggleTransportation }] =
    useDisclosure(true);
  const [toursOpened, { toggle: toggleTours }] = useDisclosure(true);
  const [customizedOpened, { toggle: toggleCustomized }] = useDisclosure(true);
  const { isScrolledFromTop } = saveIsScrolledFromTop();

  return (
    <>
      <Burger
        color={isScrolledFromTop ? 'black' : 'white'}
        hiddenFrom="sm"
        opened={drawerOpened}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      />
      <Drawer
        opened={drawerOpened}
        onClose={toggleMenu}
        title="Navigation"
        hiddenFrom="sm"
        overlayProps={{ blur: 1 }}
        position="right"
        size={'sm'}
        transitionProps={{ duration: 300, transition: 'slide-left' }}
      >
        <Divider
          my="sm"
          mx="-md"
        />
        <section className="flex flex-col gap-2">
          <DrawerMenuElementGroup
            key="Transportation Menu"
            groupTitle="Transportation"
            menuGroup={menuGroup_Transportation}
            isOpen={transportationOpened}
            toggle={toggleTransportation}
          />
          <Divider my="xs" />
          <DrawerMenuElementGroup
            key="Tours Menu"
            groupTitle="Tours"
            menuGroup={menuGroup_Tours}
            isOpen={toursOpened}
            toggle={toggleTours}
          />
          <Divider my="xs" />
          <DrawerMenuElementGroup
            key="Customized Menu"
            groupTitle="Customized"
            menuGroup={menuGroup_Customized}
            isOpen={customizedOpened}
            toggle={toggleCustomized}
          />
        </section>
      </Drawer>
    </>
  );
}
