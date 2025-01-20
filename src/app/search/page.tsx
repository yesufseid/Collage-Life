"use client"
import AutocompleteInput from "../component/Autocomplete"
import { useState,useEffect } from "react"
import { GetSearch } from "../lib"
import Card from "./Card"
export default function Page() {
  const [searchText,setSearchText]=useState(null)
   const [graduates,setGraduates]=useState<[]>()
    useEffect(()=>{
      const Handler=async()=>{
       try {
         const posts=searchText && await GetSearch(searchText)
          setGraduates(posts)
       } catch (error) {
         console.log();
         
       }
      }
      Handler()
     },[searchText])
  return (
    <div className="md:mx-40">
          <AutocompleteInput setSearchText={setSearchText}  />
          <div className="grid md:grid-cols-3 grid-cols-1 mx-2">
          {graduates&&graduates.map((g:{name:string,photos:{url:string}[],department:{name:string}})=><Card key={g.name}  name={g.name} department={g.department.name} url={g.photos[0].url}  />)}
          </div>
    </div>
  )
}
