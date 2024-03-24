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
    <div className="hero">
      <div className="flex items-center gap-5 ml-2 md:ml-10 pt-3">
      <PiStudentThin className="w-14 h-14  text-green-600" /> 
      <Typography gutterBottom variant="h6" component="div" sx={{color:theme.palette.primary.main,fontWeight:'bold'}}>
          Collage Life
      </Typography>
        </div>     
    </div>
  )
}
