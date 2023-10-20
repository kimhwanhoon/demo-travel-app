import {
  IconBaguette,
  IconCash,
  IconDoor,
  IconParking,
  IconShip,
  IconTicket,
  IconAerialLift,
  IconHome2,
  TablerIconsProps,
} from '@tabler/icons-react';
import { FaShuttleVan } from 'react-icons/fa';
import { FaCarOn } from 'react-icons/fa6';
import { GrUserWorker } from 'react-icons/gr';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { AiOutlineSkin } from 'react-icons/ai';
import { GiHelmet, GiSnowboard, GiWinterGloves } from 'react-icons/gi';
import { PiBowlFood, PiGogglesLight } from 'react-icons/pi';
import { ReactNode } from 'react';

interface Icons {
  [key: string]: ReactNode;
}

const icons: Icons = {
  IconDoor: <IconDoor />,
  FaShuttleVan: <FaShuttleVan />,
  FaCarOn: <FaCarOn />,
  GrUserWorker: <GrUserWorker />,
  IconShip: <IconShip />,
  IconParking: <IconParking />,
  IconTicket: <IconTicket />,
  MdOutlineDinnerDining: <MdOutlineDinnerDining />,
  IconHome2: <IconHome2 />,
  IconBaguette: <IconBaguette />,
  PiBowlFood: <PiBowlFood />,
  IconCash: <IconCash />,
  IconAerialLift: <IconAerialLift />,
  AiOutlineSkin: <AiOutlineSkin />,
  GiSnowboard: <GiSnowboard />,
  GiWinterGloves: <GiWinterGloves />,
  PiGogglesLight: <PiGogglesLight />,
  GiHelmet: <GiHelmet />,
};

interface Props {
  iconName: string;
}

export const TourIcon = ({ iconName }: Props) => icons[iconName] ?? <></>;
