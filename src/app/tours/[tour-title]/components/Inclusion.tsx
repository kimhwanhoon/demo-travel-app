import { inclusionsGroup } from '@/lib/Tours/inclusion';
import { ActionIcon, Title } from '@mantine/core';

interface Props {
  inclusions: Array<number>;
}

export const Inclusion = ({ inclusions }: Props) => {
  const content = inclusions.map(idFromDB => {
    const target = inclusionsGroup.filter(
      inclusionFromLib => inclusionFromLib.id === idFromDB,
    )[0];
    return (
      <div
        key={target.id}
        className='flex items-center gap-2'
      >
        <div className='flex h-7 w-7 items-center justify-center rounded-md border border-s-gray-700 p-1 text-s-gray-700'>
          {target.icon}
        </div>

        <span className='text-sm font-medium capitalize leading-5'>
          {target.name}
        </span>
      </div>
    );
  });
  return (
    <section className='mt-10 px-4 sm:px-6'>
      <Title
        order={2}
        size={'h3'}
      >
        Inclusion
      </Title>
      <div className='mt-4 grid grid-cols-2 gap-y-4 md:grid-cols-3'>
        {content}
      </div>
    </section>
  );
};
