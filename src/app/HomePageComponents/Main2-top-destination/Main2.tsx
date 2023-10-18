import React from 'react';
import Main2_subHeader from './SubHeader';
import Main2_carousel from './Carousel/Carousel';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/public.db';

export async function Main2() {
  const supabase = createClientComponentClient<Database>();
  const { data: top_destination, error } = await supabase
    .from('top_destination')
    .select('*');

  return (
    <section className='limit-max-width mt-12 px-4 sm:pl-6 lg:mt-16'>
      <Main2_subHeader />
      <Main2_carousel top_destination={top_destination!} />
    </section>
  );
}
