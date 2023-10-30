import { Icon } from '@/components/TourDetail/Icon';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
}

export const Tag = ({ icon, title }: Props) => {
  return (
    <div className='flex items-center gap-1 text-sm text-s-gray-800'>
      <Icon
        icon={icon}
        iconProps={{ width: 20, height: 20 }}
      />
      <span className=''>{title}</span>
    </div>
  );
};
