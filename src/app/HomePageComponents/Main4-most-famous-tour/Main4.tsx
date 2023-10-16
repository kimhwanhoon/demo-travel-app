import React from 'react';
import Main4_subHeader from './SubHeader';
import TourCard from './TourCard/TourCard';

export default function Main4() {
  return (
    <section className='limit-max-width mt-12 px-4 sm:pl-6 lg:mt-16 '>
      <Main4_subHeader />
      <section className='3xl:gap-y-10 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <TourCard />
        <TourCard />
        <TourCard />
      </section>
    </section>
  );
}
