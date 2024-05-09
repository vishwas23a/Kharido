import React from 'react'
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';


function Card(props) {
    const {id,title,description ,price,brand,category,thumbnail,stock,remove,pass}=props;
    
  return (
    <div >

<div className=" flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-32">
  <div className="relative object-contain mx-4 -mt-6 h-40 overflow-hidden rounded-xl  shadow-lg shadow-blue-gray-500/40 ">
    <img src={thumbnail} alt="" className='h-full w-full' />
  </div>
  <div className="p-6 flex justify-between">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {title}.. {id}
    </h5>
    <h3>
        {stock}
    </h3>
    
    </div>
    <div className='px-6'>

        <p>Price:-{price}</p>
    </div>

    <div className='px-6 '>
    <p className
    ="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    {description}hello
    </p>
  </div>
  <div className='p-6 '>
   <h3> Category:- {category}</h3>
   <h3>Brand:- {brand}</h3>
  </div>
  <div className="p-4 pt-0 flex gap-3 items-center ">
   <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">
      Add to cart
    </button>
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Buy Now
    </button>
    <div className='text-2xl hover:cursor-pointer ' onClick={remove} >
        
        <MdDelete/>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Card
