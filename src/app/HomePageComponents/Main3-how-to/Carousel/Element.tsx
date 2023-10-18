interface Props {
  icon: React.JSX.Element;
  title: string;
  desc: string;
}

export default function Main3_Element({ icon, title, desc }: Props) {
  return (
    <section className='4xl:p-12 flex h-[260px] flex-col justify-start rounded-xl border-2 p-6 transition-all duration-500 sm:h-[230px] md:h-[240px]  lg:p-7'>
      <div className='4xl:h-[110px] 4xl:w-[70px] relative inline-flex aspect-auto h-16 w-10 object-contain transition-all duration-500 xl:h-[84px] xl:w-16'>
        {icon}
      </div>
      <h4 className='text-gray-dark 4xl:pt-9 pb-3 pt-8 text-lg font-bold leading-[34px] lg:text-xl xl:pt-6'>
        {title}
      </h4>
      <p className='text-gray-light 4xl:text-base 4xl:leading-7 text-sm font-normal capitalize leading-[22px] xl:leading-6'>
        {desc}
      </p>
    </section>
  );
}
