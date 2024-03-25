"use client"
import { FaImage } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState,useEffect } from "react";
import db from "../../firebase-config"
import {collection, getDocs} from "firebase/firestore"


const options = ['days', 'graguation'];
export default function page() {
  const cool=collection(db,"Post")
  const [value, setValue] =useState(options[1]);
  const [user,setUser]=useState([{}])
  useEffect(()=>{
    const getData=async()=>{
        const res=await getDocs(cool)
        const data=res.docs.map((doc)=>({...doc.data(),id:doc.id}))
        setUser(data)    
    }
    getData()
  },[])
 
  console.log(user);
  
  return (
    <div className=" md:mx-auto mt-20 md:w-[800px] mx-3 md:h-96 h-full md:border-2 md:border-t-8 border-green-400 rounded-t-2xl grid md:grid-cols-2 ">
           <div className="w-80 md:h-full h-80 rounded-md flex flex-col justify-center items-center ">
           <label htmlFor="files"> <FaImage className="h-20 w-20 text-green-600" /></label>
           <input type="file" id="files" name="files" multiple className="invisible" />
           </div>

           <div className="flex justify-start mt-3 flex-col gap-2 mr-2">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="name " 
           />
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="bache" 
           />
        <div className="w-40">
      <Autocomplete
        value={value}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label="" />}
        fullWidth={true}
        sx={{
          color: 'success.dark',
        }}
      />
    </div>
    {value==="graguation"&&(
          <TextField
          required
          id="outlined-required"
          defaultValue="quate" 
          multiline
          rows={4}
           />
           )}
           </div>
    </div>
  )
}
