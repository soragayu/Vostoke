import Image from 'next/image';

type PaginationButtonProps = {
  src: string;
  width: number;
  height: number;
  children?: React.ReactNode; 
};

export default function PaginationButton({src, width, height, children}: PaginationButtonProps) {

    return (
        <div className='w-[100%] h-[30%] flex justify-center items-end'>
            {(src === '/Europa.png' || src === '/Luna.png') && <Image src={src} alt="Unknown" width={width} height={height} className='w-[45%] h-[100%]' />}
            <p className='w-[55%] p-12 text-[1.5rem]'>{children}</p>
            {(src === '/Io.png' || src === '/Kare.png') && <Image src={src} alt="Unknown" width={width} height={height} className='w-[45%] h-[100%]' />}
        </div>
    );

}