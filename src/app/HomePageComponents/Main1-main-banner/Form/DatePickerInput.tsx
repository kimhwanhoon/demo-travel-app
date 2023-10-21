'use client';

import 'dayjs/locale/ko';
import {
  DatesProvider,
  DatePickerInput as MantineDatePickerInput,
} from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';

interface Props {
  type: 'Departure' | 'Return';
}

export default function DatePickerInput({ type }: Props) {
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
      <MantineDatePickerInput
        classNames={{ input: 'h-[40px]' }}
        leftSection={<IconCalendar size={20} />}
        clearable
        placeholder={`${type} date`}
        minDate={new Date()}
        maxDate={new Date(currentYear + 1, currentMonth, currentDay)}
        renderDay={date => {
          const day = date.getDate();
          const today = new Date().getDate();
          return (
            <Indicator
              size={6}
              color='cyan'
              offset={-1}
              disabled={day !== today}
            >
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </DatesProvider>
  );
}
