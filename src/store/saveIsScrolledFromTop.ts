import { create } from 'zustand';

interface IsScrolledFromTopStore {
  isScrolledFromTop: boolean;
  setIsScrolledFromTop: (isScrolled: boolean) => void;
}

const saveIsScrolledFromTop = create<IsScrolledFromTopStore>(set => {
  return {
    isScrolledFromTop: false,
    setIsScrolledFromTop: (isScrolled: boolean) =>
      set({ isScrolledFromTop: isScrolled }),
  };
});

export default saveIsScrolledFromTop;
