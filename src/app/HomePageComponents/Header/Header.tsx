import Logo from '@/logo/Logo';
import MobileMenu from './DrawerMenu/HeaderMenu';
import MenuLink from './Menu/MenuLink';

export default function Header() {
  return (
    <header className="w-full h-[70px] flex items-center justify-between px-5 bg-white dark:bg-s-gray-950">
      {/* <Logo /> */}
      <h1 className="text-xl font-bold">TourHere</h1>
      <MenuLink />
      <MobileMenu />
    </header>
  );
}
