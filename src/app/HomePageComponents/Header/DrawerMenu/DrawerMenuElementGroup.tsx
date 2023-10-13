import MenuLinkHeader from './MenuLinkHeader';
import { Collapse } from '@mantine/core';
import MenuLink from './MenuLink';
import { MenuGroup } from '../Menu/menuGroups';

interface Props {
  groupTitle: string;
  toggle: () => void;
  isOpen: boolean;
  menuGroup: MenuGroup[];
}

export default function DrawerMenuElementGroup({
  groupTitle,
  toggle,
  isOpen,
  menuGroup,
}: Props) {
  return (
    <>
      <MenuLinkHeader
        key={'transportation'}
        groupTitle={groupTitle}
        toggleLinkGroup={toggle}
      />
      <Collapse in={isOpen}>
        <MenuLink
          key="transportation"
          menuGroup={menuGroup}
        />
      </Collapse>
    </>
  );
}
