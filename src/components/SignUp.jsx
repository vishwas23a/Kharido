import React, { useState } from 'react'
import login1 from '../components/login.jpg'
import { NavLink } from 'react-router-dom'

function SignUp() {

const [user,setUser]=useState({
  name:"",
  email:"",
  password:"",
  number:""
});

const getData=(e)=>{
  let name,value;
  name=e.target.name;
  value=e.target.value;

setUser({...user, [name]:value});
}

const postData=(e)=>{
  
}
  return (
    <div className='h-screen  px-32 bg-sky-200 w-full'>
    <div className='bg-purple-700 w-dvh h-dvh px-8 py-20'>
        <div className='w-full flex h-full rounded shadow-md shadow-orange-200   mt-8 p-6 bg-white '>
          <form method='post'>
            <div className='h-full w-84 ml-8  drop-shadow-2xl shadow-2xl '>
                <h2 className='text-2xl font-bold text-center text-purple-900 underline '>SignUp</h2>
                 <div className='flex flex-col w-80 items-center h-full '>
                 <h1 className='mt-1'>Full Name</h1>
                 <input type="text" placeholder='Name' value={user.name} onChange={getData} autoComplete='off' name='name' required className=' mt-2 w-52 border-2 rounded border-purple-400 p-1' />
                 <h1>Email Address</h1>
                 <input type="email" required name='email' value={user.email} onChange={getData} autoComplete='off' placeholder='email' className='mt-2 w-52 border-2 rounded border-purple-400 p-1'  />
                 <h1 className='mt-1'>Password</h1>
                 <input type="password" required placeholder='password' onChange={getData} value={user.password} name='password' className=' mt-2 w-52 border-2 rounded border-purple-400 p-1' />
                 <h1 className='mt-1'>Phone No.</h1>
                 <input type="number" required placeholder='Phone No.' onChange={getData} value={user.number} autoComplete='off' name='number' className=' mt-2 w-52 border-2 rounded border-purple-400 p-1' />
                 <div className='flex gap-3'>
                    <button onClick={postData} className='px-3 p-1 mt-4 text-white flex justify-center items-center bg-purple-700 rounded'>SignUp</button>
                  <NavLink to="/Auth">  <h2 className='px-3 p-1 mt-4 text-purple-600  font-bold flex justify-center items-center  rounded'>Login {'->'}</h2></NavLink> 
                 </div> 
                </div>
            </div>
            </form>
          <div className='w-full h-full mr-20 '>
                <img src={login1} alt="none" className='h-full w-full ' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
