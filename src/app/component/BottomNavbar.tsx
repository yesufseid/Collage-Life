"use client"
import React from 'react'
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiPopcorn } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNavbar() {
  const pathname=usePathname()
  return (
    <div className='flex justify-center'>
    <div className="flex justify-between gap-5 py-1 w-full border-t-2 rounded-t-md border-slate-300 bg-white fixed bottom-0 md:w-[400px]">
       <Link href={"/"}  ><GoHome className={`h-10 w-10 cursor-pointer ml-5 ${pathname==="/"&&"text-red-600"}`}/></Link> 
       <Link href={"/search"}  ><CiSearch className={`h-10 w-10 cursor-pointer ml-5 ${pathname==="/search"&&"text-red-600"}`}/></Link> 
       <Link href={"/event"}  ><PiPopcorn className={`h-10 w-10 cursor-pointer ml-5 ${pathname==="/event"&&"text-red-600"}`}/></Link> 
    </div>
    </div>
  ) 
}
