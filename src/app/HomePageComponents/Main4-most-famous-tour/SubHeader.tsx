import Link from 'next/link';

export default function Main4_subHeader() {
  return (
    <section className='mb-4 flex items-end justify-between gap-5 capitalize md:mb-5 xl:mb-6'>
      <div>
        <h2 className='md:text-h2 text-gray-dark 4xl:!leading-[48px] 4xl:!text-3xl text-xl font-bold capitalize !leading-8 md:!text-2xl lg:!leading-[48px]'>
          Most Famous Tours
        </h2>
        <p className='text-gray-dark text-secondary 4xl:text-lg text-sm font-normal capitalize leading-6 md:text-base'>
          Check our our most selling tours.
        </p>
      </div>
      <div>
        <Link
          className='text-gray-light inline-block whitespace-nowrap pr-4 text-sm font-bold leading-6 underline sm:pr-6 md:text-base lg:pr-0'
          href='/explore?filter=true&keyword=famous'
        >
          See More
        </Link>
      </div>
    </section>
  );
}
