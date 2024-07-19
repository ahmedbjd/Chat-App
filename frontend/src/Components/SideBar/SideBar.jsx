import React, { useState } from 'react';
import Search from './Search';
import LogOut from './LogOut';
import Conversations from './Conversations';

const SideBar = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='w-1/3 flex flex-col border-r-2 border-gray-500 px-3 py-4'>
       <Search search={search} setSearch={setSearch} />
       <Conversations search={search} />
       <LogOut />
    </div>
  )
}

export default SideBar
