import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import React, { useState } from 'react';

export default function LikeButton() {
  const [isHeartHover, setIsHeartHover] = useState<boolean>(false);
  const [isHeartClicked, setIsHeartClicked] = useState<boolean>(false);
  return (
    <div className="absolute top-2 right-9 z-10">
      {!isHeartClicked ? (
        <ActionIcon
          variant="filled"
          aria-label="Gradient action icon"
          color="white"
          className="hover:bg-slate-100"
          onMouseEnter={() => setIsHeartHover(true)}
          onMouseLeave={() => setIsHeartHover(false)}
          onClick={() => setIsHeartClicked(true)}
        >
          <IconHeart
            className="p-[1.5px]"
            color="red"
            fill={isHeartHover ? 'red' : 'transparent'}
          />
        </ActionIcon>
      ) : (
        <ActionIcon
          variant="filled"
          aria-label="Gradient action icon"
          color="white"
          className="hover:bg-slate-100"
          onMouseEnter={() => setIsHeartHover(false)}
          onMouseLeave={() => setIsHeartHover(true)}
          onClick={() => setIsHeartClicked(false)}
        >
          <IconHeart
            className="p-[1.5px]"
            color="red"
            fill={'red'}
          />
        </ActionIcon>
      )}
    </div>
  );
}
