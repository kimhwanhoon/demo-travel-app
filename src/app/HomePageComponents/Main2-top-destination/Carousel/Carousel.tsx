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
      classNames={{ control: 'data-[inactive]:opacity-0' }}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      align="start"
    >
      {top_destination.map((item) => (
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
