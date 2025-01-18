 "use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {createTheme } from '@mui/material';
import { RiAccountCircleLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardBottom from './cardBottom';
import img1 from "../../public/1.jpg"
import img2 from "../../public/s1.jpg"



 
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
type statusprops={
  like:number
  heart:number
}

type postProps={
 id:string
 data:dataProps
 img:[]
 status:statusprops
}
type CardProps ={
 post:postProps
}
const post=[img1,img2]
export default function MediaCard() {

  return (
    <Card sx={{boxShadow: 0 , width:'100%'}}>
       <Typography gutterBottom variant="h6" component="div" sx={{my:0, ml:2, mb:1,fontFamily:'Poppins'}} >
       <RiAccountCircleLine  className='text-2xl cursor-pointer hover:scale-105 w-8 h-8 inline border-2
        border-pink-600 rounded-full '  />seid yesuf
        </Typography>
       <div>
       <Slider {...settings}>
       {post.map((h,index)=>{
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
      {/* <CardActions sx={{gap:20}}>
       <CardBottom id={post.id} lik={post.status.like} hear={post.status.heart} />
       <FiSend className='text-2xl cursor-pointer hover:scale-105 w-10 h-10  ' />
       
      </CardActions> */}
      <CardContent sx={{m:0,p:0}} >
      <Typography gutterBottom  component="div" sx={{my:0,ml:2}}>
        <p className='font-sans'>qwertyuiopasdfghjklzxcvbn</p>
        </Typography>
      </CardContent>
      </>
        )
      }
    </Card>
  );
}