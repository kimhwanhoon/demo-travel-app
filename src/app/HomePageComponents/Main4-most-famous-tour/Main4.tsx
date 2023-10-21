import React from 'react';
import Main4_subHeader from './SubHeader';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database';
import TourCard from '@/components/TourCard/TourCard';

export async function Main4() {
  const supabase = createClientComponentClient<Database>();

  const { data: tours, error } = await supabase
    .from('tour_info')
    .select('*')
    .eq('is_famous', true);

  const content = tours!.map(tour => {
    const photoInfo = tour.photo_url!.map(photo => {
      return { src: photo, alt: photo };
    });
    return (
      <TourCard
        key={tour.id}
        tourRef={tour.ref.toString()}
        title={tour.title!}
        desc={tour.desc_short!}
        photoInfo={photoInfo}
        priceFrom={tour.price_from}
        tourPlaces={tour.travel_area!}
      />
    );
  });

  return (
    <section className='limit-max-width mt-12 px-4 sm:px-6 lg:mt-16 '>
      <Main4_subHeader />
      <section className='3xl:gap-y-10 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {content}
      </section>
    </section>
  );
}
