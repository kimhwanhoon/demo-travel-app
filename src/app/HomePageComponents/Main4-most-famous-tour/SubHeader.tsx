import Link from 'next/link';

export default function Main4_subHeader() {
  return (
    <section className="flex justify-between capitalize items-end mb-4 md:mb-5 xl:mb-6 gap-5 px-6">
      <div>
        <h2 className="md:text-h2 font-bold text-gray-dark text-xl capitalize !leading-8 md:!text-2xl lg:!leading-[48px] 4xl:!leading-[48px] 4xl:!text-3xl">
          Most Famous Tours
        </h2>
        <p className="text-gray-dark text-sm md:text-base font-normal capitalize leading-6 text-secondary 4xl:text-lg">
          Check our our most selling tours.
        </p>
      </div>
      <div>
        <Link
          className="inline-block whitespace-nowrap pr-4 text-sm font-bold leading-6 text-gray-light underline sm:pr-6 md:text-base lg:pr-0"
          href="/explore?filter=true&keyword=famous"
        >
          See More
        </Link>
      </div>
    </section>
  );
}
