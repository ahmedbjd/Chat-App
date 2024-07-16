import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className='flex items-center gap-2 px-1 mb-9'>
      <input type="text" name="search" id="search" placeholder='Search...' className='w-full py-2 px-5 bg-gray-900 rounded-full text-white' />
      <div className='h-full bg-sky-400 rounded-full p-2 border border-gray-900 hover:bg-sky-500'>
        <IoIosSearch className='text-2xl text-white' />
      </div>
    </div>
  )
}

export default Search
