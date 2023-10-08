import {
  Icon24Hours,
  IconCar,
  IconColorFilter,
  IconColorPicker,
  IconLuggage,
  IconSnowflake,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

export const menuGroup_Transportation = [
  {
    title: 'Transportation',
    icon: (
      <IconCar
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'transportation',
  },
];

export const menuGroup_Tours = [
  {
    title: 'Day Tour',
    icon: (
      <Icon24Hours
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'day-tour',
  },
  {
    title: 'Package Tour',
    icon: (
      <IconLuggage
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'package-tour',
  },
  {
    title: 'Ski Tour',
    icon: (
      <IconSnowflake
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'ski-tour',
  },
  {
    title: 'Theme Tour',
    icon: (
      <IconColorFilter
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'theme-tour',
  },
];

export const menuGroup_Customized = [
  {
    title: 'Customize Your Tour',
    icon: (
      <IconColorPicker
        size={20}
        color="#444"
        stroke={1.6}
      />
    ),
    href: 'customized-tour',
  },
];

export type MenuGroup = {
  title: string;
  icon: ReactNode;
  href: string;
};
