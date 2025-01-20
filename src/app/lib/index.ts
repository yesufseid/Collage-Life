"use server"
import { gql, request } from 'graphql-request'



const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "hellow"
// "https://eu-west-2.cdn.hygraph.com/content/cm60lwbi6029j07v0ac10jr30/master"
export const GetGraduates=async()=>{
    const query=gql`
    query MyQuery {
         graduates {
    name
    id
    createdAt
    photos {
      url
    }
    quate
  }
 }`
 try {
   const results:any=await request(graphqlAPI,query)
   return results.graduates
 } catch (error) {
   console.log(error);
   return {error:true} 
 }
}
export const GetSearch=async(searchTerm:string)=>{
  const query=gql`
  query MyQuery {
       graduates ( where: {OR:[ {name_contains:"${searchTerm}"},{ quate_contains:"${searchTerm}"}, {department: {name_contains:"${searchTerm}"}}]}) {
  name
  id
  createdAt
  department{
  name
  }
  photos {
    url
  }
  quate
}
}`
try {
 const results:any=await request(graphqlAPI,query,{searchTerm})
 return results.graduates
} catch (error) {
 console.log(error);
 return {error:true} 
}
}
