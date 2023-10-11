import { useWindowScroll } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export default function useIsScrolledFromTop() {
  const [scroll] = useWindowScroll();
  const [scrollMoved, setScrollMoved] = useState<boolean>(false);

  useEffect(() => {
    if (scroll.y > 50) {
      setScrollMoved(true);
    } else {
      setScrollMoved(false);
    }
  }, [scroll.y]);

  return scrollMoved;
}
