"use client"

export default function Card({name,url,department}:{name:string,url:string,department:string}) {
  return (
    <div className="w-full  py-2 bg-transparent flex md:flex-col gap-3 items-center">
       {[0].map((h)=>{
        return (
        <div key={h}>
           <img
    className="absolute inset-0 w-full h-full object-cover blur-md"
    src="/placeholder.jpg" // Replace with a low-resolution placeholder image
    alt="Placeholder"
    aria-hidden="true"
  />
          <img
  className="w-20 h-20 md:w-full md:h-full rounded-full md:rounded-md   object-cover blur-none brightness-100 contrast-100 saturate-100"
  src={url}
  alt="Photo"
  loading="lazy"
/>
        </div>)
       })}
       <div>
       <p>{name}</p>
       <p>{department}</p>
       </div>
    </div>
  )
}
