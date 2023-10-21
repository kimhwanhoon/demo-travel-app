'use client';

import { Button, Group } from '@mantine/core';
import {
  menuGroup_Customized,
  menuGroup_Tours,
  menuGroup_Transportation,
} from './menuGroups';
import Link from 'next/link';
import MenuHoverLink from './MenuHoverLink';

export default function MenuLink() {
  return (
    <>
      <section className='flex items-center gap-10'>
        <nav className='hidden h-full items-center gap-5 sm:flex md:gap-7 lg:gap-9 '>
          <MenuHoverLink
            key='Transportation'
            menuGroup={menuGroup_Transportation}
            title='Transportation'
            viewAllHref='/transportation'
          />
          <MenuHoverLink
            key='Tours'
            menuGroup={menuGroup_Tours}
            title='Tours'
            viewAllHref='/tours'
          />
          <MenuHoverLink
            key='Customized Tours'
            menuGroup={menuGroup_Customized}
            title='Customized Tours'
            viewAllHref='/'
            footer
            footerTitle='Make your own itinerary'
            footerDesc='Contact our team and our tour operator will help you building your customized itinerary.'
            footerButtonText='Contact us'
            footerButtonHref='/customized-tours'
          />
        </nav>
        <Group visibleFrom='sm'>
          <Button
            component={Link}
            href={'/log-in'}
            variant='default'
          >
            Log in
          </Button>
          <Button
            component={Link}
            href={'/join'}
          >
            Join us
          </Button>
        </Group>
      </section>
    </>
  );
}
