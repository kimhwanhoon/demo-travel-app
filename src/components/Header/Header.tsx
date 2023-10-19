import MobileMenu from './DrawerMenu/HeaderMenu';
import MenuLink from './Menu/MenuLink';

export default function Header() {
  return (
    <header
      className={`fixed top-0 z-50 flex h-[60px] w-full items-center justify-between bg-white px-5 shadow-md shadow-s-gray-200 xs:h-[70px]`}
    >
      <h1
        className={`hover animate-300 cursor-pointer text-xl font-bold text-s-gray-900 hover:scale-105 sm:text-2xl sm:font-extrabold`}
      >
        TourHere
      </h1>
      <MenuLink />
      <MobileMenu />
    </header>
  );
}
