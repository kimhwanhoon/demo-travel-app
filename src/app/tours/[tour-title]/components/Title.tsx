import { Anchor, Breadcrumbs, Text, Title as TitleText } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';

interface Props {
  titleProps: {
    type: string;
    cat1: string;
    cat2: string;
    title: string;
    travelArea: string;
  };
}

export const Title = ({
  titleProps: { type, cat1, cat2, title, travelArea },
}: Props) => {
  return (
    <section className='mt-4 px-4 sm:px-6'>
      <Breadcrumbs
        separator={<IconChevronRight size={16} />}
        separatorMargin={3}
      >
        <Anchor
          component={Link}
          className='text-base font-semibold capitalize tracking-tight'
          href={'#'}
        >
          {type}
        </Anchor>
        <Anchor
          className='text-base font-semibold capitalize tracking-tight'
          href={'#'}
        >
          {cat1}
        </Anchor>
        <Anchor
          className='text-base font-semibold capitalize tracking-tight'
          href={'#'}
        >
          {cat2}
        </Anchor>
      </Breadcrumbs>
      <div>
        <TitleText
          size={'h2'}
          className='my-3 tracking-[-0.02rem] xs:my-3 xs:text-2xl sm:text-3xl'
        >
          {title}
        </TitleText>
      </div>
      <div>
        <Text
          c={'dimmed'}
          size='sm'
          className='xs:text-base'
        >
          <span className='font-bold '>Travel Area:</span> {travelArea}
        </Text>
      </div>
    </section>
  );
};
