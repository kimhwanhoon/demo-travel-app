'use client';

import { Carousel } from '@mantine/carousel';
import One from './svg/One';
import Two from './svg/Two';
import Three from './svg/Three';
import Four from './svg/Four';
import Main3_Element from './Element';

export default function Main3_Carousel() {
  const contentData = [
    {
      id: 1,
      icon: One,
      title: 'Choose a Tour',
      desc: 'Select your tour and reserve online or by email.',
    },
    {
      id: 2,
      icon: Two,
      title: 'Receive Confirmation',
      desc: 'Check your email for a confirmation letter.',
    },
    {
      id: 3,
      icon: Three,
      title: 'Complete Payment',
      desc: 'Pay with card, wire transfer, or cash.',
    },
    {
      id: 4,
      icon: Four,
      title: 'Tour Voucher',
      desc: 'Receive a voucher for tour details',
    },
  ];
  return (
    <Carousel
      containScroll={'trimSnaps'}
      classNames={{
        control: 'data-[inactive]:opacity-0 data-[inactive]:cursor-default',
      }}
      slideSize={{
        base: '80%',
        sm: '45%',
        md: '30%',
        xl: '25%',
      }}
      slideGap={{ base: 10, sm: 'md' }}
      align='start'
    >
      {contentData.map(item => (
        <Carousel.Slide key={item.id}>
          <Main3_Element
            icon={item.icon()}
            title={item.title}
            desc={item.desc}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
