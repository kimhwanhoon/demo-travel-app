import Image from 'next/image';
import React from 'react';
import Form from './Form/Form';

export default function Main1() {
  return (
    <section className='3xl:pb-[132px] 3xl:pt-[142px] 4xl:pl-[200px] relative flex h-screen min-h-full items-center justify-center px-4 pb-28 pt-48 before:absolute before:left-0 before:top-0 before:z-[1] before:block before:h-1/4 before:w-full before:bg-gradient-to-b before:from-black/60 sm:flex-none sm:justify-start sm:px-0 sm:pb-20 sm:pl-6 sm:pt-[120px] md:pl-16 '>
      <Image
        className='absolute aspect-[2/1] h-full bg-gray-500 object-cover'
        src={'/home/background/The Autumn of Deoksugung.jpg'}
        sizes='100vw'
        alt='bg'
        fill
        fetchPriority='high'
      />
      <Form />
    </section>
  );
}
