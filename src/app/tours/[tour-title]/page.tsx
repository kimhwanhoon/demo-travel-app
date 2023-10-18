import Header from '@/components/Header/Header';
import { Database } from '@/types/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import React from 'react';

interface Props {
  searchParams: { ref: string };
}

export default async function TourDetailPage({
  searchParams: { ref: tourRef },
}: Props) {
  // console.log(tourRef);
  const supabase = createClientComponentClient<Database>();

  // const { data: tourInfo, error } = await supabase
  //   .from('tour_info')
  //   .select('title, desc_short')
  //   .eq('ref', tourRef!)
  //   .single();

  return <main className='limit-max-width mt-[70px]'>TourDetailPage</main>;
}
