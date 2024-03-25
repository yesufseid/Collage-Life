"use client"

import AutoComplete from "./component/AutoComplet"
import Card from "./component/Card"
import { useState,useEffect } from "react";
import db from "./firebase-config"
import {collection, getDocs} from "firebase/firestore"


type CardProps ={
  img?:string
  name?:string
  bache?:number
  types?:"days"|"graduation"
  date?:number
  quate?:string
  department?:string
}
export default function Home() {
  const cool=collection(db,"Post")
  const [posts,setPost]=useState([{}])

  useEffect(()=>{
    const getData=async()=>{
        const res=await getDocs(cool)
        const data=res.docs.map((doc)=>({...doc.data(),id:doc.id}))
        setPost(data)  
          
    }
    getData()
  },[])
  return (
    <main>
      <div  className="w-full flex justify-center items-center  gap-5 my-3 ">
        <input type="text" className="w-[600px] mx-3  rounded-full h-10 border-2
         border-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:border-0" />
        {/* <AutoComplete /> */}
        </div>
        <div className="grid md:grid-cols-3 md:mx-10 my-10 justify-center md:w-fit  w-full md:gap-10">
        {posts?.map((post:CardProps)=>{
          return <Card  name={post.name}  quate={post.quate} bache={post.bache} department={post.department} date={post.date} />
        })}
        </div>
    </main>
  );
}
