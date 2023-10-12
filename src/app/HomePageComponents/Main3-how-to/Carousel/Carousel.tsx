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
      title: 'Find the perfect boat',
      desc: 'Browse our 5,000 designer dresses and accessories online or at our Melbourne warehouse.',
    },
    {
      id: 2,
      icon: Two,
      title: 'Select a captain',
      desc: 'Find your perfect look among thousands of fashion pieces, here available for rent and purchase.',
    },
    {
      id: 3,
      icon: Three,
      title: 'Many Pickup Locations',
      desc: 'Enjoy wearing it at your special event for a few days, or purchase it to make it part of your wardrobe.',
    },
    {
      id: 4,
      icon: Four,
      title: 'Satisfied Customers',
      desc: 'Simply pop your dress back in the free prepaid satchel provided. We now handle all the dry cleaning..',
    },
  ];
  // useIntersection사용해서 마지막것이 보이면 화살표 없애기 등을 시도해보기
  return (
    <Carousel
      classNames={{
        control: 'data-[inactive]:opacity-0 data-[inactive]:cursor-default',
      }}
      slideSize={{
        base: '100%',
        sm: '50%',
        md: '33.333333%',
        lg: '25%',
        xl: '20%',
      }}
      slideGap={{ base: 0, sm: 'md' }}
      align="start"
    >
      {contentData.map((item) => (
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
