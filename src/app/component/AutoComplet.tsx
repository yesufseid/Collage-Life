'use client';
import { useState } from "react";
const option =["ehhow ","seyanm"]
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// export default function AutoComplet() {
//     const [show ,setShow]=useState(false)
//   return (
//     <div className="relative">
//         {show&&( 
//          <div className="w-56 h-auto p-5 z-10
//           bg-gray-800 text-white  flex 
//            flex-col gap-5 border-2 rounded-none justify-center
//            absolute top-10
//            ">
//              {option.map((o,index)=>{
//                 return(
//                     <ul className="text-xl font-serif capitalize hover:text-pink-600 cursor-pointer " key={index}>{o}</ul>
//                 )
//              })}
//          </div> )}
//          <input type="text"  className="w-56  mx-auto rounded-md h-10 border-2
//           border-green-600 focus:outline-none focus:ring focus:ring-violet-300 focus:border-0" />
//           <div className="absolute top-3 left-[185px] z-10 ">
//             {show?<IoIosArrowUp onClick={()=>setShow(false)} className="w-5 h-5 cursor-pointer"/>:
//             <IoIosArrowDown onClick={()=>setShow(true)}  className="w-5 h-5 cursor-pointer" />}
//           </div>
//     </div>
//   )
// }

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Option 1', 'Option 2'];

export default function ControllableStates() {
  const [value, setValue] = React.useState(options[0]);


  return (
    <div className="w-40">
      <Autocomplete
        value={value}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label="" />}
        fullWidth={true}
        sx={{
          color: 'success.dark',
        }}
      />
    </div>
  );
}