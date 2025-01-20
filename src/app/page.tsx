"use client"
import MediaCard from "./component/Card"
import { useEffect,useState } from "react"
import { GetGraduates } from "./lib"
import Navbar from "./component/Navbar"

export default function Page() {
  const [graduates,setGraduates]=useState<[]>()
  useEffect(()=>{
    const Handler=async()=>{
     try {
       const posts =await GetGraduates()
       console.log(posts);
       
        setGraduates(posts)
     } catch (error) {
       console.log();
       
     }
    }
    Handler()
   },[])
  return (
    <>
    <Navbar />
    <div className="w-full md:w-96 mx-auto">
            {graduates&&graduates.map((p:{quate:string,name:string,photos:[]})=>{
              return <MediaCard key={p.name} quate={p.quate} name={p.name} photos={p.photos} />
            })}
    </div>
    </>
  )
}
