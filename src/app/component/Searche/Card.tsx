import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Img from "../../../../public/1.jpg"
import { FaRegImages } from "react-icons/fa";

export default function Card() {
  return (
     <div className=' relative  hover:scale-105 cursor-pointer '>
       <Image src={Img} width={125} height={150} alt='image'>
       </Image>
       <FaRegImages className='w-6 h-6 absolute -top-1 right-1 shadow-2xl text-stone-700 stroke-gray-950' />
     </div>
);
}

