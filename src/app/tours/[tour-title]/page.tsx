import Header from '@/components/Header/Header';
import { Database } from '@/types/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';
import { PhotoGallery } from './components/PhotoGallery/PhotoGallery';

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

  return (
    <main className='limit-max-width mt-[70px]  '>
      <PhotoGallery photoUrl={tourInfo?.photo_url!} />
    </main>
  );
}
