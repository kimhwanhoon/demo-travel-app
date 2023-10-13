'use client';

import React from 'react';
import Carousel from './Carousel';
import { Rating } from '@mantine/core';
import LikeButton from './LikeButton';

export default function TourCard() {
  const photoInfo = [
    {
      src: 'https://yixiibeskdkkasqanfly.supabase.co/storage/v1/object/public/tour-location-photos/Gyeonggi-do/Nami%20Island/20200727_445354F8D19438C0%20Large.jpeg',
      alt: 'nami',
    },
    {
      src: 'https://yixiibeskdkkasqanfly.supabase.co/storage/v1/object/public/tour-location-photos/Gyeonggi-do/Petite%20France/Screenshot%202023-02-28%20at%2010.57.09%20AM%20Medium.jpeg?t=2023-09-23T12%3A04%3A19.257Z',
      alt: 'petite',
    },
    {
      src: 'https://yixiibeskdkkasqanfly.supabase.co/storage/v1/object/public/tour-location-photos/Busan/2022031920220718360_l%20Large.jpeg',
      alt: 'busan',
    },
  ];
  return (
    <section className="relative flex flex-col px-6">
      <LikeButton />
      <Carousel photoInfo={photoInfo} />
      <h3 className="pt-3 font-bold antialiased">2N3D Seoul Nami Tour</h3>
      <div className="flex flex-col">
        <p className="text-[14px] subpixel-antialiased">
          The most famous tour.
        </p>
        <p className="text-gray-600 text-[13px]">Seoul, Nami Island</p>
      </div>
      <div className="flex items-center justify-between pt-1">
        <p className="text-[14px] font-bold ">
          $260
          <span className="font-normal tracking-wide text-[13px]">avg/day</span>
        </p>
        <div className="flex gap-1 items-center">
          <Rating
            defaultValue={4.5}
            fractions={2}
            color="red"
          />
          <span className="text-[12px] text-gray-600 cursor-pointer hover:underline underline-offset-[2.5px]">
            (12)
          </span>
        </div>
      </div>
    </section>
  );
}
