'use client';

import Logo from '@/logo/Logo';
import MobileMenu from './DrawerMenu/HeaderMenu';
import MenuLink from './Menu/MenuLink';
import useIsScrolledFromTop from '@/lib/hooks/useIsScrolledFromTop';

export default function Header() {
  const isScrolled = useIsScrolledFromTop();

  return (
    <header
      className={`z-50 fixed top-0 w-full h-[70px] flex items-center justify-between px-5  ${
        !isScrolled ? 'bg-transparent' : 'bg-white'
      }`}
    >
      {/* <Logo /> */}
      <h1
        className={`cursor-pointer text-xl font-bold sm:font-extrabold sm:text-2xl hover:animate-bounce ${
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
