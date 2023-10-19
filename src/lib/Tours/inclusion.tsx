import {
  IconBaguette,
  IconCash,
  IconDoor,
  IconParking,
  IconShip,
  IconTicket,
} from '@tabler/icons-react';
import { FaShuttleVan } from 'react-icons/fa';
import { FaCarOn } from 'react-icons/fa6';
import { GrUserWorker } from 'react-icons/gr';
import { MdOutlineDinnerDining } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';

export const inclusionsGroup = [
  { id: 0, name: 'hotel pick up service', icon: <IconDoor /> },
  { id: 1, name: 'hotel pick drop off service', icon: <IconDoor /> },
  { id: 2, name: 'Transportation', icon: <FaShuttleVan /> },
  { id: 3, name: 'English speaking driver', icon: <FaCarOn /> },
  { id: 4, name: 'English speaking guide', icon: <GrUserWorker /> },
  { id: 5, name: 'Entrance fees', icon: <IconTicket /> },
  { id: 6, name: 'Nami Island ferry ride', icon: <IconShip /> },
  { id: 7, name: 'Parking fee', icon: <IconParking /> },
  { id: 8, name: 'Toll fee', icon: <IconTicket /> },
  { id: 9, name: 'breakfast', icon: <IconBaguette /> },
  { id: 10, name: 'lunch', icon: <PiBowlFood /> },
  { id: 11, name: 'dinner', icon: <MdOutlineDinnerDining /> },
  { id: 12, name: 'tax', icon: <IconCash /> },
];
