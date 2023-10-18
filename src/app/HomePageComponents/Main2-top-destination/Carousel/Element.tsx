import { CarouselContent } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Element({ href, src, title, desc }: CarouselContent) {
  return (
    <Link
      className='group/item 2xl:h-[420px] 4xl:h-[500px] relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl after:absolute  after:bottom-0 after:h-[25%] after:w-full after:bg-opacity-20 after:bg-gradient-to-t after:from-[#11111199] after:to-[#11111100] lg:h-[380px]'
      href={href}
    >
      <Image
        alt={title}
        src={src}
        fill
        className='bg-gray-lighter relative z-0 rounded-xl object-fill transition-all duration-500 group-hover/item:scale-110'
        sizes='(min-width: 320) 100vw, 100vw'
      />
      <div className='3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12 relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7'>
        <h3 className='3xl:text-2xl text-xl font-bold leading-7 text-white'>
          {title}
        </h3>
        <p className='3xl:pt-1.5 4xl:text-lg text-sm font-normal leading-7 text-white lg:text-base'>
          {desc}
        </p>
      </div>
    </Link>
  );
}
