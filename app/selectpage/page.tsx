import Charaselect from '@/app/ui/components/Charaselect';

export default function SelectPage() {
  return (
    <div className='bg-[url("/background2.png")] bg-cover bg-center max-w-[414px] h-auto mx-auto p-15 box-border flex flex-col justify-start items-start gap-5'>
        <h1 className='self-center text-[2vw]'>キャラ選択</h1>
        <Charaselect src='/Europa.png' width={1968} height={3500}>Europa</Charaselect>
        <Charaselect src='/Io.png' width={2000} height={3500}>Io</Charaselect>
        <Charaselect src='/Luna.png' width={1500} height={3500}>Luna</Charaselect>
        <Charaselect src='/Kare.png' width={2000} height={3500}>Kare</Charaselect>
    </div>
  );
}