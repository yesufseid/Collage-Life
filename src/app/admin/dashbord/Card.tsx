"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import imag from "../../../../public/1.jpg"
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { hasCustomGetInitialProps } from 'next/dist/build/utils';

 
var settings = {
  dots:false,
  infinite:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};



type CardProps ={
  url:[]
}

export default function MediaCard({url}:CardProps) {
  return (
    <Card sx={{boxShadow: 0 , width:'100%'}}>
       <div>
       <Slider {...settings}>
       {url?.map((h,index)=>{
        return (
        <div key={index} className='relative'>
          <p className='absolute top-3 left-[350px] font-mono font-light text-sm text-white bg-stone-600 rounded-lg px-2 py-1' >{`${index+1}/${3}`}</p>
          <Image  className='h-96' src={h} alt='photo' width={400} height={400}  />
        </div>)
       })}
    </Slider>
    </div>
    </Card>
  );
}