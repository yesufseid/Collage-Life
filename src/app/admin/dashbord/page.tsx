"use client"
import { FaImage } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState,useEffect } from "react";
import db from "../../firebase-config"
import {collection,addDoc,Timestamp} from "firebase/firestore"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"




const options = ['days', 'graguation'];
export default function page() {
  const colpost=collection(db,"Post")
  const colimg=collection(db,"Images")
  const [value, setValue] =useState(options[1]);
  const [image,setimage]=useState<any>([])
  const [data,setData]=useState()

  const fileUplode=async(e:any)=>{
    const file=e.target.files
    const datas=Object.values(file)

   for(let i=0 ;i<file.length;i++ ){
    const data=await ConvertToBase64(file[i])
      setimage((prev:[])=>[...prev,data])
    }      
}
  const schema = yup.object().shape({
    name: yup.string().required(),
   bache:yup.string().required(),
   type: yup.string().required(),
   department:yup.string().required(),
   quate:yup.string(),
  });

  const {register,handleSubmit,formState: { errors }, reset} = useForm({resolver: yupResolver(schema),});

    const addData=async()=>{
        try {
          if(data){
            const res =await  addDoc(colpost,{img:image,createdAt:Timestamp.now(),data})
          }  
        } catch (error) {
          console.log(error);
          
        }  
    }
    
  
 
 const onSubmit=(data:any)=>{
      setData(data) 
      addData()
 }
  
  return (
    
       <div className=" md:mx-auto mt-20 md:w-[800px] mx-3 md:h-auto h-auto md:border-2 md:border-t-8 border-green-400 rounded-t-2xl grid md:grid-cols-2 "> 
           <div className="w-80 md:h-full h-80 rounded-md flex flex-col justify-center items-center ml-3">
           {image.length!==0?<Card url={image} />:(
          <>
           <label htmlFor="files"> <FaImage className="h-20 w-20 text-green-600" /></label>
           <input 
            onChange={e=>fileUplode(e)}
           type="file" id="files" name="files" multiple className="invisible" />
           </>
           )}
           </div>
           <form onSubmit={handleSubmit(onSubmit)} >
           <div className="flex justify-start mt-3 flex-col gap-2 mr-2">
           <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="name " 
          autoComplete="false" 
          {...register("name")}
           />
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="bache" 
          {...register("bache")}
           />
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="department"
          {...register("department")} 
           />
        <div className="w-40">
      <Autocomplete
        value={value}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label=""    {...register("type")}  />}
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
          {...register("quate")} 
           />
           )}
           <button disabled={image.length===0} className="py-1 px-2 border-2 border-green-600 rounded-lg mb-3 hover:bg-green-600" type="submit">Save</button>
           </div>
           </form>
    </div>
  )
}

function ConvertToBase64(file:any){
  return new Promise((resolve, reject) =>{
     const fileReader=new FileReader()
     fileReader.readAsDataURL(file)
     fileReader.onload=()=>{
      resolve(fileReader.result)
     }
     fileReader.onerror=(error)=>{
      reject(error)
     }
  })
}