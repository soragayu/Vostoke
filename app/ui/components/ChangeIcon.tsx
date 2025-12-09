import Link from 'next/link';
import Image from 'next/image';

export default function PaginationButton({children}: {children?: React.ReactNode}) {

  return (
    <Link  href="/selectpage" className='w-[40%] h-[12%] relative flex justify-start items-center'>
      <Image src='/arrow.png' alt="Next" width={5000} height={3535} className='w-[100%] h-[100%]' />
      <span className='pl-4 absolute text-[rgba(250,250,250,1)] text-[0.7rem]'>{children}</span>
    </Link>
  );

}