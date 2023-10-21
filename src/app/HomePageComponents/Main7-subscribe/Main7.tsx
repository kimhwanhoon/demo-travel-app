import Image from 'next/image';
import { Form } from './Form/Form';
import { MobileForm } from './Form/MobileForm';

export const Main7 = () => {
  return (
    <section className='animate-300 relative mt-10 flex h-[450px] items-center justify-center before:absolute before:right-0 before:z-[1] before:block before:h-full before:w-full before:bg-gradient-to-l before:from-black/50 sm:justify-end'>
      <Image
        className='object-cover '
        src={'/home/background/Nightscpe of Bongeunsa Temple.jpg'}
        alt='Nightscpe of Bongeunsa Temple'
        fill
      />
      <MobileForm />
      <Form />
    </section>
  );
};
