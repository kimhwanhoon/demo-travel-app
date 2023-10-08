import {
  Button,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
} from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import LinkGroup from '../DrawerMenu/MenuLink';
import { MenuGroup } from './menuGroups';

interface Props {
  title: string;
  menuGroup: MenuGroup[];
  viewAllHref: string;
  footer?: boolean;
  footerTitle?: string;
  footerDesc?: string;
  footerButtonText?: string;
  footerButtonHref?: string;
}

export default function MenuHoverLink({
  title,
  menuGroup,
  viewAllHref,
  footer,
  footerTitle,
  footerDesc,
  footerButtonText,
  footerButtonHref,
}: Props) {
  return (
    <>
      <HoverCard
        width={600}
        position="bottom"
        radius="md"
        shadow="md"
        withinPortal
        transitionProps={{ duration: 300, transition: 'fade' }}
      >
        <HoverCard.Target>
          <section className="cursor-pointer">
            <div className="flex items-center gap-[2px]">
              <span className="text-sm md:text-base">{title}</span>
              <IconChevronDown className="text-s-blue-400 w-5 h-5" />
            </div>
          </section>
        </HoverCard.Target>

        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
          <Group
            justify="space-between"
            px="md"
          >
            <Text fw={500}>{title}</Text>
            <Link
              href={viewAllHref}
              className="text-xs hover:underline hover:text-s-blue-500"
            >
              View all
            </Link>
          </Group>

          <Divider my="sm" />

          <SimpleGrid
            cols={menuGroup.length < 2 ? 1 : 2}
            spacing={5}
          >
            <LinkGroup
              key={'tours'}
              menuGroup={menuGroup}
            />
          </SimpleGrid>
          {footer && (
            <section className="mt-2">
              <div className="flex justify-between items-center">
                <div>
                  <Text
                    fw={500}
                    fz="sm"
                  >
                    {footerTitle}
                  </Text>
                  <Text
                    size="xs"
                    c="dimmed"
                  >
                    {footerDesc}
                  </Text>
                </div>
                <Button
                  component={Link}
                  href={footerButtonHref ?? '/'}
                  variant="default"
                >
                  {footerButtonText}
                </Button>
              </div>
            </section>
          )}
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}
