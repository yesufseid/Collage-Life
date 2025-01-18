 "use Cliant"
import Card from "./Card"
import SearcheInput from './searcheInput';
import { useState } from 'react';
import {GETSearchedocuments} from "../../lib/action"
import CircularProgress from '@mui/material/CircularProgress';



export default function Searche() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  // const [error,setError]=useState()
  const HandleChange=async(searche:string)=>{
     setLoading(true)
      const res=await GETSearchedocuments(searche)
      console.log(JSON.parse(res));
      
      if(res){
        setData(JSON.parse(res))
        setLoading(false)
      }else{
        throw new Error("error")
        console.log(res);
      }
  
  }
  return (
    <>
    <SearcheInput setSearche={HandleChange} />
    {loading?(<div className="h-full mt-32 md:w-[450px] w-screen flex justify-center items-center"><CircularProgress /></div>):
     <Card  searche={data} />}
    </>
  )
}
