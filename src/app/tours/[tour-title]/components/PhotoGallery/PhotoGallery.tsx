'use client';

import { Button } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { IconGridDots } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

interface Props {
  photoUrl: string[];
}

export const PhotoGallery = ({ photoUrl }: Props) => {
  const { ref, height } = useElementSize();

  const content = photoUrl.map((src, index) => {
    switch (index) {
      default:
        return;
      case 0:
        return (
          <div className='relative col-span-8 row-span-2 rounded-lg bg-slate-400 xs:col-span-5 xs:overflow-hidden '>
            <Image
              className='object-cover'
              src={src}
              alt={src}
              fill
            />
          </div>
        );
      case 1:
        return (
          <div className='relative rounded-lg bg-slate-600 xs:col-span-3 xs:overflow-hidden'>
            <Image
              className='object-cover'
              src={src}
              alt={src}
              fill
            />
          </div>
        );
      case 2:
        return (
          <div className='relative rounded-lg bg-slate-800 xs:col-span-3 xs:overflow-hidden'>
            <Image
              className='object-cover'
              src={src}
              alt={src}
              fill
            />
          </div>
        );
    }
  });

  return (
    <section
      ref={ref}
      className='animate-300 relative mt-[60px] h-[350px] xs:mt-[80px] xs:h-[400px] xs:px-4 sm:mt-[90px] sm:h-[450px] sm:px-6 lg:h-[500px] xl:h-[600px]'
    >
      <div className='grid h-full grid-cols-8 grid-rows-2 gap-2'>{content}</div>
      <div className='sm: absolute bottom-4 right-3 xs:bottom-2 xs:right-6 sm:right-8'>
        <Button
          size={height >= 450 ? 'md' : 'sm'}
          variant='default'
          leftSection={<IconGridDots />}
        >
          More photos
        </Button>
      </div>
    </section>
  );
};
