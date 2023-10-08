import React from 'react';
import BurgerMenu from './Burger';
import Logo from '@/logo/Logo';

export default function Header() {
  return (
    <header className="w-full h-[70px] flex items-center justify-between px-5">
      <Logo />
      <BurgerMenu />
    </header>
  );
}
