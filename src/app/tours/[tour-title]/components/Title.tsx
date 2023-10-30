import { Anchor, Breadcrumbs, Text, Title as TitleText } from '@mantine/core';
import { IconChevronRight, IconMap } from '@tabler/icons-react';
import Link from 'next/link';
import { Tag } from './tags/Tag';
import { ReactNode } from 'react';

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
          className='font-semibold capitalize tracking-tight'
          href={'#'}
          size='sm'
        >
          {type}
        </Anchor>
        <Anchor
          className='font-semibold capitalize tracking-tight'
          href={'#'}
          size='sm'
        >
          {cat1}
        </Anchor>
        <Anchor
          className='capitalize tracking-tight'
          href={'#'}
          size='sm'
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
        <Tag
          icon={<IconMap />}
          title={travelArea}
        />
        {/* <Text
          c={'dimmed'}
          size='sm'
          className='xs:text-base'
        >
          <IconMap className='inline-block h-6 w-6' />
          {}
        </Text> */}
      </div>
    </section>
  );
};
