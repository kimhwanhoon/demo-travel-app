import React from 'react';
import Main3_subHeader from './SubHeader';
import Main3_Carousel from './Carousel/Carousel';

export default function Main3() {
  return (
    <section className='limit-max-width mt-12 px-4 sm:px-6 lg:mt-16 '>
      <Main3_subHeader />
      <Main3_Carousel />
    </section>
  );
}
