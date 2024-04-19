import React from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiSolidSearch } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";

type Props={
    setShow?: React.Dispatch<React.SetStateAction<"Home" | "Search">>
    show?:"Home"|"Search"
}

export default function BottomNavbar({setShow,show}:Props) {
  return (
    <div className="flex justify-center gap-16 py-1 w-full border-t-2 rounded-t-md border-stone-800  bg-stone-950 fixed bottom-0 md:w-[400px]">
      {show!=="Home"?
       <GoHome onClick={()=>setShow("Home")} 
       className={`h-10 w-10 text-white`}/>:<GoHomeFill className={`h-10 w-10 text-white`} />}
       {show!=="Search"?
       <CiSearch onClick={()=>setShow("Search")} className={`w-10 h-10 text-white ` }/>:<BiSolidSearch className={`w-10 h-10 text-white ` } />}
    </div>
  ) 
}
