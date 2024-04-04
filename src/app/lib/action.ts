"use server"


import db from "./index"
import {collection, getDocs,addDoc} from "firebase/firestore"


const GETdocuments=async()=>{
    try {
   const colpost=collection(db,"Post")
    const res=await getDocs(colpost)
    if(res.docs){
        const data=res.docs.map((doc)=>({...doc.data(),id:doc.id})) 
        return JSON.stringify(data)
    }else{
        return JSON.stringify(false)
    }
    } catch (error) {
       return  JSON.stringify(false)
    }
}
const Createdocuments=async(data:string)=>{
    try {
   const colpost=collection(db,"Pos")
    const res=await addDoc(colpost,JSON.parse(data))
    return  true
    } catch (error) {
       throw new Error(error)  
    }
}





export {Createdocuments,GETdocuments}