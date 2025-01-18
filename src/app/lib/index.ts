"use server"
import { gql, request } from 'graphql-request'



const graphqlAPI="https://eu-west-2.cdn.hygraph.com/content/cm60lwbi6029j07v0ac10jr30/master"
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
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const results:any=await request(graphqlAPI,query,[{name:"ስፖርት",slug:"sport"}])
   return results.postsConnection.edges
 } catch (error) {
   console.log(error);
   return {error:true} 
 }
}