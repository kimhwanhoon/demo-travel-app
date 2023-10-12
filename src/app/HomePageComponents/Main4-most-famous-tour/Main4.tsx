import React from 'react';
import Main4_subHeader from './SubHeader';
import TourCard from './TourCard/TourCard';

export default function Main4() {
  return (
    <section className="group/section container-fluid mt-12 overflow-hidden lg:mt-16 px-6">
      <Main4_subHeader />
      <section className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:gap-y-10">
        <TourCard />
        <TourCard />
        <TourCard />
      </section>
    </section>
  );
}
