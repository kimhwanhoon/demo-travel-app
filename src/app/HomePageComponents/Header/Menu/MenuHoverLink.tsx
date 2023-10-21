import {
  Button,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import LinkGroup from '../DrawerMenu/MenuLink';
import { MenuGroup } from './menuGroups';
import useIsScrolledFromTop from '@/lib/hooks/useIsScrolledFromTop';

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
  const isScrolled = useIsScrolledFromTop();

  return (
    <>
      <HoverCard
        width={600}
        position='bottom'
        radius='md'
        shadow='md'
        withinPortal
        transitionProps={{ duration: 300, transition: 'fade' }}
      >
        <HoverCard.Target>
          <section className='cursor-pointer'>
            <div className='flex items-center gap-[2px]'>
              <span
                className={`text-sm font-medium md:text-base ${
                  isScrolled ? 'text-s-gray-900' : 'text-white'
                }`}
              >
                {title}
              </span>
            </div>
          </section>
        </HoverCard.Target>

        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
          <Group
            justify='space-between'
            px='md'
          >
            <Text fw={500}>{title}</Text>
            <Link
              href={viewAllHref}
              className='text-xs hover:text-s-blue-500 hover:underline'
            >
              View all
            </Link>
          </Group>

          <Divider my='sm' />

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
            <section className='mt-2'>
              <div className='flex items-center justify-between'>
                <div>
                  <Text
                    fw={500}
                    fz='sm'
                  >
                    {footerTitle}
                  </Text>
                  <Text
                    size='xs'
                    c='dimmed'
                  >
                    {footerDesc}
                  </Text>
                </div>
                <Button
                  component={Link}
                  href={footerButtonHref ?? '/'}
                  variant='default'
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
