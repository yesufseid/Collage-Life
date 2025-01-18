
import React from 'react';
import TextField from '@mui/material/TextField';

type Props={
  setSearche:(searche:string)=>Promise<void>
}


export default function SearcheInput({setSearche}:Props) {
   
  return (
    <div>
    <TextField  onChange={(e)=>setSearche(e.target.value.toString())}  fullWidth size="small"
     color="success" className='rounded-full' autoFocus={true} autoComplete={"true"} id="fullWidth" />
    </div>
  )
}
