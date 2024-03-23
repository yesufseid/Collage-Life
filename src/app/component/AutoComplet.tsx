'use client';
import { useState } from "react";
const option =["ehhow ","seyanm"]
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function AutoComplet() {
    const [show ,setShow]=useState(false)
  return (
    <div className="relative">
        {show&&( 
         <div className="w-56 h-auto p-5 z-10
          bg-gray-800 text-white  flex 
           flex-col gap-5 border-2 rounded-none justify-center
           absolute top-10
           ">
             {option.map((o,index)=>{
                return(
                    <ul className="text-xl font-serif capitalize hover:text-pink-600 cursor-pointer " key={index}>{o}</ul>
                )
             })}
         </div> )}
         <input type="text"  className="w-56  mx-auto rounded-md h-10 border-2
          border-green-600 focus:outline-none focus:ring focus:ring-violet-300 focus:border-0" />
          <div className="absolute top-3 left-[185px] z-10 bg-slate-400 hover:bg-white" onClick={()=>alert("fghjk")}>
            {show?<IoIosArrowUp onClick={()=>setShow(false)} className="w-5 h-5 cursor-pointer"/>:<IoIosArrowDown  className="w-5 h-5 cursor-pointer" />}
          </div>
    </div>
  )
}
