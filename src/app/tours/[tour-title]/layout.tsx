import Header from '@/components/Header/Header';
import { searchQueryParams } from '@/lib/getQueryParams';
import { Database } from '@/types/database';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-dynamic';

export const generateMetadata = async (): Promise<Metadata> => {
  const siteUrl = headers().get('x-url');
  const tourRef = searchQueryParams({ fullUrl: siteUrl!, query: 'ref' });

  const supabase = createClientComponentClient<Database>();

  const { data: tourInfo, error } = await supabase
    .from('tour_info')
    .select('title, desc_short')
    .eq('ref', tourRef!)
    .single();

  if (error) {
    return {
      title: 'This page does not exist - Sally Tour',
      description:
        'Either you typed the wrong url or is temporary error. Please refresh or go back to the previous page.',
    };
  } else {
    const title = tourInfo.title;
    const description = tourInfo.desc_short;

    return {
      title: `${title} - Sally Tour`,
      description: description,
    };
  }
};

interface Props {
  children: React.ReactNode;
}

export default async function layout({ children }: Props) {
  const siteUrl = headers().get('x-url');
  const tourRef = searchQueryParams({ fullUrl: siteUrl!, query: 'ref' });

  const supabase = createClientComponentClient<Database>();

  const { data: tourInfo, error } = await supabase
    .from('tour_info')
    .select('title, desc_short')
    .eq('ref', tourRef!)
    .single();

  if (error) {
    notFound();
  }
  return (
    <>
      <Header />
      {children}
    </>
  );
}
