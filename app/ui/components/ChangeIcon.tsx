'use client';
import Image from 'next/image';

export default function PaginationButton() {

  return (
    <button className='w-[30%] h-[12%]'>
      <Image src='/arrow.png' alt="Next" width={5000} height={3535} className='w-[100%] h-[100%]' />
    </button>
  );

}