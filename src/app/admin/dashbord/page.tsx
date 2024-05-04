"use client"
import { FaImage } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState} from "react";
import {Timestamp} from "firebase/firestore"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"
import {Createdocuments} from "@/app/lib/action"



const options = ['days', 'graguation'];
export default function Page() {
  const [value, setValue] =useState(options[1]);
  const [image,setImage]=useState<any>([])
  // const [data,setData]=useState({})
  const [loadig,setLoading]=useState(false)

  const fileUplode=async(e:any)=>{
    const file=e.target.files
   for(let i=0 ;i<file.length;i++ ){
    const data=await ConvertToBase64(file[i])
      setImage((prev:[])=>[...prev,data])
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
  
const HandleReset=()=>{
  reset()
  setImage([])
}



    const addData=async(data:{})=>{
      const satau={
        like:0,
        heart:0
      }
      if(!data) return null
      setLoading(true)
        try {
           const file ={img:image,createdAt:Timestamp.now(),data,status:satau}
           const datas=JSON.stringify(file)
            const ress =await Createdocuments(datas)
            setLoading(false)
          HandleReset()
            // const datas=res.docs.map((doc)=>({...doc.data(),id:doc.id}))  
         
        } catch (error) {
          throw new Error(error)
          
        } 
    }
    
  
 
 const onSubmit=(data:any)=>{
      // setData(data) 
      addData(data)
 }
  
  return (
    
       <div className=" md:mx-auto mt-10 md:w-[800px] relative mx-3 md:h-auto h-auto md:border-2 md:border-t-8
        border-green-400 rounded-t-2xl grid md:grid-cols-2 "> 
           <button onClick={()=>HandleReset()} disabled={loadig} className={`py-2 px-3 border-2
            rounded-lg absolute -top-14 font-serif text-xl 
           right-4 border-green-600
            hover:bg-pink-600`}>reset</button>
           <div className="w-80 md:h-full h-80 rounded-md flex flex-col justify-center items-center ml-3">
           {image.length!==0?<Card url={image} />:(
          <>
           <label htmlFor="files"> <FaImage className="h-20 cursor-pointer w-20 text-green-600" /></label>
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
          label="name"
          defaultValue="" 
          autoComplete="false" 
          {...register("name")}
           />
            <TextField
          required
          id="outlined-required"
          label="bache"
          defaultValue="" 
          {...register("bache")}
           />
          <TextField
          required
          id="outlined-required"
          label="department"
          defaultValue=""
          {...register("department")} 
           />
        <div className="w-40">
      <Autocomplete
        value={value}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label="" onChange={()=>console.log("bnm")}  {...register("type")}  />}
        fullWidth={true}
        sx={{
          color: 'success.dark',
        }}
      />
    </div>
    {value==="graguation"&&(
          <TextField
          id="outlined-required"
          defaultValue="" 
          placeholder="quate"
          multiline
          rows={4}
          {...register("quate")} 
           />
           )}
           <button disabled={image.length===0||loadig} 
           className="py-1 px-2 border-2 border-green-600 rounded-lg mb-3 hover:bg-green-600" type="submit">Save</button>
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