import { TourIcon } from '@/lib/Tours/TourIcon';
import { Database } from '@/types/database';
import { Popover, PopoverDropdown, PopoverTarget, Title } from '@mantine/core';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface Props {
  exclusions: Database['public']['Tables']['tour_info']['Row']['exclusions'];
}

export const Exclusions = async ({ exclusions }: Props) => {
  const supabase = createClientComponentClient<Database>();
  const { data: tour_exclusions } = await supabase
    .from('tour_exclusions')
    .select('*');

  const content = exclusions.map(id => {
    const target = tour_exclusions!.filter(
      exclusionFromDB => exclusionFromDB.id === id,
    )[0];
    return (
      <div
        key={target.id}
        className='flex items-center gap-2'
      >
        <div className='relative flex h-7 w-7 items-center justify-center rounded-md border border-s-gray-700 p-1 text-s-gray-700'>
          <TourIcon iconName={target.icon} />
          <div className='absolute h-px w-full -rotate-45 transform bg-s-gray-700'></div>
        </div>
        <span className='text-sm font-medium capitalize leading-4'>
          {target.title}{' '}
          {target.popover && (
            <Popover
              width={200}
              position='bottom'
              withArrow
              shadow='md'
            >
              <PopoverTarget>
                <span className='cursor-pointer tracking-widest underline-offset-4 hover:underline'>
                  {'[?]'}
                </span>
              </PopoverTarget>
              <PopoverDropdown>
                <p className='text-sm'>{target.popover}</p>
              </PopoverDropdown>
            </Popover>
          )}
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
        Exclusions
      </Title>
      <div className='mt-4 grid grid-cols-2 gap-y-4 md:grid-cols-3'>
        {content}
      </div>
    </section>
  );
};
