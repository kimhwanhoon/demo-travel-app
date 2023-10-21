import { Spoiler } from '@mantine/core';
import React from 'react';

interface Props {
  description: string;
}

export const Description = ({ description }: Props) => {
  return (
    <section className='px-4 sm:px-6'>
      <Spoiler
        classNames={{ control: 'font-medium tracking-tight' }}
        maxHeight={140}
        showLabel='Show more'
        hideLabel='Hide'
        transitionDuration={250}
      >
        <p className=' leading-7'>{description}</p>
      </Spoiler>
    </section>
  );
};
