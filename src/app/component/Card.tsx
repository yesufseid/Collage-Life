 "use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import imag from "../../../public/1.jpg"
import Image from 'next/image';
import { createTheme } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
 
var settings = {
  dots:false,
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

export default function MediaCard() {
  return (
    <Card sx={{boxShadow: 0 , width:'100%'}}>
      <Typography gutterBottom variant="h6" component="div" sx={{my:0, ml:2}}>
          name
        </Typography>
       <div>
       <Slider {...settings}>
       {[1,2,3]?.map((h,index)=>{
        return (
        <div className='relative'>
          <p className='absolute top-3 left-72 font-mono font-semibold' >{`${index+1}/${3}`}</p>
          <Image src={imag} alt='photo' />
        </div>)
       })}
    </Slider>
    </div>
      <CardActions sx={{gap:20}}>
        <div className='flex gap-2 justify-center items-center text-black font-semibold'>
       <CiHeart className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-black' />
       <span>5</span>
       <BiLike  className='text-2xl  cursor-pointer hover:scale-105 w-10 h-10 text-balck' />
       <span>5</span>
       </div>
       <PiShareFatLight className='text-2xl cursor-pointer hover:scale-105 w-10 h-10  ' />
       
      </CardActions>
      <CardContent sx={{m:0,p:0}} >
      <Typography gutterBottom  component="div" sx={{my:0,ml:2}}>
          name this is graet
        </Typography>
      </CardContent>
    </Card>
  );
}