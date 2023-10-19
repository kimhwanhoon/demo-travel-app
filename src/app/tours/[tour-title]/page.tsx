import { Database } from '@/types/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery';
import { Title } from './components/Title';
import { Divider } from '@mantine/core';
import { Description } from './components/Description';
import { Inclusion } from './components/Inclusion';

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
    <main className='limit-max-width'>
      <PhotoGallery photoUrl={tourInfo?.photo_url!} />
      <Title titleProps={titleProps} />
      <Divider
        my='md'
        className='mx-4'
      />
      <Description description={tourInfo?.desc_long as string} />
      <Inclusion inclusions={tourInfo?.inclusions as number[]} />
      <Divider
        my='sm'
        className='mx-4'
      />
      <div className='py-5'></div>
    </main>
  );
}
