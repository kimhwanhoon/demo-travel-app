import saveIsScrolledFromTop from '@/store/saveIsScrolledFromTop';
import { useWindowScroll } from '@mantine/hooks';
import { useEffect } from 'react';

export default function useIsScrolledFromTop() {
  const [scroll] = useWindowScroll();
  const { isScrolledFromTop, setIsScrolledFromTop } = saveIsScrolledFromTop();

  useEffect(() => {
    if (scroll.y > 50) {
      setIsScrolledFromTop(true);
    } else {
      setIsScrolledFromTop(false);
    }
  }, [scroll.y, setIsScrolledFromTop]);

  return isScrolledFromTop;
}
