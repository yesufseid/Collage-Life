"use client"
import { FaBell, FaUserCircle } from "react-icons/fa";
import { createTheme } from '@mui/material';


export default function Navbar() {
  return ( 
    <nav className="md:mx-40  bg-gray-100 shadow-md p-4 flex items-center justify-between">
    {/* Logo Section */}
    <div className="hero text-xl font-bold font-serif text-gray-800">
    Collage Life
    </div>

    {/* Icon Section */}
    <div className="flex items-center space-x-6 text-gray-700 text-lg">
      <FaBell className="cursor-pointer hover:text-gray-900" />
      <FaUserCircle className="cursor-pointer hover:text-gray-900" />
    </div>
  </nav>
    
  )
}
