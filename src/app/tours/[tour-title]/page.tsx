import { Database } from '@/types/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery';
import { Title } from './components/Title';
import { Divider } from '@mantine/core';
import { Description } from './components/Description';
import { Inclusions } from './components/Inclusions';
import { Exclusions } from './components/Exclusions';
import { FooterBar } from './components/FooterBar';
import { Itinerary } from './components/Itinerary';

interface Props {
  searchParams: { ref: string };
}

export default async function TourDetailPage({
  searchParams: { ref: tourRef },
}: Props) {
  const supabase = createClientComponentClient<Database>();

  const { data: tourInfo } = await supabase
    .from('tour_info')
    .select('*')
    .eq('ref', tourRef)
    .eq('is_public', true)
    .single();
  // console.log(tourInfo);

  const titleProps = {
    type: tourInfo?.type as string,
    cat1: tourInfo?.category1 as string,
    cat2: tourInfo?.category2 as string,
    title: tourInfo?.title as string,
    travelArea: tourInfo?.travel_area as string,
  };

  return (
    <main className='limit-max-width '>
      <PhotoGallery photoUrl={tourInfo?.photo_url!} />
      <Title titleProps={titleProps} />
      <Divider
        my='md'
        className='mx-4'
      />
      <Description description={tourInfo?.desc_long as string} />
      <Inclusions inclusions={tourInfo?.inclusions as number[]} />
      <Divider
        my='sm'
        className='mx-4'
      />
      <Exclusions exclusions={tourInfo?.exclusions as number[]} />
      <Divider
        my='sm'
        className='mx-4'
      />
      <Itinerary itinerary={tourInfo?.itinerary as string} />
      <div className='py-5'></div>
      <FooterBar priceFrom={tourInfo?.price_from as number} />
    </main>
  );
}
