import TourCard from '../HomePageComponents/Main4-most-famous-tour/TourCard/TourCard';
import Main6_subHeader from './SubHeader';

export const Main6 = () => {
  return (
    <section className='limit-max-width mt-12 px-4 sm:px-6 lg:mt-16 '>
      <Main6_subHeader />
      <section className='3xl:gap-y-10 grid grid-cols-1 gap-x-5 gap-y-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </section>
    </section>
  );
};
