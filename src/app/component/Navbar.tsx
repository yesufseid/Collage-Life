"use client"

import { PiStudentThin } from "react-icons/pi";
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';


const theme=createTheme({
  palette:{
    primary:{
      main:"#16a34a"
    }
  }
})
export default function Navbar() {
  return ( 
    <div className="hero   w-full  z-10  ">
      <div className="flex items-center md:w-[400px] gap-5 md:mx-auto pt-3 ml-5 title ">
      {/* <PiStudentThin className="w-14 h-14 ml-2  text-black" />  */}
      <Typography gutterBottom variant="h6" component="div" sx={{fontWeight:'bold'}}>
          Collage Life
      </Typography>
        </div>     
    </div>
  )
}
