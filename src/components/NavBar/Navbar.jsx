import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

const [menu , setopenMenu] = useState(false)
const [showmenu , setshowoMenu] = useState(false)


  return (
   <>
   <nav className='  fixed top-0 left-0 w-full z-50  flex bg-[#204051] flex-wrap justify-between md:items-center text-white px-10 pt-4 md:px-20'>
   <span className='text-2xl font-bold mb-5 tracking-wide'>Portfolio X</span>
   <ul className={` ${menu ? "block" : "hidden" } mx-24  mt-4 mb-7 font-semibold md:mt-5 px-2 rounded-xl bg-opacity-30 md:border-none text-center md:static md:mx-0 md:flex gap-6`}>
   <a href="#Home">
   <li className='text-md transition-all duration-300 p-1 md:p-0'>Home</li>
   </a>

   <a href="#About">
   <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
   </a>
    

   <a href="#Project">
   <li className='text-md transition-all duration-300 p-1 md:p-0'>Project</li>
   </a>
    

   <a href="#Contact">
   <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
   </a>
    
    

   </ul>


   {showmenu ? (<IoMenu size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={()=>{
    {setopenMenu(!menu); setshowoMenu(!showmenu)}
   }} />  ) : <IoClose size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'/> }
   </nav>
   </>
  )
}

export default Navbar