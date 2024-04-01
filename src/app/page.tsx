"use client"

import Card from "./component/Card"
import { useState,useEffect } from "react";

// import {collection, getDocs} from "firebase/firestore"
import {GETdocuments} from "./lib/action";


export default function Home() {
  // const colpost=collection(db,"Post")
  const [posts,setPost]=useState<any>()

  useEffect(()=>{
    console.log("client");
    
      const handle=async()=>{
      const res=await GETdocuments()
      setPost(JSON.parse(res))
      }
      handle()
  },[])
  return (
    <main>
      <div  className="w-full flex justify-center items-center  gap-5 my-3 ">
        <input type="text" className="w-[600px] mx-3  rounded-full h-10 border-2
         border-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:border-0" />
        {/* <AutoComplete /> */}
        </div>
        <div className="grid md:grid-cols-3 md:mx-10 my-10 justify-center md:w-fit  w-full md:gap-10">
        {posts?.map((p:any,index)=>{ 
          return <Card  key={index} post={p} />
        })}
        </div>
    </main>
  );
}
