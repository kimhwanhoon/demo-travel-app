import { Title } from '@mantine/core';

interface Props {
  itinerary: string;
}

export const Itinerary = ({ itinerary }: Props) => {
  return (
    <section className='mt-10 px-4 sm:px-6'>
      <Title
        order={2}
        size={'h3'}
      >
        Itinerary
      </Title>
      <div className='mt-4 grid grid-cols-1 gap-y-4'>{itinerary}</div>
    </section>
  );
};
