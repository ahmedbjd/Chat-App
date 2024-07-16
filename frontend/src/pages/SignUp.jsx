import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useSignup from '../hooks/useSignup';

const SignUp = () => {

    const { signup } = useSignup();
    const { error, loading } = useAuth();
    const [formData, setFormData] = useState({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      gender: ''
    })

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }))
    };

    const handleChangeCheckbox = (e) => {
      if (e.target.checked){
      setFormData((prev) => ({
        ...prev,
        gender: e.target.name
      }))
    }else{
      setFormData((prev) => ({
        ...prev,
        gender: ''
      }))
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(formData);
  }

    return (
    <div className='w-[600px] max-md:w-[95%] mx-4 hover:cursor-pointer p-6 bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <h1 className='text-4xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-600'>ChatApp</span></h1>

      <form className='flex flex-col text-gray-200 space-y-2 mt-5' onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input type="text" name="fullName" id="fullName" placeholder='BOUDJEDIENE Ahmed' 
          className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg'
          value={formData.fullName}
          onChange={handleChange}
          />

         <label htmlFor="username">Username</label>
         <input type="text" name="username" id="username" placeholder='Enter Username' 
            className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' 
            value={formData.username}
            onChange={handleChange}
            />

         <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" placeholder='Enter Password' 
            className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg' 
            value={formData.password}
            onChange={handleChange}
            />

         <label htmlFor="confirmPassword">Confirm Password</label>
         <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' 
            className='bg-gray-800 text-gray-400 py-2 px-5 rounded-lg'
            value={formData.confirmPassword}
            onChange={handleChange}
            />

         <div className="flex gap-4 items-center py-3">
      <label htmlFor="male" className="flex items-center gap-2 mr-5">
        Male
        <input type="checkbox" name="male" id="male" className="hidden peer" 
            checked={ formData.gender === "male" }
            onChange={handleChangeCheckbox}
        />
        <span className="h-6 w-6 hover:cursor-pointer bg-transparent border border-gray-300 rounded-lg flex items-center justify-center peer-checked:bg-blue-500">
        </span>
      </label>

      <label htmlFor="female" className="flex items-center gap-2">
        Female
        <input type='checkbox' name="female" id="female" className="hidden peer" 
            checked={ formData.gender === "female" }
            onChange={handleChangeCheckbox}
        />
        <span className="h-6 w-6 hover:cursor-pointer bg-transparent border border-gray-300 rounded-lg flex items-center justify-center peer-checked:bg-blue-500">
        </span>
      </label>
    </div>

    {error ? (
          <p className='text-red-500 underline'>{error}!</p>
         ) : ''}

    {loading ? (
         <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
            <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
            <span class="sr-only">Loading...</span>
        </div>
    ) : ''}
         
          <Link to={'/login'} className='hover:text-blue-600 hover:underline pb-2'>Already have an account?</Link>
          <button type="submit" className='text-center bg-gray-800 text-gray-400 p-2 rounded-lg hover:text-white hover:bg-gray-900'>Login</button>
      </form>
    </div>
  )
}

export default SignUp
