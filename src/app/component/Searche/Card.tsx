
import Image from 'next/image';
import Img from "../../../../public/1.jpg"
import { FaRegImages } from "react-icons/fa";


type Props={
  searche:any[]
}

export default function Card({searche}:Props) {



  return (
    <div className="w-full h-auto grid grid-cols-3 gap-y-2 mx-1 my-2">
      {searche.map((S)=>{
        return(
        <div className=' relative  hover:scale-105 cursor-pointer '>
       <Image src={S.img[0]} width={125} height={150} alt='image'>
       </Image>
       <FaRegImages className='w-6 h-6 absolute -top-1 right-1 shadow-2xl text-stone-700 stroke-gray-950' />
       </div>
        )
      })}
     </div>
);
}

