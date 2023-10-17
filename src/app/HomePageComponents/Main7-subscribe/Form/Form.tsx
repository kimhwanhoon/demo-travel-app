'use client';

import { Button, TextInput } from '@mantine/core';

export const Form = () => {
  return (
    <section className='animate-300 z-[1] mx-4 hidden w-[50%] max-w-[550px] flex-col gap-3 rounded-md bg-transparent px-4 py-6 text-center xs:py-10 sm:mr-10 sm:flex'>
      <h1 className='text-2xl font-bold tracking-[-0.3px] text-white'>
        Subscribe and get exclusive deals & offer
      </h1>
      <p className='px-2 text-base font-medium tracking-tight text-white'>
        Get discount coupons for your tour and get updated with tour places.
      </p>
      <form
        className='relative mt-8 flex w-full items-center'
        onSubmit={e => e.preventDefault()}
      >
        <TextInput
          className='absolute w-full'
          type='email'
          classNames={{ input: 'h-[50px] text-base' }}
          placeholder='your@email.com'
        />
        <Button
          className='absolute right-3 h-[40px] text-base font-semibold tracking-wide'
          variant='filled'
          type='submit'
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};
