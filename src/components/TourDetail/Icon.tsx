import { cloneElement } from 'react';

interface Props<T> {
  icon: any;
  iconProps?: T;
}

export const Icon = ({
  icon,
  iconProps,
}: Props<{
  width?: number;
  height?: number;
  color?: string;
}>) => {
  return <div>{cloneElement(icon, iconProps)}</div>;
};
