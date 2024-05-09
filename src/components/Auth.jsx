import React from 'react'
import { NavLink } from 'react-router-dom'
import login from '../components/login.jpg'

function Auth() {
  return (
    <div className='h-screen px-32 bg-sky-200 w-full'>
    <div className='bg-purple-700 w-dvh h-dvh px-8 py-20'>
        <div className='w-full flex h-full rounded shadow-md shadow-orange-200   mt-8 p-6 bg-white '>
            <div className='h-full w-96 ml-8 p-5 drop-shadow-2xl shadow-2xl '>
                <h2 className='text-2xl font-bold text-center text-purple-900 underline '>Login</h2>
                 <div className='flex flex-col m-4 '>
                 <h1>Email Address</h1>
                 <input type="email" name='email' autoComplete='off' placeholder='email' className='mt-4 w-52 border-2 rounded border-purple-400 p-2'  />
                 <h1 className='mt-4'>Password</h1>
                 <input type="password" placeholder='password' name='password' className=' mt-4 w-52 border-2 rounded border-purple-400 p-2' />
                 </div>
                 <div>
                    <p>Doesn't have an account <NavLink to="/SignUp"><span className=' font-bold text-purple-800 underline cursor-pointer'>SignUp</span></NavLink>  </p>
                    <button className='px-3 p-1 text-white flex justify-center items-center w-full mt-5 bg-purple-700 rounded'>Login</button>
                 </div>
            </div>
                   <div className='w-full h-full mr-20 '>
                <img src={login} alt="none" className='h-full w-full' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Auth
