import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";
import { NavLink, Outlet } from 'react-router-dom';


function Navbar() {
  return (
    <>
    <div>
      <div className='flex h-16 bg-sky-500 text-blue-950 justify-evenly items-center z-20 fixed w-full  '>
      <div className=' text-3xl'>
        <SiFlipkart />
            </div>
        <ul className='flex gap-5  font-bold text-xl z-20'>
           <NavLink to="/" > <li>Home</li></NavLink>
           <NavLink to="Category"> <li>Category</li></NavLink>
            
        </ul>


   <NavLink to="CartHandler" className="z-20">   <div className='text-3xl' > 
       
       <FaShoppingCart/>
       </div></NavLink> 

       <div className='absolute  w-full flex justify-end mr-20'> 
       <NavLink to="Auth"> <button  className='border-2  bg-white p-1 rounded px-3 hover:border-blue-600'>Login</button></NavLink>
       </div>
      </div>
 
    </div>
    <div>
    <Outlet/>
    </div>
    </>
  )
}

export default Navbar
