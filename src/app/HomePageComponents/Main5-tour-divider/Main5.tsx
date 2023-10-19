import { Button } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

export const Main5 = () => {
  return (
    <section className='limit-max-width 2xl:px-7 3xl:px-8 4xl:px-16 my-12  px-0 md:px-6 lg:my-16'>
      <div className='3xl:px-32 3xl:py-20 4xl:px-40 4xl:py-[88px] 4xl:!py-[132px] relative from-black/10 to-black/60 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-gradient-to-b md:px-12 md:py-12 md:before:rounded-2xl md:before:bg-gradient-to-r lg:px-14 xl:px-20 xl:py-16 xl:before:hidden '>
        <Image
          className='md:rounded-xl'
          src='/home/background/Seoul City Wall.jpg'
          fill
          alt=''
        />
        <div className='relative z-20 m-auto flex max-w-[450px] flex-col justify-center px-8 py-9 md:ml-0 md:justify-start md:px-0 md:py-0 xl:max-w-[513px]'>
          <h2 className='3xl:text-5xl mb-3 text-center text-2xl font-bold text-white md:text-left md:text-3xl xl:mb-6'>
            Your Comfort, Our Priority
          </h2>
          <p className='3xl:text-lg mb-7 text-center text-sm leading-[1.78] text-white md:text-left md:text-base xl:mb-10'>
            Discover and book your ideal Korean journey with our premier travel
            agency.
          </p>
          <Button
            component={Link}
            variant='white'
            className='m-auto px-9 py-3 font-semibold md:ml-0'
            href='/explore'
          >
            Explore tours
          </Button>
        </div>
      </div>
    </section>
  );
};
