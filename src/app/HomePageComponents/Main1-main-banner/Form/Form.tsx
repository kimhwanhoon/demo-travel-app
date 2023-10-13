'use client';

import React, { useEffect, useState } from 'react';
import ComboBox from './Combobox';
import DatePickerInput from './DatePickerInput';
import { Button, Checkbox, useMantineColorScheme } from '@mantine/core';

export default function Form() {
  const [isOnedayTour, setIsOnedayTour] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('bg-white');
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    colorScheme === 'light'
      ? setBackgroundColor('bg-white')
      : setBackgroundColor('bg-gray-800');
  }, [colorScheme]);
  return (
    <form
      action=""
      className={`relative w-full max-w-[400px] rounded-lg  p-6 py-10 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12 ${backgroundColor}`}
    >
      <h1 className="font-extrabold subpixel-antialiased text-xl mb-3 ">
        Discover Your Favorite Place
      </h1>
      <section className="flex flex-col gap-3">
        <ComboBox />
        <DatePickerInput
          key="Departure"
          type="Departure"
        />
        {!isOnedayTour && (
          <DatePickerInput
            key="Return"
            type="Return"
          />
        )}
        <Checkbox
          classNames={{
            description: 'cursor-text',
            label: 'cursor-pointer',
            input: 'cursor-pointer',
          }}
          label="I'm looking for one day tour."
          description="choose to find one day tours only"
          checked={isOnedayTour}
          onChange={() => setIsOnedayTour(!isOnedayTour)}
        />
        <Button className="h-[40px] animate-300">Submit</Button>
      </section>
    </form>
  );
}
