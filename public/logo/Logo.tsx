import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src={'/logo/logo.png'}
      alt="Sally Tour Logo"
      width={120}
      height={80}
    />
  );
}
