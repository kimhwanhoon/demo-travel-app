'use client';

import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Element from './Element';
import { Database } from '@/types/public.db';

interface Props {
  top_destination: Array<
    Database['public']['Tables']['top_destination']['Row']
  >;
}
export default function Main2_carousel({ top_destination }: Props) {
  return (
    <Carousel
      containScroll={'trimSnaps'}
      classNames={{ control: 'data-[inactive]:opacity-0' }}
      slideSize={{
        base: '80%',
        sm: '45%',
        md: '30%',
        xl: '25%',
      }}
      slideGap={{ base: 10, sm: 'md' }}
      align='start'
    >
      {top_destination.map(item => (
        <Carousel.Slide key={item.id}>
          <Element
            title={item.title}
            desc={item.desc}
            src={item.src}
            href={`/tours?search=true&keyword=${item.title.toLowerCase()}`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
