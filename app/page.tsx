import Changeicon from '@/app/ui/components/ChangeIcon';

export default function Home() {
  return (
    <>
      <div className='bg-[url("/title.jpg")] bg-cover bg-center max-w-[414px] h-[100vh] mx-auto flex justify-center items-center'></div>
      <div className='bg-[rgba(0,0,0,1)] max-w-[414px] h-[10vh] mx-auto'></div>
      <div className='bg-[url("/background.png")] bg-cover bg-center max-w-[414px] h-[100vh] mx-auto p-15 pt-30 box-border flex flex-col justify-center items-center gap-5'>
        <p className='text-[0.7rem]'>
          私たちは――人類史上初の〈深宇宙有人航行計画〉に選ばれた、たった四人の宇宙飛行士。<br />
          名前は、ルナ、カレン、イオ、エウロパ。<br />
          長年の夢だった宇宙旅行は、いままさに最高潮を迎えるはずだった。<br /><br />
          出発からほどなくして、船内に鋭いアラームが響き渡る。<br />
          赤い警告灯が点滅し、冷たく乾いた電子音が鼓膜を刺す。<br />
          原因は不明。<br />
          このままでは任務どころか、地球への帰還さえ危うい。<br /><br />
          体の奥まで緊張が張りつめる。それでも、心のどこかに微かな灯があった。<br />
          ――長い訓練を共に耐え抜いた仲間がいる。<br />
          この四人なら、きっと切り抜けられる。<br />
          そう信じて、私たちは互いの顔を見合わせる。<br /><br />
          そのとき、胸の奥をかすめた違和感。<br />
          見慣れたはずの三人の顔が、ほんのわずか――どこか、いつもと違うような気がする。<br />
          私はその感覚を振り払うように、深く息を吐いた。
        </p>
        <Changeicon />
      </div>
    </>
  );
}
