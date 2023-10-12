import { CarouselContent } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

export default function Element({ href, src, title, desc }: CarouselContent) {
  return (
    <Link
      className="group/item relative flex aspect-auto h-[340px] w-full flex-col overflow-hidden rounded-xl lg:h-[380px] 2xl:h-[420px] 4xl:h-[500px]  after:absolute after:bottom-0 after:w-full after:h-[25%] after:bg-gradient-to-t after:to-[#11111100] after:from-[#11111199] after:bg-opacity-20"
      href={href}
    >
      <Image
        alt={title}
        src={src}
        fill
        decoding="async"
        className="relative z-0 rounded-xl bg-gray-lighter object-cover transition-all duration-500 group-hover/item:scale-110"
        sizes="(min-width: 320) 100vw, 100vw"
      />
      <div className="relative z-10 mt-auto px-6 pb-6 md:px-7 md:pb-7 3xl:px-9 3xl:pb-9 4xl:px-12 4xl:pb-12">
        <h3 className="text-xl font-bold leading-7 text-white 3xl:text-2xl">
          {title}
        </h3>
        <p className="text-sm font-normal leading-7 text-white lg:text-base 3xl:pt-1.5 4xl:text-lg">
          {desc}
        </p>
      </div>
    </Link>
  );
}
