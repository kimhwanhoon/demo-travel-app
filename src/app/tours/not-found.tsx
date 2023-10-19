import Header from '@/components/Header/Header';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'This page does not exist - Sally Tour',
  description:
    'Either you typed the wrong url or is temporary error. Please refresh or go back to the previous page.',
};

const NotFound = () => {
  return (
    <>
      <Header />
      <main className='flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4  px-5'>
        <h1 className='text-2xl'>This page does not exist!</h1>
        <h2 className='text-md text-center text-gray-600'>
          Either you typed the wrong url or is temporary error. Please refresh
          or go back to the previous page.
        </h2>
        <Link
          className='rounded-md bg-slate-500 px-4 py-2 text-white shadow-sm shadow-gray-400 hover:bg-slate-600'
          href={'/'}
        >
          Back to Main Page
        </Link>
      </main>
    </>
  );
};

export default NotFound;
