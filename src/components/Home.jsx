import React from 'react'
import CardHandleer from './CardHandleer'
import Card from './Card'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <div className=' bg-slate-200 overflow-auto '>
      {/* <CardHandleer/> */}

      <CardHandleer/>
   
      
    
    </div>
  )
}

export default Home
