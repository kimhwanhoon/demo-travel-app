import {
  Icon24Hours,
  IconCar,
  IconColorFilter,
  IconColorPicker,
  IconLuggage,
  IconSnowflake,
  TablerIconsProps,
} from '@tabler/icons-react';
import { ReactNode } from 'react';

export const menuGroup_Transportation = [
  {
    title: 'Transportation',
    icon: IconCar,
    href: 'transportation',
    desc: 'Transportation services including van, mini-bus, and bus',
  },
];

export const menuGroup_Tours = [
  {
    title: 'Day Tour',
    icon: Icon24Hours,
    href: 'day-tour',
    desc: 'One day tours',
  },
  {
    title: 'Package Tour',
    icon: IconLuggage,
    href: 'package-tour',
    desc: 'Package tours from 2 days to 2 weeks',
  },
  {
    title: 'Ski Tour',
    icon: IconSnowflake,
    href: 'ski-tour',
    desc: 'Ski tours with various locations',
  },
  {
    title: 'Theme Tour',
    icon: IconColorFilter,
    href: 'theme-tour',
    desc: 'Various types of themed tours',
  },
];

export const menuGroup_Customized = [
  {
    title: 'Customize Your Tour',
    icon: IconColorPicker,
    href: 'customized-tour',
    desc: 'Customize your own tour with our tour operator. cost free to get your consultation',
  },
];

export type MenuGroup = {
  title: string;
  icon: (props: TablerIconsProps) => JSX.Element;
  href: string;
  desc: string;
};
