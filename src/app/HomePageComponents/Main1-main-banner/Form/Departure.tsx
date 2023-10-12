'use client';

import 'dayjs/locale/ko';
import { DatesProvider, DatePickerInput } from '@mantine/dates';
import { IconPlaneDeparture } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';

export default function Departure() {
  const date = dayjs();
  const currentYear = date.get('year');
  const currentMonth = date.get('month');
  const currentDay = date.get('date');

  return (
    <DatesProvider
      settings={{
        locale: 'en',
        firstDayOfWeek: 0,
        weekendDays: [0],
        timezone: 'UTC',
      }}
    >
      <DatePickerInput
        classNames={{ input: 'h-[40px]', root: 'mt-0' }}
        leftSection={<IconPlaneDeparture size={20} />}
        clearable
        label="Depature"
        placeholder="Pick date"
        minDate={new Date()}
        maxDate={new Date(currentYear + 1, currentMonth, currentDay)}
        renderDay={(date) => {
          const day = date.getDate();
          const today = new Date().getDate();
          return (
            <Indicator
              size={6}
              color="red"
              offset={-2}
              disabled={day !== today}
            >
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
      <DatePickerInput
        classNames={{ input: 'h-[40px]', root: 'mt-0' }}
        leftSection={<IconPlaneDeparture size={20} />}
        clearable
        label="Return"
        placeholder="Pick date"
        minDate={new Date()}
        maxDate={new Date(currentYear + 1, currentMonth, currentDay)}
      />
    </DatesProvider>
  );
}
