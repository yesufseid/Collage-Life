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
        <div className="grid grid-cols-1  md:mx-auto my-5 justify-center  w-full  md:w-[400px]">
        {posts?.map((p:any,index)=>{ 
          return <Card  key={index} post={p} />
        })}
        </div>
  );
}
