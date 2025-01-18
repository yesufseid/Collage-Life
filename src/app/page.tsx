"use client"
import MediaCard from "./component/Card"
import { useEffect } from "react"
import { GetGraduates } from "./lib"

export default function page() {
  useEffect(()=>{
    const Handler=async()=>{
     try {
       const posts =await GetGraduates()
        
     } catch (error) {
       console.log();
      
       
     }
    }
    Handler()
   },[])
  return (
    <div>
      {/* <MediaCard /> */}
    </div>
  )
}
