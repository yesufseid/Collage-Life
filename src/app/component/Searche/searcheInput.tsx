"use Client"

import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function SearcheInput() {
    const [searche,setSearche]=useState("")
  return (
    <div>
    <TextField  onChange={(e)=>setSearche(e.target.value)} fullWidth size="small" color="success" className='rounded-full' autoFocus={true} autoComplete={"true"} id="fullWidth" />
    </div>
  )
}
