import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate();

    return (
    <div className='w-[28vw] hover:cursor-pointer p-6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <h1 className='text-4xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-600'>ChatApp</span></h1>

      <form className='flex flex-col text-gray-200 space-y-2'>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" id="fullname" placeholder='BOUDJEDIENE Ahmed' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />

         <label htmlFor="username">Username</label>
         <input type="text" name="username" id="username" placeholder='Enter Username' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />

         <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" placeholder='Enter Password' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />

         <label htmlFor="confirmPassword">Confirm Password</label>
         <input type="confirmPassword" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' />

         <div className="flex gap-4 items-center py-3">
      <label htmlFor="male" className="flex items-center gap-2 mr-5">
        Male
        <input type="radio" name="gender" id="male" className="hidden peer" />
        <span className="h-6 w-6 hover:cursor-pointer bg-transparent border border-gray-300 rounded-lg flex items-center justify-center peer-checked:bg-blue-500">
        </span>
      </label>

      <label htmlFor="female" className="flex items-center gap-2">
        Female
        <input type="radio" name="gender" id="female" className="hidden peer" />
        <span className="h-6 w-6 hover:cursor-pointer bg-transparent border border-gray-300 rounded-lg flex items-center justify-center peer-checked:bg-blue-500">
        </span>
      </label>
    </div>
         
          <a onClick={() => navigate('/login')} className='hover:text-blue-600 hover:underline pb-2'>Already have an account?</a>
          <button type="submit" className='text-center bg-gray-800 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-gray-900'>Login</button>
      </form>
    </div>
  )
}

export default SignUp
