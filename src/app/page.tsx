import Image from 'next/image';
import Icon from '@/public/elaconnecta.png';
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className=" h-[100dvh] flex items-center justify-center flex-col text-white text-center leading-relaxed p-14 font-bold gap-5 text-xl
    bg-gradient-to-b from-[#664f8d] to-[#d34a58]"
    >
      <div className='w-full flex justify-center'>
        <Image src={Icon} alt="Icone" height={300} width={300} />
      </div>

      <div>
        Olá, tudo bem?
        <br />
        Meu nome é Maria,
        <br />
        sou a Inteligência Artificial da ElaConecta.
        <br />

      </div>

      <div className='flex flex-col gap-4'>
        Se precisar de ajuda, fale comigo no botão “Falar com Maria”
        <Button>Acessar</Button>
      </div>
    </div>
  );
}
