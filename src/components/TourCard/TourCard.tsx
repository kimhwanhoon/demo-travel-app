'use client';

import React from 'react';
import Carousel from './Carousel';
import { Rating } from '@mantine/core';
import LikeButton from './LikeButton';
import { TourCard } from '@/types/types';
import { createURLFriendlyURL } from '@/lib/createURLFriendlyURL';

export default function TourCard({
  tourRef,
  photoInfo,
  title,
  desc,
  tourPlaces,
  priceFrom,
}: TourCard) {
  const newUrl = createURLFriendlyURL(title);

  return (
    <section className='relative flex flex-col'>
      <LikeButton />
      <Carousel
        photoInfo={photoInfo}
        href={newUrl}
        tourRef={tourRef}
      />
      <h3 className='pt-3 font-bold'>{title}</h3>
      <div className='flex flex-col'>
        <p className='mb-2 line-clamp-2 text-[14px]'>{desc}</p>
        <p className='text-[13px] text-gray-600'>{tourPlaces}</p>
      </div>
      <div className='flex items-center justify-between pt-1'>
        <p className='text-[14px] font-bold '>
          <span className='text-[13px] font-normal tracking-wide'>From $ </span>
          {priceFrom}
        </p>
        <div className='flex items-center gap-1'>
          <Rating
            readOnly
            defaultValue={4.5}
            fractions={2}
            color='red'
          />
          <span className='cursor-pointer text-[12px] text-gray-600 underline-offset-[2.5px] hover:underline'>
            (12)
          </span>
        </div>
      </div>
    </section>
  );
}
