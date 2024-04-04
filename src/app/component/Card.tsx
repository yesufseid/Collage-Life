 "use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {createTheme } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from "react";

 
var settings = {
  dots:true,
  infinite:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const theme=createTheme({
  palette:{
    primary:{
      main:"#44403c"
    }
  }
})

type dataProps ={
  name:string
  bache:number
  types:string
  quate:string
  department:string
}

type postProps={
 id:string
 data:dataProps
 img:[]
}
type CardProps ={
 post:postProps
}

export default function MediaCard({post}:CardProps) {
  // const [post,setPost]=useState<any>()

  // useEffect(()=>{
  //     const handle=async()=>{
  //     const res=await GETdocuments()
  //     setPost(JSON.parse(res))
  //     }
  //     handle()
  // },[])




  return (
    <Card sx={{boxShadow: 0 , width:'100%'}}>
       <Typography gutterBottom variant="h6" component="div" sx={{my:0, ml:2, mb:2}}>
       <RiAccountCircleLine  className='text-2xl cursor-pointer hover:scale-105 w-10 h-10 inline border-2
        border-pink-600 rounded-full '  />  {post.data.name}
        </Typography>
       <div>
       <Slider {...settings}>
       {post.img?.map((h,index)=>{
        return (
        <div key={index}>
          <Image  className='  md:96 h-[500px] blur-none brightness-100 contrast-100
           saturate-100' width={400} height={400} src={h} alt='photo' />
        </div>)
       })}
    </Slider>
    </div>
    {
      true&&(
        <>
      <CardActions sx={{gap:20}}>
        <div className='flex gap-2 justify-center items-center text-black font-semibold'>
       <CiHeart className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-black' />
       <span>5</span>
       <BiLike  className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-balck' />
       <span>5</span>
       </div>
       <FiSend className='text-2xl cursor-pointer hover:scale-105 w-10 h-10  ' />
       
      </CardActions>
      <CardContent sx={{m:0,p:0}} >
      <Typography gutterBottom  component="div" sx={{my:0,ml:2}}>
          {post.data.quate}
        </Typography>
      </CardContent>
      </>
        )
      }
    </Card>
  );
}