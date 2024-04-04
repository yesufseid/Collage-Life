"use client"

import Card from "./component/Card"
import { useState,useEffect } from "react";
import Loading from "./loading"
import Error from"./error"

// import {collection, getDocs} from "firebase/firestore"
import {GETdocuments} from "./lib/action";


export default function Home() {
  // const colpost=collection(db,"Post")
  const [posts,setPost]=useState<any>()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
      const handle=async()=>{
      const res=await GETdocuments()
      if(res){
        setPost(JSON.parse(res))
        setLoading(false)
      }else{
        console.log(res);
      }
      }
      handle()
  },[])
  return (
        <div className="grid grid-cols-1  md:mx-auto my-5 justify-center  w-full  md:w-[400px]">
        {loading?<Loading />: posts?.map((p:any,index)=>{ 
          return <Card  key={index} post={p} />
        })

      }
        </div>
  );
}
