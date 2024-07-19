import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='flex items-center gap-2 px-1 mb-9'>
          <input type="text" name="search" id="search" placeholder='Search...' 
             className='w-full py-2 px-5 bg-gray-900 rounded-full text-white'
             value={search}
             onChange={(e) => setSearch(e.target.value)}
           />
    </div>
  )
}

export default Search
