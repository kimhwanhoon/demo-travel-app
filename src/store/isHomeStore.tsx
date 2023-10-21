import { create } from 'zustand';

interface isHomeStore {
  isHome: boolean;
  setIsHome: (value: boolean) => void;
}

const isHomeStore = create<isHomeStore>(set => {
  return {
    isHome: false,
    setIsHome: (value: boolean) => set({ isHome: value }),
  };
});

export default isHomeStore;
