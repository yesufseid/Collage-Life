 "use client"
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';;;
import { RiAccountCircleLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';




type CardProps ={
   name:string
   photos:[]
   quate:string
}

export default function MediaCard({name,photos,quate}:CardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
   
var settings = {
  dots:true,
  infinite:false,
  arrows:false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  afterChange: (index: number) => setCurrentIndex(index),
};

  return (
    <>
       <Typography gutterBottom variant="h6" component="div" sx={{my:0, ml:2, mb:1,fontFamily:'Poppins'}} >
       <RiAccountCircleLine  className='text-2xl cursor-pointer hover:scale-105 w-8 h-8 inline border-2
        border-pink-600 rounded-full '  />{name}
        </Typography>
       <div className='relative'>
       <Slider {...settings}>
       {photos.map((h:{url:string},index)=>{
        return (
        <div key={index}>
           <img
    className="absolute inset-0 w-full h-full object-cover blur-md"
    src="/placeholder.jpg" // Replace with a low-resolution placeholder image
    alt="Placeholder"
    aria-hidden="true"
  />
          <img
  className="w-full h-[350px]  object-cover blur-none brightness-100 contrast-100 saturate-100"
  src={h.url}
  alt="Photo"
  loading="lazy"
/>
        </div>)
       })}
    </Slider>
    <p className="absolute top-4 right-4 w-fit bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded-lg z-10">
        {currentIndex + 1} / {photos.length}
      </p>
    </div>
      <CardContent sx={{m:0,p:0}} >
      <Typography gutterBottom  component="div" sx={{my:0,ml:2}}>
        <p className='font-sans py-4'>{quate}</p>
        </Typography>
      </CardContent>
      </>
  );
}