import { Button } from '@mantine/core';
import { IconStarFilled } from '@tabler/icons-react';

interface Props {
  priceFrom: number;
}

export const FooterBar = ({ priceFrom }: Props) => {
  return (
    <>
      <div className='h-[75px]'></div>
      <section className='fixed bottom-0 left-0 right-0 flex h-[75px] w-full items-center justify-between bg-white px-4 py-3 shadow-upper'>
        <div className='flex flex-col gap-1'>
          <h6 className='font-semibold'>
            <span>From </span>
            <span className='tracking-wide'>${priceFrom}</span>
            <span> / day</span>
          </h6>
          <div className='flex items-center gap-2'>
            <IconStarFilled size={18} />
            <span className='text-sm font-medium'>4.5</span>
            <span className='text-sm tracking-wide'>{`(35 reviews)`}</span>
          </div>
        </div>
        <Button
          variant='gradient'
          gradient={{ from: 'indigo', to: 'blue', deg: 90 }}
          className='text-base '
          classNames={{ label: 'font-bold px-3' }}
          size='md'
        >
          Book
        </Button>
      </section>
    </>
  );
};
