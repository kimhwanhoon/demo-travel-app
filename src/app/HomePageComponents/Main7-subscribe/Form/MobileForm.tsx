'use client';

import { Button, TextInput, useMantineColorScheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';

export const MobileForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const { colorScheme } = useMantineColorScheme();
  const [backgroundColor, setBackgroundColor] = useState<string>('bg-white');
  useEffect(() => {
    colorScheme === 'light'
      ? setBackgroundColor('bg-white')
      : setBackgroundColor('bg-gray-800');
  }, [colorScheme]);

  return (
    <form
      className={`z-[1] mx-4 flex w-full max-w-[500px] flex-col gap-3 rounded-md  px-4 py-6 text-center xs:py-8 sm:hidden ${backgroundColor}`}
      onSubmit={form.onSubmit(values => console.log(values))}
    >
      <h1 className='text-2xl font-bold tracking-[-0.3px]'>
        Subscribe and get exclusive deals & offer
      </h1>
      <p className='tracking-tight '>
        Get discount coupons for your tour and get updated with tour places.
      </p>
      <TextInput
        classNames={{ input: 'h-[50px] text-base' }}
        placeholder='your@email.com'
        {...form.getInputProps('email')}
      />
      <Button
        variant='filled'
        type='submit'
        className='h-[50px] text-lg font-semibold tracking-wide'
      >
        Subscribe
      </Button>
    </form>
  );
};
