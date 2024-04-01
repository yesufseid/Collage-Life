"use server"


import db from "./index"
import {collection, getDocs,addDoc} from "firebase/firestore"


const GETdocuments=async()=>{
    try {
   const colpost=collection(db,"Post")
    const res=await getDocs(colpost)
    const data=res.docs.map((doc)=>({...doc.data(),id:doc.id})) 
    return JSON.stringify(data)
    } catch (error) {
       throw new Error(error)  
    }
}
const Createdocuments=async(data:string)=>{
    try {
   const colpost=collection(db,"Post")
    const res=await addDoc(colpost,JSON.parse(data))
    console.log(res);
    return  true
    } catch (error) {
       throw new Error(error)  
    }
}





export {Createdocuments,GETdocuments}