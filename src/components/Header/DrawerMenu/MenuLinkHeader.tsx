import { UnstyledButton } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

interface Props {
  groupTitle: string;
  toggleLinkGroup: () => void;
}

export default function MenuLinkHeader({ groupTitle, toggleLinkGroup }: Props) {
  return (
    <>
      <UnstyledButton onClick={toggleLinkGroup}>
        <div className='flex items-center gap-1'>
          <span>{groupTitle}</span>
          <IconChevronDown className='h-4 w-4' />
        </div>
      </UnstyledButton>
    </>
  );
}
