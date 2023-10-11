'use client';

import React, { useState } from 'react';
import ComboBox from './Combobox';
import DatePickerInput from './DatePickerInput';
import { Button, Checkbox } from '@mantine/core';

export default function Form() {
  const [isOnedayTour, setIsOnedayTour] = useState<boolean>(false);
  return (
    <form
      action=""
      className="relative z-[2] w-full max-w-[450px] rounded-lg bg-white p-6 py-10 shadow-2xl sm:m-0 sm:max-w-[380px] sm:p-7 sm:pt-9 md:max-w-[400px] md:shadow-none lg:rounded-xl xl:max-w-[460px] xl:p-9 4xl:max-w-[516px] 4xl:p-12"
    >
      <h1 className="font-bold text-lg mb-2">Discover Your Favorite Place</h1>
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
          defaultChecked
          label="One day tour?"
          description="choose to find one day tours only"
          checked={isOnedayTour}
          onChange={() => setIsOnedayTour(!isOnedayTour)}
        />
        <Button className="h-[40px]">Submit</Button>
      </section>
    </form>
  );
}
