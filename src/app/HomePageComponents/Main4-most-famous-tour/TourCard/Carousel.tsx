/* eslint-disable @next/next/no-img-element */
import { Carousel as MantineCarousel } from '@mantine/carousel';
import classes from './Carousel.module.css';
import { useRouter } from 'next/navigation';
import LikeButton from './LikeButton';

interface Props {
  photoInfo: Array<{
    src: string;
    alt: string;
  }>;
}

export default function Carousel({ photoInfo }: Props) {
  const router = useRouter();

  return (
    <MantineCarousel
      withIndicators
      containScroll="trimSnaps"
      className="relative overflow-hidden rounded-xl max-h-[300px]"
      classNames={classes}
      align="start"
    >
      {photoInfo.map((photo) => (
        <MantineCarousel.Slide key={photo.alt}>
          <div
            onClick={(e: any) => {
              if (
                e.target?.nodeName === 'path' ||
                e.target?.nodeName === 'svg'
              ) {
                return;
              } else {
                router.push('#');
              }
            }}
            className="relative"
          >
            <img
              className="w-full h-full rounded-lg"
              src={photo.src}
              alt={photo.alt}
            />
          </div>
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}
