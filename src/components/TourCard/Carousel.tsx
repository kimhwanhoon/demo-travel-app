import { Carousel as MantineCarousel } from '@mantine/carousel';
import classes from './Carousel.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { type PhotoInfo } from '@/types/types';

interface Props {
  photoInfo: PhotoInfo[];
  href: string;
  tourRef: string;
}

export default function Carousel({ photoInfo, href, tourRef }: Props) {
  return (
    <MantineCarousel
      withIndicators
      containScroll='trimSnaps'
      className='relative max-h-[300px] overflow-hidden rounded-xl'
      classNames={classes}
      align='start'
      slideGap={{ base: 10, sm: 'md' }}
    >
      {photoInfo.map(photo => (
        <MantineCarousel.Slide key={photo.alt}>
          <Link
            href={`/tours/${href}?ref=${tourRef}`}
            className='group/item 2xl:h-[420px] 4xl:h-[500px] relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl after:absolute  after:bottom-0 after:h-[25%] after:w-full after:bg-opacity-20 after:bg-gradient-to-t after:from-[#11111199] after:to-[#11111100] lg:h-[380px]'
          >
            <Image
              className='h-full w-full rounded-lg object-fill'
              src={photo.src}
              alt={photo.alt}
              fill
            />
          </Link>
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}
