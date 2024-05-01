import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { useState,useEffect } from 'react';
import { Updatedocument } from '../lib/action';

type CardProps={
   id:string
   lik:number
   hear:number
}
export default function cardBottom({id,lik,hear}:CardProps) {
  const localstorage=window.localStorage
    const [hearts,setHearts]=useState([])
    const [heart,setHeart]=useState(0)
    const [likes,setLikes]=useState([])
    const [like,setLike]=useState(0)
useEffect(()=>{
 const hearts=localstorage.getItem("hearts")
 const likes= localStorage.getItem("likes")
 setHearts(JSON.parse(hearts))
 setLikes(JSON.parse(likes))
},[])
useEffect(()=>{
 handleupdate()
  localstorage.setItem("hearts",JSON.stringify(hearts))
  localstorage.setItem("likes",JSON.stringify(likes))
},[heart,likes])
const handleupdate=async()=>{
  const data={
    heart:heart,
    like:like
  }
  try {
    const res=await Updatedocument(id,data)
    console.log(res);
     
  } catch (error) {
    console.log(error);
    
  }
}



    const handleHeart=()=>{
        setHearts((prev)=>prev.includes(id)?prev.filter((p)=>p!==id):[...prev,id]) 
        setHeart((prev)=>hearts.includes(id)?prev-1:prev+1)
  }
  const handleLike=()=>{
    setLikes((prev)=>prev.includes(id)?prev.filter((p)=>p!==id):[...prev,id]) 
    setLike((prev)=>likes.includes(id)?prev-1:prev+1)
  }
  return (
    <div className='flex gap-2 justify-center items-center text-black font-semibold'>
          {hearts.includes(id)?<FcLike onClick={()=>handleHeart()}  className='text-2xl  
       cursor-pointer hover:scale-105 w-10 h-10 text-pink-800' />:<CiHeart  onClick={()=>handleHeart()}  className='text-2xl  
       cursor-pointer hover:scale-105 w-10 h-10 text-black' />}
       <span>{heart===0?hear:heart}</span>
        { likes.includes(id)?<AiFillLike onClick={()=>handleLike()} className='text-2xl  cursor-pointer hover:scale-105 
        w-10 h-10 text-pink-800' />:<BiLike onClick={()=>handleLike()}   className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-balck' />
        } 
       <span>{like===0?lik:like}</span>
       </div>
  )
}
