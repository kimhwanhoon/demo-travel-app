'use client';

import Logo from '@/logo/Logo';
import MobileMenu from './DrawerMenu/HeaderMenu';
import MenuLink from './Menu/MenuLink';
import useIsScrolledFromTop from '@/lib/hooks/useIsScrolledFromTop';

export default function Header() {
  const isScrolled = useIsScrolledFromTop();

  return (
    <header
      className={`fixed top-0 z-50 flex h-[70px] w-full items-center justify-between px-5  ${
        !isScrolled ? 'bg-transparent' : 'bg-white'
      }`}
    >
      {/* <Logo /> */}
      <h1
        className={`hover animate-300 cursor-pointer text-xl font-bold hover:scale-105 sm:text-2xl sm:font-extrabold ${
          !isScrolled ? 'text-white' : 'text-s-gray-900'
        }`}
      >
        TourHere
      </h1>
      <MenuLink />
      <MobileMenu />
    </header>
  );
}
