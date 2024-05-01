"use server"


import db from "./index"
import {collection, getDocs,addDoc} from "firebase/firestore"
import { doc, updateDoc } from "firebase/firestore";


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
   const colpost=collection(db,"Post")
    const res=await addDoc(colpost,JSON.parse(data))
    return  true
    } catch (error) {
       throw new Error(error)  
    }
}

const Updatedocument=async(id:string,data:{like?:number,heart?:number})=>{
    const taskDocRef = doc(db, 'Post', id)
    try{
      await updateDoc(taskDocRef, {
        data
      })
    } catch (err) {
      alert(err)
    }

}



export {Createdocuments,GETdocuments,Updatedocument}