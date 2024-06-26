import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className='w-[28vw] hover:cursor-pointer p-6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <h1 className='text-4xl font-semibold text-center text-gray-300'>Login <span className='text-blue-600'>ChatApp</span></h1>

      <form className='flex flex-col text-gray-200 space-y-2'>
         <label htmlFor="username">Username</label>
         <input type="text" name="username" id="username" placeholder='Enter Username' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />

         <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" placeholder='Enter Password' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />
         
          <a onClick={() => navigate('/signup')} className='hover:text-blue-600 hover:underline py-2'>Don't have an account?</a>
          <button type="submit" className='text-center bg-gray-800 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-gray-900'>Login</button>
      </form>
    </div>
  )
}

export default Login
